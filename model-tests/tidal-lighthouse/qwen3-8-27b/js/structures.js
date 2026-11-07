// structures.js — lighthouse, cottage, winding stair, jetty, moored boats,
// ropes and fishing equipment. All materials use procedural canvas textures.

import * as THREE from 'three';
import { heightAt, HEADLAND, HARBOR, mulberry32, sstep } from './terrain.js';
import { canvasTexture } from './island.js';

const rngGlobal = mulberry32(1234);

// ---------------- textures ----------------
function lighthouseTexture() {
  return canvasTexture(512, 1024, (ctx, w, h) => {
    const rng = mulberry32(11);
    const g = ctx.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, '#f4efe6');
    g.addColorStop(0.7, '#eae3d5');
    g.addColorStop(1, '#d9d0bf');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
    // red bands
    const band = (y0, y1) => {
      const bg = ctx.createLinearGradient(0, y0, 0, y1);
      bg.addColorStop(0, '#b8432e');
      bg.addColorStop(0.5, '#a83a28');
      bg.addColorStop(1, '#93321f');
      ctx.fillStyle = bg;
      ctx.fillRect(0, y0, w, y1 - y0);
      // faded patches
      for (let i = 0; i < 90; i++) {
        ctx.fillStyle = `rgba(235,225,205,${0.03 + rng() * 0.07})`;
        ctx.fillRect(rng() * w, y0 + rng() * (y1 - y0), 6 + rng() * 30, 4 + rng() * 16);
      }
      // banded wear at edges
      ctx.fillStyle = 'rgba(90,60,45,0.18)';
      ctx.fillRect(0, y0, w, 3);
      ctx.fillRect(0, y1 - 3, w, 3);
    };
    band(h * 0.26, h * 0.44);
    band(h * 0.58, h * 0.76);
    // vertical grime streaks
    for (let i = 0; i < 34; i++) {
      const x = rng() * w, wd = 3 + rng() * 15, a = 0.03 + rng() * 0.10;
      const sg = ctx.createLinearGradient(0, h * 0.15, 0, h);
      sg.addColorStop(0, 'rgba(88,74,56,0)');
      sg.addColorStop(1, `rgba(88,74,56,${a})`);
      ctx.fillStyle = sg;
      ctx.fillRect(x, h * 0.15, wd, h * 0.85);
    }
    // base staining
    const bg = ctx.createLinearGradient(0, h * 0.82, 0, h);
    bg.addColorStop(0, 'rgba(70,60,45,0)');
    bg.addColorStop(1, 'rgba(70,60,45,0.30)');
    ctx.fillStyle = bg;
    ctx.fillRect(0, h * 0.82, w, h * 0.18);
    for (let i = 0; i < 2600; i++) {
      ctx.fillStyle = rng() > 0.5 ? 'rgba(255,250,240,0.05)' : 'rgba(60,50,40,0.05)';
      ctx.fillRect(rng() * w, rng() * h, 1.5, 1.5);
    }
  });
}

function rockTexture(seed = 21) {
  return canvasTexture(512, 512, (ctx, w, h) => {
    const rng = mulberry32(seed);
    ctx.fillStyle = '#7b7468';
    ctx.fillRect(0, 0, w, h);
    for (let i = 0; i < 260; i++) {
      const l = 40 + rng() * 50;
      ctx.fillStyle = `hsla(${28 + rng() * 14}, ${6 + rng() * 10}%, ${l}%, ${0.10 + rng() * 0.16})`;
      ctx.beginPath();
      ctx.ellipse(rng() * w, rng() * h, 4 + rng() * 26, 3 + rng() * 18, rng() * 3, 0, Math.PI * 2);
      ctx.fill();
    }
    for (let i = 0; i < 70; i++) {
      ctx.strokeStyle = `rgba(40,36,30,${0.10 + rng() * 0.12})`;
      ctx.lineWidth = 1 + rng() * 1.5;
      const x = rng() * w, y = rng() * h;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + (rng() - 0.5) * 120, y + (rng() - 0.5) * 120);
      ctx.stroke();
    }
    for (let i = 0; i < 3000; i++) {
      ctx.fillStyle = rng() > 0.5 ? 'rgba(255,250,235,0.05)' : 'rgba(30,26,20,0.06)';
      ctx.fillRect(rng() * w, rng() * h, 1.6, 1.6);
    }
  });
}

