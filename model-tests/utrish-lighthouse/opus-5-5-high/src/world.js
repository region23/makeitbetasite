// Landform of the diorama: Utrish Island, the strait, the Bolshoy Utrish cape and a slice of
// the Abrau ridge. Everything is built from signed-distance "features" sampled into a height grid.
// Axes: +x = east, +z = south, +y = up. Sea level is y = 0. Roughly 1 unit = 1 m for structures;
// horizontal distances of the landscape are compressed about 2x, as in a museum miniature.
import * as THREE from 'three';
import { mulberry32, createNoise2D, fbm2, ridged2, clamp, lerp, smoothstep } from './noise.js';
import { WAVES } from './waves.js';

const rng = mulberry32(1975);
const N1 = createNoise2D(rng);
const N2 = createNoise2D(rng);
const N3 = createNoise2D(rng);
const N4 = createNoise2D(rng);

export const BOUNDS = { x0: -216, x1: 216, z0: -177, z1: 177 };
export const OUTLINE = { cx: 0, cz: -2, rx: 176, rz: 134 };
export const BASE_Y = -42;

export function outlineR(th) {
  const c = Math.cos(th), s = Math.sin(th);
  const r = 1 / Math.sqrt((c * c) / (OUTLINE.rx * OUTLINE.rx) + (s * s) / (OUTLINE.rz * OUTLINE.rz));
  return r * (1 + 0.045 * Math.sin(3 * th + 0.7) + 0.03 * Math.sin(5 * th + 2.1) +
    0.016 * Math.sin(8 * th + 0.3) + 0.008 * Math.sin(13 * th + 1.3));
}
export function outlineMargin(x, z) {
  const dx = x - OUTLINE.cx, dz = z - OUTLINE.cz;
  return outlineR(Math.atan2(dz, dx)) - Math.hypot(dx, dz); // >0 inside
}

// ---------------------------------------------------------------- key sites
export const SITES = {
  head: { x: -80, z: -8, r: 32 },
  tower: { x: -79, z: -5 },
  chapel: { x: -99, z: 7 },
  slab: { x: -72.5, z: 3.5 },
  service: { x: -65, z: -17 },
  mast: { x: -89, z: -20 },
  knob: { x: 14, z: 63, r: 14 },
  bridge: { x0: -13.5, x1: 4.5, z: 57, deck: 3.05 },
  // pier of the "Fort Utrish" restaurant on the cape's north shore: root on the shore, heading out into the bay
  pier: { x: 49, z: -64, dx: -0.853, dz: -0.522, len: 22, deck: 1.75 },
};
export const ARM = [[-60, 13], [-53, 33], [-39, 47], [-24, 54], [-14, 57]];
const TAIL = { ax: -64, az: -26, bx: -20, bz: -46, ra: 12, rb: 4 };
export const PATHS = [
  [[-10, 57.2], [-24, 54], [-39, 47], [-53, 33], [-60, 13], [-66, 2], [-73, -2.5], [-79, -5]],
  [[-73, -2.5], [-86, 2], [-99, 7]],
  [[4.5, 57], [12, 55], [20, 52], [30, 46]],
  [[51.5, -62.6], [54.5, -63.6], [56.5, -64.6]], // from the restaurant pier up to the terrace
];
const CAPE = [[-3, 47], [-5, 22], [-4, -4], [2, -18], [14, -30], [32, -44], [52, -70], [68, -108], [80, -160],
  [260, -160], [260, 200], [190, 200], [150, 126], [112, 104], [76, 92], [48, 84], [30, 76]];
export const HOUSES = [
  { x: 30, z: -12, w: 7, d: 5, h: 3.2, rot: 0.35, wall: 0xf1ece0, roof: 0x8f3b2b },
  { x: 43, z: -25, w: 6, d: 6, h: 5.8, rot: 0.6, wall: 0xe9e1cf, roof: 0x3d5f8c },
  { x: 57, z: -11, w: 8, d: 5, h: 3.0, rot: 0.15, wall: 0xf4efe6, roof: 0x9b4a32 },
  { x: 36, z: 5, w: 6, d: 4.5, h: 3.0, rot: -0.2, wall: 0xefe5d2, roof: 0x7b3428 },
  { x: 63, z: -34, w: 6, d: 5, h: 3.4, rot: 0.8, wall: 0xf3eadb, roof: 0x9e5a3c },
  { x: 25, z: 27, w: 7, d: 5, h: 3.0, rot: -0.4, wall: 0xf0ede6, roof: 0x4a6d96 },
];
export const HANGAR = { x: 6, z: 12, w: 9, d: 16, rot: 0.04 };
export const RESTAURANT = { x: 61, z: -66, w: 13, d: 8 };
// world point on the pier: `along` metres seaward from the root, `side` metres across
// (matches the local frame of the pier group: local z = along, local x = side)
export function pierPoint(along, side = 0) {
  const P = SITES.pier;
  return [P.x + P.dx * along + P.dz * side, P.z + P.dz * along - P.dx * side];
}
// the kitesurfing water: open, wind-swept water in the island's lee, south of the causeway
export const KITE_ZONE = { x0: -110, x1: -24, z0: 84, cx: -66, cz: 101 };

