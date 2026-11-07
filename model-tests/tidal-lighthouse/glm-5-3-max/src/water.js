// THE TIDAL LIGHTHOUSE — ocean
// One shader-driven water disc: shoaling swell arriving in sets, breaking foam,
// turquoise harbor shallows, sun glitter. A JS twin of the wave field lets
// boats, buoys and dolphins ride the exact same surface.

import * as THREE from 'three';
import { boundaryRadius, heightAt, sstep } from './terrain.js';

// Wave train: direction, wavenumber, amplitude, angular speed, phase.
// Travelling roughly +Z, i.e. from the open sea toward the exposed coast.
const WAVES = [
  { dx: 0.10, dz: 1.00, k: 0.60, a: 0.30, w: 1.05, ph: 0.0 },
  { dx: -0.22, dz: 1.00, k: 0.95, a: 0.17, w: 1.50, ph: 2.1 },
  { dx: 0.30, dz: 1.00, k: 1.50, a: 0.09, w: 2.00, ph: 4.0 },
  { dx: -0.06, dz: 1.00, k: 0.34, a: 0.30, w: 0.72, ph: 1.0 },
].map((wv) => {
  const l = Math.hypot(wv.dx, wv.dz);
  return { ...wv, dx: wv.dx / l, dz: wv.dz / l };
});

const envSet = (t) => 0.78 + 0.26 * Math.sin(t * 0.10) + 0.15 * Math.sin(t * 0.037 + 2.4) + 0.09 * Math.sin(t * 0.21 + 0.8);

const waveGLSL = WAVES.map((wv) => `
  { vec2 D = vec2(${wv.dx.toFixed(4)}, ${wv.dz.toFixed(4)});
    float PH = dot(D, P) * ${wv.k.toFixed(4)} + uTime * ${wv.w.toFixed(4)} + ${wv.ph.toFixed(4)};
    float A = ${wv.a.toFixed(4)} * AMP;
    h += A * sin(PH);
    g += A * ${wv.k.toFixed(4)} * cos(PH) * D;
    dp += A * 0.30 * cos(PH) * D;
    ampSum += A; }
`).join('\n');

const vertexShader = /* glsl */`
uniform float uTime;
uniform sampler2D uHeightTex;
uniform float uExtent;
varying vec3 vWorld;
varying float vDepth;
varying float vExpo;
varying vec2 vGrad;
varying float vWave;
varying float vAmp;
varying float vShore;

float boundaryR(float th) {
  return 27.0 * (1.0 + 0.07 * sin(3.0 * th + 0.7) + 0.05 * sin(5.0 * th + 2.1)
    + 0.035 * sin(8.0 * th + 4.2) + 0.025 * sin(13.0 * th + 1.3));
}
float envSet(float t) {
  return 0.78 + 0.26 * sin(t * 0.10) + 0.15 * sin(t * 0.037 + 2.4) + 0.09 * sin(t * 0.21 + 0.8);
}

void main() {
  vec2 P = position.xz;
  float r = length(P);
  float th = atan(P.y, P.x);
  float Rb = boundaryR(th);
  vec2 hg = texture2D(uHeightTex, P / (2.0 * uExtent) + 0.5).rg;
  float depth = max(-hg.r, 0.0);
  float cosA = r > 0.001 ? -P.y / r : 1.0;               // 1 toward open sea (-Z)
  float expo = 0.15 + 0.85 * smoothstep(-0.35, 0.65, cosA); // sheltered harbor factor
  float edge = smoothstep(0.0, 3.4, Rb - r);              // fade against the rim
  float shoal = smoothstep(0.05, 0.85, depth) * (1.0 + 1.25 * smoothstep(3.2, 0.7, depth));
  float AMP = envSet(uTime) * shoal * (0.22 + 0.78 * pow(expo, 1.3)) * edge * 1.15;

  float h = 0.0; vec2 g = vec2(0.0); vec2 dp = vec2(0.0); float ampSum = 0.0;
  ${waveGLSL}

  vec3 pos = vec3(P.x + dp.x, h, P.y + dp.y);
  vWorld = (modelMatrix * vec4(pos, 1.0)).xyz;
  vDepth = depth; vExpo = expo; vGrad = g; vWave = h; vAmp = ampSum; vShore = hg.g;
  gl_Position = projectionMatrix * viewMatrix * vec4(vWorld, 1.0);
}
`;

