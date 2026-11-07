// structures.js — lighthouse, cottage, winding stone stair, jetty, two boats,
// mooring ropes/buoy, fishing gear; all textures painted in code
import * as THREE from 'three';
import {
  CFG, coastR, terrainHeight, polar, rnd, sstep, mix,
} from './world.js';

// ---------- canvas texture helpers ----------
function canvasTex(w, h, draw, repeat = [1, 1]) {
  const cv = document.createElement('canvas');
  cv.width = w; cv.height = h;
  const g = cv.getContext('2d');
  draw(g, w, h);
  const t = new THREE.CanvasTexture(cv);
  t.colorSpace = THREE.SRGBColorSpace;
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(repeat[0], repeat[1]);
  t.anisotropy = 4;
  return t;
}
function speckle(g, w, h, n, col, a0, a1, r0, r1, rng) {
  for (let i = 0; i < n; i++) {
    g.fillStyle = col;
    g.globalAlpha = a0 + rng() * (a1 - a0);
    const r = r0 + rng() * (r1 - r0);
    g.beginPath();
    g.arc(rng() * w, rng() * h, r, 0, 7);
    g.fill();
  }
  g.globalAlpha = 1;
}
function streaks(g, w, h, n, rng) {
  for (let i = 0; i < n; i++) {
    const x = rng() * w, len = h * (0.1 + rng() * 0.5), wd = 1 + rng() * 4;
    const gr = g.createLinearGradient(0, 0, 0, len);
    gr.addColorStop(0, 'rgba(60,50,40,0.28)');
    gr.addColorStop(1, 'rgba(60,50,40,0)');
    g.fillStyle = gr;
    g.save();
    g.translate(x, rng() * (h - len));
    g.fillRect(-wd / 2, 0, wd, len);
    g.restore();
  }
}