// ---------------------------------------------------------------- SDF helpers
function sdSegment(px, pz, ax, az, bx, bz) {
  const pax = px - ax, paz = pz - az, bax = bx - ax, baz = bz - az;
  const h = clamp((pax * bax + paz * baz) / (bax * bax + baz * baz), 0, 1);
  return [Math.hypot(pax - bax * h, paz - baz * h), h];
}
function sdPolygon(px, pz, poly) {
  let d = Infinity, s = 1;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i, i++) {
    const vi = poly[i], vj = poly[j];
    const ex = vj[0] - vi[0], ez = vj[1] - vi[1];
    const wx = px - vi[0], wz = pz - vi[1];
    const h = clamp((wx * ex + wz * ez) / (ex * ex + ez * ez), 0, 1);
    const bx = wx - ex * h, bz = wz - ez * h;
    d = Math.min(d, bx * bx + bz * bz);
    const c1 = pz >= vi[1], c2 = pz < vj[1], c3 = ex * wz > ez * wx;
    if ((c1 && c2 && c3) || (!c1 && !c2 && !c3)) s = -s;
  }
  return s * Math.sqrt(d);
}
export function distToPolyline(px, pz, pts) {
  let d = Infinity;
  for (let i = 0; i < pts.length - 1; i++) {
    d = Math.min(d, sdSegment(px, pz, pts[i][0], pts[i][1], pts[i + 1][0], pts[i + 1][1])[0]);
  }
  return d;
}
const smax = (a, b, k) => 0.5 * (a + b + Math.sqrt((a - b) * (a - b) + k));

