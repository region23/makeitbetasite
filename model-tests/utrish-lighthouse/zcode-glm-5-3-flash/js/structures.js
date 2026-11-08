// Structures: 1975 lighthouse-monument, 1911 chapel of St Nicholas, metal bridge,
// memorial, pier with boats, village edge, dolphinarium net pens.
import * as THREE from 'three';
import { H, PIER, PLAZA, VILLAGE, BEACH } from './geo.js';
import { waterHeightJS } from './water.js';
import {
  brickTexture, plasterTexture, reliefTexture, glazingTexture, rustTexture,
  deckTexture, netTexture, mulberry,
} from './util.js';

export const animated = []; // { obj, update(t) }

const MAT = {};
export function initMaterials() {
  MAT.brick = new THREE.MeshStandardMaterial({ map: brickTexture(), roughness: 0.92 });
  MAT.plaster = new THREE.MeshStandardMaterial({ map: plasterTexture('#ece6d6'), roughness: 0.95 });
  MAT.plasterWhite = new THREE.MeshStandardMaterial({ map: plasterTexture('#f2efe6', 0.10), roughness: 0.9 });
  MAT.concrete = new THREE.MeshStandardMaterial({ color: 0x9a978e, roughness: 0.94 });
  MAT.concreteDark = new THREE.MeshStandardMaterial({ color: 0x7d7a72, roughness: 0.95 });
  MAT.relief = new THREE.MeshStandardMaterial({ map: reliefTexture(), roughness: 0.9 });
  MAT.glazing = new THREE.MeshStandardMaterial({ map: glazingTexture(), roughness: 0.4, metalness: 0.2 });
  MAT.lanternPink = new THREE.MeshStandardMaterial({ color: 0xb8455f, roughness: 0.55, metalness: 0.3 });
  MAT.metalGrey = new THREE.MeshStandardMaterial({ color: 0x9aa0a2, roughness: 0.6, metalness: 0.6 });
  MAT.metalDark = new THREE.MeshStandardMaterial({ color: 0x555a5e, roughness: 0.7, metalness: 0.5 });
  MAT.rust = new THREE.MeshStandardMaterial({ map: rustTexture(), roughness: 0.85, metalness: 0.4 });
  MAT.deck = new THREE.MeshStandardMaterial({ map: deckTexture(), roughness: 0.85, metalness: 0.3 });
  MAT.rope = new THREE.MeshStandardMaterial({ color: 0x8a6f4d, roughness: 1 });
  MAT.black = new THREE.MeshStandardMaterial({ color: 0x23211e, roughness: 0.8 });
  MAT.granite = new THREE.MeshStandardMaterial({ color: 0x3c3a3d, roughness: 0.55, metalness: 0.15 });
  MAT.gold = new THREE.MeshStandardMaterial({ color: 0xc9a227, roughness: 0.35, metalness: 0.85 });
  MAT.blue = new THREE.MeshStandardMaterial({ map: plasterTexture('#3563ad', 0.22), roughness: 0.75 });
  MAT.wood = new THREE.MeshStandardMaterial({ color: 0x7a6647, roughness: 0.95 });
  MAT.boatWhite = new THREE.MeshStandardMaterial({ color: 0xe8e6df, roughness: 0.45, metalness: 0.1 });
  MAT.boatBlue = new THREE.MeshStandardMaterial({ color: 0x2d5a94, roughness: 0.5, metalness: 0.2 });
  MAT.glassDark = new THREE.MeshStandardMaterial({ color: 0x223038, roughness: 0.25, metalness: 0.6 });
  MAT.net = new THREE.MeshBasicMaterial({ map: netTexture(), transparent: true, opacity: 0.5, side: THREE.DoubleSide, depthWrite: false });
  MAT.floatWhite = new THREE.MeshStandardMaterial({ color: 0xd8d4c8, roughness: 0.7 });
  MAT.buoyOrange = new THREE.MeshStandardMaterial({ color: 0xd35430, roughness: 0.6 });
}

