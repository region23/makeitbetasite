// Built structures: the 1975 lighthouse-monument, the 1911 lighthouse turned Chapel of St. Nicholas,
// the memorial slab, the steel bridge over the strait, the pier with its boats, the dolphinarium pens
// and a few village buildings. Real-world sizes in metres.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import * as TX from './textures.js';
import { SITES, HOUSES, HANGAR, RESTAURANT, pierPoint } from './world.js';

const std = (p) => new THREE.MeshStandardMaterial({ roughness: 0.85, metalness: 0, ...p });
function mesh(geo, mat, cast = true, receive = true) {
  const m = new THREE.Mesh(geo, mat);
  m.castShadow = cast; m.receiveShadow = receive;
  return m;
}
const at = (g, x, y, z) => { g.translate(x, y, z); return g; };
const box = (w, h, d, x = 0, y = 0, z = 0) => at(new THREE.BoxGeometry(w, h, d), x, y, z);
const cyl = (rt, rb, h, seg, x = 0, y = 0, z = 0, open = false) => at(new THREE.CylinderGeometry(rt, rb, h, seg, 1, open), x, y, z);

// A thin tube between two points (for rails, wires and lattice members)
function strut(a, b, r, seg = 5) {
  const d = new THREE.Vector3().subVectors(b, a);
  const g = new THREE.CylinderGeometry(r, r, d.length(), seg, 1, true);
  const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.clone().normalize());
  g.applyQuaternion(q);
  const m = a.clone().add(b).multiplyScalar(0.5);
  g.translate(m.x, m.y, m.z);
  return g;
}
function catenary(a, b, sag, n = 10) {
  const pts = [];
  for (let i = 0; i <= n; i++) {
    const t = i / n;
    const p = a.clone().lerp(b, t);
    p.y -= sag * 4 * t * (1 - t);
    pts.push(p);
  }
  return new THREE.CatmullRomCurve3(pts);
}