function towerTexture() {
  const rng = (() => { let s = 12345; return () => (s = (s * 16807) % 2147483647) / 2147483647; })();
  return canvasTex(256, 512, (g, w, h) => {
    g.fillStyle = '#e9e2d2'; g.fillRect(0, 0, w, h);
    speckle(g, w, h, 900, '#c9c0ac', 0.05, 0.16, 1, 3, rng);
    speckle(g, w, h, 300, '#f6f0e2', 0.08, 0.2, 1, 3, rng);
    // red bands (v: 0.62..0.75 upper, 0.14..0.30 lower) — canvas y is flipped in UV
    const band = (y0, y1) => {
      g.fillStyle = '#b5432f'; g.fillRect(0, h * (1 - y1), w, h * (y1 - y0));
      speckle(g, w, h * (y1 - y0), 200, '#8f2f22', 0.06, 0.2, 1, 2.5, rng);
    };
    g.save();
    g.translate(0, 0);
    const drawBands = () => {
      g.fillStyle = '#b5432f';
      g.fillRect(0, h * (1 - 0.75), w, h * 0.13);
      g.fillRect(0, h * (1 - 0.30), w, h * 0.16);
      speckle(g, w, h, 260, '#8f2f22', 0.06, 0.2, 1, 2.5, rng);
    };
    drawBands();
    g.restore();
    // weathering streaks + grime at base
    streaks(g, w, h, 46, rng);
    const gr = g.createLinearGradient(0, h * 0.82, 0, h);
    gr.addColorStop(0, 'rgba(70,60,50,0)');
    gr.addColorStop(1, 'rgba(70,60,50,0.34)');
    g.fillStyle = gr; g.fillRect(0, h * 0.82, w, h * 0.18);
  });
}
function stoneTexture() {
  const rng = (() => { let s = 777; return () => (s = (s * 16807) % 2147483647) / 2147483647; })();
  return canvasTex(256, 256, (g, w, h) => {
    g.fillStyle = '#6f6a60'; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 70; i++) {
      const x = rng() * w, y = rng() * h, rw = 12 + rng() * 26, rh = 8 + rng() * 18;
      const v = 105 + (rng() * 46) | 0;
      g.fillStyle = `rgb(${v},${v - 6},${v - 16})`;
      g.save();
      g.translate(x, y);
      g.rotate((rng() - 0.5) * 0.7);
      g.beginPath();
      g.ellipse(0, 0, rw / 2, rh / 2, 0, 0, 7);
      g.fill();
      g.strokeStyle = 'rgba(40,36,30,0.5)';
      g.lineWidth = 2;
      g.stroke();
      g.restore();
    }
    speckle(g, w, h, 260, '#3d3931', 0.05, 0.16, 1, 2.4, rng);
  });
}
function plasterTexture() {
  const rng = (() => { let s = 4242; return () => (s = (s * 16807) % 2147483647) / 2147483647; })();
  return canvasTex(256, 256, (g, w, h) => {
    g.fillStyle = '#e6dcc2'; g.fillRect(0, 0, w, h);
    speckle(g, w, h, 500, '#cfc2a4', 0.06, 0.18, 1, 3, rng);
    speckle(g, w, h, 160, '#f2ead6', 0.1, 0.2, 1, 3, rng);
    // cracks
    g.strokeStyle = 'rgba(90,78,60,0.4)';
    for (let i = 0; i < 7; i++) {
      g.lineWidth = 0.6 + rng();
      g.beginPath();
      let x = rng() * w, y = rng() * h;
      g.moveTo(x, y);
      for (let k = 0; k < 5; k++) { x += (rng() - 0.5) * 34; y += rng() * 22; g.lineTo(x, y); }
      g.stroke();
    }
    const gr = g.createLinearGradient(0, h * 0.75, 0, h);
    gr.addColorStop(0, 'rgba(96,116,72,0)');
    gr.addColorStop(1, 'rgba(96,116,72,0.30)');
    g.fillStyle = gr; g.fillRect(0, h * 0.75, w, h * 0.25);
    streaks(g, w, h, 18, rng);
  });
}
function slateTexture() {
  const rng = (() => { let s = 909; return () => (s = (s * 16807) % 2147483647) / 2147483647; })();
  return canvasTex(256, 256, (g, w, h) => {
    g.fillStyle = '#736a62'; g.fillRect(0, 0, w, h);
    const rowH = 22;
    for (let y = 0; y < h; y += rowH) {
      const off = (y / rowH) % 2 ? 26 : 0;
      for (let x = -26; x < w; x += 52) {
        const v = 92 + (rng() * 40) | 0;
        g.fillStyle = `rgb(${v},${v - 4},${v - 8})`;
        g.fillRect(x + off + 1, y + 1, 50, rowH - 2);
      }
      g.fillStyle = 'rgba(35,30,26,0.5)';
      g.fillRect(0, y, w, 2);
    }
    speckle(g, w, h, 200, '#544a40', 0.08, 0.2, 1, 2.5, rng);
  });
}
function woodTexture() {
  const rng = (() => { let s = 31337; return () => (s = (s * 16807) % 2147483647) / 2147483647; })();
  return canvasTex(256, 256, (g, w, h) => {
    g.fillStyle = '#8a6f52'; g.fillRect(0, 0, w, h);
    const planks = 6;
    for (let i = 0; i < planks; i++) {
      const v = 118 + (rng() * 44) | 0;
      g.fillStyle = `rgb(${v},${(v * 0.76) | 0},${(v * 0.56) | 0})`;
      g.fillRect(0, (i * h) / planks + 1, w, h / planks - 2);
      g.strokeStyle = 'rgba(50,38,26,0.7)';
      g.lineWidth = 2;
      g.strokeRect(-2, (i * h) / planks, w + 4, h / planks);
      for (let k = 0; k < 8; k++) {
        g.strokeStyle = `rgba(60,45,30,${0.12 + rng() * 0.18})`;
        g.lineWidth = 0.8 + rng();
        g.beginPath();
        const y = (i * h) / planks + rng() * (h / planks);
        g.moveTo(0, y);
        g.bezierCurveTo(w * 0.3, y + (rng() - 0.5) * 6, w * 0.7, y + (rng() - 0.5) * 6, w, y);
        g.stroke();
      }
    }
  });
}
function patinaTexture() {
  const rng = (() => { let s = 616; return () => (s = (s * 16807) % 2147483647) / 2147483647; })();
  return canvasTex(128, 128, (g, w, h) => {
    g.fillStyle = '#5f9e88'; g.fillRect(0, 0, w, h);
    speckle(g, w, h, 260, '#79b49c', 0.1, 0.25, 1, 3, rng);
    speckle(g, w, h, 200, '#4a7f6d', 0.1, 0.25, 1, 3, rng);
    streaks(g, w, h, 14, rng);
  });
}

const T = {}; // shared textures (lazy)
function tex(name) {
  if (T[name]) return T[name];
  T[name] = ({ tower: towerTexture, stone: stoneTexture, plaster: plasterTexture, slate: slateTexture, wood: woodTexture, patina: patinaTexture })[name]();
  return T[name];
}

const MAT = {};
function mat(name) {
  if (MAT[name]) return MAT[name];
  switch (name) {
    case 'iron': MAT[name] = new THREE.MeshStandardMaterial({ color: 0x3a3d42, roughness: 0.6, metalness: 0.5 }); break;
    case 'wood': MAT[name] = new THREE.MeshStandardMaterial({ map: tex('wood'), roughness: 0.85 }); break;
    case 'woodDark': MAT[name] = new THREE.MeshStandardMaterial({ color: 0x4a3a2c, roughness: 0.9 }); break;
    case 'stone': MAT[name] = new THREE.MeshStandardMaterial({ map: tex('stone'), roughness: 0.95 }); break;
    case 'rope': MAT[name] = new THREE.MeshStandardMaterial({ color: 0x6a573f, roughness: 1 }); break;
    case 'glassWarm': MAT[name] = new THREE.MeshStandardMaterial({
      color: 0xfff2d0, emissive: 0xffc76e, emissiveIntensity: 1.4, roughness: 0.3, transparent: true, opacity: 0.85,
    }); break;
  }
  return MAT[name];
}