const cyl = (rt, rb, h, seg = 16) => new THREE.CylinderGeometry(rt, rb, h, seg);
const box = (w, h, d) => new THREE.BoxGeometry(w, h, d);
function mesh(geo, mat, x = 0, y = 0, z = 0, shadow = true) {
  const m = new THREE.Mesh(geo, mat);
  m.position.set(x, y, z);
  m.castShadow = shadow; m.receiveShadow = shadow;
  return m;
}

/* ---------------- 1975 lighthouse-monument ---------------- */
export function buildLighthouse() {
  const g = new THREE.Group();
  const gy = H(PLAZA.x, PLAZA.z);
  g.position.set(PLAZA.x, gy, PLAZA.z);

  // stepped white plinth
  const p1 = mesh(cyl(5.6, 6.4, 1.1, 4), MAT.plasterWhite, 0, 0.55, 0); p1.rotation.y = Math.PI / 4;
  const p2 = mesh(cyl(4.4, 5.0, 1.0, 4), MAT.plasterWhite, 0, 1.6, 0); p2.rotation.y = Math.PI / 4;
  g.add(p1, p2);
  // grey collar + white lower band
  g.add(mesh(cyl(2.35, 2.55, 1.7, 20), MAT.concreteDark, 0, 2.9, 0));
  g.add(mesh(cyl(2.28, 2.32, 1.9, 20), MAT.plasterWhite, 0, 4.7, 0));
  // brick drum with slight taper
  const drum = mesh(new THREE.LatheGeometry(
    Array.from({ length: 9 }, (_, i) => {
      const t = i / 8;
      return new THREE.Vector2(2.22 - t * 0.62, 5.65 + t * 8.1);
    }), 28), MAT.brick, 0, 0, 0);
  g.add(drum);
  // sculpted relief band ~62% height
  const band = mesh(cyl(2.42, 2.42, 1.35, 28), MAT.relief, 0, 10.6, 0);
  g.add(band);
  const segGeo = box(0.85, 1.2, 0.42);
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2 + 0.18;
    const s = mesh(segGeo, MAT.relief, Math.cos(a) * 2.42, 10.6 + (i % 2) * 0.08, Math.sin(a) * 2.42);
    s.rotation.y = -a + Math.PI / 2;
    s.rotation.x = (i % 2 ? 1 : -1) * 0.06;
    g.add(s);
  }
  // crenellated crown
  g.add(mesh(cyl(1.72, 1.82, 0.85, 18), MAT.brick, 0, 14.35, 0));
  const merl = box(0.52, 0.55, 0.30);
  for (let i = 0; i < 10; i++) {
    const a = (i / 10) * Math.PI * 2;
    const m = mesh(merl, MAT.brick, Math.cos(a) * 1.70, 15.05, Math.sin(a) * 1.70);
    m.rotation.y = -a + Math.PI / 2;
    g.add(m);
  }
  // gallery deck + railing
  g.add(mesh(cyl(1.62, 1.62, 0.14, 18), MAT.concreteDark, 0, 14.95, 0));
  const railMat = MAT.metalGrey;
  const railTorus = (r, y) => {
    const t = new THREE.Mesh(new THREE.TorusGeometry(r, 0.035, 6, 26), railMat);
    t.rotation.x = Math.PI / 2; t.position.y = y;
    return t;
  };
  g.add(railTorus(1.60, 15.35), railTorus(1.60, 15.75));
  for (let i = 0; i < 14; i++) {
    const a = (i / 14) * Math.PI * 2;
    g.add(mesh(cyl(0.028, 0.028, 0.85, 6), railMat, Math.cos(a) * 1.58, 15.42, Math.sin(a) * 1.58, false));
  }
  // lantern: pink room with dark glazing, cone cap, finial
  g.add(mesh(cyl(0.98, 0.98, 1.06, 14), MAT.glazing, 0, 16.05, 0));
  g.add(mesh(cyl(1.02, 1.02, 0.10, 14), MAT.lanternPink, 0, 15.52, 0));
  g.add(mesh(cyl(1.02, 1.02, 0.10, 14), MAT.lanternPink, 0, 16.58, 0));
  const cap = mesh(new THREE.ConeGeometry(1.12, 0.75, 14), MAT.lanternPink, 0, 17.0, 0);
  g.add(cap);
  g.add(mesh(new THREE.SphereGeometry(0.13, 10, 8), MAT.lanternPink, 0, 17.45, 0));
  // warm glow inside the lantern room
  const glow = mesh(cyl(0.8, 0.8, 0.85, 12),
    new THREE.MeshStandardMaterial({ color: 0xffc27a, emissive: 0xffa658, emissiveIntensity: 0.85, roughness: 0.4 }), 0, 16.05, 0, false);
  g.add(glow);
  const lamp = new THREE.PointLight(0xffb36b, 14, 26, 2);
  lamp.position.set(0, 16.1, 0);
  g.add(lamp);
  // antennas
  g.add(mesh(cyl(0.03, 0.03, 2.6, 5), MAT.metalDark, 0.5, 17.2, 0.3, false));
  g.add(mesh(box(0.5, 0.05, 0.05), MAT.metalDark, 0.5, 17.9, 0.3, false));
  g.add(mesh(cyl(0.022, 0.022, 1.7, 5), MAT.metalDark, -0.55, 17.0, -0.35, false));
  // memorial plaques on the plinth
  const plq = mesh(box(1.7, 1.05, 0.08), MAT.granite, 0, 1.85, 4.55);
  plq.rotation.x = -0.12;
  g.add(plq);

  g.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  return g;
}

