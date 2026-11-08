// Geo: layout of the site (compressed, metres). x = East, z = South (+z), y up.
// Fields return approximate signed distance to land (NEGATIVE inside land).
import { clamp, lerp, smoothstep, fbm, distToSeg } from './util.js';

export const SLAB = { a: 392, b: 282 };         // display-piece half extents
export const SEA_LEVEL = 0;
export const SKIRT_BASE = -46;                    // bottom of cutaway walls

// ---- island (two tapering capsules, SW tip -> NE tip) ----
const ISL_A = [-120, 55], ISL_B = [0, -10], ISL_T = [75, -80];
function capsuleField(px, pz, ax, az, bx, bz, r0, r1) {
  const dx = bx - ax, dz = bz - az;
  const len2 = dx * dx + dz * dz;
  const t = clamp(((px - ax) * dx + (pz - az) * dz) / len2, 0, 1);
  const cx = ax + dx * t, cz = az + dz * t;
  return Math.hypot(px - cx, pz - cz) - lerp(r0, r1, t);
}
function smin(a, b, k) {
  const h = clamp(0.5 + 0.5 * (b - a) / k, 0, 1);
  return lerp(b, a, h) - k * h * (1 - h);
}
export function islandField(x, z) {
  const d1 = capsuleField(x, z, ISL_A[0], ISL_A[1], ISL_B[0], ISL_B[1], 82, 56);
  const d2 = capsuleField(x, z, ISL_B[0], ISL_B[1], ISL_T[0], ISL_T[1], 56, 25);
  return smin(d1, d2, 34);
}
// param along island axis 0 (SW tip) .. 1 (NE tip)
export function islandAxisT(x, z) {
  const lenA = Math.hypot(ISL_B[0] - ISL_A[0], ISL_B[1] - ISL_A[1]);
  const lenB = Math.hypot(ISL_T[0] - ISL_B[0], ISL_T[1] - ISL_B[1]);
  const t1 = clamp(((x - ISL_A[0]) * (ISL_B[0] - ISL_A[0]) + (z - ISL_A[1]) * (ISL_B[1] - ISL_A[1])) / (lenA * lenA), 0, 1);
  const t2 = clamp(((x - ISL_B[0]) * (ISL_T[0] - ISL_B[0]) + (z - ISL_B[1]) * (ISL_T[1] - ISL_B[1])) / (lenB * lenB), 0, 1);
  return (t1 * lenA + t2 * lenB) / (lenA + lenB);
}

// ---- sickle spit off the cape point (guards the strait's east side) ----
const SPIT = [[101, -6], [108, 8], [111, 22], [107, 36]];
export function spitField(x, z) {
  let best = Infinity;
  for (let i = 0; i < SPIT.length - 1; i++) {
    const r0 = [9.5, 7.5, 5.5][i], r1 = [7.5, 5.5, 4.2][i];
    best = Math.min(best, capsuleField(x, z, SPIT[i][0], SPIT[i][1], SPIT[i + 1][0], SPIT[i + 1][1], r0, r1));
  }
  return best;
}

// ---- mainland / cape (closed polygon; negative inside = land) ----
// The notch between [124,-152]..[101,-14] is the sheltered village bay.
const COAST = [
  [118, -290], [132, -215], [124, -152], [142, -128], [146, -100], [132, -72],
  [114, -44], [101, -14], [100, -6], [104, 20], [114, 60], [132, 110],
  [158, 170], [196, 240], [248, 300], [430, 340], [430, -340],
];
export function mainlandField(x, z) {
  // ray-cast inside test + distance to nearest edge
  let inside = false, bestD = Infinity;
  for (let i = 0, j = COAST.length - 1; i < COAST.length; j = i++) {
    const [xi, zi] = COAST[i], [xj, zj] = COAST[j];
    if ((zi > z) !== (zj > z) && x < ((xj - xi) * (z - zi)) / (zj - zi) + xi) inside = !inside;
    const r = distToSeg(x, z, xi, zi, xj, zj);
    if (r.d < bestD) bestD = r.d;
  }
  return inside ? -bestD : bestD;
}

export const minField = (x, z) => Math.min(islandField(x, z), spitField(x, z), mainlandField(x, z));

// distance from a WATER point to the nearest shore (positive), or negative inside land
export const shoreDist = (x, z) => minField(x, z);

// ---- feature polylines (world coords) ----
export const BEACH = [[110, -42], [126, -56], [138, -76], [144, -102], [138, -124]];
export const PATH = [[70, -14], [63, -22], [57, -32], [56, -42], [60, -48], [50, -53]];
export const PLAZA = { x: 42, z: -56, r: 9.5 };
export const VILLAGE = { x: 170, z: -94, w: 50, h: 56 };
export const STRAIT_AXIS = [[86, -10], [66, 18], [52, 44]];
export const PIER = { from: [136, -64], to: [112, -76] };