// lowest terrain height under a footprint (so buildings never float on noisy ground)
function groundMin(x, z, rx, rz, n = 8) {
  let m = Infinity;
  for (let i = 0; i < n; i++) {
    const a = i / n * Math.PI * 2;
    const px = x + Math.cos(a) * rx, pz = z + Math.sin(a) * rz;
    m = Math.min(m, terrainHeight(px, pz), terrainHeight((x + px) / 2, (z + pz) / 2));
  }
  return Math.min(m, terrainHeight(x, z));
}

// helper: emissive windows registry for flicker
const warmWindows = [];
export function tickWindows(t) {
  for (const w of warmWindows) {
    w.material.emissiveIntensity = w.base * (0.9 + 0.1 * Math.sin(t * 2.6 + w.ph) + 0.05 * Math.sin(t * 9.7 + w.ph * 3));
  }
}
function addWindow(parent, x, y, z, ry, w = 0.26, hgt = 0.34, glow = true) {
  const grp = new THREE.Group();
  const frame = new THREE.Mesh(new THREE.BoxGeometry(w + 0.07, hgt + 0.07, 0.06), mat('woodDark'));
  const pane = new THREE.Mesh(new THREE.PlaneGeometry(w, hgt),
    glow ? mat('glassWarm').clone() : new THREE.MeshStandardMaterial({ color: 0x233038, roughness: 0.4, metalness: 0.2 }));
  pane.position.z = 0.035;
  if (glow) { pane.material.emissiveIntensity = 1.3; warmWindows.push({ material: pane.material, base: 1.3, ph: Math.random() * 9 }); }
  const mull = new THREE.Mesh(new THREE.BoxGeometry(w * 0.14, hgt, 0.02), mat('woodDark'));
  mull.position.z = 0.05;
  const mullH = new THREE.Mesh(new THREE.BoxGeometry(w, hgt * 0.14, 0.02), mat('woodDark'));
  mullH.position.z = 0.05;
  grp.add(frame, pane, mull, mullH);
  grp.position.set(x, y, z);
  grp.rotation.y = ry;
  parent.add(grp);
  return grp;
}