/* ---------------- chain fence around the plaza ---------------- */
export function buildFence() {
  const g = new THREE.Group();
  const y0 = H(PLAZA.x, PLAZA.z);
  const R = PLAZA.r + 0.6, N = 20;
  const postGeo = cyl(0.06, 0.075, 0.8, 8);
  let prev = null;
  for (let i = 0; i <= N; i++) {
    const a = (i / N) * Math.PI * 2;
    const x = PLAZA.x + Math.cos(a) * R, z = PLAZA.z + Math.sin(a) * R;
    const y = H(x, z);
    g.add(mesh(postGeo, MAT.black, x, y + 0.4, z, false));
    if (prev) {
      const mx = (prev[0] + x) / 2, mz = (prev[1] + z) / 2;
      const my = (prev[2] + y) / 2 + 0.62;
      const dist = Math.hypot(x - prev[0], z - prev[1]);
      const curve = new THREE.QuadraticBezierCurve3(
        new THREE.Vector3(prev[0], prev[2] + 0.62, prev[1]),
        new THREE.Vector3(mx, my - 0.16, mz),
        new THREE.Vector3(x, y + 0.62, z));
      const tube = new THREE.Mesh(new THREE.TubeGeometry(curve, 8, 0.032, 5), MAT.black);
      tube.castShadow = false;
      g.add(tube);
    }
    prev = [x, z, y];
  }
  g.position.y = 0;
  return g;
}

