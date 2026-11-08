import * as THREE from 'three';
import { LAYOUT } from './config.js';
import { terrainHeight } from './terrain.js';

// ---------------------------------------------------------------------------
// Black Sea water. Custom shader:
//  - Gerstner waves in the vertex stage, amplitude varying by region
//    (rough open west sea, sloshing strait, calm lee beach).
//  - Depth-based colour (transparent turquoise shallows -> deep blue) sampled
//    from a CPU-built depth map of the seabed.
//  - Fresnel sky reflection, sun sparkle, and breaking-foam near crests/shore.
// ---------------------------------------------------------------------------

const B = LAYOUT.bounds;
const W0 = { x: B.xMin, z: B.zMin };
const WSIZE = { x: B.xMax - B.xMin, z: B.zMax - B.zMin };
const CENTER = { x: (B.xMin + B.xMax) / 2, z: (B.zMin + B.zMax) / 2 };

// CPU depth map: R = depth (0 on land, 0..1 below), G = distance to coast
// (0 at shoreline, clamped at 12 m). Encoded as RGBA8 (filterable everywhere).
function buildDepthMap() {
  const N = 256;
  const data = new Uint8Array(N * N * 4);
  const maxD = 12;
  const INF = 1e6;
  const dist = new Float64Array(N * N);
  for (let j = 0; j < N; j++) {
    const z = W0.z + (j / (N - 1)) * WSIZE.z;
    for (let i = 0; i < N; i++) {
      const x = W0.x + (i / (N - 1)) * WSIZE.x;
      const h = terrainHeight(x, z);
      const d = Math.max(0, LAYOUT.waterY - h);
      const v = Math.round(Math.min(d, maxD) / maxD * 255);
      const k = (j * N + i) * 4;
      data[k] = v; data[k + 1] = 0; data[k + 2] = v; data[k + 3] = 255;
      dist[j * N + i] = d > 0.05 ? INF : 0;
    }
  }
  // two-pass chamfer distance transform: distance from every water cell to land
  const cell = WSIZE.x / (N - 1); // ~0.41 m (non-uniform vs z, acceptable)
  for (let j = 0; j < N; j++) {
    for (let i = 0; i < N; i++) {
      const k = j * N + i;
      let v = dist[k];
      if (i > 0) v = Math.min(v, dist[k - 1] + cell);
      if (j > 0) v = Math.min(v, dist[k - N] + cell);
      if (i > 0 && j > 0) v = Math.min(v, dist[k - N - 1] + cell * 1.4);
      dist[k] = v;
    }
  }
  for (let j = N - 1; j >= 0; j--) {
    for (let i = N - 1; i >= 0; i--) {
      const k = j * N + i;
      let v = dist[k];
      if (i < N - 1) v = Math.min(v, dist[k + 1] + cell);
      if (j < N - 1) v = Math.min(v, dist[k + N] + cell);
      if (i < N - 1 && j < N - 1) v = Math.min(v, dist[k + N + 1] + cell * 1.4);
      dist[k] = v;
    }
  }
  for (let k = 0; k < N * N; k++) {
    const v = Math.round(Math.min(dist[k], maxD) / maxD * 255);
    data[k * 4 + 1] = v;
  }
  const tex = new THREE.DataTexture(data, N, N, THREE.RGBAFormat, THREE.UnsignedByteType);
  tex.needsUpdate = true;
  tex.magFilter = THREE.LinearFilter;
  tex.minFilter = THREE.LinearFilter;
  tex.generateMipmaps = false;
  tex.wrapS = tex.wrapT = THREE.ClampToEdgeWrapping;
  tex.userData = { data, N, W0, WSIZE, maxD };
  return tex;
}