// ---------------------------------------------------------------- features
export function headInfo(x, z) {
  const H = SITES.head;
  const dx = x - H.x, dz = (z - H.z) / 0.9;
  const ang = Math.atan2(dz, dx);
  const ca = Math.cos(ang), sa = Math.sin(ang);
  const R0 = H.r + 3.2 * N1(ca * 1.3 + 3, sa * 1.3);
  const R = R0 + 1.7 * N2(ca * 3.5, sa * 3.5 + 5) + 0.8 * N3(ca * 9, sa * 9);
  const r = Math.hypot(dx, dz);
  const d = r - R;
  const dSmooth = r - R0; // low-frequency outline, used for the deep underwater slope
  // exposure of the shore: west, north-west and south-west faces are sheer cliffs
  const w = smoothstep(-0.3, 0.75, -ca + 0.25 * sa);
  return { d, dSmooth, w, cw: lerp(9, 2.6, w), ledge: lerp(1.2, 5.5, w) };
}
function headElev(x, z, hi) {
  const { d, w, cw, ledge } = hi;
  const cliffTop = 3.4 + 8.2 * w + 1.1 * N2(x * 0.07, z * 0.07);
  let e;
  if (d < -cw) {
    const t = smoothstep(0, 20, -d - cw);
    e = cliffTop + (16 - cliffTop) * t;
  } else if (d < 0) {
    const t = (d + cw) / cw;
    const s = t * 3, sf = s - Math.floor(s);
    const stepped = (Math.floor(s) + smoothstep(0.3, 0.7, sf)) / 3;
    const tt = lerp(t, stepped, 0.55 * w);
    e = lerp(cliffTop, 0.35, Math.pow(tt, lerp(1.35, 0.75, w)));
    e += 0.7 * w * Math.sin(Math.PI * t) * N1(x * 0.35, z * 0.35);
  } else if (d < ledge) {
    e = lerp(0.35, -0.9, d / ledge);
  } else {
    // away from the shore the small headland wiggles fade out, so the slope doesn't form radial grooves
    const dd = lerp(d, hi.dSmooth, smoothstep(ledge, ledge + 12, d));
    e = -0.9 - (dd - ledge) * lerp(0.75, 1.3, w) + 1.4 * fbm2(N4, x / 16, z / 16, 3) * smoothstep(ledge + 2, ledge + 10, d);
  }
  e += 0.55 * N3(x * 0.1, z * 0.1) * smoothstep(-2, -7, d);
  e += 0.5 * N1(x * 0.3 + 7, z * 0.3) * smoothstep(-1, 0.5, d) * smoothstep(ledge + 2, ledge - 0.5, d);
  return e;
}
function tailInfo(x, z) {
  const [dist, h] = sdSegment(x, z, TAIL.ax, TAIL.az, TAIL.bx, TAIL.bz);
  return dist - lerp(TAIL.ra, TAIL.rb, h) - 1.2 * N2(x * 0.08, z * 0.08);
}
function tailElev(d, x, z) {
  if (d < 0) return 1.25 + 0.9 * smoothstep(0, 6, -d) + 0.25 * N1(x * 0.2, z * 0.2);
  return 1.25 - d * 0.42;
}
function armInfo(x, z) {
  let best = Infinity;
  const n = ARM.length - 1;
  for (let i = 0; i < n; i++) {
    const [dist, h] = sdSegment(x, z, ARM[i][0], ARM[i][1], ARM[i + 1][0], ARM[i + 1][1]);
    const r = lerp(5.6, 4.4, (i + h) / n);
    best = Math.min(best, dist - r);
  }
  return best + 0.5 * N3(x * 0.25, z * 0.25);
}
function armElev(d, x, z) {
  // the causeway end that forms the island-side wall of the strait is steeper
  const wEnd = smoothstep(-26, -17, x) * smoothstep(44, 50, z);
  const e0 = lerp(-1.8, -1.0, wEnd), e1 = lerp(1.2, 0.6, wEnd);
  if (d < e0) return 2.4;
  if (d < e1) return lerp(2.4, lerp(-0.3, -1.8, wEnd), (d - e0) / (e1 - e0));
  return lerp(-0.3, -1.8, wEnd) - (d - e1) * lerp(0.75, 1.3, wEnd);
}
function knobInfo(x, z) {
  const K = SITES.knob;
  const a = Math.atan2(z - K.z, x - K.x);
  return Math.hypot(x - K.x, z - K.z) - (K.r + 1.4 * N1(Math.cos(a) * 2 + 9, Math.sin(a) * 2));
}
function knobElev(d, x) {
  // west face of the knob is the cape-side rock wall of the strait
  const wW = smoothstep(SITES.knob.x - 5, SITES.knob.x - 11, x);
  const ew = lerp(5, 1.4, wW);
  if (d < -ew) return 2.6 + 0.5 * smoothstep(5, 12, -d);
  if (d < 0) return lerp(2.6, lerp(0, -1.6, wW), Math.pow((d + ew) / ew, lerp(1.2, 0.8, wW)));
  return lerp(0, -1.6, wW) - d * lerp(0.42, 1.3, wW);
}
export function capeInfo(x, z) {
  const d = sdPolygon(x, z, CAPE) + 2.0 * N1(x * 0.04, z * 0.04) + 0.8 * N2(x * 0.12, z * 0.12);
  const wS = smoothstep(55, 78, z);
  const wN = smoothstep(-8, -30, z);
  const wQ = (1 - wS) * (1 - wN) * smoothstep(18, 4, x);
  const rate = 0.62 * smoothstep(20, 74, x + 9 * N2(x * 0.02, z * 0.02));
  const din = -d;
  let hill = Math.max(0, din - lerp(14, 6, wN)) * rate;
  hill *= 0.62 + 0.6 * ridged2(N3, x / 55, z / 55, 4);
  hill = 64 * (1 - Math.exp(-hill / 64));
  return { d, wS, wN, wQ, hill };
}
function capeElev(ci, x, z) {
  const { d, wN, wQ, hill } = ci;
  const din = -d;
  let shore;
  if (din >= 0) {
    const beach = Math.min(2.4, din * 0.24);
    const steep = Math.min(2.4, din * 0.9);
    const quay = Math.min(2.3, din * 6);
    shore = lerp(lerp(beach, steep, wN), quay, wQ);
  } else {
    const dd = -din;
    const slope = lerp(0.3, 0.8, wN);
    shore = lerp(-dd * slope, Math.max(-2.2, -dd * 6) - dd * 0.35, wQ);
  }
  const rough = 1.2 * fbm2(N4, x / 14, z / 14, 4) * smoothstep(0, 8, hill);
  return shore + hill + rough;
}
function seabedBase(x, z) {
  return -30 + 9 * smoothstep(-60, 160, x) + 1.6 * fbm2(N1, x / 40, z / 40, 3);
}
function lagoonFloor(x, z) {
  const e = Math.hypot((x + 30) / 26, (z - 6) / 38);
  const f = -5 + 0.8 * N2(x * 0.08, z * 0.08);
  return e < 1 ? f : f - (e - 1) * 40;
}

