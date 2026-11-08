import * as THREE from 'three';
import { LAYOUT } from './config.js';
import { terrainHeight } from './terrain.js';
import { plasterTexture, reliefTexture, rustMetalTexture, rockTexture } from './textures.js';

// ---------------------------------------------------------------------------
// All the man-made structures, placed from LAYOUT and seated on terrainHeight.
// ---------------------------------------------------------------------------

const plasterMat = () => new THREE.MeshStandardMaterial({ map: plasterTexture(), roughness: 0.9, metalness: 0 });
// the 1975 tower reads as weathered grey-ochre concrete in the photos
const concreteMat = () => new THREE.MeshStandardMaterial({ color: 0xcfc5ae, map: plasterTexture(), roughness: 0.95, metalness: 0 });
const metalMat = (c = 0x6b6f70) => new THREE.MeshStandardMaterial({ map: rustMetalTexture(), color: c, roughness: 0.7, metalness: 0.35 });
const ground = (x, z) => terrainHeight(x, z);

function box(w, h, d, mat) { const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat); m.castShadow = m.receiveShadow = true; return m; }
function cyl(rt, rb, h, mat, seg = 24) { const m = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg), mat); m.castShadow = m.receiveShadow = true; return m; }

// ---------------- 1975 lighthouse-monument (tall slender pale tower) --------
function buildLighthouse() {
  const L = LAYOUT.lighthouse;
  const g = new THREE.Group();
  const baseY = ground(L.x, L.z);
  const H = 17;

  // base plinth
  const plinth = cyl(1.5, 1.7, 0.8, concreteMat());
  plinth.position.y = 0.4;
  g.add(plinth);

  // slender pale tower (slight taper)
  const tower = cyl(0.82, 0.98, H, concreteMat());
  tower.position.y = H / 2;
  g.add(tower);

  // bas-relief band (sailors / wheel / anchor)
  const band = new THREE.Mesh(
    new THREE.CylinderGeometry(0.94, 0.96, 1.7, 40, 1, true),
    new THREE.MeshStandardMaterial({ map: reliefTexture(), roughness: 0.85, metalness: 0.05, side: THREE.DoubleSide })
  );
  band.position.y = H * 0.42;
  g.add(band);

  // gallery platform + railing near the top
  const gal = cyl(1.35, 1.35, 0.18, new THREE.MeshStandardMaterial({ color: 0x8b8574, roughness: 0.9 }));
  gal.position.y = H - 0.7;
  g.add(gal);
  const rail = new THREE.Mesh(new THREE.TorusGeometry(1.3, 0.05, 8, 40), new THREE.MeshStandardMaterial({ color: 0x4a4a48, roughness: 0.6, metalness: 0.5 }));
  rail.rotation.x = Math.PI / 2;
  rail.position.y = H - 0.28;
  g.add(rail);
  for (let i = 0; i < 20; i++) {
    const a = (i / 20) * Math.PI * 2;
    const post = box(0.05, 0.42, 0.05, new THREE.MeshStandardMaterial({ color: 0x4a4a48 }));
    post.position.set(Math.cos(a) * 1.3, H - 0.5, Math.sin(a) * 1.3);
    g.add(post);
  }

  // lantern room (glazing + warm glow)
  const lantern = cyl(0.62, 0.66, 1.15, new THREE.MeshStandardMaterial({
    color: 0xffdca0, emissive: 0xff9a3c, emissiveIntensity: 0.9, roughness: 0.3, metalness: 0.1, transparent: true, opacity: 0.92
  }));
  lantern.position.y = H - 0.7 + 0.6;
  g.add(lantern);
  // mullions
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    const m = box(0.05, 1.15, 0.05, new THREE.MeshStandardMaterial({ color: 0x3a3a38 }));
    m.position.set(Math.cos(a) * 0.64, lantern.position.y, Math.sin(a) * 0.64);
    g.add(m);
  }
  // dome cap + red finial
  const dome = new THREE.Mesh(new THREE.SphereGeometry(0.7, 24, 16, 0, Math.PI * 2, 0, Math.PI / 2), new THREE.MeshStandardMaterial({ color: 0x8a3b30, roughness: 0.6, metalness: 0.2 }));
  dome.position.y = lantern.position.y + 0.55;
  g.add(dome);
  const finial = cyl(0.05, 0.05, 0.5, new THREE.MeshStandardMaterial({ color: 0xd8d2c4 }));
  finial.position.y = dome.position.y + 0.5;
  g.add(finial);

  // warm lantern light
  const light = new THREE.PointLight(0xffb060, 14, 26, 2);
  light.position.set(0, lantern.position.y, 0);
  g.add(light);

  g.position.set(L.x, baseY, L.z);
  return g;
}