/* ---------------- 1911 lighthouse -> chapel of St Nicholas ---------------- */
export function buildChapel() {
  const g = new THREE.Group();
  const cx = 60, cz = -48;
  const gy = H(cx, cz);
  g.position.set(cx, gy, cz);
  g.rotation.y = -0.55; // doorway toward the strait

  g.add(mesh(box(2.7, 3.3, 2.7), MAT.plaster, 0, 1.65, 0));
  // broad cap slab
  g.add(mesh(box(3.55, 0.26, 3.55), MAT.plasterWhite, 0, 3.42, 0));
  // blue drum + cone + gilded onion dome + cross
  g.add(mesh(cyl(1.02, 1.02, 1.5, 14), MAT.blue, 0, 4.3, 0));
  g.add(mesh(new THREE.ConeGeometry(1.18, 0.85, 14), MAT.blue, 0, 5.48, 0));
  const onion = mesh(new THREE.SphereGeometry(0.36, 12, 10), MAT.gold, 0, 6.15, 0);
  onion.scale.y = 1.35;
  g.add(onion);
  g.add(mesh(cyl(0.05, 0.05, 0.30, 6), MAT.gold, 0, 6.72, 0, false));
  g.add(mesh(box(0.62, 0.055, 0.055), MAT.gold, 0, 6.80, 0, false));
  g.add(mesh(box(0.30, 0.05, 0.05), MAT.gold, 0, 6.62, 0, false));
  // door + plaque above + narrow window
  g.add(mesh(box(0.72, 1.45, 0.1), MAT.wood, 0, 0.85, 1.36, false));
  g.add(mesh(box(0.62, 0.42, 0.06), MAT.granite, 0, 2.0, 1.38, false));
  g.add(mesh(box(0.28, 0.6, 0.06), MAT.glassDark, 1.37, 2.0, 0, false));
  // rough stone stair block leaning on the side
  const stair = new THREE.Group();
  const rnd = mulberry(12);
  for (let i = 0; i < 5; i++) {
    const w = 1.5 - i * 0.18, h = 0.34;
    const b = mesh(box(w, h, 0.72),
      new THREE.MeshStandardMaterial({ color: i % 2 ? 0x9a8f78 : 0x8f8871, roughness: 1 }),
      -1.95, h / 2 + i * h * 0.82, 0.9 - i * 0.14);
    b.rotation.z = (rnd() - 0.5) * 0.05;
    stair.add(b);
  }
  g.add(stair);
  return g;
}

/* ---------------- granite memorial slab ---------------- */
export function buildMemorial() {
  const g = new THREE.Group();
  const x = 49.5, z = -50.5;
  const gy = H(x, z);
  g.position.set(x, gy, z);
  g.rotation.y = 0.5;
  g.add(mesh(box(0.4, 0.28, 1.3), MAT.concreteDark, -1.0, 0.14, 0));
  g.add(mesh(box(0.4, 0.28, 1.3), MAT.concreteDark, 1.0, 0.14, 0));
  const slab = mesh(box(2.7, 0.16, 1.5), MAT.granite, 0, 0.36, 0);
  slab.rotation.z = 0.055;
  g.add(slab);
  // engraved names hinted by faint strips
  const strip = new THREE.MeshBasicMaterial({ color: 0x8f8d92 });
  for (let i = 0; i < 4; i++) {
    const s = new THREE.Mesh(new THREE.PlaneGeometry(2.1, 0.045), strip);
    s.rotation.x = -Math.PI / 2 + 0.055;
    s.position.set(0, 0.455 - i * 0.001, -0.45 + i * 0.3);
    g.add(s);
  }
  return g;
}

