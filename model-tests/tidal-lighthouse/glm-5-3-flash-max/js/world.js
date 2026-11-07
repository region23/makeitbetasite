// world.js — shared procedural definitions: noise, terrain, slab outline, shelter, waves
import * as THREE from 'three';

export const CFG = {
  seed: 20261107,
  extent: 30,            // bake/uv half-extent of the data texture
  slabBottom: -9.6,
  harborAngle: 1.31,     // harbor mouth azimuth (+X/+Z quadrant)
  openAngle: 1.31 + Math.PI,
  lightP: [-6.5, -4.5],  // lighthouse knoll center (x,z)
  cottageP: [2.8, 4.6],  // cottage center (x,z)
  jettyAz: 0.92,         // jetty azimuth
};

export const clamp = (x, a, b) => Math.min(b, Math.max(a, x));
export const mix = (a, b, t) => a + (b - a) * t;
// smoothstep that also works with inverted edges (a > b)
export const sstep = (x, a, b) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };
export const angDiff = (a, b) => {
  let d = (a - b) % (Math.PI * 2);
  if (d > Math.PI) d -= Math.PI * 2;
  if (d < -Math.PI) d += Math.PI * 2;
  return d;
};
export const polar = (th, r) => [Math.cos(th) * r, Math.sin(th) * r];
const bump = (d, rad) => { const t = clamp(d / rad, 0, 1); const s = 1 - t * t * (3 - 2 * t); return s * s; };

