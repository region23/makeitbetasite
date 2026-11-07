// THE TIDAL LIGHTHOUSE — buildings, jetty, boats, vegetation
// All geometry and textures generated in code.

import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { heightAt, sstep } from './terrain.js';
import { surfaceAt } from './water.js';
import { fbm, mulberry32 } from './noise.js';

// ---------------------------------------------------------------------------
// Procedural canvas textures

function canvasTex(w, h, fn, repeat = 1) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  fn(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(repeat, repeat);
  t.anisotropy = 4;
  return t;
}

function speckle(g, w, h, n, alpha, light) {
  for (let i = 0; i < n; i++) {
    const v = Math.random();
    g.fillStyle = `rgba(${light ? 255 : 20},${light ? 255 : 22},${light ? 250 : 16},${alpha * v})`;
    g.fillRect(Math.random() * w, Math.random() * h, 1 + Math.random() * 2, 1 + Math.random() * 2);
  }
}

const stoneTex = canvasTex(256, 256, (g, w, h) => {
  g.fillStyle = '#7f7a6e'; g.fillRect(0, 0, w, h);
  const rnd = mulberry32(7);
  for (let y = 0; y < 6; y++) {
    const off = (y % 2) * 24;
    for (let x = -1; x < 6; x++) {
      const bw = 40 + rnd() * 16, bh = 34 + rnd() * 10;
      const t = 0.75 + rnd() * 0.4;
      g.fillStyle = `rgb(${125 * t | 0},${119 * t | 0},${106 * t | 0})`;
      g.fillRect(x * 48 + off + 2, y * 44 + 2, bw, bh);
    }
  }
  speckle(g, w, h, 700, 0.10, false);
  speckle(g, w, h, 300, 0.08, true);
}, 2);

const towerTex = canvasTex(256, 512, (g, w, h) => {
  g.fillStyle = '#efe9dc'; g.fillRect(0, 0, w, h);
  // worn red bands
  const bands = [[0.30, 0.42], [0.60, 0.72], [0.885, 0.985]];
  for (const [a, b] of bands) {
    g.fillStyle = '#b5403a'; g.fillRect(0, h * a, w, h * (b - a));
    g.fillStyle = 'rgba(90,20,16,0.25)'; g.fillRect(0, h * b - 4, w, 4);
  }
  // plaster mottling
  for (let i = 0; i < 260; i++) {
    g.fillStyle = `rgba(${170 + Math.random() * 60 | 0},${165 + Math.random() * 55 | 0},${150 + Math.random() * 50 | 0},0.16)`;
    g.beginPath();
    g.ellipse(Math.random() * w, Math.random() * h, 2 + Math.random() * 9, 2 + Math.random() * 6, Math.random() * 3, 0, 7);
    g.fill();
  }
  // grime streaks running down from the bands
  const rnd = mulberry32(31);
  for (const [a] of bands) {
    for (let i = 0; i < 14; i++) {
      const x = rnd() * w, len = 14 + rnd() * 60;
      g.fillStyle = `rgba(70,60,50,${0.05 + rnd() * 0.10})`;
      g.fillRect(x, h * (a + 0.12), 2 + rnd() * 4, len);
    }
  }
  // rust drips at band edges
  for (let i = 0; i < 20; i++) {
    g.fillStyle = `rgba(150,80,40,${0.08 + Math.random() * 0.1})`;
    g.fillRect(Math.random() * w, h * 0.30 + Math.random() * 8, 1.5, 8 + Math.random() * 22);
  }
  speckle(g, w, h, 500, 0.07, false);
});

const plasterTex = canvasTex(256, 256, (g, w, h) => {
  g.fillStyle = '#ecdfc8'; g.fillRect(0, 0, w, h);
  for (let i = 0; i < 420; i++) {
    g.fillStyle = `rgba(${200 + Math.random() * 50 | 0},${188 + Math.random() * 45 | 0},${160 + Math.random() * 40 | 0},0.20)`;
    g.beginPath();
    g.ellipse(Math.random() * w, Math.random() * h, 2 + Math.random() * 10, 2 + Math.random() * 8, Math.random() * 3, 0, 7);
    g.fill();
  }
  // hairline cracks
  g.strokeStyle = 'rgba(90,80,66,0.35)'; g.lineWidth = 1;
  for (let i = 0; i < 5; i++) {
    let x = Math.random() * w, y = Math.random() * h;
    g.beginPath(); g.moveTo(x, y);
    for (let s = 0; s < 6; s++) { x += (Math.random() - 0.5) * 26; y += 8 + Math.random() * 18; g.lineTo(x, y); }
    g.stroke();
  }
  // dirt at the base
  const grad = g.createLinearGradient(0, h, 0, h - 70);
  grad.addColorStop(0, 'rgba(96,84,64,0.4)'); grad.addColorStop(1, 'rgba(96,84,64,0)');
  g.fillStyle = grad; g.fillRect(0, h - 70, w, 70);
  speckle(g, w, h, 380, 0.06, false);
});

const roofTex = canvasTex(256, 256, (g, w, h) => {
  g.fillStyle = '#46505a'; g.fillRect(0, 0, w, h);
  const rnd = mulberry32(5);
  for (let y = 0; y < 8; y++) {
    const off = (y % 2) * 16;
    for (let x = -1; x < 9; x++) {
      const t = 0.8 + rnd() * 0.45;
      g.fillStyle = `rgb(${68 * t | 0},${78 * t | 0},${88 * t | 0})`;
      g.fillRect(x * 32 + off + 1, y * 32 + 1, 30, 30);
    }
  }
  // moss
  for (let i = 0; i < 40; i++) {
    g.fillStyle = `rgba(122,138,95,${0.10 + Math.random() * 0.15})`;
    g.beginPath();
    g.ellipse(Math.random() * w, Math.random() * h, 2 + Math.random() * 5, 1 + Math.random() * 3, 0, 0, 7);
    g.fill();
  }
}, 1);

