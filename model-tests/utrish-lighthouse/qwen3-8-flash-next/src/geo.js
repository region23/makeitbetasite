// Layout, terrain field and the cutaway "display piece" geometry.
// World frame: +x east, +z south, +y up.  Sea level = 0.  1 unit = 1 metre.
import * as THREE from 'three';
import { fbm, ridged, vnoise, sdPoly, densifyClosed, smoothstep, sat, clamp, lerp } from './noise.js';

export const SEA_LEVEL = 0;
export const BOTTOM_Y = -27;

/* --------------------------------------------------------------- outlines --- */

// Utrish Islet: elongated WNW–ESE, flat-topped, narrow rocky tongue to the WNW.
export const ISLAND_OUT = [
  [-86, -1], [-81, -12], [-70, -20], [-56, -24], [-42, -23], [-28, -21],
  [-14, -20], [-2, -17], [7, -11], [11, -3], [10, 6], [3, 13],
  [-8, 18], [-22, 20], [-36, 21], [-50, 21], [-62, 18], [-74, 11], [-82, 5],
];

// Bolshoy Utrish cape / mainland neck, cut by the piece outline to the E.
export const CAPE_OUT = [
  [23, -8], [26, -22], [33, -38], [45, -52], [61, -62], [80, -68],
  [100, -68], [119, -61], [131, -46], [138, -26], [140, -4], [138, 18],
  [130, 38], [116, 50], [98, 56], [78, 56], [61, 51], [47, 44],
  [36, 34], [29, 21], [25, 8],
];

// The whole display piece: island + strait + open water + cape + hillside slice.
export const PIECE_OUT = [
  [-143, -30], [-139, 6], [-131, 44], [-114, 76], [-86, 96], [-52, 105],
  [-14, 103], [24, 108], [62, 108], [96, 99], [120, 82], [134, 57],
  [140, 26], [141, -6], [134, -36], [120, -60], [98, -78], [70, -88],
  [38, -91], [6, -87], [-26, -80], [-60, -73], [-92, -64], [-120, -51],
];

export const PIECE = densifyClosed(PIECE_OUT, 2.0);
const ISL = densifyClosed(ISLAND_OUT, 2.5);
const CAP = densifyClosed(CAPE_OUT, 2.5);

export const DOMAIN = {
  minX: -150, maxX: 148, minZ: -96, maxZ: 114,
};

export function pieceSDF(x, z) {
  return sdPoly(PIECE, x, z);
}
export function islandSDF(x, z) {
  return sdPoly(ISL, x, z);
}
export function capeSDF(x, z) {
  return sdPoly(CAP, x, z);
}
export function landSDF(x, z) {
  return Math.min(islandSDF(x, z), capeSDF(x, z));
}

/* ------------------------------------------------------- layout landmarks --- */

export const L = {
  lighthouse: [-51.5, -3.5],   // 1975 monument-lighthouse on the terrace
  mast: [-44.5, -9.5],         // slim steel comms mast (real site has one)
  memorial: [-38.5, 5.5],      // granite slab with the crew names
  yakMemorial: [-60.5, 8.5],   // small fenced Yak-40 memorial
  chapel: [-6.5, 5.0],         // 1911 tower -> Chapel of St. Nicholas
  chapelRuins: [-2.0, 8.4],
  bridgeA: [1.0, 3.0],         // island landing
  bridgeB: [27.5, 5.0],        // cape causeway
  quay: [56, 40],              // concrete quay head
  jetty: [64, 49],
  harbour: [40, 33],
  pens: [100, 74],             // dolphinarium net pens
  village: [104, -34],
};

export const STRAIT_AXIS = [0.9955, 0.0945];   // unit vector along the strait (x,z)
export const SWELL_FROM = 245;                 // azimuth (deg) the swell comes from
const SWELL_DIR = [0.9063, -0.4226];           // travel direction (x,z), from WSW

/* ------------------------------------------------------------ height field --- */

function gauss(x, z, cx, cz, rx, rz) {
  const dx = (x - cx) / rx;
  const dz = (z - cz) / rz;
  return Math.exp(-(dx * dx + dz * dz));
}

