/**
 * props.js — the built parts of the scene: lighthouse, cottage, winding stone
 * stair, jetty, harbour gear and the two moored boats.
 *
 * Pieces are merged into a handful of meshes that share a small set of
 * canvas-drawn materials, so the whole village costs a few draw calls.
 */

import * as THREE from 'three';
import { ground, smoothstep, clamp, lerp, fbm, noise2, mulberry32, PLACES } from './terrain.js';
import * as T from './theme.js';
import { mergeGeoms, roughBox, makeRock, shadeFaces, noiseDisplace, M } from './util.js';

/* ------------------------------------------------------------ materials */

export function makePropMaterials(tx) {
  const std = (map, opts = {}) =>
    new THREE.MeshStandardMaterial({
      map: map || null,
      vertexColors: !!map,
      roughness: 0.85,
      metalness: 0,
      ...opts,
    });

  const glow = (intensity) =>
    new THREE.MeshStandardMaterial({
      map: tx.glow,
      emissive: new THREE.Color(T.WARM_LIGHT),
      emissiveMap: tx.glow,
      emissiveIntensity: intensity,
      roughness: 0.35,
    });

  const rep = (tex, rx, ry) => {
    const t = tex.clone();
    t.needsUpdate = true;
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    t.repeat.set(rx, ry);
    return t;
  };

  return {
    stone: std(tx.stone),
    stoneGrey: std(tx.stoneGrey),
    plaster: std(tx.plaster),
    wood: std(tx.wood),
    woodDark: std(tx.woodDark),
    hull: std(tx.wood, { roughness: 0.6, side: THREE.DoubleSide }),
    slate: std(rep(tx.slate, 2, 2)),
    tower: new THREE.MeshStandardMaterial({ map: tx.tower, roughness: 0.78 }),
    copper: new THREE.MeshStandardMaterial({ color: T.COPPER, roughness: 0.42, metalness: 0.72 }),
    iron: new THREE.MeshStandardMaterial({ color: 0x3a3733, roughness: 0.55, metalness: 0.6 }),
    rope: std(tx.woodDark, { color: 0xd9c39a, roughness: 1 }),
    glass: glow(1.5),
    glassSoft: glow(0.8),
    net: new THREE.MeshStandardMaterial({ map: tx.net, color: 0x9a9c86, alphaTest: 0.4, side: THREE.DoubleSide, roughness: 1 }),
    lamp: new THREE.MeshStandardMaterial({
      color: 0x211e1a,
      emissive: new THREE.Color(T.WARM_LIGHT),
      emissiveIntensity: 1.8,
      roughness: 0.4,
    }),
  };
}

/* --------------------------------------------------------------- helpers */

// Prop textures already carry the base colour, so a part's colour is only a
// tint. Normalising its brightness stops two dark values multiplying together
// and turning the timber and stonework into chocolate.
const _tint = new THREE.Color();
function push(list, geo, matrix, color) {
  if (color === undefined || color === null) {
    list.push({ geo, matrix, color });
    return;
  }
  _tint.set(color);
  const m = Math.max(_tint.r, _tint.g, _tint.b);
  if (m > 0.002) _tint.multiplyScalar(clamp(0.85 / m, 1.0, 6.0));
  list.push({ geo, matrix, color: _tint.getHex() });
}

const box = (w, h, d, seed = 1, jitter = 0) => (jitter > 0 ? roughBox(w, h, d, seed, jitter) : new THREE.BoxGeometry(w, h, d));
const cyl = (rTop, rBot, h, seg = 12) => new THREE.CylinderGeometry(rTop, rBot, h, seg);

function rope(points, r = 0.035, seg = 14) {
  const curve = new THREE.CatmullRomCurve3(points.map((p) => new THREE.Vector3(p[0], p[1], p[2])));
  return new THREE.TubeGeometry(curve, seg, r, 5, false);
}

function barrelGeo(r, h, seg = 10) {
  const pts = [];
  for (let i = 0; i <= 8; i++) {
    const t = i / 8;
    pts.push(new THREE.Vector2(r * (1 - 0.16 * Math.pow(Math.abs(t - 0.5) * 2, 2)), (t - 0.5) * h));
  }
  const g = new THREE.LatheGeometry(pts, seg);
  g.computeVertexNormals();
  return g;
}

function addMerged(group, pairs) {
  for (const [parts, mat] of pairs) {
    if (!parts.length) continue;
    const mesh = new THREE.Mesh(mergeGeoms(parts), mat);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    group.add(mesh);
  }
}

/* ----------------------------------------------------------- lighthouse */