export function polyDist(x, z, pts) {
  let d = Infinity;
  for (let i = 0; i < pts.length - 1; i++)
    d = Math.min(d, distToSeg(x, z, pts[i][0], pts[i][1], pts[i + 1][0], pts[i + 1][1]).d);
  return d;
}
export const beachDist = (x, z) => polyDist(x, z, BEACH);
export const pathDist = (x, z) => polyDist(x, z, PATH);
export function straitDist(x, z) {
  let d = Infinity;
  for (let i = 0; i < STRAIT_AXIS.length - 1; i++)
    d = Math.min(d, distToSeg(x, z, STRAIT_AXIS[i][0], STRAIT_AXIS[i][1], STRAIT_AXIS[i + 1][0], STRAIT_AXIS[i + 1][1]).d);
  return d;
}
export const sloshMask = (x, z) => smoothstep(34, 6, straitDist(x, z)) * smoothstep(2, -3, minField(x, z));

// ---- exposure: how much open-sea swell reaches a point ----
const SWELL = { dx: 0.90, dz: 0.435 };
const IC = [-28, -22]; // island centre for the lee cone
export function exposureAt(x, z) {
  const sx = x - IC[0], sz = z - IC[1];
  const s = sx * SWELL.dx + sz * SWELL.dz;
  const lat = Math.abs(sx * -SWELL.dz + sz * SWELL.dx);
  const lee = smoothstep(8, 70, s) * (1 - smoothstep(150, 330, s)) * (1 - smoothstep(95, 155, lat));
  let e = 1 - 0.78 * lee;
  // sheltered village bay (behind the cape, north of the spit)
  const bayM = smoothstep(92, 108, x) * smoothstep(-26, -46, z)
    * (1 - smoothstep(-118, -146, z)) * (1 - smoothstep(136, 156, x));
  e = Math.min(e, 1 - 0.85 * bayM);
  // strait surge zone
  e = Math.max(e, 0.55 * sloshMask(x, z));
  return e;
}

// ---- terrain height ----
function rockNoise(x, z) { return fbm(x * 0.055, z * 0.055, 4) * 1.9 + fbm(x * 0.16, z * 0.16, 3) * 0.7; }

export function H(x, z) {
  const dI = islandField(x, z), dS = spitField(x, z), dM = mainlandField(x, z);
  const d = Math.min(dI, dS, dM);

  // ---- land ----
  // island: plateau tilting up toward NE tip, sheer broken cliffs
  const pI = Math.pow(clamp(-dI / 24, 0, 1), 0.8);
  const tAx = islandAxisT(x, z);
  const plateau = lerp(10.5, 23.5, smoothstep(0.18, 0.72, tAx)) - 2.5 * smoothstep(0.86, 1.0, tAx);
  let strata = Math.sin((x * 0.62 + z * 0.48) * 0.85 + fbm(x * 0.045, z * 0.045, 3) * 4.2) * 0.45;
  let hI = plateau * pI + rockNoise(x, z) * 2.5 * pI + strata * pI * smoothstep(8, 2, -dI) * 2.6;

  // spit: low gravel bar
  const pS = Math.pow(clamp(-dS / 5, 0, 1), 0.75);
  const hS = (1.7 + fbm(x * 0.11, z * 0.11, 3) * 0.5) * pS;

  // mainland: coastal platform + rising dry ridges
  const inland = -dM;
  const pM = Math.pow(clamp(inland / 14, 0, 1), 0.7);
  const ridgeN = 0.6 + 0.55 * (fbm(x * 0.0065, z * 0.0065, 4) * 0.5 + 0.5) + 0.22 * fbm(x * 0.02, z * 0.02, 3);
  const ridge = Math.pow(smoothstep(30, 330, inland), 1.3) * 92 * ridgeN;
  let hM = (3.4 + ridge) * pM + rockNoise(x, z) * 1.8 * pM;
  // flatten village terrace
  const vMx = smoothstep(VILLAGE.x + VILLAGE.w / 2, VILLAGE.x - VILLAGE.w / 2, Math.abs(x - VILLAGE.x));
  const vMz = smoothstep(VILLAGE.z + VILLAGE.h / 2, VILLAGE.z - VILLAGE.h / 2, Math.abs(z - VILLAGE.z));
  hM = lerp(hM, 3.6, vMx * vMz * pM);

  let landH = Math.max(hI, hS, hM);

  // pebble beach ramp in the bay
  const bd = beachDist(x, z);
  const beachM = smoothstep(15, 4, bd) * smoothstep(1.5, -2, d);
  landH = lerp(landH, 0.55 + clamp((15 - bd), 0, 12) * 0.10, beachM * 0.9);

  // footpath cut + memorial plaza
  const pd = pathDist(x, z);
  landH -= 0.45 * smoothstep(2.4, 0.6, pd) * smoothstep(1.5, -2, d);
  const plazaD = Math.hypot(x - PLAZA.x, z - PLAZA.z);
  landH = lerp(landH, 21.2, smoothstep(PLAZA.r + 2.5, PLAZA.r - 1.5, plazaD) * smoothstep(1.5, -2, d));

  // ---- sea bed ----
  const sd = shoreDist(x, z); // >0 in water
  let seabed = -2.6
    - 10.0 * smoothstep(4, 55, sd)
    - 25 * smoothstep(-30, -330, x - z * 0.35)            // deep basin toward open west
    + 3.4 * Math.exp(-((x + 92) * (x + 92)) / (62 * 62) - ((z - 28) * (z - 28)) / (24 * 24)) // offshore reef
    - 3.4 * sloshMask(x, z)                                // scoured strait
    + fbm(x * 0.045, z * 0.045, 4) * 2.6 * smoothstep(60, 12, sd)
    + fbm(x * 0.15, z * 0.15, 3) * 0.8;

  const land = smoothstep(1.4, -2.6, d);
  return lerp(seabed, landH, land);
}