function beachiness(x, z) {
  let b = 0.1;
  b = Math.max(b, gauss(x, z, 64, 45, 46, 17));     // south pebble beach
  b = Math.max(b, gauss(x, z, 88, -54, 40, 15));    // north bay beach
  b = Math.max(b, gauss(x, z, 33, 27, 16, 11));     // shingle flat at the neck
  b = Math.max(b, gauss(x, z, 100, 46, 26, 12) * 0.8);
  return clamp(b + (fbm(x / 22, z / 22, 3, 66) - 0.5) * 0.3, 0, 1);
}

function channelMask(x, z) {
  const s = landSDF(x, z);
  if (s < -0.5) return 0;
  const a = smoothstep(15, 6.5, islandSDF(x, z));
  const b = smoothstep(15, 6.5, capeSDF(x, z));
  return a * b * smoothstep(-0.4, 1.2, s);
}

function scarMask(x, z) {
  return clamp(gauss(x, z, 74, 22, 30, 17) * 1.15 + gauss(x, z, 104, -14, 26, 15) * 0.8, 0, 1);
}

/** raw terrain height in metres */
export function terrainHeight(x, z) {
  const sI = islandSDF(x, z);
  const sC = capeSDF(x, z);
  const s = sI < sC ? sI : sC;

  /* ---- seabed ------------------------------------------------------- */
  let bed = -0.85 - 6.4 * smoothstep(0.8, 6, s) - 10.5 * smoothstep(6, 34, s);
  bed += (fbm(x / 24, z / 24, 3, 101) - 0.5) * 1.0 * smoothstep(0.6, 5, s);
  bed += 0.32 * Math.sin(x * 0.09 + z * 0.055 + fbm(x / 30, z / 30, 2, 12) * 3) * smoothstep(3, 14, s);
  // submerged reefs that trip the incoming swell
  const reef = Math.max(
    -6.5 - (1 - gauss(x, z, -108, 2, 30, 27)) * 22,
    -5.6 - (1 - gauss(x, z, -30, 40, 26, 13)) * 22,
    -4.6 - (1 - gauss(x, z, -70, 27, 17, 9)) * 22,
  );
  bed = Math.max(bed, reef);
  const chan = channelMask(x, z);
  if (chan > 0.001) bed = lerp(bed, -2.45 + (fbm(x / 7, z / 7, 3, 33) - 0.5) * 0.9, chan);

  /* ---- islet -------------------------------------------------------- */
  let h = bed;
  if (sI < 7) {
    let terr = 11.6 - 5.0 * smoothstep(-56, 13, x);
    terr += 2.1 * gauss(x, z, -52, -4, 17, 15);            // knoll under the tower
    terr += 2.4 * gauss(x, z, -34, -19, 22, 8);            // low N rock ridge
    terr -= 1.6 * gauss(x, z, -14, 12, 16, 10);
    let prof = terr - 35 * smoothstep(-7.5, 4.5, sI);
    const cliff = 1 - smoothstep(0, 9, -sI);               // 1 at the cliff face
    // The wall is not a smooth cone: it is buttressed, notched and fluted,
    // with collapsed slices standing out into the sea.
    const along = fbm(x / 13 + z / 11, z / 13 - x / 11, 3, 55);
    prof += 3.4 * (along - 0.5) * cliff;
    prof += 3.2 * Math.pow(clamp((along - 0.5) / 0.5, 0, 1), 1.8) * cliff;
    prof += 1.0 * cliff * (ridged(x / 5.4, z / 5.4, 3, 91) - 0.42);
    prof += (fbm(x / 8.5, z / 8.5, 4, 7) - 0.5) * (1.1 + 1.5 * cliff);
    prof += 0.55 * Math.sin(prof * 0.8 + fbm(x / 17, z / 17, 2, 3) * 4.0) * (0.35 + cliff);
    // terrace micro-relief: hummocky ground, mown flat only where it is built
    prof += (fbm(x / 3.4, z / 3.4, 2, 17) - 0.5) * 0.62 * (1 - cliff);
    // waterline bench + talus of fallen blocks
    prof -= 1.1 * Math.exp(-Math.pow((sI - 0.6) / 2.2, 2));
    prof += 1.9 * Math.exp(-Math.pow((sI + 4.0) / 3.2, 2)) * (0.5 + 0.65 * fbm(x / 5.5, z / 5.5, 3, 31));
    h = Math.max(h, prof);
  }

  /* ---- cape --------------------------------------------------------- */
  if (sC < 46) {
    const beach = beachiness(x, z);
    let baseH = 7.5 + 29 * smoothstep(26, 104, x);
    baseH += 15 * gauss(x, z, 96, -34, 40, 26);
    baseH += 12 * gauss(x, z, 124, 8, 34, 26);
    baseH += 8 * gauss(x, z, 72, -60, 30, 18);
    baseH -= 11 * gauss(x, z, 60, -20, 22, 15);            // saddle above the strait
    baseH -= 6 * gauss(x, z, 36, 12, 18, 14);              // low neck
    let prof = baseH * smoothstep(0.4, lerp(2.6, 27, beach), -sC);
    prof += (fbm(x / 12, z / 12, 4, 21) - 0.5) * 2.6 * smoothstep(1, 10, -sC);
    prof += (fbm(x / 4.5, z / 4.5, 3, 71) - 0.5) * 0.9 * smoothstep(0.3, 2.6, -sC);
    // landslide scar: pale, benched strata
    const sc = scarMask(x, z);
    if (sc > 0.002) {
      const benched = Math.round(prof / 2.7) * 2.7 + 0.45 * Math.sin(x * 0.22 + z * 0.16);
      prof = lerp(prof, benched, sc * 0.85 * smoothstep(1.5, 7, -sC));
    }
    // seaward of the shoreline the cape contributes nothing at all
    prof -= 60 * smoothstep(-0.3, 2.2, sC);
    h = Math.max(h, prof);
  }

  /* ---- built platform: quay apron, causeway, bridge landing ---------- */
  const wQuay = gauss(x, z, 57, 39, 22, 9);
  const wWay = gauss(x, z, 31, 5, 12, 7);
  const wPad = gauss(x, z, 1.5, 3, 5, 4);
  let pw = wQuay;
  let ph = 2.55;
  if (wWay > pw) {
    pw = wWay;
    ph = 2.3;
  }
  if (wPad > pw) {
    pw = wPad;
    ph = 5.7;
  }
  if (pw > 0.06) {
    const onLand = Math.max(smoothstep(1.5, -2.5, sC), smoothstep(1.5, -2.5, sI));
    const w = smoothstep(0.06, 0.55, pw) * onLand;
    if (w > 0.001) h = lerp(h, ph, w);
  }

  return h;
}