function buildLighthouse(mats) {
  const g = new THREE.Group();
  const P = PLACES.lighthouse;
  const h0 = ground(P.x, P.z);
  const stone = [];
  const wood = [];
  const iron = [];
  const copper = [];
  const plasterParts = [];

  const towerH = 7.3;
  const baseR = 1.62;
  const topR = 1.06;
  const yTop = h0 + 0.4 + towerH;

  // rock footing, stone plinth
  const foot = makeRock(1201, 3.15, true, 0.32);
  shadeFaces(foot, (c, x, y) => c.setHex(0x8d8579).multiplyScalar(0.76 + 0.3 * smoothstep(-1.2, 1.2, y)));
  push(stone, foot, M.place(0, h0 - 0.6, 0, 0, 0.4, 0));
  push(stone, cyl(2.3, 2.52, 0.5, 26), M.place(0, h0 - 0.02, 0), 0xcfc6b6);
  push(stone, cyl(2.02, 2.22, 0.44, 26), M.place(0, h0 + 0.42, 0), 0xc8bfae);

  // tower: worn, dented, banded plaster over a stone foot
  const tower = new THREE.CylinderGeometry(topR, baseR, towerH, 30, 4, false);
  const tp = tower.getAttribute('position');
  for (let i = 0; i < tp.count; i++) {
    const x = tp.getX(i);
    const y = tp.getY(i);
    const z = tp.getZ(i);
    const dent = (fbm(x * 0.9 + 4.2, z * 0.9 - 2.1, 3, 151) - 0.5) * 0.05 + (noise2(y * 2.4, Math.hypot(x, z) * 5, 155) - 0.5) * 0.02;
    tp.setXYZ(i, x * (1 + dent), y, z * (1 + dent));
  }
  tower.computeVertexNormals();
  const towerMesh = new THREE.Mesh(tower, mats.tower);
  towerMesh.position.set(0, h0 + 0.62 + towerH / 2, 0);
  towerMesh.castShadow = true;
  towerMesh.receiveShadow = true;
  g.add(towerMesh);

  // corbel ring, gallery deck, railing
  push(stone, cyl(1.88, 1.3, 0.52, 26), M.place(0, yTop - 0.06, 0), 0xc6bdac);
  push(stone, cyl(1.92, 1.88, 0.16, 26), M.place(0, yTop + 0.26, 0), 0xd8d0c0);
  push(stone, cyl(1.8, 1.8, 0.1, 26), M.place(0, yTop + 0.38, 0), 0x9d9488);
  for (let i = 0; i < 18; i++) {
    const a = (i / 18) * Math.PI * 2;
    push(iron, cyl(0.035, 0.035, 0.92, 6), M.place(Math.cos(a) * 1.7, yTop + 0.9, Math.sin(a) * 1.7));
  }
  push(iron, new THREE.TorusGeometry(1.7, 0.045, 6, 30), M.place(0, yTop + 1.36, 0, -Math.PI / 2));
  push(iron, new THREE.TorusGeometry(1.7, 0.028, 5, 26), M.place(0, yTop + 0.92, 0, -Math.PI / 2));

  // lantern room: warm glass, iron mullions, the lamp, copper roof
  const glassH = 1.45;
  const yGlass = yTop + 0.43 + glassH / 2;
  const glassMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.98, 1.04, glassH, 16, 1, true), mats.glass);
  glassMesh.position.set(0, yGlass, 0);
  g.add(glassMesh);
  for (let i = 0; i < 7; i++) {
    const a = (i / 7) * Math.PI * 2;
    push(iron, box(0.07, glassH, 0.07), M.place(Math.cos(a) * 1.0, yGlass, Math.sin(a) * 1.0, 0, -a, 0));
  }
  push(iron, cyl(1.1, 1.1, 0.1, 18), M.place(0, yTop + 0.46, 0), 0x2f2c28);
  push(iron, cyl(1.02, 1.02, 0.09, 18), M.place(0, yTop + 0.4 + glassH, 0), 0x2f2c28);
  const lamp = new THREE.Mesh(new THREE.SphereGeometry(0.3, 12, 10), mats.lamp);
  lamp.position.set(0, yGlass + 0.06, 0);
  g.add(lamp);
  const lampLight = new THREE.PointLight(T.WARM_LIGHT, 6, 17, 1.7);
  lampLight.position.copy(lamp.position);
  g.add(lampLight);

  const dome = new THREE.SphereGeometry(1.18, 18, 9, 0, Math.PI * 2, 0, Math.PI * 0.52);
  noiseDisplace(dome, 0.02, 3.6, 21);
  push(copper, dome, M.place(0, yTop + 0.38 + glassH, 0));
  push(copper, cyl(0.055, 0.055, 0.62, 6), M.place(0, yTop + 1.05 + glassH, 0));
  push(copper, new THREE.SphereGeometry(0.12, 8, 6), M.place(0, yTop + 1.36 + glassH, 0));
  push(iron, box(0.44, 0.03, 0.12), M.place(0.15, yTop + 1.56 + glassH, 0, 0, 0.3, 0));

  // door, windows, sill, lintel
  const angOf = (a, r, y, o) => [Math.cos(a) * (r + o), y, Math.sin(a) * (r + o)];
  const doorA = 0.95;
  {
    const [dx, dy, dz] = angOf(doorA, baseR - 0.06, h0 + 1.5, 0.02);
    push(stone, box(1.1, 2.0, 0.32, 3, 0.12), M.place(dx, dy, dz, 0, -doorA, 0), 0xcfc6b6);
    const [wx, wy, wz] = angOf(doorA, baseR, h0 + 1.44, 0.1);
    push(wood, box(0.78, 1.66, 0.12, 4, 0.05), M.place(wx, wy, wz, 0, -doorA, 0), 0x8a6a45);
    const [sx, sy, sz] = angOf(doorA, baseR + 0.2, h0 + 0.6, 0.1);
    push(stone, box(1.5, 0.18, 0.8, 5, 0.1), M.place(sx, sy, sz, 0, -doorA, 0), 0xa89f92);
    const [tx2, ty2, tz2] = angOf(doorA, baseR + 0.4, h0 + 0.34, 0.1);
    push(stone, box(1.36, 0.18, 0.7, 6, 0.1), M.place(tx2, ty2, tz2, 0, -doorA, 0), 0xa89f92);
  }
  const windowAt = (ang, y, r) => {
    const [ox, oy, oz] = angOf(ang, r, y, 0.0);
    push(stone, box(0.76, 1.04, 0.22, 7, 0.09), M.place(ox, oy, oz, 0, -ang, 0), 0xd6ccbb);
    const pane = new THREE.Mesh(box(0.52, 0.8, 0.06), mats.glassSoft);
    const [px, py, pz] = angOf(ang, r, y, 0.11);
    pane.position.set(px, py, pz);
    pane.rotation.y = -ang;
    g.add(pane);
    const [sx, sy, sz] = angOf(ang, r, y - 0.58, 0.06);
    push(stone, box(0.94, 0.12, 0.3, 8, 0.08), M.place(sx, sy, sz, 0, -ang, 0), 0xb9b0a1);
    const [lx, ly, lz] = angOf(ang, r, y + 0.6, 0.05);
    push(stone, box(0.9, 0.14, 0.26, 9, 0.08), M.place(lx, ly, lz, 0, -ang, 0), 0xc6bcac);
  };
  windowAt(2.05, h0 + 3.2, 1.46);
  windowAt(-1.1, h0 + 4.9, 1.3);
  windowAt(0.35, h0 + 6.15, 1.18);

  // store shed tucked against the landward side
  {
    const sa = -2.4;
    const sx = Math.cos(sa) * 3.0;
    const sz = Math.sin(sa) * 3.0;
    push(stone, box(2.35, 0.6, 2.05, 11, 0.1), M.place(sx, h0 + 0.66, sz, 0, -sa, 0), 0xa79e90);
    push(plasterParts, box(2.1, 1.5, 1.8, 12, 0.05), M.place(sx, h0 + 1.68, sz, 0, -sa, 0), 0xe4dac6);
    push(stone, box(2.5, 0.16, 2.25, 13, 0.05), M.place(sx, h0 + 2.52, sz, 0.13, -sa, 0), 0x5b5e64);
    push(wood, box(0.8, 1.3, 0.1, 14, 0.05), M.place(sx + 0.4, h0 + 1.58, sz + 0.95, 0, -sa, 0), 0x7c5636);
  }

  // dry-stone parapet around the pad
  const rnd = mulberry32(88);
  for (let i = 0; i < 36; i++) {
    const a = 1.2 + (i / 36) * 3.85;
    const rr = 4.15 + rnd() * 0.3;
    const x = P.x + Math.cos(a) * rr;
    const z = P.z + Math.sin(a) * rr;
    const y = ground(x, z);
    if (y < h0 - 1.7) continue;
    push(stone, box(0.66, 0.46, 0.38, 20 + i, 0.16), M.place(x, y + 0.22, z, 0, -a + (rnd() - 0.5) * 0.2, 0), 0x9d9486);
    push(stone, box(0.54, 0.18, 0.46, 60 + i, 0.14), M.place(x, y + 0.52, z, 0, -a, 0), 0xada495);
  }

  addMerged(g, [
    [stone, mats.stone],
    [plasterParts, mats.plaster],
    [wood, mats.wood],
    [iron, mats.iron],
    [copper, mats.copper],
  ]);
  return g;
}

