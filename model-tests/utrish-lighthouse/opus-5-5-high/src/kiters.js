// A single kiteboarder in the island's lee, modelled after photos of twin-tip riding:
// a leading-edge-inflatable kite (dark inflated leading edge, struts, panelled canopy) on four lines,
// a control bar with chicken loop to a waist harness, the rider crouched heel-side and leaning back,
// a twin-tip board with rocker, pads, straps and fins, a spray fan off the upwind rail and a foam wake.
// The rider crosses the wind on alternating tacks, jibes with the kite swinging overhead, and now and then
// sends the kite up for a jump with knees tucked and a grab.
import * as THREE from 'three';
import { mulberry32, clamp } from './noise.js';
import { KITE_ZONE, outlineMargin } from './world.js';
import { WAVES } from './waves.js';

const rnd = mulberry32(3141);
const R = (a, b) => a + (b - a) * rnd();
const deg = Math.PI / 180;
const WIND_ANG = WAVES[0].dir; // the wind blows toward ESE, like the main swell
const W = new THREE.Vector3(Math.cos(WIND_ANG), 0, Math.sin(WIND_ANG));
const PERP = new THREE.Vector3(-W.z, 0, W.x);
const UP = new THREE.Vector3(0, 1, 0);
const LINE = 18;
const smooth = (t) => t * t * (3 - 2 * t);
const bump = (s, a, b) => (s <= a || s >= b ? 0 : Math.sin(Math.PI * (s - a) / (b - a)));
const V = (x, y, z) => new THREE.Vector3(x, y, z);