// ---------------- 1911 lighthouse -> Chapel of St. Nicholas ------------------
function buildChapel() {
  const L = LAYOUT.chapel;
  const g = new THREE.Group();
  const baseY = ground(L.x, L.z);

  const body = cyl(1.25, 1.45, 4.6, plasterMat());
  body.position.y = 2.3;
  g.add(body);

  // small drum + dome
  const drum = cyl(0.95, 1.1, 0.7, new THREE.MeshStandardMaterial({ color: 0xd8d2c2, roughness: 0.9 }));
  drum.position.y = 4.9;
  g.add(drum);
  const dome = new THREE.Mesh(new THREE.SphereGeometry(1.0, 24, 16, 0, Math.PI * 2, 0, Math.PI / 2), new THREE.MeshStandardMaterial({ color: 0x5f7f8c, roughness: 0.5, metalness: 0.3 }));
  dome.position.y = 5.2;
  g.add(dome);
  // cross
  const crossV = box(0.09, 1.0, 0.09, new THREE.MeshStandardMaterial({ color: 0xc9a24a, metalness: 0.5, roughness: 0.4 }));
  crossV.position.y = 6.0;
  const crossH = box(0.55, 0.09, 0.09, crossV.material);
  crossH.position.y = 6.25;
  g.add(crossV, crossH);

  // arched door (facing the strait, east)
  const door = box(0.7, 1.5, 0.2, new THREE.MeshStandardMaterial({ color: 0x4a3826, roughness: 0.8 }));
  door.position.set(1.3, 0.8, 0);
  g.add(door);
  // small windows
  for (let i = 0; i < 3; i++) {
    const a = (i - 1) * 0.9 + Math.PI;
    const w = box(0.5, 0.7, 0.15, new THREE.MeshStandardMaterial({ color: 0x223038, emissive: 0x1a2a33, emissiveIntensity: 0.4 }));
    w.position.set(Math.cos(a) * 1.32, 2.6, Math.sin(a) * 1.32);
    w.lookAt(w.position.x * 2, 2.6, w.position.z * 2);
    g.add(w);
  }
  g.position.set(L.x, baseY, L.z);
  return g;
}

// ---------------- Granite memorial (flat slab with two name plaques) -------
function buildMemorialSlab() {
  const L = LAYOUT.slab;
  const g = new THREE.Group();
  const baseY = ground(L.x, L.z);
  // grey granite base
  const base = box(2.6, 0.35, 2.0, new THREE.MeshStandardMaterial({ color: 0x9a988f, roughness: 0.8 }));
  base.position.y = 0.175;
  g.add(base);
  // reddish granite slab on top
  const slab = box(2.0, 0.3, 1.5, new THREE.MeshStandardMaterial({ color: 0xa86a55, roughness: 0.7 }));
  slab.position.y = 0.5;
  g.add(slab);
  // two black engraved name plaques (crew of the Fabyrcius)
  const plaqueMat = new THREE.MeshStandardMaterial({ color: 0x1c1c1e, roughness: 0.5, metalness: 0.3 });
  const p1 = box(0.9, 0.045, 0.72, plaqueMat);
  p1.position.set(-0.5, 0.665, 0);
  const p2 = box(0.9, 0.045, 0.72, plaqueMat);
  p2.position.set(0.5, 0.665, 0);
  g.add(p1, p2);
  // small chain-fence posts
  const postMat = new THREE.MeshStandardMaterial({ color: 0x2a2a2a, roughness: 0.6, metalness: 0.4 });
  for (const [px, pz] of [[-1.6, -1.25], [1.6, -1.25], [-1.6, 1.25], [1.6, 1.25]]) {
    const post = cyl(0.06, 0.06, 0.75, postMat, 8);
    post.position.set(px, 0.37, pz);
    g.add(post);
  }
  g.position.set(L.x, baseY, L.z);
  g.rotation.y = 0.4;
  return g;
}