const woodTex = canvasTex(128, 128, (g, w, h) => {
  g.fillStyle = '#8a6c4e'; g.fillRect(0, 0, w, h);
  for (let i = 0; i < 26; i++) {
    g.strokeStyle = `rgba(60,40,26,${0.10 + Math.random() * 0.16})`;
    g.lineWidth = 0.7 + Math.random();
    g.beginPath();
    const y = Math.random() * h;
    g.moveTo(0, y);
    g.bezierCurveTo(w * 0.3, y + (Math.random() - 0.5) * 8, w * 0.6, y + (Math.random() - 0.5) * 8, w, y + (Math.random() - 0.5) * 6);
    g.stroke();
  }
  speckle(g, w, h, 150, 0.08, false);
});

const copperTex = canvasTex(128, 128, (g, w, h) => {
  g.fillStyle = '#3f8a72'; g.fillRect(0, 0, w, h);
  for (let i = 0; i < 90; i++) {
    const r = Math.random();
    g.fillStyle = r > 0.6 ? 'rgba(111,174,145,0.35)' : r > 0.3 ? 'rgba(122,92,66,0.28)' : 'rgba(52,110,92,0.4)';
    g.beginPath();
    g.ellipse(Math.random() * w, Math.random() * h, 3 + Math.random() * 14, 3 + Math.random() * 12, Math.random() * 3, 0, 7);
    g.fill();
  }
  speckle(g, w, h, 220, 0.1, true);
});

const grassBladeTex = canvasTex(128, 128, (g, w, h) => {
  g.clearRect(0, 0, w, h);
  const rnd = mulberry32(11);
  for (let i = 0; i < 9; i++) {
    const x0 = 12 + i * 13 + (rnd() - 0.5) * 8;
    const tipX = x0 + (rnd() - 0.5) * 30;
    const grad = g.createLinearGradient(0, h, 0, 0);
    grad.addColorStop(0, '#5d7c3e'); grad.addColorStop(1, '#a3bb72');
    g.fillStyle = grad;
    g.beginPath();
    g.moveTo(x0 - 3.2, h);
    g.quadraticCurveTo(x0 - 1.5 + (tipX - x0) * 0.4, h * 0.45, tipX, 4 + rnd() * 22);
    g.quadraticCurveTo(x0 + 2 + (tipX - x0) * 0.4, h * 0.45, x0 + 3.2, h);
    g.fill();
  }
});
grassBladeTex.wrapS = grassBladeTex.wrapT = THREE.ClampToEdgeWrapping;

const flowerTex = canvasTex(64, 64, (g, w, h) => {
  g.clearRect(0, 0, w, h);
  g.strokeStyle = '#6d8f48'; g.lineWidth = 2.5;
  g.beginPath(); g.moveTo(w / 2, h); g.quadraticCurveTo(w / 2 + 4, h * 0.6, w / 2, h * 0.42); g.stroke();
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    g.fillStyle = '#f7f4ee';
    g.beginPath();
    g.ellipse(w / 2 + Math.cos(a) * 7, h * 0.34 + Math.sin(a) * 7, 6, 4, a, 0, 7);
    g.fill();
  }
  g.fillStyle = '#f2cf6c';
  g.beginPath(); g.arc(w / 2, h * 0.34, 4, 0, 7); g.fill();
});
flowerTex.wrapS = flowerTex.wrapT = THREE.ClampToEdgeWrapping;

// ---------------------------------------------------------------------------
// Shared materials

const MAT = {
  stone: new THREE.MeshStandardMaterial({ map: stoneTex, roughness: 0.95 }),
  wood: new THREE.MeshStandardMaterial({ map: woodTex, roughness: 0.9 }),
  woodDark: new THREE.MeshStandardMaterial({ color: 0x5f4632, roughness: 0.92 }),
  rope: new THREE.MeshStandardMaterial({ color: 0x7a6a4d, roughness: 1 }),
  darkMetal: new THREE.MeshStandardMaterial({ color: 0x2f3b33, roughness: 0.6, metalness: 0.4 }),
  copper: new THREE.MeshStandardMaterial({ map: copperTex, roughness: 0.45, metalness: 0.65 }),
  paneWarm: new THREE.MeshStandardMaterial({ color: 0x3a2c1c, emissive: 0xffb761, emissiveIntensity: 1.5, roughness: 0.4 }),
  paneDim: new THREE.MeshStandardMaterial({ color: 0x22303a, emissive: 0xffa95e, emissiveIntensity: 0.9, roughness: 0.4 }),
};

// ---------------------------------------------------------------------------
// Lighthouse