/* --------------------------------------------------------------- cottage */

function buildCottage(mats) {
  const g = new THREE.Group();
  const P = PLACES.cottage;
  const h0 = ground(P.x, P.z);
  let hMin = h0;
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    hMin = Math.min(hMin, ground(P.x + Math.cos(a) * 3.1, P.z + Math.sin(a) * 3.1));
  }
  const face = 0.72; // the door looks down toward the harbour
  g.position.set(P.x, 0, P.z);
  g.rotation.y = -face;

  const stone = [];
  const plasterParts = [];
  const wood = [];
  const slate = [];
  const iron = [];

  const W = 4.3;
  const D = 3.3;
  const wallH = 2.35;
  const y0 = h0 - 0.2;
  const yWall = y0 + 0.85;
  const roofA = 0.58;

  const skirt = Math.max(0, h0 - hMin) + 0.35;
  push(stone, box(W + 0.42, 0.9 + skirt, D + 0.42, 2, 0.12), M.place(0, y0 + 0.45 - skirt / 2, 0), 0x9b9284);
  push(plasterParts, box(W, wallH, D, 3, 0.04), M.place(0, yWall + wallH / 2, 0), 0xeae1ce);
  push(stone, box(W + 0.2, 0.22, D + 0.2, 4, 0.09), M.place(0, yWall + 0.02, 0), 0xb0a798);

  // gable ends and a slate roof; the ridge runs along the length (x)
  const ry = yWall + wallH; // eave height at the wall head
  const rise = (D / 2) * Math.tan(roofA); // gable above the wall head
  const outRise = (D / 2 + 0.44) * Math.tan(roofA); // to the overhanging eave
  const slopeLen = Math.hypot(D / 2 + 0.44, outRise);
  const eaveY = ry + rise - outRise;
  for (const sgn of [-1, 1]) {
    const shape = new THREE.Shape();
    shape.moveTo(-D / 2, 0);
    shape.lineTo(D / 2, 0);
    shape.lineTo(0, rise);
    shape.closePath();
    const tri = new THREE.ExtrudeGeometry(shape, { depth: 0.2, bevelEnabled: false });
    // the extrusion runs along -x after the turn, so land it on the wall face
    const gx = sgn > 0 ? W / 2 + 0.04 : -W / 2 + 0.16;
    push(plasterParts, tri, M.place(gx, ry, 0, 0, Math.PI / 2, 0), 0xe3d9c5);
  }
  for (const sgn of [-1, 1]) {
    const panel = box(W + 0.66, 0.13, slopeLen, 5, 0.015);
    const rot = new THREE.Matrix4().makeRotationX(sgn * roofA); // slope away from the ridge
    const pos = new THREE.Vector3(0, ry + (rise - outRise) / 2 - 0.06, sgn * (D / 2 + 0.44) * 0.5);
    push(slate, panel, new THREE.Matrix4().makeTranslation(pos.x, pos.y, pos.z).multiply(rot), 0x62656b);
    push(wood, box(W + 0.74, 0.18, 0.12, 7, 0.03), M.place(0, eaveY - 0.06, sgn * (D / 2 + 0.44)), 0x77593a);
  }
  push(wood, box(W + 0.8, 0.16, 0.24, 6, 0.03), M.place(0, ry + rise + 0.04, 0), 0x7a5f3e); // ridge board

  // chimney with a clay cowl, tall enough to clear the ridge
  const chimH = wallH + rise + 0.6;
  push(stone, box(0.82, chimH, 0.82, 8, 0.09), M.place(-W * 0.29, yWall + chimH / 2, 0.34), 0xa39a8b);
  push(stone, box(1.02, 0.17, 1.02, 9, 0.06), M.place(-W * 0.29, yWall + chimH + 0.08, 0.34), 0xb5ac9c);
  push(iron, cyl(0.17, 0.2, 0.4, 8), M.place(-W * 0.29, yWall + chimH + 0.36, 0.34), 0x3b352e);

  // door and windows with frames, sills, lintels
  const fz = D / 2;
  push(wood, box(0.95, 1.85, 0.13, 10, 0.04), M.place(0.6, yWall + 0.93, fz + 0.04), 0x7c5636);
  push(stone, box(1.26, 0.16, 0.42, 11, 0.07), M.place(0.6, yWall + 1.94, fz + 0.06), 0xbfb6a6);
  push(stone, box(1.34, 0.15, 0.54, 12, 0.07), M.place(0.6, yWall + 0.06, fz + 0.2), 0xa89f8f);

  const win = (dir, u, y, w, hh) => {
    // dir: 0 = front(+z), 1 = back(-z), 2 = +x side, 3 = -x side
    const nx = dir === 2 ? 1 : dir === 3 ? -1 : 0;
    const nz = dir === 0 ? 1 : dir === 1 ? -1 : 0;
    const px = nx ? nx * (W / 2 + 0.04) : u;
    const pz = nz ? nz * (D / 2 + 0.04) : u;
    const yaw = nx ? Math.PI / 2 : 0;
    push(wood, box(w + 0.2, hh + 0.2, 0.12, 13, 0.03), M.place(px, y, pz, 0, yaw, 0), 0x5f4a32);
    const pane = new THREE.Mesh(box(w, hh, 0.05), mats.glass);
    pane.position.set(px + nx * 0.06, y, pz + nz * 0.06);
    pane.rotation.y = yaw;
    g.add(pane);
    const sx = px + nx * 0.12;
    const sz = pz + nz * 0.12;
    push(stone, box(w + 0.36, 0.12, 0.32, 14, 0.05), M.place(sx, y - hh / 2 - 0.11, sz, 0, yaw, 0), 0xc0b7a7);
    push(stone, box(w + 0.3, 0.14, 0.26, 15, 0.05), M.place(px + nx * 0.06, y + hh / 2 + 0.13, pz + nz * 0.06, 0, yaw, 0), 0xcfc6b6);
  };
  win(0, -1.1, yWall + 1.32, 0.92, 0.86);
  win(2, 0.5, yWall + 1.28, 0.84, 0.8);
  win(3, -0.4, yWall + 1.28, 0.84, 0.8);
  win(1, 0.9, yWall + 1.35, 0.7, 0.7);

  // a low dry-stone garden wall curving below the door
  const rnd = mulberry32(5);
  for (let i = 0; i < 18; i++) {
    const a = -1.2 + (i / 18) * 2.4;
    const rr = 3.5;
    const lx = Math.sin(a) * rr;
    const lz = Math.cos(a) * rr;
    // back to world coordinates for the ground height
    const wx = P.x + lx * Math.cos(-face) - lz * Math.sin(-face);
    const wz = P.z + lx * Math.sin(-face) + lz * Math.cos(-face);
    const wy = ground(wx, wz);
    if (wy < 0.35) continue;
    push(stone, box(0.68, 0.42, 0.36, 30 + i, 0.16), M.place(lx, wy + 0.18, lz, 0, -a, 0), 0x989082);
  }
  push(stone, box(1.5, 0.16, 0.85, 55, 0.09), M.place(0.6, yWall - 0.06, fz + 0.62), 0xa79e8e);

  addMerged(g, [
    [stone, mats.stone],
    [plasterParts, mats.plaster],
    [wood, mats.wood],
    [slate, mats.slate],
    [iron, mats.iron],
  ]);
  return g;
}