/* ---------------- metal footbridge across the strait ---------------- */
export function buildBridge() {
  const g = new THREE.Group();
  const A = [72, -14], B = [97, -1];
  const dx = B[0] - A[0], dz = B[1] - A[1];
  const len = Math.hypot(dx, dz);
  const ang = Math.atan2(dz, dx);
  // find water span: walk the line, mark where land starts/ends
  let w0 = 0, w1 = len;
  const N = 60;
  let firstWater = -1, lastWater = -1;
  for (let i = 0; i <= N; i++) {
    const t = i / N;
    const x = A[0] + dx * t, z = A[1] + dz * t;
    const h = H(x, z);
    if (h < -0.4) { if (firstWater < 0) firstWater = t * len; lastWater = t * len; }
  }
  if (firstWater >= 0) { w0 = Math.max(0, firstWater - 1.6); w1 = Math.min(len, lastWater + 1.6); }
  const span = w1 - w0;

  const g2 = new THREE.Group();
  g2.position.set(A[0] + dx * (w0 / len), 0, A[1] + dz * (w0 / len));
  g2.rotation.y = -ang;
  const yDeck = 2.7;
  // girders
  for (const s of [-1, 1]) {
    const gr = mesh(box(span, 0.42, 0.16), MAT.rust, span / 2, yDeck - 0.24, s * 1.25);
    g2.add(gr);
  }
  // deck
  g2.add(mesh(box(span, 0.09, 2.9), MAT.deck, span / 2, yDeck, 0));
  // railings
  for (const s of [-1, 1]) {
    const rail = mesh(box(span, 0.05, 0.05), MAT.metalGrey, span / 2, yDeck + 1.05, s * 1.42);
    const mid = mesh(box(span, 0.04, 0.04), MAT.metalGrey, span / 2, yDeck + 0.62, s * 1.42);
    g2.add(rail, mid);
    const np = Math.max(3, Math.round(span / 2.2));
    for (let i = 0; i <= np; i++) {
      g2.add(mesh(cyl(0.028, 0.028, 1.05, 6), MAT.metalGrey, (i / np) * span, yDeck + 0.52, s * 1.42, false));
    }
  }
  // cross braces under the deck
  const bays = Math.max(2, Math.round(span / 7));
  for (let i = 0; i < bays; i++) {
    const x0 = (i / bays) * span, x1 = ((i + 1) / bays) * span;
    const bl = x1 - x0;
    for (const d of [1, -1]) {
      const br = mesh(cyl(0.045, 0.045, Math.hypot(bl, 1.1), 6), MAT.rust,
        (x0 + x1) / 2, yDeck - 0.95, 0);
      br.rotation.z = d * Math.atan2(1.1, bl) + Math.PI / 2 * 0;
      br.rotation.y = 0;
      br.rotation.z = d > 0 ? Math.atan2(1.1, bl) : -Math.atan2(1.1, bl);
      br.rotation.x = Math.PI / 2;
      br.position.y = yDeck - 0.72;
      // orient along XZ? braces run lengthwise (x) with vertical zig
      br.rotation.set(0, 0, (Math.PI / 2) + d * Math.atan2(1.1, bl));
      g2.add(br);
    }
  }
  // abutments
  const abW = 2.2;
  const ab0 = mesh(box(abW, 3.4, 3.4), MAT.concrete, -abW / 2 + 0.3, 0.4, 0);
  const ab1 = mesh(box(abW, 3.4, 3.4), MAT.concrete, span + abW / 2 - 0.3, 0.4, 0);
  g2.add(ab0, ab1);
  g.add(g2);
  return g;
}

/* ---------------- pier, boats, buoys ---------------- */
function motorboat(scale = 1, hullColor = MAT.boatWhite) {
  const b = new THREE.Group();
  const hull = new THREE.Mesh(new THREE.SphereGeometry(1, 14, 8, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2), hullColor);
  hull.scale.set(2.25 * scale, 0.95 * scale, 0.95 * scale);
  hull.position.y = 0.45 * scale;
  hull.castShadow = true;
  b.add(hull);
  const deck = mesh(box(4.2 * scale, 0.1, 1.6 * scale), MAT.wood, 0, 0.42 * scale, 0);
  b.add(deck);
  const gunwale = mesh(box(4.3 * scale, 0.12, 1.7 * scale), hullColor, 0, 0.48 * scale, 0);
  b.add(gunwale);
  const consoleM = mesh(box(0.7 * scale, 0.5 * scale, 0.5 * scale), MAT.boatWhite, -0.2 * scale, 0.75 * scale, 0);
  b.add(consoleM);
  const ws = mesh(box(0.66 * scale, 0.4 * scale, 0.06), MAT.glassDark, -0.2 * scale, 1.0 * scale, 0.3 * scale);
  ws.rotation.x = -0.35;
  b.add(ws);
  const motor = mesh(box(0.3 * scale, 0.5 * scale, 0.3 * scale), MAT.metalDark, -2.2 * scale, 0.55 * scale, 0);
  b.add(motor);
  return b;
}