export function slopeAt(x, z) {
  const e = 1.1;
  const dx = (terrainHeight(x + e, z) - terrainHeight(x - e, z)) / (2 * e);
  const dz = (terrainHeight(x, z + e) - terrainHeight(x, z - e)) / (2 * e);
  return Math.hypot(dx, dz);
}

export function normalAt(x, z, out = new THREE.Vector3()) {
  const e = 1.1;
  const dx = (terrainHeight(x + e, z) - terrainHeight(x - e, z)) / (2 * e);
  const dz = (terrainHeight(x, z + e) - terrainHeight(x, z - e)) / (2 * e);
  return out.set(-dx, 1, -dz).normalize();
}

/* -------------------------------------------------------------- geology --- */

const PALETTE = [
  [0.455, 0.435, 0.385],   // pale limestone
  [0.395, 0.345, 0.255],   // ochre marl
  [0.295, 0.310, 0.330],   // cool argillite / compactite band
  [0.420, 0.400, 0.350],   // weathered limestone
  [0.250, 0.258, 0.275],   // dark clay interbed
  [0.430, 0.355, 0.250],   // sandy interbed
];

function bandColour(sv, out) {
  const T = 1.7;
  const b = sv / T;
  const i = Math.floor(b);
  const f = b - i;
  const n = PALETTE.length;
  const a = PALETTE[((i % n) + n) % n];
  const c = PALETTE[(((i + 1) % n) + n) % n];
  const t = smoothstep(0.68, 1.0, f);
  out[0] = lerp(a[0], c[0], t);
  out[1] = lerp(a[1], c[1], t);
  out[2] = lerp(a[2], c[2], t);
  // two beds that read as markers in section: a dark tuff and a red-ochre marl
  const m = ((i % n) + n) % n;
  if (m === 4) {
    out[0] *= 0.74;
    out[1] *= 0.72;
    out[2] *= 0.8;
  } else if (m === 5) {
    out[0] *= 1.05;
    out[1] *= 0.8;
    out[2] *= 0.72;
  }
  return out;
}