export function mulberry(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function makeNoise2D(seed) {
  const rnd = mulberry(seed);
  const p = new Uint8Array(256);
  for (let i = 0; i < 256; i++) p[i] = i;
  for (let i = 255; i > 0; i--) { const j = (rnd() * (i + 1)) | 0; const t = p[i]; p[i] = p[j]; p[j] = t; }
  const perm = new Uint8Array(512);
  for (let i = 0; i < 512; i++) perm[i] = p[i & 255];
  const val = (ix, iz) => perm[(perm[ix & 255] + (iz & 255)) & 255] / 255;
  function noise(x, z) {
    const ix = Math.floor(x), iz = Math.floor(z);
    const fx = x - ix, fz = z - iz;
    const u = fx * fx * (3 - 2 * fx), v = fz * fz * (3 - 2 * fz);
    const a = val(ix, iz), b = val(ix + 1, iz), c = val(ix, iz + 1), d = val(ix + 1, iz + 1);
    return (a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v) * 2 - 1;
  }
  function fbm(x, z, oct = 3, lac = 2.03, gain = 0.5) {
    let s = 0, amp = 0.5, f = 1, nrm = 0;
    for (let i = 0; i < oct; i++) { s += amp * noise(x * f, z * f); nrm += amp; amp *= gain; f *= lac; }
    return s / nrm;
  }
  return { noise, fbm, rnd };
}

const NZ = makeNoise2D(CFG.seed);
export const fbm = (x, z, o = 3) => NZ.fbm(x, z, o);
export const rnd = NZ.rnd;

// ---- coastline / slab ----
export function coastR(th) {
  const n1 = fbm(Math.cos(th) * 1.9 + 11.2, Math.sin(th) * 1.9 + 5.7, 3);
  const d = Math.abs(angDiff(th, CFG.harborAngle));
  const w = 1 - sstep(d, 0.42, 1.15);
  return 17.0 + 3.2 * n1 + 2.0 * Math.max(0, n1) - 4.3 * w;
}
export function slabR(th) {
  const d = Math.abs(angDiff(th, CFG.harborAngle));
  const openW = sstep(d, 0.42, 1.15);
  const n = fbm(Math.cos(th) * 2.6 + 31, Math.sin(th) * 2.6 + 17, 2);
  return coastR(th) + 2.7 + 5.2 * openW + 1.3 * n;
}
export const SLAB_RMAX = (() => {
  let m = 0;
  for (let i = 0; i < 720; i++) m = Math.max(m, slabR(i / 720 * Math.PI * 2));
  return m;
})();

// low rock shelves on the exposed side (also drive wash-foam via heightmap bumps)
export const SHELF_ROCKS = [
  { a: CFG.openAngle + 0.18, off: 3.0, r: 1.3 },
  { a: CFG.openAngle - 0.10, off: 3.8, r: 1.55 },
  { a: CFG.openAngle + 0.42, off: 2.7, r: 1.05 },
];
export function shelfRockPos(sr) {
  const cr = coastR(sr.a);
  return polar(sr.a, cr + sr.off);
}

// ---- shelter factor (1 = calm harbor, 0 = open sea) ----
export function shelterAt(x, z) {
  const r = Math.hypot(x, z), th = Math.atan2(z, x);
  const d = Math.abs(angDiff(th, CFG.harborAngle));
  const inH = 1 - sstep(d, 0.5, 1.2);
  const cr = coastR(th);
  const inside = sstep(r, cr + 0.6, cr + 5.6);
  return clamp(inH * inside, 0, 1);
}

// ---- terrain height field (world meters, y up, waterline y=0) ----
export function terrainHeight(x, z) {
  const r = Math.hypot(x, z);
  if (r < 1e-5) return terrainHeight(0.01, 0);
  const th = Math.atan2(z, x);
  const cr = coastR(th);
  const d = Math.abs(angDiff(th, CFG.harborAngle));
  const w = 1 - sstep(d, 0.42, 1.15);
  const mask = sstep(r, cr + 0.8, cr - 3.6);

  // land: lighthouse knoll + cottage hummock + rolling detail
  const dl = Math.hypot(x - CFG.lightP[0], z - CFG.lightP[1]);
  const knollM = bump(dl, 9.0);
  const knoll = knollM * 7.3 + knollM * 0.9 * fbm(x * 1.15 + 4, z * 1.15 + 8, 3);
  const dc = Math.hypot(x - CFG.cottageP[0], z - CFG.cottageP[1]);
  const cotM = bump(dc, 7.4);
  const roll = 0.8 * fbm(x * 0.42 + 7, z * 0.42 + 2, 3);
  let land = Math.max(knoll, cotM * 2.7 + roll * 0.35) + roll * 0.5 + 0.3 * fbm(x * 1.3 + 2, z * 1.3 + 9, 2);

  // jagged cliffs toward the open sea
  const cliff = (1 - w) * sstep(r, cr - 0.6, cr - 4.6)
    * (1.3 + 1.4 * Math.max(0, fbm(Math.cos(th) * 3.1 + 9, Math.sin(th) * 3.1 + 4, 3)) + 0.7 * fbm(x * 0.9 + 1, z * 0.9 + 5, 2));
  land += cliff * (1 - sstep(land, 1.6, 4.0));

  // low rocky shelf at the waterline (exposed side mostly)
  const shoreRock = sstep(r, cr + 0.6, cr - 1.4) * 0.5 * (1 - w * 0.6);
  land = Math.max(land, shoreRock);

  // underwater shoreface -> seabed
  const nd = fbm(x * 0.3 + 9, z * 0.3 + 1, 3);
  let uw = mix(-0.78, -5.0 + 0.6 * nd, sstep(r, cr - 0.3, cr + 4.6));
  uw -= 1.1 * sstep(r, cr + 4.2, cr + 8.6);

  // sheltered harbor pool (sandy, shallow)
  const pen = w * sstep(r, cr + 0.3, cr + 4.2);
  uw = mix(uw, -1.35 + 0.4 * fbm(x * 0.55 + 3, z * 0.55 + 6, 2) - 0.9 * sstep(r, cr + 6.0, cr + 9.5), pen * 0.92);

  // exposed wash shelf (flat, just under the surface)
  const dOpen = Math.abs(angDiff(th, CFG.openAngle));
  const shelfW = (1 - w) * Math.exp(-(dOpen * dOpen) / (0.55 * 0.55));
  uw = mix(uw, -1.05 + 0.14 * fbm(x * 0.8 + 8, z * 0.8 + 3, 2),
    shelfW * sstep(r, cr + 0.8, cr + 2.2) * (1 - sstep(r, cr + 3.2, cr + 5.2)));

  // half-sunk shelf rocks (heightmap bumps so foam forms around them)
  for (const sr of SHELF_ROCKS) {
    const [px, pz] = shelfRockPos(sr);
    const dd = (x - px) * (x - px) + (z - pz) * (z - pz);
    uw += 1.0 * Math.exp(-dd / (sr.r * sr.r));
  }

  let h = mix(uw, land, mask);
  h += 0.2 * fbm(x * 2.2 + 5, z * 2.2 + 5, 2) * sstep(h, 0.12, 0.8);
  return h;
}

// ---- waves: single source of truth for GLSL + JS sampling ----
const TRAVEL = CFG.openAngle + Math.PI; // swells travel from open sea toward the island
function mkWave(lam, amp, off, envF, envA, envP) {
  const k = 2 * Math.PI / lam;
  const om = Math.sqrt(9.8 * k) * 0.62;
  const a0 = TRAVEL + off;
  const dx = Math.cos(a0), dz = Math.sin(a0);
  const Q = 1.15 / (k * amp * 7);
  return { lam, amp, k, om, dx, dz, Q, envF, envA, envP };
}
export const WAVES = [
  mkWave(17.5, 0.52, 0.00, 0.42, 0.80, 0.0), // primary set
  mkWave(12.0, 0.32, 0.34, 0.62, 0.70, 2.1), // secondary set, overlapping
  mkWave(8.2, 0.17, -0.45, 0, 0, 0),
  mkWave(5.4, 0.11, 0.75, 0.35, 0.60, 4.0),
  mkWave(3.1, 0.05, 2.1, 0, 0, 0),           // ripples (always on, stronger in harbor)
  mkWave(2.0, 0.032, 4.3, 0, 0, 0),
  mkWave(1.35, 0.02, 0.8, 0, 0, 0),
];
export const RIPPLE_FROM = 4; // indices >= this are the ripple set

export function jsWaterHeight(x, z, t) {
  const terrH = terrainHeight(x, z);
  const shore = sstep(-terrH, 0, 0.85);
  const r = Math.hypot(x, z);
  const bound = 1 - sstep(r, SLAB_RMAX - 1.4, SLAB_RMAX - 0.25);
  const sh = shelterAt(x, z);
  let y = 0;
  for (let i = 0; i < WAVES.length; i++) {
    const w = WAVES[i];
    const mask = (i >= RIPPLE_FROM ? (0.4 + 0.6 * sh) : (1 - sh)) * shore * bound;
    let a = w.amp * mask;
    if (w.envA > 0) a *= (1 - w.envA) + w.envA * Math.sin(t * w.envF + w.envP);
    y += a * Math.sin(w.k * (w.dx * x + w.dz * z) - w.om * t);
  }
  return Math.max(y, terrH + 0.05); // never dip below the seabed
}

// ---- data texture: R terrain height, G shelter ----
export function bakeWaterTexture(size = 256) {
  const half = THREE.DataUtils.toHalfFloat;
  const data = new Uint16Array(size * size * 4);
  let i = 0;
  for (let j = 0; j < size; j++) {
    const z = (j / (size - 1) * 2 - 1) * CFG.extent;
    for (let ix = 0; ix < size; ix++) {
      const x = (ix / (size - 1) * 2 - 1) * CFG.extent;
      data[i++] = half(terrainHeight(x, z));
      data[i++] = half(shelterAt(x, z));
      data[i++] = half(0);
      data[i++] = half(0);
    }
  }
  const tex = new THREE.DataTexture(data, size, size, THREE.RGBAFormat, THREE.HalfFloatType);
  tex.minFilter = THREE.LinearFilter;
  tex.magFilter = THREE.LinearFilter;
  tex.wrapS = THREE.ClampToEdgeWrapping;
  tex.wrapT = THREE.ClampToEdgeWrapping;
  tex.needsUpdate = true;
  return tex;
}

// ---- GLSL noise helpers shared by shaders ----
export const GLSL_NOISE = /* glsl */`
float vhash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123); }
float vnoise(vec2 p){
  vec2 i = floor(p), f = fract(p);
  vec2 u = f*f*(3.0-2.0*f);
  float a = vhash(i), b = vhash(i+vec2(1.0,0.0)), c = vhash(i+vec2(0.0,1.0)), d = vhash(i+vec2(1.0,1.0));
  return mix(mix(a,b,u.x), mix(c,d,u.x), u.y);
}
float fbm2(vec2 p){
  float s = 0.0, a = 0.5;
  for(int i=0;i<3;i++){ s += a*vnoise(p); p = p*2.03 + 11.7; a *= 0.5; }
  return s / 0.875;
}
`;