// ------------------------------------------------------------------ kite: CORE XR (2026 "XR X" generation), 9 m,
// BrightWhite colourway as on the maker's product renders: white canopy with grey halftone panels,
// teal diagonal bands toward the wingtips, big "XR" and outlined size "9", black/white leading edge, 5 struts.
const TEAL = '#35c2b8';
function xrCanopyTexture() {
  const W = 2048, H = 512; // u (span, tip to tip) along x, v (leading edge -> trailing edge) along y
  const c = document.createElement('canvas'); c.width = W; c.height = H;
  const x = c.getContext('2d');
  x.fillStyle = '#f4f5f3'; x.fillRect(0, 0, W, H);
  // grey halftone gradients in the panels between struts
  const dots = (x0, x1, y0, y1, dark) => {
    for (let yy = y0; yy < y1; yy += 9) for (let xx = x0; xx < x1; xx += 9) {
      const k = (xx - x0) / (x1 - x0);
      const r = 3.6 * Math.max(0, Math.sin(Math.PI * k)) * (0.4 + 0.6 * (yy - y0) / (y1 - y0));
      if (r < 0.4) continue;
      x.fillStyle = dark; x.beginPath(); x.arc(xx, yy, r, 0, Math.PI * 2); x.fill();
    }
  };
  for (const [a, b] of [[300, 620], [720, 980], [1068, 1328], [1428, 1748]]) dots(a, b, 120, 470, 'rgba(120,124,128,0.55)');
  // both wing halves carry the same graphics, mirrored
  const half = (mirror) => {
    x.save();
    if (mirror) { x.translate(W, 0); x.scale(-1, 1); }
    // teal diagonal band and black block near the tip
    x.fillStyle = TEAL;
    x.beginPath(); x.moveTo(170, 0); x.lineTo(250, 0); x.lineTo(330, H); x.lineTo(250, H); x.fill();
    x.fillStyle = '#16181a';
    x.beginPath(); x.moveTo(0, 0); x.lineTo(150, 0); x.lineTo(175, H * 0.42); x.lineTo(0, H * 0.42); x.fill();
    x.fillStyle = TEAL; x.fillRect(80, 470, 60, 6); x.fillRect(560, 300, 50, 7);
    // size "9" (outlined) and "XR"
    x.save();
    x.translate(430, 330); if (mirror) x.scale(-1, 1);
    x.strokeStyle = TEAL; x.lineWidth = 12; x.font = 'bold 300px Arial, Helvetica, sans-serif';
    x.textAlign = 'center'; x.textBaseline = 'middle';
    x.strokeText('9', 0, 20);
    x.fillStyle = TEAL; x.font = 'bold 150px Arial, Helvetica, sans-serif';
    x.fillText('XR', 210, -110);
    x.restore();
    // vertical CORE wordmark along the tip
    x.save(); x.translate(110, 330); x.rotate(mirror ? Math.PI / 2 : -Math.PI / 2);
    x.fillStyle = '#16181a'; x.font = 'bold 54px Arial, Helvetica, sans-serif'; x.textAlign = 'center';
    x.fillText('CORE', 0, 18); x.restore();
    // small yellow label as on the renders
    x.fillStyle = '#e8d63a'; x.fillRect(640, 220, 70, 12);
    x.restore();
  };
  half(false); half(true);
  // black centre block under the leading edge with the big "C"
  x.fillStyle = '#16181a';
  x.beginPath(); x.moveTo(820, 0); x.lineTo(1228, 0); x.lineTo(1180, 150); x.lineTo(868, 150); x.fill();
  x.strokeStyle = '#f4f5f3'; x.lineWidth = 16; x.beginPath(); x.arc(1024, 72, 46, 0.35 * Math.PI, 1.65 * Math.PI); x.stroke();
  // trailing edge seam
  x.fillStyle = '#2a2c2e'; x.fillRect(0, H - 10, W, 10);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  return t;
}
// leading edge tube / struts: white with black sections and stripes
function xrTubeTexture(strut) {
  const c = document.createElement('canvas'); c.width = 1024; c.height = 32;
  const x = c.getContext('2d');
  if (strut) {
    x.fillStyle = '#16181a'; x.fillRect(0, 0, 1024, 32);
    x.fillStyle = '#f4f5f3'; x.font = 'bold 22px Arial'; x.fillText('CORE', 80, 24);
  } else {
    x.fillStyle = '#f4f5f3'; x.fillRect(0, 0, 1024, 32);
    x.fillStyle = '#16181a';
    x.fillRect(0, 0, 90, 32); x.fillRect(1024 - 90, 0, 90, 32); // dark tips
    x.fillRect(400, 0, 224, 32); // dark centre section
    for (let i = 120; i < 1024 - 120; i += 46) if (i < 380 || i > 640) x.fillRect(i, 0, 6, 32); // stripes
    x.fillStyle = TEAL; x.fillRect(250, 0, 26, 32); x.fillRect(748, 0, 26, 32);
    x.fillStyle = '#f4f5f3'; x.font = 'bold 24px Arial'; x.fillText('CORE', 480, 24);
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
function buildKite() {
  const g = new THREE.Group();
  const SEG = 48, CH = 8, Rad = 3.6, arc = 1.18;
  // XR: hybrid C / delta planform with fairly square tips
  const chordAt = (u) => 2.35 * (1 - 0.5 * Math.pow(Math.abs(u), 2.6));
  const point = (u, v, out = new THREE.Vector3()) => {
    const phi = u * arc, c = chordAt(u);
    out.set(Rad * Math.sin(phi), Rad * (Math.cos(phi) - 1), (v - 0.15) * c - 0.12 * Math.abs(u) * Math.abs(u));
    out.y += 0.16 * Math.sin(Math.PI * Math.min(1, v * 1.15)) * (1 - 0.5 * Math.abs(u)); // canopy billow
    return out;
  };
  const pos = [], uvs = [], idx = [];
  const p = new THREE.Vector3();
  for (let i = 0; i <= SEG; i++) {
    const u = -1 + (2 * i) / SEG;
    for (let j = 0; j <= CH; j++) {
      const v = j / CH;
      point(u, v, p);
      pos.push(p.x, p.y, p.z);
      uvs.push((u + 1) / 2, 1 - v);
    }
  }
  for (let i = 0; i < SEG; i++) for (let j = 0; j < CH; j++) {
    const a = i * (CH + 1) + j, b = a + CH + 1;
    idx.push(a, b, a + 1, a + 1, b, b + 1);
  }
  const cg = new THREE.BufferGeometry();
  cg.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  cg.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  cg.setIndex(idx);
  cg.computeVertexNormals();
  const canopy = new THREE.Mesh(cg, new THREE.MeshStandardMaterial({ map: xrCanopyTexture(), roughness: 0.5, side: THREE.DoubleSide }));
  canopy.castShadow = true;
  g.add(canopy);
  // inflated leading edge
  const le = [];
  for (let i = 0; i <= 30; i++) le.push(point(-1 + (2 * i) / 30, 0).add(V(0, 0.03, -0.04)));
  g.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(le), 90, 0.12, 10),
    new THREE.MeshStandardMaterial({ map: xrTubeTexture(false), roughness: 0.4 })));
  // five struts
  const strutMat = new THREE.MeshStandardMaterial({ map: xrTubeTexture(true), roughness: 0.45 });
  for (const u of [-0.68, -0.34, 0, 0.34, 0.68]) {
    const st = [];
    for (let j = 0; j <= 8; j++) st.push(point(u, (j / 8) * 0.8).add(V(0, 0.025, 0)));
    g.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(st), 16, 0.05, 6), strutMat));
  }
  return {
    group: g,
    front: [point(-0.32, 0.02), point(0.32, 0.02)], // front lines (via the bridle) to the leading edge
    back: [point(-1, 0.75), point(1, 0.75)], // steering lines to the wingtips
  };
}