function buildLighthouse(scene, pad) {
  const g = new THREE.Group();
  g.position.set(pad.x, pad.h, pad.z);

  const base = new THREE.Mesh(new THREE.CylinderGeometry(2.05, 2.35, 1.1, 28), MAT.stone);
  base.position.y = 0.55;
  const tower = new THREE.Mesh(new THREE.CylinderGeometry(1.02, 1.5, 6.4, 28),
    new THREE.MeshStandardMaterial({ map: towerTex, roughness: 0.85 }));
  tower.position.y = 4.3;

  // door
  const door = new THREE.Mesh(new THREE.BoxGeometry(0.66, 1.1, 0.22), MAT.woodDark);
  door.position.set(0, 1.05, 1.42);
  const lintel = new THREE.Mesh(new THREE.BoxGeometry(0.86, 0.14, 0.26), MAT.stone);
  lintel.position.set(0, 1.68, 1.42);

  // windows spiralling up the tower
  const winAngles = [0.7, 2.8, 4.9], winHeights = [3.4, 4.9, 6.4];
  for (let i = 0; i < 3; i++) {
    const a = winAngles[i], r = 1.36 - i * 0.09;
    const wx = Math.sin(a) * r, wz = Math.cos(a) * r;
    const frame = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.5, 0.12),
      new THREE.MeshStandardMaterial({ color: 0xd9d2c2, roughness: 0.8 }));
    frame.position.set(wx, winHeights[i], wz); frame.rotation.y = a;
    const pane = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.38, 0.06), MAT.paneWarm);
    pane.position.set(wx * 1.04, winHeights[i], wz * 1.04); pane.rotation.y = a;
    g.add(frame, pane);
  }

  // gallery
  const gallery = new THREE.Mesh(new THREE.CylinderGeometry(1.62, 1.62, 0.14, 28), MAT.darkMetal);
  gallery.position.y = 7.55;
  for (let i = 0; i < 14; i++) {
    const a = (i / 14) * Math.PI * 2;
    const post = new THREE.Mesh(new THREE.CylinderGeometry(0.028, 0.028, 0.55, 6), MAT.darkMetal);
    post.position.set(Math.sin(a) * 1.5, 7.9, Math.cos(a) * 1.5);
    g.add(post);
  }
  const rail = new THREE.Mesh(new THREE.TorusGeometry(1.5, 0.035, 8, 40), MAT.darkMetal);
  rail.rotation.x = Math.PI / 2; rail.position.y = 8.18;

  // lantern room
  const lampGlass = new THREE.Mesh(new THREE.CylinderGeometry(0.92, 0.92, 1.05, 20, 1, true),
    new THREE.MeshStandardMaterial({
      color: 0x776644, emissive: 0xffbe6a, emissiveIntensity: 2.0,
      transparent: true, opacity: 0.62, side: THREE.DoubleSide, roughness: 0.3,
    }));
  lampGlass.position.y = 8.2;
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    const mull = new THREE.Mesh(new THREE.BoxGeometry(0.06, 1.1, 0.06), MAT.darkMetal);
    mull.position.set(Math.sin(a) * 0.93, 8.2, Math.cos(a) * 0.93);
    g.add(mull);
  }
  const roof = new THREE.Mesh(new THREE.ConeGeometry(1.18, 0.95, 20), MAT.copper);
  roof.position.y = 9.2;
  const finial = new THREE.Mesh(new THREE.CylinderGeometry(0.028, 0.028, 0.4, 6), MAT.darkMetal);
  finial.position.y = 9.9;
  const ball = new THREE.Mesh(new THREE.SphereGeometry(0.09, 10, 8), MAT.darkMetal);
  ball.position.y = 10.12;

  const lamp = new THREE.PointLight(0xffc477, 26, 24, 2);
  lamp.position.y = 8.2;

  for (const m of [base, tower, roof]) { m.castShadow = true; m.receiveShadow = true; }
  g.add(base, tower, door, lintel, gallery, rail, lampGlass, roof, finial, ball, lamp);
  scene.add(g);
  return { lampGlass };
}

// ---------------------------------------------------------------------------
// Cottage

function buildCottage(scene, pad) {
  const g = new THREE.Group();
  g.position.set(pad.x, pad.h, pad.z);
  g.rotation.y = Math.atan2(0.8 - pad.x, 13.4 - pad.z); // face the jetty

  const plaster = new THREE.MeshStandardMaterial({ map: plasterTex, roughness: 0.92 });
  const slate = new THREE.MeshStandardMaterial({ map: roofTex, roughness: 0.85 });

  const foundation = new THREE.Mesh(new THREE.BoxGeometry(3.7, 0.5, 2.9), MAT.stone);
  foundation.position.y = 0.25;
  const walls = new THREE.Mesh(new THREE.BoxGeometry(3.4, 1.9, 2.6), plaster);
  walls.position.y = 1.45;

  // gable prism + roof slabs
  const tri = new THREE.Shape();
  tri.moveTo(-1.75, 0); tri.lineTo(1.75, 0); tri.lineTo(0, 1.05); tri.closePath();
  const gableGeo = new THREE.ExtrudeGeometry(tri, { depth: 2.7, bevelEnabled: false });
  gableGeo.translate(0, 0, -1.35);
  const gable = new THREE.Mesh(gableGeo, plaster);
  gable.position.y = 2.4;
  const slope = Math.atan2(1.05, 1.75);
  for (const s of [-1, 1]) {
    const slab = new THREE.Mesh(new THREE.BoxGeometry(2.25, 0.1, 3.55), slate);
    slab.position.set(s * 0.88, 2.94, 0);
    slab.rotation.z = -s * slope;
    slab.castShadow = true;
    g.add(slab);
  }
  const ridge = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.12, 3.6), MAT.darkMetal);
  ridge.position.y = 3.48;
  const chimney = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.9, 0.34), MAT.stone);
  chimney.position.set(0.72, 3.15, -0.5);

  const addWindow = (x, y, z, ry, w = 0.6, h2 = 0.72) => {
    const frame = new THREE.Mesh(new THREE.BoxGeometry(w + 0.14, h2 + 0.14, 0.08),
      new THREE.MeshStandardMaterial({ color: 0xd9d2c2, roughness: 0.8 }));
    const pane = new THREE.Mesh(new THREE.BoxGeometry(w, h2, 0.03), MAT.paneWarm);
    const grp = new THREE.Group();
    grp.add(frame, pane);
    grp.position.set(x, y, z); grp.rotation.y = ry;
    g.add(grp);
    return grp;
  };
  addWindow(-0.85, 1.6, 1.32, 0);
  addWindow(0.85, 1.6, 1.32, 0);
  addWindow(-1.72, 1.6, 0.2, -Math.PI / 2, 0.5, 0.6);

  const door = new THREE.Mesh(new THREE.BoxGeometry(0.64, 1.15, 0.08), MAT.woodDark);
  door.position.set(0, 1.08, 1.32);
  const step = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.13, 0.5), MAT.stone);
  step.position.set(0, 0.32, 1.55);

  // window flower box
  const box = new THREE.Mesh(new THREE.BoxGeometry(0.66, 0.14, 0.2), MAT.woodDark);
  box.position.set(-0.85, 1.14, 1.42);

  // woodpile + barrel
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3 - i; j++) {
      const log = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 0.7, 8), MAT.wood);
      log.rotation.z = Math.PI / 2;
      log.position.set(2.0, 0.62 + i * 0.15, -0.6 + j * 0.2 + i * 0.1);
      log.castShadow = true;
      g.add(log);
    }
  }
  const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.2, 0.36, 12), MAT.wood);
  barrel.position.set(-1.9, 0.68, 1.0);
  barrel.castShadow = true;

  for (const m of [foundation, walls, gable, chimney]) { m.castShadow = true; m.receiveShadow = true; }
  g.add(foundation, walls, gable, ridge, chimney, door, step, box, barrel);
  scene.add(g);
  return g;
}