const PADS = [
  { x: SITES.tower.x, z: SITES.tower.z, r: 8, f: 4 },
  { x: SITES.chapel.x, z: SITES.chapel.z, r: 3.4, f: 3 },
  { x: SITES.slab.x, z: SITES.slab.z, r: 2.5, f: 2 },
  { x: SITES.service.x, z: SITES.service.z, r: 5.5, f: 3 },
  { x: SITES.mast.x, z: SITES.mast.z, r: 2, f: 2 },
  { x: 6.5, z: 57, r: 4, f: 3, h: 2.6 },
  { x: HANGAR.x, z: HANGAR.z, r: 10, f: 4 },
  { x: RESTAURANT.x, z: RESTAURANT.z, r: 9, f: 4 },
  ...HOUSES.map((hs) => ({ x: hs.x, z: hs.z, r: Math.max(hs.w, hs.d) * 0.6, f: 3 })),
];

function rawHeight(x, z) {
  let h = seabedBase(x, z);
  h = smax(h, lagoonFloor(x, z), 1.0);
  h = smax(h, headElev(x, z, headInfo(x, z)), 0.6);
  h = smax(h, tailElev(tailInfo(x, z), x, z), 0.6);
  h = smax(h, armElev(armInfo(x, z), x, z), 0.3);
  h = smax(h, knobElev(knobInfo(x, z), x), 0.6);
  h = smax(h, capeElev(capeInfo(x, z), x, z), 0.6);
  return h;
}
for (const p of PADS) if (p.h === undefined) p.h = rawHeight(p.x, p.z);

function fullHeight(x, z) {
  let h = rawHeight(x, z);
  for (const p of PADS) {
    const dd = Math.hypot(x - p.x, z - p.z);
    if (dd < p.r + p.f) h = lerp(h, p.h, smoothstep(p.r + p.f, p.r, dd));
  }
  return h;
}

// ---------------------------------------------------------------- height grid
export function buildField() {
  const step = 0.75;
  const nx = Math.round((BOUNDS.x1 - BOUNDS.x0) / step) + 1;
  const nz = Math.round((BOUNDS.z1 - BOUNDS.z0) / step) + 1;
  const H = new Float32Array(nx * nz);
  for (let j = 0; j < nz; j++) {
    const z = BOUNDS.z0 + j * step;
    for (let i = 0; i < nx; i++) H[j * nx + i] = fullHeight(BOUNDS.x0 + i * step, z);
  }
  function heightAt(x, z) {
    let fx = (x - BOUNDS.x0) / step, fz = (z - BOUNDS.z0) / step;
    fx = clamp(fx, 0, nx - 1.001); fz = clamp(fz, 0, nz - 1.001);
    const i = Math.floor(fx), j = Math.floor(fz), tx = fx - i, tz = fz - j;
    const k = j * nx + i;
    const a = H[k], b = H[k + 1], c = H[k + nx], d = H[k + nx + 1];
    return (a * (1 - tx) + b * tx) * (1 - tz) + (c * (1 - tx) + d * tx) * tz;
  }
  function gradAt(x, z) {
    const e = step;
    return [(heightAt(x + e, z) - heightAt(x - e, z)) / (2 * e), (heightAt(x, z + e) - heightAt(x, z - e)) / (2 * e)];
  }
  return { heightAt, gradAt, step };
}

// ---------------------------------------------------------------- surface classification
export function surfaceInfo(field, x, z) {
  const h = field.heightAt(x, z);
  const [gx, gz] = field.gradAt(x, z);
  const slope = Math.hypot(gx, gz);
  const hi = headInfo(x, z);
  const ci = capeInfo(x, z);
  const dArm = armInfo(x, z);
  const dTail = tailInfo(x, z);
  const dKnob = knobInfo(x, z);
  let rock = smoothstep(0.7, 1.25, slope);
  if (hi.d > -hi.cw - 1.5 && hi.d < hi.ledge + 3) {
    rock = Math.max(rock, smoothstep(-hi.cw - 1.5, -hi.cw + 0.5, hi.d) * (0.35 + 0.65 * hi.w));
  }
  if (dArm > -2.0 && dArm < 3) rock = Math.max(rock, 0.8 * smoothstep(-2.0, -1.2, dArm));
  const scarN = N4(x / 38, z / 38);
  if (ci.hill > 5 && slope > 0.45 && scarN > 0.15) rock = Math.max(rock, smoothstep(0.15, 0.4, scarN));
  if (ci.wN > 0.5 && ci.d > -6 && ci.d < 4 && slope > 0.4) rock = Math.max(rock, 0.8);
  if (h < -0.8) rock *= smoothstep(0.85, 1.4, slope); // gentle underwater slopes are sediment
  let peb = 0;
  if (ci.d > -14 && ci.d < 8) peb = Math.max(peb, (1 - ci.wQ) * (1 - ci.wN * 0.7) * smoothstep(-14, -9, ci.d));
  if (dKnob < 3) peb = Math.max(peb, smoothstep(-6, -2, dKnob));
  if (dTail < 4) peb = Math.max(peb, 0.9);
  if (hi.d > -hi.cw - 2 && hi.d < 6 && hi.w < 0.4) peb = Math.max(peb, 0.6 * (1 - hi.w / 0.4));
  let scrub = 0;
  if (ci.hill > 1.5) scrub = smoothstep(1.5, 7, ci.hill) * smoothstep(-0.45, 0.1, N2(x / 30, z / 30));
  let grass = 1;
  grass = Math.max(0, 1 - rock - peb * 0.9 - scrub);
  if (h < -1.5) grass = 0;
  const pathD = Math.min(distToPolyline(x, z, PATHS[0]), distToPolyline(x, z, PATHS[1]), distToPolyline(x, z, PATHS[2]) + 0.6, distToPolyline(x, z, PATHS[3]) + 0.3);
  const path = smoothstep(1.7, 0.9, pathD) * (h > 0.6 ? 1 : 0);
  let paved = 0;
  const dt = Math.hypot(x - SITES.tower.x, z - SITES.tower.z);
  paved = Math.max(paved, smoothstep(8.5, 7, dt));
  paved = Math.max(paved, smoothstep(5.5, 4.5, Math.hypot(x - SITES.service.x, z - SITES.service.z)));
  paved = Math.max(paved, smoothstep(9, 7, Math.hypot(x - 11, z - 52)) * (h > 1 ? 1 : 0));
  paved = Math.max(paved, smoothstep(11, 9, Math.hypot((x - HANGAR.x) * 0.8, z - HANGAR.z)));
  paved = Math.max(paved, smoothstep(10, 8, Math.hypot(x - RESTAURANT.x, z - RESTAURANT.z)) * (h > 1 ? 1 : 0));
  return { h, slope, rock, grass, scrub, peb, path, paved, hi, ci, dArm, dTail, dKnob };
}

