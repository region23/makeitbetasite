// THE TIDAL LIGHTHOUSE — terrain
// One irregular display piece: island + harbor + seabed, with a layered cutaway skirt.

import * as THREE from 'three';
import { fbm } from './noise.js';

export const R0 = 27;
export const BOTTOM_Y = -6.5;
export const TEX_EXTENT = 33.5;

// Irregular silhouette of the display piece.
export function boundaryRadius(th) {
  return R0 * (1 + 0.07 * Math.sin(3 * th + 0.7) + 0.05 * Math.sin(5 * th + 2.1)
    + 0.035 * Math.sin(8 * th + 4.2) + 0.025 * Math.sin(13 * th + 1.3));
}

// Gaussian land masses (x, z, radius, height): headland, exposed ridge, arms,
// harbor knolls, an offshore islet and two low rock shelves.
const MASSES = [
  { x: -7.5, z: -8.5, r: 8.0, h: 8.4 },   // headland (lighthouse)
  { x: 4.5, z: -9.0, r: 6.5, h: 5.8 },    // exposed north ridge
  { x: 12.5, z: 2.5, r: 6.0, h: 4.4 },    // east arm
  { x: -11.5, z: 6.5, r: 5.5, h: 3.6 },   // west arm
  { x: 6.5, z: 8.0, r: 4.8, h: 2.7 },     // cottage knoll
  { x: 2.5, z: 12.8, r: 3.0, h: 1.8 },    // south knoll (harbor mouth E)
  { x: -5.0, z: 12.2, r: 2.9, h: 1.7 },   // SW knoll (harbor mouth W)
  { x: 11.0, z: -15.5, r: 2.3, h: 1.05 }, // offshore islet
  { x: 0.5, z: -15.5, r: 3.6, h: 0.85 },  // low rock shelf (wash zone)
  { x: -4.5, z: -17.0, r: 2.9, h: 0.6 },  // low rock shelf (wash zone)
];
const HARBOR = { x: 0, z: 13, r: 7.5, dip: 2.3 };
const PADS = [
  { x: -7.5, z: -8.5, r: 2.6, h: 8.1 },  // lighthouse terrace
  { x: 6.5, z: 8.0, r: 2.2, h: 2.5 },    // cottage terrace
];

// max-bounded smooth max: equals max() when inputs differ, +ln2/k when equal
export const sstep = (a, b, x) => {
  const t = Math.min(Math.max((x - a) / (b - a), 0), 1);
  return t * t * (3 - 2 * t);
};
const lerp = (a, b, t) => a + (b - a) * t;

// Definitive height field of the whole piece (used for geometry, prop
// placement and the water shader's depth texture).
export function heightAt(x, z) {
  let land = -8;
  for (const m of MASSES) {
    const d2 = (x - m.x) ** 2 + (z - m.z) ** 2;
    land = Math.max(land, m.h * Math.exp(-d2 / (m.r * m.r)));
  }
  const mask = Math.min(Math.max((land + 0.2) / 2.2, 0), 1);
  const n1 = fbm(x * 0.16 + 7.3, z * 0.16 + 3.1, 4);
  const n2 = fbm(x * 0.5 + 2.2, z * 0.5 + 8.8, 3);
  land += ((n1 - 0.47) * 2.4 + (n2 - 0.47) * 0.5) * mask;
  const ridge = Math.abs(fbm(x * 0.30 + 11.0, z * 0.30 + 5.0, 3) - 0.5) * 2.0;
  land += ridge * 1.35 * sstep(3.5, 6.5, land);
  // sharpen the offshore falloff: gaussian tails alone leave a broad ~0-depth
  // shelf; this maps the underwater slope into a beach -> drop profile
  if (land < 0.42) land = -4.5 + 4.92 * sstep(-0.38, 0.42, land);
  const dh = ((x - HARBOR.x) ** 2 + (z - HARBOR.z) ** 2) / (HARBOR.r * HARBOR.r);
  land -= HARBOR.dip * Math.exp(-dh);

  const seabed = -4.7 + 0.35 * Math.sin(x * 0.12 + 1.3) + 0.30 * Math.sin(z * 0.10 + 2.1)
    + (fbm(x * 0.22 + 4.0, z * 0.22 + 9.0, 3) - 0.47) * 1.1;
  let h = Math.max(seabed, land);

  for (const p of PADS) {
    const d = Math.hypot(x - p.x, z - p.z);
    h = lerp(h, p.h, 1 - sstep(p.r * 0.55, p.r, d));
  }
  const r = Math.hypot(x, z);
  const Rb = boundaryRadius(Math.atan2(z, x));
  h = lerp(h, seabed, sstep(Rb - 3.6, Rb - 0.7, r));
  return h;
}

