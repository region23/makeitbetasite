// water.js — polar water mesh conforming to the slab outline, Gerstner swell + ripples,
// depth-based color, breaking foam, shore wash/drain, sun glint
import * as THREE from 'three';
import { CFG, SLAB_RMAX, WAVES, RIPPLE_FROM, GLSL_NOISE } from './world.js';

const VERT = /* glsl */`
uniform float uTime;
uniform sampler2D uTerr;
uniform float uExtent;
uniform float uRmax;
uniform vec2 uWaveDir[7];
uniform vec4 uWaveA[7];   // k, omega, amp, Q
uniform vec3 uWaveEnv[7]; // envAmt, envFreq, envPhase

varying vec3 vWorld;
varying vec3 vN;
varying float vJ;
varying float vShelt;
varying float vOpen;
varying float vSurfY;

void main(){
  vec2 xz = position.xz;
  vec2 uvw = xz / uExtent * 0.5 + 0.5;
  vec4 t4 = texture2D(uTerr, clamp(uvw, vec2(0.002), vec2(0.998)));
  float terrH = t4.r;
  float shelt = t4.g;
  float depth0 = max(-terrH, 0.0);
  float shore = smoothstep(0.0, 0.85, depth0);
  float bound = 1.0 - smoothstep(uRmax - 1.4, uRmax - 0.25, length(xz));
  float open = 1.0 - shelt;

  vec3 disp = vec3(0.0);
  vec3 dpx = vec3(0.0);
  vec3 dpz = vec3(0.0);
  for (int i = 0; i < 7; i++) {
    vec2 dir = uWaveDir[i];
    float k = uWaveA[i].x, om = uWaveA[i].y, amp = uWaveA[i].z, q = uWaveA[i].w;
    float envA = uWaveEnv[i].x, envF = uWaveEnv[i].y, envP = uWaveEnv[i].z;
    float isR = step(3.5, float(i));
    float mask = mix(open * shore * bound, (0.4 + 0.6 * shelt) * shore * bound, isR);
    float aEff = amp * mask * (1.0 - envA + envA * sin(uTime * envF + envP));
    float ph = k * dot(dir, xz) - om * uTime;
    float s = sin(ph), c = cos(ph);
    float qa = q * aEff;
    disp += vec3(dir.x * qa * c, aEff * s, dir.y * qa * c);
    float kqs = k * qa * s;
    dpx += vec3(-kqs * dir.x * dir.x, k * aEff * dir.x * c, -kqs * dir.x * dir.y);
    dpz += vec3(-kqs * dir.x * dir.y, k * aEff * dir.y * c, -kqs * dir.y * dir.y);
  }
  vec3 Tx = vec3(1.0 + dpx.x, dpx.y, dpx.z);
  vec3 Tz = vec3(dpz.x, dpz.y, 1.0 + dpz.z);
  vJ = Tx.x * Tz.z - Tx.z * Tz.x; // horizontal jacobian (folded crests -> low)
  vec3 wp = position + disp;
  wp.y = max(wp.y, terrH + 0.05); // keep the surface above the seabed (thin wash over shelves)
  vN = normalize(cross(Tz, Tx));
  vWorld = wp;
  vSurfY = wp.y;
  vShelt = shelt;
  vOpen = open;
  gl_Position = projectionMatrix * viewMatrix * vec4(wp, 1.0);
}
`;