// ---------------------------------------------------------------- water "bake" (exposure, depth, foam sources)
export function buildBake(field) {
  const bx = 432, bz = 354;
  const sx = (BOUNDS.x1 - BOUNDS.x0) / bx, sz = (BOUNDS.z1 - BOUNDS.z0) / bz;
  const N = bx * bz;
  const seabed = new Float32Array(N);
  const land = new Uint8Array(N);
  const rocky = new Uint8Array(N);
  for (let j = 0; j < bz; j++) {
    for (let i = 0; i < bx; i++) {
      const x = BOUNDS.x0 + (i + 0.5) * sx, z = BOUNDS.z0 + (j + 0.5) * sz;
      const k = j * bx + i;
      const h = field.heightAt(x, z);
      seabed[k] = h;
      land[k] = h > 0.2 ? 1 : 0;
      if (land[k]) {
        const hi = headInfo(x, z);
        const isRock = hi.d < hi.ledge + 1 && hi.d > -hi.cw - 3 ? hi.w > 0.25 : false;
        const isArm = armInfo(x, z) < 2.5;
        const ci = capeInfo(x, z);
        const isCapeN = ci.wN > 0.5 && ci.d > -8;
        const isKnobW = knobInfo(x, z) < 1 && x < 10;
        rocky[k] = isRock || isArm || isCapeN || isKnobW ? 1 : 0;
      }
    }
  }
  const sampleLand = (x, z) => {
    const i = Math.floor((x - BOUNDS.x0) / sx), j = Math.floor((z - BOUNDS.z0) / sz);
    if (i < 0 || j < 0 || i >= bx || j >= bz) return -1;
    return land[j * bx + i];
  };
  function exposure(dirx, dirz) {
    const E = new Float32Array(N);
    for (let j = 0; j < bz; j++) {
      for (let i = 0; i < bx; i++) {
        const k = j * bx + i;
        if (land[k]) { E[k] = -1; continue; }
        const x = BOUNDS.x0 + (i + 0.5) * sx, z = BOUNDS.z0 + (j + 0.5) * sz;
        let hit = -1;
        for (let s = 1.5; s < 320; s += 1.5) {
          const v = sampleLand(x - dirx * s, z - dirz * s);
          if (v < 0) break;
          if (v === 1) { hit = s; break; }
        }
        E[k] = hit < 0 ? 1 : 0.92 * Math.pow(clamp((hit - 2) / 260, 0, 1), 0.75);
      }
    }
    return maskedBlur(E, 4, 3);
  }
  // Blur that only averages water texels; land texels receive the average of nearby water.
  function maskedBlur(src, r, passes) {
    let a = Float32Array.from(src, (v) => Math.max(v, 0)), b = new Float32Array(N);
    for (let p = 0; p < passes; p++) {
      for (let dir = 0; dir < 2; dir++) {
        for (let j = 0; j < bz; j++) {
          for (let i = 0; i < bx; i++) {
            let s = 0, c = 0;
            for (let o = -r; o <= r; o++) {
              const ii = dir === 0 ? i + o : i, jj = dir === 0 ? j : j + o;
              if (ii < 0 || jj < 0 || ii >= bx || jj >= bz) continue;
              const nk = jj * bx + ii;
              if (!land[nk]) { s += a[nk]; c++; }
            }
            b[j * bx + i] = c > 0 ? s / c : 0;
          }
        }
        const t = a; a = b; b = t;
      }
    }
    return a;
  }
  function distanceTransform(mask) {
    const D = new Float32Array(N);
    for (let k = 0; k < N; k++) D[k] = mask[k] ? 0 : 1e6;
    const s2 = Math.SQRT2;
    for (let j = 0; j < bz; j++) for (let i = 0; i < bx; i++) {
      const k = j * bx + i; let v = D[k];
      if (i > 0) v = Math.min(v, D[k - 1] + 1);
      if (j > 0) {
        v = Math.min(v, D[k - bx] + 1);
        if (i > 0) v = Math.min(v, D[k - bx - 1] + s2);
        if (i < bx - 1) v = Math.min(v, D[k - bx + 1] + s2);
      }
      D[k] = v;
    }
    for (let j = bz - 1; j >= 0; j--) for (let i = bx - 1; i >= 0; i--) {
      const k = j * bx + i; let v = D[k];
      if (i < bx - 1) v = Math.min(v, D[k + 1] + 1);
      if (j < bz - 1) {
        v = Math.min(v, D[k + bx] + 1);
        if (i < bx - 1) v = Math.min(v, D[k + bx + 1] + s2);
        if (i > 0) v = Math.min(v, D[k + bx - 1] + s2);
      }
      D[k] = v;
    }
    for (let k = 0; k < N; k++) D[k] *= sx;
    return D;
  }
  const dirW = WAVES[0], dirS = WAVES[3];
  const expW = exposure(Math.cos(dirW.dir), Math.sin(dirW.dir));
  const expS = exposure(Math.cos(dirS.dir), Math.sin(dirS.dir));
  function boxBlur(src, r, passes) {
    let a = Float32Array.from(src), b = new Float32Array(N);
    for (let p = 0; p < passes; p++) {
      for (let dir = 0; dir < 2; dir++) {
        for (let j = 0; j < bz; j++) {
          for (let i = 0; i < bx; i++) {
            let s = 0, c = 0;
            for (let o = -r; o <= r; o++) {
              const ii = dir === 0 ? i + o : i, jj = dir === 0 ? j : j + o;
              if (ii < 0 || jj < 0 || ii >= bx || jj >= bz) continue;
              s += a[jj * bx + ii]; c++;
            }
            b[j * bx + i] = s / c;
          }
        }
        const t = a; a = b; b = t;
      }
    }
    return a;
  }
  const rockDist = distanceTransform(rocky);
  const coastDist = boxBlur(distanceTransform(land), 2, 3);

  const b1 = new Float32Array(N * 4), b2 = new Float32Array(N * 4);
  for (let j = 0; j < bz; j++) {
    for (let i = 0; i < bx; i++) {
      const k = j * bx + i;
      const x = BOUNDS.x0 + (i + 0.5) * sx, z = BOUNDS.z0 + (j + 0.5) * sz;
      const dStrait = sdSegment(x, z, -4.5, 44, -4.5, 72)[0];
      const strait = Math.exp(-(dStrait * dStrait) / 34) * smoothstep(0.5, -1.0, seabed[k]);
      const lag = smoothstep(1.05, 0.85, Math.hypot((x + 28) / 25, (z - 4) / 38));
      const cd = coastDist[k];
      // the restaurant pier sits in a small sheltered cove: damp the swell around it
      const [hx, hz] = pierPoint(14);
      const cove = Math.exp(-((x - hx) ** 2 + (z - hz) ** 2) / (24 * 24));
      b1[k * 4] = expW[k] * (1 - lag) * (1 - 0.7 * cove);
      b1[k * 4 + 1] = expS[k] * (1 - lag) * (1 - 0.7 * cove);
      b1[k * 4 + 2] = seabed[k];
      b1[k * 4 + 3] = clamp(1 - rockDist[k] / 7.5, 0, 1);
      b2[k * 4] = strait;
      b2[k * 4 + 1] = lag;
      b2[k * 4 + 2] = clamp(0.3 + 0.7 * Math.max(expW[k], expS[k] * 0.8), 0, 1) * (1 - 0.6 * lag);
      b2[k * 4 + 3] = clamp(cd / 40, 0, 1);
    }
  }
  const toTex = (arr) => {
    const h = new Uint16Array(arr.length);
    for (let i = 0; i < arr.length; i++) h[i] = THREE.DataUtils.toHalfFloat(arr[i]);
    const t = new THREE.DataTexture(h, bx, bz, THREE.RGBAFormat, THREE.HalfFloatType);
    t.magFilter = THREE.LinearFilter; t.minFilter = THREE.LinearFilter;
    t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping;
    t.needsUpdate = true;
    return t;
  };
  function sample(arr, x, z, out) {
    let fx = (x - BOUNDS.x0) / sx - 0.5, fz = (z - BOUNDS.z0) / sz - 0.5;
    fx = clamp(fx, 0, bx - 1.001); fz = clamp(fz, 0, bz - 1.001);
    const i = Math.floor(fx), j = Math.floor(fz), tx = fx - i, tz = fz - j;
    for (let c = 0; c < 4; c++) {
      const k = (j * bx + i) * 4 + c;
      const a = arr[k], b = arr[k + 4], cc = arr[k + bx * 4], d = arr[k + bx * 4 + 4];
      out[c] = (a * (1 - tx) + b * tx) * (1 - tz) + (cc * (1 - tx) + d * tx) * tz;
    }
    return out;
  }
  return {
    tex1: toTex(b1), tex2: toTex(b2),
    min: new THREE.Vector2(BOUNDS.x0, BOUNDS.z0),
    size: new THREE.Vector2(BOUNDS.x1 - BOUNDS.x0, BOUNDS.z1 - BOUNDS.z0),
    sample1: (x, z, out = [0, 0, 0, 0]) => sample(b1, x, z, out),
    sample2: (x, z, out = [0, 0, 0, 0]) => sample(b2, x, z, out),
  };
}