function plasterTexture(seed = 31, base = '#e9dfc9') {
  return canvasTexture(512, 512, (ctx, w, h) => {
    const rng = mulberry32(seed);
    ctx.fillStyle = base;
    ctx.fillRect(0, 0, w, h);
    for (let i = 0; i < 46; i++) {
      ctx.fillStyle = `rgba(120,100,70,${0.02 + rng() * 0.05})`;
      ctx.beginPath();
      ctx.ellipse(rng() * w, rng() * h, 20 + rng() * 70, 16 + rng() * 60, rng() * 3, 0, Math.PI * 2);
      ctx.fill();
    }
    for (let i = 0; i < 20; i++) { // run streaks under openings
      const x = rng() * w;
      const sg = ctx.createLinearGradient(0, h * 0.3, 0, h);
      sg.addColorStop(0, 'rgba(90,75,52,0)');
      sg.addColorStop(1, `rgba(90,75,52,${0.05 + rng() * 0.08})`);
      ctx.fillStyle = sg;
      ctx.fillRect(x, h * 0.3, 4 + rng() * 14, h * 0.7);
    }
    // base staining
    const bg = ctx.createLinearGradient(0, h * 0.8, 0, h);
    bg.addColorStop(0, 'rgba(70,58,42,0)');
    bg.addColorStop(1, 'rgba(70,58,42,0.22)');
    ctx.fillStyle = bg;
    ctx.fillRect(0, h * 0.8, w, h * 0.2);
    for (let i = 0; i < 2000; i++) {
      ctx.fillStyle = rng() > 0.5 ? 'rgba(255,250,235,0.05)' : 'rgba(60,50,40,0.04)';
      ctx.fillRect(rng() * w, rng() * h, 1.5, 1.5);
    }
  });
}

function slateTexture() {
  return canvasTexture(512, 512, (ctx, w, h) => {
    const rng = mulberry32(33);
    ctx.fillStyle = '#6a7480';
    ctx.fillRect(0, 0, w, h);
    const rows = 10, cols = 5;
    for (let r = 0; r < rows; r++) {
      const y = r * h / rows;
      ctx.fillStyle = `rgba(20,24,30,${0.35 + rng() * 0.2})`;
      ctx.fillRect(0, y, w, 2.5);
      const off = (r % 2) * (w / cols / 2);
      for (let cIdx = -1; cIdx <= cols; cIdx++) {
        const x = cIdx * w / cols + off;
        ctx.fillStyle = 'rgba(20,24,30,0.4)';
        ctx.fillRect(x, y, 2, h / rows);
        const l = 30 + rng() * 16;
        ctx.fillStyle = `hsla(210, 9%, ${l}%, 0.5)`;
        ctx.fillRect(x + 2, y + 2.5, w / cols - 2, h / rows - 5);
      }
    }
    // moss
    for (let i = 0; i < 26; i++) {
      ctx.fillStyle = `rgba(96,118,72,${0.10 + rng() * 0.22})`;
      ctx.beginPath();
      ctx.ellipse(rng() * w, rng() * h, 4 + rng() * 14, 3 + rng() * 10, rng() * 3, 0, Math.PI * 2);
      ctx.fill();
    }
  });
}

function copperTexture() {
  return canvasTexture(256, 256, (ctx, w, h) => {
    const rng = mulberry32(37);
    const g = ctx.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, '#c07a3e');
    g.addColorStop(0.55, '#a5622f');
    g.addColorStop(1, '#8c5226');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
    for (let i = 0; i < 14; i++) { // verdigris
      ctx.fillStyle = `rgba(109,143,125,${0.16 + rng() * 0.3})`;
      ctx.beginPath();
      ctx.ellipse(rng() * w, h * 0.45 + rng() * h * 0.55, 6 + rng() * 26, 5 + rng() * 18, rng() * 3, 0, Math.PI * 2);
      ctx.fill();
    }
    for (let i = 0; i < 30; i++) {
      ctx.strokeStyle = `rgba(60,35,15,${0.10 + rng() * 0.12})`;
      ctx.lineWidth = 1;
      const x = rng() * w;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x + (rng() - 0.5) * 10, h);
      ctx.stroke();
    }
  });
}

function woodTexture(seed = 41, base = '#96795a') {
  return canvasTexture(512, 512, (ctx, w, h) => {
    const rng = mulberry32(seed);
    ctx.fillStyle = base;
    ctx.fillRect(0, 0, w, h);
    for (let i = 0; i < 64; i++) {
      ctx.strokeStyle = `rgba(50,36,22,${0.05 + rng() * 0.12})`;
      ctx.lineWidth = 0.8 + rng() * 2.2;
      const x = rng() * w;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      for (let y = 0; y <= h; y += 32) ctx.lineTo(x + Math.sin(y * 0.05 + i) * 6 + (rng() - 0.5) * 8, y);
      ctx.stroke();
    }
    for (let i = 0; i < 7; i++) { // knots
      ctx.fillStyle = 'rgba(45,32,18,0.5)';
      ctx.beginPath();
      ctx.ellipse(rng() * w, rng() * h, 4 + rng() * 7, 2.5 + rng() * 4, rng() * 3, 0, Math.PI * 2);
      ctx.fill();
    }
    // weathered grey wash
    const g = ctx.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, 'rgba(190,185,175,0.30)');
    g.addColorStop(0.5, 'rgba(190,185,175,0.10)');
    g.addColorStop(1, 'rgba(60,50,38,0.18)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
  });
}