// ---------- lighthouse ----------
export function buildLighthouse() {
  const grp = new THREE.Group();
  const [lx, lz] = CFG.lightP;
  const base = groundMin(lx, lz, 2.2, 2.2);
  grp.position.set(lx, base + 0.1, lz);

  // stone foundation (buried deep so it never floats above the noisy knoll)
  const found = new THREE.Mesh(new THREE.CylinderGeometry(2.0, 2.35, 3.0, 20), mat('stone'));
  found.position.y = 0.9;
  found.castShadow = found.receiveShadow = true;
  grp.add(found);
  const plinth = new THREE.Mesh(new THREE.CylinderGeometry(1.7, 1.85, 0.35, 20), mat('stone'));
  plinth.position.y = 1.4;
  plinth.castShadow = true;
  grp.add(plinth);

  // tower with weathered red/white plaster
  const towerMat = new THREE.MeshStandardMaterial({ map: tex('tower'), roughness: 0.92 });
  const tower = new THREE.Mesh(new THREE.CylinderGeometry(1.02, 1.42, 5.6, 28), towerMat);
  tower.position.y = 1.5 + 2.8;
  tower.castShadow = tower.receiveShadow = true;
  grp.add(tower);

  // tower windows (facing harbor side)
  addWindow(grp, 0, 2.6, 1.18, 0, 0.2, 0.28);
  addWindow(grp, 0, 4.2, 1.1, 0, 0.18, 0.24);
  addWindow(grp, 0, 5.7, 1.05, 0, 0.16, 0.2);
  // door toward the stair (harbor-ish side)
  const door = new THREE.Group();
  const dp = new THREE.Mesh(new THREE.BoxGeometry(0.56, 0.95, 0.1), mat('woodDark'));
  dp.position.y = 0.5;
  const dTop = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.28, 0.1, 12, 1, false, 0, Math.PI), mat('woodDark'));
  dTop.position.y = 0.97;
  const dFrame = new THREE.Mesh(new THREE.BoxGeometry(0.68, 1.1, 0.07), mat('stone'));
  dFrame.position.set(0, 0.52, -0.03);
  door.add(dFrame, dp, dTop);
  door.position.set(0, 1.1, 1.28);
  door.rotation.x = 0.18;
  grp.add(door);

  // gallery
  const galY = 4.3 + 5.6 - 1.5; // top of tower local y = 1.5+5.6 = 7.1
  const deck = new THREE.Mesh(new THREE.CylinderGeometry(1.75, 1.55, 0.18, 28), mat('iron'));
  deck.position.y = 7.18;
  deck.castShadow = true;
  grp.add(deck);
  const railR = 1.62;
  const ring1 = new THREE.Mesh(new THREE.TorusGeometry(railR, 0.025, 8, 40), mat('iron'));
  ring1.rotation.x = Math.PI / 2; ring1.position.y = 7.75;
  const ring2 = ring1.clone(); ring2.position.y = 7.48;
  grp.add(ring1, ring2);
  for (let i = 0; i < 14; i++) {
    const a = i / 14 * Math.PI * 2;
    const post = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, 0.62, 6), mat('iron'));
    post.position.set(Math.cos(a) * railR, 7.5, Math.sin(a) * railR);
    grp.add(post);
  }

  // lantern room
  const lampY = 8.1;
  const glass = new THREE.Mesh(new THREE.CylinderGeometry(0.88, 0.88, 1.15, 20, 1, true),
    new THREE.MeshPhysicalMaterial({
      color: 0xfff6df, transparent: true, opacity: 0.32, roughness: 0.15, metalness: 0,
      emissive: 0xffc76e, emissiveIntensity: 0.5, side: THREE.DoubleSide, depthWrite: false,
    }));
  glass.position.y = lampY;
  grp.add(glass);
  for (let i = 0; i < 6; i++) {
    const a = i / 6 * Math.PI * 2;
    const mull = new THREE.Mesh(new THREE.BoxGeometry(0.05, 1.15, 0.05), mat('iron'));
    mull.position.set(Math.cos(a) * 0.9, lampY, Math.sin(a) * 0.9);
    mull.rotation.y = -a;
    grp.add(mull);
  }
  const lamp = new THREE.Mesh(new THREE.SphereGeometry(0.24, 12, 10),
    new THREE.MeshStandardMaterial({ color: 0xffe9b8, emissive: 0xffd98c, emissiveIntensity: 3.2 }));
  lamp.position.y = lampY;
  grp.add(lamp);
  const lampLight = new THREE.PointLight(0xffbe7a, 14, 16, 2);
  lampLight.position.y = lampY;
  grp.add(lampLight);

  // copper roof + finial
  const roof = new THREE.Mesh(new THREE.ConeGeometry(1.02, 0.95, 20),
    new THREE.MeshStandardMaterial({ map: tex('patina'), roughness: 0.75, metalness: 0.25 }));
  roof.position.y = lampY + 1.02;
  roof.castShadow = true;
  grp.add(roof);
  const finial = new THREE.Mesh(new THREE.SphereGeometry(0.09, 10, 8), mat('iron'));
  finial.position.y = lampY + 1.62;
  const rod = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.5, 6), mat('iron'));
  rod.position.y = lampY + 1.86;
  grp.add(finial, rod);

  return grp;
}