const _band = [0, 0, 0];

/**
 * Bedding coordinate. The Utrish beds dip gently and are folded by broad
 * warping, so the strata run as long, slightly wavy bands across the massif.
 */
export function strataField(x, z) {
  return 0.24 * x + 0.05 * z + 3.0 * fbm(x / 95, z / 95, 3, 5) + 1.5 * fbm(x / 32, z / 32, 2, 9);
}

/**
 * Surface cover fractions for a point: writes {gravel, veg, weed} and returns
 * the mineral/surface colour as [r,g,b] in `out`.
 */
export function surfaceColour(x, y, z, slope, out, cover) {
  const sv = y + strataField(x, z);
  bandColour(sv, _band);
  let r = _band[0];
  let g = _band[1];
  let b = _band[2];

  // weathered, cooler rock in the shadowed fractures
  const cool = smoothstep(0.7, 2.2, slope);
  r = lerp(r, r * 0.76, cool);
  g = lerp(g, g * 0.79, cool);
  b = lerp(b, b * 0.9, cool);

  let gravel = 0;
  let veg = 0;
  let weed = 0;

  const onIsland = x < 18 && islandSDF(x, z) < 0;
  const onCape = capeSDF(x, z) < 0;

  // --- shingle / gravel terraces and beaches
  const beachBand = smoothstep(2.6, 1.1, Math.abs(y - 0.65)) * smoothstep(0.55, 0.2, slope);
  const terrace = onIsland && y > 6.2 ? smoothstep(0.55, 0.28, slope) : 0;
  const shelf = y < -0.6 && y > -7.5 ? smoothstep(0.75, 0.35, slope) : 0;
  // the islet's flat top is trampled shingle and dry turf, thin soil in pockets
  const trampled = onIsland && y > 6.0 ? smoothstep(0.86, 0.44, fbm(x / 9, z / 9, 3, 77)) : 0;
  gravel = clamp(Math.max(beachBand, terrace * 0.95) + shelf * 0.9 + trampled * 0.55, 0, 1);

  // --- vegetation
  if (y > 1.15 && slope < 0.72) {
    const dry = fbm(x / 8.2, z / 8.2, 3, 41);
    if (onIsland) {
      veg = smoothstep(0.40, 0.66, dry) * smoothstep(0.6, 0.3, slope) * (y > 6.0 ? 0.62 : 0.55);
    } else if (onCape) {
      const sc = scarMask(x, z);
      const grassN = fbm(x / 13, z / 13, 3, 17);
      veg = smoothstep(0.34, 0.6, grassN) * (1 - sc * 0.9) * smoothstep(0.85, 0.42, slope);
    }
  }
  // submerged weed on the sheltered seabed
  if (y < -0.15 && y > -4.6) {
    const w = fbm(x / 6.4, z / 6.4, 3, 91);
    const wmask = smoothstep(0.52, 0.72, w) * smoothstep(-4.6, -1.0, y) * smoothstep(0.9, 0.4, slope);
    if (wmask > veg) {
      veg = Math.max(veg, wmask * 0.95);
      weed = wmask;
    }
  }

  // juniper / pistachio dots on the cape
  let dot = 0;
  if (onCape && y > 1.4 && slope < 1.0) {
    dot = smoothstep(0.615, 0.705, fbm(x / 7.6, z / 7.6, 2, 77)) * (1 - scarMask(x, z) * 0.75);
  }

  // tint
  if (gravel > 0.01) {
    const warm = 0.05 * Math.sin(x * 0.7 + z * 0.4);
    r = lerp(r, 0.435 + warm, gravel * 0.85);
    g = lerp(g, 0.42, gravel * 0.85);
    b = lerp(b, 0.39 - warm, gravel * 0.85);
  }
  if (veg > 0.01) {
    let vr; let vg; let vb;
    if (weed > 0.02) {
      vr = 0.055; vg = 0.115; vb = 0.05;
    } else if (onIsland) {
      const dryness = 0.62 + 0.38 * fbm(x / 5, z / 5, 2, 3);
      vr = lerp(0.190, 0.335, dryness); vg = lerp(0.225, 0.320, dryness); vb = lerp(0.105, 0.158, dryness);
    } else {
      const dryness = fbm(x / 11, z / 11, 2, 8);
      vr = lerp(0.115, 0.245, dryness); vg = lerp(0.170, 0.255, dryness); vb = lerp(0.075, 0.120, dryness);
    }
    r = lerp(r, vr, veg * 0.9);
    g = lerp(g, vg, veg * 0.9);
    b = lerp(b, vb, veg * 0.9);
  }
  if (dot > 0.01) {
    r = lerp(r, 0.026, dot * 0.92);
    g = lerp(g, 0.050, dot * 0.92);
    b = lerp(b, 0.030, dot * 0.92);
  }
  // wet band at the waterline: sea-wetted rock darkens and glosses
  const wet = smoothstep(1.2, 0.0, Math.abs(y - 0.15));
  r *= 1 - wet * 0.46;
  g *= 1 - wet * 0.44;
  b *= 1 - wet * 0.3;

  out[0] = r;
  out[1] = g;
  out[2] = b;
  cover[0] = gravel;
  cover[1] = veg;
  cover[2] = weed;
  cover[3] = sv;
  return out;
}