// ---------------- lighthouse ----------------
function buildLighthouse(scene, lights) {
  const g = new THREE.Group();
  const hx = HEADLAND.x, hz = HEADLAND.z;
  const groundY = heightAt(hx, hz);
  g.position.set(hx, groundY, hz);

  const rockTex = rockTexture();
  // rocky pedestal
  const ped = new THREE.Mesh(
    new THREE.CylinderGeometry(2.5, 2.9, 0.8, 10),
    new THREE.MeshStandardMaterial({ map: rockTex, roughness: 0.95, color: 0x9a9184 }));
  ped.position.y = 0.25;
  ped.castShadow = ped.receiveShadow = true;
  g.add(ped);

  // stone foundation ring
  const found = new THREE.Mesh(
    new THREE.CylinderGeometry(1.95, 2.15, 1.0, 12),
    new THREE.MeshStandardMaterial({ map: rockTex, roughness: 0.95, color: 0xa89c8c }));
  found.position.y = 1.15;
  found.castShadow = found.receiveShadow = true;
  g.add(found);

  // tower with weathered red-white plaster
  const tower = new THREE.Mesh(
    new THREE.CylinderGeometry(1.05, 1.52, 6.6, 28),
    new THREE.MeshStandardMaterial({ map: lighthouseTexture(), roughness: 0.82 }));
  tower.position.y = 4.5;
  tower.castShadow = tower.receiveShadow = true;
  g.add(tower);

  // door (south face, toward the stair)
  const doorShape = new THREE.Shape();
  doorShape.moveTo(-0.34, 0); doorShape.lineTo(0.34, 0);
  doorShape.lineTo(0.34, 0.95); doorShape.quadraticCurveTo(0, 1.28, -0.34, 0.95);
  const door = new THREE.Mesh(
    new THREE.ShapeGeometry(doorShape),
    new THREE.MeshStandardMaterial({ color: 0x4a3524, roughness: 0.9 }));
  door.position.set(0.15, 1.6, 1.56);
  door.rotation.y = Math.atan2(0.15, 1.56);
  g.add(door);
  // small window above the door
  const win = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.44, 0.1),
    new THREE.MeshStandardMaterial({ color: 0x2e3a44, roughness: 0.4, metalness: 0.2 }));
  win.position.set(0.15, 3.4, 1.44);
  win.rotation.y = Math.atan2(0.15, 1.44);
  g.add(win);

  // gallery deck + railings
  const deckMat = new THREE.MeshStandardMaterial({ map: rockTex, color: 0x8d8478, roughness: 0.9 });
  const deck = new THREE.Mesh(new THREE.CylinderGeometry(1.92, 1.92, 0.2, 20), deckMat);
  deck.position.y = 7.9;
  deck.castShadow = true;
  g.add(deck);
  const lip = new THREE.Mesh(new THREE.TorusGeometry(1.92, 0.07, 8, 28), deckMat);
  lip.rotation.x = Math.PI / 2;
  lip.position.y = 8.0;
  g.add(lip);
  const postMat = new THREE.MeshStandardMaterial({ color: 0x3a352e, roughness: 0.7, metalness: 0.35 });
  const postGeo = new THREE.CylinderGeometry(0.035, 0.035, 0.62, 6);
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * Math.PI * 2;
    const post = new THREE.Mesh(postGeo, postMat);
    post.position.set(Math.cos(a) * 1.78, 8.36, Math.sin(a) * 1.78);
    post.castShadow = true;
    g.add(post);
  }
  const rail = new THREE.Mesh(new THREE.TorusGeometry(1.78, 0.04, 8, 32), postMat);
  rail.rotation.x = Math.PI / 2;
  rail.position.y = 8.66;
  g.add(rail);

  // lantern room
  const glassMat = new THREE.MeshPhongMaterial({
    color: 0xdcecef, transparent: true, opacity: 0.34, shininess: 90,
    emissive: 0xffb45e, emissiveIntensity: 0.25, side: THREE.DoubleSide });
  const glass = new THREE.Mesh(new THREE.CylinderGeometry(0.72, 0.72, 0.78, 12, 1, true), glassMat);
  glass.position.y = 8.55;
  g.add(glass);
  const mullionGeo = new THREE.BoxGeometry(0.05, 0.78, 0.05);
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI * 2;
    const m = new THREE.Mesh(mullionGeo, postMat);
    m.position.set(Math.cos(a) * 0.72, 8.55, Math.sin(a) * 0.72);
    g.add(m);
  }
  const lampFloor = new THREE.Mesh(new THREE.CylinderGeometry(0.74, 0.74, 0.08, 12), postMat);
  lampFloor.position.y = 8.18;
  g.add(lampFloor);

  // warm lamp
  const lamp = new THREE.Mesh(new THREE.SphereGeometry(0.17, 12, 10),
    new THREE.MeshStandardMaterial({ color: 0xffe9c4, emissive: 0xffc478, emissiveIntensity: 2.6 }));
  lamp.position.y = 8.55;
  g.add(lamp);
  const lampLight = new THREE.PointLight(0xffd9a0, 2.2, 8, 2);
  lampLight.position.y = 8.55;
  g.add(lampLight);
  lights.push({ light: lampLight, base: 2.2, flick: 0.12, speed: 5.3 });

  // copper dome roof
  const roofPts = [];
  for (let i = 0; i <= 8; i++) {
    const t = i / 8;
    roofPts.push(new THREE.Vector2(0.86 * Math.sin(t * Math.PI / 2) * (1 - 0.25 * t * t), 0.62 * t));
  }
  const roof = new THREE.Mesh(
    new THREE.LatheGeometry(roofPts, 20),
    new THREE.MeshStandardMaterial({ map: copperTexture(), roughness: 0.5, metalness: 0.55 }));
  roof.position.y = 8.94;
  roof.castShadow = true;
  g.add(roof);
  const finial = new THREE.Mesh(new THREE.SphereGeometry(0.09, 10, 8),
    new THREE.MeshStandardMaterial({ color: 0xb06a35, roughness: 0.45, metalness: 0.6 }));
  finial.position.y = 9.62;
  g.add(finial);

  scene.add(g);
  return g;
}

