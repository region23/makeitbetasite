/**
 * water.js — the ocean.
 *
 * A single continuous surface over the whole diorama: Gerstner swell whose
 * amplitude, wavelength and foam are driven by the seabed/shelter data texture
 * built in terrain.js, so the exposed coast breaks while the harbour stays
 * glassy.  The surface is opaque and samples a screen-space refraction pass,
 * which is what makes the shallows read as clear water over sand.
 */

import * as THREE from 'three';
import { waveGLSL, LAG_SCALE } from './waves.js';
import { NOISE_GLSL, SKY_GLSL } from './glsl.js';
import * as T from './theme.js';

/** grid half-span and vertex budget; spacing is compressed toward the piece */
const SPAN = 155;
const GRID = 300;
const COMPRESS = 0.12; // spacing near the origin relative to a uniform grid

/** non-uniform grid: dense around the island, coarse at the horizon */
export function makeWaterGeometry(grid = GRID) {
  const pos = new Float32Array((grid + 1) * (grid + 1) * 3);
  const idx = [];
  const f = (u) => Math.sign(u) * ((1 - COMPRESS) * Math.abs(u) ** 3 + COMPRESS * Math.abs(u));
  let p = 0;
  for (let j = 0; j <= grid; j++) {
    const v = (j / grid) * 2 - 1;
    const z = f(v) * SPAN;
    for (let i = 0; i <= grid; i++) {
      const u = (i / grid) * 2 - 1;
      pos[p++] = f(u) * SPAN;
      pos[p++] = 0;
      pos[p++] = z;
    }
  }
  for (let j = 0; j < grid; j++) {
    for (let i = 0; i < grid; i++) {
      const a = j * (grid + 1) + i;
      const b = a + 1;
      const c = a + (grid + 1);
      const d = c + 1;
      idx.push(a, c, b, b, c, d);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setIndex(idx);
  g.boundingSphere = new THREE.Sphere(new THREE.Vector3(0, 0, 0), SPAN * 1.6);
  // spacing of the innermost cells, used for the normal epsilon
  g.userData.eps = ((2 * SPAN) / grid) * COMPRESS * 6.5;
  return g;
}

export function makeSeaTexture(sea) {
  const tex = new THREE.DataTexture(sea.data, sea.size, sea.size, THREE.RGBAFormat, THREE.HalfFloatType);
  tex.minFilter = THREE.LinearFilter;
  tex.magFilter = THREE.LinearFilter;
  tex.wrapS = THREE.ClampToEdgeWrapping;
  tex.wrapT = THREE.ClampToEdgeWrapping;
  tex.generateMipmaps = false;
  tex.needsUpdate = true;
  return tex;
}

const VERT = /* glsl */ `
uniform float uTime;
uniform float uAmp;
uniform sampler2D uSea;
uniform float uSeaRange;
uniform float uLagScale;
uniform float uEps;

varying vec3 vWorld;
varying vec3 vNrm;
varying float vDepth;
varying float vCalm;
varying float vGround;
varying float vSand;
varying float vCrest;
varying float vViewZ;
varying vec4 vScreen;

${NOISE_GLSL}
${waveGLSL()}

vec4 seaAt(vec2 p) {
  return texture2D(uSea, p / (2.0 * uSeaRange) + 0.5);
}

vec3 dispAt(vec2 p, out vec4 s) {
  s = seaAt(p);
  return waveDisp(p, max(-s.r, 0.0), s.g, s.a * uLagScale);
}

void main() {
  vec2 p = position.xz;

  vec4 s0, sX, sZ;
  vec3 d0 = dispAt(p, s0);
  vec3 dX = dispAt(p + vec2(uEps, 0.0), sX);
  vec3 dZ = dispAt(p + vec2(0.0, uEps), sZ);

  vec3 P = vec3(p.x + d0.x, d0.y, p.y + d0.z);
  vec3 U = vec3(uEps + dX.x - d0.x, dX.y - d0.y, dX.z - d0.z);
  vec3 V = vec3(dZ.x - d0.x, dZ.y - d0.y, uEps + dZ.z - d0.z);
  vNrm = normalize(cross(V, U));

  // horizontal area ratio: < 1 on a crest, where the surface is compressing
  float jac = (U.x * V.z - V.x * U.z) / (uEps * uEps);
  float energy = (1.0 - s0.g) * smoothstep(-0.4, 0.8, max(-s0.r, 0.0));
  vCrest = clamp((0.94 - jac) * 1.55, 0.0, 1.0) * energy;

  vWorld = P;
  vDepth = max(-s0.r, 0.0);
  vGround = s0.r;
  vCalm = s0.g;
  vSand = s0.b;

  vec4 mv = modelViewMatrix * vec4(P, 1.0);
  vViewZ = -mv.z;
  vScreen = projectionMatrix * mv;
  gl_Position = vScreen;
}
`;

const FRAG = /* glsl */ `
precision highp float;

uniform float uTime;
uniform sampler2D uSea;
uniform float uSeaRange;
uniform sampler2D uRefract;
uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform vec3 uSkyTop;
uniform vec3 uSkyMid;
uniform vec3 uSkyLow;
uniform vec3 uSunGlow;
uniform vec3 uDeep;
uniform vec3 uMid;
uniform vec3 uShallow;
uniform vec3 uFoamColor;
uniform vec3 uFogColor;
uniform vec3 uSeaHaze;
uniform int uDebug; // 0 off, 1 depth, 2 foam, 3 veil, 4 refraction, 5 water body, 6 calm, 7 crest
uniform float uFogNear;
uniform float uFogFar;
uniform float uFoam;
uniform float uChop;

varying vec3 vWorld;
varying vec3 vNrm;
varying float vDepth;
varying float vCalm;
varying float vGround;
varying float vSand;
varying float vCrest;
varying float vViewZ;
varying vec4 vScreen;

${NOISE_GLSL}
${SKY_GLSL}

void main() {
  vec3 n = normalize(vNrm);
  vec3 v = normalize(cameraPosition - vWorld);
  float depth = vDepth;

  // ---------- refraction: screen-space grab with wobble ---------------
  vec2 suv = vScreen.xy / vScreen.w * 0.5 + 0.5;
  float shallowGlow = smoothstep(4.0, 0.25, depth);
  float distort = (0.0045 + 0.030 * shallowGlow) * (0.35 + 0.65 * (1.0 - vCalm));
  vec2 ruv = clamp(suv + n.xz * distort, vec2(0.0015), vec2(0.9985));
  vec3 refr = texture2D(uRefract, ruv).rgb;

  // ---------- absorption through the water column ---------------------
  vec3 sigma = vec3(0.52, 0.245, 0.135);
  vec3 tr = exp(-sigma * depth * 2.6);
  vec3 body = mix(uShallow, uMid, smoothstep(0.7, 3.0, depth));
  body = mix(body, uDeep, smoothstep(3.0, 11.0, depth));
  float veil = clamp(1.0 - tr.r, 0.0, 1.0);
  vec3 col = mix(refr * tr, body, veil);

  // ---------- sky reflection ------------------------------------------
  vec3 rr = reflect(-v, n);
  rr.y = abs(rr.y) + 0.004;
  vec3 sky = skyColor(rr);
  float fres = 0.022 + 0.978 * pow(clamp(1.0 - max(dot(n, v), 0.0), 0.0, 1.0), 5.0);
  // capped so the sea keeps its own colour instead of turning into pale sky
  col = mix(col, sky, clamp(fres, 0.0, 0.62));

  // ---------- sun: glitter plus transmission through crests -----------
  vec3 hv = normalize(v + uSunDir);
  float ndh = max(dot(n, hv), 0.0);
  float glitter = pow(ndh, 620.0) * 3.2 + pow(ndh, 36.0) * 0.10 + pow(ndh, 7.0) * 0.022;
  col += uSunColor * glitter * (0.55 + 0.45 * (1.0 - vCalm));
  float back = pow(max(dot(-v, uSunDir), 0.0), 3.5);
  col += uShallow * back * 0.55 * exp(-depth * 0.85) * (0.35 + vCrest * 1.4);

  // ---------- foam ----------------------------------------------------
  vec2 flow = vWorld.xz * 0.62 - vec2(0.0, uTime * 0.55);
  float grain = fbm(flow * 1.6) * 0.62 + fbm(flow * 4.3 + 12.7) * 0.38;
  float wisps = smoothstep(0.32, 0.86, grain);

  float energy = 1.0 - vCalm; // 1 on the open coast, ~0.1 in the harbour

  // shoreline wash: a sheet that runs up the shelf and drains back
  float shore = 1.0 - smoothstep(0.0, 1.05, depth);
  float wash = 0.5 + 0.5 * sin(uTime * 1.15 - vGround * 4.2 - 0.6);
  float wet = smoothstep(0.44, 0.88, wash);
  float swash = shore * wet * (0.16 + 0.84 * energy);

  // breakers over the reef: crests piling up in the surf zone
  float surf = smoothstep(2.6, 0.85, depth) * smoothstep(0.02, 0.6, depth) * energy;
  float breakers = vCrest * surf * 1.9;

  float f = breakers + swash * 1.15 + vCrest * 0.3 * energy;
  f = f * (0.32 + 0.85 * energy) * (0.45 + 1.25 * wisps) * uFoam;
  float foam = smoothstep(0.44, 1.12, f);

  // thin aerated layer over the wash zone — barely a trace in the harbour
  float film = swash * (0.12 + 0.34 * wisps) * uFoam * (1.0 - vCalm * 0.88);
  float foamAll = clamp(foam + film * (1.0 - foam), 0.0, 1.0);

  vec3 foamShade = uFoamColor * (0.72 + 0.42 * max(dot(n, uSunDir), 0.0) + 0.55 * back * 0.4);
  col = mix(col, foamShade, foamAll);

  // ---------- a last touch of sparkle on wet sand / shallow edges -----
  col += uShallow * 0.06 * vSand * exp(-depth * 1.6);

  // ---------- atmospheric haze ----------------------------------------
  // the sea fades to a cooler haze than the sky, so a line is still readable
  // where water meets air instead of the whole frame washing out
  float fg = smoothstep(uFogNear, uFogFar, vViewZ);
  col = mix(col, mix(uFogColor, uSeaHaze, 0.72), fg);

  if (uDebug == 1) gl_FragColor = vec4(vec3(clamp(depth / 6.0, 0.0, 1.0)), 1.0);
  else if (uDebug == 2) gl_FragColor = vec4(vec3(clamp(foamAll, 0.0, 1.0)), 1.0);
  else if (uDebug == 3) gl_FragColor = vec4(vec3(clamp(veil, 0.0, 1.0)), 1.0);
  else if (uDebug == 4) gl_FragColor = vec4(clamp(refr, 0.0, 1.0), 1.0);
  else if (uDebug == 5) gl_FragColor = vec4(clamp(body, 0.0, 1.0), 1.0);
  else if (uDebug == 6) gl_FragColor = vec4(vec3(clamp(vCalm, 0.0, 1.0)), 1.0);
  else if (uDebug == 7) gl_FragColor = vec4(vec3(clamp(vCrest, 0.0, 1.0)), 1.0);
  else gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;

/**
 * @param {object} o  { sea, seaTexture, waves }
 */
export function createWater({ sea, seaTexture }) {
  const geo = makeWaterGeometry();

  const uniforms = {
    uTime: { value: 0 },
    uAmp: { value: 1 },
    uSea: { value: seaTexture },
    uSeaRange: { value: sea.range },
    uLagScale: { value: LAG_SCALE },
    uEps: { value: Math.max(0.35, geo.userData.eps) },
    uRefract: { value: null },
    uSunDir: { value: T.SUN_DIR.clone() },
    uSunColor: { value: new THREE.Color(T.SUN_COLOR) },
    uSkyTop: { value: new THREE.Color(T.SKY_TOP) },
    uSkyMid: { value: new THREE.Color(T.SKY_MID) },
    uSkyLow: { value: new THREE.Color(T.SKY_LOW) },
    uSunGlow: { value: new THREE.Color(T.SUN_GLOW) },
    uDeep: { value: new THREE.Color(T.OCEAN_DEEP) },
    uMid: { value: new THREE.Color(T.OCEAN_MID) },
    uShallow: { value: new THREE.Color(T.OCEAN_SHALLOW) },
    uFoamColor: { value: new THREE.Color(T.FOAM_COLOR) },
    uFogColor: { value: new THREE.Color(T.FOG_COLOR) },
    uSeaHaze: { value: new THREE.Color(0x8fa9bd) },
    uDebug: { value: 0 },
    uFogNear: { value: T.FOG_NEAR },
    uFogFar: { value: T.FOG_FAR },
    uFoam: { value: 1 },
    uChop: { value: 1 },
  };

  const mat = new THREE.ShaderMaterial({
    uniforms,
    vertexShader: VERT,
    fragmentShader: FRAG,
    side: THREE.DoubleSide,
  });

  const mesh = new THREE.Mesh(geo, mat);
  mesh.frustumCulled = false;
  mesh.matrixAutoUpdate = false;
  mesh.updateMatrix();

  let rt = null;
  const size = new THREE.Vector2(1, 1);

  return {
    mesh,
    uniforms,
    /** refraction target follows the drawing buffer, a little smaller */
    resize(drawingBufferSize, pixelRatio) {
      size.copy(drawingBufferSize);
      const s = new THREE.Vector2(
        Math.max(2, Math.round(size.x * 0.8)),
        Math.max(2, Math.round(size.y * 0.8))
      );
      if (rt) rt.setSize(s.x, s.y);
      else {
        rt = new THREE.WebGLRenderTarget(s.x, s.y, {
          type: THREE.HalfFloatType,
          depthBuffer: true,
          samples: 0,
        });
        rt.texture.minFilter = THREE.LinearFilter;
        rt.texture.magFilter = THREE.LinearFilter;
        rt.texture.generateMipmaps = false;
      }
      uniforms.uRefract.value = rt.texture;
    },
    /** render everything but the water so it can be seen *through* the sea */
    renderRefraction(renderer, scene, camera) {
      if (!rt) return;
      const prevTarget = renderer.getRenderTarget();
      const prevTone = renderer.toneMapping;
      const prevClear = renderer.getClearAlpha();
      const visible = mesh.visible;
      mesh.visible = false;
      renderer.toneMapping = THREE.NoToneMapping; // tonemap once, in the water shader
      renderer.setRenderTarget(rt);
      renderer.render(scene, camera);
      renderer.setRenderTarget(prevTarget);
      renderer.toneMapping = prevTone;
      renderer.setClearAlpha(prevClear);
      mesh.visible = visible;
    },
    setTime(t) {
      uniforms.uTime.value = t;
    },
  };
}