function excursionBoat() {
  const b = new THREE.Group();
  const hull = new THREE.Mesh(new THREE.SphereGeometry(1, 18, 10, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2), MAT.boatWhite);
  hull.scale.set(5.6, 1.6, 1.9);
  hull.position.y = 0.62;
  hull.castShadow = true;
  b.add(hull);
  const rub = mesh(box(11.0, 0.16, 3.6), MAT.boatBlue, 0, 0.62, 0);
  b.add(rub);
  const deck = mesh(box(10.6, 0.12, 3.2), MAT.wood, 0, 0.72, 0);
  b.add(deck);
  const cabin = mesh(box(5.2, 1.5, 2.5), MAT.boatWhite, -0.6, 1.5, 0);
  b.add(cabin);
  const roof = mesh(box(5.8, 0.14, 2.9), MAT.boatBlue, -0.6, 2.32, 0);
  b.add(roof);
  for (let i = 0; i < 4; i++) {
    b.add(mesh(box(0.06, 0.5, 1.9), MAT.glassDark, 0.9 - i * 0.8, 1.55, 0, false));
  }
  const mast = mesh(cyl(0.05, 0.05, 2.2, 6), MAT.metalGrey, 1.6, 3.4, 0);
  b.add(mast);
  b.add(mesh(new THREE.SphereGeometry(0.08, 8, 6), MAT.buoyOrange, 1.6, 4.55, 0, false));
  // wheel at stern
  const wheel = mesh(cyl(0.55, 0.55, 0.1, 10), MAT.metalDark, 0.4, 1.2, 1.35);
  wheel.rotation.x = Math.PI / 2.3;
  b.add(wheel);
  return b;
}