// ---------------------------------------------------------------------------
// Winding stone stair (cottage -> lighthouse)

function buildStairs(scene) {
  const ctrl = [
    new THREE.Vector3(5.9, 0, 7.4), new THREE.Vector3(4.3, 0, 4.5),
    new THREE.Vector3(1.4, 0, 1.3), new THREE.Vector3(-2.2, 0, -2.0),
    new THREE.Vector3(-5.4, 0, -5.4), new THREE.Vector3(-7.0, 0, -7.2),
  ];
  const curve = new THREE.CatmullRomCurve3(ctrl);
  const len = curve.getLength();
  const n = Math.ceil(len / 0.6);
  const stepGeo = new THREE.BoxGeometry(0.74, 0.14, 0.4);
  const steps = new THREE.InstancedMesh(stepGeo,
    new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.95 }), n);
  steps.castShadow = true; steps.receiveShadow = true;
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler();
  const col = new THREE.Color();
  const rnd = mulberry32(23);
  const pts = [];
  for (let i = 0; i < n; i++) {
    let p = curve.getPointAt(i / (n - 1)).clone();
    const tan = curve.getTangentAt(i / (n - 1));
    const nx = -tan.z, nz = tan.x; // perpendicular
    const wig = Math.sin(i * 0.55) * 0.34;
    p.x += nx * wig; p.z += nz * wig;
    p.y = heightAt(p.x, p.z) + 0.12;
    pts.push(p);
    const p2 = i < n - 1 ? curve.getPointAt((i + 1) / (n - 1)) : p;
    const pitch = -Math.atan2(heightAt(p2.x, p2.z) - heightAt(p.x, p.z), p.distanceTo(new THREE.Vector3(p2.x, 0, p2.z))) * 0.7;
    e.set(pitch, Math.atan2(tan.x, tan.z), 0, 'YXZ');
    q.setFromEuler(e);
    m.compose(p, q, new THREE.Vector3(1, 1, 1));
    steps.setMatrixAt(i, m);
    const t = 0.82 + rnd() * 0.3;
    col.setRGB(0.60 * t, 0.57 * t, 0.51 * t);
    steps.setColorAt(i, col);
  }
  scene.add(steps);
  return pts;
}

// ---------------------------------------------------------------------------
// Jetty, ropes, fishing gear