// ---------------- cottage ----------------
function buildCottage(scene, lights) {
  const g = new THREE.Group();
  // position: near the harbor shore, on solid ground
  let cx = 8.2, cz = 2.2;
  if (heightAt(cx, cz) < 0.6) { cx = 6.5; cz = 1.0; }
  const gy = heightAt(cx, cz);
  g.position.set(cx, gy, cz);
  g.rotation.y = Math.atan2(HARBOR.x - cx, HARBOR.z - cz); // face the harbor

  const rockTex = rockTexture(22);
  const plaster = plasterTexture(31);

  // stone plinth
  const plinth = new THREE.Mesh(new THREE.BoxGeometry(2.9, 0.55, 2.2),
    new THREE.MeshStandardMaterial({ map: rockTex, roughness: 0.95, color: 0xa2968a }));
  plinth.position.y = 0.28;
  plinth.castShadow = plinth.receiveShadow = true;
  g.add(plinth);

  // plaster walls
  const walls = new THREE.Mesh(new THREE.BoxGeometry(2.6, 1.5, 1.9),
    new THREE.MeshStandardMaterial({ map: plaster, roughness: 0.9 }));
  walls.position.y = 1.3;
  walls.castShadow = walls.receiveShadow = true;
  g.add(walls);

  // gable roof (two slabs)
  const slate = new THREE.MeshStandardMaterial({ map: slateTexture(), roughness: 0.85, side: THREE.DoubleSide });
  const roofSlab = new THREE.BoxGeometry(3.3, 0.09, 1.45);
  for (const side of [-1, 1]) {
    const slab = new THREE.Mesh(roofSlab, slate);
    slab.position.set(0, 2.42, side * 0.66);
    slab.rotation.x = side * 0.62;
    slab.castShadow = true;
    g.add(slab);
  }
  const ridge = new THREE.Mesh(new THREE.BoxGeometry(3.34, 0.08, 0.14), new THREE.MeshStandardMaterial({ color: 0x49525b, roughness: 0.8 }));
  ridge.position.y = 2.62;
  g.add(ridge);

  // chimney
  const chim = new THREE.Mesh(new THREE.BoxGeometry(0.4, 1.15, 0.4),
    new THREE.MeshStandardMaterial({ map: rockTex, roughness: 0.95, color: 0x9b9084 }));
  chim.position.set(-0.85, 2.75, -0.35);
  chim.castShadow = true;
  g.add(chim);
  const chimCap = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.1, 0.52),
    new THREE.MeshStandardMaterial({ color: 0x6a645c, roughness: 0.9 }));
  chimCap.position.set(-0.85, 3.36, -0.35);
  g.add(chimCap);

  // door (front, +z)
  const door = new THREE.Mesh(new THREE.BoxGeometry(0.62, 1.06, 0.08),
    new THREE.MeshStandardMaterial({ color: 0x54402c, roughness: 0.85 }));
  door.position.set(0.55, 1.12, 0.97);
  g.add(door);
  const doorFrame = new THREE.Mesh(new THREE.BoxGeometry(0.78, 1.18, 0.06),
    new THREE.MeshStandardMaterial({ color: 0x3e2f20, roughness: 0.9 }));
  doorFrame.position.set(0.55, 1.12, 0.94);
  g.add(doorFrame);
  const step = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.16, 0.5),
    new THREE.MeshStandardMaterial({ map: rockTex, color: 0x9a9184, roughness: 0.95 }));
  step.position.set(0.55, 0.08, 1.25);
  g.add(step);

  // windows with warm frames and glowing glass
  const winMat = new THREE.MeshStandardMaterial({
    color: 0xffd9a4, emissive: 0xffb45e, emissiveIntensity: 1.4, roughness: 0.3 });
  const frameMat = new THREE.MeshStandardMaterial({ color: 0x4a4038, roughness: 0.7 });
  const mkWindow = (x, y, z, ry) => {
    const w = new THREE.Group();
    const glass = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 0.05), winMat);
    w.add(glass);
    const f1 = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.07, 0.09), frameMat);
    const f2 = f1.clone();
    f1.position.y = 0.29; f2.position.y = -0.29;
    const f3 = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.65, 0.09), frameMat);
    const f4 = f3.clone();
    f3.position.x = -0.28; f4.position.x = 0.28;
    const mid = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.5, 0.06), frameMat);
    const mid2 = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.04, 0.06), frameMat);
    w.add(f1, f2, f3, f4, mid, mid2);
    w.position.set(x, y, z);
    w.rotation.y = ry;
    g.add(w);
    return w;
  };
  mkWindow(-0.45, 1.45, 0.98, 0);        // front
  mkWindow(1.32, 1.45, 0.1, Math.PI / 2); // right side

  const interior = new THREE.PointLight(0xffc27a, 2.2, 8, 2);
  interior.position.set(0, 1.5, 0);
  g.add(interior);
  lights.push({ light: interior, base: 2.2, flick: 0.2, speed: 3.7 });

  scene.add(g);
  return { group: g, position: new THREE.Vector3(cx, gy, cz) };
}