const vertexShader = /* glsl */`
uniform float uTime;
uniform vec2 uCenter;   // world x,z of the plane centre
varying vec3 vWorldPos;
varying float vElev;
varying vec3 vNormal;

vec3 gerstner(vec2 p, vec2 dir, float amp, float freq, float speed, float t,
              inout vec3 tangent, inout vec3 binormal) {
  vec2 d = normalize(dir);
  float ph = dot(d, p) * freq + t * speed;
  float s = sin(ph), c = cos(ph);
  float steep = amp * freq; // consistent slope for the normal
  tangent  += vec3(-d.x * d.x * steep * s, d.x * steep * c, -d.y * d.x * steep * s);
  binormal += vec3(-d.x * d.y * steep * s, d.y * steep * c, -d.y * d.y * steep * s);
  return vec3(d.x * amp * c, amp * s, d.y * amp * c);
}

// 1 = open west sea, ~0.2 = calm lee beach; strait is sloshier.
float regionRough(vec2 p) {
  float west = smoothstep(-6.0, -24.0, p.x);
  float cape = smoothstep(0.0, 10.0, p.x);
  float base = mix(0.35, 1.0, west);
  base = mix(base, 0.22, cape);
  return base;
}

void main() {
  vec2 worldXZ = uCenter + vec2(position.x, -position.y);
  float rough = regionRough(worldXZ);
  float t = uTime;

  vec3 tangent = vec3(1.0, 0.0, 0.0);
  vec3 binormal = vec3(0.0, 0.0, 1.0);
  vec3 disp = vec3(0.0);

  // wave sets: slow envelopes make groups of swells arrive and fade
  float env1 = 0.72 + 0.28 * sin(t * 0.21);
  float env2 = 0.72 + 0.28 * sin(t * 0.16 + 2.1);

  // open-sea swells rolling in from the west (meters, Black Sea scale)
  disp += gerstner(worldXZ, vec2(1.0, 0.15), 0.30 * rough * env1, 0.42, 1.10, t, tangent, binormal);
  disp += gerstner(worldXZ, vec2(0.9, -0.50), 0.18 * rough * env2, 0.62, 1.45, t, tangent, binormal);
  disp += gerstner(worldXZ, vec2(0.3, 1.00), 0.10 * rough, 1.05, 1.85, t, tangent, binormal);
  disp += gerstner(worldXZ, vec2(-0.4, 0.70), 0.06 * rough, 1.85, 2.35, t, tangent, binormal);
  disp += gerstner(worldXZ, vec2(1.0, 0.40), 0.04 * rough, 3.40, 3.00, t, tangent, binormal);

  // Strait sloshing: a short surge, only inside the narrow corridor.
  float strait = smoothstep(7.0, 2.0, abs(worldXZ.x + 3.0));
  disp.y += 0.14 * strait * sin(t * 2.1);
  disp.x += 0.08 * strait * sin(t * 1.7 + worldXZ.y);

  vec3 world = vec3(worldXZ.x + disp.x, disp.y, worldXZ.y + disp.z);
  vec3 n = normalize(cross(binormal, tangent));

  vWorldPos = world;
  vElev = disp.y;
  vNormal = n;
  gl_Position = projectionMatrix * viewMatrix * vec4(world, 1.0);
}
`;

