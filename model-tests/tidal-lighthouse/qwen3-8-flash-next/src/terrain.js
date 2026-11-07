/**
 * terrain.js — procedural heightfield + masks for the diorama.
 *
 * Everything (island mesh, water depth/shelter texture, prop placement,
 * vegetation scatter) is derived from the single function `ground(x, z)`
 * so land and water always agree.
 *
 * Layout (world units, 1 unit ~ 1 metre):
 *   +Z  : exposed coast — swell rolls in from here and breaks on a reef
 *   +X  : sheltered harbour mouth, jetty and moored boats
 *   -X  : high rocky headland (lighthouse) with a sea stack beyond
 *   -Z  : back ridge behind the cottage
 *   sun : low in the +Z / -X sky (late afternoon)
 */

export const CUT_DEPTH = -9.0; // bottom of the cutaway diorama slab
export const SEA_RANGE = 36; // sea data texture covers [-SEA_RANGE, SEA_RANGE]
export const SEA_SIZE = 320; // texels per side

/* ------------------------------------------------------------------ noise */

function hash2(ix, iz, seed) {
  let h = Math.imul(ix, 374761393) + Math.imul(iz, 668265263) + Math.imul(seed, 144665);
  h = (h ^ (h >>> 13)) >>> 0;
  h = Math.imul(h, 1274126177) >>> 0;
  return ((h ^ (h >>> 16)) >>> 0) / 4294967295;
}

const fade = (t) => t * t * t * (t * (t * 6 - 15) + 10);

/** smooth value noise, roughly in [0,1] */
export function noise2(x, z, seed = 1) {
  const xi = Math.floor(x), zi = Math.floor(z);
  const xf = x - xi, zf = z - zi;
  const u = fade(xf), v = fade(zf);
  const a = hash2(xi, zi, seed);
  const b = hash2(xi + 1, zi, seed);
  const c = hash2(xi, zi + 1, seed);
  const d = hash2(xi + 1, zi + 1, seed);
  return (a * (1 - u) + b * u) * (1 - v) + (c * (1 - u) + d * u) * v;
}

/** fractal noise, in [0,1] */
export function fbm(x, z, octaves = 4, seed = 1) {
  let amp = 0.5, freq = 1, sum = 0, norm = 0;
  for (let i = 0; i < octaves; i++) {
    sum += amp * noise2(x * freq, z * freq, seed + i * 37);
    norm += amp;
    amp *= 0.5;
    freq *= 2.03;
  }
  return sum / norm;
}

/** ridged multifractal, in [0,1], good for craggy rock */
export function ridged(x, z, octaves = 4, seed = 7) {
  let amp = 0.5, freq = 1, sum = 0, norm = 0;
  for (let i = 0; i < octaves; i++) {
    const n = 1 - Math.abs(noise2(x * freq, z * freq, seed + i * 37) * 2 - 1);
    sum += amp * n * n;
    norm += amp;
    amp *= 0.5;
    freq *= 2.07;
  }
  return sum / norm;
}

