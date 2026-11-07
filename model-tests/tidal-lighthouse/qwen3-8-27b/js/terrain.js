// terrain.js — the analytic diorama heightfield shared by the land geometry,
// the water data texture and the JS-side wave mirror.
// Coordinates: x = east, z = south, y = up. Water line is y = 0.

export const SLAB_BOTTOM = -7.0;
export const HARBOR = { x: 13.0, z: 7.0 };
export const HEADLAND = { x: -10.2, z: -9.2 };
export const RIDGE = { x: 3.5, z: -12.5 };

export function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export const clamp = (x, a, b) => Math.min(b, Math.max(a, x));
export const clamp01 = (x) => clamp(x, 0, 1);
export function sstep(a, b, x) { const t = clamp01((x - a) / (b - a)); return t * t * (3 - 2 * t); }
export function gauss(x, s) { return Math.exp(-(x * x) / (2 * s * s)); }
export function angleDelta(a, b) { let d = a - b; return Math.atan2(Math.sin(d), Math.cos(d)); }
export function angleGauss(a, c, w) { const d = angleDelta(a, c); return Math.exp(-(d * d) / (2 * w * w)); }

// Nominal land outline. The true shoreline is the h = 0 contour, which this
// shape approximates closely (the heightfield pins the coast near it).
export function landRadius(a) {
  let r = 12.4
    + 3.0 * Math.sin(2 * a + 1.9)
    + 2.0 * Math.sin(3 * a - 0.7)
    + 1.0 * Math.sin(5 * a + 2.4)
    + 0.45 * Math.sin(9 * a + 0.6)
    + 4.6 * angleGauss(a, -2.36, 0.55)   // NW headland — the lighthouse point
    + 2.2 * angleGauss(a, 0.90, 0.80)    // SE promontory sheltering the harbor
    - 3.4 * angleGauss(a, 0.32, 0.50);   // carved harbor bay on the east coast
  return Math.max(r, 8.5);
}

// Outer edge of the diorama slab (the cutaway rim).
export function slabRadius(a) {
  return landRadius(a) + 8.6 + 1.4 * Math.sin(3 * a + 0.8) + 0.8 * Math.sin(5 * a + 2.2);
}

// 1 in the sheltered harbor, 0 in the open sea.
export function harborMask(x, z) {
  const d = Math.hypot(x - HARBOR.x, z - HARBOR.z);
  return 1 - sstep(3.0, 8.5, d);
}

export function heightAt(x, z) {
  const a = Math.atan2(z, x);
  const r = Math.hypot(x, z);
  const Rl = landRadius(a);
  const Rb = slabRadius(a);
  let h;
  if (r < Rl) {
    const t = r / Rl;
    let e = 4.6 * Math.pow(Math.max(0, 1 - t * t), 1.6);
    e += 7.6 * gauss(Math.hypot(x - HEADLAND.x, z - HEADLAND.z), 5.2);
    e += 2.4 * gauss(Math.hypot(x - RIDGE.x, z - RIDGE.z), 4.2);
    e += 1.05 * Math.sin(x * 0.55 + 1.3) * Math.sin(z * 0.62 - 0.8);
    // Harbor basin: carve a pocket below the water line on the east.
    e -= 5.4 * gauss(Math.hypot(x - HARBOR.x, z - HARBOR.z), 6.2);
    // Flatten the coast so swells wash across low shelves.
    const flat = sstep(0.82, 1.0, t);
    e = e * (1 - flat) + 0.35 * flat;
    h = e;
  } else {
    const s = (r - Rl) / (Rb - Rl);
    let d = 0.20 + 7.2 * Math.pow(s, 1.10);
    d += 0.35 * Math.sin(x * 0.8) * Math.sin(z * 0.7 + 2.0);
    // Harbor: shallow sandy floor with a gentle deepening.
    const db = Math.hypot(x - HARBOR.x, z - HARBOR.z);
    const gm = 1 - sstep(3.0, 9.0, db);
    d = d * (1 - gm) + (1.1 + 0.7 * gauss(db, 4.0)) * gm;
    h = -d;
  }
  return h;
}

export function slopeAt(x, z, e = 0.35) {
  const dx = heightAt(x + e, z) - heightAt(x - e, z);
  const dz = heightAt(x, z + e) - heightAt(x, z - e);
  return Math.hypot(dx, dz) / (2 * e);
}

// Bounding box of the slab (used for planar UVs of the data texture).
export function slabBounds() {
  let x0 = 1e9, x1 = -1e9, z0 = 1e9, z1 = -1e9;
  for (let i = 0; i < 256; i++) {
    const a = (i / 256) * Math.PI * 2;
    const r = slabRadius(a);
    const x = r * Math.cos(a), z = r * Math.sin(a);
    x0 = Math.min(x0, x); x1 = Math.max(x1, x);
    z0 = Math.min(z0, z); z1 = Math.max(z1, z);
  }
  return { x0, x1, z0, z1 };
}

// ---------------------------------------------------------------
// Wave system. GLSL in water.js mirrors these constants exactly.
// ---------------------------------------------------------------
// Directions are unit vectors in xz (travel direction).
const D1 = norm2(0.72, -0.69);   // main swell, from the SW
const D2 = norm2(0.95, -0.31);   // secondary, from the WSW
const D3 = norm2(0.30, -0.95);   // short chop, oblique
const D4 = norm2(0.50, 0.87);    // harbor ripple
function norm2(x, z) { const l = Math.hypot(x, z); return { x: x / l, z: z / l }; }

const W1 = { k: 0.70, w: 1.05, A: 0.40, d: D1, ph: 0.0 };
const W2 = { k: 0.48, w: 0.87, A: 0.26, d: D2, ph: 1.3 };
const W3 = { k: 1.35, w: 1.90, A: 0.10, d: D3, ph: 2.1 };
const W4 = { k: 2.60, w: 2.60, A: 0.06, d: D4, ph: 0.0 };

// Long-period "set" envelope: overlapping sets of swells.
export function setEnvelope(t) {
  return clamp(0.62 + 0.38 * Math.sin(t * 0.331) + 0.22 * Math.sin(t * 0.203 + 1.7), 0.15, 1.2);
}

// Water surface height at (x, z) — JS mirror of the vertex shader.
export function waveYAt(x, z, t) {
  const G = harborMask(x, z);
  const open = 1 - G * 0.92;
  const set = setEnvelope(t);
  const h = heightAt(x, z);
  const depthM = Math.max(0, -h);
  const shoal = 1 + 0.55 * sstep(3.2, 0.6, depthM) * (1 - G);
  let y = 0;
  y += (W1.A * set + 0.10) * Math.sin((x * D1.x + z * D1.z) * W1.k - t * W1.w + W1.ph) * open * shoal;
  y += W2.A * set * Math.sin((x * D2.x + z * D2.z) * W2.k - t * W2.w + W2.ph) * open * shoal;
  y += W3.A * Math.sin((x * D3.x + z * D3.z) * W3.k - t * W3.w + W3.ph) * open * shoal;
  y += W4.A * Math.sin((x * D4.x + z * D4.z) * W4.k - t * W4.w + W4.ph) * G;
  return y;}