// ---------------- winding stone stair ----------------
function buildStair(scene) {
  const rng = mulberry32(77);
  const startX = HEADLAND.x + 3.2, startZ = HEADLAND.z + 3.4;
  const endX = 9.6, endZ = 3.1; // near the cottage door
  const raw = new THREE.CatmullRomCurve3([
    new THREE.Vector3(startX, 0, startZ),
    new THREE.Vector3((startX + 5.5), 0, (startZ + 5.2)),
    new THREE.Vector3(2.5, 0, (startZ + 8.5)),
    new THREE.Vector3(0.5, 0, 4.6),
    new THREE.Vector3(4.2, 0, 2.6),
    new THREE.Vector3(endX, 0, endZ),
  ]);
  raw.points.forEach((p) => { p.y = heightAt(p.x, p.z); });

  const stepGeo = new THREE.BoxGeometry(1.05, 0.16, 0.5);
  const stepMat = new THREE.MeshStandardMaterial({ color: 0x8d867a, roughness: 0.92, flatShading: true });
  const N = 36;
  const steps = new THREE.InstancedMesh(stepGeo, stepMat, N);
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), p = new THREE.Vector3();
  const e = new THREE.Euler();
  const stepMatBright = new THREE.Color(0x9a9285);
  for (let i = 0; i < N; i++) {
    const t = i / (N - 1);
    const pt = raw.getPoint(t);
    const tan = raw.getTangent(t).normalize();
    p.copy(pt); p.y += 0.05;
    const slopeY = heightAt(pt.x + tan.x * 0.4, pt.z + tan.z * 0.4) - heightAt(pt.x - tan.x * 0.4, pt.z - tan.z * 0.4);
    const yaw = Math.atan2(tan.x, tan.z);
    e.set(Math.atan(slopeY / 0.8) * 0.5, yaw, 0, 'YXZ');
    q.setFromEuler(e);
    s.set(1 + rng() * 0.12, 1, 0.9 + rng() * 0.15);
    m4.compose(p, q, s);
    steps.setMatrixAt(i, m4);
    steps.setColorAt(i, stepMatBright.clone().offsetHSL(0, 0, (rng() - 0.5) * 0.08));
  }
  steps.castShadow = steps.receiveShadow = true;
  scene.add(steps);

  // low stone parapet on the outer side
  const postGeo = new THREE.BoxGeometry(0.55, 0.42, 0.3);
  const posts = new THREE.InstancedMesh(postGeo, stepMat, Math.floor(N / 2));
  let pi = 0;
  for (let i = 0; i < N; i += 2) {
    const t = i / (N - 1);
    const pt = raw.getPoint(t);
    const tan = raw.getTangent(t).normalize();
    const side = new THREE.Vector3(-tan.z, 0, tan.x).multiplyScalar(0.85);
    p.set(pt.x + side.x, heightAt(pt.x + side.x, pt.z + side.z) + 0.2, pt.z + side.z);
    q.setFromEuler(e.set(0, Math.atan2(tan.x, tan.z), 0, 'YXZ'));
    s.set(1, 0.8 + rng() * 0.5, 1);
    m4.compose(p, q, s);
    posts.setMatrixAt(pi++, m4);
  }
  posts.count = pi;
  posts.castShadow = true;
  scene.add(posts);

  // a few loose stones along the stair
  return { curve: raw };
}