/* ------------------------------------------------------------ world sampler --- */

export class World {
  /**
   * @param {number} n  grid resolution over DOMAIN
   */
  constructor(n = 300) {
    this.n = n;
    const { minX, maxX, minZ, maxZ } = DOMAIN;
    this.w = Math.round(n * ((maxX - minX) / (maxX - minX)));
    this.h = n;
    this.hgt = new Float32Array(this.w * this.h);
    this.land = new Uint8Array(this.w * this.h);
    for (let j = 0; j < this.h; j++) {
      const z = minZ + ((j + 0.5) / this.h) * (maxZ - minZ);
      for (let i = 0; i < this.w; i++) {
        const x = minX + ((i + 0.5) / this.w) * (maxX - minX);
        const v = terrainHeight(x, z);
        const k = j * this.w + i;
        this.hgt[k] = v;
        this.land[k] = v > 0.05 ? 1 : 0;
      }
    }
    this.expo = this._bakeExposure();
  }

  cellOf(x, z) {
    const { minX, maxX, minZ, maxZ } = DOMAIN;
    return [((x - minX) / (maxX - minX)) * this.w, ((z - minZ) / (maxZ - minZ)) * this.h];
  }

  /** bilinear terrain height */
  height(x, z) {
    const { minX, maxX, minZ, maxZ } = DOMAIN;
    const fx = ((x - minX) / (maxX - minX)) * this.w - 0.5;
    const fz = ((z - minZ) / (maxZ - minZ)) * this.h - 0.5;
    const i0 = clamp(Math.floor(fx), 0, this.w - 2);
    const j0 = clamp(Math.floor(fz), 0, this.h - 2);
    const tx = clamp(fx - i0, 0, 1);
    const tz = clamp(fz - j0, 0, 1);
    const a = this.hgt[j0 * this.w + i0];
    const b = this.hgt[j0 * this.w + i0 + 1];
    const c = this.hgt[(j0 + 1) * this.w + i0];
    const d = this.hgt[(j0 + 1) * this.w + i0 + 1];
    return lerp(lerp(a, b, tx), lerp(c, d, tx), tz);
  }

  isLand(x, z) {
    const [fx, fz] = this.cellOf(x, z);
    const i = clamp(Math.round(fx), 0, this.w - 1);
    const j = clamp(Math.round(fz), 0, this.h - 1);
    return this.hgt[j * this.w + i] > 0.05;
  }

  _landAt(fx, fz) {
    const i = Math.round(fx);
    const j = Math.round(fz);
    if (i < 0 || j < 0 || i >= this.w || j >= this.h) return 0;
    return this.land[j * this.w + i];
  }

  /** how much open water a point looks out onto, along the swell directions */
  _fetch(x, z, dx, dz) {
    const { minX, maxX, minZ, maxZ } = DOMAIN;
    const sx = this.w / (maxX - minX);
    const sz = this.h / (maxZ - minZ);
    const step = 2.4;
    for (let k = 1; k <= 30; k++) {
      const px = x - dx * step * k;
      const pz = z - dz * step * k;
      if (pieceSDF(px, pz) > 0) return k * step;      // reached the piece edge: open
      if (this._landAt((px - minX) * sx - 0.5, (pz - minZ) * sz - 0.5)) return k * step;
    }
    return 30 * step;
  }

