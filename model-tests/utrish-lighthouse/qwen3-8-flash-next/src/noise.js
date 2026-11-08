// Deterministic noise + signed-distance helpers. No external assets.

export function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const FRAC = 43758.5453123;

export function fract(x) {
  return x - Math.floor(x);
}

/** deterministic 2d hash -> [0,1) */
export function hash2(x, y, seed = 0) {
  const s = Math.sin(x * 127.1 + y * 311.7 + seed * 74.7) * FRAC;
  return s - Math.floor(s);
}

function smoother(t) {
  return t * t * t * (t * (t * 6 - 15) + 10);
}

/**
 * value noise on an integer lattice. If `period` (integer) is given the lattice
 * wraps, so the noise tiles over that many cells.
 */
export function vnoise(x, y, seed = 0, period = 0) {
  const xi = Math.floor(x);
  const yi = Math.floor(y);
  const xf = x - xi;
  const yf = y - yi;
  const w = (v) => (period > 0 ? ((v % period) + period) % period : v);
  const x0 = w(xi);
  const y0 = w(yi);
  const x1 = w(xi + 1);
  const y1 = w(yi + 1);
  const a = hash2(x0, y0, seed);
  const b = hash2(x1, y0, seed);
  const c = hash2(x0, y1, seed);
  const d = hash2(x1, y1, seed);
  const u = smoother(xf);
  const v = smoother(yf);
  return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
}

export function fbm(x, y, octaves = 4, seed = 0, period = 0, gain = 0.5) {
  let amp = 0.5;
  let sum = 0;
  let norm = 0;
  let fx = x;
  let fy = y;
  let p = period;
  for (let i = 0; i < octaves; i++) {
    sum += amp * vnoise(fx, fy, seed + i * 17, p);
    norm += amp;
    amp *= gain;
    fx *= 2.03;
    fy *= 2.01;
    if (p > 0) p *= 2;
  }
  return sum / norm;
}

export function ridged(x, y, octaves = 4, seed = 0) {
  let amp = 0.5;
  let sum = 0;
  let norm = 0;
  for (let i = 0; i < octaves; i++) {
    const n = 1 - Math.abs(vnoise(x, y, seed + i * 31) * 2 - 1);
    sum += amp * n * n;
    norm += amp;
    amp *= 0.5;
    x *= 2.07;
    y *= 2.03;
  }
  return sum / norm;
}

export function clamp(v, a, b) {
  return v < a ? a : v > b ? b : v;
}

export function sat(v) {
  return v < 0 ? 0 : v > 1 ? 1 : v;
}

export function lerp(a, b, t) {
  return a + (b - a) * t;
}

export function smoothstep(e0, e1, x) {
  const t = sat((x - e0) / (e1 - e0 || 1e-6));
  return t * t * (3 - 2 * t);
}

export function smin(a, b, k) {
  const h = sat(0.5 + (0.5 * (b - a)) / k);
  return b + (a - b) * h - k * h * (1 - h);
}

export function smax(a, b, k) {
  const h = sat(0.5 + (0.5 * (a - b)) / k);
  return b + (a - b) * h - k * h * (1 - h);
}

export function sdSeg(px, py, ax, ay, bx, by) {
  const pax = px - ax;
  const pay = py - ay;
  const bax = bx - ax;
  const bay = by - ay;
  const h = sat((pax * bax + pay * bay) / (bax * bax + bay * bay + 1e-9));
  const dx = pax - bax * h;
  const dy = pay - bay * h;
  return Math.sqrt(dx * dx + dy * dy);
}

/** cached polygon metadata: bounding box + radial horizon table about the centroid */
const polyMeta = new WeakMap();
const TAU = Math.PI * 2;

