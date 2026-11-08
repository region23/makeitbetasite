// Shared ocean model: one set of wave parameters used by both the GLSL surface
// and a CPU sampler, so boats, buoys and splashes ride exactly the same water.
import * as THREE from 'three';
import { STRAIT_AXIS } from './geo.js';

const G = 9.81;

function azToXZ(azDeg) {
  const a = (azDeg * Math.PI) / 180;
  return [Math.sin(a), -Math.cos(a)];
}

export const SEA_LEVEL = 0;

export const WAVES = {
  g: G,
  axis: STRAIT_AXIS,
  list: [
    { wl: 21.0, amp: 0.26, azFrom: 245, phase: 0.4 },
    { wl: 13.5, amp: 0.20, azFrom: 231, phase: 2.1 },
    { wl: 8.8, amp: 0.14, azFrom: 259, phase: 3.9 },
    { wl: 5.6, amp: 0.09, azFrom: 213, phase: 5.4 },
  ].map((w) => ({ ...w, dir: azToXZ(w.azFrom + 180), k0: (2 * Math.PI) / w.wl })),
};

/** sloshing modes inside the 20 m strait */
export const SLOSH = { k1: 0.36, w1: 1.45, a1: 0.155, k2: 0.62, w2: 2.15, a2: 0.075 };

export function waveUniforms(field) {
  return {
    uTime: { value: 0 },
    tField: { value: field },
    uSea: { value: SEA_LEVEL },
    uWave: { value: WAVES.list.map((w) => new THREE.Vector4(w.dir[0], w.dir[1], w.k0, w.amp)) },
    uPhase: { value: WAVES.list.map((w) => w.phase) },
    uAxis: { value: new THREE.Vector2(WAVES.axis[0], WAVES.axis[1]) },
  };
}

/** GLSL: needs uTime, uWave[4], uPhase[4], uAxis declared by the caller */
export const WAVE_CONST = /* glsl */ `
#define NW 4
`;

export const WAVE_GLSL = /* glsl */ `
const float GRAV = 9.81;

// k*tanh(k*d) = k0   ->   solve u*tanh(u) = k0*d for u = k*d
float solveK(float k0, float d) {
  float u0 = k0 * d;
  float u = u0;
  u = u0 / max(tanh(u), 1e-3);
  u = u0 / max(tanh(u), 1e-3);
  u = u0 / max(tanh(u), 1e-3);
  return u / max(d, 0.06);
}

// returns vec4(elevation, dE/dx, dE/dz, breaking)
vec4 oceanWaves(vec2 p, float depth, float expo, float chan) {
  // shoaling grows toward shore but is capped by the breaker limit, and the
  // swell dies out to glass in the last half-metre of water
  float shoal = min(1.0 + 0.9 * exp(-depth / 3.4), 1.75);
  float damp = smoothstep(0.32, 1.5, depth);
  float scale = expo * damp * (1.0 - 0.86 * chan);
  float eta = 0.0, dx = 0.0, dz = 0.0, brk = 0.0;
  for (int i = 0; i < NW; i++) {
    vec4 w = uWave[i];
    vec2 dir = w.xy;
    float k0 = w.z;
    float A0 = w.w;
    float k = solveK(k0, max(depth, 0.08));
    float om = sqrt(GRAV * k0);
    float ph = k * dot(dir, p) - om * uTime + uPhase[i];
    float A = A0 * shoal * scale;
    float s = sin(ph);
    float c = cos(ph);
    eta += A * s;
    dx += A * k * dir.x * c;
    dz += A * k * dir.y * c;
    float ratio = (2.0 * A) / max(depth, 0.05);
    float steep = A * k;
    brk = max(brk, smoothstep(0.70, 1.28, ratio) * smoothstep(0.16, 0.40, steep));
  }
  // depth-limited breaking: a swell cannot stand taller than the water it
  // travels over, so it flattens and throws foam instead
  float lim = max(0.42 * depth, 0.05);
  float over = abs(eta) / lim;
  eta = eta / max(1.0, over);
  dx /= max(1.0, over);
  dz /= max(1.0, over);
  brk = max(brk, smoothstep(0.80, 1.20, over) * smoothstep(0.25, 1.10, depth));

  if (chan > 0.002) {
    vec2 ax = normalize(uAxis);
    vec2 pv = vec2(-ax.y, ax.x);
    float a = dot(p, ax);
    float b = dot(p, pv);
    float s1 = sin(a * 0.36 - uTime * 1.45) * cos(b * 0.5);
    float s2 = sin(b * 0.62 + uTime * 2.15) * cos(a * 0.5);
    float e2 = 0.155 * s1 + 0.075 * s2;
    float c1 = cos(a * 0.36 - uTime * 1.45);
    eta += chan * e2;
    dx += chan * (-0.155 * 0.36 * ax.x * c1 * cos(b * 0.5) - 0.075 * 0.5 * ax.x * sin(b * 0.62 + uTime * 2.15) * sin(a * 0.5));
    dz += chan * (-0.155 * 0.36 * ax.y * c1 * cos(b * 0.5) + 0.075 * 0.62 * pv.y * cos(b * 0.62 + uTime * 2.15) * cos(a * 0.5));
    brk = max(brk, chan * smoothstep(0.085, 0.16, e2) * 0.6);
  }
  return vec4(eta, dx, dz, brk);
}
`;