// ---------------- jetty + fishing equipment ----------------
function buildJetty(scene, out) {
  const wood = new THREE.MeshStandardMaterial({ map: woodTexture(), roughness: 0.9 });
  const woodDark = new THREE.MeshStandardMaterial({ map: woodTexture(42, '#6d5843'), roughness: 0.92 });
  const g = new THREE.Group();

  // find the shoreline start: from near the cottage, walk toward the harbor
  let sx = 10.2, sz = 4.6;
  const dir = new THREE.Vector2(HARBOR.x - sx, HARBOR.z - sz).normalize();
  for (let d = 0; d < 8 && heightAt(sx, sz) > 0.15; d += 0.35) { sx += dir.x * 0.35; sz += dir.y * 0.35; }
  const len = 4.6;
  const yaw = Math.atan2(dir.x, dir.y);
  g.position.set(sx, 0, sz);
  g.rotation.y = yaw;

  // stringers, planks, posts
  const stringerGeo = new THREE.BoxGeometry(0.26, 0.2, len);
  for (const side of [-0.5, 0.5]) {
    const s = new THREE.Mesh(stringerGeo, woodDark);
    s.position.set(side, 0.34, len / 2);
    s.castShadow = true;
    g.add(s);
  }
  const plankGeo = new THREE.BoxGeometry(1.3, 0.09, 0.5);
  for (let i = 0; i < 7; i++) {
    const p = new THREE.Mesh(plankGeo, wood);
    p.position.set(0, 0.47, 0.5 + i * 0.62);
    p.rotation.y = (mulberry32(500 + i)() - 0.5) * 0.05;
    p.castShadow = p.receiveShadow = true;
    g.add(p);
  }
  const postGeo = new THREE.CylinderGeometry(0.13, 0.15, 2.6, 8);
  for (let i = 0; i < 3; i++) {
    for (const side of [-0.55, 0.55]) {
      const p = new THREE.Mesh(postGeo, woodDark);
      p.position.set(side, -0.7, 0.7 + i * 1.6);
      p.castShadow = true;
      g.add(p);
    }
  }

  // mooring ring at the tip
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.14, 0.035, 8, 16),
    new THREE.MeshStandardMaterial({ color: 0x55504a, roughness: 0.5, metalness: 0.7 }));
  ring.position.set(0.55, -0.35, len + 0.45);
  ring.rotation.x = Math.PI / 2;
  g.add(ring);
  const tipPost = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.14, 1.5, 8), woodDark);
  tipPost.position.set(0.55, -0.45, len + 0.45);
  g.add(tipPost);
  const ring2 = new THREE.Mesh(new THREE.TorusGeometry(0.13, 0.032, 8, 16), ring.material);
  ring2.position.set(-0.55, -0.3, 3.4);
  ring2.rotation.x = Math.PI / 2;
  g.add(ring2);
  const post2 = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.13, 1.6, 8), woodDark);
  post2.position.set(-0.55, -0.45, 3.4);
  g.add(post2);

  scene.add(g);

  // fishing equipment on the shore near the jetty (world-space props)
  const props = new THREE.Group();
  const ex = sx - dir.x * 1.6 + dir.y * 1.1, ez = sz - dir.y * 1.6 - dir.x * 1.1;
  const ey = Math.max(heightAt(ex, ez), 0.1);
  props.position.set(ex, ey, ez);

  const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.34, 0.72, 10), wood);
  barrel.rotation.z = Math.PI / 2;
  barrel.position.set(0.4, 0.36, -0.9);
  barrel.castShadow = true;
  props.add(barrel);
  const bandMat = new THREE.MeshStandardMaterial({ color: 0x5a544c, roughness: 0.55, metalness: 0.6 });
  for (const off of [-0.2, 0.2]) {
    const band = new THREE.Mesh(new THREE.TorusGeometry(0.35, 0.025, 6, 14), bandMat);
    band.rotation.y = Math.PI / 2;
    band.position.set(0.4 + off, 0.36, -0.9);
    props.add(band);
  }
  const crateGeo = new THREE.BoxGeometry(0.55, 0.5, 0.55);
  const crate1 = new THREE.Mesh(crateGeo, wood);
  crate1.position.set(-0.5, 0.25, -1.1);
  crate1.rotation.y = 0.4;
  crate1.castShadow = true;
  props.add(crate1);
  const crate2 = new THREE.Mesh(crateGeo, woodDark);
  crate2.position.set(-0.1, 0.25, -0.5);
  crate2.rotation.y = -0.2;
  crate2.castShadow = true;
  props.add(crate2);

  // coiled rope
  const ropeMat = new THREE.MeshStandardMaterial({ color: 0x9b835f, roughness: 0.95 });
  for (let i = 0; i < 3; i++) {
    const coil = new THREE.Mesh(new THREE.TorusGeometry(0.22 - i * 0.03, 0.045, 6, 18), ropeMat);
    coil.rotation.x = Math.PI / 2;
    coil.position.set(0.6, 0.08 + i * 0.09, 0.5);
    coil.castShadow = true;
    props.add(coil);
  }
  // draped net on the crate
  const netGeo = new THREE.IcosahedronGeometry(0.5, 1);
  const net = new THREE.Mesh(netGeo, new THREE.MeshBasicMaterial({
    color: 0x4a5c4a, wireframe: true, transparent: true, opacity: 0.8 }));
  net.scale.set(1, 0.55, 1);
  net.position.set(-0.1, 0.52, -0.5);
  net.rotation.set(0.3, 0.7, 0.2);
  props.add(net);
  // a small iron anchor leaning on the crate
  const anchor = new THREE.Group();
  const aShank = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.85, 6), bandMat);
  const aArm = new THREE.Mesh(new THREE.TorusGeometry(0.28, 0.025, 6, 12, Math.PI), bandMat);
  aArm.rotation.z = Math.PI;
  aArm.position.y = -0.35;
  const aRing = new THREE.Mesh(new THREE.TorusGeometry(0.07, 0.02, 6, 10), bandMat);
  aRing.position.y = 0.48;
  anchor.add(aShank, aArm, aRing);
  anchor.position.set(-0.85, 0.4, -0.3);
  anchor.rotation.set(0.35, 0.5, 0.5);
  props.add(anchor);

  scene.add(props);

  out.jetty = {
    group: g,
    ringWorld: new THREE.Vector3(),
    ring2World: new THREE.Vector3(),
  };
  // compute world ring positions after transform
  g.updateMatrixWorld(true);
  out.jetty.ringWorld.copy(ring.getWorldPosition(new THREE.Vector3()));
  out.jetty.ring2World.copy(ring2.getWorldPosition(new THREE.Vector3()));
}