  _bakeExposure() {
    const n = 256;
    const out = new Float32Array(n * n);
    const { minX, maxX, minZ, maxZ } = DOMAIN;
    const dirs = [SWELL_DIR, [0.788, -0.616], [0.996, -0.087]];
    for (let j = 0; j < n; j++) {
      const z = minZ + ((j + 0.5) / n) * (maxZ - minZ);
      for (let i = 0; i < n; i++) {
        const x = minX + ((i + 0.5) / n) * (maxX - minX);
        let e = 0;
        if (landSDF(x, z) > -0.5) {
          for (const d of dirs) e = Math.max(e, this._fetch(x, z, d[0], d[1]));
        }
        out[j * n + i] = clamp(e / 62, 0, 1);
      }
    }
    return { data: out, n };
  }

  exposure(x, z) {
    const { minX, maxX, minZ, maxZ } = DOMAIN;
    const n = this.expo.n;
    const fx = ((x - minX) / (maxX - minX)) * n - 0.5;
    const fz = ((z - minZ) / (maxZ - minZ)) * n - 0.5;
    const i0 = clamp(Math.floor(fx), 0, n - 2);
    const j0 = clamp(Math.floor(fz), 0, n - 2);
    const tx = clamp(fx - i0, 0, 1);
    const tz = clamp(fz - j0, 0, 1);
    const d = this.expo.data;
    return lerp(
      lerp(d[j0 * n + i0], d[j0 * n + i0 + 1], tx),
      lerp(d[(j0 + 1) * n + i0], d[(j0 + 1) * n + i0 + 1], tx),
      tz,
    );
  }

  /** nearest land distance (metres, +ve) — cheap, from the height grid */
  distToLand(x, z) {
    return landSDF(x, z);
  }
}

/* --------------------------------------------------------- field texture --- */

/**
 * RGBA16F texture sampled by the ocean shader.
 *   R terrain height   G exposure   P piece mask  A strait channel mask
 */
export function buildFieldTexture(world, size = 256) {
  const { minX, maxX, minZ, maxZ } = DOMAIN;
  const data = new Uint16Array(size * size * 4);
  for (let j = 0; j < size; j++) {
    const z = minZ + ((j + 0.5) / size) * (maxZ - minZ);
    for (let i = 0; i < size; i++) {
      const x = minX + ((i + 0.5) / size) * (maxX - minX);
      const k = (j * size + i) * 4;
      data[k] = THREE.DataUtils.toHalfFloat(world.height(x, z));
      data[k + 1] = THREE.DataUtils.toHalfFloat(world.exposure(x, z));
      data[k + 2] = THREE.DataUtils.toHalfFloat(smoothstep(1.2, -1.2, pieceSDF(x, z)));
      data[k + 3] = THREE.DataUtils.toHalfFloat(channelMask(x, z));
    }
  }
  const tex = new THREE.DataTexture(data, size, size, THREE.RGBAFormat, THREE.HalfFloatType);
  tex.minFilter = THREE.LinearFilter;
  tex.magFilter = THREE.LinearFilter;
  tex.wrapS = tex.wrapT = THREE.ClampToEdgeWrapping;
  tex.needsUpdate = true;
  return tex;
}

/* ----------------------------------------------------------- piece meshing --- */

const GRID = { nx: 258, nz: 200 };