export function mulberry32(a) {
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/* ------------------------------------------------------------- math utils */

export const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
export const lerp = (a, b, t) => a + (b - a) * t;

export function smoothstep(e0, e1, x) {
  const t = clamp((x - e0) / (e1 - e0), 0, 1);
  return t * t * (3 - 2 * t);
}

/* ------------------------------------------------------------- key places */

export const PLACES = {
  lighthouse: { x: -8.2, z: 4.2 },
  cottage: { x: -3.4, z: -2.6 },
  jettyRoot: { x: 3.6, z: -4.6 },
  jettyHead: { x: 6.6, z: -0.6 },
  harbor: { x: 7.6, z: 2.6 },
  boats: [
    { x: 6.4, z: 0.5, a: 2.4 },
    { x: 9.6, z: 2.7, a: -0.9 },
  ],
  mouth: { x: 15.0, z: 5.0 },
  stack: { x: -13.0, z: 9.2 },
  arch: { x: -3.0, z: 11.0 },
};

/** flat pads so buildings and the jetty stand on level ground */
const PADS = [
  { x: PLACES.lighthouse.x, z: PLACES.lighthouse.z, rad: 5.0, flat: 0.6, keep: 0.1 },
  { x: PLACES.cottage.x + 0.5, z: PLACES.cottage.z + 0.7, rad: 4.6, flat: 0.55, keep: 0.12 },
  // quay apron behind the jetty head: a flat shingle yard for gear and sheds
  { x: 4.3, z: -5.7, rad: 3.4, flat: 0.45, keep: 0.22, at: 1.15 },
];
const padHeight = new Map();

/** [cx, cz, radius, uplift, flatTopFraction] — hills standing on the bank */
const HILLS = [
  [-8.2, 4.2, 7.6, 12.6, 0.3], // headland (lighthouse)
  [-2.0, 6.4, 5.2, 8.9, 0.16], // south arm, ends in the surf
  [-6.2, -6.8, 7.8, 9.4, 0.32], // back ridge
  [-14.6, -2.4, 5.2, 7.1, 0.26], // west knoll
  [11.4, -3.6, 6.2, 5.9, 0.22], // east spit closing the harbour
  [15.0, 1.0, 4.2, 5.1, 0.18], // spit tip
  [5.2, -4.6, 4.8, 5.4, 0.22], // neck / shore platform
  [-7.4, -1.4, 5.2, 7.9, 0.28], // saddle under the stair
];

/** irregular footprint radius of the display piece for a given angle */
export function footprintRadius(theta) {
  const nx = Math.cos(theta) * 1.7 + 4.3;
  const nz = Math.sin(theta) * 1.7 + 8.1;
  return 21.6 + (fbm(nx, nz, 3, 91) - 0.5) * 6.4;
}

/* ------------------------------------------------------------ heightfield */

/** hill profile: 1 over the flat top, 0 at the hill's edge */
function upliftProfile(d, flat) {
  const t = clamp((d - flat) / (1 - flat), 0, 1);
  return 1 - Math.pow(t, 1.7);
}

/**
 * Raw terrain elevation before the building pads. Sea level is y = 0.
 * The seabed (`base`) is a shallow bank and every hill is an uplift sitting on
 * top of it, so the coastline is wherever an uplift crosses sea level.
 */
function groundRaw(x, z) {
  const r = Math.hypot(x, z);
  const theta = Math.atan2(z, x);
  const R = footprintRadius(theta);

  // --- shallow bank around the island, deliberately kept under water
  const base = -3.6 + (fbm(x * 0.05 + 3.1, z * 0.05 - 1.7, 4, 21) - 0.5) * 2.2;

  // --- submerged reefs: swells steepen and break over them and the water
  //     above turns turquoise.  A = exposed front, B = -X flank, C = far side
  const ang = ((Math.atan2(z, x) * 180) / Math.PI + 360) % 360;
  const reefA = Math.exp(-Math.pow((r - 15.0) / 2.7, 2)) * smoothstep(36, 50, ang) * (1 - smoothstep(126, 140, ang));
  const reefB = Math.exp(-Math.pow((r - 12.4) / 2.2, 2)) * smoothstep(146, 158, ang) * (1 - smoothstep(196, 210, ang));
  const reefC = Math.exp(-Math.pow((r - 13.4) / 2.2, 2)) * smoothstep(236, 250, ang) * (1 - smoothstep(302, 316, ang));
  const reefW = clamp(reefA * 1.2 + reefB * 1.05 + reefC * 0.7, 0, 1);

  // --- land uplifts; `near` gates the coastal erosion noise
  let land = 0;
  let near = 0;
  for (let i = 0; i < HILLS.length; i++) {
    const hl = HILLS[i];
    const d = Math.hypot(x - hl[0], z - hl[1]) / hl[2];
    if (d >= 1.45) continue;
    if (d < 1) land = Math.max(land, hl[3] * upliftProfile(d, hl[4]));
    near = Math.max(near, 1 - smoothstep(0.5, 1.3, d));
  }
  const crag = (ridged(x * 0.17, z * 0.17, 4, 13) - 0.4) * 4.6;
  const fine = (fbm(x * 0.42, z * 0.42, 4, 5) - 0.5) * 1.7;
  const gully = (fbm(x * 0.52 + 11, z * 0.52 - 7, 3, 149) - 0.5) * 1.8;
  const rib = (fbm(x * 0.95 + 4.1, z * 0.95 - 2.7, 2, 271) - 0.5) * 0.8;
  land += (crag + fine + gully + rib) * smoothstep(0.05, 2.6, land);

  let h = base + land;

  // --- fringing reef flat: a ring just inside the rim.  Shallow and bright on
  //     the lee sides, deeper on the exposed front so swells have room to
  //     steepen before they break over it
  // the fringing shelf is not a clean annulus: its width wanders with angle so
  // the surf line is broken and irregular all the way round
  const ringGap = 0.45 + 1.05 * fbm(Math.cos(theta) * 2.6 + 4.4, Math.sin(theta) * 2.6 - 1.8, 3, 173);
  const ringW =
    smoothstep(R - 9.6, R - 6.2, r) *
    (1 - smoothstep(R - 1.8, R + 0.4, r)) *
    (1 - smoothstep(-0.2, 0.8, land)) *
    clamp(ringGap, 0, 1.35);
  const exposed = smoothstep(40, 62, ang) * (1 - smoothstep(118, 138, ang));
  const flatLevel = lerp(-1.95, -3.1, exposed) + (fbm(x * 0.24 - 4.1, z * 0.24 + 8.3, 3, 133) - 0.5) * 0.95;
  h = lerp(h, flatLevel, ringW * 0.92);

  // --- rock detail: benches, gullies and cracks, strongest on the flanks.
  // Added before the pads and cuttings below, so building ground stays flat.
  const detail = smoothstep(-0.4, 1.6, h) * near;
  h += (fbm(x * 0.8 + 7.7, z * 0.8 - 3.3, 3, 337) - 0.5) * 0.85 * detail;
  h += (ridged(x * 0.62 - 5.5, z * 0.62 + 9.1, 2, 349) - 0.45) * 0.62 * detail;

  // --- sea arch: a low rocky head just off the south arm with a slot cut
  //     through it, so the arch stands on rock and the swell runs under it
  {
    const ax = x - PLACES.arch.x;
    const az = z - PLACES.arch.z;
    const nX = Math.sin(0.5);
    const nZ = Math.cos(0.5);
    const along = ax * nX + az * nZ; // through the opening
    const across = ax * nZ - az * nX; // between the buttresses
    const rr = Math.hypot(ax, az);
    const head = 1 - smoothstep(2.6, 6.4, rr);
    h = lerp(h, Math.max(h, 1.45 + (fbm(x * 0.9 + 5.5, z * 0.9 - 1.5, 3, 383) - 0.5) * 0.7), head * 0.92);
    const slot =
      (1 - smoothstep(1.55, 2.75, Math.abs(across))) *
      (1 - smoothstep(2.0, 5.8, Math.abs(along))) *
      head;
    h = lerp(h, Math.min(h, -0.85), slot);
  }

  // reefs pull the seabed up toward their own shelf level
  const reefLevel = -1.3 + (fbm(x * 0.21 + 7.7, z * 0.21 - 2.3, 3, 121) - 0.5) * 1.5;
  h = lerp(h, Math.max(reefLevel, -0.35), reefW * 0.94);

  // --- harbour basin cut down to a sand floor (never raised)
  const bowl = 1 - smoothstep(2.2, 8.8, Math.hypot(x - PLACES.harbor.x, z - PLACES.harbor.z));
  const floorY = -2.75 + (fbm(x * 0.35, z * 0.35, 3, 41) - 0.5) * 0.8;
  h = lerp(h, Math.min(h, floorY), bowl);

  // --- entrance channel toward +X
  const axisZ = PLACES.mouth.z - (x - PLACES.mouth.x) * 0.34;
  const chLen =
    smoothstep(9.0, 13.5, x) * (1 - smoothstep(18.5, 24, x)) * (1 - smoothstep(1.2, 4.2, Math.abs(z - axisZ)));
  h = lerp(h, Math.min(h, -2.8), chLen);

  // sand flat in the inner harbour, seen through clear water
  const flat = 1 - smoothstep(1.4, 6.4, Math.hypot(x - 5.2, z - 0.4));
  h = lerp(h, -1.85 + (fbm(x * 0.6, z * 0.6, 3, 61) - 0.5) * 0.55, flat * 0.8);
  // shore platform below the quay — a low shelf the water washes over at low tide
  const sp = 1 - smoothstep(1.2, 4.4, Math.hypot(x - 3.4, z + 2.4));
  h = lerp(h, -1.0 + (fbm(x * 0.7 + 3.3, z * 0.7, 3, 71) - 0.5) * 0.5, sp * 0.9);

  // --- raised beach: a broad shingle foot around every headland, so the
  //     coastline reads as land meeting water instead of rock poking out of it
  const harbourNear = 1 - smoothstep(7.5, 14.5, Math.hypot(x - PLACES.harbor.x, z - PLACES.harbor.z));
  const beachBand = smoothstep(-1.05, -0.25, h) * (1 - smoothstep(0.25, 1.0, h)) * near * (1 - harbourNear * 0.92);
  const terrace = 0.3 + (fbm(x * 0.4 + 9.1, z * 0.4 + 3.3, 3, 157) - 0.5) * 0.42;
  h = lerp(h, Math.max(h, terrace), beachBand * 0.6);

  // ragged, indented waterline — a gaussian band around y = 0, gated to the
  // neighbourhood of real land so the noise sculpts the coast without
  // inventing new islands out on the bank
  const band = Math.exp(-Math.pow(h / 1.45, 2)) * near;
  h += (fbm(x * 0.44 + 2.2, z * 0.44 - 5.1, 4, 33) - 0.5) * 3.0 * band;

  // --- drop the bank off into deep water outside the footprint
  const out = smoothstep(R - 2.4, R + 3.2, r);
  const deep = -6.4 - (r - R) * 1.6;
  h = lerp(h, Math.min(h, deep), out);

  return Math.max(h, -14);
}

/**
 * Ground elevation (world y) at a point. Water level is y = 0.
 */
export function ground(x, z) {
  let h = groundRaw(x, z);
  for (let i = 0; i < PADS.length; i++) {
    const p = PADS[i];
    const d = Math.hypot(x - p.x, z - p.z) / p.rad;
    if (d >= 1) continue;
    const key = i;
    let ph = padHeight.get(key);
    if (ph === undefined) {
      ph = p.at !== undefined ? p.at : groundRaw(p.x, p.z);
      padHeight.set(key, ph);
    }
    const w = 1 - smoothstep(p.flat, 1, d);
    h = lerp(h, ph + (h - ph) * p.keep, w);
  }
  return h;
}

/** surface normal of the heightfield (finite difference) */
export function groundNormal(x, z, eps = 0.26) {
  const hl = ground(x - eps, z);
  const hr = ground(x + eps, z);
  const hd = ground(x, z - eps);
  const hu = ground(x, z + eps);
  const nx = (hl - hr) / (2 * eps);
  const nz = (hd - hu) / (2 * eps);
  const l = Math.hypot(nx, 1, nz);
  return { x: nx / l, y: 1 / l, z: nz / l };
}

/** how far a point sits inside the footprint, 1 = centre, 0 = outside */
export function insideBank(x, z) {
  const r = Math.hypot(x, z);
  const R = footprintRadius(Math.atan2(z, x));
  return 1 - smoothstep(R - 2.5, R + 1.0, r);
}

/* ------------------------------------------------ wave field (calm + lag) */

/** direction the dominant swell travels toward (unit, xz) */
export const SWELL_DIR = [-0.155, -0.988];

/**
 * Walk up-wave from a point.  Two things come out of the same march:
 *  - calm: wave energy that survives the shallows and land up-wave
 *  - dT:   extra travel time (s) spent crawling over the bank relative to deep
 *          water, which is what bends and compresses the crest lines
 * `celerity(depth)` is the wave speed in m/s for the dominant swell.
 */
function waveFieldAt(x, z, celerity) {
  const h0 = ground(x, z);
  if (h0 > 0.3) return { calm: 1, dT: 0 };
  const c0 = celerity(12);
  let energy = 1;
  let dT = 0;
  const steps = 17;
  const ds = 1.7;
  for (let s = 1; s <= steps; s++) {
    const sx = x + SWELL_DIR[0] * -1 * s * ds;
    const sz = z + SWELL_DIR[1] * -1 * s * ds;
    const h = ground(sx, sz);
    const d = Math.max(-h, 0);
    energy *= 1 - smoothstep(-1.6, -0.4, h) * 0.2 - smoothstep(-0.35, 0.5, h) * 0.55;
    dT += ds * (1 / Math.max(celerity(d), 0.6) - 1 / c0);
    if (energy < 0.004 && s > 6) break;
  }
  const calm = Math.min(1 - energy, 0.72); // wave shadow, but never glass
  const hd = Math.hypot(x - PLACES.harbor.x, z - PLACES.harbor.z);
  const harborMask = smoothstep(13.5, 4.0, hd) * smoothstep(0.35, -1.0, h0);
  return { calm: clamp(Math.max(calm, harborMask * 0.93), 0, 0.95), dT: clamp(dT, 0, 8) };
}

/* --------------------------------------------------- half float conversion */

const _f32 = new Float32Array(1);
const _u32 = new Uint32Array(_f32.buffer);

function toHalf(value) {
  _f32[0] = value;
  const x = _u32[0];
  const sign = (x >> 16) & 0x8000;
  const e = ((x >> 23) & 0xff) - 127 + 15;
  const mant = x & 0x007fffff;
  if (e >= 31) return (sign | 0x7c00 | (mant ? 0x200 : 0)) >>> 0; // inf / nan
  if (e <= 0) return sign >>> 0; // flush tiny values (|v| < 6e-5) to zero
  return (sign | (e << 10) | (mant >> 13)) >>> 0;
}

/* ------------------------------------------------------- sea data texture */

/**
 * Sea lookup table over the world square [-SEA_RANGE, SEA_RANGE], used both as
 * an RGBA half-float data texture for the shaders and as plain arrays for the
 * CPU-side wave sampler (boats, dolphins, foam need the same numbers).
 *
 *   R = ground height (world y)
 *   G = calm / shelter 0..1   (1 = flat harbour water, 0 = exposed ocean)
 *   B = sandy ripple mask 0..1 (shallow-water bed detail)
 *   A = wave travel-time lag in seconds, scaled to 0..1 by lagScale
 *
 * @param {(depth:number)=>number} celerity wave speed for the dominant swell
 */
export function buildSeaData(celerity, lagScale = 6) {
  const n = SEA_SIZE;

  // calm and travel-time lag are solved on a coarse grid (each sample marches
  // up-wave), then blurred and upsampled — a full-resolution march would cost
  // millions of heightfield evaluations for no visible gain
  const c = 132;
  const coarseCalm = new Float32Array(c * c);
  const coarseLag = new Float32Array(c * c);
  for (let j = 0; j < c; j++) {
    const z = (j / (c - 1)) * 2 * SEA_RANGE - SEA_RANGE;
    for (let i = 0; i < c; i++) {
      const x = (i / (c - 1)) * 2 * SEA_RANGE - SEA_RANGE;
      const f = waveFieldAt(x, z, celerity);
      coarseCalm[j * c + i] = f.calm;
      coarseLag[j * c + i] = f.dT;
    }
  }
  const tmp = new Float32Array(c * c);
  const blur = (src, dst) => {
    for (let j = 0; j < c; j++) {
      for (let i = 0; i < c; i++) {
        let s = 0,
          k = 0;
        for (let dj = -2; dj <= 2; dj++) {
          const jj = j + dj;
          if (jj < 0 || jj >= c) continue;
          for (let di = -2; di <= 2; di++) {
            const ii = i + di;
            if (ii < 0 || ii >= c) continue;
            s += src[jj * c + ii];
            k++;
          }
        }
        dst[j * c + i] = s / k;
      }
    }
  };
  blur(coarseCalm, tmp);
  blur(tmp, coarseCalm);
  blur(coarseLag, tmp);
  blur(tmp, coarseLag);

  const upsample = (src, x, z) => {
    const fx = ((x + SEA_RANGE) / (2 * SEA_RANGE)) * (c - 1);
    const fz = ((z + SEA_RANGE) / (2 * SEA_RANGE)) * (c - 1);
    const i = clamp(Math.floor(fx), 0, c - 2);
    const j = clamp(Math.floor(fz), 0, c - 2);
    const u = clamp(fx - i, 0, 1);
    const v = clamp(fz - j, 0, 1);
    return lerp(lerp(src[j * c + i], src[j * c + i + 1], u), lerp(src[(j + 1) * c + i], src[(j + 1) * c + i + 1], u), v);
  };

  const data = new Uint16Array(n * n * 4);
  const height = new Float32Array(n * n);
  const calm = new Float32Array(n * n);
  const lag = new Float32Array(n * n);
  for (let j = 0; j < n; j++) {
    const z = (j / (n - 1)) * 2 * SEA_RANGE - SEA_RANGE;
    for (let i = 0; i < n; i++) {
      const x = (i / (n - 1)) * 2 * SEA_RANGE - SEA_RANGE;
      const h = ground(x, z);
      const cm = clamp(upsample(coarseCalm, x, z), 0, 1);
      const lg = clamp(upsample(coarseLag, x, z) / lagScale, 0, 1);
      const shallow = smoothstep(-2.6, -0.2, h) * smoothstep(0.9, 0.2, h);
      const ripple = smoothstep(0.3, 0.8, fbm(x * 0.5, z * 0.5, 3, 71));
      const o = (j * n + i) * 4;
      data[o] = toHalf(h);
      data[o + 1] = toHalf(cm);
      data[o + 2] = toHalf(clamp(shallow * (0.3 + 0.7 * ripple), 0, 1));
      data[o + 3] = toHalf(lg);
      height[j * n + i] = h;
      calm[j * n + i] = cm;
      lag[j * n + i] = lg * lagScale;
    }
  }
  return { data, size: n, range: SEA_RANGE, height, calm, lag, lagScale };
}

/** bilinear sampler over a buildSeaData() result, in world xz */
export function makeSeaSampler(sea) {
  const n = sea.size;
  const r = sea.range;
  const at = (arr, x, z, out) => {
    const fx = clamp(((x + r) / (2 * r)) * (n - 1), 0, n - 1);
    const fz = clamp(((z + r) / (2 * r)) * (n - 1), 0, n - 1);
    const i = Math.floor(fx);
    const j = Math.floor(fz);
    const i1 = Math.min(i + 1, n - 1);
    const j1 = Math.min(j + 1, n - 1);
    const u = fx - i;
    const v = fz - j;
    const a = arr[j * n + i];
    const b = arr[j * n + i1];
    const c2 = arr[j1 * n + i];
    const d = arr[j1 * n + i1];
    return lerp(lerp(a, b, u), lerp(c2, d, u), v);
  };
  return {
    height: (x, z) => at(sea.height, x, z),
    calm: (x, z) => at(sea.calm, x, z),
    lag: (x, z) => at(sea.lag, x, z),
  };
}