// ---------------- Thin lattice comms mast (real island detail) -------------
function buildMast() {
  const g = new THREE.Group();
  const mat = new THREE.MeshStandardMaterial({ color: 0x8a8f94, roughness: 0.7, metalness: 0.5 });
  const h = 9;
  const mast = cyl(0.04, 0.14, h, mat, 6);
  mast.position.y = h / 2;
  g.add(mast);
  for (let i = 0; i < 4; i++) {
    const a = box(0.7 - i * 0.12, 0.04, 0.04, mat);
    a.position.y = 2 + i * 1.8;
    a.rotation.y = i * 0.7;
    g.add(a);
  }
  const mx = LAYOUT.lighthouse.x - 2.6, mz = LAYOUT.lighthouse.z + 1.2;
  g.position.set(mx, ground(mx, mz), mz);
  return g;
}

// ---------------- Small Yak-40 crew monument ---------------------------------
function buildYak40() {
  const L = LAYOUT.yak40;
  const g = new THREE.Group();
  const baseY = ground(L.x, L.z);
  const mon = new THREE.Mesh(new THREE.ConeGeometry(0.5, 2.2, 4), new THREE.MeshStandardMaterial({ color: 0x9a9588, roughness: 0.9 }));
  mon.position.y = 1.1;
  mon.rotation.y = Math.PI / 4;
  g.add(mon);
  const base = box(1.2, 0.4, 1.2, new THREE.MeshStandardMaterial({ color: 0x8a8578, roughness: 1 }));
  base.position.y = 0.2;
  g.add(base);
  g.position.set(L.x, baseY, L.z);
  return g;
}

// ---------------- Riveted metal footbridge across the strait -----------------
function buildBridge() {
  const L = LAYOUT.bridge;
  const g = new THREE.Group();
  const span = L.xCape - L.xIsland;
  const x0 = L.xIsland, z = L.z, deckY = L.deckY;
  const w = 1.5;
  const met = metalMat(0x9a9184);

  // deck
  const deck = box(span, 0.18, w, met);
  deck.position.set(x0 + span / 2, deckY, z);
  g.add(deck);
  // cross beams (truss hint)
  for (let i = 0; i < 6; i++) {
    const bx = x0 + 0.5 + i * (span - 1) / 5;
    const cb = box(0.1, 0.5, w, met);
    cb.position.set(bx, deckY + 0.32, z);
    g.add(cb);
  }
  // railings both sides
  for (const s of [-1, 1]) {
    const rz = z + s * w / 2;
    const top = box(span, 0.08, 0.08, met);
    top.position.set(x0 + span / 2, deckY + 1.05, rz);
    g.add(top);
    for (let i = 0; i < 12; i++) {
      const px = x0 + 0.25 + i * (span - 0.5) / 11;
      const post = box(0.06, 1.05, 0.06, met);
      post.position.set(px, deckY + 0.52, rz);
      g.add(post);
    }
  }
  // support legs down to the water/ground
  for (const s of [-1, 1]) {
    const lx = x0 + s * 0.7;
    const hgt = deckY - ground(lx, z);
    for (const sz of [-1, 1]) {
      const leg = box(0.22, hgt + 0.4, 0.22, met);
      leg.position.set(lx, deckY - hgt / 2, z + sz * (w / 2 - 0.2));
      g.add(leg);
    }
  }
  // abutments
  for (const ax of [x0 - 0.4, x0 + span + 0.4]) {
    const ab = box(1.0, 1.6, w + 0.6, new THREE.MeshStandardMaterial({ map: rockTexture(9), color: 0xb3a890, roughness: 1 }));
    ab.position.set(ax, deckY - 0.5, z);
    g.add(ab);
  }
  return g;
}

// ---------------- Causeway / footpath (island side) --------------------------
function buildCauseway() {
  const L = LAYOUT.causeway;
  const g = new THREE.Group();
  const len = Math.abs(L.x1 - L.x0);
  const mat = new THREE.MeshStandardMaterial({ color: 0x9a8f76, roughness: 1 });
  const path = box(len, 0.25, 1.1, mat);
  const xmid = (L.x0 + L.x1) / 2;
  const ymid = ground(xmid, L.z);
  path.position.set(xmid, ymid + 0.05, L.z);
  g.add(path);
  // low stone edging
  for (const s of [-1, 1]) {
    const e = box(len, 0.4, 0.25, mat);
    e.position.set(xmid, ymid, L.z + s * 0.62);
    g.add(e);
  }
  return g;
}