export function buildPierAndBoats(baked) {
  const g = new THREE.Group();
  const [fx, fz] = PIER.from, [tx, tz] = PIER.to;
  const dx = tx - fx, dz = tz - fz;
  const len = Math.hypot(dx, dz);
  const ang = Math.atan2(dz, dx);
  const deckY = 1.75;

  const pg = new THREE.Group();
  pg.position.set(fx, 0, fz);
  pg.rotation.y = -ang;
  pg.add(mesh(box(len, 0.14, 2.4), MAT.wood, len / 2, deckY, 0));
  // piles
  const np = Math.floor(len / 4);
  for (let i = 0; i <= np; i++) {
    for (const s of [-1, 1]) {
      const px = (i / np) * len;
      const hb = deckY - H(fx + dx * i / np, fz + dz * i / np);
      const pile = mesh(cyl(0.14, 0.16, hb + 0.5, 8), MAT.wood, px, deckY - (hb + 0.5) / 2, s * 1.0);
      pg.add(pile);
    }
  }
  // bollards + rope coil + fenders + ladder
  for (const px of [1, len - 1]) {
    for (const s of [-1, 1]) {
      pg.add(mesh(cyl(0.09, 0.11, 0.32, 8), MAT.black, px, deckY + 0.16, s * 0.95, false));
    }
  }
  const coil = new THREE.Mesh(new THREE.TorusGeometry(0.32, 0.09, 6, 18), MAT.rope);
  coil.rotation.x = Math.PI / 2;
  coil.position.set(len * 0.35, deckY + 0.12, 0.5);
  pg.add(coil);
  for (const fxp of [len * 0.3, len * 0.6, len * 0.85]) {
    const fender = mesh(cyl(0.22, 0.22, 0.5, 10), MAT.boatBlue, fxp, deckY - 0.42, 1.28, false);
    pg.add(fender);
  }
  for (const ry of [0.4, 0.9]) {
    pg.add(mesh(cyl(0.03, 0.03, 1.2, 6), MAT.metalGrey, len - 0.1, deckY - ry, 0, false));
  }
  g.add(pg);

  // excursion boat moored at the pier end
  const eb = excursionBoat();
  eb.position.set(tx + 4.2, 0.35, tz + 3.2);
  eb.rotation.y = ang + 0.5;
  g.add(eb);
  animated.push({
    obj: eb, phase: rnd01(3), base: eb.position.clone(),
    update(t) {
      const y = 0.32 + waterHeightJS(baked, this.base.x, this.base.z, t) * 0.75;
      this.obj.position.y = y;
      this.obj.rotation.z = Math.sin(t * 0.9 + this.phase) * 0.02;
      this.obj.rotation.x = Math.sin(t * 0.7 + this.phase * 2) * 0.03;
    },
  });
  // mooring line
  const line = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, Math.hypot(4.2, 3.2), 4), MAT.rope);
  line.position.set(tx + 2.1, 1.2, tz + 1.6);
  line.rotation.z = Math.PI / 2; line.rotation.y = -Math.atan2(3.2, 4.2);
  g.add(line);

  // three motorboats at moorings in the calm bay
  const spots = [[118, -62, 2.1], [112, -88, -1.2], [126, -96, 0.4]];
  for (let i = 0; i < spots.length; i++) {
    const [bx, bz, ryaw] = spots[i];
    const boat = motorboat(0.9 + (i % 2) * 0.15, i === 1 ? MAT.boatBlue : MAT.boatWhite);
    boat.position.set(bx, 0.25, bz);
    boat.rotation.y = ryaw;
    g.add(boat);
    animated.push({
      obj: boat, phase: i * 2.2, base: boat.position.clone(),
      update(t) {
        const y = 0.22 + waterHeightJS(baked, this.base.x, this.base.z, t) * 0.85;
        this.obj.position.y = y;
        this.obj.rotation.z = Math.sin(t * 1.05 + this.phase) * 0.035;
        this.obj.rotation.x = Math.sin(t * 0.8 + this.phase * 1.7) * 0.045;
        this.obj.rotation.y = ryaw + Math.sin(t * 0.4 + this.phase) * 0.05;
      },
    });
    // mooring buoy
    const buoy = new THREE.Group();
    const bs = mesh(new THREE.SphereGeometry(0.34, 10, 8), MAT.buoyOrange, 0, 0, 0, false);
    buoy.add(bs);
    const pole = mesh(cyl(0.02, 0.02, 0.7, 5), MAT.black, 0, 0.5, 0, false);
    buoy.add(pole);
    const flag = mesh(box(0.3, 0.16, 0.01), MAT.buoyOrange, 0.16, 0.78, 0, false);
    buoy.add(flag);
    buoy.position.set(bx + 2.4, 0.15, bz + 1.4);
    g.add(buoy);
    animated.push({
      obj: buoy, phase: i, base: buoy.position.clone(),
      update(t) {
        this.obj.position.y = 0.1 + waterHeightJS(baked, this.base.x, this.base.z, t) * 0.9;
        this.obj.rotation.z = Math.sin(t * 1.3 + this.phase) * 0.12;
      },
    });
  }
  return g;
}
function rnd01(seed) { const x = Math.sin(seed * 127.1) * 43758.5453; return x - Math.floor(x); }