function metaOf(pts) {
  let m = polyMeta.get(pts);
  if (m) return m;
  let minX = 1e9; let maxX = -1e9; let minY = 1e9; let maxY = -1e9; let cx = 0; let cy = 0;
  for (const p of pts) {
    if (p[0] < minX) minX = p[0];
    if (p[0] > maxX) maxX = p[0];
    if (p[1] < minY) minY = p[1];
    if (p[1] > maxY) maxY = p[1];
    cx += p[0];
    cy += p[1];
  }
  cx /= pts.length;
  cy /= pts.length;
  const bins = 192;
  const rad = new Float32Array(bins);
  for (const p of pts) {
    const a = Math.atan2(p[1] - cy, p[0] - cx);
    const r = Math.hypot(p[0] - cx, p[1] - cy);
    let b = Math.floor(((a + Math.PI) / TAU) * bins) % bins;
    if (b < 0) b += bins;
    if (r > rad[b]) rad[b] = r;
  }
  // fill empty angular bins by interpolating between the nearest filled bins
  for (let i = 0; i < bins; i++) {
    if (rad[i] > 0) continue;
    let a = -1;
    let b = -1;
    for (let k = 1; k <= bins; k++) {
      const ia = (i - k + bins) % bins;
      if (rad[ia] > 0) { a = ia; break; }
    }
    for (let k = 1; k <= bins; k++) {
      const ib = (i + k) % bins;
      if (rad[ib] > 0) { b = ib; break; }
    }
    const ra = rad[a];
    const rb = rad[b];
    const wa = (((i - a + bins) % bins) || bins);
    const wb = (((b - i + bins) % bins) || bins);
    rad[i] = (ra * wb + rb * wa) / (wa + wb);
  }
  m = { minX, maxX, minY, maxY, cx, cy, bins, rad };
  polyMeta.set(pts, m);
  return m;
}

/** signed distance to a closed polygon; negative inside */
export function sdPoly(pts, x, y) {
  const m = metaOf(pts);
  // outside the box that contains the polygon
  if (x < m.minX || x > m.maxX || y < m.minY || y > m.maxY) {
    const dx = Math.max(m.minX - x, 0, x - m.maxX);
    const dy = Math.max(m.minY - y, 0, y - m.maxY);
    const db = Math.hypot(dx, dy);
    // far enough out that only saturated smooth masks read this value
    if (db > 45) return db;
  }
  const ddx = x - m.cx;
  const ddy = y - m.cy;
  const rr = Math.hypot(ddx, ddy);
  const bins = m.bins;
  let f = ((Math.atan2(ddy, ddx) + Math.PI) / TAU) * bins;
  f -= Math.floor(f / bins) * bins;
  const i0 = Math.floor(f);
  const ft = f - i0;
  const rEdge = m.rad[i0 % bins] * (1 - ft) + m.rad[(i0 + 1) % bins] * ft;
  const est = rr - rEdge;
  // the horizon estimate is only trusted well away from the boundary
  if (est > 20 || est < -20) return est;

  let d = 1e9;
  let s = -1;
  const n = pts.length;
  for (let i = 0, j = n - 1; i < n; j = i++) {
    const ax = pts[i][0];
    const ay = pts[i][1];
    const bx = pts[j][0];
    const by = pts[j][1];
    // winding for the sign
    if (ay > y !== by > y) {
      const t = (y - ay) / (by - ay);
      if (x < ax + t * (bx - ax)) s = -s;
    }
    const dd = sdSeg(x, y, ax, ay, bx, by);
    if (dd < d) d = dd;
  }
  // s starts "inside" and flips once per crossing of the ray to -x:
  // an odd number of crossings (s > 0) means the point is inside.
  return s > 0 ? -d : d;
}

/** distance only (no sign test) — cheaper, for open polylines */
export function distPolyline(pts, x, y) {
  let d = 1e9;
  for (let i = 1; i < pts.length; i++) {
    const dd = sdSeg(x, y, pts[i - 1][0], pts[i - 1][1], pts[i][0], pts[i][1]);
    if (dd < d) d = dd;
  }
  return d;
}

/** Catmull-Rom densification of a closed 2d polyline */
export function densifyClosed(pts, step) {
  const out = [];
  const n = pts.length;
  for (let i = 0; i < n; i++) {
    const p0 = pts[(i - 1 + n) % n];
    const p1 = pts[i];
    const p2 = pts[(i + 1) % n];
    const p3 = pts[(i + 2) % n];
    const segLen = Math.hypot(p2[0] - p1[0], p2[1] - p1[1]);
    const steps = Math.max(2, Math.round(segLen / step));
    for (let k = 0; k < steps; k++) {
      const t = k / steps;
      const t2 = t * t;
      const t3 = t2 * t;
      const x =
        0.5 *
        (2 * p1[0] + (-p0[0] + p2[0]) * t + (2 * p0[0] - 5 * p1[0] + 4 * p2[0] - p3[0]) * t2 + (-p0[0] + 3 * p1[0] - 3 * p2[0] + p3[0]) * t3);
      const y =
        0.5 *
        (2 * p1[1] + (-p0[1] + p2[1]) * t + (2 * p0[1] - 5 * p1[1] + 4 * p2[1] - p3[1]) * t2 + (-p0[1] + 3 * p1[1] - 3 * p2[1] + p3[1]) * t3);
      out.push([x, y]);
    }
  }
  return out;
}