/* ------------------------------------------------------------ stone stair */

function buildStair(mats) {
  const g = new THREE.Group();
  const A = { x: PLACES.cottage.x + 1.4, z: PLACES.cottage.z + 2.0 };
  const B = { x: PLACES.lighthouse.x + Math.cos(0.95) * 2.6, z: PLACES.lighthouse.z + Math.sin(0.95) * 2.6 };
  const pts = [];
  for (let i = 0; i <= 7; i++) {
    const t = i / 7;
    const x = lerp(A.x, B.x, t) + Math.sin(t * Math.PI * 1.35) * 2.5;
    const z = lerp(A.z, B.z, t) + Math.cos(t * Math.PI * 0.75) * 1.5;
    pts.push(new THREE.Vector3(x, ground(x, z), z));
  }
  const curve = new THREE.CatmullRomCurve3(pts, false, 'catmullrom', 0.4);
  const steps = [];
  const wood = [];
  const rail = [];
  const rnd = mulberry32(616);
  const tangent = new THREE.Vector3();
  const side = new THREE.Vector3();

  const N = 54;
  for (let i = 0; i <= N; i++) {
    const t = i / N;
    const p = curve.getPointAt(t);
    curve.getTangentAt(t, tangent);
    side.set(tangent.z, 0, -tangent.x).normalize();
    const yaw = Math.atan2(tangent.x, tangent.z);
    // tread set down into the ground so it reads as cut into the hillside
    push(steps, box(1.62, 0.3, 0.4, 100 + i, 0.13), M.place(p.x, ground(p.x, p.z) + 0.06, p.z, 0, yaw, 0), 0xaba296);
    const w = 0.6 + 0.34 * smoothstep(0.08, 0.5, t);
    for (const sgn of [-1, 1]) {
      const sx = p.x + side.x * w * sgn;
      const sz = p.z + side.z * w * sgn;
      push(steps, box(0.52, 0.56, 0.38, 200 + i * 2 + (sgn > 0 ? 1 : 0), 0.18),
        M.place(sx, ground(sx, sz) + 0.16, sz, 0, yaw + (rnd() - 0.5) * 0.25, 0), 0x948b7d);
    }
    if (i % 6 === 0) {
      const px = p.x + side.x * (w + 0.2);
      const pz = p.z + side.z * (w + 0.2);
      push(wood, cyl(0.05, 0.062, 1.05, 6), M.place(px, ground(px, pz) + 0.72, pz, 0, 0, 0), 0x7d6041);
      rail.push([px, ground(px, pz) + 1.14, pz]);
    }
  }
  if (rail.length > 2) push(steps, rope(rail, 0.038, 26), null, 0xc3a97c);

  addMerged(g, [
    [steps, mats.stoneGrey],
    [wood, mats.wood],
  ]);
  return g;
}