function buildJetty(scene) {
  const g = new THREE.Group();
  const A = new THREE.Vector3(3.9, 0, 8.7), B = new THREE.Vector3(0.8, 0, 13.4);
  const dir = B.clone().sub(A).normalize();
  const len = A.distanceTo(B);
  const yaw = Math.atan2(dir.x, dir.z);
  const DECK_Y = 0.55;

  const plankMat = new THREE.MeshStandardMaterial({ map: woodTex, roughness: 0.92 });
  const nPl = Math.floor(len / 0.375);
  for (let i = 0; i < nPl; i++) {
    const t = (i + 0.5) / nPl;
    const p = A.clone().lerp(B, t);
    const plank = new THREE.Mesh(new THREE.BoxGeometry(1.38, 0.075, 0.30), plankMat);
    plank.position.set(p.x, DECK_Y, p.z);
    plank.rotation.y = yaw + Math.PI / 2 + (Math.random() - 0.5) * 0.03;
    plank.castShadow = true; plank.receiveShadow = true;
    g.add(plank);
  }
  for (const s of [-1, 1]) {
    const beam = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.16, len), MAT.woodDark);
    const p = A.clone().lerp(B, 0.5);
    const nx = -dir.z * s * 0.55, nz = dir.x * s * 0.55;
    beam.position.set(p.x + nx, DECK_Y - 0.12, p.z + nz);
    beam.rotation.y = yaw;
    g.add(beam);
  }

  // posts down to the seabed + a rope rail on the east side
  const railPts = [];
  for (let i = 0; i <= 4; i++) {
    const t = i / 4;
    for (const s of [-1, 1]) {
      const p = A.clone().lerp(B, t);
      const nx = -dir.z * s * 0.58, nz = dir.x * s * 0.58;
      const px = p.x + nx, pz = p.z + nz;
      const bottom = heightAt(px, pz) - 0.25;
      const h = DECK_Y - bottom + (s > 0 ? 0.22 : 0);
      const post = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.095, h, 8), MAT.woodDark);
      post.position.set(px, bottom + h / 2, pz);
      post.castShadow = true;
      g.add(post);
      if (s > 0) railPts.push(new THREE.Vector3(px, DECK_Y + 0.24, pz));
    }
  }
  const sagPts = [];
  for (let i = 0; i < railPts.length; i++) {
    sagPts.push(railPts[i]);
    if (i < railPts.length - 1) {
      const mid = railPts[i].clone().lerp(railPts[i + 1], 0.5);
      mid.y -= 0.13;
      sagPts.push(mid);
    }
  }
  const rope = new THREE.Mesh(
    new THREE.TubeGeometry(new THREE.CatmullRomCurve3(sagPts), 48, 0.02, 5), MAT.rope);
  g.add(rope);

  // gear on the deck
  const end = B.clone();
  const coil = new THREE.Mesh(new THREE.TorusGeometry(0.17, 0.035, 8, 24), MAT.rope);
  coil.rotation.x = Math.PI / 2;
  coil.position.set(end.x + dir.x * 0.3, DECK_Y + 0.06, end.z + dir.z * 0.3);
  const coil2 = coil.clone();
  coil2.position.y += 0.06; coil2.scale.setScalar(0.85);
  const crate = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.4, 0.44), plankMat);
  crate.position.set(end.x - dir.x * 0.9 - dir.z * 0.3, DECK_Y + 0.27, end.z - dir.z * 0.9 + dir.x * 0.3);
  crate.rotation.y = yaw + 0.3;
  crate.castShadow = true;
  const bucket = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.085, 0.2, 10),
    new THREE.MeshStandardMaterial({ color: 0x7f8a8f, roughness: 0.5, metalness: 0.5 }));
  bucket.position.set(end.x - dir.x * 0.2 - dir.z * 0.42, DECK_Y + 0.17, end.z - dir.z * 0.2 + dir.x * 0.42);
  const rod = new THREE.Mesh(new THREE.CylinderGeometry(0.013, 0.02, 1.15, 6), MAT.woodDark);
  rod.position.set(crate.position.x + 0.35, DECK_Y + 0.5, crate.position.z + 0.1);
  rod.rotation.z = 0.5; rod.rotation.x = 0.25;
  const trap = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.2, 0.38), MAT.woodDark);
  trap.position.set(end.x + dir.x * 0.9 + dir.z * 0.35, DECK_Y + 0.14, end.z + dir.z * 0.9 - dir.x * 0.35);
  trap.rotation.y = yaw - 0.2;
  for (let i = 0; i < 3; i++) {
    const slat = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.02, 0.4), plankMat);
    slat.position.copy(trap.position); slat.position.y += 0.09 - i * 0.08;
    slat.rotation.y = trap.rotation.y;
    g.add(slat);
  }

  // lantern post at the jetty head
  const post = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.05, 1.3, 8), MAT.woodDark);
  post.position.set(end.x + dir.z * 0.5, DECK_Y + 0.65, end.z - dir.x * 0.5);
  const arm = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.045, 0.045), MAT.woodDark);
  arm.position.set(post.position.x - dir.x * 0.15, DECK_Y + 1.24, post.position.z - dir.z * 0.15);
  arm.rotation.y = yaw;
  const lampBox = new THREE.Mesh(new THREE.BoxGeometry(0.13, 0.17, 0.13), MAT.darkMetal);
  lampBox.position.set(arm.position.x - dir.x * 0.14, DECK_Y + 1.12, arm.position.z - dir.z * 0.14);
  const lampPane = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.11, 0.09), MAT.paneWarm);
  lampPane.position.copy(lampBox.position);
  const lampLight = new THREE.PointLight(0xffcf8f, 5, 7, 2);
  lampLight.position.copy(lampBox.position);

  g.add(coil, coil2, crate, bucket, rod, trap, post, arm, lampBox, lampPane, lampLight);
  scene.add(g);
  return { end: B.clone(), railPts };
}

// ---------------------------------------------------------------------------
// Boats