export function buildStructures(ctx) {
  const { heightAt, scene } = ctx;
  const out = { radar: null, lanternLight: null, glow: null, boats: [], buoys: [], ropes: [] };

  // ---------------------------------------------------------------- shared materials
  const whiteTex = TX.plasterTexture(3, '#f1efe8');
  const whiteMat = std({ map: whiteTex, roughness: 0.9 });
  const concTex = TX.concreteTexture(7, '#c4c1b8');
  const concMat = std({ map: concTex, roughness: 0.95 });
  const darkMetal = std({ color: 0x2b2d2e, roughness: 0.6, metalness: 0.4 });
  const galv = std({ color: 0xb9bec0, roughness: 0.45, metalness: 0.75 });
  const red = std({ color: 0xb8231c, roughness: 0.55, metalness: 0.2 });
  const gold = std({ color: 0xd9b45a, roughness: 0.3, metalness: 0.85 });
  const blackChain = std({ color: 0x1d1d1d, roughness: 0.5, metalness: 0.5 });

  // ---------------------------------------------------------------- 1975 lighthouse-monument
  {
    const g = new THREE.Group();
    const T = SITES.tower;
    g.position.set(T.x, heightAt(T.x, T.z) - 0.05, T.z);
    g.rotation.y = Math.atan2(6, 2.5); // door toward the footpath
    const oct = Math.PI / 8;
    const p1 = cyl(6.0, 6.3, 0.55, 8, 0, 0.17, 0); p1.rotateY(oct);
    const p2 = cyl(4.7, 4.9, 0.45, 8, 0, 0.66, 0); p2.rotateY(oct);
    const steps = mergeGeometries([box(2.2, 0.2, 0.5, 0, 0.55, 5.0), box(2.2, 0.2, 0.5, 0, 0.75, 4.55)]);
    const plinth = cyl(2.35, 3.6, 2.4, 8, 0, 2.08, 0); plinth.rotateY(oct);
    g.add(mesh(mergeGeometries([p1, p2, steps, plinth]), whiteMat));
    // iron door and memorial plaque on the plinth face
    const slope = Math.atan((3.6 - 2.35) * Math.cos(oct) / 2.4);
    const door = mesh(new THREE.BoxGeometry(0.85, 1.45, 0.06), darkMetal);
    const rAt = (y) => (3.6 + (2.35 - 3.6) * (y / 2.4)) * Math.cos(oct);
    door.position.set(0, 0.88 + 0.8, rAt(0.8) + 0.02);
    door.rotation.x = -slope;
    g.add(door);
    const plq = mesh(new THREE.BoxGeometry(0.75, 0.5, 0.03), std({ map: TX.plaqueTexture(31, 8), roughness: 0.25, metalness: 0.3 }));
    plq.position.set(1.25, 0.88 + 1.6, rAt(1.6) + 0.02);
    plq.rotation.x = -slope;
    g.add(plq);
    // white base band
    g.add(mesh(cyl(1.7, 1.74, 1.6, 48, 0, 4.05, 0), whiteMat));
    // cream silicate-brick shaft
    const bt = TX.brickTexture();
    bt.repeat.set(4.8, 5.3);
    const brickMat = std({ map: bt, bumpMap: bt, bumpScale: 1.2, roughness: 0.92 });
    g.add(mesh(cyl(1.44, 1.62, 10.6, 64, 0, 10.15, 0, true), brickMat));
    // sculpted relief band: faces of sailors, caps, helmets, anchors, waves
    {
      const rc = TX.reliefCanvas();
      const id = rc.getContext('2d').getImageData(0, 0, rc.width, rc.height).data;
      const hgt = 1.75, r0 = 1.6;
      const geo = new THREE.CylinderGeometry(r0, r0, hgt, 220, 30, true);
      const pos = geo.attributes.position, uv = geo.attributes.uv;
      for (let i = 0; i < pos.count; i++) {
        const u = uv.getX(i), v = uv.getY(i);
        const px = Math.min(rc.width - 1, Math.floor(u * rc.width)), py = Math.min(rc.height - 1, Math.floor((1 - v) * rc.height));
        const val = id[(py * rc.width + px) * 4] / 255;
        const edge = Math.min(1, Math.min(v, 1 - v) * 10);
        const r = r0 + (0.12 + Math.max(0, val - 0.27) * 0.42) * edge;
        const x = pos.getX(i), z = pos.getZ(i), l = Math.hypot(x, z);
        pos.setXYZ(i, (x / l) * r, pos.getY(i), (z / l) * r);
      }
      geo.computeVertexNormals();
      geo.translate(0, 7.85, 0);
      const rt = new THREE.CanvasTexture(rc);
      const ct = new THREE.CanvasTexture(TX.reliefColorCanvas(rc));
      ct.colorSpace = THREE.SRGBColorSpace;
      const reliefMat = std({ map: ct, bumpMap: rt, bumpScale: 0.8, roughness: 0.93 });
      g.add(mesh(geo, reliefMat));
      const lips = mergeGeometries([cyl(1.86, 1.9, 0.2, 64, 0, 6.92, 0), cyl(1.84, 1.8, 0.16, 64, 0, 8.78, 0)]);
      g.add(mesh(lips, concMat));
    }
    // crenellated cap with dentils, roof, railing
    const capParts = [cyl(1.63, 1.45, 0.32, 64, 0, 15.6, 0), cyl(1.64, 1.64, 0.85, 64, 0, 16.17, 0), cyl(1.58, 1.58, 0.08, 48, 0, 16.62, 0)];
    for (let i = 0; i < 18; i++) {
      const a = (i / 18) * Math.PI * 2;
      const b = box(0.38, 0.32, 0.12, 0, 15.95, 1.68);
      b.rotateY(a);
      capParts.push(b);
    }
    g.add(mesh(mergeGeometries(capParts), concMat));
    const rail = [];
    for (let i = 0; i < 14; i++) {
      const a = (i / 14) * Math.PI * 2;
      rail.push(cyl(0.025, 0.025, 1.0, 5, Math.cos(a) * 1.5, 17.15, Math.sin(a) * 1.5));
    }
    for (const y of [17.62, 17.12]) { const tor = new THREE.TorusGeometry(1.5, 0.028, 5, 56); tor.rotateX(Math.PI / 2); tor.translate(0, y, 0); rail.push(tor); }
    g.add(mesh(mergeGeometries(rail), galv));
    // small modern lantern with warm glow
    const lx = -0.35, lz = 0.25;
    g.add(mesh(mergeGeometries([cyl(0.32, 0.36, 0.3, 24, lx, 16.82, lz), cyl(0.06, 0.34, 0.2, 24, lx, 17.48, lz)]), red));
    const glass = mesh(cyl(0.28, 0.28, 0.42, 24, lx, 17.18, lz), new THREE.MeshStandardMaterial({
      color: 0xfff1d6, emissive: 0xffb45e, emissiveIntensity: 2.4, roughness: 0.1, metalness: 0,
    }), false, false);
    g.add(glass);
    const glow = new THREE.Sprite(new THREE.SpriteMaterial({
      map: TX.glowTexture(), color: 0xffc27a, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity: 0.85,
    }));
    glow.scale.set(2.4, 2.4, 1);
    out.glowLocal = new THREE.Vector3(lx, 17.2, lz);
    out.glow = glow;
    // red lattice mast with rotating radar
    const mx = 0.55, mz = -0.35, mh = 2.3, hw = 0.21;
    const lat = [];
    const corners = [[-hw, -hw], [hw, -hw], [hw, hw], [-hw, hw]];
    for (const [cx, cz] of corners) lat.push(strut(new THREE.Vector3(mx + cx, 16.66, mz + cz), new THREE.Vector3(mx + cx * 0.7, 16.66 + mh, mz + cz * 0.7), 0.03));
    for (let lv = 0; lv < 4; lv++) {
      const y0 = 16.66 + (lv / 4) * mh, y1 = 16.66 + ((lv + 1) / 4) * mh;
      for (let c = 0; c < 4; c++) {
        const [ax, az] = corners[c], [bx, bz] = corners[(c + 1) % 4];
        const s0 = 1 - 0.3 * (lv / 4), s1 = 1 - 0.3 * ((lv + 1) / 4);
        lat.push(strut(new THREE.Vector3(mx + ax * s0, y0, mz + az * s0), new THREE.Vector3(mx + bx * s1, y1, mz + bz * s1), 0.014, 4));
      }
    }
    lat.push(box(0.6, 0.05, 0.6, mx, 16.66 + mh, mz));
    g.add(mesh(mergeGeometries(lat), red));
    const radar = new THREE.Group();
    radar.position.set(mx, 16.66 + mh + 0.18, mz);
    radar.add(mesh(box(1.5, 0.11, 0.14), std({ color: 0xf2f2ef, roughness: 0.5 })));
    radar.add(mesh(cyl(0.08, 0.1, 0.25, 10, 0, -0.12, 0), darkMetal));
    g.add(radar);
    out.radar = radar;
    g.add(mesh(mergeGeometries([cyl(0.012, 0.012, 1.4, 4, mx + 0.15, 19.5, mz), cyl(0.012, 0.012, 1.0, 4, mx - 0.18, 19.3, mz + 0.1)]), galv));
    scene.add(g);
    out.tower = g;

    // chain fence on black bollards around the monument
    const posts = [], chains = [];
    const n = 20, R = 7.6;
    const ptsW = [];
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2;
      const x = T.x + Math.cos(a) * R, z = T.z + Math.sin(a) * R;
      const y = heightAt(x, z);
      ptsW.push(new THREE.Vector3(x, y + 0.66, z));
      posts.push(cyl(0.09, 0.1, 0.8, 8, x, y + 0.32, z));
    }
    for (let i = 0; i < n; i++) {
      if (i === 3) continue; // gap toward the footpath
      const a = ptsW[i], b = ptsW[(i + 1) % n];
      chains.push(new THREE.TubeGeometry(catenary(a, b, 0.28, 8), 10, 0.035, 4, false));
    }
    scene.add(mesh(mergeGeometries(posts), blackChain));
    scene.add(mesh(mergeGeometries(chains), blackChain, true, false));
  }

  // ---------------------------------------------------------------- 1911 lighthouse, now the Chapel of St. Nicholas
  {
    const C = SITES.chapel;
    const g = new THREE.Group();
    g.position.set(C.x, heightAt(C.x, C.z) - 0.05, C.z);
    g.rotation.y = Math.atan2(20, -12);
    const oct = Math.PI / 8;
    const chapelTex = TX.plasterTexture(41, '#f0ede6');
    chapelTex.repeat.set(2, 1);
    const chapelWhite = std({ map: chapelTex, roughness: 0.92 });
    const foot = cyl(2.3, 2.45, 0.22, 8, 0, 0.06, 0); foot.rotateY(oct);
    g.add(mesh(foot, concMat));
    const base = cyl(1.45, 1.5, 2.5, 8, 0, 1.42, 0); base.rotateY(oct);
    g.add(mesh(base, chapelWhite));
    const fr = 1.45 * Math.cos(oct);
    const door = mesh(box(0.74, 1.62, 0.08, 0, 0.98, fr - 0.01), std({ color: 0x241d18, roughness: 0.8 }));
    g.add(door);
    const icon = mesh(box(0.18, 0.24, 0.02, 0.12, 1.25, fr + 0.03), std({ color: 0xc9a14d, roughness: 0.4, metalness: 0.6 }));
    g.add(icon);
    const plq = mesh(box(0.56, 0.44, 0.03, 0, 2.18, fr + 0.02), std({ map: TX.plaqueTexture(47, 9), color: 0x9a6a45, roughness: 0.4, metalness: 0.4 }));
    g.add(plq);
    const slab = cyl(2.05, 2.05, 0.26, 8, 0, 2.8, 0); slab.rotateY(oct);
    g.add(mesh(slab, concMat));
    const bt = TX.bluePaintTexture();
    bt.repeat.set(1, 1);
    const blue = std({ map: bt, roughness: 0.55, metalness: 0.35 });
    g.add(mesh(cyl(1.08, 1.08, 1.45, 40, 0, 3.66, 0), blue));
    const louvre = mesh(box(0.5, 1.0, 0.06), std({ color: 0x2f62b5, roughness: 0.5, metalness: 0.3 }));
    louvre.position.set(-0.95, 3.6, -0.45); louvre.rotation.y = -1.15;
    g.add(louvre);
    g.add(mesh(cyl(0.13, 1.22, 0.52, 40, 0, 4.64, 0), gold));
    g.add(mesh(mergeGeometries([cyl(0.13, 0.13, 0.26, 16, 0, 5.02, 0), cyl(0.18, 0.18, 0.05, 16, 0, 5.16, 0)]), gold));
    const onion = new THREE.LatheGeometry([
      [0.0, 0], [0.12, 0.02], [0.2, 0.1], [0.23, 0.2], [0.2, 0.31], [0.13, 0.42], [0.06, 0.5], [0.025, 0.58], [0.0, 0.64],
    ].map(([r, y]) => new THREE.Vector2(r, y)), 24);
    onion.translate(0, 5.18, 0);
    g.add(mesh(onion, gold));
    // Orthodox cross
    const cr = [box(0.04, 0.95, 0.04, 0, 6.25, 0), box(0.24, 0.035, 0.035, 0, 6.6, 0), box(0.44, 0.04, 0.04, 0, 6.42, 0)];
    const slant = box(0.3, 0.035, 0.035); slant.rotateZ(0.38); slant.translate(0, 6.06, 0);
    cr.push(slant);
    g.add(mesh(mergeGeometries(cr), gold));
    scene.add(g);
    out.chapel = g;
  }

  // ---------------------------------------------------------------- memorial granite slab with names
  {
    const S = SITES.slab;
    const g = new THREE.Group();
    g.position.set(S.x, heightAt(S.x, S.z), S.z);
    g.rotation.y = 0.9;
    const gr = TX.graniteTexture();
    g.add(mesh(box(3.4, 0.45, 2.0, 0, 0.18, 0), std({ map: gr, roughness: 0.45, metalness: 0.05 })));
    const pm = std({ map: TX.plaqueTexture(53, 16), roughness: 0.18, metalness: 0.2 });
    for (const x of [-0.8, 0.8]) {
      const p = mesh(box(1.4, 0.03, 1.55, x, 0.42, 0), pm);
      p.rotation.x = -0.12;
      g.add(p);
    }
    scene.add(g);
  }

  // ---------------------------------------------------------------- service building + lattice mast on the island
  {
    const S = SITES.service;
    const y = heightAt(S.x, S.z);
    const g = new THREE.Group();
    g.position.set(S.x, y - 0.1, S.z);
    g.rotation.y = 0.5;
    g.add(mesh(box(7, 3.0, 4.4, 0, 1.5, 0), std({ map: TX.houseWallTexture(0xf2efe6), roughness: 0.9 })));
    const roof = new THREE.ConeGeometry(4.9, 1.3, 4, 1);
    roof.rotateY(Math.PI / 4); roof.scale(1.08, 1, 0.68); roof.translate(0, 3.65, 0);
    g.add(mesh(roof, std({ color: 0x2f5fa6, roughness: 0.6, metalness: 0.3 })));
    scene.add(g);

    const M = SITES.mast;
    const my = heightAt(M.x, M.z);
    const parts = [];
    const H = 15, w = 0.45;
    const legs = [0, 1, 2].map((i) => { const a = (i / 3) * Math.PI * 2; return [Math.cos(a) * w, Math.sin(a) * w]; });
    for (const [lx, lz] of legs) parts.push(strut(new THREE.Vector3(M.x + lx, my, M.z + lz), new THREE.Vector3(M.x + lx, my + H, M.z + lz), 0.035, 4));
    for (let k = 0; k < H; k += 0.9) {
      for (let i = 0; i < 3; i++) {
        const [ax, az] = legs[i], [bx, bz] = legs[(i + 1) % 3];
        parts.push(strut(new THREE.Vector3(M.x + ax, my + k, M.z + az), new THREE.Vector3(M.x + bx, my + k + 0.9, M.z + bz), 0.012, 3));
      }
    }
    parts.push(box(0.25, 1.1, 0.12, M.x + 0.5, my + H - 1, M.z), box(0.25, 1.1, 0.12, M.x - 0.3, my + H - 1, M.z + 0.4));
    for (let i = 0; i < 3; i++) {
      const a = (i / 3) * Math.PI * 2 + 0.5;
      const top = new THREE.Vector3(M.x, my + H * 0.7, M.z);
      const gx = M.x + Math.cos(a) * 8, gz = M.z + Math.sin(a) * 8;
      parts.push(strut(top, new THREE.Vector3(gx, heightAt(gx, gz), gz), 0.012, 3));
    }
    scene.add(mesh(mergeGeometries(parts), galv));
  }

  // ---------------------------------------------------------------- riveted steel bridge over the strait
  {
    const B = SITES.bridge;
    const z = B.z, L = B.x1 - B.x0 + 2, cx = (B.x0 + B.x1) / 2, deck = B.deck;
    const rustTex = TX.rustSteelTexture();
    const gTex = rustTex.clone(); gTex.repeat.set(6, 1); gTex.needsUpdate = true;
    const girderMat = std({ map: gTex, color: 0xe2e6df, roughness: 0.7, metalness: 0.15 });
    const railTex = rustTex.clone(); railTex.repeat.set(2, 1); railTex.needsUpdate = true;
    const railMat = std({ map: railTex, color: 0xf0f0ea, roughness: 0.65, metalness: 0.15 });
    const deckMat = std({ map: rustTex, color: 0xb4b2aa, roughness: 0.8, metalness: 0.1 });
    const gir = [];
    for (const s of [-1.5, 1.5]) {
      gir.push(box(L, 0.78, 0.05, cx, deck - 0.5, z + s));
      gir.push(box(L, 0.05, 0.34, cx, deck - 0.1, z + s));
      gir.push(box(L, 0.05, 0.34, cx, deck - 0.88, z + s));
      for (let x = B.x0 - 0.8; x <= B.x1 + 0.8; x += 1.0) {
        gir.push(box(0.06, 0.74, 0.14, x, deck - 0.5, z + s - 0.08), box(0.06, 0.74, 0.14, x, deck - 0.5, z + s + 0.08));
      }
    }
    for (let x = B.x0 - 0.5; x <= B.x1 + 0.5; x += 2.0) gir.push(box(0.12, 0.22, 3.0, x, deck - 0.2, z));
    for (let x = B.x0; x < B.x1; x += 2.0) gir.push(strut(new THREE.Vector3(x, deck - 0.85, z - 1.45), new THREE.Vector3(x + 2, deck - 0.85, z + 1.45), 0.03, 4));
    scene.add(mesh(mergeGeometries(gir), girderMat));
    scene.add(mesh(box(L, 0.08, 3.7, cx, deck - 0.04, z), deckMat));
    const rails = [];
    for (const s of [-1.8, 1.8]) {
      for (let x = B.x0 - 1; x <= B.x1 + 1.01; x += 1.4) rails.push(box(0.06, 1.05, 0.06, x, deck + 0.52, z + s));
      for (const y of [deck + 1.05, deck + 0.62, deck + 0.22]) rails.push(box(L, 0.055, 0.055, cx, y, z + s));
    }
    scene.add(mesh(mergeGeometries(rails), railMat));
    // concrete abutments and short ramps
    const ab = [];
    for (const [x0, x1] of [[B.x0 - 2.2, B.x0 + 1.4], [B.x1 - 1.4, B.x1 + 2.2]]) {
      const xc = (x0 + x1) / 2;
      const yb = Math.min(heightAt(xc, z), 0) - 1.5;
      ab.push(box(x1 - x0, deck - 0.9 - yb, 4.6, xc, (deck - 0.9 + yb) / 2, z));
    }
    scene.add(mesh(mergeGeometries(ab), concMat));
    const ramps = [
      [B.x0 - 3.6, heightAt(B.x0 - 3.6, z), B.x0 - 1, deck],
      [B.x1 + 1, deck, B.x1 + 3.6, heightAt(B.x1 + 3.6, z)],
    ];
    for (const [x0, y0, x1, y1] of ramps) {
      const len = Math.hypot(x1 - x0, y1 - y0);
      const r = mesh(new THREE.BoxGeometry(len, 0.12, 3.4), deckMat);
      r.position.set((x0 + x1) / 2, (y0 + y1) / 2 - 0.05, z);
      r.rotation.z = Math.atan2(y1 - y0, x1 - x0);
      scene.add(r);
    }
  }

  // ---------------------------------------------------------------- "Fort Utrish" restaurant pier (built in its own frame)
  const P = SITES.pier;
  const pierYaw = Math.atan2(P.dx, P.dz);
  const toWorld = (side, y, along) => { const [x, z] = pierPoint(along, side); return new THREE.Vector3(x, y, z); };
  {
    const g = new THREE.Group();
    g.position.set(P.x, 0, P.z);
    g.rotation.y = pierYaw;
    const L = P.len;
    const parts = [box(3.2, 0.45, L, 0, P.deck - 0.22, L / 2), box(3.4, 0.12, L, 0, P.deck - 0.5, L / 2)];
    parts.push(box(3.2, 0.35, 6, 0, P.deck - 0.25, -2.6)); // landing slab onto the shore
    for (let a = 2; a <= L; a += 3) {
      for (const sd of [-1.35, 1.35]) {
        const [wx, wz] = pierPoint(a, sd);
        const yb = heightAt(wx, wz) - 0.5;
        if (yb > P.deck - 0.6) continue;
        parts.push(cyl(0.17, 0.17, P.deck - 0.4 - yb, 8, sd, (P.deck - 0.4 + yb) / 2, a));
      }
    }
    g.add(mesh(mergeGeometries(parts), concMat));
    const bol = [], tyres = [];
    for (let a = 4; a <= L - 0.5; a += 5.5) {
      for (const sd of [-1.35, 1.35]) bol.push(cyl(0.13, 0.16, 0.42, 10, sd, P.deck + 0.21, a), cyl(0.2, 0.2, 0.06, 10, sd, P.deck + 0.44, a));
    }
    for (let a = 3; a <= L - 0.5; a += 2.6) {
      for (const sd of [-1.68, 1.68]) {
        const t = new THREE.TorusGeometry(0.3, 0.12, 8, 16);
        t.rotateY(Math.PI / 2); t.translate(sd, P.deck - 0.75, a);
        tyres.push(t);
      }
    }
    for (const xx of [-1, 0, 1]) { const t = new THREE.TorusGeometry(0.3, 0.12, 8, 16); t.translate(xx, P.deck - 0.75, L + 0.08); tyres.push(t); }
    g.add(mesh(mergeGeometries(bol), darkMetal));
    g.add(mesh(mergeGeometries(tyres), std({ color: 0x1a1a1a, roughness: 0.9 })));
    g.add(mesh(mergeGeometries([cyl(0.05, 0.06, 3.2, 8, 1.3, P.deck + 1.6, L - 1), box(0.25, 0.15, 0.35, 1.3, P.deck + 3.2, L - 1.15)]), darkMetal));
    const ring = new THREE.TorusGeometry(0.32, 0.07, 8, 20);
    ring.rotateY(Math.PI / 2); ring.translate(-1.45, P.deck + 0.9, L - 3);
    g.add(mesh(ring, std({ color: 0xe8492e, roughness: 0.6 })));
    g.add(mesh(cyl(0.04, 0.04, 1.4, 6, -1.45, P.deck + 0.7, L - 3.12), darkMetal));
    scene.add(g);
  }

  // ---------------------------------------------------------------- "Fort Utrish" restaurant (simplified, fort-like)
  {
    const R = RESTAURANT;
    const g = new THREE.Group();
    g.position.set(R.x, heightAt(R.x, R.z) - 0.1, R.z);
    g.rotation.y = pierYaw; // its terrace faces the bay and the pier
    const stone = std({ map: TX.concreteTexture(19, '#d6c3a0'), roughness: 0.92 });
    const plaster = std({ map: TX.plasterTexture(61, '#f3eee4'), roughness: 0.9 });
    const wood = std({ color: 0x8a6440, roughness: 0.85 });
    const merlons = (w, d, y, mat) => {
      const m = [];
      for (let x = -w / 2 + 0.35; x <= w / 2 - 0.3; x += 1.1) m.push(box(0.55, 0.55, 0.4, x, y, d / 2 - 0.2), box(0.55, 0.55, 0.4, x, y, -d / 2 + 0.2));
      for (let z = -d / 2 + 1.0; z <= d / 2 - 0.9; z += 1.1) m.push(box(0.4, 0.55, 0.55, w / 2 - 0.2, y, z), box(0.4, 0.55, 0.55, -w / 2 + 0.2, y, z));
      g.add(mesh(mergeGeometries(m), mat));
    };
    g.add(mesh(box(R.w, 3.6, R.d, 0, 1.8, 0), stone));
    merlons(R.w, R.d, 3.85, stone);
    g.add(mesh(box(8.5, 2.8, 5.5, -1.5, 5.0, -0.8), plaster));
    merlons(8.5, 5.5, 6.65, plaster);
    // round corner tower
    g.add(mesh(cyl(1.9, 2.05, 8.2, 20, R.w / 2 - 0.6, 4.1, R.d / 2 - 0.4), stone));
    const tm = [];
    for (let i = 0; i < 8; i++) { const a = (i / 8) * Math.PI * 2; tm.push(box(0.6, 0.6, 0.45, R.w / 2 - 0.6 + Math.cos(a) * 1.7, 8.5, R.d / 2 - 0.4 + Math.sin(a) * 1.7)); }
    g.add(mesh(mergeGeometries(tm), stone));
    // windows and door on the sea side
    const dark = std({ color: 0x2c3238, roughness: 0.4 });
    const win = [];
    for (const x of [-4.6, -2.2, 0.2, 2.6]) win.push(box(1.1, 1.3, 0.08, x, 2.1, R.d / 2 + 0.02));
    for (const x of [-4.2, -2.4, -0.6, 1.2]) win.push(box(0.9, 1.1, 0.08, x, 5.1, 2.0));
    g.add(mesh(mergeGeometries(win), dark));
    const sign = mesh(new THREE.BoxGeometry(5.2, 0.85, 0.08), std({ map: TX.signTexture('ФОРТ УТРИШ'), roughness: 0.6 }));
    sign.position.set(-0.8, 3.25, R.d / 2 + 0.08);
    g.add(sign);
    // wooden terrace with tables and parasols
    g.add(mesh(box(R.w + 1, 0.3, 4.5, 0, 0.35, R.d / 2 + 2.25), wood));
    const rail = [];
    for (let x = -R.w / 2 - 0.4; x <= R.w / 2 + 0.5; x += 1.2) rail.push(box(0.08, 0.9, 0.08, x, 0.95, R.d / 2 + 4.4));
    rail.push(box(R.w + 1, 0.08, 0.08, 0, 1.4, R.d / 2 + 4.4));
    g.add(mesh(mergeGeometries(rail), wood));
    const tables = [], umb = [];
    for (const x of [-4.5, -1.5, 1.5, 4.5]) {
      tables.push(cyl(0.45, 0.45, 0.06, 12, x, 1.25, R.d / 2 + 2.3), cyl(0.05, 0.05, 0.75, 6, x, 0.88, R.d / 2 + 2.3));
      umb.push(cyl(0.04, 0.04, 2.0, 6, x, 1.6, R.d / 2 + 2.3));
      const c = new THREE.ConeGeometry(1.25, 0.5, 8); c.translate(x, 2.7, R.d / 2 + 2.3); umb.push(c);
    }
    g.add(mesh(mergeGeometries(tables), wood));
    g.add(mesh(mergeGeometries(umb.slice(0)), std({ color: 0xf2efe6, roughness: 0.7, side: THREE.DoubleSide })));
    scene.add(g);
  }

  // ---------------------------------------------------------------- boats
  function hullGeometry(len, beam, h, cHull, cStripe, cBottom) {
    const stations = 14, pos = [], col = [];
    const prof = [];
    for (let i = 0; i <= stations; i++) {
      const s = i / stations;
      const x = -len / 2 + s * len;
      const hb = (beam / 2) * (s < 0.55 ? 0.93 + 0.07 * (s / 0.55) : Math.pow(Math.cos(((s - 0.55) / 0.45) * Math.PI / 2), 0.75));
      const gun = h * (0.55 + 0.3 * s * s);
      const keel = -h * 0.42 * (s < 0.8 ? 1 : 1 - ((s - 0.8) / 0.2) * 0.8);
      const chine = keel + (gun - keel) * 0.3;
      prof.push([[x, gun, -hb], [x, chine, -hb * 0.9], [x, keel, 0], [x, chine, hb * 0.9], [x, gun, hb]]);
    }
    const c = new THREE.Color();
    const colorFor = (y) => (y < -0.02 ? c.set(cBottom) : c.set(cHull));
    const pushTri = (a, b, d) => {
      for (const p of [a, b, d]) { pos.push(p[0], p[1], p[2]); colorFor((a[1] + b[1] + d[1]) / 3); col.push(c.r, c.g, c.b); }
    };
    for (let i = 0; i < stations; i++) {
      for (let k = 0; k < 4; k++) {
        const a = prof[i][k], b = prof[i][k + 1], d = prof[i + 1][k], e = prof[i + 1][k + 1];
        pushTri(a, d, b); pushTri(b, d, e);
      }
    }
    const tr = prof[0];
    pushTri(tr[0], tr[1], tr[2]); pushTri(tr[0], tr[2], tr[4]); pushTri(tr[2], tr[3], tr[4]);
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
    g.computeVertexNormals();
    // deck
    const dpos = [];
    for (let i = 0; i < stations; i++) {
      const a = prof[i][0], b = prof[i][4], d = prof[i + 1][0], e = prof[i + 1][4];
      const off = 0.08;
      dpos.push(a[0], a[1] - off, a[2], b[0], b[1] - off, b[2], d[0], d[1] - off, d[2]);
      dpos.push(b[0], b[1] - off, b[2], e[0], e[1] - off, e[2], d[0], d[1] - off, d[2]);
    }
    const dg = new THREE.BufferGeometry();
    dg.setAttribute('position', new THREE.Float32BufferAttribute(dpos, 3));
    dg.computeVertexNormals();
    // coloured rubbing strake along both gunwales
    const trims = [];
    for (const side of [0, 4]) {
      const pts = prof.map((st) => new THREE.Vector3(st[side][0], st[side][1] - 0.06, st[side][2] * 1.02));
      trims.push(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 28, 0.065, 5, false));
    }
    const trim = mergeGeometries(trims);
    return { hull: g, deck: dg, trim, trimColor: cStripe };
  }
  const hullMat = std({ vertexColors: true, roughness: 0.45, metalness: 0.05, side: THREE.DoubleSide });
  const deckMatB = std({ color: 0xcfc6b2, roughness: 0.85, side: THREE.DoubleSide });
  const glassMat = std({ color: 0x1f2c33, roughness: 0.15, metalness: 0.6 });
  const whitePlastic = std({ color: 0xf4f4f0, roughness: 0.5 });
  function makeBoat(type) {
    const g = new THREE.Group();
    const inner = new THREE.Group();
    g.add(inner);
    let len, beam, h, draft;
    if (type === 'excursion') {
      len = 10.5; beam = 3.3; h = 1.2; draft = 0.35;
      const hg = hullGeometry(len, beam, h, 0xf6f6f2, 0x1f57a8, 0x7a2a22);
      inner.add(mesh(hg.hull, hullMat), mesh(hg.deck, deckMatB), mesh(hg.trim, std({ color: hg.trimColor, roughness: 0.5 })));
      const parts = [];
      for (let x = -3.8; x <= 3.0; x += 1.1) parts.push(box(0.4, 0.45, 2.6, x, h * 0.55 + 0.15, 0));
      inner.add(mesh(mergeGeometries(parts), std({ color: 0x3f6fb0, roughness: 0.6 })));
      const posts = [];
      for (const x of [-4.4, -1.2, 2.0]) for (const s of [-1.4, 1.4]) posts.push(cyl(0.04, 0.04, 2.0, 6, x, h * 0.6 + 1.0, s));
      inner.add(mesh(mergeGeometries(posts), galv));
      inner.add(mesh(box(7.6, 0.1, 3.1, -1.0, h * 0.6 + 2.05, 0), whitePlastic));
      inner.add(mesh(box(1.4, 1.5, 2.0, 3.4, h * 0.6 + 0.75, 0), whitePlastic));
      inner.add(mesh(box(0.06, 0.6, 1.8, 4.12, h * 0.6 + 1.1, 0), glassMat));
    } else {
      const v = { a: [5.6, 2.1, 0.95, 0xf3f3ef, 0x2558a0, 0x8c2a22], b: [6.3, 2.35, 1.0, 0xf1efe7, 0xb5302a, 0x26384f], c: [5.0, 1.9, 0.9, 0xe9edf0, 0x2a7d8c, 0x7a2a22], d: [4.6, 1.8, 0.85, 0xf2efe6, 0x4a4a48, 0x8c2a22] }[type];
      [len, beam, h] = v; draft = 0.28;
      const hg = hullGeometry(len, beam, h, v[3], v[4], v[5]);
      inner.add(mesh(hg.hull, hullMat), mesh(hg.deck, deckMatB), mesh(hg.trim, std({ color: hg.trimColor, roughness: 0.5 })));
      inner.add(mesh(box(0.7, 0.75, 0.8, 0.2, h * 0.55 + 0.35, 0.3), whitePlastic));
      const ws = mesh(box(0.06, 0.4, 0.9, 0.6, h * 0.55 + 0.9, 0.3), glassMat); ws.rotation.z = 0.5; inner.add(ws);
      inner.add(mesh(box(0.8, 0.35, beam * 0.7, -1.4, h * 0.55 + 0.15, 0), std({ color: 0xd9d2c0, roughness: 0.8 })));
      const motor = mesh(box(0.42, 0.9, 0.38, -len / 2 - 0.15, h * 0.35, 0), std({ color: 0x2b2f33, roughness: 0.4, metalness: 0.3 }));
      motor.rotation.z = 0.15; inner.add(motor);
      if (type === 'b') {
        inner.add(mesh(box(1.8, 0.7, 1.7, 1.3, h * 0.55 + 0.35, 0), whitePlastic));
        inner.add(mesh(box(1.82, 0.22, 1.72, 1.3, h * 0.55 + 0.5, 0), glassMat));
      }
      if (type === 'c') {
        const pp = [];
        for (const x of [-1.5, -0.2]) for (const s of [-0.85, 0.85]) pp.push(cyl(0.02, 0.02, 1.2, 4, x, h * 0.55 + 0.6, s));
        inner.add(mesh(mergeGeometries(pp), galv));
        inner.add(mesh(box(1.6, 0.06, 1.9, -0.85, h * 0.55 + 1.2, 0), std({ color: 0x2a5a9a, roughness: 0.8 })));
      }
    }
    g.userData = { len, beam, draft };
    return g;
  }
  const heading = (hx, hz) => Math.atan2(-hz, hx); // boat yaw that points its bow along (hx, hz)
  const pAt = (along, side) => pierPoint(along, side);
  const moorC = pAt(17, 13), moorD = pAt(15, -13);
  const buoyC = pAt(22, 15), buoyD = pAt(20, -15.5);
  const boatDefs = [
    { type: 'a', x: pAt(14, 3.3)[0], z: pAt(14, 3.3)[1], yaw: heading(P.dx, P.dz), moor: 'pier' },
    { type: 'b', x: pAt(9.5, -3.45)[0], z: pAt(9.5, -3.45)[1], yaw: heading(-P.dx, -P.dz), moor: 'pier' },
    { type: 'excursion', x: pAt(P.len + 2.2, -0.6)[0], z: pAt(P.len + 2.2, -0.6)[1], yaw: heading(P.dz, -P.dx), moor: 'pier' },
    { type: 'c', x: moorC[0], z: moorC[1], yaw: heading(buoyC[0] - moorC[0], buoyC[1] - moorC[1]), moor: 'buoy' },
    { type: 'd', x: moorD[0], z: moorD[1], yaw: heading(buoyD[0] - moorD[0], buoyD[1] - moorD[1]), moor: 'buoy' },
  ];
  for (const d of boatDefs) {
    const b = makeBoat(d.type);
    b.position.set(d.x, 0, d.z);
    b.rotation.order = 'YXZ';
    b.rotation.y = d.yaw;
    scene.add(b);
    out.boats.push({ obj: b, ...d, phase: Math.random() * 10 });
  }

  // ---------------------------------------------------------------- buoys (pier markers and moorings)
  const buoyMat = std({ color: 0xff7a1f, roughness: 0.5 });
  const buoyW = std({ color: 0xf2f2ee, roughness: 0.5 });
  const buoyDefs = [
    { x: buoyC[0], z: buoyC[1], m: buoyW, r: 0.38 }, { x: buoyD[0], z: buoyD[1], m: buoyW, r: 0.34 },
    { x: pAt(P.len + 7, 6)[0], z: pAt(P.len + 7, 6)[1], m: buoyMat, r: 0.42 }, { x: pAt(P.len + 4, -8)[0], z: pAt(P.len + 4, -8)[1], m: buoyMat, r: 0.42 },
    // swimming-zone markers off the long south beach
    { x: 34, z: 87, m: buoyMat, r: 0.36 }, { x: 62, z: 92, m: buoyMat, r: 0.36 }, { x: 94, z: 101, m: buoyMat, r: 0.36 },
  ];
  for (const d of buoyDefs) {
    const s = mesh(new THREE.SphereGeometry(d.r, 16, 12), d.m);
    scene.add(s);
    out.buoys.push({ obj: s, x: d.x, z: d.z, r: d.r, phase: Math.random() * 6 });
  }

  // ---------------------------------------------------------------- mooring ropes (updated every frame)
  const ropeMat = std({ color: 0xc9b98f, roughness: 0.9 });
  function addRope(getA, getB, sag) {
    const seg = 12, rad = 5;
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array((seg + 1) * rad * 3), 3));
    const idx = [];
    for (let i = 0; i < seg; i++) for (let k = 0; k < rad; k++) {
      const a = i * rad + k, b = i * rad + ((k + 1) % rad), c = a + rad, d = b + rad;
      idx.push(a, c, b, b, c, d);
    }
    geo.setIndex(idx);
    const m = mesh(geo, ropeMat, false, false);
    m.frustumCulled = false;
    scene.add(m);
    out.ropes.push({ m, getA, getB, sag, seg, rad });
  }
  const boatPoint = (bi, lx, ly, lz) => () => out.boats[bi].obj.localToWorld(new THREE.Vector3(lx, ly, lz));
  const bollard = (side, along) => () => toWorld(side, P.deck + 0.4, along);
  addRope(bollard(1.35, 9.5), boatPoint(0, -2.3, 0.75, 0.7), 0.35);
  addRope(bollard(1.35, 20.5), boatPoint(0, 2.4, 0.85, 0.3), 0.35);
  addRope(bollard(-1.35, 4), boatPoint(1, -2.6, 0.8, 0.6), 0.3);
  addRope(bollard(-1.35, 15), boatPoint(1, 2.6, 0.9, 0.3), 0.35);
  addRope(bollard(-1.35, 20.5), boatPoint(2, -4.3, 0.95, -1.1), 0.3);
  addRope(bollard(1.35, 20.5), boatPoint(2, 3.4, 0.95, -1.2), 0.3);
  addRope(() => out.buoys[0].obj.position.clone(), boatPoint(3, 2.4, 0.7, 0), 0.25);
  addRope(() => out.buoys[1].obj.position.clone(), boatPoint(4, 2.2, 0.65, 0), 0.25);

  // ---------------------------------------------------------------- dolphinarium: floating net pens in the lagoon
  {
    const walk = [], nets = [];
    const pens = [[-15, -6], [-15, 4.5], [-15, 15]];
    const s = 9;
    for (const [px, pz] of pens) {
      walk.push(box(s + 1, 0.3, 1.0, px, 0.18, pz - s / 2), box(s + 1, 0.3, 1.0, px, 0.18, pz + s / 2));
      walk.push(box(1.0, 0.3, s, px - s / 2, 0.18, pz), box(1.0, 0.3, s, px + s / 2, 0.18, pz));
      const ng = new THREE.BoxGeometry(s - 0.3, 3.6, s - 0.3, 1, 1, 1);
      const idx = ng.index.array;
      // drop the top face so the pen is open to the air
      const keep = [];
      for (let i = 0; i < idx.length; i += 3) {
        const y0 = ng.attributes.position.getY(idx[i]), y1 = ng.attributes.position.getY(idx[i + 1]), y2 = ng.attributes.position.getY(idx[i + 2]);
        if (!(y0 > 0 && y1 > 0 && y2 > 0)) keep.push(idx[i], idx[i + 1], idx[i + 2]);
      }
      ng.setIndex(keep);
      ng.translate(px, -1.6, pz);
      nets.push(ng);
    }
    walk.push(box(10.5, 0.3, 1.2, -6.5, 0.2, 4.5));
    walk.push(box(1.2, 0.3, 30, -10.5, 0.18, 4.5));
    scene.add(mesh(mergeGeometries(walk), std({ color: 0xc9d6dc, roughness: 0.7 })));
    const nt = TX.netTexture(); nt.repeat.set(4, 2);
    const netMesh = mesh(mergeGeometries(nets), std({ map: nt, alphaTest: 0.5, side: THREE.DoubleSide, color: 0x6f7f78 }), false, false);
    scene.add(netMesh);
    const floats = [];
    for (const [px, pz] of pens) for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2;
      floats.push(at(new THREE.SphereGeometry(0.22, 8, 6), px + Math.cos(a) * s * 0.55, 0.1, pz + Math.sin(a) * s * 0.55));
    }
    scene.add(mesh(mergeGeometries(floats), std({ color: 0xf0f0ea, roughness: 0.5 })));
    // hangar-like building on the shore
    const H = HANGAR;
    const g = new THREE.Group();
    g.position.set(H.x, heightAt(H.x, H.z) - 0.1, H.z);
    g.rotation.y = H.rot;
    g.add(mesh(box(H.w, 3.4, H.d, 0, 1.7, 0), std({ map: TX.houseWallTexture(0xe8eef0), roughness: 0.8 })));
    const rr = H.w * 0.6;
    const rf = new THREE.CylinderGeometry(rr, rr, H.d + 0.4, 24, 1, true, Math.PI / 2 + 0.6, Math.PI - 1.2);
    rf.rotateX(Math.PI / 2); rf.scale(1, 0.45, 1);
    rf.translate(0, 3.4 - 0.45 * rr * Math.sin(0.6) + 0.02, 0);
    g.add(mesh(rf, std({ color: 0xf6f8f8, roughness: 0.5, side: THREE.DoubleSide })));
    scene.add(g);
  }

  // ---------------------------------------------------------------- village houses at the foot of the ridge
  for (const hs of HOUSES) {
    const g = new THREE.Group();
    const y = heightAt(hs.x, hs.z);
    g.position.set(hs.x, y - 0.6, hs.z);
    g.rotation.y = hs.rot;
    const wt = TX.houseWallTexture(hs.wall);
    const wallMat = std({ map: wt, roughness: 0.9 });
    g.add(mesh(box(hs.w, hs.h + 0.6, hs.d, 0, (hs.h + 0.6) / 2, 0), wallMat));
    const shape = new THREE.Shape();
    const rw = hs.w / 2 + 0.4, rh = Math.min(2.2, hs.w * 0.3);
    shape.moveTo(-rw, 0); shape.lineTo(rw, 0); shape.lineTo(0, rh); shape.closePath();
    const roof = new THREE.ExtrudeGeometry(shape, { depth: hs.d + 0.6, bevelEnabled: false });
    roof.translate(0, hs.h + 0.6, -(hs.d + 0.6) / 2);
    g.add(mesh(roof, std({ color: hs.roof, roughness: 0.7 })));
    scene.add(g);
  }

  return out;
}