const FRAG = /* glsl */`
uniform float uTime;
uniform vec3 uSunDir, uSunCol;
uniform vec3 uDeep, uMid, uTurq, uShal, uFoam;
uniform vec3 uSkyHor, uSkyZen, uRefl;
uniform sampler2D uTerr;
uniform float uExtent;

varying vec3 vWorld;
varying vec3 vN;
varying float vJ;
varying float vShelt;
varying float vOpen;
varying float vSurfY;

${GLSL_NOISE}

void main(){
  vec2 uvw = vWorld.xz / uExtent * 0.5 + 0.5;
  vec4 t4 = texture2D(uTerr, clamp(uvw, vec2(0.002), vec2(0.998)));
  float terrH = t4.r;
  #ifdef DEBUG_TERR
  float dbgDepth = max(vSurfY - terrH, 0.0);
  float dbgAlpha = mix(0.30, 0.93, smoothstep(0.05, 2.4, dbgDepth));
  gl_FragColor = vec4(dbgAlpha, dbgAlpha, dbgAlpha, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  return;
  #endif
  float depth = max(vSurfY - terrH, 0.0);
  float shelter = vShelt;
  float open = vOpen;

  vec3 V = normalize(cameraPosition - vWorld);
  vec3 N = normalize(vN);
  float ndv = clamp(dot(N, V), 0.0, 1.0);

  // depth-graded color: deep blue -> turquoise -> transparent shallows
  vec3 col = uDeep;
  col = mix(col, uMid, smoothstep(1.2, 3.6, depth));
  col = mix(col, uTurq, smoothstep(2.8, 1.0, depth));
  col = mix(col, uShal, smoothstep(0.75, 0.12, depth));

  // restrained sky reflection (cool pale blue — never cream, even at grazing angles)
  float F = 0.028 + 0.972 * pow(1.0 - ndv, 5.0);
  vec3 skyRef = mix(uRefl, uSkyHor, 0.22);
  col = mix(col, skyRef, F * 0.45);

  // micro sparkle
  float n1 = vnoise(vWorld.xz * 5.1 + uTime * 0.9);
  float n2 = vnoise(vWorld.xz * 5.1 + 7.3 - uTime * 0.7);
  N = normalize(N + vec3(n1 - 0.5, 0.0, n2 - 0.5) * 0.22);

  // sun specular
  vec3 H = normalize(V + uSunDir);
  float ndh = clamp(dot(N, H), 0.0, 1.0);
  float glit = 0.55 + 0.9 * vnoise(vWorld.xz * 7.7 + uTime * 1.4);
  float spec = pow(ndh, 240.0) * 2.4 * glit + pow(ndh, 48.0) * 0.16;
  col += uSunCol * spec;

  // light through wave crests
  vec3 sunFlat = normalize(uSunDir * vec3(1.0, 0.0, 1.0));
  float sss = pow(clamp(dot(V, -sunFlat), 0.0, 1.0), 3.0);
  col += uTurq * sss * 0.22 * open * smoothstep(0.1, 0.9, vSurfY) * (1.0 - smoothstep(2.6, 4.5, depth));

  // ---- foam ----
  float fb1 = fbm2(vWorld.xz * 0.9 - uTime * 0.30);
  float fb2 = fbm2(vWorld.xz * 2.3 + uTime * 0.22 + 4.7);
  float texel = vnoise(vWorld.xz * 13.0);

  // breaking crests (exposed side, shoaling water)
  float shoal = smoothstep(4.4, 0.7, depth);
  float crest = smoothstep(0.88, 0.52, vJ) * shoal * open;
  crest *= smoothstep(0.10, 0.38, depth);
  crest *= smoothstep(0.30, 0.62, fb1 * 0.75 + texel * 0.5);
  // sparse far whitecaps
  float caps = smoothstep(0.52, 0.20, vJ) * smoothstep(2.2, 4.4, depth) * open
             * smoothstep(0.45, 0.8, fb2) * 0.85;

  // shore wash that advances and drains (low shelves wash further)
  float shelf = smoothstep(-1.3, -0.35, terrH) * (1.0 - smoothstep(-0.05, 0.45, terrH));
  float wash = 0.5 + 1.1 * shelf;
  float band = smoothstep(0.45 * wash + 0.06, 0.02, depth);
  float pulse = 0.5 + 0.5 * sin(uTime * 1.05 - depth * (4.5 + 2.5 * wash) + fb1 * 3.0);
  pulse = smoothstep(0.30, 0.85, pulse);
  float shoreF = band * pulse * (0.45 + 0.45 * fb2);
  shoreF += shelf * smoothstep(0.9, 0.15, depth) * 0.22 * smoothstep(0.4, 0.9, fb1);

  // breaker lines pulsing along the shelf edge (reef-break arcs)
  float shelfEdge = smoothstep(0.6, 0.08, abs(depth - 1.15)) * open;
  float breakLine = shelfEdge * pulse * smoothstep(0.38, 0.7, fb2) * smoothstep(0.35, 0.8, fb1);

  float foam = clamp(crest * 1.35 + caps + shoreF + breakLine * 0.55, 0.0, 1.0);

  // the thin clamped sheet that drapes over shore rocks dries out quickly
  float dry = smoothstep(0.12, 0.75, terrH);
  foam *= 1.0 - 0.8 * dry;

  // turquoise rim where break meets clear water
  float rim = smoothstep(0.30, 0.05, abs(depth - 0.32)) * crest;
  col += uTurq * clamp(rim, 0.0, 0.5) * 0.4;

  vec3 foamCol = uFoam * (0.82 + 0.18 * clamp(dot(N, uSunDir), 0.0, 1.0));
  foamCol = mix(foamCol, foamCol * vec3(0.88, 0.94, 1.0), shelter * 0.3);
  col = mix(col, foamCol, foam);

  float alpha = mix(0.30, 0.93, smoothstep(0.05, 2.4, depth));
  alpha *= 1.0 - 0.45 * shelter * smoothstep(2.0, 0.25, depth);
  alpha *= 1.0 - 0.85 * dry;
  alpha = mix(alpha, 1.0, foam);
  alpha = clamp(alpha, 0.05, 1.0);

  // gentle caustic shimmer in the sheltered shallows
  float ca = shelter * smoothstep(1.7, 0.25, depth);
  ca *= 0.5 + 0.5 * fbm2(vWorld.xz * 3.3 + vec2(uTime * 0.5, -uTime * 0.42));
  col += uShal * ca * 0.14;

  gl_FragColor = vec4(col, alpha);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;

export function buildWater(terrTex) {
  const SEC = 200, RING = 88;
  const pos = [];
  const idx = [];
  for (let j = 0; j <= RING; j++) {
    const f = j / RING;
    for (let i = 0; i <= SEC; i++) {
      const th = i / SEC * Math.PI * 2;
      const cos = Math.cos(th), sin = Math.sin(th);
      const rEdge = SLAB_RMAX - 0.05; // tuck the water edge against the skirt wall
      const r = 1.2 + (rEdge - 1.2) * f;
      pos.push(cos * r, 0, sin * r);
    }
  }
  const W = SEC + 1;
  for (let j = 0; j < RING; j++) {
    for (let i = 0; i < SEC; i++) {
      const a = j * W + i, b = a + 1, c = a + W, d = c + 1;
      idx.push(a, c, b, b, c, d);
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setIndex(idx);

  const uniforms = {
    uTime: { value: 0 },
    uTerr: { value: terrTex },
    uExtent: { value: CFG.extent },
    uRmax: { value: SLAB_RMAX },
    uWaveDir: { value: WAVES.map(w => new THREE.Vector2(w.dx, w.dz)) },
    uWaveA: { value: WAVES.map(w => new THREE.Vector4(w.k, w.om, w.amp, w.Q)) },
    uWaveEnv: { value: WAVES.map(w => new THREE.Vector3(w.envA, w.envF, w.envP)) },
    uSunDir: { value: new THREE.Vector3(0, 1, 0) },
    uSunCol: { value: new THREE.Color(0xffd9a8) },
    uDeep: { value: new THREE.Color(0x0c406e) },
    uMid: { value: new THREE.Color(0x14779e) },
    uTurq: { value: new THREE.Color(0x2ab3a3) },
    uShal: { value: new THREE.Color(0x7fdcc9) },
    uFoam: { value: new THREE.Color(0xf6fbff) },
    uSkyHor: { value: new THREE.Color(0xecdfc9) },
    uSkyZen: { value: new THREE.Color(0xb6cfdf) },
    uRefl: { value: new THREE.Color(0xbcd3e0) },
  };
  const mat = new THREE.ShaderMaterial({
    uniforms, vertexShader: VERT, fragmentShader: FRAG,
    transparent: true, depthWrite: true, side: THREE.DoubleSide,
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.frustumCulled = false;
  mesh.renderOrder = 10;
  mesh.name = 'water';
  return mesh;
}
