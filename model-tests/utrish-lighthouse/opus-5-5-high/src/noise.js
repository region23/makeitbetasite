// Small deterministic noise toolkit (seeded PRNG + 2D simplex noise).

export function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function createNoise2D(random) {
  const p = new Uint8Array(256);
  for (let i = 0; i < 256; i++) p[i] = i;
  for (let i = 255; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    const t = p[i]; p[i] = p[j]; p[j] = t;
  }
  const perm = new Uint8Array(512);
  const permMod12 = new Uint8Array(512);
  for (let i = 0; i < 512; i++) { perm[i] = p[i & 255]; permMod12[i] = perm[i] % 12; }
  const grad3 = new Float32Array([1, 1, -1, 1, 1, -1, -1, -1, 1, 0, -1, 0, 1, 0, -1, 0, 0, 1, 0, -1, 0, 1, 0, -1]);
  const F2 = 0.5 * (Math.sqrt(3) - 1);
  const G2 = (3 - Math.sqrt(3)) / 6;
  return function noise(xin, yin) {
    let n0 = 0, n1 = 0, n2 = 0;
    const s = (xin + yin) * F2;
    const i = Math.floor(xin + s), j = Math.floor(yin + s);
    const t = (i + j) * G2;
    const x0 = xin - (i - t), y0 = yin - (j - t);
    let i1, j1;
    if (x0 > y0) { i1 = 1; j1 = 0; } else { i1 = 0; j1 = 1; }
    const x1 = x0 - i1 + G2, y1 = y0 - j1 + G2;
    const x2 = x0 - 1 + 2 * G2, y2 = y0 - 1 + 2 * G2;
    const ii = i & 255, jj = j & 255;
    let t0 = 0.5 - x0 * x0 - y0 * y0;
    if (t0 >= 0) { const g = permMod12[ii + perm[jj]] * 2; t0 *= t0; n0 = t0 * t0 * (grad3[g] * x0 + grad3[g + 1] * y0); }
    let t1 = 0.5 - x1 * x1 - y1 * y1;
    if (t1 >= 0) { const g = permMod12[ii + i1 + perm[jj + j1]] * 2; t1 *= t1; n1 = t1 * t1 * (grad3[g] * x1 + grad3[g + 1] * y1); }
    let t2 = 0.5 - x2 * x2 - y2 * y2;
    if (t2 >= 0) { const g = permMod12[ii + 1 + perm[jj + 1]] * 2; t2 *= t2; n2 = t2 * t2 * (grad3[g] * x2 + grad3[g + 1] * y2); }
    return 70 * (n0 + n1 + n2);
  };
}

export function fbm2(noise, x, y, oct = 5, lac = 2.0, gain = 0.5) {
  let s = 0, a = 0.5, f = 1, norm = 0;
  for (let o = 0; o < oct; o++) {
    s += a * noise(x * f + o * 17.3, y * f - o * 9.1);
    norm += a; a *= gain; f *= lac;
  }
  return s / norm;
}

export function ridged2(noise, x, y, oct = 4) {
  let s = 0, a = 0.5, f = 1, norm = 0;
  for (let o = 0; o < oct; o++) {
    const n = 1 - Math.abs(noise(x * f + o * 31.7, y * f + o * 5.3));
    s += a * n * n; norm += a; a *= 0.5; f *= 2.03;
  }
  return s / norm;
}

export const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
export const lerp = (a, b, t) => a + (b - a) * t;
export function smoothstep(e0, e1, x) {
  const t = clamp((x - e0) / (e1 - e0), 0, 1);
  return t * t * (3 - 2 * t);
}