/* ------------------------------------------------------------------ jetty */

function buildJetty(mats) {
  const g = new THREE.Group();
  const planks = [];
  const timbers = [];
  const gear = [];
  const ropes = [];
  const rnd = mulberry32(303);

  const A = PLACES.jettyRoot;
  const B = PLACES.jettyHead;
  const curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(A.x, 0, A.z),
    new THREE.Vector3((A.x + B.x) / 2 - 0.8, 0, (A.z + B.z) / 2 - 1.0),
    new THREE.Vector3(B.x, 0, B.z),
  ]);
  const len = curve.getLength();
  // The deck stands above the highest water and ramps gently down from the
  // quay to the head, where the boats come up alongside.
  const rootY = Math.max(ground(A.x, A.z) - 0.12, 1.16);
  const headY = 1.0;
  const deckY = (t) => rootY + (headY - rootY) * clamp(t, 0, 1);
  const W = 1.78;
  const tangent = new THREE.Vector3();
  const nrm = new THREE.Vector3();
  const normalAt = (t, out) => {
    curve.getTangentAt(clamp(t, 0, 1), tangent);
    const l = Math.hypot(tangent.z, tangent.x) || 1;
    out.set(tangent.z / l, 0, -tangent.x / l);
    return out;
  };
  // yaw that lays a board across the jetty (its long axis on the normal)
  const yawAcross = (t) => {
    curve.getTangentAt(clamp(t, 0, 1), tangent);
    return Math.atan2(tangent.x, tangent.z);
  };
  const pileBed = (x, z) => Math.min(ground(x, z), -0.3);

  // deck planks
  const nPlank = Math.round(len / 0.3);
  for (let i = 0; i <= nPlank; i++) {
    const t = i / nPlank;
    const p = curve.getPointAt(t);
    push(planks, box(W, 0.1, 0.27, 300 + i, 0.045), M.place(p.x, deckY(t) - 0.05, p.z, 0, yawAcross(t), 0),
      i % 3 === 0 ? 0xa6855c : 0xb08f63);
  }
  // stringers under the deck, kerb boards along the edges
  for (const lat of [-0.6, 0.6]) {
    const pts = [];
    for (let i = 0; i <= 18; i++) {
      const t = i / 18;
      const p = curve.getPointAt(t);
      normalAt(t, nrm);
      pts.push([p.x + nrm.x * lat, deckY(t) - 0.2, p.z + nrm.z * lat]);
    }
    push(timbers, rope(pts, 0.115, 22), null, 0x6d5334);
  }
  for (const lat of [-0.85, 0.85]) {
    const pts = [];
    for (let i = 0; i <= 18; i++) {
      const t = i / 18;
      const p = curve.getPointAt(t);
      normalAt(t, nrm);
      pts.push([p.x + nrm.x * lat, deckY(t) + 0.035, p.z + nrm.z * lat]);
    }
    push(timbers, rope(pts, 0.072, 12), null, 0x8b6a45);
  }

  // pilings with cross ties and raked braces
  const nPil = Math.max(2, Math.round(len / 1.15));
  for (let i = 0; i <= nPil; i++) {
    const t = clamp(i / nPil, 0, 1);
    const p = curve.getPointAt(t);
    normalAt(t, nrm);
    const top = deckY(t) - 0.1;
    const cols = [];
    for (const lat of [-0.6, 0.6]) {
      const x = p.x + nrm.x * lat;
      const z = p.z + nrm.z * lat;
      const bed = pileBed(x, z);
      const hh = top - bed;
      cols.push([x, z, bed]);
      push(timbers, cyl(0.12, 0.15, hh, 9), M.place(x, bed + hh / 2, z, (rnd() - 0.5) * 0.04, 0, (rnd() - 0.5) * 0.04), 0x6a4f31);
    }
    const dy = top - 0.3;
    push(timbers, rope([[cols[0][0], dy, cols[0][1]], [cols[1][0], dy, cols[1][1]]], 0.075, 6), null, 0x5f4629);
    if (i < nPil) {
      const t2 = clamp((i + 1) / nPil, 0, 1);
      const p2 = curve.getPointAt(t2);
      for (let k = 0; k < 2; k++) {
        const lat = k === 0 ? -0.6 : 0.6;
        const x0 = p.x + nrm.x * lat;
        const z0 = p.z + nrm.z * lat;
        normalAt(t2, nrm);
        const x1 = p2.x + nrm.x * lat;
        const z1 = p2.z + nrm.z * lat;
        push(timbers, rope([[x0, dy, z0], [x1, pileBed(x1, z1) + 0.3, z1]], 0.06, 5), null, 0x5a4227);
      }
    }
  }

  // the head: a wider platform square on the last stretch of the approach
  const hb = curve.getPointAt(1);
  curve.getTangentAt(1, tangent);
  const tl = Math.hypot(tangent.x, tangent.z) || 1;
  const TU = { x: tangent.x / tl, z: tangent.z / tl };
  const NV = { x: TU.z, z: -TU.x };
  const hYaw = Math.atan2(TU.x, TU.z);
  const hc = { x: hb.x + TU.x * 1.2, z: hb.z + TU.z * 1.2 };
  const HY = headY;
  const hpoint = (u, v) => [hc.x + TU.x * u + NV.x * v, hc.z + TU.z * u + NV.z * v];
  for (let i = 0; i <= 12; i++) {
    const u = (i / 12 - 0.5) * 2.8;
    const [x, z] = hpoint(u, 0);
    push(planks, box(3.3, 0.1, 0.28, 500 + i, 0.045), M.place(x, HY - 0.05, z, 0, hYaw, 0), 0xb08f63);
  }
  for (const u of [-1.4, -0.3, 0.9, 1.4]) {
    for (const v of [-1.5, 1.5]) {
      const [x, z] = hpoint(u, v);
      const bed = pileBed(x, z);
      const post = v * (u === 1.4 || u === -1.4 ? 0.62 : 0.0); // corner piles carry on up as guard posts
      const hh = HY + post - bed;
      push(timbers, cyl(0.145, 0.17, hh, 9), M.place(x, bed + hh / 2, z), 0x6a4f31);
      if (post > 0) push(timbers, cyl(0.17, 0.15, 0.12, 8), M.place(x, HY + post, z), 0x8a6b45);
    }
  }
  for (const v of [-1.5, 1.5]) {
    const [ax, az] = hpoint(-1.4, v);
    const [bx, bz] = hpoint(1.4, v);
    push(timbers, rope([[ax, HY - 0.34, az], [bx, HY - 0.34, bz]], 0.07, 6), null, 0x5f4629);
  }
  // bollards on the seaward edge, mooring lines led to them
  const moor = [];
  for (const [u, v] of [[-0.9, 1.1], [0.75, 1.1], [0.0, -1.1]]) {
    const [x, z] = hpoint(u, v);
    moor.push([x, z]);
    push(gear, cyl(0.125, 0.15, 0.5, 9), M.place(x, HY + 0.25, z), 0x7d6041);
    push(gear, cyl(0.17, 0.145, 0.13, 9), M.place(x, HY + 0.55, z), 0x8a6b45);
  }

  // ladder down to the water on the harbour side
  {
    const t = 0.74;
    const p = curve.getPointAt(t);
    normalAt(t, nrm);
    const x = p.x + nrm.x * 1.0;
    const z = p.z + nrm.z * 1.0;
    for (const s of [-0.26, 0.26]) {
      push(timbers, rope([[x + nrm.z * s, HY - 0.2, z - nrm.x * s], [x + nrm.z * s, -0.8, z - nrm.x * s]], 0.05, 4), null, 0x6d5334);
    }
    for (let r = 0; r < 6; r++) {
      push(timbers, box(0.6, 0.06, 0.06, 610 + r, 0.02), M.place(x, HY - 0.4 - r * 0.3, z, 0, Math.atan2(nrm.x, nrm.z), 0), 0x7d6041);
    }
  }

  /* --------------------------- gear on the quay and the jetty head ------- */
  const crates = [
    [2.9, -5.5, 0.62],
    [2.35, -6.1, 0.5],
    [3.5, -6.4, 0.44],
    [5.7, -5.1, 0.55],
  ];
  crates.forEach((s, i) => {
    const y = ground(s[0], s[1]);
    if (y < 0.25) return;
    push(gear, box(s[2], s[2] * 0.92, s[2], 700 + i, 0.08), M.place(s[0], y + s[2] * 0.46, s[1], 0, rnd() * 1.2, 0), 0x9c7c52);
    push(gear, box(s[2] * 1.05, 0.06, s[2] * 1.05, 720 + i, 0.04), M.place(s[0], y + s[2] * 0.93, s[1], 0, rnd() * 1.2, 0), 0x8a6b45);
  });
  for (const s of [[4.8, -6.3], [6.2, -5.5]]) {
    const y = ground(s[0], s[1]);
    if (y < 0.3) continue;
    push(gear, barrelGeo(0.35, 0.86, 10), M.place(s[0], y + 0.44, s[1], 0, rnd(), 0), 0x7d5f3c);
  }
  const coils = [
    { x: 4.1, z: -5.1, y: ground(4.1, -5.1) },
    { x: 2.7, z: -6.9, y: ground(2.7, -6.9) },
  ];
  for (const [u, v] of [[0.5, 0.6], [-1.0, -0.5]]) {
    const [x, z] = hpoint(u, v);
    coils.push({ x, z, y: HY });
  }
  for (const s of coils) {
    if (s.y < 0.1) continue;
    for (let k = 0; k < 3; k++) {
      push(ropes, new THREE.TorusGeometry(0.3 - k * 0.05, 0.048, 5, 14), M.place(s.x + k * 0.02, s.y + 0.06 + k * 0.095, s.z + k * 0.015, Math.PI / 2, 0, 0), 0xc3a97c);
    }
  }
  // open crate of fish on the jetty head, beside the bollards
  {
    const [fx, fz] = hpoint(-0.55, -0.8);
    const y = HY;
    push(gear, box(0.92, 0.3, 0.62, 801, 0.05), M.place(fx, y + 0.15, fz, 0, 0.3, 0), 0x9c7c52);
    for (let i = 0; i < 10; i++) {
      const f = new THREE.SphereGeometry(0.13, 7, 5);
      f.scale(1.75, 0.55, 0.4);
      push(gear, f, M.place(fx + (rnd() - 0.5) * 0.62, y + 0.35 + rnd() * 0.07, fz + (rnd() - 0.5) * 0.38, 0, rnd() * 3.1, (rnd() - 0.5) * 0.3), 0xa9b6bd);
    }
  }
  // mooring lines led from the bollards to each boat's bow
  PLACES.boats.forEach((b, i) => {
    const [bx, bz] = moor[i === 0 ? 0 : 2];
    const from = [bx, HY + 0.5, bz];
    const to = [b.x - Math.cos(b.a) * 1.6, 0.62, b.z - Math.sin(b.a) * 1.6];
    const mx = (from[0] + to[0]) / 2;
    const mz = (from[2] + to[2]) / 2;
    push(ropes, rope([from, [mx, Math.min(from[1], to[1]) - 0.5, mz], to], 0.033, 20), null, 0xc3a97c);
  });

  // drying rack with a hanging net, and a net piled on the quay
  {
    const rx = 6.4;
    const rz = -6.5;
    const y0 = ground(rx, rz);
    if (y0 > 0.2) {
      for (const s of [-1.35, 1.35]) push(timbers, cyl(0.08, 0.1, 2.35, 7), M.place(rx + s, y0 + 1.18, rz, 0, 0, s * 0.05), 0x6d5334);
      push(timbers, box(2.9, 0.1, 0.1, 805, 0.03), M.place(rx, y0 + 2.3, rz, 0, 0, 0), 0x6d5334);
      const net = new THREE.PlaneGeometry(2.5, 1.55, 12, 7);
      const np = net.getAttribute('position');
      for (let i = 0; i < np.count; i++) {
        const x = np.getX(i);
        const yy = np.getY(i);
        np.setXYZ(i, x, yy - 0.3 * Math.cos((x / 2.5) * Math.PI * 0.9), Math.sin(x * 2.1) * 0.09 + noise2(x * 3, yy * 3, 3) * 0.14);
      }
      net.computeVertexNormals();
      const netMesh = new THREE.Mesh(net, mats.net);
      netMesh.position.set(rx, y0 + 1.5, rz);
      netMesh.rotation.y = 0.4;
      netMesh.castShadow = true;
      g.add(netMesh);
    }
    const pile = new THREE.PlaneGeometry(1.25, 0.95, 9, 7);
    const pp = pile.getAttribute('position');
    for (let i = 0; i < pp.count; i++) {
      const x = pp.getX(i);
      const y = pp.getY(i);
      pp.setXYZ(i, x, y, 0.15 * Math.sin(x * 5.5) + 0.12 * Math.cos(y * 6.5));
    }
    pile.computeVertexNormals();
    const px = 5.2;
    const pz = -5.9;
    const netPile = new THREE.Mesh(pile, mats.net);
    netPile.position.set(px, Math.max(ground(px, pz), 0.1) + 0.2, pz);
    netPile.rotation.set(-Math.PI / 2 + 0.22, 0, 0.6);
    netPile.castShadow = true;
    g.add(netPile);
  }

  // lantern post at the outboard corner of the head
  {
    const [x, z] = hpoint(1.25, -1.28);
    push(timbers, cyl(0.075, 0.1, 2.3, 7), M.place(x, HY + 1.15, z), 0x5f4629);
    push(timbers, box(0.38, 0.08, 0.38, 810, 0.04), M.place(x, HY + 2.58, z), 0x3a3733);
    const lamp = new THREE.Mesh(box(0.27, 0.36, 0.27, 1, 0.04), mats.glassSoft);
    lamp.position.set(x, HY + 2.34, z);
    g.add(lamp);
    const pl = new THREE.PointLight(T.WARM_LIGHT, 2.4, 9, 1.8);
    pl.position.set(x, HY + 2.28, z);
    g.add(pl);
  }

  addMerged(g, [
    [planks, mats.wood],
    [timbers, mats.woodDark],
    [gear, mats.wood],
    [ropes, mats.rope],
  ]);
  return { group: g, deck: HY, head: hc };
}