// ---------------------------------------------------------------- meshes
export const NA = 720;

function outlinePoint(th, t = 1) {
  const r = outlineR(th) * t;
  return [OUTLINE.cx + r * Math.cos(th), OUTLINE.cz + r * Math.sin(th)];
}

// Concentric rings whose segment count grows with radius, so triangles stay a similar size
// everywhere (a fixed count per ring makes needle-thin triangles near the centre).
function radialRings(NR) {
  const rings = [{ start: 0, n: 1, t: 0 }];
  let count = 1;
  for (let i = 1; i <= NR; i++) {
    const t = i / NR;
    const n = i === NR ? NA : Math.max(6, Math.min(NA, Math.round(NA * t)));
    rings.push({ start: count, n, t });
    count += n;
  }
  return { rings, count };
}
function radialIndices(rings, keep) {
  const idx = [];
  const push = (a, b, c) => { if (!keep || keep(a, b, c)) idx.push(a, b, c); };
  const r1 = rings[1];
  for (let j = 0; j < r1.n; j++) push(0, r1.start + ((j + 1) % r1.n), r1.start + j);
  for (let i = 1; i < rings.length - 1; i++) {
    const A = rings[i], B = rings[i + 1];
    let a = 0, b = 0;
    while (a < A.n || b < B.n) {
      const va = A.start + (a % A.n), vb = B.start + (b % B.n);
      if (b >= B.n || (a < A.n && (a + 1) / A.n <= (b + 1) / B.n)) {
        push(va, A.start + ((a + 1) % A.n), vb); a++;
      } else {
        push(va, B.start + ((b + 1) % B.n), vb); b++;
      }
    }
  }
  return idx;
}
function forEachRingVertex(rings, fn) {
  fn(0, OUTLINE.cx, OUTLINE.cz, 0);
  for (let i = 1; i < rings.length; i++) {
    const R = rings[i];
    for (let k = 0; k < R.n; k++) {
      const [x, z] = outlinePoint((k / R.n) * Math.PI * 2, R.t);
      fn(R.start + k, x, z, i);
    }
  }
}

