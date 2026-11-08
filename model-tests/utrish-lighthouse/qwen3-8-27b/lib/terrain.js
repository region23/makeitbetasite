import * as THREE from 'three';
import { LAYOUT } from './config.js';
import { rockTexture, strataTexture, pebbleTexture, fbm } from './textures.js';

// ---------------------------------------------------------------------------
// Terrain height field: open-sea seabed (west), Utrish island (rocky islet),
// the narrow strait, and the Bolshoy Utrish cape with its ridge (east).
// The top surface is an irregular display piece; the cut sides show the
// tilted landslide strata.
// ---------------------------------------------------------------------------

const B = LAYOUT.bounds;
const BASE_Y = -9; // diorama slab bottom

function smoothstep(a, b, x) {
  const t = Math.max(0, Math.min(1, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
}

function seabed(x, z) {
  const westDepth = smoothstep(2.0, -50.0, x) * 7.0;
  return -1.6 - westDepth;
}

function islandHeight(x, z) {
  const L = LAYOUT.island;
  const dx = (x - L.x) / L.ax;
  const dz = (z - L.z) / L.az;
  // jagged, irregular shoreline (periodic in the angle, so no seam)
  const ang = Math.atan2(dz, dx);
  const shore = 1 + 0.11 * Math.sin(3 * ang + 1.7) + 0.08 * Math.sin(5 * ang - 0.9) + 0.05 * Math.sin(8 * ang + 2.4);
  const r = Math.sqrt(dx * dx + dz * dz) / shore;
  if (r >= 1.0) return 0;
  const plateau = 0.48;
  if (r <= plateau) return L.height;
  const u = (r - plateau) / (1.0 - plateau);
  return L.height * Math.pow(1.0 - u, 1.7);
}

function capeProfile(x) {
  const beach = smoothstep(-1.0, 6.0, x) * 1.8;
  const ridge = smoothstep(11.0, 33.0, x) * LAYOUT.cape.ridgeHeight;
  const front = -0.5 * (1.0 - smoothstep(-1.5, 0.5, x));
  return beach + ridge + front;
}

function capeHeight(x, z) {
  if (x < -2) return 0;
  const ez = z / LAYOUT.cape.zHalf;
  let zfade = Math.max(0, 1.0 - ez * ez);
  zfade = zfade * zfade;
  let h = capeProfile(x) * zfade;
  // rolling ridge undulation in the back
  h += (fbm(x * 0.25 + 20, z * 0.25 + 20, 3) - 0.5) * 5.0 * smoothstep(12, 30, x) * zfade;
  return h;
}

function lagoonHeight(x, z) {
  const L = LAYOUT.dolphinarium;
  const dx = (x - L.x) / L.rx;
  const dz = (z - L.z) / L.rz;
  const r = Math.sqrt(dx * dx + dz * dz);
  if (r >= 1) return Infinity;
  return -1.3 + r * r * 3.2; // a shallow carved basin (the dolphinarium lagoon)
}

function rockiness(x, z, isl, cap) {
  let r = 0;
  if (isl > 0) r = Math.max(r, 0.9 * smoothstep(0, 1.5, isl));
  if (cap > 0) r = Math.max(r, 0.22 + smoothstep(2.0, 14.0, cap) * 0.8);
  if (isl <= 0 && cap <= 0) r = 0.12;
  return r;
}

export function terrainHeight(x, z) {
  const isl = islandHeight(x, z);
  const cap = capeHeight(x, z);
  // seabed is the base everywhere; land masses only raise it (they are 0, not
  // negative, outside their footprint, so a plain Math.max would clamp the
  // open-sea seabed up to the waterline)
  let h = seabed(x, z);
  if (isl > 0 && isl > h) h = isl;
  if (cap > 0 && cap > h) h = cap;
  const rock = rockiness(x, z, isl, cap);
  const n = fbm(x * 0.35, z * 0.35, 4) - 0.5;
  const n2 = fbm(x * 1.7, z * 1.7, 3) - 0.5;
  h += (n * 1.5 + n2 * (0.55 + (isl > 0 ? 0.5 : 0))) * rock;
  // rocky shelf: shallow turquoise water hugging the island's cliffs
  const isl2 = islandHeight(x, z);
  const dxs = (x - LAYOUT.island.x) / LAYOUT.island.ax;
  const dzs = (z - LAYOUT.island.z) / LAYOUT.island.az;
  const rs = Math.sqrt(dxs * dxs + dzs * dzs);
  if (isl2 <= 0) h += 1.5 * smoothstep(1.75, 1.0, rs);
  // keep the island plateau fairly level for the lighthouses
  if (isl > 6.0) h = THREE.MathUtils.lerp(h, isl, 0.6);
  // carve the dolphinarium lagoon basin
  const lag = lagoonHeight(x, z);
  if (lag < h) h = lag;
  return h;
}

// ---------------------------------------------------------------------------
// Per-vertex colour by region / height.
// ---------------------------------------------------------------------------
const C = (r, g, b) => new THREE.Color(r, g, b);
function mix(a, b, t) { return a.clone().lerp(b, t); }

function terrainColor(x, z, h) {
  const isl = islandHeight(x, z);
  const cap = capeHeight(x, z);
  let c;
  if (isl > 0.05) {
    const t = smoothstep(0, 7.5, h);
    c = mix(C(0.50, 0.46, 0.39), C(0.80, 0.76, 0.64), t);
    if (h > 6.3) c = mix(c, C(0.64, 0.60, 0.36), smoothstep(6.3, 7.5, h)); // dry grass on top
    // tilted strata bands (fractured limestone / marl)
    const strata = Math.sin(h * 1.15 + x * 0.55 + z * 0.30);
    c.multiplyScalar(0.84 + 0.30 * (strata * 0.5 + 0.5));
    // wet darkening at the waterline
    c.multiplyScalar(0.82 + 0.18 * smoothstep(0.0, 1.2, h));
  } else if (cap > 0.02) {
    const beach = smoothstep(0.0, 2.6, h);
    let col = mix(C(0.76, 0.70, 0.55), C(0.55, 0.52, 0.32), beach);
    const jun = (fbm(x * 0.5 + 10, z * 0.5 + 10, 3) - 0.46) * 2.4;
    if (h > 2.5) col = mix(col, C(0.20, 0.29, 0.17), THREE.MathUtils.clamp(jun, 0, 1) * smoothstep(2.5, 8, h));
    const rockP = (fbm(x * 0.7 + 40, z * 0.7 + 40, 3) - 0.5) * 2;
    if (rockP > 0.35 && h > 1.2) col = mix(col, C(0.72, 0.67, 0.55), smoothstep(0.35, 0.8, rockP) * 0.8);
    c = col;
  } else {
    const d = -h;
    c = mix(C(0.80, 0.75, 0.62), C(0.10, 0.20, 0.26), smoothstep(0.5, 6.0, d));
    // seagrass / brown algae patches in the shallow water
    const veg = (fbm(x * 0.4 + 30, z * 0.4 + 30, 3) - 0.5) * 2;
    if (d > 0.3 && d < 3.5) c = mix(c, C(0.34, 0.42, 0.30), THREE.MathUtils.clamp(veg, 0, 1) * 0.55);
  }
  // subtle large-scale variation
  const v = fbm(x * 0.15, z * 0.15, 3) - 0.5;
  return c.multiplyScalar(0.92 + 0.16 * (v + 0.5));
}

// ---------------------------------------------------------------------------
// Build the top surface heightfield.
// ---------------------------------------------------------------------------
function buildTopSurface() {
  const nx = 180, nz = 112;
  const pos = [], col = [], idx = [];
  for (let j = 0; j < nz; j++) {
    const z = B.zMin + (j / (nz - 1)) * (B.zMax - B.zMin);
    for (let i = 0; i < nx; i++) {
      const x = B.xMin + (i / (nx - 1)) * (B.xMax - B.xMin);
      const h = terrainHeight(x, z);
      pos.push(x, h, z);
      const c = terrainColor(x, z, h);
      col.push(c.r, c.g, c.b);
    }
  }
  for (let j = 0; j < nz - 1; j++) {
    for (let i = 0; i < nx - 1; i++) {
      const a = j * nx + i, b = a + 1, c2 = a + nx, d = c2 + 1;
      idx.push(a, c2, b, b, c2, d);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
}

// Grayscale detail texture (multiplies vertex colours for tactile rock).
function detailTexture() {
  const s = 256;
  const c = document.createElement('canvas'); c.width = c.height = s;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#808080'; ctx.fillRect(0, 0, s, s);
  const img = ctx.getImageData(0, 0, s, s);
  for (let i = 0; i < img.data.length; i += 4) {
    const v = 128 + (fbm((i / 4) % s * 0.15, Math.floor((i / 4) / s) * 0.15, 3) - 0.5) * 120;
    img.data[i] = img.data[i + 1] = img.data[i + 2] = v;
  }
  ctx.putImageData(img, 0, 0);
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(24, 16);
  return t;
}

// ---------------------------------------------------------------------------
// Cutaway side walls (tilted landslide strata) + bottom cap.
// ---------------------------------------------------------------------------
function buildWalls() {
  const mat = new THREE.MeshStandardMaterial({
    map: strataTexture(),
    side: THREE.DoubleSide,
    roughness: 0.95,
    metalness: 0.0,
  });
  const group = new THREE.Group();
  const edges = [
    { from: [B.xMin, B.zMin], to: [B.xMax, B.zMin] }, // north
    { from: [B.xMin, B.zMax], to: [B.xMax, B.zMax] }, // south
    { from: [B.xMin, B.zMin], to: [B.xMin, B.zMax] }, // west
    { from: [B.xMax, B.zMin], to: [B.xMax, B.zMax] }, // east
  ];
  for (const e of edges) {
    const steps = 64;
    const pos = [], uv = [], idx = [], nor = [];
    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      const x = e.from[0] + (e.to[0] - e.from[0]) * t;
      const z = e.from[1] + (e.to[1] - e.from[1]) * t;
      const h = terrainHeight(x, z);
      pos.push(x, h, z, x, BASE_Y, z);
      uv.push(t * 10, 0, t * 10, 1);
      // inward-facing normal (approx)
      const dx = e.to[0] - e.from[0], dz = e.to[1] - e.from[1];
      const len = Math.hypot(dx, dz) || 1;
      const nx = -dz / len, nz = dx / len; // inward
      nor.push(nx, 0, nz, nx, 0, nz);
    }
    for (let s = 0; s < steps; s++) {
      const a = s * 2, b = a + 1, c2 = a + 2, d = a + 3;
      idx.push(a, b, c2, c2, b, d);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
    g.setIndex(idx);
    group.add(new THREE.Mesh(g, mat));
  }
  // bottom cap
  const cap = new THREE.Mesh(
    new THREE.PlaneGeometry(B.xMax - B.xMin, B.zMax - B.zMin),
    new THREE.MeshStandardMaterial({ color: 0x2a2620, roughness: 1 })
  );
  cap.rotation.x = -Math.PI / 2;
  cap.position.set((B.xMin + B.xMax) / 2, BASE_Y, (B.zMin + B.zMax) / 2);
  group.add(cap);
  return group;
}

// ---------------------------------------------------------------------------
// Scattered fallen boulders at the island base + cape shoreline.
// ---------------------------------------------------------------------------
function rockGeometry(seed) {
  const g = new THREE.IcosahedronGeometry(1, 1);
  const p = g.attributes.position;
  let s = seed;
  const rnd = () => { s = (s * 16807) % 2147483647; return (s & 0xffff) / 0xffff; };
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), y = p.getY(i), z = p.getZ(i);
    const n = 0.75 + 0.5 * fbm(x * 1.5 + seed, z * 1.5 + y, 3);
    p.setXYZ(i, x * n, y * (n * 0.8), z * n);
  }
  g.computeVertexNormals();
  return g;
}

function buildBoulders() {
  const geo = rockGeometry(1234);
  const mat = new THREE.MeshStandardMaterial({
    map: rockTexture(3),
    roughness: 0.95, metalness: 0,
    color: 0xb3a88f,
  });
  const group = new THREE.Group();
  const spots = [];
  // ring around the island base (fallen blocks at the waterline)
  const isl = LAYOUT.island;
  for (let i = 0; i < 46; i++) {
    const a = (i / 46) * Math.PI * 2;
    const rr = 1.0 + (i % 5) * 0.05;
    const x = isl.x + Math.cos(a) * isl.ax * rr;
    const z = isl.z + Math.sin(a) * isl.az * rr;
    spots.push([x, z, 0.5 + (i % 7) * 0.28]);
  }
  // along the cape shoreline (west face) + strait floor
  for (let i = 0; i < 22; i++) {
    const x = -1.5 + (i / 22) * 11;
    const z = (i % 2 ? 1 : -1) * (3 + (i % 4) * 2);
    spots.push([x, z, 0.4 + (i % 5) * 0.22]);
  }
  let s = 99;
  const rnd = () => { s = (s * 16807) % 2147483647; return (s & 0xffff) / 0xffff; };
  spots.forEach(([x, z, sc], i) => {
    const m = new THREE.Mesh(geo, mat);
    const h = terrainHeight(x, z);
    m.position.set(x + (rnd() - 0.5), Math.max(h, -0.4) - sc * 0.2, z + (rnd() - 0.5));
    m.scale.set(sc * (0.8 + rnd() * 0.6), sc * (0.6 + rnd() * 0.4), sc * (0.8 + rnd() * 0.6));
    m.rotation.set(rnd() * 0.5, rnd() * Math.PI, rnd() * 0.5);
    group.add(m);
  });
  return group;
}

export function buildTerrain() {
  const group = new THREE.Group();

  const top = new THREE.Mesh(
    buildTopSurface(),
    new THREE.MeshStandardMaterial({
      vertexColors: true,
      map: detailTexture(),
      roughness: 0.96,
      metalness: 0.0,
      flatShading: true,
    })
  );
  top.castShadow = true;
  top.receiveShadow = true;
  group.add(top);

  group.add(buildWalls());
  group.add(buildBoulders());
  return group;
}