// ------------------------------------------------------------------ twin-tip board
function boardDeckTexture() {
  const c = document.createElement('canvas');
  c.width = 512; c.height = 160;
  const x = c.getContext('2d');
  x.fillStyle = '#f26a1b'; x.fillRect(0, 0, 512, 160);
  x.fillStyle = '#1c2b4a';
  x.beginPath(); x.moveTo(170, 0); x.lineTo(260, 0); x.lineTo(200, 160); x.lineTo(110, 160); x.fill();
  x.fillStyle = '#ffffff';
  x.beginPath(); x.moveTo(275, 0); x.lineTo(300, 0); x.lineTo(240, 160); x.lineTo(215, 160); x.fill();
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
function buildBoard() {
  const g = new THREE.Group();
  const L = 1.38, Wd = 0.42, r = 0.13;
  const s = new THREE.Shape();
  s.moveTo(-L / 2 + r, -Wd / 2);
  s.lineTo(L / 2 - r, -Wd / 2); s.quadraticCurveTo(L / 2, -Wd / 2, L / 2, -Wd / 2 + r);
  s.lineTo(L / 2, Wd / 2 - r); s.quadraticCurveTo(L / 2, Wd / 2, L / 2 - r, Wd / 2);
  s.lineTo(-L / 2 + r, Wd / 2); s.quadraticCurveTo(-L / 2, Wd / 2, -L / 2, Wd / 2 - r);
  s.lineTo(-L / 2, -Wd / 2 + r); s.quadraticCurveTo(-L / 2, -Wd / 2, -L / 2 + r, -Wd / 2);
  const geo = new THREE.ExtrudeGeometry(s, { depth: 0.022, bevelEnabled: true, bevelThickness: 0.008, bevelSize: 0.01, bevelSegments: 2, curveSegments: 6 });
  geo.rotateX(-Math.PI / 2); // lie flat: shape x -> board length
  const pa = geo.attributes.position, uv = geo.attributes.uv;
  for (let i = 0; i < pa.count; i++) {
    const bx = pa.getX(i);
    pa.setY(i, pa.getY(i) + 0.07 * Math.pow(Math.abs(bx) / (L / 2), 2.4)); // rocker
    uv.setXY(i, (bx + L / 2) / L, (-pa.getZ(i) + Wd / 2) / Wd);
  }
  geo.computeVertexNormals();
  g.add(new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ map: boardDeckTexture(), roughness: 0.35 })));
  const dark = new THREE.MeshStandardMaterial({ color: 0x202226, roughness: 0.7 });
  const strapM = new THREE.MeshStandardMaterial({ color: 0x2b6cb0, roughness: 0.6 });
  for (const fx of [-0.33, 0.33]) {
    const pad = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.03, 0.27), dark);
    pad.position.set(fx, 0.045, 0);
    g.add(pad);
    const strap = new THREE.Mesh(new THREE.TorusGeometry(0.1, 0.022, 6, 12, Math.PI), strapM);
    strap.rotation.y = Math.PI / 2;
    strap.position.set(fx, 0.06, 0);
    g.add(strap);
  }
  for (const fx of [-0.62, 0.62]) for (const fz of [-0.14, 0.14]) {
    const fin = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.045, 0.012), dark);
    fin.position.set(fx, -0.02, fz);
    g.add(fin);
  }
  const handle = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.02, 0.03), dark);
  handle.position.set(0, 0.04, 0);
  g.add(handle);
  return g;
}