// ---------- cottage ----------
export function buildCottage() {
  const grp = new THREE.Group();
  const [cx, cz] = CFG.cottageP;
  const base = groundMin(cx, cz, 1.85, 1.45);
  grp.position.set(cx, base + 0.06, cz);
  grp.rotation.y = -0.6;

  const stoneBase = new THREE.Mesh(new THREE.BoxGeometry(3.6, 1.0, 2.8), mat('stone'));
  stoneBase.position.y = 0.42;
  stoneBase.castShadow = stoneBase.receiveShadow = true;
  grp.add(stoneBase);

  const wallMat = new THREE.MeshStandardMaterial({ map: tex('plaster'), roughness: 0.95 });
  const walls = new THREE.Mesh(new THREE.BoxGeometry(3.4, 1.7, 2.6), wallMat);
  walls.position.y = 0.5 + 0.85;
  walls.castShadow = walls.receiveShadow = true;
  grp.add(walls);

  // gable roof
  const roofShape = new THREE.Shape();
  roofShape.moveTo(-1.95, 0); roofShape.lineTo(0, 0.95); roofShape.lineTo(1.95, 0); roofShape.lineTo(-1.95, 0);
  const roofGeo = new THREE.ExtrudeGeometry(roofShape, { depth: 2.9, bevelEnabled: false });
  roofGeo.translate(0, 0, -1.45);
  const roof = new THREE.Mesh(roofGeo, new THREE.MeshStandardMaterial({ map: tex('slate'), roughness: 0.9 }));
  roof.position.y = 2.18;
  roof.castShadow = true;
  grp.add(roof);
  const ridge = new THREE.Mesh(new THREE.BoxGeometry(4.0, 0.09, 0.16), mat('woodDark'));
  ridge.position.y = 2.18 + 0.98;
  grp.add(ridge);

  // chimney
  const chim = new THREE.Mesh(new THREE.BoxGeometry(0.42, 1.15, 0.42), mat('stone'));
  chim.position.set(-1.0, 2.5, -0.5);
  chim.castShadow = true;
  const cap = new THREE.Mesh(new THREE.BoxGeometry(0.54, 0.1, 0.54), mat('stone'));
  cap.position.set(-1.0, 3.1, -0.5);
  grp.add(chim, cap);

  // door + windows (front faces +Z local, toward jetty)
  const doorG = new THREE.Group();
  const dm = new THREE.Mesh(new THREE.BoxGeometry(0.6, 1.05, 0.08), mat('woodDark'));
  dm.position.y = 0.53;
  const df = new THREE.Mesh(new THREE.BoxGeometry(0.72, 1.16, 0.05), mat('wood'));
  df.position.set(0, 0.53, -0.02);
  const knob = new THREE.Mesh(new THREE.SphereGeometry(0.03, 8, 6), mat('iron'));
  knob.position.set(0.2, 0.52, 0.06);
  doorG.add(df, dm, knob);
  doorG.position.set(-0.9, 0.5, 1.32);
  grp.add(doorG);
  addWindow(grp, 0.55, 1.55, 1.32, 0, 0.42, 0.44);
  addWindow(grp, 1.35, 1.5, 1.32, 0, 0.34, 0.4);
  addWindow(grp, 1.72, 1.5, 0, Math.PI / 2, 0.34, 0.4);

  // low stone wall snippet by the door
  for (let i = 0; i < 6; i++) {
    const st = new THREE.Mesh(new THREE.BoxGeometry(0.24 + rnd() * 0.14, 0.16 + rnd() * 0.1, 0.18), mat('stone'));
    st.position.set(-1.6 + i * 0.27, 0.52 + (i % 2) * 0.14, 1.55);
    st.rotation.y = rnd();
    st.castShadow = true;
    grp.add(st);
  }
  return grp;
}

// ---------- winding stone stair ----------
export function buildStair() {
  const thJ = CFG.jettyAz;
  const [shx, shz] = polar(thJ, coastR(thJ) - 0.35);
  const wps = [
    [-5.2, -3.5], [-3.4, -1.2], [-1.5, 0.9], [0.7, 2.9],
    [CFG.cottageP[0] + 0.8, CFG.cottageP[1] + 0.6],
    [3.6, 5.6], [4.4, 6.2], [shx, shz],
  ].map(([x, z]) => new THREE.Vector3(x, terrainHeight(x, z) + 0.12, z));
  const curve = new THREE.CatmullRomCurve3(wps, false, 'catmullrom', 0.4);
  const len = curve.getLength();
  const n = Math.max(8, Math.floor(len / 0.52));
  const geo = new THREE.BoxGeometry(0.6, 0.15, 0.44);
  const matS = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.95 });
  const steps = new THREE.InstancedMesh(geo, matS, n);
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), eu = new THREE.Euler();
  const up = new THREE.Vector3(0, 1, 0);
  const col = new THREE.Color();
  for (let i = 0; i < n; i++) {
    const t = i / (n - 1);
    const p = curve.getPointAt(Math.min(t, 1));
    const p2 = curve.getPointAt(Math.min(t + 0.01, 1));
    const dx = p2.x - p.x, dz = p2.z - p.z;
    const len = Math.hypot(dx, dz) || 1e-4;
    const yaw = Math.atan2(dx, dz);
    // snap each step onto the actual ground and tilt it to the local slope
    const fx = dx / len, fz = dz / len;
    const hF = terrainHeight(p.x + fx * 0.22, p.z + fz * 0.22);
    const hB = terrainHeight(p.x - fx * 0.22, p.z - fz * 0.22);
    const pitch = Math.atan2(hF - hB, 0.44);
    eu.set(-pitch, yaw + Math.PI / 2, 0, 'YXZ');
    q.setFromEuler(eu);
    const gy = terrainHeight(p.x, p.z) + 0.02;
    m4.compose(new THREE.Vector3(p.x, gy, p.z), q, new THREE.Vector3(1, 1, 1));
    steps.setMatrixAt(i, m4);
    const v = 0.62 + rnd() * 0.3;
    col.setRGB(v, v * 0.97, v * 0.9);
    steps.setColorAt(i, col);
  }
  steps.castShadow = steps.receiveShadow = true;
  return steps;
}