/* ---------------------------------------------------------------- CPU side --- */

function solveKJS(k0, d) {
  const u0 = k0 * Math.max(d, 0.06);
  let u = u0;
  for (let i = 0; i < 3; i++) u = u0 / Math.max(Math.tanh(u), 1e-3);
  return u / Math.max(d, 0.06);
}

/**
 * @returns {{eta:number, dx:number, dz:number, brk:number, depth:number}}
 */
export function sampleOcean(world, x, z, t, opts = {}) {
  const bed = world.height(x, z);
  const depth = Math.max(SEA_LEVEL - bed, 0);
  const expo = opts.expo !== undefined ? opts.expo : world.exposure(x, z);
  const chan = opts.chan !== undefined ? opts.chan : 0;
  const shoal = Math.min(1 + 0.9 * Math.exp(-depth / 3.4), 1.75);
  const damp = smooth01((depth - 0.32) / 1.18);
  const scale = expo * damp * (1 - 0.86 * chan);
  let eta = 0;
  let dx = 0;
  let dz = 0;
  let brk = 0;
  for (const w of WAVES.list) {
    const k = solveKJS(w.k0, Math.max(depth, 0.08));
    const om = Math.sqrt(G * w.k0);
    const ph = k * (w.dir[0] * x + w.dir[1] * z) - om * t + w.phase;
    const A = w.amp * shoal * scale;
    const s = Math.sin(ph);
    const c = Math.cos(ph);
    eta += A * s;
    dx += A * k * w.dir[0] * c;
    dz += A * k * w.dir[1] * c;
    const ratio = (2 * A) / Math.max(depth, 0.05);
    const steep = A * k;
    brk = Math.max(brk, smooth01((ratio - 0.70) / 0.58) * smooth01((steep - 0.16) / 0.24));
  }
  const lim = Math.max(0.42 * depth, 0.05);
  const over = Math.abs(eta) / lim;
  eta /= Math.max(1, over);
  dx /= Math.max(1, over);
  dz /= Math.max(1, over);
  brk = Math.max(brk, smooth01((over - 0.8) / 0.4) * smooth01((depth - 0.25) / 0.85));

  if (chan > 0.002) {
    const [axx, axz] = WAVES.axis;
    const pvx = -axz;
    const pvz = axx;
    const a = x * axx + z * axz;
    const b = x * pvx + z * pvz;
    const s1 = Math.sin(a * SLOSH.k1 - t * SLOSH.w1) * Math.cos(b * 0.5);
    const s2 = Math.sin(b * SLOSH.k2 + t * SLOSH.w2) * Math.cos(a * 0.5);
    eta += chan * (SLOSH.a1 * s1 + SLOSH.a2 * s2);
    brk = Math.max(brk, chan * smooth01((SLOSH.a1 * s1 + SLOSH.a2 * s2 - 0.085) / 0.075) * 0.6);
  }
  return { eta, dx, dz, brk, depth, bed };
}

function smooth01(v) {
  const x = Math.max(0, Math.min(1, v));
  return x * x * (3 - 2 * x);
}

/** surface height at a point, cheap version for floating props */
export function waterY(world, x, z, t) {
  return SEA_LEVEL + sampleOcean(world, x, z, t, { expo: 1 }).eta;
}