/** top surface of the piece (terrain), clipped to the outline */
export function buildSurfaceGeometry(world) {
  const { minX, maxX, minZ, maxZ } = DOMAIN;
  const nx = GRID.nx;
  const nz = GRID.nz;
  const pos = [];
  const col = [];
  const att = [];
  const uv = [];
  const idx = [];
  const out = [0, 0, 0];
  const cover = [0, 0, 0, 0];
  const inside = new Uint8Array((nx + 1) * (nz + 1));
  const vi = (i, j) => j * (nx + 1) + i;
  const e = 1.0;
  for (let j = 0; j <= nz; j++) {
    const z = minZ + (j / nz) * (maxZ - minZ);
    for (let i = 0; i <= nx; i++) {
      const x = minX + (i / nx) * (maxX - minX);
      inside[vi(i, j)] = pieceSDF(x, z) < 0.9 ? 1 : 0;
      const h = world.height(x, z);
      const dx = (world.height(x + e, z) - world.height(x - e, z)) / (2 * e);
      const dz = (world.height(x, z + e) - world.height(x, z - e)) / (2 * e);
      pos.push(x, h, z);
      surfaceColour(x, h, z, Math.hypot(dx, dz), out, cover);
      col.push(out[0], out[1], out[2]);
      att.push(cover[0], cover[1], cover[2], cover[3]);
      uv.push(x / 9, z / 9);
    }
  }
  for (let j = 0; j < nz; j++) {
    for (let i = 0; i < nx; i++) {
      const a = vi(i, j);
      const b = vi(i + 1, j);
      const c = vi(i + 1, j + 1);
      const d = vi(i, j + 1);
      if (inside[a] || inside[b] || inside[c] || inside[d]) {
        idx.push(a, c, b, a, d, c);
      }
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  g.setAttribute('aCover', new THREE.Float32BufferAttribute(att, 4));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
}

/**
 * The cut face of the whole diorama: the outline extruded downwards, with the
 * geology in section and a translucent "cut water" band above the seabed.
 */
export function buildWallGeometry(world, rows = 16) {
  const pts = PIECE;
  const n = pts.length;
  const pos = [];
  const nor = [];
  const col = [];
  const seabed = [];
  const svArr = [];
  const idx = [];
  const out = [0, 0, 0];
  const cover = [0, 0, 0, 0];

  const levels = [];
  for (let r = 0; r <= rows; r++) {
    const t = r / rows;
    levels.push(-0.55 - Math.pow(t, 1.35) * (-0.55 - BOTTOM_Y));
  }

  for (let i = 0; i < n; i++) {
    const p = pts[i];
    const pp = pts[(i - 1 + n) % n];
    const pn = pts[(i + 1) % n];
    // outward normal in xz
    const tx = pn[0] - pp[0];
    const tz = pn[1] - pp[1];
    const tl = Math.hypot(tx, tz) || 1;
    let nxv = tz / tl;
    let nzv = -tx / tl;
    // make sure it points away from the piece centre of mass
    if (nxv * p[0] + nzv * p[1] < 0) {
      nxv = -nxv;
      nzv = -nzv;
    }
    const h = world.height(p[0], p[1]);
    const top = Math.max(h, 0.35);
    const surfCover = [0, 0, 0];
    surfaceColour(p[0], h, p[1], slopeAt(p[0], p[1]), out, cover);
    surfCover[0] = out[0];
    surfCover[1] = out[1];
    surfCover[2] = out[2];
    const svCol = strataField(p[0], p[1]);
    for (let r = 0; r <= rows; r++) {
      const y = Math.min(levels[r], top);
      pos.push(p[0], y, p[1]);
      nor.push(nxv, 0.12, nzv);
      // thin soil/grass edge, then the strata in section
      const t = smoothstep(top - 1.15, top - 0.15, y);
      bandColour(y + svCol, out);
      const mottle = 0.9 + 0.2 * vnoise(p[0] * 0.22 + y * 0.5, p[1] * 0.22 - y * 0.3, 13);
      col.push(
        lerp(out[0] * mottle, surfCover[0], t),
        lerp(out[1] * mottle, surfCover[1], t),
        lerp(out[2] * mottle, surfCover[2], t),
      );
      seabed.push(h);
      svArr.push(y + svCol);
    }
  }
  for (let i = 0; i < n; i++) {
    const j = (i + 1) % n;
    for (let r = 0; r < rows; r++) {
      const a = i * (rows + 1) + r;
      const b = j * (rows + 1) + r;
      const c = j * (rows + 1) + r + 1;
      const d = i * (rows + 1) + r + 1;
      idx.push(a, c, b, a, d, c);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
  g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  g.setAttribute('aSeabed', new THREE.Float32BufferAttribute(seabed, 1));
  g.setAttribute('aSv', new THREE.Float32BufferAttribute(svArr, 1));
  g.setIndex(idx);
  return g;
}

/** flat base of the display piece */
export function buildBottomGeometry() {
  const shape = new THREE.Shape();
  PIECE.forEach((p, i) => (i === 0 ? shape.moveTo(p[0], p[1]) : shape.lineTo(p[0], p[1])));
  shape.closePath();
  const g = new THREE.ShapeGeometry(shape, 1);
  g.rotateX(Math.PI / 2);
  g.translate(0, BOTTOM_Y, 0);
  return g;
}

export function outlinePoints() {
  return PIECE;
}