function makeHullGeometry(len = 3.0, beam = 1.15) {
  const N = 15, M = 12;
  const stations = [];
  for (let i = 0; i < N; i++) {
    const t = i / (N - 1);
    const w = Math.pow(Math.sin(Math.PI * Math.pow(t, 0.72)), 0.8);
    const half = beam * 0.5 * (0.30 + 0.70 * w);
    const keel = 0.20 * Math.sin(Math.PI * (0.12 + 0.76 * t));
    const topY = 0.22 + 0.06 * Math.pow(2 * t - 1, 2);
    const row = [];
    for (let j = 0; j <= M; j++) {
      const v = j / M;
      row.push([
        half * Math.cos(v * Math.PI / 2),
        topY - (topY + keel) * Math.pow(Math.sin(v * Math.PI / 2), 1.12),
      ]);
    }
    stations.push({ row, z: (t - 0.5) * len, topY });
  }
  const pos = [], colArr = [], idx = [];
  const push = (x, y, z, sideMul) => {
    pos.push(x * sideMul, y, z);
    return (pos.length / 3) - 1;
  };
  // relative multipliers on the hull base color: darker bottom, pale boot stripe
  const colorFor = (y) => {
    if (y < -0.06) return [0.40, 0.28, 0.28];
    if (y < 0.03) return [1.5, 1.45, 1.25];
    return null;
  };
  // right side strip
  const rightIdx = [];
  for (let i = 0; i < N; i++) {
    const ring = [];
    for (let j = 0; j <= M; j++) {
      const [x, y] = stations[i].row[j];
      const k = push(x, y, stations[i].z, 1);
      const c = colorFor(y);
      if (c) colArr[k * 3] = c[0], colArr[k * 3 + 1] = c[1], colArr[k * 3 + 2] = c[2];
      ring.push(k);
    }
    rightIdx.push(ring);
  }
  for (let i = 0; i < N - 1; i++) {
    for (let j = 0; j < M; j++) {
      idx.push(rightIdx[i][j], rightIdx[i + 1][j], rightIdx[i + 1][j + 1]);
      idx.push(rightIdx[i][j], rightIdx[i + 1][j + 1], rightIdx[i][j + 1]);
    }
  }
  // mirrored left side
  const base = pos.length / 3;
  for (let i = 0; i < N; i++) {
    const ring = [];
    for (let j = 0; j <= M; j++) {
      const [x, y] = stations[i].row[j];
      const k = push(x, y, stations[i].z, -1);
      const c = colorFor(y);
      if (c) colArr[k * 3] = c[0], colArr[k * 3 + 1] = c[1], colArr[k * 3 + 2] = c[2];
      ring.push(k);
    }
    rightIdx.push(ring);
  }
  for (let i = 0; i < N - 1; i++) {
    for (let j = 0; j < M; j++) {
      const a = base + i * (M + 1);
      idx.push(a + j, a + j + 1, a + (M + 1) + j + 1);
      idx.push(a + j, a + (M + 1) + j + 1, a + (M + 1) + j);
    }
  }
  // transom cap (stern)
  const c0 = rightIdx[0], c1 = rightIdx[N];
  for (let j = 0; j < M; j++) {
    idx.push(c0[j], c1[j], c1[j + 1]);
    idx.push(c0[j], c1[j + 1], c0[j + 1]);
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  const colors = new Float32Array(pos.length);
  for (let k = 0; k < pos.length / 3; k++) {
    const c = colArr[k * 3] !== undefined ? colArr.slice(k * 3, k * 3 + 3) : [1, 1, 1];
    const jitter = 0.92 + 0.12 * hash01(k);
    colors[k * 3] = c[0] * jitter; colors[k * 3 + 1] = c[1] * jitter; colors[k * 3 + 2] = c[2] * jitter;
  }
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  geo.setIndex(idx);
  geo.computeVertexNormals();
  return geo;
}

function hash01(k) {
  const n = Math.sin(k * 12.9898) * 43758.5453;
  return n - Math.floor(n);
}

// flat plank deck following the hull outline
function makeDeckGeometry(len = 3.0, beam = 1.15) {
  const N = 15;
  const pos = [], idx = [];
  for (let i = 0; i < N; i++) {
    const t = i / (N - 1);
    const w = Math.pow(Math.sin(Math.PI * Math.pow(t, 0.72)), 0.8);
    const half = beam * 0.5 * (0.30 + 0.70 * w) * 0.94;
    const y = 0.22 + 0.06 * Math.pow(2 * t - 1, 2) - 0.035;
    pos.push(-half, y, (t - 0.5) * len, half, y, (t - 0.5) * len);
  }
  for (let i = 0; i < N - 1; i++) {
    const a = i * 2;
    idx.push(a, a + 2, a + 3, a, a + 3, a + 1);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setIndex(idx);
  geo.computeVertexNormals();
  return geo;
}

function makeBoat(scene, { hullColor, x, z, yaw, wheelhouse }) {
  const g = new THREE.Group();
  g.position.set(x, 0, z);
  g.rotation.y = yaw;

  const hullMat = new THREE.MeshStandardMaterial({ color: hullColor, vertexColors: true, roughness: 0.7 });
  const hull = new THREE.Mesh(makeHullGeometry(), hullMat);
  hull.castShadow = true;
  const deck = new THREE.Mesh(makeDeckGeometry(), MAT.wood);
  g.add(hull, deck);

  // gunwale rub rail
  const rimPts = [];
  for (let i = 0; i <= 12; i++) {
    const t = i / 12;
    const w = Math.pow(Math.sin(Math.PI * Math.pow(t, 0.72)), 0.8);
    const half = 1.15 * 0.5 * (0.30 + 0.70 * w) + 0.015;
    const y = 0.22 + 0.06 * Math.pow(2 * t - 1, 2);
    rimPts.push(new THREE.Vector3(half, y, (t - 0.5) * 3.0));
  }
  const rimPts2 = rimPts.slice().reverse().map((p) => new THREE.Vector3(-p.x, p.y, p.z));
  const rim = new THREE.Mesh(
    new THREE.TubeGeometry(new THREE.CatmullRomCurve3([...rimPts, ...rimPts2], true), 96, 0.032, 6), MAT.woodDark);
  g.add(rim);

  // benches
  for (const bz of [-0.55, 0.35]) {
    const bench = new THREE.Mesh(new THREE.BoxGeometry(0.86, 0.05, 0.2), MAT.wood);
    bench.position.set(0, 0.22, bz);
    g.add(bench);
  }

  if (wheelhouse) {
    const wh = new THREE.Mesh(new THREE.BoxGeometry(0.78, 0.6, 0.72), MAT.wood);
    wh.position.set(0, 0.5, 0.55);
    const roof = new THREE.Mesh(new THREE.BoxGeometry(0.88, 0.05, 0.82), MAT.woodDark);
    roof.position.set(0, 0.82, 0.55);
    const win = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.28, 0.03), MAT.paneDim);
    win.position.set(0, 0.55, 0.92);
    const pipe = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.4, 6), MAT.darkMetal);
    pipe.position.set(0.28, 0.95, 0.75);
    for (const m of [wh, roof]) m.castShadow = true;
    g.add(wh, roof, win, pipe);
  } else {
    // oars + fish crate
    const oar = new THREE.Mesh(new THREE.CylinderGeometry(0.016, 0.016, 1.5, 6), MAT.wood);
    oar.rotation.z = Math.PI / 2; oar.rotation.y = 0.12;
    oar.position.set(0.05, 0.26, -0.1);
    const crate = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.24, 0.3), MAT.woodDark);
    crate.position.set(-0.1, 0.33, -0.85);
    g.add(oar, crate);
  }
  scene.add(g);
  return g;
}