export function buildTerrainGeometry(field) {
  const { rings, count } = radialRings(250);
  const pos = new Float32Array(count * 3), nor = new Float32Array(count * 3);
  const mat = new Float32Array(count * 4), mat2 = new Float32Array(count * 2);
  forEachRingVertex(rings, (k, x, z) => {
    const s = surfaceInfo(field, x, z);
    const [gx, gz] = field.gradAt(x, z);
    const l = Math.hypot(gx, 1, gz);
    pos.set([x, s.h, z], k * 3);
    nor.set([-gx / l, 1 / l, -gz / l], k * 3);
    mat.set([s.rock, s.grass, s.scrub, s.peb], k * 4);
    mat2.set([s.path, s.paved], k * 2);
  });
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.BufferAttribute(nor, 3));
  g.setAttribute('aMat', new THREE.BufferAttribute(mat, 4));
  g.setAttribute('aMat2', new THREE.BufferAttribute(mat2, 2));
  g.setIndex(radialIndices(rings));
  g.computeBoundingSphere();
  return g;
}

export function buildWaterGeometry(field) {
  const NR = 230;
  const { rings, count } = radialRings(NR);
  const pos = new Float32Array(count * 3), edge = new Float32Array(count);
  const hgt = new Float32Array(count);
  forEachRingVertex(rings, (k, x, z, i) => {
    pos.set([x, 0, z], k * 3);
    edge[k] = i === NR ? 1 : smoothstep(NR - 4, NR, i) * 0.85;
    hgt[k] = field.heightAt(x, z);
  });
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('aEdge', new THREE.BufferAttribute(edge, 1));
  g.setIndex(radialIndices(rings, (a, b, c) => Math.min(hgt[a], hgt[b], hgt[c]) < 3.2));
  g.computeBoundingSphere();
  return g;
}