// ---------------- Small boat (hull + cabin) ----------------------------------
export function buildBoat(scale = 1, color = 0xf2efe6) {
  const g = new THREE.Group();
  const hullMat = new THREE.MeshStandardMaterial({ color, roughness: 0.55 });
  // rounded hull
  const hull = new THREE.Mesh(new THREE.SphereGeometry(1, 18, 14), hullMat);
  hull.scale.set(1.9, 0.55, 0.55);
  hull.position.y = 0.25;
  g.add(hull);
  // pointed bow
  const bow = new THREE.Mesh(new THREE.ConeGeometry(0.45, 1.1, 12), hullMat);
  bow.rotation.z = -Math.PI / 2;
  bow.scale.y = 0.75;
  bow.position.set(2.15, 0.28, 0);
  g.add(bow);
  // cabin
  const cab = box(1.1, 0.62, 0.8, new THREE.MeshStandardMaterial({ color: 0xe6e9ea, roughness: 0.45 }));
  cab.position.set(-0.5, 0.72, 0);
  g.add(cab);
  // console
  const con = box(0.28, 0.45, 0.7, new THREE.MeshStandardMaterial({ color: 0x3a3f44, roughness: 0.6 }));
  con.position.set(0.9, 0.62, 0);
  g.add(con);
  g.scale.setScalar(scale);
  return g;
}

// ---------------- Pier with moored boats, ropes, fenders, buoys --------------
function buildPier() {
  const L = LAYOUT.pier;
  const g = new THREE.Group();
  const len = L.xCape - L.xEnd;
  const deckY = 1.8;
  const wood = new THREE.MeshStandardMaterial({ color: 0x96754f, roughness: 0.9 });
  const metal = metalMat(0x877e6f);

  const deck = box(len, 0.16, 2.4, wood);
  deck.position.set((L.xCape + L.xEnd) / 2, deckY, L.z);
  g.add(deck);
  // piles
  for (let i = 0; i <= 6; i++) {
    const px = L.xEnd + i * len / 6;
    for (const s of [-1, 1]) {
      const pile = box(0.22, 3.8, 0.22, metal);
      pile.position.set(px, deckY - 1.9, L.z + s * 1.05);
      g.add(pile);
    }
  }
  // railings
  for (const s of [-1, 1]) {
    const r = box(len, 0.08, 0.08, metal);
    r.position.set((L.xCape + L.xEnd) / 2, deckY + 1.0, L.z + s * 1.1);
    g.add(r);
    for (let i = 0; i < 8; i++) {
      const p = box(0.06, 1.0, 0.06, metal);
      p.position.set(L.xEnd + 0.3 + i * (len - 0.6) / 7, deckY + 0.5, L.z + s * 1.1);
      g.add(p);
    }
  }
  // fenders
  for (let i = 0; i < 4; i++) {
    const f = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.7, 12), new THREE.MeshStandardMaterial({ color: 0x2a2a2a, roughness: 0.8 }));
    f.position.set(L.xEnd + 1 + i * 2.0, deckY - 0.4, L.z + 1.2);
    g.add(f);
  }
  // buoys (a short mooring line just north of the pier)
  const buoyMat = new THREE.MeshStandardMaterial({ color: 0xa8503a, roughness: 0.5 });
  for (let i = 0; i < 3; i++) {
    const b = new THREE.Mesh(new THREE.SphereGeometry(0.35, 14, 10), buoyMat);
    b.position.set(4.8 - i * 2.0, 0.25, 2.3);
    g.add(b);
  }
  return { group: g, boats: [], boatSpots: [] };
}

// moored boats + ropes (animated in life loop)
export function buildBoats() {
  const L = LAYOUT.pier;
  const group = new THREE.Group();
  const boats = [];
  const spots = [
    { x: 3.5, z: L.z - 2.0, rot: Math.PI, s: 1.0, c: 0xf2efe6 },
    { x: 1.0, z: L.z + 2.4, rot: 0.3, s: 0.9, c: 0x5f7f8a },
    { x: 5.6, z: L.z + 2.4, rot: Math.PI * 0.85, s: 1.25, c: 0xe8e2d2 }, // excursion boat
  ];
  const ropeMat = new THREE.LineBasicMaterial({ color: 0x6b5b40 });
  for (const s of spots) {
    const b = buildBoat(s.s, s.c);
    b.position.set(s.x, 0, s.z);
    b.rotation.y = s.rot;
    group.add(b);
    boats.push({ mesh: b, base: new THREE.Vector3(s.x, 0, s.z), rot: s.rot, phase: Math.random() * 6 });
    // mooring line to the pier
    const pts = [new THREE.Vector3(s.x, 0.55, s.z), new THREE.Vector3((s.x + L.xCape) / 2 + 0.5, 1.8, L.z)];
    const rg = new THREE.BufferGeometry().setFromPoints(pts);
    group.add(new THREE.Line(rg, ropeMat));
  }
  return { group, boats };
}