const fragmentShader = /* glsl */`
uniform float uTime;
uniform vec3 uSunDir;
uniform vec3 uSunCol;
uniform vec3 uSurf[6];
varying vec3 vWorld;
varying float vDepth;
varying float vExpo;
varying vec2 vGrad;
varying float vWave;
varying float vAmp;
varying float vShore;

float hash(vec2 q) { return fract(sin(dot(q, vec2(127.1, 311.7))) * 43758.5453); }
float vnoise(vec2 q) {
  vec2 i = floor(q), f = fract(q);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
             mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}
float fbm2(vec2 q) {
  float s = 0.5 * vnoise(q); q *= 2.03;
  s += 0.25 * vnoise(q);
  return s;
}
float fbm3(vec2 q) {
  float s = 0.5 * vnoise(q); q *= 2.03;
  s += 0.25 * vnoise(q); q *= 2.03;
  s += 0.125 * vnoise(q);
  return s;
}

void main() {
  vec2 p = vWorld.xz;
  float depth = max(vDepth, 0.0);
  vec3 V = normalize(cameraPosition - vWorld);

  // rippled detail normal (gentler inside the harbor)
  float e = 0.25;
  float r0 = fbm2(p * 2.4 + uTime * 0.16);
  float rx = fbm2((p + vec2(e, 0.0)) * 2.4 + uTime * 0.16);
  float rz = fbm2((p + vec2(0.0, e)) * 2.4 + uTime * 0.16);
  vec2 dn = vec2(rx - r0, rz - r0) * (2.4 / e);
  float ripple = (0.08 + 0.55 * vExpo) * smoothstep(0.1, 0.7, depth);
  vec3 n = normalize(vec3(-(vGrad.x + dn.x * ripple), 1.0, -(vGrad.y + dn.y * ripple)));

  // deep blue -> turquoise -> transparent shallows
  vec3 deep = vec3(0.014, 0.100, 0.185);
  vec3 mid  = vec3(0.032, 0.250, 0.335);
  vec3 shal = vec3(0.150, 0.560, 0.500);
  vec3 vs   = vec3(0.500, 0.790, 0.690);
  vec3 c = mix(deep, mid, smoothstep(4.4, 1.9, depth));
  c = mix(c, shal, smoothstep(1.9, 0.75, depth));
  c = mix(c, vs, smoothstep(0.55, 0.16, depth));

  // faint moving caustic shimmer over the sand
  float ca = fbm2(p * 2.6 + uTime * 0.20) + fbm3(p * 3.4 - uTime * 0.16) - 0.75;
  ca = pow(max(ca, 0.0), 2.0);
  c += ca * smoothstep(2.0, 0.3, depth) * vec3(0.30, 0.42, 0.38);

  // restrained sky reflection, warmer toward the sun
  float fr = pow(1.0 - max(dot(n, V), 0.0), 3.5);
  float sunward = 0.5 + 0.5 * dot(normalize(vec2(uSunDir.x, uSunDir.z) + vec2(0.0001)), normalize(p + vec2(0.0001)));
  vec3 skyC = mix(vec3(0.55, 0.68, 0.80), vec3(1.0, 0.88, 0.72), sunward * 0.7);
  c = mix(c, skyC, fr * 0.30);

  // late-afternoon sun glitter
  vec3 Hv = normalize(V + uSunDir);
  float sd = max(dot(n, Hv), 0.0);
  c += uSunCol * (pow(sd, 140.0) * 2.2 + pow(sd, 18.0) * 0.10);

  // foam: crest foam + breaking band + shore wash + waterline lace.
  // shore-based terms use the baked shore-distance field so cliff bases get a
  // uniform foam band even where the depth gradient is too steep to see.
  float hv = vWave / max(vAmp, 0.02);
  float crest = smoothstep(0.30, 0.75, hv) * smoothstep(0.18, 0.55, vExpo);
  float brk = smoothstep(1.55, 0.5, depth) * smoothstep(0.10, 0.38, depth) * vExpo;
  float pulse = 0.55 + 0.45 * sin(uTime * 0.85 - depth * 3.2 + p.x * 0.13);
  float wash = smoothstep(2.0, 0.45, vShore) * (0.40 + 0.60 * sin(uTime * 0.55 - vShore * 2.6 + 1.7)) * (0.45 + 0.55 * vExpo);
  float lace = smoothstep(0.55, 0.10, vShore) * (0.55 + 0.45 * sin(uTime * 1.3 + vShore * 7.0 + p.x * 0.2));
  float fn = fbm3(p * 1.6 + uTime * 0.10) * 0.6 + fbm2(p * 4.3 - uTime * 0.4) * 0.4;
  float foam = crest * 1.0 + brk * pulse * 1.1 + wash * 0.9 + lace * 0.75;
  foam *= smoothstep(0.16, 0.50, fn + foam * 0.22);

  // surface disturbance from dolphins near the surface
  for (int i = 0; i < 6; i++) {
    vec3 s = uSurf[i];
    if (s.z > 0.0) {
      float d = length(p - s.xy);
      foam += s.z * exp(-d * d * 0.55) * (0.35 + 0.4 * fbm2(p * 3.0 + uTime * 0.5));
    }
  }
  foam = clamp(foam, 0.0, 1.0);

  c = mix(c, vec3(0.98, 1.02, 1.04), foam * 0.92);
  c += foam * 0.10;

  float baseA = mix(0.86, 0.26, smoothstep(1.5, 0.12, depth));
  float alpha = clamp(baseA + fr * 0.20, 0.0, 1.0);
  alpha *= smoothstep(0.02, 0.22, depth); // fade out at the very edge: no hard cut
  alpha = mix(alpha, 0.985, foam);

  gl_FragColor = vec4(c, alpha);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;

export function buildWater(scene, terrain, sunDir) {
  const TH_N = 256, R_N = 88;
  const verts = (TH_N + 1) * (R_N + 1);
  const pos = new Float32Array(verts * 3);
  const idx = [];
  for (let i = 0; i <= TH_N; i++) {
    const th = (i / TH_N) * Math.PI * 2;
    const ct = Math.cos(th), st = Math.sin(th);
    const Rb = boundaryRadius(th) + 0.1;
    for (let j = 0; j <= R_N; j++) {
      const r = (j / R_N) * Rb;
      const k = i * (R_N + 1) + j;
      pos[k * 3] = ct * r; pos[k * 3 + 1] = 0; pos[k * 3 + 2] = st * r;
    }
  }
  for (let i = 0; i < TH_N; i++) {
    for (let j = 0; j < R_N; j++) {
      const a = i * (R_N + 1) + j, b = a + R_N + 1;
      idx.push(a, b, a + 1, b, b + 1, a + 1);
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setIndex(idx);

  const uniforms = {
    uTime: { value: 0 },
    uHeightTex: { value: terrain.heightTex },
    uExtent: { value: terrain.TEX_EXTENT },
    uSunDir: { value: sunDir.clone() },
    uSunCol: { value: new THREE.Vector3(1.25, 0.98, 0.66) },
    uSurf: { value: Array.from({ length: 6 }, () => new THREE.Vector3(0, 0, 0)) },
  };
  const mat = new THREE.ShaderMaterial({
    uniforms, vertexShader, fragmentShader,
    transparent: true, depthWrite: false, side: THREE.DoubleSide,
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.renderOrder = 5;
  mesh.frustumCulled = false;
  scene.add(mesh);

  return {
    mesh, uniforms,
    surf: uniforms.uSurf.value,
    update(t) { uniforms.uTime.value = t; },
    surfaceAt,
  };
}

// JS twin of the shader's wave field (without horizontal displacement).
export function surfaceAt(x, z, t) {
  const r = Math.hypot(x, z);
  const Rb = boundaryRadius(Math.atan2(z, x));
  const depth = Math.max(-heightAt(x, z), 0);
  const cosA = r > 1e-4 ? -z / r : 1;
  const expo = 0.15 + 0.85 * sstep(-0.35, 0.65, cosA);
  const edge = sstep(0, 3.4, Rb - r);
  const shoal = sstep(0.05, 0.85, depth) * (1 + 1.25 * sstep(3.2, 0.7, depth));
  const amp = envSet(t) * shoal * (0.22 + 0.78 * Math.pow(expo, 1.3)) * edge;
  let h = 0, gx = 0, gz = 0;
  for (const w of WAVES) {
    const ph = (w.dx * x + w.dz * z) * w.k + t * w.w + w.ph;
    const a = w.a * amp;
    h += a * Math.sin(ph);
    const c = a * w.k * Math.cos(ph);
    gx += c * w.dx; gz += c * w.dz;
  }
  return { y: h, gx, gz, expo, depth };
}