// ------------------------------------------------------------------ rider (posed every frame from joints)
function buildRider() {
  const body = new THREE.Group();
  const mat = (c, r = 0.65) => new THREE.MeshStandardMaterial({ color: c, roughness: r });
  const skin = mat(0xc6926e, 0.7), shorts = mat(0x24324f), vest = mat(0x1aa0a0, 0.5), harness = mat(0x18181b, 0.5);
  const limb = (r0, r1, m) => { const mm = new THREE.Mesh(new THREE.CylinderGeometry(r1, r0, 1, 8), m); body.add(mm); return mm; };
  const parts = {
    thighF: limb(0.085, 0.07, shorts), thighB: limb(0.085, 0.07, shorts),
    shinF: limb(0.062, 0.05, skin), shinB: limb(0.062, 0.05, skin),
    torso: limb(0.15, 0.17, vest), harness: limb(0.175, 0.175, harness),
    neck: limb(0.05, 0.05, skin),
    uArmF: limb(0.055, 0.05, skin), uArmB: limb(0.055, 0.05, skin),
    fArmF: limb(0.045, 0.04, skin), fArmB: limb(0.045, 0.04, skin),
    bar: limb(0.016, 0.016, mat(0x111111, 0.4)), loop: limb(0.012, 0.012, mat(0xd8d02a, 0.5)),
  };
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.115, 12, 10), skin);
  const hair = new THREE.Mesh(new THREE.SphereGeometry(0.12, 12, 8, 0, Math.PI * 2, 0, Math.PI * 0.55), mat(0x3a2a1c, 0.9));
  const feet = [0, 1].map(() => { const f = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.06, 0.1), skin); body.add(f); return f; });
  body.add(head, hair);
  const set = (m, a, b) => {
    const d = new THREE.Vector3().subVectors(b, a);
    const l = d.length();
    m.position.copy(a).add(b).multiplyScalar(0.5);
    m.quaternion.setFromUnitVectors(UP, d.multiplyScalar(1 / Math.max(l, 1e-4)));
    m.scale.set(1, l, 1);
  };
  // body frame: x along the board (lead foot +x), y up, z toward the kite
  function pose({ crouch, lean, tuck, grab, kiteDir }) {
    const fF = V(0.33, 0.1, 0), fB = V(-0.33, 0.1, 0);
    const kneeY = 0.5 - 0.08 * crouch + 0.28 * tuck;
    const kneeZ = 0.12 + 0.14 * crouch + 0.22 * tuck;
    const kF = V(0.29, kneeY, kneeZ), kB = V(-0.27, kneeY - 0.02, kneeZ - 0.02);
    const hip = V(0.02, 0.86 - 0.2 * crouch - 0.05 * tuck, -0.08 - 0.2 * crouch + 0.12 * tuck);
    const tdir = V(0.04, Math.cos(lean), -Math.sin(lean)).normalize();
    const chest = hip.clone().addScaledVector(tdir, 0.52);
    const neckTop = chest.clone().addScaledVector(tdir, 0.12);
    const headC = neckTop.clone().addScaledVector(tdir, 0.11);
    const side = V(1, 0, 0);
    const shF = chest.clone().addScaledVector(side, 0.19).addScaledVector(tdir, -0.04);
    const shB = chest.clone().addScaledVector(side, -0.19).addScaledVector(tdir, -0.04);
    const hook = hip.clone().addScaledVector(tdir, 0.1).add(V(0, 0, 0.16));
    const barC = hook.clone().addScaledVector(kiteDir, 0.48);
    const barF = barC.clone().add(V(0.25, 0, 0)), barB = barC.clone().add(V(-0.25, 0, 0));
    const handF = barF.clone().add(V(-0.06, 0, 0));
    const handB = barB.clone().add(V(0.06, 0, 0));
    if (grab > 0) handB.lerp(V(-0.2, 0.2, -0.21), grab); // reach down to the heel-side rail
    const elbow = (sh, h) => sh.clone().add(h).multiplyScalar(0.5).add(V(0, -0.08, -0.04));
    set(parts.thighF, hip.clone().add(V(0.1, 0, 0)), kF); set(parts.thighB, hip.clone().add(V(-0.1, 0, 0)), kB);
    set(parts.shinF, kF, fF); set(parts.shinB, kB, fB);
    feet[0].position.copy(fF).add(V(0, -0.04, 0.03)); feet[1].position.copy(fB).add(V(0, -0.04, 0.03));
    set(parts.torso, hip, chest);
    set(parts.harness, hip.clone().addScaledVector(tdir, 0.02), hip.clone().addScaledVector(tdir, 0.17));
    set(parts.neck, chest, neckTop);
    head.position.copy(headC);
    hair.position.copy(headC);
    hair.quaternion.setFromUnitVectors(UP, tdir);
    const eF = elbow(shF, handF), eB = elbow(shB, handB);
    set(parts.uArmF, shF, eF); set(parts.fArmF, eF, handF);
    set(parts.uArmB, shB, eB); set(parts.fArmB, eB, handB);
    set(parts.bar, barB, barF);
    set(parts.loop, hook, barC);
    return { barC, barF, barB };
  }
  return { body, pose };
}