// ---------------- Village buildings at the edge ------------------------------
function buildVillage() {
  const L = LAYOUT.village;
  const g = new THREE.Group();
  const walls = new THREE.MeshStandardMaterial({ color: 0xd8cbb0, roughness: 0.9 });
  const roof = new THREE.MeshStandardMaterial({ color: 0x7a4a34, roughness: 0.8 });
  const houses = [
    { dx: 0, dz: 0, s: 1.0 }, { dx: 3, dz: 2, s: 0.8 }, { dx: -2.5, dz: 3, s: 0.7 }, { dx: 2, dz: -3, s: 0.9 },
  ];
  for (const h of houses) {
    const baseY = ground(L.x + h.dx, L.z + h.dz);
    const house = new THREE.Group();
    const body = box(2.4 * h.s, 1.8 * h.s, 2.0 * h.s, walls);
    body.position.y = 0.9 * h.s;
    house.add(body);
    const roofm = new THREE.Mesh(new THREE.ConeGeometry(1.9 * h.s, 1.2 * h.s, 4), roof);
    roofm.position.y = 2.4 * h.s;
    roofm.rotation.y = Math.PI / 4;
    house.add(roofm);
    house.position.set(L.x + h.dx, baseY, L.z + h.dz);
    g.add(house);
  }
  return g;
}

// ---------------- Dolphinarium lagoon + floating net pens ---------------------
function buildDolphinarium() {
  const L = LAYOUT.dolphinarium;
  const g = new THREE.Group();
  const frame = new THREE.MeshStandardMaterial({ color: 0x8a9aa0, roughness: 0.6, metalness: 0.3 });
  // floating net pens: rectangular grid frames on the calm lagoon water
  const pens = [
    { x: L.x - 3, z: L.z - 1, w: 2.4, d: 1.8 },
    { x: L.x + 2.5, z: L.z + 1.5, w: 2.0, d: 1.6 },
    { x: L.x - 1, z: L.z + 2.4, w: 1.6, d: 1.4 },
  ];
  for (const p of pens) {
    const pen = new THREE.Group();
    const grid = 4;
    for (let i = 0; i <= grid; i++) {
      const bar = box(p.w, 0.05, 0.04, frame);
      bar.position.set(-p.w / 2 + i * p.w / grid, 0, 0);
      pen.add(bar);
      const bar2 = box(0.04, 0.05, p.d, frame);
      bar2.position.set(0, 0, -p.d / 2 + i * p.d / grid);
      pen.add(bar2);
    }
    // corner floats
    for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) {
      const fl = new THREE.Mesh(new THREE.SphereGeometry(0.16, 10, 8), new THREE.MeshStandardMaterial({ color: 0x3f7f8a, roughness: 0.4 }));
      fl.position.set(sx * p.w / 2, 0, sz * p.d / 2);
      pen.add(fl);
    }
    pen.position.set(p.x, 0.05, p.z);
    g.add(pen);
  }
  // a small shore building (dolphinarium pavilion) at the edge
  const pav = new THREE.Group();
  const baseY = ground(L.x + 4, L.z + 3);
  const body = box(3.0, 1.6, 2.4, new THREE.MeshStandardMaterial({ color: 0xcfd8da, roughness: 0.8 }));
  body.position.y = 0.8;
  pav.add(body);
  const roofm = box(3.4, 0.2, 2.8, new THREE.MeshStandardMaterial({ color: 0x5a6f78, roughness: 0.7 }));
  roofm.position.y = 1.7;
  pav.add(roofm);
  pav.position.set(L.x + 4.5, baseY, L.z + 3.2);
  g.add(pav);
  return g;
}

// ---------------- Assemble ----------------------------------------------------
export function buildStructures() {
  const group = new THREE.Group();
  group.add(buildLighthouse());
  group.add(buildChapel());
  group.add(buildMemorialSlab());
  group.add(buildMast());
  group.add(buildYak40());
  group.add(buildBridge());
  group.add(buildCauseway());
  const pier = buildPier();
  group.add(pier.group);
  const boats = buildBoats();
  group.add(boats.group);
  group.add(buildVillage());
  group.add(buildDolphinarium());
  return { group, boats: boats.boats };
}