// Update a rope tube along a sagging curve between two moving points
const _a = new THREE.Vector3(), _b = new THREE.Vector3(), _p = new THREE.Vector3(), _t = new THREE.Vector3();
const _n = new THREE.Vector3(), _bn = new THREE.Vector3(), _up = new THREE.Vector3(0, 1, 0);
export function updateRopes(ropes) {
  for (const r of ropes) {
    _a.copy(r.getA()); _b.copy(r.getB());
    const pos = r.m.geometry.attributes.position;
    _t.subVectors(_b, _a).normalize();
    _n.crossVectors(_t, _up).normalize();
    if (_n.lengthSq() < 1e-6) _n.set(1, 0, 0);
    _bn.crossVectors(_n, _t).normalize();
    const rr = 0.035;
    for (let i = 0; i <= r.seg; i++) {
      const s = i / r.seg;
      _p.copy(_a).lerp(_b, s);
      _p.y -= r.sag * 4 * s * (1 - s);
      for (let k = 0; k < r.rad; k++) {
        const ang = (k / r.rad) * Math.PI * 2;
        const cx = Math.cos(ang) * rr, cy = Math.sin(ang) * rr;
        pos.setXYZ(i * r.rad + k, _p.x + _n.x * cx + _bn.x * cy, _p.y + _n.y * cx + _bn.y * cy, _p.z + _n.z * cx + _bn.z * cy);
      }
    }
    pos.needsUpdate = true;
    r.m.geometry.computeVertexNormals();
  }
}