// ---------------- boats ----------------
function buildHullGeometry(L, W, D) {
  const N = 16, M = 10;
  const xs = [], hw = [];
  for (let i = 0; i <= N; i++) {
    const t = i / N;
    xs.push(-L / 2 + L * t);
    let w = (W / 2) * (0.32 + 0.68 * Math.pow(Math.sin(Math.PI * (0.06 + 0.88 * t)), 0.85));
    w *= 1 - 0.3 * sstep(0.8, 1.0, t);   // pointed bow
    w *= 0.88 + 0.12 * sstep(0.0, 0.22, t);
    hw.push(Math.max(w, 0.05));
  }
  const prof = [];
  for (let j = 0; j <= M; j++) {
    const zn = -1 + 2 * j / M;
    prof.push({ zn, y: -D * Math.pow(Math.max(0, 1 - zn * zn), 0.75) });
  }
  const pos = [], idx = [];
  for (let i = 0; i <= N; i++) {
    for (let j = 0; j <= M; j++) {
      pos.push(xs[i], prof[j].y, prof[j].zn * hw[i]);
    }
  }
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      const a = i * (M + 1) + j;
      const b = (i + 1) * (M + 1) + j;
      idx.push(a, b, a + M + 1, b, b + M + 1, a + M + 1);
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(pos), 3));
  geo.setIndex(idx);
  geo.computeVertexNormals();
  return geo;
}