// ---------------------------------------------------------------------------
// Vertex colors

const C = (hex) => new THREE.Color(hex); // converted to linear on assignment

function terrainColor(x, z, h, slope, out) {
  const harborish = sstep(11, 6, Math.hypot(x, z - 13));
  if (h > 0.15) {
    // land
    const grassOk = slope < 0.62 && h > 1.15 && fbm(x * 0.35 + 21, z * 0.35 + 13, 3) > 0.42;
    const band = 0.5 + 0.5 * Math.sin(h * 2.1 + fbm(x * 0.28, z * 0.28, 3) * 3.0);
    out.copy(C(0x8d8577)).lerp(C(0xa49a89), band * 0.8);
    if (slope > 1.05) out.lerp(C(0x6f7076), sstep(1.05, 1.7, slope) * 0.7); // cool cliff shadow
    if (grassOk) {
      const g = C(0x6f9550).clone().lerp(C(0x8aa862), fbm(x * 0.6 + 3, z * 0.6 + 8, 3));
      if (fbm(x * 0.24 + 17, z * 0.24 + 1, 3) > 0.62) g.lerp(C(0xa8a06a), 0.6); // dry grass
      out.lerp(g, 0.88);
    }
    const beach = sstep(0.75, 0.25, h) * (1 - sstep(0.5, 0.9, slope));
    out.lerp(C(0xd8c193), beach);
    if (h < 0.24) out.multiplyScalar(0.55); // wet rock near waterline
  } else {
    // seabed
    const d = -h;
    out.copy(C(0xcdb98d)).lerp(C(0x8c8a76), sstep(0.4, 2.6, d)).lerp(C(0x5c6870), sstep(2.4, 4.4, d));
    const patch = fbm(x * 0.5 + 31, z * 0.5 + 17, 3);
    const gm = sstep(0.52, 0.62, patch) * sstep(2.0, 0.9, d) * sstep(0.15, 0.5, d)
      * Math.max(0.35, harborish);
    if (gm > 0.01) out.lerp(C(0x3c7a58).clone().lerp(C(0x55926a), fbm(x * 0.9, z * 0.9, 2)), gm * 0.9);
    if (fbm(x * 1.3 + 5, z * 1.3 + 2, 2) > 0.67) out.lerp(C(0x5a5a58), 0.35); // stones
  }
  const speck = (fbm(x * 2.2 + 44, z * 2.2 + 12, 2) - 0.47) * 0.18;
  out.offsetHSL(0, 0, speck * 0.85);
}

const STRATA = [
  [-6.5, 0x39434c], [-4.4, 0x4b545c], [-3.2, 0x5c5546], [-2.2, 0x6d6250],
  [-1.4, 0x7d6f58], [-0.8, 0x94835f], [-0.35, 0xb19a72], [-0.12, 0xcdb787], [0.01, 0xdbc79a],
];

function strataColor(x, z, y, out) {
  const wob = (fbm(x * 0.5 + 71, z * 0.5 + 29, 3) - 0.47) * 1.1;
  const yy = y + wob;
  let c0 = STRATA[0], c1 = STRATA[STRATA.length - 1];
  for (let i = 0; i < STRATA.length - 1; i++) {
    if (yy >= STRATA[i][0] && yy <= STRATA[i + 1][0]) { c0 = STRATA[i]; c1 = STRATA[i + 1]; break; }
  }
  const t = (yy - c0[0]) / Math.max(c1[0] - c0[0], 1e-4);
  out.copy(C(c0[1])).lerp(C(c1[1]), Math.min(Math.max(t, 0), 1));
  // vertical striations + seams between layers
  if (fbm(x * 2.1 + 7, z * 2.1 + 51, 2) > 0.6) out.multiplyScalar(0.86);
  const seam = Math.abs(t - 0.5);
  if (seam > 0.44) out.multiplyScalar(0.8);
  if (y < -0.02 && y > -0.4) out.multiplyScalar(0.88); // wet band at the waterline cut
}