function outlineSamples(field) {
  const pts = [];
  let arc = 0, px = 0, pz = 0;
  for (let j = 0; j <= NA; j++) {
    const th = (j / NA) * Math.PI * 2;
    const [x, z] = outlinePoint(th);
    if (j > 0) arc += Math.hypot(x - px, z - pz);
    px = x; pz = z;
    const e = 0.01;
    const [x1, z1] = outlinePoint(th + e), [x0, z0] = outlinePoint(th - e);
    let nx = z1 - z0, nz = -(x1 - x0);
    const l = Math.hypot(nx, nz); nx /= l; nz /= l;
    if (nx * (x - OUTLINE.cx) + nz * (z - OUTLINE.cz) < 0) { nx = -nx; nz = -nz; }
    pts.push({ x, z, nx, nz, arc, h: field.heightAt(x, z), s: surfaceInfo(field, x, z) });
  }
  return pts;
}

export function buildWallGeometries(field) {
  const pts = outlineSamples(field);
  // terrain cut-away wall
  const n = pts.length;
  const pos = [], nor = [], top = [], arcA = [], mat = [], idx = [];
  for (let j = 0; j < n; j++) {
    const p = pts[j];
    const yTop = p.h;
    pos.push(p.x, yTop, p.z, p.x, BASE_Y, p.z);
    nor.push(p.nx, 0, p.nz, p.nx, 0, p.nz);
    top.push(yTop, yTop);
    arcA.push(p.arc, p.arc);
    const m = [p.s.rock, p.s.grass, p.s.scrub, p.s.peb];
    mat.push(...m, ...m);
    if (j < n - 1) { const a = j * 2; idx.push(a, a + 2, a + 1, a + 1, a + 2, a + 3); }
  }
  const wall = new THREE.BufferGeometry();
  wall.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  wall.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
  wall.setAttribute('aTop', new THREE.Float32BufferAttribute(top, 1));
  wall.setAttribute('aArc', new THREE.Float32BufferAttribute(arcA, 1));
  wall.setAttribute('aMat', new THREE.Float32BufferAttribute(mat, 4));
  wall.setIndex(idx);

  // water cross-section wall
  const wpos = [], wtop = [], warc = [], widx = [];
  for (let j = 0; j < n; j++) {
    const p = pts[j];
    const sea = p.h < 0;
    // over land the strip collapses to a point at sea level
    wpos.push(p.x, 0, p.z, p.x, sea ? p.h : 0, p.z);
    wtop.push(sea ? 1 : 0, 0);
    warc.push(p.arc, p.arc);
    if (j < n - 1) { const a = j * 2; widx.push(a, a + 2, a + 1, a + 1, a + 2, a + 3); }
  }
  const water = new THREE.BufferGeometry();
  water.setAttribute('position', new THREE.Float32BufferAttribute(wpos, 3));
  water.setAttribute('aTop', new THREE.Float32BufferAttribute(wtop, 1));
  water.setAttribute('aArc', new THREE.Float32BufferAttribute(warc, 1));
  water.setIndex(widx);

  // display base (plinth) below the cut-away
  const bpos = [], bidx = [];
  const off = 3.2, yA = BASE_Y, yB = BASE_Y - 9;
  for (let j = 0; j < n; j++) {
    const p = pts[j];
    bpos.push(p.x, yA, p.z, p.x + p.nx * off, yA, p.z + p.nz * off,
      p.x + p.nx * off, yB, p.z + p.nz * off, p.x + p.nx * (off - 1.2), yB - 1.2, p.z + p.nz * (off - 1.2));
    if (j < n - 1) {
      const a = j * 4, b = a + 4;
      bidx.push(a, b, a + 1, a + 1, b, b + 1, a + 1, b + 1, a + 2, a + 2, b + 1, b + 2, a + 2, b + 2, a + 3, a + 3, b + 2, b + 3);
    }
  }
  const base = new THREE.BufferGeometry();
  base.setAttribute('position', new THREE.Float32BufferAttribute(bpos, 3));
  base.setIndex(bidx);
  base.computeVertexNormals();
  return { wall, water, base, outline: pts };
}
