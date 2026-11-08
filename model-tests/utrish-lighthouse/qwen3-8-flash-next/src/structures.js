// Buildings, bridge, pier, boats, memorial: everything the hand would have built.
import * as THREE from 'three';
import { L, pieceSDF, slopeAt } from './geo.js';
import {
  makeBrick, makeReliefBand, makePlaster, makePaintedMetal, makeConcrete,
  makeWood, makeGranite, makePlaque, makeNet, makePebbles,
} from './textures.js';
import { mulberry32 } from './noise.js';

const UP = new THREE.Vector3(0, 1, 0);

function std(opts) {
  return new THREE.MeshStandardMaterial(opts);
}

/** soft radial disc, used for the lamp glow and splash cores */
function glowTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const x = c.getContext('2d');
  const g = x.createRadialGradient(64, 64, 0, 64, 64, 64);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.22, 'rgba(255,238,208,0.72)');
  g.addColorStop(0.55, 'rgba(255,214,150,0.2)');
  g.addColorStop(1, 'rgba(255,200,120,0)');
  x.fillStyle = g;
  x.fillRect(0, 0, 128, 128);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.needsUpdate = true;
  return t;
}

export function makeStructureTextures() {
  const brick = makeBrick(512);
  const relief = makeReliefBand(1024, 256);
  const plaster = makePlaster(512, [238, 235, 226]);
  const plasterOld = makePlaster(512, [224, 216, 200]);
  const blue = makePaintedMetal(256, [72, 100, 132]);
  const bluePale = makePaintedMetal(256, [126, 142, 154]);
  const red = makePaintedMetal(256, [158, 66, 54]);
  const galv = makePaintedMetal(256, [132, 138, 142]);
  const rust = makePaintedMetal(256, [112, 96, 82]);
  const white = makePaintedMetal(256, [214, 216, 214]);
  const concrete = makeConcrete(256);
  const wood = makeWood(256);
  const granite = makeGranite(256);
  const pebble = makePebbles(512, [196, 190, 178], 1500);
  const net = makeNet(128);
  return {
    brick, relief, plaster, plasterOld, blue, bluePale, red, galv, rust, white,
    concrete, wood, granite, pebble, net,
    plaque: makePlaque(256, 13, '#57555a'),
    plaqueGrey: makePlaque(256, 10, '#8b8b8f'),
  };
}

function withRepeat(t, rx, ry) {
  const c = t.clone();
  c.needsUpdate = true;
  c.repeat.set(rx, ry);
  return c;
}