/* ------------------------------------------------------------ shore sheds */

function buildSheds(mats) {
  const g = new THREE.Group();
  const stone = [];
  const wood = [];
  const slate = [];
  const spots = [
    { x: 3.3, z: -7.1, a: 0.32, w: 2.7, d: 2.1, h: 1.55 },
    { x: 5.6, z: -6.9, a: -0.4, w: 2.0, d: 1.7, h: 1.35 },
  ];
  for (const s of spots) {
    const h0 = ground(s.x, s.z);
    if (h0 < 0.35) continue;
    push(stone, box(s.w + 0.24, 0.55, s.d + 0.24, 1, 0.11), M.place(s.x, h0 + 0.27, s.z, 0, -s.a, 0), 0x9b9284);
    push(stone, box(s.w, s.h, s.d, 2, 0.08), M.place(s.x, h0 + 0.55 + s.h / 2, s.z, 0, -s.a, 0), 0xa89e8e);
    push(wood, box(0.72, 1.2, 0.1, 3, 0.05), M.place(s.x + Math.cos(s.a) * 0.0, h0 + 0.55 + 0.6, s.z + Math.sin(s.a) * (s.d / 2 + 0.06), 0, -s.a + Math.PI / 2, 0), 0x7c5636);
    push(slate, box(s.w + 0.5, 0.14, s.d + 0.5, 4, 0.03), M.place(s.x, h0 + 0.55 + s.h + 0.07, s.z, 0.1, -s.a, 0), 0x53565c);
  }
  const rnd = mulberry32(77);
  for (let i = 0; i < 24; i++) {
    const x = 4.0 + (i % 6) * 0.27;
    const z = -7.5 + Math.floor((i % 12) / 6) * 0.26;
    const y = ground(x, z);
    if (y < 0.5) continue;
    push(wood, cyl(0.09, 0.09, 0.95, 6), M.place(x, y + 0.1 + Math.floor(i / 12) * 0.18, z, Math.PI / 2, 0.4, 0), 0x8a6b45);
  }
  addMerged(g, [
    [stone, mats.stone],
    [wood, mats.wood],
    [slate, mats.slate],
  ]);
  return g;
}