const fragmentShader = /* glsl */`
precision highp float;
uniform float uTime;
uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform sampler2D uDepth;
uniform vec2 uBoundsMin;
uniform vec2 uBoundsSize;
varying vec3 vWorldPos;
varying float vElev;
varying vec3 vNormal;

float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
float noise(vec2 p){
  vec2 i = floor(p), f = fract(p);
  float a = hash(i), b = hash(i + vec2(1,0)), c = hash(i + vec2(0,1)), d = hash(i + vec2(1,1));
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(a,b,u.x), mix(c,d,u.x), u.y);
}
float fbm(vec2 p){
  float s = 0.0, a = 0.5;
  for(int i=0;i<4;i++){ s += a * noise(p); p *= 2.03; a *= 0.5; }
  return s;
}

void main() {
  vec4 dmap = texture2D(uDepth, (vWorldPos.xz - uBoundsMin) / uBoundsSize);
  float depth = dmap.r;             // 0..1 (0 on land)
  float coastD = dmap.g * 12.0;     // metres to the nearest coastline

  // base colour by depth: clear green shallows -> deep blue
  vec3 shallow = vec3(0.45, 0.68, 0.62);
  vec3 mid     = vec3(0.07, 0.30, 0.42);
  vec3 deep    = vec3(0.020, 0.09, 0.21);
  float d = clamp(depth * 10.0, 0.0, 1.0);
  vec3 base = mix(shallow, mid, smoothstep(0.0, 0.40, d));
  base = mix(base, deep, smoothstep(0.30, 0.90, d));
  base = mix(vec3(0.66, 0.76, 0.68), base, smoothstep(0.0, 0.08, d));
  // subtle swell pattern so deep water keeps texture
  base *= 0.92 + 0.16 * fbm(vWorldPos.xz * 0.35 + vec2(uTime * 0.18, uTime * 0.12));

  // surface normal: Gerstner + fine ripple (screen-space derivative)
  vec3 N = normalize(vNormal);
  float rip = fbm(vWorldPos.xz * 3.0 + vec2(uTime * 0.6, uTime * 0.4)) * 0.5
            + fbm(vWorldPos.xz * 7.0 - vec2(uTime * 0.8, uTime * 0.5)) * 0.25;
  N = normalize(N + vec3(dFdx(rip) * 0.6, 0.0, dFdy(rip) * 0.6));

  vec3 V = normalize(cameraPosition - vWorldPos);
  float fres = pow(1.0 - max(dot(V, N), 0.0), 5.0);

  vec3 reflDir = reflect(-V, N);
  float warmth = clamp(0.5 - reflDir.x, 0.0, 1.0);
  vec3 sky = mix(vec3(0.55, 0.68, 0.82), vec3(0.98, 0.82, 0.58), warmth * 0.8);
  vec3 col = mix(base * (1.0 - fres * 0.35), sky, fres * 0.75);

  // sun sparkle / glitter path toward the low western sun
  vec3 L = normalize(uSunDir);
  vec3 H = normalize(L + V);
  float spec = pow(max(dot(N, H), 0.0), 240.0);
  float glit = fbm(vWorldPos.xz * 9.0 + vec2(uTime * 0.3, 0.0));
  col += uSunColor * spec * (0.6 + 0.8 * glit);
  col += uSunColor * pow(max(dot(N, H), 0.0), 80.0) * 0.14 * glit;

  // foam
  float crest = smoothstep(0.22, 0.50, vElev);
  float shore = smoothstep(1.6, 0.05, depth * 10.0);
  float coast = smoothstep(4.0, 0.4, coastD);        // band along cliffs/shoreline
  float env1 = 0.72 + 0.28 * sin(uTime * 0.21);      // wave-set envelope
  float exposure = smoothstep(4.0, -18.0, vWorldPos.x);
  float slope = smoothstep(1.2, 4.0, abs(dFdx(depth * 10.0)) + abs(dFdy(depth * 10.0)));
  float foamN = fbm(vWorldPos.xz * 2.5 + vec2(uTime * 0.4, -uTime * 0.3));
  // surf breaking on exposed cliffs, gentle wash on the sheltered beach
  float coastFoam = coast * mix(0.10, 1.0, exposure) * (0.45 + 0.55 * env1);
  float foam = crest * exposure * (0.4 + 0.8 * foamN)
             + shore * (0.25 + 0.5 * foamN) * mix(0.5, 1.0, exposure)
             + coastFoam * (0.3 + 0.7 * foamN)
             + slope * exposure * 0.35 * foamN;
  foam = clamp(foam, 0.0, 1.0);
  float foamTex = smoothstep(0.42, 0.75, fbm(vWorldPos.xz * 6.0 + vec2(uTime * 0.5, uTime * 0.2)));
  foam *= 0.35 + 0.65 * foamTex;
  col = mix(col, vec3(0.96, 0.98, 0.97), foam * 0.9);

  // alpha: transparent shallows, opaque deep, opaque where foam
  float alpha = mix(0.985, 0.60, smoothstep(0.5, 0.0, depth * 10.0));
  alpha = max(alpha, foam * 0.85);
  gl_FragColor = vec4(col, clamp(alpha, 0.0, 1.0));
}
`;

export function buildWater() {
  const geo = new THREE.PlaneGeometry(WSIZE.x, WSIZE.z, 190, 140);
  const depthTex = buildDepthMap();

  const mat = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uCenter: { value: new THREE.Vector2(CENTER.x, CENTER.z) },
      uSunDir: { value: new THREE.Vector3(-0.72, 0.34, 0.30).normalize() },
      uSunColor: { value: new THREE.Color(1.0, 0.82, 0.58) },
      uDepth: { value: depthTex },
      uBoundsMin: { value: new THREE.Vector2(W0.x, W0.z) },
      uBoundsSize: { value: new THREE.Vector2(WSIZE.x, WSIZE.z) },
    },
    vertexShader,
    fragmentShader,
    transparent: true,
    side: THREE.DoubleSide,
    extensions: { derivatives: true },
  });

  const mesh = new THREE.Mesh(geo, mat);
  mesh.rotation.x = -Math.PI / 2;
  mesh.position.set(CENTER.x, LAYOUT.waterY, CENTER.z);
  mesh.renderOrder = 2;
  mesh.userData.depthTex = depthTex;
  mesh.userData.update = (t) => { mat.uniforms.uTime.value = t; };
  return mesh;
}