function makeRope(scene, a, b, sag = 0.22) {
  const mid = a.clone().lerp(b, 0.5); mid.y -= sag;
  const curve = new THREE.QuadraticBezierCurve3(a, mid, b);
  const rope = new THREE.Mesh(new THREE.TubeGeometry(curve, 16, 0.02, 5), MAT.rope);
  scene.add(rope);
  return rope;
}

// ---------------------------------------------------------------------------
// Grass, flowers, boulders

function scatterVegetation(scene, stairPts, pads) {
  const rnd = mulberry32(99);
  const nearPath = (x, z, dmin) => {
    for (const p of stairPts) if (Math.hypot(p.x - x, p.z - z) < dmin) return true;
    return false;
  };
  const ok = (x, z, h) => h > 1.1
    && !pads.some((p) => Math.hypot(p.x - x, p.z - z) < p.r + 0.7)
    && !nearPath(x, z, 0.95);

  // grass tufts: two crossed alpha planes, wind-swayed
  const blade = new THREE.PlaneGeometry(0.55, 0.55);
  blade.translate(0, 0.27, 0);
  const blade2 = blade.clone().rotateY(Math.PI / 2);
  const tuftGeo = mergeGeometries([blade, blade2]);
  const tufts = [];
  for (let i = 0; i < 5200 && tufts.length < 460; i++) {
    const x = (rnd() - 0.5) * 46, z = (rnd() - 0.5) * 46;
    const h = heightAt(x, z);
    if (!ok(x, z, h)) continue;
    const dx = heightAt(x + 0.4, z) - heightAt(x - 0.4, z);
    const dz = heightAt(x, z + 0.4) - heightAt(x, z - 0.4);
    if (Math.hypot(dx, dz) > 0.62) continue;
    if (fbm(x * 0.4 + 21, z * 0.4 + 13, 3) < 0.42) continue;
    if (fbm(x * 0.17 + 50, z * 0.17 + 9, 3) < 0.36) continue; // clump into patches
    tufts.push([x, h - 0.03, z, 0.6 + rnd() * 0.8]);
  }
  const grassMat = new THREE.MeshStandardMaterial({
    map: grassBladeTex, alphaTest: 0.45, side: THREE.DoubleSide, roughness: 1,
  });
  const timeU = { value: 0 };
  grassMat.onBeforeCompile = (sh) => {
    sh.uniforms.uTime = timeU;
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nuniform float uTime;')
      .replace('#include <begin_vertex>', /* glsl */`#include <begin_vertex>
        vec3 ipos = vec3(instanceMatrix[3][0], instanceMatrix[3][1], instanceMatrix[3][2]);
        float ph = ipos.x * 0.7 + ipos.z * 0.9;
        float gust = 0.6 + 0.4 * sin(uTime * 0.5 + ipos.x * 0.15);
        float swy = pow(max(uv.y, 0.0), 1.6);
        transformed.x += swy * 0.10 * gust * sin(uTime * 2.1 + ph);
        transformed.z += swy * 0.05 * gust * cos(uTime * 1.7 + ph * 1.3);`);
  };
  const grass = new THREE.InstancedMesh(tuftGeo, grassMat, tufts.length);
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), col = new THREE.Color();
  tufts.forEach(([x, y, z, s], i) => {
    q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), rnd() * Math.PI * 2);
    m.compose(new THREE.Vector3(x, y, z), q, new THREE.Vector3(s, s, s));
    grass.setMatrixAt(i, m);
    const dry = rnd() > 0.78;
    col.setHSL(0.24 + rnd() * 0.04, dry ? 0.28 : 0.38, dry ? 0.52 : 0.40);
    grass.setColorAt(i, col);
  });
  scene.add(grass);

  // flowers
  const flowerGeo = new THREE.PlaneGeometry(0.2, 0.2);
  flowerGeo.translate(0, 0.1, 0);
  const flowers = [];
  for (let i = 0; i < 4200 && flowers.length < 64; i++) {
    const x = (rnd() - 0.5) * 40, z = (rnd() - 0.5) * 40;
    const h = heightAt(x, z);
    if (!ok(x, z, h) || h < 1.3) continue;
    if (fbm(x * 0.4 + 21, z * 0.4 + 13, 3) < 0.5) continue;
    flowers.push([x, h - 0.02, z]);
  }
  const flowerMat = new THREE.MeshStandardMaterial({
    map: flowerTex, alphaTest: 0.4, side: THREE.DoubleSide, roughness: 1,
  });
  flowerMat.onBeforeCompile = (sh) => {
    sh.uniforms.uTime = timeU;
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nuniform float uTime;')
      .replace('#include <begin_vertex>', /* glsl */`#include <begin_vertex>
        vec3 ipos = vec3(instanceMatrix[3][0], instanceMatrix[3][1], instanceMatrix[3][2]);
        float ph = ipos.x * 0.7 + ipos.z * 0.9;
        float swy = pow(max(uv.y, 0.0), 1.4);
        transformed.x += swy * 0.05 * sin(uTime * 2.4 + ph);`);
  };
  const fl = new THREE.InstancedMesh(flowerGeo, flowerMat, flowers.length);
  flowers.forEach(([x, y, z], i) => {
    q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), rnd() * Math.PI);
    m.compose(new THREE.Vector3(x, y, z), q, new THREE.Vector3(1, 1, 1));
    fl.setMatrixAt(i, m);
    col.setHex(rnd() > 0.6 ? 0xf2c8d8 : 0xfaf6ec);
    fl.setColorAt(i, col);
  });
  scene.add(fl);

  // boulders for silhouette interest
  const rockMat = new THREE.MeshStandardMaterial({ color: 0x7b7568, roughness: 0.98 });
  const taken = [];
  for (let i = 0; i < 900 && taken.length < 9; i++) {
    const x = (rnd() - 0.5) * 44, z = (rnd() - 0.5) * 44;
    const h = heightAt(x, z);
    if (h < 1.6 || h > 6.5) continue;
    if (taken.some(([tx, tz]) => Math.hypot(tx - x, tz - z) < 4.5)) continue;
    taken.push([x, z]);
    const geo = new THREE.IcosahedronGeometry(1, 1);
    const pa = geo.attributes.position;
    for (let v = 0; v < pa.count; v++) {
      const vx = pa.getX(v), vy = pa.getY(v), vz = pa.getZ(v);
      const n = 0.72 + 0.55 * fbm(vx * 2 + i * 7, vz * 2 + vy * 2, 2);
      pa.setXYZ(v, vx * n, vy * n * 0.72, vz * n);
    }
    geo.computeVertexNormals();
    const rock = new THREE.Mesh(geo, rockMat);
    const s = 0.45 + rnd() * 0.75;
    rock.scale.setScalar(s);
    rock.position.set(x, h + s * 0.18, z);
    rock.rotation.y = rnd() * Math.PI * 2;
    rock.castShadow = true; rock.receiveShadow = true;
    scene.add(rock);
  }

  return { timeU };
}