/* ------------------------------------------------------------------ boats */

/**
 * Parametric wooden hull: u along the keel, v around the section.
 * Vertex colours carry the paint (topsides / below the waterline / interior).
 */
function hullGeometry({ length, beam, depth, paint, paintBelow }) {
  const NU = 26;
  const NV = 14;
  const pos = [];
  const uvs = [];
  const col = [];
  const index = [];
  const cPaint = new THREE.Color(paint);
  const cBelow = new THREE.Color(paintBelow);

  for (let iu = 0; iu <= NU; iu++) {
    const u = iu / NU;
    const along = (u - 0.5) * length;
    const taper = Math.max(Math.pow(Math.sin(Math.PI * Math.pow(u, 0.8)), 0.6), 0.03);
    const w = beam * 0.5 * taper;
    const d = depth * Math.max(taper, 0.07);
    const sheer = 0.3 * Math.pow(u - 0.5, 2) * 1.9;
    for (let iv = 0; iv <= NV; iv++) {
      const t = (iv / NV - 0.5) * Math.PI;
      const ct = Math.pow(Math.cos(t), 1.3);
      const x = Math.sin(t) * w;
      const y = -d * ct + (1 - ct) * (sheer + 0.16);
      pos.push(along, y, x);
      uvs.push(u * 3.2, (iv / NV) * 1.6);
      const c = y < -depth * 0.22 ? cBelow : cPaint;
      col.push(c.r, c.g, c.b);
    }
  }
  for (let iu = 0; iu < NU; iu++) {
    for (let iv = 0; iv < NV; iv++) {
      const a = iu * (NV + 1) + iv;
      const b = a + NV + 1;
      index.push(a, b, a + 1, a + 1, b, b + 1);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  g.setIndex(index);
  g.computeVertexNormals();
  return g;
}

function buildBoat(mats, spec) {
  const g = new THREE.Group();
  const hull = [];
  const trim = [];
  const { length, beam, depth } = spec;

  push(hull, hullGeometry(spec), null);
  const sheer = 0.3 * 0.25 * 1.9 + 0.16;
  push(trim, box(length * 0.97, 0.08, beam * 0.055, 1, 0.01), M.place(0, sheer + 0.03, 0), 0xe0d3ba);
  for (const tu of [0.3, 0.52, 0.74]) {
    const x = (tu - 0.5) * length;
    const taper = Math.max(Math.pow(Math.sin(Math.PI * Math.pow(tu, 0.8)), 0.6), 0.05);
    push(trim, box(0.3, 0.08, beam * 0.82 * taper, 2, 0.02), M.place(x, -0.02, 0), 0xb08a58);
  }
  push(trim, box(0.1, depth * 0.85, beam * 0.6, 3, 0.02), M.place(length / 2 - 0.06, -depth * 0.25, 0), 0xa07c4c);
  push(trim, box(length * 0.55, 0.07, beam * 0.46, 4, 0.02), M.place(-length * 0.04, -depth * 0.6, 0), 0xa07c4c);
  for (const s of [-1, 1]) {
    push(trim, box(2.2, 0.055, 0.085, 5, 0.015), M.place(-0.3, 0.22, s * beam * 0.4, 0.06, 0.2 * s, s * 0.09), 0xc7b184);
    push(trim, cyl(0.028, 0.028, 0.28, 6), M.place(0.36, 0.26, s * beam * 0.34, Math.PI / 2, 0, 0), 0x4a4640);
  }
  if (spec.cabin) {
    push(trim, box(1.5, 0.85, beam * 0.62, 6, 0.02), M.place(-length * 0.1, 0.5, 0), 0xe0d6c2);
    push(trim, box(1.62, 0.1, beam * 0.7, 7, 0.02), M.place(-length * 0.1, 0.96, 0), 0x6d5334);
  }
  if (spec.mast) {
    push(trim, cyl(0.055, 0.075, spec.mast, 8), M.place(length * 0.12, spec.mast / 2 - 0.15, 0, 0, 0, 0.025), 0xa07c4c);
    push(trim, cyl(0.038, 0.038, 1.5, 6), M.place(length * 0.12 - 0.45, spec.mast * 0.68, 0, 0, 0, Math.PI / 2 - 0.2), 0xa07c4c);
    push(trim, new THREE.SphereGeometry(0.16, 8, 6), M.place(length * 0.12 - 1.05, 0.18, beam * 0.26), 0xcf5f3f);
    push(trim, rope(
      [
        [length * 0.12, spec.mast * 0.88, 0],
        [length * 0.12 - 0.35, spec.mast * 0.4, 0.12],
        [length * 0.12 - 1.0, 0.24, beam * 0.24],
      ],
      0.02,
      12
    ), null, 0xc3a97c);
  }
  push(trim, new THREE.TorusGeometry(0.2, 0.055, 6, 12), M.place(-length * 0.3, -0.02, beam * 0.32, Math.PI / 2, 0, 0), 0x2d2b28);
  push(trim, box(0.44, 0.26, 0.32, 9, 0.04), M.place(length * 0.28, 0.18, -beam * 0.14), 0x9c7c52);

  const hullMesh = new THREE.Mesh(mergeGeoms(hull), mats.hull);
  hullMesh.castShadow = true;
  hullMesh.receiveShadow = true;
  g.add(hullMesh);
  const trimMesh = new THREE.Mesh(mergeGeoms(trim), mats.wood);
  trimMesh.castShadow = true;
  trimMesh.receiveShadow = true;
  g.add(trimMesh);
  return g;
}

/* ---------------------------------------------------------------- assemble */

export function createStructures(mats) {
  const group = new THREE.Group();
  group.add(buildLighthouse(mats));
  group.add(buildCottage(mats));
  group.add(buildStair(mats));
  group.add(buildJetty(mats).group);
  group.add(buildSheds(mats));

  const specs = [
    { seed: 7, length: 4.3, beam: 1.62, depth: 0.68, paint: 0x54aeb4, paintBelow: 0xb2493a, mast: 0 },
    { seed: 23, length: 5.4, beam: 1.95, depth: 0.8, paint: 0xf2e8d1, paintBelow: 0x3d7391, mast: 3.5, cabin: true },
  ];
  const boats = specs.map((spec, i) => {
    const b = PLACES.boats[i];
    const obj = buildBoat(mats, spec);
    obj.position.set(b.x, 0, b.z);
    group.add(obj);
    return { obj, x: b.x, z: b.z, yaw: b.a };
  });

  return {
    group,
    boats,
    /** ride the boats on the same water the shader draws */
    update(t, sampler) {
      for (const b of boats) {
        const s = sampler.sample(b.x, b.z, t);
        const swing = 0.09 * Math.sin(t * 0.33 + b.x * 1.7) + 0.05 * Math.sin(t * 0.16 + b.z);
        b.obj.position.set(s.x, s.y, s.z);
        const pitch = Math.asin(clamp(-s.nz, -0.6, 0.6)) * 0.8;
        const roll = Math.asin(clamp(s.nx, -0.6, 0.6)) * 0.8;
        b.obj.rotation.set(pitch, b.yaw + swing, roll, 'YXZ');
      }
    },
  };
}