// ---------- jetty ----------
export function buildJetty() {
  const grp = new THREE.Group();
  const thJ = CFG.jettyAz;
  const [sx, sz] = polar(thJ, coastR(thJ) - 0.7);
  const dir = new THREE.Vector3(Math.cos(thJ), 0, Math.sin(thJ));
  const len = 5.4;
  const end = new THREE.Vector3(sx, 0, sz).addScaledVector(dir, len);
  const deckY = 0.6;
  const W = 1.6;

  // stringers
  for (const side of [-1, 1]) {
    const st = new THREE.Mesh(new THREE.BoxGeometry(len, 0.1, 0.1), mat('wood'));
    st.position.set(sx + dir.x * len / 2, deckY - 0.12, sz + dir.z * len / 2)
      .add(new THREE.Vector3(-dir.z, 0, dir.x).multiplyScalar(side * (W / 2 - 0.1)));
    st.rotation.y = Math.atan2(dir.x, dir.z) + Math.PI / 2;
    grp.add(st);
  }
  // planks
  const nP = Math.floor(len / 0.27);
  for (let i = 0; i < nP; i++) {
    const t = i / (nP - 1);
    const p = new THREE.Vector3(sx, 0, sz).addScaledVector(dir, t * len);
    const pl = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.06, W), mat('wood'));
    pl.position.set(p.x, deckY, p.z);
    pl.rotation.y = Math.atan2(dir.x, dir.z) + Math.PI / 2 + (rnd() - 0.5) * 0.06;
    pl.castShadow = pl.receiveShadow = true;
    grp.add(pl);
  }
  // posts down to the seabed
  const nPost = 5;
  for (let i = 0; i < nPost; i++) {
    const t = (i + 0.5) / nPost;
    const p = new THREE.Vector3(sx, 0, sz).addScaledVector(dir, t * len);
    for (const side of [-1, 1]) {
      const pp = p.clone().addScaledVector(new THREE.Vector3(-dir.z, 0, dir.x), side * (W / 2 - 0.08));
      const gb = terrainHeight(pp.x, pp.z);
      const hgt = deckY - gb + 0.15;
      const post = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.08, hgt, 8), mat('wood'));
      post.position.set(pp.x, gb + hgt / 2 - 0.1, pp.z);
      post.castShadow = true;
      grp.add(post);
    }
  }
  // end platform + mooring posts + cleats
  const plat = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.07, W + 0.4), mat('wood'));
  plat.position.set(end.x + dir.x * 0.3, deckY, end.z + dir.z * 0.3);
  plat.rotation.y = Math.atan2(dir.x, dir.z) + Math.PI / 2;
  plat.castShadow = plat.receiveShadow = true;
  grp.add(plat);
  const cleatPos = new THREE.Vector3(end.x + dir.x * 0.3, deckY + 0.1, end.z + dir.z * 0.3)
    .addScaledVector(new THREE.Vector3(-dir.z, 0, dir.x), 0.7);
  const cleat = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.06, 0.3, 8), mat('woodDark'));
  cleat.position.copy(cleatPos).setY(deckY + 0.12);
  cleat.castShadow = true;
  grp.add(cleat);
  // shore-side mooring post
  const mp = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.11, 0.5, 8), mat('woodDark'));
  mp.position.set(sx - dir.x * 0.2, deckY + 0.1, sz - dir.z * 0.2);
  mp.castShadow = true;
  grp.add(mp);

  grp.userData = { cleatPos, end, deckY };
  return grp;
}