// ------------------------------------------------------------------ wake ribbon floating on the water
class Wake {
  constructor(fxScene) {
    this.N = 70;
    this.pts = [];
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(this.N * 2 * 3), 3));
    g.setAttribute('color', new THREE.BufferAttribute(new Float32Array(this.N * 2 * 4), 4));
    const idx = [];
    for (let i = 0; i < this.N - 1; i++) { const a = i * 2; idx.push(a, a + 2, a + 1, a + 1, a + 2, a + 3); }
    g.setIndex(idx);
    g.setDrawRange(0, 0);
    this.mesh = new THREE.Mesh(g, new THREE.MeshBasicMaterial({ vertexColors: true, transparent: true, depthWrite: false, side: THREE.DoubleSide }));
    this.mesh.frustumCulled = false;
    fxScene.add(this.mesh);
  }
  add(x, z, t, on) {
    const last = this.pts[this.pts.length - 1];
    if (last && Math.hypot(last.x - x, last.z - z) < 0.7) return;
    this.pts.push({ x, z, t, on });
    if (this.pts.length > this.N) this.pts.shift();
  }
  update(t, sampler) {
    const g = this.mesh.geometry, P = g.attributes.position, C = g.attributes.color;
    const n = this.pts.length;
    for (let i = 0; i < n; i++) {
      const p = this.pts[i], q = this.pts[Math.min(n - 1, i + 1)], o = this.pts[Math.max(0, i - 1)];
      let dx = q.x - o.x, dz = q.z - o.z; const l = Math.hypot(dx, dz) || 1; dx /= l; dz /= l;
      const age = t - p.t;
      const w = 0.25 + age * 0.22;
      const y = sampler.height(p.x, p.z, t) + 0.05;
      P.setXYZ(i * 2, p.x - dz * w, y, p.z + dx * w);
      P.setXYZ(i * 2 + 1, p.x + dz * w, y, p.z - dx * w);
      const a = p.on ? Math.pow(Math.max(0, 1 - age / 7), 1.6) * 0.6 : 0;
      C.setXYZW(i * 2, 0.95, 0.97, 0.97, a);
      C.setXYZW(i * 2 + 1, 0.95, 0.97, 0.97, a);
    }
    P.needsUpdate = true; C.needsUpdate = true;
    g.setDrawRange(0, Math.max(0, n - 1) * 6);
  }
}