// ---------------------------------------------------------------------------
// Build

export function buildTerrain(scene) {
  const group = new THREE.Group();
  const TH_N = 288, R_N = 88;

  // top surface (island + seabed) — polar grid
  const verts = (TH_N + 1) * (R_N + 1);
  const pos = new Float32Array(verts * 3);
  const col = new Float32Array(verts * 3);
  const heights = new Float32Array(verts);
  const tmpC = new THREE.Color();
  const idx = [];
  for (let i = 0; i <= TH_N; i++) {
    const th = (i / TH_N) * Math.PI * 2;
    const ct = Math.cos(th), st = Math.sin(th);
    const Rb = boundaryRadius(th);
    for (let j = 0; j <= R_N; j++) {
      const r = (j / R_N) * Rb;
      const x = ct * r, z = st * r;
      const h = heightAt(x, z);
      const k = i * (R_N + 1) + j;
      pos[k * 3] = x; pos[k * 3 + 1] = h; pos[k * 3 + 2] = z;
      heights[k] = h;
    }
  }
  for (let i = 0; i <= TH_N; i++) {
    for (let j = 0; j <= R_N; j++) {
      const k = i * (R_N + 1) + j;
      const x = pos[k * 3], z = pos[k * 3 + 2], h = heights[k];
      // slope from grid neighbours
      const kl = i > 0 ? k - (R_N + 1) : k;
      const kr = i < TH_N ? k + (R_N + 1) : k;
      const jd = j > 0 && j < R_N ? 1 : 0;
      const kb = k - jd, kf = k + jd;
      const dx = Math.hypot(pos[kr * 3] - pos[kl * 3], pos[kr * 3 + 2] - pos[kl * 3 + 2]);
      const dz = Math.hypot(pos[kf * 3] - pos[kb * 3], pos[kf * 3 + 2] - pos[kb * 3 + 2]);
      const gx = dx > 1e-5 ? (heights[kr] - heights[kl]) / dx : 0;
      const gz = dz > 1e-5 ? (heights[kf] - heights[kb]) / dz : 0;
      terrainColor(x, z, h, Math.hypot(gx, gz), tmpC);
      col[k * 3] = tmpC.r; col[k * 3 + 1] = tmpC.g; col[k * 3 + 2] = tmpC.b;
    }
  }
  for (let i = 0; i < TH_N; i++) {
    for (let j = 0; j < R_N; j++) {
      const a = i * (R_N + 1) + j, b = a + R_N + 1;
      idx.push(a, b, a + 1, b, b + 1, a + 1);
    }
  }
  const topGeo = new THREE.BufferGeometry();
  topGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  topGeo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  topGeo.setIndex(idx);
  topGeo.computeVertexNormals();
  const topMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.96, metalness: 0 });
  const top = new THREE.Mesh(topGeo, topMat);
  top.castShadow = true; top.receiveShadow = true;
  group.add(top);

  // cutaway skirt — layered rock, sand, sediment down to the base
  const SK_RINGS = 20;
  const sVerts = (TH_N + 1) * SK_RINGS;
  const sPos = new Float32Array(sVerts * 3);
  const sCol = new Float32Array(sVerts * 3);
  const sIdx = [];
  for (let i = 0; i <= TH_N; i++) {
    const th = (i / TH_N) * Math.PI * 2;
    const ct = Math.cos(th), st = Math.sin(th);
    const Rb = boundaryRadius(th);
    for (let j = 0; j < SK_RINGS; j++) {
      const v = j / (SK_RINGS - 1);
      const y = BOTTOM_Y * Math.pow(v, 1.35);
      const rough = (0.35 + 0.65 * v) * (fbm(ct * 3.1 + 9, st * 3.1 + 4 + v * 2, 3) - 0.47) * 0.9;
      const r = Rb + rough;
      const k = i * SK_RINGS + j;
      sPos[k * 3] = ct * r; sPos[k * 3 + 1] = y; sPos[k * 3 + 2] = st * r;
      strataColor(ct * Rb, st * Rb, y, tmpC);
      sCol[k * 3] = tmpC.r; sCol[k * 3 + 1] = tmpC.g; sCol[k * 3 + 2] = tmpC.b;
    }
  }
  for (let i = 0; i < TH_N; i++) {
    for (let j = 0; j < SK_RINGS - 1; j++) {
      const a = i * SK_RINGS + j, b = (i + 1) * SK_RINGS + j;
      sIdx.push(a, b, a + 1, b, b + 1, a + 1);
    }
  }
  const skirtGeo = new THREE.BufferGeometry();
  skirtGeo.setAttribute('position', new THREE.BufferAttribute(sPos, 3));
  skirtGeo.setAttribute('color', new THREE.BufferAttribute(sCol, 3));
  skirtGeo.setIndex(sIdx);
  skirtGeo.computeVertexNormals();
  const skirt = new THREE.Mesh(skirtGeo, topMat);
  skirt.castShadow = true; skirt.receiveShadow = true;
  group.add(skirt);

  // base plate
  const bottom = new THREE.Mesh(
    new THREE.CircleGeometry(R0 * 1.02, 64),
    new THREE.MeshStandardMaterial({ color: 0x262c33, roughness: 1 })
  );
  bottom.rotation.x = Math.PI / 2;
  bottom.position.y = BOTTOM_Y;
  group.add(bottom);

  // height + shore-distance texture for the water shader (half-float, RG)
  // R = terrain height, G = distance to the nearest shoreline (world units)
  const TS = 256;
  const hdata = new Uint16Array(TS * TS * 2);
  const cell = (2 * TEX_EXTENT) / (TS - 1);
  const dist = new Float32Array(TS * TS);
  const INF = 1e6;
  for (let ty = 0; ty < TS; ty++) {
    for (let tx = 0; tx < TS; tx++) {
      const x = (tx / (TS - 1) - 0.5) * 2 * TEX_EXTENT;
      const z = (ty / (TS - 1) - 0.5) * 2 * TEX_EXTENT;
      const k = ty * TS + tx;
      hdata[k * 2] = THREE.DataUtils.toHalfFloat(heightAt(x, z));
      dist[k] = heightAt(x, z) > 0.12 ? 0 : INF;
    }
  }
  // two-pass chamfer distance transform
  const d = (x, y) => (x < 0 || y < 0 || x >= TS || y >= TS ? INF : dist[y * TS + x]);
  for (let y = 0; y < TS; y++) {
    for (let x = 0; x < TS; x++) {
      const k = y * TS + x;
      dist[k] = Math.min(dist[k],
        d(x - 1, y) + 1, d(x, y - 1) + 1, d(x - 1, y - 1) + 1.414, d(x + 1, y - 1) + 1.414);
    }
  }
  for (let y = TS - 1; y >= 0; y--) {
    for (let x = TS - 1; x >= 0; x--) {
      const k = y * TS + x;
      dist[k] = Math.min(dist[k],
        d(x + 1, y) + 1, d(x, y + 1) + 1, d(x + 1, y + 1) + 1.414, d(x - 1, y + 1) + 1.414);
    }
  }
  for (let k = 0; k < TS * TS; k++) {
    hdata[k * 2 + 1] = THREE.DataUtils.toHalfFloat(Math.min(dist[k] * cell, 24));
  }
  const heightTex = new THREE.DataTexture(hdata, TS, TS, THREE.RGFormat, THREE.HalfFloatType);
  heightTex.minFilter = THREE.LinearFilter;
  heightTex.magFilter = THREE.LinearFilter;
  heightTex.wrapS = THREE.ClampToEdgeWrapping;
  heightTex.wrapT = THREE.ClampToEdgeWrapping;
  heightTex.needsUpdate = true;

  scene.add(group);
  return { group, heightAt, boundaryRadius, heightTex, TEX_EXTENT, PADS };
}