// ---------- boat hull ----------
function buildHullGeom(L = 2.3, B = 0.95, D = 0.5) {
  const NS = 12, NR = 7;
  // lofted hull: stations along length, ring from port sheer down around keel to starboard sheer
  const rows2 = [];
  for (let i = 0; i <= NS; i++) {
    const t = i / NS;
    const x = -L / 2 + t * L;
    const w = (B / 2) * Math.pow(Math.sin(Math.PI * mix(0.06, 0.94, t)), 0.6);
    const keel = -D * (0.3 + 0.7 * Math.sin(Math.PI * t));
    const deck = 0.16 + 0.16 * Math.pow(Math.abs(t - 0.45) * 2, 1.7);
    const ring = [];
    for (let j = 0; j < NR; j++) {
      const f = j / (NR - 1);          // 0 = port deck edge, 0.5 = keel, 1 = starboard deck edge
      const side = f < 0.5 ? -1 : 1;
      const u = Math.abs(f - 0.5) * 2; // 1 at deck edge, 0 at keel
      const y = keel + (deck - keel) * u * u;
      const z = side * w * Math.pow(u, 0.75);
      ring.push([x, y, z]);
    }
    rows2.push(ring);
  }
  const pos = [], idx = [];
  for (const row of rows2) for (const [x, y, z] of row) pos.push(x, y, z);
  for (let i = 0; i < NS; i++) {
    for (let j = 0; j < NR - 1; j++) {
      const a = i * NR + j, b = a + 1, c = a + NR, d = c + 1;
      idx.push(a, c, b, b, c, d);
    }
  }
  // deck cap (fan strip)
  const deckBase = pos.length / 3;
  for (let i = 0; i <= NS; i++) {
    const ring = rows2[i];
    const p = ring[0], q = ring[NR - 1];
    pos.push(p[0], p[1] + 0.02, p[2] * 0.94);
    pos.push(q[0], q[1] + 0.02, q[2] * 0.94);
  }
  for (let i = 0; i < NS; i++) {
    const a = deckBase + i * 2, b = a + 1, c = a + 2, d = a + 3;
    idx.push(a, b, c, b, d, c);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setIndex(idx);
  geo.computeVertexNormals();
  return { geo, rows: rows2, NR };
}

export function buildBoat(kind) {
  const grp = new THREE.Group();
  const { geo, rows, NR } = buildHullGeom();
  const cols = new Float32Array(geo.attributes.position.count * 3);
  const cHull = kind === 0 ? new THREE.Color(0x2e6f6a) : new THREE.Color(0x9c4a38);
  const cStripe = new THREE.Color(0xe8e0cc);
  const cWood = new THREE.Color(0x7a6a4e);
  const tmp = new THREE.Color();
  const nHull = rows.length * NR;
  for (let i = 0; i < nHull; i++) {
    const vi = Math.floor(i / NR), vj = i % NR;
    const y = rows[vi][vj][1];
    tmp.copy(cHull);
    if (y > 0.1) tmp.lerp(cStripe, sstep(y, 0.12, 0.24) * 0.85);
    if (y < -0.3) tmp.lerp(cWood, 0.3);
    cols[i * 3] = tmp.r; cols[i * 3 + 1] = tmp.g; cols[i * 3 + 2] = tmp.b;
  }
  // deck cap verts colored wood
  for (let i = nHull; i < geo.attributes.position.count; i++) {
    cols[i * 3] = cWood.r; cols[i * 3 + 1] = cWood.g; cols[i * 3 + 2] = cWood.b;
  }
  geo.setAttribute('color', new THREE.BufferAttribute(cols, 3));
  const hull = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.8, side: THREE.DoubleSide }));
  hull.castShadow = true;
  grp.add(hull);

  // gunwale trim
  const rimPts = rows.map(r => new THREE.Vector3(r[0][0], r[0][1], r[0][2]));
  const rimPtsS = rows.map(r => new THREE.Vector3(r[NR - 1][0], r[NR - 1][1], r[NR - 1][2]));
  for (const pts of [rimPts, rimPtsS]) {
    const curve = new THREE.CatmullRomCurve3(pts);
    const tube = new THREE.Mesh(new THREE.TubeGeometry(curve, 24, 0.028, 6), mat('woodDark'));
    grp.add(tube);
  }
  // thwarts
  for (const t of [-0.45, 0.15, 0.6]) {
    const i = Math.round((t + 1.15) / 2.3 * (rows.length - 1));
    const ring = rows[i];
    const y = ring[3][1] + 0.06;
    const wHalf = Math.abs(ring[0][2]) - 0.05;
    const bench = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.05, wHalf * 2), mat('wood'));
    bench.position.set(ring[3][0], y, 0);
    bench.castShadow = true;
    grp.add(bench);
  }
  // bow cleat
  const cleat = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.035, 0.14, 6), mat('iron'));
  cleat.rotation.z = Math.PI / 2;
  cleat.position.set(1.02, 0.3, 0);
  grp.add(cleat);
  grp.userData.bowLocal = new THREE.Vector3(1.05, 0.28, 0);

  if (kind === 1) {
    // small wheelhouse
    const wh = new THREE.Mesh(new THREE.BoxGeometry(0.72, 0.5, 0.62), new THREE.MeshStandardMaterial({ map: tex('plaster'), color: 0xcfc6ae, roughness: 0.9 }));
    wh.position.set(-0.5, 0.42, 0);
    wh.castShadow = true;
    const whRoof = new THREE.Mesh(new THREE.BoxGeometry(0.82, 0.05, 0.72), mat('woodDark'));
    whRoof.position.set(-0.5, 0.69, 0);
    const win = new THREE.Mesh(new THREE.PlaneGeometry(0.4, 0.2), new THREE.MeshStandardMaterial({ color: 0x2b3a42, roughness: 0.3, metalness: 0.3 }));
    win.position.set(-0.14, 0.48, 0.32);
    grp.add(wh, whRoof, win);
  } else {
    // fishing crate + rope coil
    const crate = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.24, 0.3), mat('wood'));
    crate.position.set(-0.35, 0.32, 0.12);
    crate.rotation.y = 0.4;
    crate.castShadow = true;
    const coil = new THREE.Mesh(new THREE.TorusGeometry(0.12, 0.032, 8, 18), mat('rope'));
    coil.rotation.x = Math.PI / 2;
    coil.position.set(0.1, 0.3, -0.15);
    grp.add(crate, coil);
  }
  return grp;
}