// ------------------------------------------------------------------ the kiteboarder
class Kiteboarder {
  constructor(ctx, x, z) {
    this.ctx = ctx;
    this.x = x; this.z = z;
    this.tack = 1; this.theta = 100 * deg;
    this.heading = WIND_ANG + this.tack * this.theta;
    this.speed = 7; this.state = 'ride';
    this.leg = 0; this.legLen = R(40, 70);
    this.nextJump = null; this.tookOff = false;
    this.facing = 0; this.edge = 0.25; this.crouch = 0.6; this.lean = 0.5; this.tuck = 0; this.grab = 0;
    this.root = new THREE.Group();
    this.board = buildBoard();
    this.rider = buildRider();
    this.root.add(this.board, this.rider.body);
    ctx.scene.add(this.root);
    this.kite = buildKite();
    ctx.scene.add(this.kite.group);
    const lg = new THREE.BufferGeometry();
    lg.setAttribute('position', new THREE.BufferAttribute(new Float32Array(8 * 3), 3));
    this.lines = new THREE.LineSegments(lg, new THREE.LineBasicMaterial({ color: 0x303030, transparent: true, opacity: 0.75 }));
    this.lines.frustumCulled = false;
    ctx.scene.add(this.lines);
    this.wake = new Wake(ctx.fxScene);
  }
  travelSide() { return Math.sign(Math.cos(this.heading) * PERP.x + Math.sin(this.heading) * PERP.z) || 1; }
  allowed(x, z, slack = 0) {
    const Z = KITE_ZONE;
    if (x < Z.x0 - slack || x > Z.x1 + slack || z < Z.z0 - slack) return false;
    if (outlineMargin(x, z) < 15 - slack * 0.5) return false;
    const b1 = this.ctx.bake.sample1(x, z), b2 = this.ctx.bake.sample2(x, z);
    if (b1[2] > -3 + slack * 0.1 || b1[3] > 0.02 || b2[3] * 40 < 15 - slack) return false; // well clear of rocks and shore
    if (Math.hypot(x + 5, z - 66) < 16 - slack) return false; // keep clear of the strait
    return true;
  }
  update(dt, t) {
    const C = this.ctx;
    if (this.nextJump === null) this.nextJump = t + R(5, 9);
    // tacks: an upwind leg (close reach, kite ~110 deg off downwind) and a broad-reach leg back;
    // both run along the long axis of the kiting water. Small corrections keep the rider in the middle.
    const along = (this.x - KITE_ZONE.cx) * W.x + (this.z - KITE_ZONE.cz) * W.z;
    const cross = (this.x - KITE_ZONE.cx) * PERP.x + (this.z - KITE_ZONE.cz) * PERP.z;
    const dz = this.z - KITE_ZONE.cz; // > 0: drifted toward the outer (southern) edge -> point higher
    const thetaFor = (tk) => (tk > 0 ? 118 + clamp(dz * 2.6 + along * 0.2, -14, 32) : 58 + clamp(dz * 2.6, -18, 30)) * deg;
    const targetTheta = thetaFor(this.tack);
    let spd = 7.5, edge = 0.3, crouch = 0.8, lean = 0.72, tuck = 0, grab = 0, lift = 0, spin = 0, pitch = 0;
    // gentle figure-of-eight of the kite to keep the power on
    let az = ((this.tack > 0 ? 48 : 62) + 9 * Math.sin(t * 1.1)) * deg, el = (31 + 6 * Math.sin(t * 2.2 + 1)) * deg;

    const lost = !this.allowed(this.x, this.z, 6);
    if (lost && this.state !== 'jump') {
      const want = Math.atan2(KITE_ZONE.cz - this.z, KITE_ZONE.cx - this.x);
      let dh = want - this.heading; dh = Math.atan2(Math.sin(dh), Math.cos(dh));
      this.heading += clamp(dh, -2.2 * dt, 2.2 * dt);
      this.state = 'ride'; this.tack = this.travelSide();
      this.theta = Math.abs(Math.atan2(Math.sin(this.heading - WIND_ANG), Math.cos(this.heading - WIND_ANG)));
      this.leg = 0;
    } else if (this.state === 'ride') {
      this.theta += (targetTheta - this.theta) * Math.min(1, dt * 0.4);
      this.heading = WIND_ANG + this.tack * this.theta;
      const ahead = 20;
      // turn well before running out of water ahead (the jibe carries the rider on downwind)
      const blocked = !this.allowed(this.x + Math.cos(this.heading) * ahead, this.z + Math.sin(this.heading) * ahead);
      if ((blocked && this.leg > 5) || this.leg > this.legLen) {
        this.state = 'turn'; this.t0 = t; this.dur = R(1.9, 2.5); this.newTack = -this.tack; this.turnSide = this.travelSide();
      } else if (t > this.nextJump && !blocked && this.leg > 4 && this.leg < this.legLen - 12 &&
        this.allowed(this.x + Math.cos(this.heading) * 24, this.z + Math.sin(this.heading) * 24)) { // room to land
        this.state = 'jump'; this.t0 = t; this.dur = R(2.3, 2.8); this.jumpH = R(3.5, 5.5);
        this.spinDir = rnd() < 0.35 ? (rnd() < 0.5 ? -1 : 1) : 0;
      }
    }
    let sideSign = this.travelSide();
    if (this.state === 'turn') {
      const s = Math.min(1, (t - this.t0) / this.dur), k = smooth(s);
      const hOld = this.tack * this.theta, hNew = this.newTack * thetaFor(this.newTack);
      this.heading = WIND_ANG + (k < 0.5 ? hOld * (1 - k * 2) : hNew * (k * 2 - 1));
      az = (this.tack > 0 ? 48 : 62) * deg * (1 - 2 * k); // the kite crosses the wind window overhead
      el = (31 + 44 * Math.sin(Math.PI * k)) * deg;
      sideSign = this.turnSide;
      spd = 7.5 - 4.8 * Math.sin(Math.PI * k);
      edge = 0.28 * Math.cos(Math.PI * k); crouch = 0.45; lean = 0.3 + 0.25 * Math.abs(Math.cos(Math.PI * k));
      if (s >= 1) { this.tack = this.newTack; this.theta = thetaFor(this.newTack); this.state = 'ride'; this.leg = 0; this.legLen = R(45, 85); }
    } else if (this.state === 'jump') {
      const s = Math.min(1, (t - this.t0) / this.dur);
      const air = clamp((s - 0.16) / 0.8, 0, 1);
      lift = this.jumpH * Math.sin(Math.PI * air);
      el = (31 + 50 * bump(s, 0.0, 0.75)) * deg; // kite sent back to the zenith, then forward to land
      az = (50 - 35 * bump(s, 0.0, 0.7)) * deg;
      edge = s < 0.16 ? 0.45 : 0.1; crouch = s < 0.16 ? 0.9 : 0.3; lean = s < 0.16 ? 0.8 : 0.25;
      tuck = bump(air, 0.1, 0.9); grab = bump(air, 0.3, 0.75);
      spin = this.spinDir * Math.PI * 2 * smooth(clamp((air - 0.15) / 0.65, 0, 1));
      pitch = -0.25 * bump(air, 0, 1);
      spd = 8.5;
      if (s > 0.15 && !this.tookOff) { this.tookOff = true; this.burst(20, 1.0); }
      if (s >= 1) {
        this.state = 'ride'; this.nextJump = t + R(12, 24); this.tookOff = false;
        this.burst(30, 1.3); C.ripple(this.x, this.z, t, 0.9);
      }
    }
    this.speed += (spd - this.speed) * Math.min(1, dt * 1.5);
    const fx = Math.cos(this.heading), fz = Math.sin(this.heading);
    this.x += fx * this.speed * dt; this.z += fz * this.speed * dt;
    this.leg += this.speed * dt;

    // kite direction in the wind window
    const surf = C.sampler.height(this.x, this.z, t);
    const horiz = W.clone().multiplyScalar(Math.cos(az)).addScaledVector(PERP, Math.sin(az) * sideSign);
    const dir = horiz.multiplyScalar(Math.cos(el)).addScaledVector(UP, Math.sin(el)).normalize();

    // board and rider
    const r = this.root;
    const ry = -this.heading + spin;
    r.position.set(this.x, surf + lift, this.z);
    r.rotation.set(0, ry, pitch, 'YXZ');
    r.updateMatrixWorld(true);
    // face the kite (body turns smoothly when the kite crosses over)
    const kSide = dir.x * Math.sin(ry) + dir.z * Math.cos(ry);
    const targetFacing = kSide >= 0 ? 0 : Math.PI;
    let df = targetFacing - this.facing; df = Math.atan2(Math.sin(df), Math.cos(df));
    this.facing += df * Math.min(1, dt * 5);
    this.rider.body.rotation.y = this.facing;
    const s = Math.cos(this.facing) >= 0 ? 1 : -1; // root +z is the kite side when facing ~0
    this.edge += (edge - this.edge) * Math.min(1, dt * 4);
    this.board.rotation.set(-this.edge * s, 0, 0.04 * Math.sin(t * 3.1));
    for (const [k, v] of [['crouch', crouch], ['lean', lean], ['tuck', tuck], ['grab', grab]]) this[k] += (v - this[k]) * Math.min(1, dt * 6);
    this.rider.body.updateMatrixWorld(true);
    const q = new THREE.Quaternion();
    this.rider.body.getWorldQuaternion(q);
    const kd = dir.clone().applyQuaternion(q.invert());
    const jt = this.rider.pose({ crouch: this.crouch, lean: this.lean + 0.25 * this.edge, tuck: this.tuck, grab: this.grab, kiteDir: kd });
    this.rider.body.updateMatrixWorld(true);
    const barC = this.rider.body.localToWorld(jt.barC.clone());
    const barF = this.rider.body.localToWorld(jt.barF.clone());
    const barB = this.rider.body.localToWorld(jt.barB.clone());

    const kg = this.kite.group;
    kg.position.copy(barC).addScaledVector(dir, LINE);
    const chord = W.clone().addScaledVector(dir, -W.dot(dir)).normalize();
    const span = new THREE.Vector3().crossVectors(dir, chord);
    kg.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(span, dir, chord));
    kg.updateMatrixWorld(true);
    // four lines: the front pair from the bar centre, the steering pair from the bar ends
    const P = this.lines.geometry.attributes.position;
    const fl = this.kite.front.map((v) => kg.localToWorld(v.clone())), bl = this.kite.back.map((v) => kg.localToWorld(v.clone()));
    const sideOf = (w) => (w.x - barC.x) * (barF.x - barB.x) + (w.z - barC.z) * (barF.z - barB.z);
    const [bA, bBk] = sideOf(bl[0]) > sideOf(bl[1]) ? [bl[0], bl[1]] : [bl[1], bl[0]];
    [[barC, fl[0]], [barC, fl[1]], [barF, bA], [barB, bBk]].forEach(([a, b], i) => { P.setXYZ(i * 2, a.x, a.y, a.z); P.setXYZ(i * 2 + 1, b.x, b.y, b.z); });
    P.needsUpdate = true;