function buildBoats(scene, jettyOut) {
  const wood = new THREE.MeshStandardMaterial({ map: woodTexture(44, '#8a6f52'), roughness: 0.85 });
  const boatA = new THREE.Group();
  const boatB = new THREE.Group();

  // --- Boat A: little fishing boat ---
  const hullA = new THREE.Mesh(buildHullGeometry(4.3, 1.55, 0.55),
    new THREE.MeshStandardMaterial({ color: 0x74948f, roughness: 0.8, side: THREE.DoubleSide }));
  hullA.castShadow = true;
  boatA.add(hullA);
  // deck
  const deckA = new THREE.Mesh(new THREE.BoxGeometry(3.6, 0.06, 1.15), wood);
  deckA.position.set(-0.1, 0.05, 0);
  boatA.add(deckA);
  const cabinA = new THREE.Mesh(new THREE.BoxGeometry(0.95, 0.52, 0.85),
    new THREE.MeshStandardMaterial({ color: 0xd8d2c4, roughness: 0.85 }));
  cabinA.position.set(-0.9, 0.36, 0);
  cabinA.castShadow = true;
  boatA.add(cabinA);
  const cabWin = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.3, 0.4),
    new THREE.MeshStandardMaterial({ color: 0x2e3a44, roughness: 0.35 }));
  cabWin.position.set(-1.4, 0.42, 0);
  boatA.add(cabWin);
  const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.028, 0.035, 1.7, 6), wood);
  mast.position.set(1.25, 0.9, 0);
  boatA.add(mast);
  const flagShape = new THREE.Shape();
  flagShape.moveTo(0, 0); flagShape.lineTo(0.42, 0.09); flagShape.lineTo(0, 0.2);
  const flag = new THREE.Mesh(new THREE.ShapeGeometry(flagShape),
    new THREE.MeshStandardMaterial({ color: 0xb8543a, side: THREE.DoubleSide, roughness: 0.9 }));
  flag.position.set(1.25, 1.62, 0);
  boatA.add(flag);
  const engine = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.34, 0.4),
    new THREE.MeshStandardMaterial({ color: 0x4a4a4e, roughness: 0.6, metalness: 0.4 }));
  engine.position.set(-2.0, 0.16, 0);
  boatA.add(engine);
  boatA.position.set(12.6, 0, 6.2);
  boatA.rotation.y = 0.9;

  // --- Boat B: rowboat ---
  const hullB = new THREE.Mesh(buildHullGeometry(2.9, 1.2, 0.42),
    new THREE.MeshStandardMaterial({ color: 0xa8664e, roughness: 0.85, side: THREE.DoubleSide }));
  hullB.castShadow = true;
  boatB.add(hullB);
  const deckB = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.05, 0.95), wood);
  deckB.position.set(0, 0.04, 0);
  boatB.add(deckB);
  for (const off of [-0.5, 0.35]) {
    const bench = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.04, 0.9), wood);
    bench.position.set(off, 0.12, 0);
    boatB.add(bench);
  }
  const oarMat = new THREE.MeshStandardMaterial({ color: 0x6d5843, roughness: 0.9 });
  for (const side of [-1, 1]) {
    const oar = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.028, 1.9, 6), oarMat);
    oar.rotation.set(0.5, 0, side * 0.5);
    oar.position.set(-0.7, 0.3, side * 0.75);
    boatB.add(oar);
  }
  boatB.position.set(14.6, 0, 8.4);
  boatB.rotation.y = 2.1;

  scene.add(boatA, boatB);

  // mooring ropes (updated each frame in main)
  const ropeMat = new THREE.LineBasicMaterial({ color: 0x6d5c46 });
  const mkRope = (boat, ringKey, offset) => {
    const pts = new Float32Array(8 * 3);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pts, 3));
    const line = new THREE.Line(geo, ropeMat);
    scene.add(line);
    return { line, boat, ringKey, offset };
  };
  const ropes = [
    mkRope(boatA, 'ringWorld', new THREE.Vector3(2.0, 0.1, 0.2)),
    mkRope(boatA, 'ring2World', new THREE.Vector3(-1.6, 0.1, -0.3)),
    mkRope(boatB, 'ringWorld', new THREE.Vector3(1.2, 0.08, 0.1)),
  ];

  const phases = [0.4, 2.2];
  return {
    boats: [
      { group: boatA, phase: phases[0], bobAmp: 0.035, rotSpeed: 0.42 },
      { group: boatB, phase: phases[1], bobAmp: 0.045, rotSpeed: 0.36 },
    ],
    ropes,
    flags: [flag],
  };
}

export function buildStructures(scene) {
  const lights = [];
  const jettyOut = {};
  buildLighthouse(scene, lights);
  const cottage = buildCottage(scene, lights);
  buildStair(scene);
  buildJetty(scene, jettyOut);
  const boats = buildBoats(scene, jettyOut);
  return { lights, jetty: jettyOut.jetty, cottage, boats };
}