// ---------- harbor props ----------
export function buildProps(jetty) {
  const grp = new THREE.Group();
  const thJ = CFG.jettyAz;
  const dir = new THREE.Vector3(Math.cos(thJ), 0, Math.sin(thJ));
  const perp = new THREE.Vector3(-dir.z, 0, dir.x);

  // buoy for boat B
  const buoy = new THREE.Group();
  const bb = new THREE.Mesh(new THREE.SphereGeometry(0.2, 12, 10), new THREE.MeshStandardMaterial({ color: 0xc23b2e, roughness: 0.6 }));
  bb.scale.y = 1.25;
  const stick = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 0.42, 6), mat('iron'));
  stick.position.y = 0.3;
  const flag = new THREE.Mesh(new THREE.PlaneGeometry(0.16, 0.1), new THREE.MeshStandardMaterial({ color: 0xe07840, side: THREE.DoubleSide }));
  flag.position.set(0.08, 0.46, 0);
  buoy.add(bb, stick, flag);
  const buoyPos = polar(thJ + 0.3, coastR(thJ) + 5.6);
  buoy.position.set(buoyPos[0], 0, buoyPos[1]);
  grp.add(buoy);
  // anchor chain hint
  const seab = terrainHeight(buoyPos[0], buoyPos[1]);
  const chain = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, Math.hypot(0.2 - seab, 0.3), 4), mat('iron'));
  chain.position.set(buoyPos[0], (seab + 0) / 2, buoyPos[1]);
  chain.rotation.z = 0.1;
  grp.add(chain);

  // lobster pots near cottage, leaning on wall
  const potMat = new THREE.MeshStandardMaterial({ color: 0x3d3630, wireframe: true, roughness: 1 });
  for (let i = 0; i < 2; i++) {
    const pot = new THREE.Mesh(new THREE.IcosahedronGeometry(0.3, 1), potMat);
    pot.scale.y = 0.62;
    const a = 0.9 + i * 0.5;
    const px = CFG.cottageP[0] + Math.cos(a) * 2.2, pz = CFG.cottageP[1] + Math.sin(a) * 2.2;
    pot.position.set(px, terrainHeight(px, pz) + 0.18, pz);
    pot.rotation.y = rnd() * 3;
    pot.castShadow = true;
    grp.add(pot);
  }
  // crates + barrel + rope coil on the grass by jetty path
  const place = (mesh, x, z, dy, ry) => {
    mesh.position.set(x, terrainHeight(x, z) + dy, z);
    mesh.rotation.y = ry;
    mesh.castShadow = true;
    grp.add(mesh);
  };
  const crate = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.3, 0.36), mat('wood'));
  place(crate, 4.6, 6.9, 0.15, 0.5);
  const crate2 = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.26, 0.32), mat('wood'));
  place(crate2, 4.95, 6.65, 0.13, 0.2);
  crate2.position.y += 0.28;
  const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.19, 0.19, 0.42, 12), mat('wood'));
  place(barrel, 5.2, 7.3, 0.21, 1.2);
  for (const hy of [-0.1, 0.1]) {
    const hoop = new THREE.Mesh(new THREE.TorusGeometry(0.195, 0.014, 6, 16), mat('iron'));
    hoop.rotation.x = Math.PI / 2;
    hoop.position.set(barrel.position.x, barrel.position.y + hy, barrel.position.z);
    grp.add(hoop);
  }
  const coil = new THREE.Mesh(new THREE.TorusGeometry(0.16, 0.045, 8, 20), mat('rope'));
  coil.rotation.x = Math.PI / 2;
  place(coil, 4.2, 6.5, 0.05, 0);

  // oar leaning on the jetty shore post
  const oar = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.035, 1.3, 6), mat('wood'));
  oar.position.set(jetty.userData.cleatPos.x - 0.3, 0.65, jetty.userData.cleatPos.z + 0.15);
  oar.rotation.z = 0.5;
  oar.rotation.y = 0.6;
  oar.castShadow = true;
  grp.add(oar);

  grp.userData.buoy = buoy;
  grp.userData.buoyPos = new THREE.Vector3(buoyPos[0], 0, buoyPos[1]);
  return grp;
}

// dynamic mooring ropes
export class Rope {
  constructor(scene, radius = 0.024) {
    this.mesh = new THREE.Mesh(new THREE.BufferGeometry(), mat('rope'));
    this.mesh.castShadow = false;
    this.mesh.frustumCulled = false;
    this.radius = radius;
    scene.add(this.mesh);
  }
  update(a, b, slack = 0.16) {
    const len = a.distanceTo(b);
    const mid1 = a.clone().lerp(b, 0.35); mid1.y -= len * slack * 0.8;
    const mid2 = a.clone().lerp(b, 0.7); mid2.y -= len * slack;
    const curve = new THREE.CatmullRomCurve3([a, mid1, mid2, b]);
    this.mesh.geometry.dispose();
    this.mesh.geometry = new THREE.TubeGeometry(curve, 10, this.radius, 5);
  }
}