    // spray fan off the upwind rail, and the foam wake
    const onWater = lift < 0.12;
    this.wake.add(this.x - fx * 0.6, this.z - fz * 0.6, t, onWater);
    this.wake.update(t, C.sampler);
    if (onWater && this.speed > 4) {
      const upx = -Math.sin(ry) * s, upz = -Math.cos(ry) * s; // away from the kite = the upwind rail
      const n = 3 + (rnd() < this.edge * 3 ? 3 : 0);
      for (let i = 0; i < n; i++) {
        const k2 = R(0.6, 1.0);
        C.spray.emit(this.x - fx * R(0.2, 0.6) + upx * 0.22, surf + 0.06, this.z - fz * R(0.2, 0.6) + upz * 0.22,
          -fx * R(0.5, 1.6) + upx * R(1.2, 2.6) * k2, R(0.9, 2.2) * (0.6 + this.edge), -fz * R(0.5, 1.6) + upz * R(1.2, 2.6) * k2,
          R(0.4, 0.75), R(0.08, 0.2));
      }
    }
  }
  burst(n, strength) {
    const C = this.ctx;
    const surf = C.sampler.height(this.x, this.z, 0);
    for (let i = 0; i < n; i++) {
      const a = rnd() * Math.PI * 2, sp = R(0.5, 2.2) * strength;
      C.spray.emit(this.x + Math.cos(a) * 0.5, surf + 0.1, this.z + Math.sin(a) * 0.5, Math.cos(a) * sp, R(1.2, 3.4) * strength, Math.sin(a) * sp, R(0.6, 1.1), R(0.2, 0.48));
    }
  }
}

export function buildKiters(ctx) {
  const k = new Kiteboarder(ctx, KITE_ZONE.cx + 12, KITE_ZONE.cz - 6);
  return { kiters: [k], update(dt, t) { k.update(dt, t); } };
}