// ---- slab boundary (irregular rounded display-piece outline) ----
export function boundaryRadius(theta) {
  const c = Math.cos(theta), s = Math.sin(theta);
  const ell = 1 / Math.sqrt((c * c) / (SLAB.a * SLAB.a) + (s * s) / (SLAB.b * SLAB.b));
  const wob = 1 + 0.055 * Math.sin(3 * theta + 1.2) + 0.042 * Math.sin(5 * theta + 4.1) + 0.028 * Math.sin(7 * theta + 2.2);
  return ell * wob;
}
export function boundaryPoint(theta) {
  const r = boundaryRadius(theta);
  return [Math.cos(theta) * r, Math.sin(theta) * r];
}
export function insideSlab(x, z, margin = 0) {
  return Math.hypot(x, z) < boundaryRadius(Math.atan2(z, x)) - margin;
}

// ---- baked data texture for the water shader + CPU queries ----
// R: depth/48, G: shore proximity, B: slosh, A: exposure
export const BAKE = { w: 512, h: 384, x0: -412, x1: 412, z0: -296, z1: 296 };

export function bakeMaps() {
  const { w, h, x0, x1, z0, z1 } = BAKE;
  const data = new Uint8Array(w * h * 4);
  for (let j = 0; j < h; j++) {
    const z = z0 + (z1 - z0) * (j / (h - 1));
    for (let i = 0; i < w; i++) {
      const x = x0 + (x1 - x0) * (i / (w - 1));
      const depth = Math.max(0, -H(x, z));
      const sd = shoreDist(x, z);
      const shore = clamp(1 - sd / 10, 0, 1);
      const slosh = sloshMask(x, z);
      const expo = exposureAt(x, z);
      const k = (j * w + i) * 4;
      data[k] = clamp(depth / 48, 0, 1) * 255;
      data[k + 1] = shore * 255;
      data[k + 2] = slosh * 255;
      data[k + 3] = expo * 255;
    }
  }
  const tex = new THREE_DataTexture(data, w, h);
  return { data, tex };
}
import * as THREE from 'three';
function THREE_DataTexture(data, w, h) {
  const t = new THREE.DataTexture(data, w, h, THREE.RGBAFormat);
  t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping;
  t.magFilter = t.minFilter = THREE.LinearFilter;
  t.needsUpdate = true;
  return t;
}

// bilinear CPU sample of the baked map (returns {depth, shore, slosh, expo})
export function sampleBake(baked, x, z) {
  const { w, h, x0, x1, z0, z1 } = BAKE;
  const fx = clamp((x - x0) / (x1 - x0) * (w - 1), 0, w - 1.001);
  const fz = clamp((z - z0) / (z1 - z0) * (h - 1), 0, h - 1.001);
  const i = Math.floor(fx), j = Math.floor(fz);
  const tx = fx - i, tz = fz - j;
  const d = baked.data;
  const out = [0, 0, 0, 0];
  for (let c = 0; c < 4; c++) {
    const v00 = d[(j * w + i) * 4 + c], v10 = d[(j * w + i + 1) * 4 + c];
    const v01 = d[((j + 1) * w + i) * 4 + c], v11 = d[((j + 1) * w + i + 1) * 4 + c];
    out[c] = lerp(lerp(v00, v10, tx), lerp(v01, v11, tx), tz) / 255;
  }
  return { depth: out[0] * 48, shore: out[1], slosh: out[2], expo: out[3] };
}