/* ---------------- village edge ---------------- */
function pitchedRoof(w, d, h, color) {
  const shape = new THREE.Shape();
  shape.moveTo(-d / 2 - 0.15, 0);
  shape.lineTo(0, h);
  shape.lineTo(d / 2 + 0.15, 0);
  shape.lineTo(-d / 2 - 0.15, 0);
  const geo = new THREE.ExtrudeGeometry(shape, { depth: w, bevelEnabled: false });
  geo.translate(0, 0, -w / 2);
  geo.rotateY(Math.PI / 2);
  return geo;
}
export function buildVillage() {
  const g = new THREE.Group();
  const rnd = mulberry(505);
  const specs = [
    [158, -74, 0.3, 0x5a7fa8], [170, -86, -0.2, 0xa05a3a], [182, -80, 0.1, 0x8a8d92],
    [164, -104, 0.5, 0x5a7fa8], [177, -112, -0.4, 0x777d84],
  ];
  for (const [x, z, ry, roofC] of specs) {
    const y = H(x, z);
    const house = new THREE.Group();
    house.position.set(x, y, z);
    house.rotation.y = ry;
    const w = 5 + rnd() * 2.5, d = 4 + rnd() * 1.5, hh = 2.6 + rnd() * 0.7;
    house.add(mesh(box(w, hh, d), MAT.plasterWhite, 0, hh / 2, 0));
    const roof = new THREE.Mesh(pitchedRoof(w, d, 1.5 + rnd() * 0.5),
      new THREE.MeshStandardMaterial({ color: roofC, roughness: 0.8 }));
    roof.position.y = hh; roof.castShadow = true;
    house.add(roof);
    for (let i = 0; i < 3; i++) {
      const win = mesh(box(0.7, 0.8, 0.05), MAT.glassDark, -w / 3 + i * (w / 3), hh * 0.55, d / 2 + 0.03, false);
      house.add(win);
    }
    g.add(house);
  }
  // pier shed
  const sy = H(PIER.from[0] + 3, PIER.from[1] + 1);
  const shed = new THREE.Group();
  shed.position.set(PIER.from[0] + 3, sy, PIER.from[1] + 1);
  shed.add(mesh(box(3.2, 1.9, 2.4), MAT.plaster, 0, 0.95, 0));
  const sr = new THREE.Mesh(pitchedRoof(3.5, 2.7, 0.9), new THREE.MeshStandardMaterial({ color: 0x5a7fa8, roughness: 0.8 }));
  sr.position.y = 1.9; sr.castShadow = true;
  shed.add(sr);
  g.add(shed);
  return g;
}

/* ---------------- dolphinarium net pens (modest hint) ---------------- */
export function buildDolphinarium(baked) {
  const g = new THREE.Group();
  const cx = 134, cz = -118;
  for (const [r, off] of [[7.5, [0, 0]], [10.5, [-13, 5]]]) {
    const ring = new THREE.Mesh(new THREE.TorusGeometry(r, 0.26, 8, 40), MAT.floatWhite);
    ring.rotation.x = Math.PI / 2;
    ring.position.set(cx + off[0], 0.12, cz + off[1]);
    ring.castShadow = false;
    g.add(ring);
    const net = new THREE.Mesh(new THREE.CylinderGeometry(r - 0.1, r - 0.1, 2.0, 30, 1, true), MAT.net);
    net.position.set(cx + off[0], -0.7, cz + off[1]);
    g.add(net);
    animated.push({
      obj: ring, base: ring.position.clone(), phase: r,
      update(t) {
        this.obj.position.y = 0.1 + waterHeightJS(baked, this.base.x, this.base.z, t) * 0.8;
        this.obj.rotation.z = Math.sin(t * 0.8 + this.phase * 0.1) * 0.015;
      },
    });
  }
  return g;
}

/* ---------------- pier-side junk: crates etc. (sparse) ---------------- */
export function buildProps() {
  const g = new THREE.Group();
  // small crated stack near the pier shed
  const bx = PIER.from[0] + 6.5, bz = PIER.from[1] + 2.5;
  const y = H(bx, bz);
  g.add(mesh(box(1.1, 0.8, 0.9), MAT.wood, bx, y + 0.4, bz));
  g.add(mesh(box(0.9, 0.7, 0.8), MAT.wood, bx + 0.3, y + 1.15, bz + 0.15));
  return g;
}