export function buildStructures(T, world) {
  const group = new THREE.Group();
  group.name = 'structures';
  const m4 = new THREE.Matrix4();
  const vTmp = new THREE.Vector3();
  const sTmp = new THREE.Vector3(1, 1, 1);
  const qTmp = new THREE.Quaternion();
  const floats = [];      // things that bob on the water
  const animate = [];

  const M = {
    brick: std({ map: withRepeat(T.brick.map, 4, 2.6), bumpMap: withRepeat(T.brick.bumpMap, 4, 2.6), bumpScale: 0.35, roughness: 0.95 }),
    brickCap: std({ map: withRepeat(T.brick.map, 3, 0.5), bumpMap: withRepeat(T.brick.bumpMap, 3, 0.5), roughness: 0.95 }),
    relief: std({ map: T.relief.map, bumpMap: T.relief.bumpMap, bumpScale: 0.55, roughness: 0.9 }),
    wash: std({ map: T.plaster.map, bumpMap: T.plaster.bumpMap, bumpScale: 0.25, roughness: 0.9 }),
    washOld: std({ map: T.plasterOld.map, bumpMap: T.plasterOld.bumpMap, bumpScale: 0.35, roughness: 0.95 }),
    concrete: std({ map: withRepeat(T.concrete, 2, 2), bumpMap: withRepeat(T.concrete, 2, 2), bumpScale: 0.1, roughness: 0.9 }),
    concreteDark: std({ map: T.concrete, color: 0x9a9893, roughness: 0.92 }),
    plinth: std({
      map: withRepeat(T.concrete, 3, 1.2),
      bumpMap: withRepeat(T.concrete, 3, 1.2),
      bumpScale: 0.3,
      color: 0xb4afa4,
      roughness: 0.94,
    }),
    blueMetal: std({ map: T.blue.map, bumpMap: T.blue.bumpMap, bumpScale: 0.2, roughness: 0.62, metalness: 0.25 }),
    bluePale: std({ map: T.bluePale.map, bumpMap: T.bluePale.bumpMap, bumpScale: 0.2, roughness: 0.68, metalness: 0.2 }),
    redMetal: std({ map: T.red.map, bumpMap: T.red.bumpMap, bumpScale: 0.2, roughness: 0.5, metalness: 0.3 }),
    galv: std({ map: T.galv.map, bumpMap: T.galv.bumpMap, bumpScale: 0.15, roughness: 0.45, metalness: 0.7 }),
    rust: std({ map: T.rust.map, bumpMap: T.rust.bumpMap, bumpScale: 0.3, roughness: 0.8, metalness: 0.4 }),
    whiteMetal: std({ map: T.white.map, bumpMap: T.white.bumpMap, bumpScale: 0.12, roughness: 0.5, metalness: 0.2 }),
    wood: std({ map: withRepeat(T.wood, 1, 4), bumpMap: withRepeat(T.wood, 1, 4), bumpScale: 0.2, roughness: 0.85 }),
    woodGrey: std({ map: T.wood, color: 0x9a9187, roughness: 0.92 }),
    granite: std({ map: T.granite, roughness: 0.55, metalness: 0.05 }),
    pebble: std({ map: T.pebble.map, bumpMap: T.pebble.bumpMap, bumpScale: 0.3, roughness: 0.8 }),
    iron: std({ color: 0x2c2a28, roughness: 0.6, metalness: 0.55 }),
    dark: std({ color: 0x171614, roughness: 0.9 }),
    brass: std({ color: 0xb69448, roughness: 0.35, metalness: 0.9 }),
    bronze: std({ color: 0x6b5734, roughness: 0.55, metalness: 0.7 }),
    glass: std({ color: 0x9fc4cf, roughness: 0.12, metalness: 0.1, transparent: true, opacity: 0.42 }),
    lamp: std({ color: 0xfff0cf, emissive: 0xffbe72, emissiveIntensity: 1.6, roughness: 0.4 }),
    net: std({ map: T.net, color: 0x4c5a52, transparent: true, opacity: 0.5, side: THREE.DoubleSide, roughness: 0.9, depthWrite: false }),
    plaque: std({ map: T.plaque, roughness: 0.75, metalness: 0.2 }),
    plaqueGrey: std({ map: T.plaqueGrey, roughness: 0.6, metalness: 0.3 }),
    canvasRed: std({ color: 0xa8412f, roughness: 0.85 }),
    canvasCream: std({ color: 0xd9d2bd, roughness: 0.9 }),
    hullWhite: std({ color: 0xf2f2ee, roughness: 0.35, metalness: 0.05 }),
    hullGreen: std({ color: 0x2e6f5e, roughness: 0.45 }),
    hullBlue: std({ color: 0x2a4f7a, roughness: 0.4 }),
    deck: std({ color: 0xd8d2c4, roughness: 0.7 }),
    yellow: std({ color: 0xc9a640, roughness: 0.6 }),
    stoneBlock: std({ map: T.plasterOld.map, bumpMap: T.plasterOld.bumpMap, color: 0xcabc9e, roughness: 0.95 }),
    brickRubble: std({ color: 0xa8563c, roughness: 0.9 }),
    canvasOrange: std({ color: 0xd8613a, roughness: 0.85 }),
  };

  const add = (mesh, parent = group) => {
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    parent.add(mesh);
    return mesh;
  };

  const groundY = (x, z) => world.height(x, z);

  /* =============================================== 1975 monument-lighthouse */
  function buildLighthouse() {
    const [lx, lz] = L.lighthouse;
    const g = new THREE.Group();
    const gy = groundY(lx, lz);
    g.position.set(lx, gy - 0.25, lz);

    // stepped concrete plinth and the conical buttress the tower stands on
    const steps = [[8.2, 0.52], [6.4, 0.64], [4.7, 0.72]];
    let y = 0;
    steps.forEach(([r, h], i) => {
      const m = add(new THREE.Mesh(new THREE.CylinderGeometry(r, r + 0.3, h, 8), M.plinth), g);
      m.position.y = y + h / 2;
      m.rotation.y = Math.PI / 8 + i * 0.09;
      const lip = add(new THREE.Mesh(new THREE.TorusGeometry(r + 0.02, 0.055, 4, 8), M.plinth), g);
      lip.rotation.x = Math.PI / 2;
      lip.rotation.z = Math.PI / 8 + i * 0.09;
      lip.position.y = y + h;
      void i;
    });
    const cone = add(new THREE.Mesh(new THREE.CylinderGeometry(3.05, 4.62, 2.6, 28, 1), M.plinth), g);
    cone.position.y = y + 1.3;
    y += 2.6;
    // shallow ribs marching up the buttress
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2 + 0.2;
      const rib = add(new THREE.Mesh(new THREE.BoxGeometry(0.34, 2.5, 0.16), M.plinth), g);
      rib.position.set(Math.sin(a) * 3.72, y - 1.35, Math.cos(a) * 3.72);
      rib.rotation.y = -a;
      rib.rotation.x = 0.11;
    }

    // doorway niche
    const niche = add(new THREE.Mesh(new THREE.BoxGeometry(1.25, 1.5, 0.5), M.dark), g);
    niche.position.set(0, y - 0.62, 3.55);
    niche.rotation.x = -0.22;
    const lintel = add(new THREE.Mesh(new THREE.BoxGeometry(1.7, 0.22, 0.6), M.plinth), g);
    lintel.position.set(0, y + 0.26, 3.62);
    lintel.rotation.x = -0.22;

    // inscription panel set flush into one face of the upper step
    const fa = 2 * 0.09;
    const inscr = add(new THREE.Mesh(new THREE.PlaneGeometry(2.5, 0.5), M.plaqueGrey), g);
    inscr.position.set(Math.sin(fa) * 4.36, 1.52, Math.cos(fa) * 4.36);
    inscr.rotation.y = fa;

    // whitewashed foot of the tower
    const towerBase = y;
    const towerH = 14.0;
    const rB = 3.02;
    const rT = 2.06;
    const foot = add(new THREE.Mesh(new THREE.CylinderGeometry(rB + 0.06, rB + 0.2, 1.15, 36, 1, true), M.wash), g);
    foot.position.y = towerBase + 0.58;

    const radiusAt = (t) => rB + (rT - rB) * t;

    const tower = add(new THREE.Mesh(new THREE.CylinderGeometry(rT, rB, towerH, 44, 10, false), M.brick), g);
    tower.position.y = towerBase + towerH / 2;

    // ---- sculpted relief band
    const bandT = 0.34;
    const bandY = towerBase + towerH * bandT;
    const bandH = 2.35;
    const bandR = radiusAt(bandT) + 0.26;
    const band = add(new THREE.Mesh(new THREE.CylinderGeometry(bandR, bandR * 1.01, bandH, 48, 1, true), M.relief), g);
    band.position.y = bandY;
    for (const dy of [-bandH / 2 - 0.11, bandH / 2 + 0.11]) {
      const c = add(new THREE.Mesh(new THREE.CylinderGeometry(bandR + 0.2, bandR + 0.16, 0.22, 44), M.concrete), g);
      c.position.y = bandY + dy;
    }
    // helm and anchor that physically project
    const helm = new THREE.Group();
    add(new THREE.Mesh(new THREE.TorusGeometry(0.62, 0.11, 6, 20), M.concrete), helm);
    for (let i = 0; i < 8; i++) {
      const sp = add(new THREE.Mesh(new THREE.BoxGeometry(0.13, 1.5, 0.12), M.concrete), helm);
      sp.rotation.z = (i / 8) * Math.PI * 2;
    }
    const hub = add(new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.24, 0.2, 12), M.concrete), helm);
    hub.rotation.x = Math.PI / 2;
    helm.position.set(0, bandY + 0.05, bandR + 0.05);
    helm.rotation.x = 0.06;
    g.add(helm);
    const helm2 = helm.clone();
    helm2.position.set(0, bandY + 0.05, -(bandR + 0.05));
    helm2.rotation.set(-0.06, Math.PI, 0);
    g.add(helm2);

    // ---- dentil cornice, gallery, railing, lantern
    const topY = towerBase + towerH;
    const capR = rT + 0.18;
    const capRing = add(new THREE.Mesh(new THREE.CylinderGeometry(capR + 0.1, capR, 0.34, 40), M.brickCap), g);
    capRing.position.y = topY + 0.17;
    const nDent = 26;
    const dentGeo = new THREE.BoxGeometry(0.32, 0.52, 0.34);
    const dents = new THREE.InstancedMesh(dentGeo, M.brickCap, nDent);
    dents.castShadow = true;
    const dm = new THREE.Matrix4();
    for (let i = 0; i < nDent; i++) {
      const a = (i / nDent) * Math.PI * 2;
      dm.makeRotationY(-a);
      dm.setPosition(Math.sin(a) * (capR + 0.05), topY + 0.6, Math.cos(a) * (capR + 0.05));
      dents.setMatrixAt(i, dm);
    }
    g.add(dents);

    const slab = add(new THREE.Mesh(new THREE.CylinderGeometry(capR + 0.34, capR + 0.28, 0.24, 40), M.concrete), g);
    slab.position.y = topY + 0.96;
    const railR = capR + 0.24;
    const postGeo = new THREE.BoxGeometry(0.07, 1.05, 0.07);
    const nPost = 22;
    const posts = new THREE.InstancedMesh(postGeo, M.galv, nPost);
    posts.castShadow = true;
    for (let i = 0; i < nPost; i++) {
      const a = (i / nPost) * Math.PI * 2;
      dm.makeRotationY(-a);
      dm.setPosition(Math.sin(a) * railR, topY + 1.6, Math.cos(a) * railR);
      posts.setMatrixAt(i, dm);
    }
    g.add(posts);
    for (const ry of [1.15, 1.62, 2.1]) {
      const rail = add(new THREE.Mesh(new THREE.TorusGeometry(railR, 0.04, 5, 44), M.galv), g);
      rail.rotation.x = Math.PI / 2;
      rail.position.y = topY + ry;
    }

    // lantern
    const lan = new THREE.Group();
    lan.position.y = topY + 1.08;
    g.add(lan);
    const lbase = add(new THREE.Mesh(new THREE.CylinderGeometry(1.05, 1.18, 0.26, 20), M.redMetal), lan);
    void lbase;
    const glass = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 0.95, 1.55, 16, 1, true), M.glass);
    glass.position.y = 0.9;
    glass.renderOrder = 2;
    lan.add(glass);
    const core = new THREE.Mesh(new THREE.SphereGeometry(0.34, 12, 10), M.lamp);
    core.position.y = 0.95;
    lan.add(core);
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2;
      const bar = add(new THREE.Mesh(new THREE.BoxGeometry(0.1, 1.6, 0.14), M.redMetal), lan);
      bar.position.set(Math.sin(a) * 0.94, 0.9, Math.cos(a) * 0.94);
      bar.rotation.y = -a;
    }
    const collar = add(new THREE.Mesh(new THREE.CylinderGeometry(1.02, 1.02, 0.14, 20), M.redMetal), lan);
    collar.position.y = 1.72;
    // flared red cap
    const capPts = [];
    for (let i = 0; i <= 10; i++) {
      const t = i / 10;
      capPts.push(new THREE.Vector2(1.14 * (1 - Math.pow(t, 0.72)) + 0.06, t * 0.92));
    }
    const cap = add(new THREE.Mesh(new THREE.LatheGeometry(capPts, 20), M.redMetal), lan);
    cap.position.y = 1.78;
    const finial = add(new THREE.Mesh(new THREE.SphereGeometry(0.13, 10, 8), M.redMetal), lan);
    finial.position.y = 2.82;
    const rod = add(new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.35, 6), M.iron), lan);
    rod.position.y = 3.0;
    const glow = new THREE.Sprite(new THREE.SpriteMaterial({
      map: glowTexture(), color: 0xffd9a4, transparent: true, opacity: 0.32,
      blending: THREE.AdditiveBlending, depthWrite: false,
    }));
    glow.scale.set(4.2, 4.2, 1);
    glow.position.y = 0.95;
    glow.renderOrder = 3;
    lan.add(glow);
    animate.push((t) => {
      const p = 0.55 + 0.45 * Math.sin(t * 1.4);
      glow.material.opacity = 0.16 + 0.16 * p;
      core.material.emissiveIntensity = 1.1 + 0.7 * p;
    });

    // chain fence around the plinth
    const fenceR = 10.2;
    const nF = 14;
    const fpost = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.13, 0.15, 0.95, 8), M.iron, nF);
    fpost.castShadow = true;
    const chainMat = M.iron;
    for (let i = 0; i < nF; i++) {
      const a = (i / nF) * Math.PI * 2;
      const px = Math.sin(a) * fenceR;
      const pz = Math.cos(a) * fenceR;
      dm.identity();
      dm.setPosition(px, 0.47, pz);
      fpost.setMatrixAt(i, dm);
      // sagging chain to the next post
      const a2 = ((i + 1) / nF) * Math.PI * 2;
      const p0 = new THREE.Vector3(px, 0.86, pz);
      const p1 = new THREE.Vector3(Math.sin(a2) * fenceR, 0.86, Math.cos(a2) * fenceR);
      const mid = p0.clone().add(p1).multiplyScalar(0.5).setY(0.62);
      const curve = new THREE.CatmullRomCurve3([p0, mid, p1]);
      const chain = add(new THREE.Mesh(new THREE.TubeGeometry(curve, 6, 0.035, 4), chainMat), g);
      chain.castShadow = false;
    }
    g.add(fpost);
    return g;
  }

  /* ------------------------------------------------------- comms mast */
  function buildMast() {
    const [mx, mz] = L.mast;
    const g = new THREE.Group();
    g.position.set(mx, groundY(mx, mz) - 0.1, mz);
    const h = 9.2;
    const legR = 0.42;
    for (let i = 0; i < 3; i++) {
      const a = (i / 3) * Math.PI * 2;
      const leg = add(new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.09, h, 6), M.galv), g);
      leg.position.set(Math.sin(a) * legR, h / 2, Math.cos(a) * legR);
      leg.rotation.set(Math.cos(a) * 0.055, 0, -Math.sin(a) * 0.055);
    }
    // lattice: rings plus diagonal bracing between the legs
    for (let k = 1; k <= 6; k++) {
      const y = (k / 6.4) * h;
      const br = add(new THREE.Mesh(new THREE.TorusGeometry(legR - k * 0.02, 0.03, 4, 3), M.galv), g);
      br.rotation.x = Math.PI / 2;
      br.position.y = y;
    }
    for (let k = 0; k < 6; k++) {
      const y0 = (k / 6.4) * h;
      const y1 = ((k + 1) / 6.4) * h;
      for (let i = 0; i < 3; i++) {
        const a0 = (i / 3) * Math.PI * 2;
        const a1 = ((i + 1) / 3) * Math.PI * 2;
        const p0 = new THREE.Vector3(Math.sin(a0) * (legR - k * 0.02), y0, Math.cos(a0) * (legR - k * 0.02));
        const p1 = new THREE.Vector3(Math.sin(a1) * (legR - k * 0.02), y1, Math.cos(a1) * (legR - k * 0.02));
        const len = p0.distanceTo(p1);
        const bar = add(new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, len, 4), M.galv), g);
        bar.position.copy(p0.clone().add(p1).multiplyScalar(0.5));
        bar.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), p1.clone().sub(p0).normalize());
      }
    }
    for (const ang of [0.4, 2.6]) {
      const pan = add(new THREE.Mesh(new THREE.BoxGeometry(0.16, 1.35, 0.42), M.whiteMetal), g);
      pan.position.set(Math.sin(ang) * 0.62, h - 1.1, Math.cos(ang) * 0.62);
      pan.rotation.y = -ang;
    }
    const dish = add(new THREE.Mesh(new THREE.SphereGeometry(0.5, 12, 8, 0, Math.PI * 2, 0, 0.7), M.whiteMetal), g);
    dish.position.set(-0.5, h - 3.1, 0.3);
    dish.rotation.set(1.1, 0, 2.1);
    const whip = add(new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 2.2, 5), M.galv), g);
    whip.position.y = h + 1.0;
    return g;
  }

  /* ------------------------------------------------- memorial granite slab */
  function buildMemorial() {
    const [mx, mz] = L.memorial;
    const g = new THREE.Group();
    g.position.set(mx, groundY(mx, mz) - 0.1, mz);
    g.rotation.y = 0.5;
    const base = add(new THREE.Mesh(new THREE.BoxGeometry(3.9, 0.4, 2.5), M.granite), g);
    base.position.y = 0.2;
    const kerb = add(new THREE.Mesh(new THREE.BoxGeometry(5.4, 0.22, 3.8), M.concrete), g);
    kerb.position.y = 0.05;
    const slab = add(new THREE.Mesh(new THREE.BoxGeometry(3.3, 2.1, 0.32), M.granite), g);
    slab.position.set(0, 1.35, -0.1);
    slab.rotation.x = -0.32;
    const face = add(new THREE.Mesh(new THREE.PlaneGeometry(2.8, 1.6), M.plaque), g);
    face.position.set(0, 1.38, 0.08);
    face.rotation.x = -0.32;
    face.translateZ(0.16);
    // star + flame relief
    const star = add(new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.05, 5), M.bronze), g);
    star.rotation.set(Math.PI / 2 - 0.32, 0, 0.2);
    star.position.set(0, 2.62, -0.62);
    star.translateZ(0.2);
    // low plant bed
    const bed = add(new THREE.Mesh(new THREE.BoxGeometry(4.6, 0.18, 2.9), M.pebble), g);
    bed.position.set(0, 0.02, 1.5);
    return g;
  }

  function buildYakMemorial() {
    const [mx, mz] = L.yakMemorial;
    const g = new THREE.Group();
    g.position.set(mx, groundY(mx, mz) - 0.1, mz);
    g.rotation.y = -0.7;
    const wall = add(new THREE.Mesh(new THREE.BoxGeometry(3.4, 1.0, 0.28), M.washOld), g);
    wall.position.y = 0.5;
    const slab = add(new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.95, 0.16), M.granite), g);
    slab.position.set(0, 0.62, 0.2);
    const pl = add(new THREE.Mesh(new THREE.PlaneGeometry(1.2, 0.66), M.plaqueGrey), g);
    pl.position.set(0, 0.62, 0.3);
    const fin = add(new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.05, 1.5, 6), M.rust), g);
    fin.position.set(1.35, 0.9, 0);
    fin.rotation.z = 0.5;
    const kerb = add(new THREE.Mesh(new THREE.BoxGeometry(4.6, 0.16, 3.0), M.concrete), g);
    kerb.position.y = 0.03;
    return g;
  }

  /* ----------------------------------------- 1911 tower: St Nicholas chapel */
  function buildChapel() {
    const [cx, cz] = L.chapel;
    const g = new THREE.Group();
    const gy = groundY(cx, cz);
    g.position.set(cx, gy - 0.15, cz);
    g.rotation.y = -0.35;

    const baseH = 2.0;
    const base = add(new THREE.Mesh(new THREE.CylinderGeometry(2.32, 2.42, baseH, 6), M.wash), g);
    base.position.y = baseH / 2;
    const plinth = add(new THREE.Mesh(new THREE.CylinderGeometry(2.62, 2.76, 0.3, 6), M.concrete), g);
    plinth.position.y = 0.1;
    const cornice = add(new THREE.Mesh(new THREE.CylinderGeometry(2.86, 2.72, 0.24, 6), M.wash), g);
    cornice.position.y = baseH + 0.12;

    // doorway + plaque
    const doorFrame = add(new THREE.Mesh(new THREE.BoxGeometry(1.24, 1.66, 0.3), M.wash), g);
    doorFrame.position.set(0, 0.9, 2.06);
    const door = add(new THREE.Mesh(new THREE.BoxGeometry(0.98, 1.42, 0.3), M.dark), g);
    door.position.set(0, 0.78, 2.16);
    const pl = add(new THREE.Mesh(new THREE.PlaneGeometry(1.06, 0.5), M.plaque), g);
    pl.position.set(0, 1.75, 2.28);
    // icons glinting inside
    const icon = add(new THREE.Mesh(new THREE.PlaneGeometry(0.3, 0.4), M.brass), g);
    icon.position.set(-0.24, 1.0, 2.0);
    const icon2 = add(new THREE.Mesh(new THREE.PlaneGeometry(0.24, 0.3), new THREE.MeshStandardMaterial({ color: 0x8a6b3a, roughness: 0.6 })), g);
    icon2.position.set(0.22, 0.78, 2.0);

    // the old cast-iron tower top: a short whitewashed drum under a small,
    // patched blue cupola with a gilded cap
    const drumY = baseH + 0.24;
    const drumH = 1.45;
    const drum = add(new THREE.Mesh(new THREE.CylinderGeometry(1.62, 1.74, drumH, 20), M.wash), g);
    drum.position.y = drumY + drumH / 2;
    // blind arches worked into the whitewash all round the drum
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2 + 0.26;
      const arc = add(new THREE.Mesh(new THREE.PlaneGeometry(0.42, 0.72), i === 4 ? M.dark : M.washOld), g);
      arc.position.set(Math.sin(a) * 1.76, drumY + 0.78, Math.cos(a) * 1.76);
      arc.rotation.y = -a;
      const head = add(new THREE.Mesh(new THREE.CircleGeometry(0.21, 10, 0, Math.PI), i === 4 ? M.dark : M.washOld), g);
      head.position.set(Math.sin(a) * 1.765, drumY + 1.14, Math.cos(a) * 1.765);
      head.rotation.y = -a;
    }
    const topRing = add(new THREE.Mesh(new THREE.CylinderGeometry(1.84, 1.78, 0.2, 20), M.wash), g);
    topRing.position.y = drumY + drumH + 0.1;
    const blueBand = add(new THREE.Mesh(new THREE.CylinderGeometry(1.7, 1.7, 0.14, 20), M.blueMetal), g);
    blueBand.position.y = drumY + drumH + 0.24;

    const cupProf = [[1.56, 0], [1.44, 0.2], [1.16, 0.46], [0.82, 0.7], [0.44, 0.86], [0.0, 0.94]]
      .map(([r, y]) => new THREE.Vector2(r, y));
    const dome = add(new THREE.Mesh(new THREE.LatheGeometry(cupProf, 20), M.blueMetal), g);
    const cupY = drumY + drumH + 0.3;
    dome.position.y = cupY;
    const eaves = add(new THREE.Mesh(new THREE.TorusGeometry(1.54, 0.06, 5, 22), M.blueMetal), g);
    eaves.rotation.x = Math.PI / 2;
    eaves.position.y = cupY + 0.03;
    // rust eaten through one panel of the cupola, and a lighter re-painted one
    const patch = add(new THREE.Mesh(new THREE.SphereGeometry(1.505, 12, 8, 1.1, 0.62, 0.22, 0.5), M.rust), g);
    patch.position.y = cupY + 0.02;
    for (const [th, dth, tph, dph] of [[3.4, 0.5, 0.3, 0.42], [4.6, 0.36, 0.5, 0.3], [2.1, 0.3, 0.55, 0.26]]) {
      const pale = add(new THREE.Mesh(new THREE.SphereGeometry(1.512, 10, 7, th, dth, tph, dph), M.bluePale), g);
      pale.position.y = cupY + 0.02;
    }

    // neck + small gilt cap + cross
    const neckY = cupY + 0.9;
    const neck = add(new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.36, 0.4, 12), M.blueMetal), g);
    neck.position.y = neckY + 0.1;
    const capProf = [[0.4, 0], [0.36, 0.16], [0.24, 0.32], [0.1, 0.42], [0.0, 0.46]]
      .map(([r, y]) => new THREE.Vector2(r, y));
    const cap = add(new THREE.Mesh(new THREE.LatheGeometry(capProf, 14), M.brass), g);
    cap.position.y = neckY + 0.3;
    const cross = new THREE.Group();
    cross.position.y = neckY + 0.78;
    g.add(cross);
    const cv = add(new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.82, 0.05), M.iron), cross);
    cv.position.y = 0.34;
    const ch = add(new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.05, 0.05), M.iron), cross);
    ch.position.y = 0.58;
    const cs = add(new THREE.Mesh(new THREE.BoxGeometry(0.13, 0.045, 0.045), M.iron), cross);
    cs.position.set(0, 0.76, 0);
    const cl = add(new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.045, 0.045), M.iron), cross);
    cl.position.set(0, 0.2, 0);
    cl.rotation.z = -0.42;
    const cball = add(new THREE.Mesh(new THREE.SphereGeometry(0.06, 8, 6), M.brass), cross);
    cball.position.y = -0.05;

    // foundations of the first lighthouse, levelled into the ground
    const [rx, rz] = L.chapelRuins;
    const rnd = mulberry32(411);
    const rg = new THREE.Group();
    rg.position.set(rx - cx, groundY(rx, rz) - gy, rz - cz);
    g.add(rg);
    // a stub of wall still standing
    const stub = add(new THREE.Mesh(new THREE.BoxGeometry(2.1, 0.85, 0.55), M.stoneBlock), rg);
    stub.position.set(-0.5, 0.4, -0.7);
    stub.rotation.y = 0.5;
    const stub2 = add(new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.5, 1.5), M.stoneBlock), rg);
    stub2.position.set(0.85, 0.24, 0.15);
    stub2.rotation.y = -0.4;
    for (let i = 0; i < 9; i++) {
      const w = 0.55 + rnd() * 0.8;
      const h = 0.16 + rnd() * 0.2;
      const d = 0.5 + rnd() * 0.7;
      const blk = add(new THREE.Mesh(new THREE.BoxGeometry(w, h, d), rnd() > 0.68 ? M.washOld : M.stoneBlock), rg);
      const a = rnd() * 6.283;
      const r = 0.9 + rnd() * 1.5;
      blk.position.set(Math.sin(a) * r, h * 0.3, Math.cos(a) * r);
      blk.rotation.set((rnd() - 0.5) * 0.22, rnd() * 0.9, (rnd() - 0.5) * 0.22);
    }
    for (let i = 0; i < 6; i++) {
      const br = add(new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.08, 0.11), M.brickRubble), rg);
      br.position.set((rnd() - 0.5) * 2.4, 0.06 + rnd() * 0.2, (rnd() - 0.5) * 2.4);
      br.rotation.y = rnd() * 3;
    }
    return g;
  }

  /* -------------------------------------------------------------- bridge */
  function buildBridge() {
    const [ax, az] = L.bridgeA;
    const [bx, bz] = L.bridgeB;
    const len = Math.hypot(bx - ax, bz - az);
    const ang = Math.atan2(bx - ax, bz - az);
    const g = new THREE.Group();
    g.position.set((ax + bx) / 2, 0, (az + bz) / 2);
    g.rotation.y = ang;
    const half = len / 2;
    const yA = groundY(ax, az) + 0.62;
    const yB = groundY(bx, bz) + 0.62;
    const pitch = Math.atan2(yA - yB, len);
    const deckAt = (z) => yA + ((z + half) / len) * (yB - yA);

    // abutments: concrete heads sunk into each shore
    for (const [s, gy0] of [[-1, groundY(ax, az)], [1, groundY(bx, bz)]]) {
      const top = deckAt(s * half) + 0.25;
      const bot = gy0 - 2.2;
      const ab = add(new THREE.Mesh(new THREE.BoxGeometry(3.6, top - bot, 3.4), M.concrete), g);
      ab.position.set(0, (top + bot) / 2, s * (half + 1.2));
    }

    // plate girders with flanges, rivets and bracing
    const mid = (yA + yB) / 2;
    for (const s of [-1, 1]) {
      const gir = add(new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.92, len), M.rust), g);
      gir.position.set(s * 1.05, mid - 0.62, 0);
      gir.rotation.x = pitch;
      for (const [dy, hgt] of [[-1.08, 0.11], [-0.14, 0.09]]) {
        const fl = add(new THREE.Mesh(new THREE.BoxGeometry(0.34, hgt, len), M.rust), g);
        fl.position.set(s * 1.05, mid + dy, 0);
        fl.rotation.x = pitch;
      }
      for (let i = 0; i < 24; i++) {
        const z = -half + 0.4 + (i / 23) * (len - 0.8);
        for (const s2 of [-1, 1]) {
          const rv = add(new THREE.Mesh(new THREE.SphereGeometry(0.055, 6, 5), M.rust), g);
          rv.position.set(s * 1.15, deckAt(z) - 0.62 + s2 * 0.28, z);
        }
      }
      for (let i = 0; i < Math.round(len / 2.4); i++) {
        const z0 = -half + 0.7 + i * 2.4;
        const dg = add(new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.09, 2.6), M.rust), g);
        dg.position.set(s * 1.05, deckAt(z0) - 0.6, z0 + 1.1);
        dg.rotation.set((i % 2 ? 0.62 : -0.62) + pitch, 0, 0);
      }
    }

    // deck: creosoted planks on the slope
    const nPlank = Math.round(len / 0.42);
    const planks = new THREE.InstancedMesh(new THREE.BoxGeometry(2.3, 0.09, 0.36), M.woodGrey, nPlank);
    planks.castShadow = true;
    planks.receiveShadow = true;
    const q4 = new THREE.Quaternion().setFromEuler(new THREE.Euler(pitch, 0, 0));
    for (let i = 0; i < nPlank; i++) {
      const z = -half + 0.3 + (i / (nPlank - 1)) * (len - 0.6);
      m4.compose(
        vTmp.set(0, deckAt(z) - 0.05 + Math.sin(i * 1.7) * 0.012, z),
        q4,
        sTmp.set(1, 1, 1),
      );
      planks.setMatrixAt(i, m4);
    }
    g.add(planks);

    // railings
    for (const s of [-1, 1]) {
      const nPost = Math.round(len / 1.5);
      const posts = new THREE.InstancedMesh(new THREE.BoxGeometry(0.08, 1.15, 0.08), M.galv, nPost);
      posts.castShadow = true;
      for (let i = 0; i < nPost; i++) {
        const z = -half + 0.35 + (i / (nPost - 1)) * (len - 0.7);
        m4.identity();
        m4.setPosition(s * 1.12, deckAt(z) + 0.52, z);
        posts.setMatrixAt(i, m4);
      }
      g.add(posts);
      for (const yy of [0.58, 1.06]) {
        const rail = add(new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.06, len - 0.2), M.galv), g);
        rail.position.set(s * 1.12, mid + yy, 0);
        rail.rotation.x = pitch;
      }
    }
    // a lamp standard on the island side
    const lampPost = add(new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.08, 3.2, 8), M.iron), g);
    lampPost.position.set(-1.05, deckAt(-half + 1) + 1.6, -half + 1);
    const lampHead = add(new THREE.Mesh(new THREE.SphereGeometry(0.19, 10, 8), M.whiteMetal), g);
    lampHead.position.set(-1.05, deckAt(-half + 1) + 3.25, -half + 1);

    // the causeway hand-rail continuing on the cape side
    for (const s of [-1, 1]) {
      for (let i = 0; i < 5; i++) {
        const post = add(new THREE.Mesh(new THREE.BoxGeometry(0.09, 1.0, 0.09), M.rust), g);
        post.position.set(s * 1.7, groundY(bx, bz) + 0.45, half + 2.2 + i * 1.9);
      }
    }
    return g;
  }

  /* ----------------------------------------------------- quay, jetty, pier */
  function shoreZ(x, from) {
    let z = from;
    for (let i = 0; i < 60 && groundY(x, z) > 0.18; i++) z += 0.8;
    return z;
  }

  function waterSpot(x, z, minDepth = 1.15) {
    for (let i = 0; i < 34; i++) {
      if (world.height(x, z) < -minDepth && pieceSDF(x, z) < -3) return [x, z];
      x -= 0.7;
      z += 1.3;
    }
    return [x, z];
  }

  function buildQuay() {
    const g = new THREE.Group();
    const [qx, qz] = L.quay;
    const gy = Math.max(2.4, groundY(qx, qz));

    // revetment along the shoreline, following it rather than fighting it
    const wallZ = [];
    for (let x = qx - 21; x <= qx + 21; x += 3) wallZ.push([x, shoreZ(x, qz - 4)]);
    for (let i = 0; i < wallZ.length; i++) {
      const [x, z] = wallZ[i];
      const [xn, zn] = wallZ[Math.min(i + 1, wallZ.length - 1)];
      const seg = add(new THREE.Mesh(new THREE.BoxGeometry(3.4, 4.2, 1.5), M.concrete), g);
      seg.position.set(x, gy - 1.85, z + 0.5);
      seg.rotation.y = -Math.atan2(zn - z, xn - x);
      const cap = add(new THREE.Mesh(new THREE.BoxGeometry(3.4, 0.26, 1.9), M.concrete), g);
      cap.position.set(x, gy + 0.13, z + 0.5);
      cap.rotation.y = seg.rotation.y;
    }
    // apron across the harbor flat
    const apron = add(new THREE.Mesh(new THREE.BoxGeometry(42, 0.26, 12), M.concrete), g);
    apron.position.set(qx, gy - 0.02, qz - 1.5);
    apron.rotation.y = 0.07;
    // slipway for the boats
    const slipX = qx - 16;
    const slipZ0 = shoreZ(slipX, qz - 4);
    const ramp = add(new THREE.Mesh(new THREE.BoxGeometry(5.2, 0.32, 13), M.concrete), g);
    ramp.position.set(slipX, gy - 0.75, slipZ0 + 5.2);
    ramp.rotation.set(0.1, 0.05, 0);

    /* ---- the wooden jetty, its deck following the beach down to the water */
    const jx = L.jetty[0];
    const z0 = shoreZ(jx, qz - 4);
    const jLen = 24;
    const z1 = z0 + jLen;
    const deckAt = (z) => Math.max(1.85, groundY(jx, z) + 0.55);
    const nSta = 10;
    for (let i = 0; i < nSta; i++) {
      const z = z0 + (i / (nSta - 1)) * jLen;
      const dy = deckAt(z);
      for (const s of [-1, 1]) {
        const bed = groundY(jx + s * 1.3, z);
        const pile = add(new THREE.Mesh(new THREE.CylinderGeometry(0.21, 0.25, dy - bed + 0.7, 8), M.woodGrey), g);
        pile.position.set(jx + s * 1.35, (dy + bed - 0.7) / 2, z);
      }
      const beam = add(new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.24, 0.3), M.wood), g);
      beam.position.set(jx, dy - 0.22, z);
    }
    const nPl = 62;
    const jd = new THREE.InstancedMesh(new THREE.BoxGeometry(3.3, 0.1, 0.44), M.wood, nPl);
    jd.castShadow = true;
    jd.receiveShadow = true;
    for (let i = 0; i < nPl; i++) {
      const z = z0 - 0.6 + (i / (nPl - 1)) * (jLen + 1.2);
      m4.identity();
      m4.setPosition(jx, deckAt(z), z);
      jd.setMatrixAt(i, m4);
    }
    g.add(jd);
    // walkway from the apron down to the jetty head
    const cw = add(new THREE.Mesh(new THREE.BoxGeometry(11, 0.16, 2.6), M.wood), g);
    cw.position.set(jx - 5.2, deckAt(z0 + 2) - 0.1, z0 + 2);
    cw.rotation.set(0.12, Math.PI / 2, 0);

    /* ---- bollards, fenders, ropes */
    const postGeo = new THREE.CylinderGeometry(0.16, 0.2, 0.62, 8);
    const nB = 12;
    const posts = new THREE.InstancedMesh(postGeo, M.iron, nB);
    posts.castShadow = true;
    const bollards = [];
    for (let i = 0; i < nB; i++) {
      const z = z0 + 2.2 + Math.floor(i / 2) * 3.5;
      const s = i % 2 === 0 ? -1 : 1;
      const y = deckAt(z) + 0.32;
      m4.identity();
      m4.setPosition(jx + s * 1.42, y, z);
      posts.setMatrixAt(i, m4);
      bollards.push(new THREE.Vector3(jx + s * 1.42, y, z));
    }
    g.add(posts);
    for (let i = 0; i < 8; i++) {
      const z = z0 + 3 + i * 2.6;
      const s = i % 2 ? 1 : -1;
      const y = deckAt(z);
      const fend = add(new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.17, 0.85, 8), M.iron), g);
      fend.position.set(jx + s * 1.56, y - 0.75, z);
      const rope = add(new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.85, 4), M.canvasCream), g);
      rope.position.set(fend.position.x, y - 0.25, z);
    }
    // a set of crates and a slipway trolley on the apron
    for (const [cx, cz, rot, cw] of [[qx - 5, qz + 2.2, 0.3, 1.3], [qx - 2.5, qz + 3.6, -0.2, 1.05], [qx + 7, qz + 2.8, 0.8, 1.2], [qx + 10.5, qz + 1.6, 0.15, 0.95]]) {
      const cr = add(new THREE.Mesh(new THREE.BoxGeometry(cw, cw * 0.62, cw * 0.72), M.woodGrey), g);
      cr.position.set(cx, groundY(cx, cz) + cw * 0.3, cz);
      cr.rotation.y = rot;
      const lid = add(new THREE.Mesh(new THREE.BoxGeometry(cw * 1.04, 0.06, cw * 0.76), M.woodGrey), g);
      lid.position.set(cx, groundY(cx, cz) + cw * 0.62, cz);
      lid.rotation.y = rot + 0.04;
    }

    /* ---- mooring buoys out in the bay */
    const buoys = [];
    for (const [bx0, bz0, col] of [[jx - 11, z0 + 9, 0x9d3a2c], [jx + 9, z0 + 14, 0x2f6f5e], [qx - 22, qz + 12, 0xe6e2d8]]) {
      const [bx, bz] = waterSpot(bx0, bz0, 2.2);
      const b = new THREE.Group();
      const body = add(new THREE.Mesh(new THREE.SphereGeometry(0.42, 12, 10), std({ color: col, roughness: 0.6 })), b);
      body.scale.set(1, 1.25, 1);
      const rod = add(new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.7, 5), M.iron), b);
      rod.position.y = 0.85;
      add(new THREE.Mesh(new THREE.TorusGeometry(0.09, 0.03, 4, 8), M.iron), b).position.y = -0.52;
      b.position.set(bx, 0, bz);
      g.add(b);
      buoys.push(b);
      floats.push({ obj: b, x: bx, z: bz, yaw: 0, roll: 0.3, pitch: 0.24, dy: 0.08, phase: bx * 0.3 });
    }
    return { group: g, buoys, bollards, jetty: { x: jx, z0, z1, deckAt } };
  }

  /* --------------------------------------------------------------- boats */
  function hullShape(len, beam) {
    const s = new THREE.Shape();
    s.moveTo(-len / 2, 0);
    s.quadraticCurveTo(-len * 0.46, beam / 2, -len * 0.1, beam * 0.5);
    s.quadraticCurveTo(len * 0.34, beam * 0.46, len / 2, 0);
    s.quadraticCurveTo(len * 0.34, -beam * 0.46, -len * 0.1, -beam * 0.5);
    s.quadraticCurveTo(-len * 0.46, -beam / 2, -len / 2, 0);
    return s;
  }

  function makeBoat({ len = 5.2, beam = 2.0, hull = M.hullWhite, cabin = true, canopy = false, mast = false, name = 'boat' }) {
    const g = new THREE.Group();
    g.name = name;
    const shape = hullShape(len, beam);
    const hullGeo = new THREE.ExtrudeGeometry(shape, {
      depth: 1.0, bevelEnabled: true, bevelThickness: 0.28, bevelSize: 0.24, bevelSegments: 3, steps: 1, curveSegments: 12,
    });
    hullGeo.rotateX(-Math.PI / 2);
    hullGeo.translate(0, 0.05, 0);
    const h = add(new THREE.Mesh(hullGeo, hull), g);
    h.scale.set(1, 0.72, 1);
    // deck
    const deckGeo = new THREE.ExtrudeGeometry(shape, { depth: 0.12, bevelEnabled: false, curveSegments: 12 });
    deckGeo.rotateX(-Math.PI / 2);
    const dk = add(new THREE.Mesh(deckGeo, M.deck), g);
    dk.scale.set(0.86, 1, 0.78);
    dk.position.y = 0.62;
    // rub rail
    const rub = add(new THREE.Mesh(new THREE.ExtrudeGeometry(shape, { depth: 0.09, bevelEnabled: false, curveSegments: 14 }), M.iron), g);
    rub.scale.set(1.005, 1, 1.005);
    rub.position.y = 0.58;
    if (cabin) {
      const cab = add(new THREE.Mesh(new THREE.BoxGeometry(len * 0.3, 0.95, beam * 0.62), M.hullWhite), g);
      cab.position.set(-len * 0.06, 1.1, 0);
      const wind = add(new THREE.Mesh(new THREE.BoxGeometry(len * 0.06, 0.62, beam * 0.5), M.glass), g);
      wind.position.set(len * 0.11, 1.16, 0);
      wind.rotation.z = 0.24;
      const roof = add(new THREE.Mesh(new THREE.BoxGeometry(len * 0.34, 0.1, beam * 0.7), M.hullWhite), g);
      roof.position.set(-len * 0.06, 1.6, 0);
    }
    if (canopy) {
      const roof = add(new THREE.Mesh(new THREE.BoxGeometry(len * 0.56, 0.1, beam * 0.86), M.canvasCream), g);
      roof.position.set(-len * 0.04, 1.75, 0);
      for (const sx of [-1, 1]) {
        for (const sz of [-1, 1]) {
          const leg = add(new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 1.1, 6), M.galv), g);
          leg.position.set(-len * 0.04 + sx * len * 0.24, 1.2, sz * beam * 0.34);
        }
      }
      // rows of seats
      for (let i = 0; i < 4; i++) {
        const seat = add(new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.3, beam * 0.6), std({ color: 0x3c6f96, roughness: 0.8 })), g);
        seat.position.set(-len * 0.22 + i * len * 0.14, 0.8, 0);
      }
    }
    if (mast) {
      const mm = add(new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.075, 5.6, 8), M.galv), g);
      mm.position.set(len * 0.16, 3.4, 0);
      const boom = add(new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 2.6, 6), M.galv), g);
      boom.position.set(len * 0.16 - 1.2, 1.35, 0);
      boom.rotation.z = Math.PI / 2;
      const sailShape = new THREE.Shape();
      sailShape.moveTo(0, 0);
      sailShape.quadraticCurveTo(1.3, 1.4, 0.15, 4.0);
      sailShape.lineTo(0, 4.0);
      const sailGeo = new THREE.ShapeGeometry(sailShape, 10);
      const sail = add(new THREE.Mesh(sailGeo, std({ color: 0xf2efe4, roughness: 0.9, side: THREE.DoubleSide })), g);
      sail.position.set(len * 0.16, 1.35, 0.02);
      sail.scale.set(0.9, 0.8, 1);
    }
    // outboard
    const ob = add(new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.55, 0.28), M.iron), g);
    ob.position.set(-len * 0.5 + 0.15, 0.78, 0);
    const shaft = add(new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.85, 6), M.iron), g);
    shaft.position.set(-len * 0.5 + 0.15, 0.25, 0);
    // fender buoys along the side
    for (let i = 0; i < 3; i++) {
      const f = add(new THREE.Mesh(new THREE.SphereGeometry(0.13, 8, 6), M.canvasCream), g);
      f.position.set(-len * 0.2 + i * len * 0.22, 0.5, beam * 0.46);
    }
    return g;
  }

  function rope(from, to, sag, mat = M.canvasCream) {
    const mid = from.clone().lerp(to, 0.5);
    mid.y -= sag;
    const c = new THREE.CatmullRomCurve3([from, mid, to]);
    const m = new THREE.Mesh(new THREE.TubeGeometry(c, 8, 0.035, 4), mat);
    m.castShadow = true;
    return m;
  }

  function placeBoat(spec, parent) {
    const { x, z, rot = 0, len, beam, hull, cabin, canopy, mast, name } = spec;
    const b = makeBoat({ len, beam, hull, cabin, canopy, mast, name });
    b.position.set(x, 0, z);
    b.rotation.order = 'YXZ';
    b.rotation.y = rot;
    parent.add(b);
    floats.push({ obj: b, x, z, yaw: rot, roll: 0.09, pitch: 0.06, dy: -0.12, phase: x * 0.7 + z * 0.3 });
    return b;
  }

  /* --------------------------------------------------------- village edge */
  function house(w, d, h, roofCol, wallMat) {
    const g = new THREE.Group();
    const walls = add(new THREE.Mesh(new THREE.BoxGeometry(w, h, d), wallMat || M.wash), g);
    walls.position.y = h / 2;
    const roofGeo = new THREE.CylinderGeometry(0.02, Math.hypot(w, d) * 0.56, h * 0.55, 4);
    const roof = add(new THREE.Mesh(roofGeo, std({ color: roofCol, roughness: 0.8 })), g);
    roof.rotation.y = Math.PI / 4;
    roof.position.y = h + h * 0.26;
    roof.scale.set(1, 1, d / w);
    return g;
  }

  function buildVillage() {
    const g = new THREE.Group();
    const rnd = mulberry32(77);
    const spots = [
      [96, -30, 0.4, 6, 5, 3.2, 0xa4452f],
      [106, -22, -0.3, 5, 4, 3.0, 0x7a5f46],
      [112, -34, 0.9, 7, 5, 3.4, 0xb8b2a6],
      [88, -42, -0.8, 5, 4, 2.8, 0xa4452f],
      [118, -12, 0.2, 6, 4.5, 3.0, 0x8a8f94],
      [104, -44, 0.15, 4.5, 4, 2.7, 0xc0553a],
    ];
    for (const [x, z, rot, w, d, h, rc] of spots) {
      const y = world.height(x, z);
      if (y < 1.2) continue;
      const hs = house(w, d, h, rc, rnd() > 0.4 ? M.wash : M.washOld);
      hs.position.set(x, y - 0.2, z);
      hs.rotation.y = rot;
      g.add(hs);
      // founded on a concrete pad cut into the hillside, with a retaining kerb
      const pad = add(new THREE.Mesh(new THREE.BoxGeometry(w + 2.2, 2.0, d + 2.2), M.concreteDark), g);
      pad.position.set(x, y - 0.95, z);
      pad.rotation.y = rot;
      const kerb = add(new THREE.Mesh(new THREE.BoxGeometry(w + 2.5, 0.5, d + 2.5), M.concrete), g);
      kerb.position.set(x, y - 0.05, z);
      kerb.rotation.y = rot;
      // a shed or fence beside it
      if (rnd() > 0.4) {
        const sh = add(new THREE.Mesh(new THREE.BoxGeometry(2.4, 1.6, 1.8), M.woodGrey), g);
        sh.position.set(x + 4.5 * Math.cos(rot), y + 0.7, z + 4.5 * Math.sin(rot));
        sh.rotation.y = rot + 0.3;
      }
    }
    // marine-biology / dolphinarium buildings behind the quay
    const bld = [
      [70, 33, 0.1, 16, 8, 4.2, 0xf0ece0, true],
      [84, 36, 0.05, 11, 7, 3.4, 0xdfe3e6, true],
      [58, 30, 0.12, 8, 6, 3.0, 0xe8e2d2, false],
      [96, 44, 0.0, 13, 6, 3.2, 0xd7dcd8, true],
    ];
    for (const [x, z, rot, w, d, h, col, blueTrim] of bld) {
      const y = world.height(x, z);
      const b = new THREE.Group();
      // level platform cut into the slope
      const slab = add(new THREE.Mesh(new THREE.BoxGeometry(w + 5.0, 2.4, d + 5.0), M.concreteDark), b);
      slab.position.y = -1.05;
      const apron = add(new THREE.Mesh(new THREE.BoxGeometry(w + 5.6, 0.3, d + 5.6), M.concrete), b);
      apron.position.y = 0.0;
      const walls = add(new THREE.Mesh(new THREE.BoxGeometry(w, h, d), std({ map: T.plaster.map, color: col, roughness: 0.9 })), b);
      walls.position.y = h / 2 + 0.14;
      const roof = add(new THREE.Mesh(new THREE.BoxGeometry(w + 0.6, 0.24, d + 0.6), M.galv), b);
      roof.position.y = h + 0.12;
      if (blueTrim) {
        // a blue band along the eaves, the usual Soviet-era trim
        const trim = add(new THREE.Mesh(new THREE.BoxGeometry(w + 0.66, 0.44, d + 0.66), M.blueMetal), b);
        trim.position.y = h - 0.1;
      }
      // rooftop plant, for scale
      const tank = add(new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.42, 0.9, 10), M.galv), b);
      tank.position.set(w * 0.28, h + 0.7, -d * 0.2);
      const vent = add(new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.4, 0.9), M.galv), b);
      vent.position.set(-w * 0.22, h + 0.44, d * 0.14);
      b.position.set(x, y - 0.2, z);
      b.rotation.y = rot;
      g.add(b);
    }
    // the mosaic panel at the quay
    const mosaic = buildMosaicPanel();
    mosaic.position.set(45.5, world.height(45.5, 32.5) - 0.2, 32.5);
    mosaic.rotation.y = -0.05;
    g.add(mosaic);
    return g;
  }

  function buildMosaicPanel() {
    const g = new THREE.Group();
    const c = document.createElement('canvas');
    c.width = 512;
    c.height = 192;
    const x = c.getContext('2d');
    x.fillStyle = '#cdc7bb';
    x.fillRect(0, 0, 512, 192);
    const tile = (cx, cy, w, h, col) => {
      x.fillStyle = col;
      for (let i = 0; i < w; i += 8) {
        for (let j = 0; j < h; j += 8) {
          const k = 0.82 + ((i * 7 + j * 13) % 11) / 40;
          x.globalAlpha = 1;
          x.fillRect(cx + i, cy + j, 7, 7);
          x.fillStyle = `rgba(255,255,255,${(k - 0.9) * 0.4})`;
          x.fillRect(cx + i, cy + j, 7, 3);
          x.fillStyle = col;
        }
      }
    };
    // sea bands
    const bands = ['#3d6f9c', '#6d9dbf', '#a9c9d8', '#e3ded2', '#3d6f9c', '#7fb0c9'];
    bands.forEach((col, i) => tile(0, i * 32, 512, 32, col));
    // rays
    x.save();
    x.globalAlpha = 0.85;
    for (let i = 0; i < 16; i++) {
      const a = (i / 16) * Math.PI * 2;
      x.fillStyle = i % 2 ? '#e8e2d4' : '#c9622f';
      x.beginPath();
      x.moveTo(180, 96);
      x.lineTo(180 + Math.cos(a) * 220, 96 + Math.sin(a) * 160);
      x.lineTo(180 + Math.cos(a + 0.2) * 220, 96 + Math.sin(a + 0.2) * 160);
      x.fill();
    }
    x.restore();
    x.fillStyle = '#f0d7a8';
    x.beginPath();
    x.arc(180, 96, 26, 0, Math.PI * 2);
    x.fill();
    // sailboats
    for (const [bx, by, s] of [[330, 128, 1], [420, 96, 0.7], [96, 150, 0.8]]) {
      x.fillStyle = '#f4f0e4';
      x.beginPath();
      x.moveTo(bx, by - 34 * s);
      x.lineTo(bx + 22 * s, by);
      x.lineTo(bx - 4 * s, by);
      x.fill();
      x.fillStyle = '#2f3f4c';
      x.fillRect(bx - 16 * s, by, 44 * s, 6 * s);
    }
    // name block
    x.fillStyle = '#c9c2b2';
    x.fillRect(208, 138, 96, 44);
    x.fillStyle = '#3b4a52';
    for (let r = 0; r < 3; r++) {
      let px = 214;
      const py = 144 + r * 14;
      const n = 6 + r;
      for (let i = 0; i < n; i++) {
        const w = 6 + ((i * 5 + r) % 4) * 2;
        x.fillRect(px, py, w, 8);
        px += w + 3;
        if (px > 296) break;
      }
    }
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.needsUpdate = true;
    const panel = add(new THREE.Mesh(new THREE.BoxGeometry(11.5, 4.3, 0.45), std({ map: tex, roughness: 0.55, metalness: 0.05 })), g);
    panel.position.y = 2.9;
    const foot = add(new THREE.Mesh(new THREE.BoxGeometry(12.3, 0.8, 1.0), M.concrete), g);
    foot.position.y = 0.4;
    return g;
  }

  /* -------------------------------------------------- dolphinarium pens */
  function buildPens() {
    const g = new THREE.Group();
    const [px, pz] = L.pens;
    const spec = [[0, 0, 5.6], [11.5, 3.5, 4.4], [-2.5, 12.5, 4.8], [10, 15.5, 3.4]];
    for (const [ox, oz, r] of spec) {
      const cx = px + ox;
      const cz = pz + oz;
      const collar = add(new THREE.Mesh(new THREE.TorusGeometry(r, 0.26, 6, 34), M.canvasOrange), g);
      collar.rotation.x = Math.PI / 2;
      collar.position.set(cx, 0.18, cz);
      const net = new THREE.Mesh(new THREE.CylinderGeometry(r, r * 0.94, 3.4, 28, 1, true), M.net);
      net.position.set(cx, -1.6, cz);
      net.renderOrder = 2;
      g.add(net);
      for (let i = 0; i < 8; i++) {
        const a = (i / 8) * Math.PI * 2;
        const float = add(new THREE.Mesh(new THREE.SphereGeometry(0.24, 8, 6), std({ color: i % 2 ? 0xd9542f : 0xeae4d6, roughness: 0.6 })), g);
        float.position.set(cx + Math.sin(a) * r, 0.32, cz + Math.cos(a) * r);
        const post = add(new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 1.1, 5), M.galv), g);
        post.position.set(cx + Math.sin(a) * r, 0.6, cz + Math.cos(a) * r);
      }
    }
    // floating walkway
    for (let i = 0; i < 9; i++) {
      const w = add(new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.16, 3.2), M.woodGrey), g);
      w.position.set(px - 6 + i * 2.5, 0.35, pz - 6);
      const drumA = add(new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 2.2, 8), M.whiteMetal), g);
      drumA.rotation.z = Math.PI / 2;
      drumA.position.set(px - 6 + i * 2.5, -0.1, pz - 7.2);
    }
    const shade = add(new THREE.Mesh(new THREE.BoxGeometry(6, 0.14, 4), M.canvasCream), g);
    shade.position.set(px - 9, 2.4, pz - 6);
    for (const sx of [-1, 1]) {
      for (const sz of [-1, 1]) {
        const leg = add(new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 2.2, 6), M.galv), g);
        leg.position.set(px - 9 + sx * 2.6, 1.3, pz - 6 + sz * 1.6);
      }
    }
    return g;
  }

  function findIsletLanding() {
    for (let a = 0.6; a < 2.5; a += 0.05) {
      for (let r = 6; r < 26; r += 1.5) {
        const x = -40 + Math.cos(a) * r * 1.1;
        const z = 4 + Math.sin(a) * r * 0.7;
        const y = world.height(x, z);
        if (y > 0.45 && y < 1.8 && slopeAt(x, z) < 0.45) return [x, z];
      }
    }
    return null;
  }

  /* ------------------------------------------------------------ assemble */
  group.add(buildLighthouse());
  group.add(buildMast());
  group.add(buildMemorial());
  group.add(buildYakMemorial());
  group.add(buildChapel());
  group.add(buildBridge());
  const quay = buildQuay();
  group.add(quay.group);
  group.add(buildVillage());
  group.add(buildPens());

  // boats: moored along the jetty, on the slipway, and at anchor in the lee of the islet
  const J = quay.jetty;
  const boatSpecs = [
    { x: J.x - 3.2, z: J.z0 + 7.5, rot: 0.04, len: 5.4, beam: 2.1, hull: M.hullWhite, cabin: true, tie: -1 },
    { x: J.x + 3.3, z: J.z0 + 11.0, rot: Math.PI + 0.08, len: 4.8, beam: 1.9, hull: M.hullGreen, cabin: false, tie: 1 },
    { x: J.x - 3.6, z: J.z0 + 17.5, rot: -0.05, len: 7.8, beam: 2.7, hull: M.hullWhite, canopy: true, tie: -1 },
    { x: J.x + 8.5, z: J.z0 + 20.0, rot: Math.PI - 0.28, len: 6.4, beam: 2.3, hull: M.hullWhite, mast: true, tie: 1 },
    { x: L.quay[0] + 13, z: L.quay[1] + 9, rot: 0.55, len: 5.0, beam: 2.0, hull: M.hullBlue, cabin: true },
    { x: 33, z: 30, rot: 1.25, len: 6.8, beam: 2.4, hull: M.hullGreen, canopy: true },
    { x: J.x - 10.5, z: J.z0 + 22.0, rot: 0.95, len: 3.6, beam: 1.5, hull: M.yellow, cabin: false },
  ];
  const boatObjs = [];
  for (const s of boatSpecs) {
    const [wx, wz] = waterSpot(s.x, s.z, 1.25);
    s.x = wx;
    s.z = wz;
    const b = placeBoat(s, group);
    b.userData.spec = s;
    boatObjs.push(b);
    if (s.tie !== undefined) {
      // a line from the nearest bollard to the bow
      let best = null;
      let bd = 1e9;
      for (const boll of quay.bollards) {
        const d = (boll.x - wx) ** 2 + (boll.z - wz) ** 2;
        if (d < bd && (boll.z - wz) * s.tie < 6) {
          bd = d;
          best = boll;
        }
      }
      if (best) {
        const bow = new THREE.Vector3(wx + Math.cos(s.rot) * s.len * 0.42, 0.85, wz - Math.sin(s.rot) * s.len * 0.42);
        group.add(rope(new THREE.Vector3(best.x, best.y + 0.18, best.z), bow, Math.min(0.7, bd * 0.03 + 0.3)));
      }
    }
  }

  // one small boat hauled up on the beach above the slipway
  const rb = makeBoat({ len: 4.2, beam: 1.7, hull: M.woodGrey, cabin: false });
  const rbx = 74;
  let rbz = L.quay[1] - 2;
  for (let i = 0; i < 40 && world.height(rbx, rbz) < 1.0; i++) rbz += 0.8;
  rb.position.set(rbx, world.height(rbx, rbz) + 0.34, rbz);
  rb.rotation.set(0.14, 2.2, -0.1);
  group.add(rb);

  /* ---- a ring of stones where people have sat on the islet's shingle */
  const fire = findIsletLanding();
  if (fire) {
    const [fx, fz] = fire;
    const ring = new THREE.Group();
    ring.position.set(fx, world.height(fx, fz), fz);
    for (let i = 0; i < 9; i++) {
      const a = (i / 9) * Math.PI * 2;
      const st = add(new THREE.Mesh(new THREE.DodecahedronGeometry(0.24 + (i % 3) * 0.05, 0), M.stoneBlock), ring);
      st.position.set(Math.cos(a) * 0.72, 0.1, Math.sin(a) * 0.72);
      st.rotation.set(i * 0.7, i * 1.3, i * 0.4);
    }
    const scorched = add(new THREE.Mesh(new THREE.CircleGeometry(0.62, 14), new THREE.MeshStandardMaterial({ color: 0x2a2622, roughness: 1 })), ring);
    scorched.rotation.x = -Math.PI / 2;
    scorched.position.y = 0.03;
    scorched.receiveShadow = true;
    group.add(ring);
  }

  return { group, floats, animate, materials: M, quayBuoys: quay.buoys, boats: boatObjs };
}