// ---------------------------------------------------------------------------

export function buildProps(scene, terrain, water) {
  const [lhPad, cotPad] = terrain.PADS;
  const lighthouse = buildLighthouse(scene, lhPad);
  buildCottage(scene, cotPad);
  const stairPts = buildStairs(scene);
  const jetty = buildJetty(scene);

  // boats + mooring ropes + buoys
  const boats = [
    { def: { hullColor: 0xb0443c, x: -0.6, z: 14.8, yaw: 0.25, wheelhouse: false }, s: { y: 0, rx: 0, rz: 0 } },
    { def: { hullColor: 0x2e6f8e, x: 2.0, z: 15.4, yaw: -0.45, wheelhouse: true }, s: { y: 0, rx: 0, rz: 0 } },
  ].map((b) => ({ ...b, mesh: makeBoat(scene, b.def) }));

  const post0 = jetty.railPts[0], postN = jetty.railPts[jetty.railPts.length - 1];
  makeRope(scene, new THREE.Vector3(boats[0].def.x - Math.sin(boats[0].def.yaw) * 1.4, 0.30, boats[0].def.z - Math.cos(boats[0].def.yaw) * 1.4), post0.clone().setY(0.72));
  makeRope(scene, new THREE.Vector3(boats[1].def.x + Math.sin(boats[1].def.yaw) * 1.4, 0.30, boats[1].def.z + Math.cos(boats[1].def.yaw) * 1.4), postN.clone().setY(0.72), 0.28);

  const buoys = [[-2.8, 16.2], [3.8, 16.8]].map(([x, z], i) => {
    const g = new THREE.Group();
    const top = new THREE.Mesh(new THREE.SphereGeometry(0.13, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2),
      new THREE.MeshStandardMaterial({ color: 0xc23b30, roughness: 0.6 }));
    const bot = new THREE.Mesh(new THREE.SphereGeometry(0.13, 12, 8, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2),
      new THREE.MeshStandardMaterial({ color: 0xefe9dc, roughness: 0.6 }));
    const ant = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.22, 5), MAT.darkMetal);
    ant.position.y = 0.2;
    g.add(top, bot, ant);
    g.position.set(x, 0, z);
    // mooring line down to the seabed
    const bed = heightAt(x, z);
    const lineLen = -bed + 0.05;
    const line = new THREE.Mesh(new THREE.CylinderGeometry(0.011, 0.011, lineLen, 5), MAT.rope);
    line.position.set(x, bed + lineLen / 2, z);
    scene.add(g, line);
    return { mesh: g, phase: i * 2.1 };
  });

  const veg = scatterVegetation(scene, stairPts, terrain.PADS);

  return {
    update(t, dt) {
      veg.timeU.value = t;
      lighthouse.lampGlass.material.emissiveIntensity = 1.9 + 0.22 * Math.sin(t * 2.2);

      for (const b of boats) {
        const { x, z, yaw } = b.def;
        const fwd = [Math.sin(yaw), Math.cos(yaw)];
        const bow = surfaceAt(x + fwd[0] * 1.2, z + fwd[1] * 1.2, t);
        const stern = surfaceAt(x - fwd[0] * 1.2, z - fwd[1] * 1.2, t);
        const port = surfaceAt(x - fwd[1] * 0.5, z + fwd[0] * 0.5, t);
        const star = surfaceAt(x + fwd[1] * 0.5, z - fwd[0] * 0.5, t);
        const y = (bow.y + stern.y) * 0.5 * 0.85;
        const pitch = Math.atan2(bow.y - stern.y, 2.4) * 0.8;
        const roll = Math.atan2(port.y - star.y, 1.0) * 0.8;
        const k = 1 - Math.exp(-dt * 4);
        b.s.y += (y - b.s.y) * k;
        b.s.rx += (pitch - b.s.rx) * k;
        b.s.rz += (roll - b.s.rz) * k;
        b.mesh.position.set(x + Math.sin(t * 0.3 + x) * 0.04, b.s.y, z + Math.cos(t * 0.26 + z) * 0.04);
        b.mesh.rotation.set(b.s.rx, yaw + Math.sin(t * 0.2 + z) * 0.02, b.s.rz, 'YXZ');
      }

      for (const b of buoys) {
        const w = surfaceAt(b.mesh.position.x, b.mesh.position.z, t);
        b.mesh.position.y = w.y * 0.9;
        b.mesh.rotation.z = w.gx * 0.5 + Math.sin(t * 1.1 + b.phase) * 0.1;
        b.mesh.rotation.x = w.gz * 0.5 + Math.cos(t * 0.9 + b.phase) * 0.1;
      }
    },
  };
}
