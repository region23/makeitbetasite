// Life: gulls circling over the island and strait; Black Sea dolphins beyond the
// island with occasional dorsal surfacings and graceful leaps, splashes and wakes.
import * as THREE from 'three';
import { minField } from './geo.js';
import { waterHeightJS } from './water.js';
import { mulberry } from './util.js';

export function buildLife(baked) {
  const group = new THREE.Group();
  const rnd = mulberry(90210);
  const splashes = makeSplashPool(group, baked);
  const gulls = buildGulls(group, rnd);
  const dolphins = buildDolphins(group, rnd, baked, splashes);

  function update(t) {
    for (const g of gulls) g.update(t);
    for (const d of dolphins) d.update(t);
    for (const s of splashes) s.update(t);
  }
  return { group, update };
}

/* ---------------- gulls ---------------- */
function makeGull(rnd) {
  const g = new THREE.Group();
  const mat = new THREE.MeshStandardMaterial({ color: 0xf2f2ee, roughness: 0.8 });
  const matWing = new THREE.MeshStandardMaterial({ color: 0xd9dbdd, roughness: 0.85, side: THREE.DoubleSide });
  const body = new THREE.Mesh(new THREE.SphereGeometry(0.16, 8, 6), mat);
  body.scale.set(1.6, 1, 1);
  g.add(body);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.09, 8, 6), mat);
  head.position.set(0.26, 0.04, 0);
  g.add(head);
  const wingGeo = new THREE.PlaneGeometry(0.62, 0.2);
  wingGeo.translate(0.31, 0, 0);
  const wl = new THREE.Mesh(wingGeo, matWing);
  const wr = new THREE.Mesh(wingGeo, matWing);
  wr.rotation.y = Math.PI;
  g.add(wl, wr);
  g.userData = { wl, wr, flap: rnd() * 10, flapSpeed: 7 + rnd() * 4 };
  return g;
}

function buildGulls(group, rnd) {
  const paths = [
    { c: [30, -40, 36], r: 26, sp: 0.30, ph: 0 },
    { c: [42, -58, 34], r: 18, sp: -0.42, ph: 2 },
    { c: [80, -10, 14], r: 14, sp: 0.5, ph: 4 },
    { c: [105, 20, 12], r: 10, sp: -0.55, ph: 1.2 },
    { c: [120, -60, 16], r: 17, sp: 0.38, ph: 3.4 },
    { c: [-40, 10, 26], r: 30, sp: -0.26, ph: 5 },
  ];
  const out = [];
  for (const p of paths) {
    const gull = makeGull(rnd);
    group.add(gull);
    out.push({
      gull, ...p,
      update(t) {
        const a = p.ph + t * p.sp;
        const x = p.c[0] + Math.cos(a) * p.r;
        const z = p.c[1] + Math.sin(a) * p.r * 0.8;
        const y = p.c[2] + Math.sin(t * 0.9 + p.ph) * 1.6;
        gull.position.set(x, y, z);
        gull.rotation.y = -a - Math.PI / 2 * Math.sign(p.sp) * -1;
        gull.rotation.y = -a; // heading tangent
        const flap = Math.sin(t * gull.userData.flapSpeed + gull.userData.flap);
        gull.userData.wl.rotation.x = flap * 0.7;
        gull.userData.wr.rotation.x = -flap * 0.7;
        gull.rotation.z = Math.sin(t * 0.7 + p.ph) * 0.08;
      },
    });
  }
  return out;
}

/* ---------------- dolphins ---------------- */
const DOLPHIN_SPOTS = [
  [-250, -70], [-190, 120], [-80, 200], [180, 120], [-300, 40], [90, -220],
];

function makeDolphin(rnd) {
  const g = new THREE.Group();
  const mat = new THREE.MeshStandardMaterial({ color: 0x46545f, roughness: 0.55 });
  const belly = new THREE.MeshStandardMaterial({ color: 0x9aa4a8, roughness: 0.6 });
  const body = new THREE.Mesh(new THREE.SphereGeometry(0.5, 14, 10), mat);
  body.scale.set(2.4, 1, 0.9);
  g.add(body);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.42, 12, 9), mat);
  head.scale.set(1.4, 0.95, 0.85);
  head.position.set(1.15, -0.02, 0);
  g.add(head);
  const snout = new THREE.Mesh(new THREE.SphereGeometry(0.16, 8, 6), mat);
  snout.scale.set(1.6, 0.7, 0.65);
  snout.position.set(1.85, -0.08, 0);
  g.add(snout);
  const dorsal = new THREE.Mesh(new THREE.ConeGeometry(0.22, 0.5, 6), mat);
  dorsal.scale.z = 0.45;
  dorsal.position.set(-0.1, 0.5, 0);
  dorsal.rotation.x = -0.35;
  g.add(dorsal);
  for (const s of [1, -1]) {
    const fin = new THREE.Mesh(new THREE.ConeGeometry(0.16, 0.42, 5), mat);
    fin.scale.set(0.8, 1, 0.4);
    fin.position.set(0.5, -0.28, s * 0.42);
    fin.rotation.z = s > 0 ? 1.2 : -1.2;
    g.add(fin);
  }
  const tail = new THREE.Mesh(new THREE.SphereGeometry(0.3, 8, 6), mat);
  tail.scale.set(1.2, 0.5, 0.6);
  tail.position.set(-1.5, 0, 0);
  g.add(tail);
  for (const s of [1, -1]) {
    const fluke = new THREE.Mesh(new THREE.SphereGeometry(0.22, 8, 6), belly);
    fluke.scale.set(0.9, 0.14, 1.8);
    fluke.position.set(-1.9, 0, s * 0.2);
    g.add(fluke);
  }
  g.visible = false;
  return g;
}

function buildDolphins(group, rnd, baked, splashes) {
  const spots = DOLPHIN_SPOTS.filter((p) => minField(p[0], p[1]) > 95).slice(0, 4);
  const out = [];
  for (let i = 0; i < spots.length; i++) {
    const [cx, cz] = spots[i];
    const d = {
      obj: makeDolphin(rnd),
      cx, cz, r: 55 + rnd() * 55,
      w0: rnd() * Math.PI * 2,
      sp: (0.09 + rnd() * 0.05) * (rnd() < 0.5 ? 1 : -1),
      next: 3 + rnd() * 12,
      state: 'idle', st0: 0,
      leapT: 0, leapDur: 0, leapX: 0, leapZ: 0, leapVy: 0, leapDir: 0,
      bob: rnd() * 10,
    };
    group.add(d.obj);
    out.push({
      ...d,
      update(t) {
        const o = this.obj;
        const a = this.w0 + t * this.sp;
        const px = this.cx + Math.cos(a) * this.r;
        const pz = this.cz + Math.sin(a) * this.r * 0.75;
        const wy = waterHeightJS(baked, px, pz, t);

        if (this.state === 'idle') {
          o.visible = false;
          if (t > this.next) {
            if (rnd() < 0.4) {
              this.state = 'leap'; this.st0 = t;
              this.leapDur = 1.5 + rnd() * 0.5;
              this.leapVy = 4.6 + rnd() * 1.4;
              this.leapDir = Math.atan2(0, 1) + 0; // tangent heading below
              this.leapX = px; this.leapZ = pz;
              splashes.emit(px, pz, t, 0.6, wy);
            } else {
              this.state = 'surface'; this.st0 = t;
            }
          }
        } else if (this.state === 'surface') {
          o.visible = true;
          const k = (t - this.st0) / 2.2;
          if (k >= 1) { o.visible = false; this.state = 'idle'; this.next = t + 7 + rnd() * 17; }
          else {
            const rise = Math.sin(Math.min(k * 1.25, 1) * Math.PI);
            o.position.set(px, wy - 1.05 + rise * 0.75, pz);
            o.rotation.set(0, -a + (this.sp > 0 ? 0 : Math.PI), 0);
            o.rotation.z = rise * 0.2;
            if (k < 0.4 && !this.rang) { splashes.emit(px, pz, t, 0.35, wy); this.rang = true; }
            if (k > 0.4) this.rang = false;
          }
        } else if (this.state === 'leap') {
          o.visible = true;
          const lt = (t - this.st0) / this.leapDur;
          if (lt >= 1) {
            splashes.emit(px, pz, t, 0.85, wy);
            o.visible = false; this.state = 'idle';
            this.next = t + 9 + rnd() * 18;
          } else {
            const vx = Math.cos(a) * this.sp * this.r;
            const vz = Math.sin(a) * this.sp * this.r * 0.75;
            const yy = wy + this.leapVy * (lt * this.leapDur) - 4.9 * (lt * this.leapDur) ** 2;
            o.position.set(px, yy, pz);
            o.rotation.set(0, -a + (this.sp > 0 ? 0 : Math.PI), 0);
            const vy = this.leapVy - 9.8 * lt * this.leapDur;
            const vh = Math.hypot(vx, vz) + 0.001;
            o.rotation.z = this.sp > 0
              ? Math.atan2(vy, vh) * 0.8
              : -Math.atan2(vy, vh) * 0.8;
            if (lt > 0.96) o.visible = false;
          }
        }
      },
    });
  }
  return out;
}

/* ---------------- splash / foam pool ---------------- */
function makeSplashPool(group, baked) {
  const items = [];
  const N = 10;
  const ringGeo = new THREE.RingGeometry(0.55, 1, 26);
  for (let i = 0; i < N; i++) {
    const mat = new THREE.MeshBasicMaterial({
      color: 0xeef4f0, transparent: true, opacity: 0, side: THREE.DoubleSide, depthWrite: false,
    });
    const m = new THREE.Mesh(ringGeo, mat);
    m.rotation.x = -Math.PI / 2;
    m.visible = false;
    m.renderOrder = 11;
    group.add(m);
    items.push({ m, t0: -1, dur: 0, size: 1, update(t) { this.tick(t); } });
  }
  let cursor = 0;
  items.emit = (x, z, t, size, wy) => {
    const it = items[cursor++ % N];
    it.t0 = t; it.dur = 1.6 + size * 0.8; it.size = size;
    it.m.position.set(x, wy + 0.06, z);
    it.m.visible = true;
    // a second, slower ring
    const it2 = items[cursor++ % N];
    it2.t0 = t + 0.18; it2.dur = 2.0 + size; it2.size = size * 1.5;
    it2.m.position.set(x, wy + 0.05, z);
    it2.m.visible = true;
  };
  items.tick = null;
  for (const it of items) {
    it.tick = (t) => {
      if (!it.m.visible) return;
      const k = (t - it.t0) / it.dur;
      if (k >= 1 || k < 0) { it.m.visible = false; return; }
      const s = it.size * (2.5 + k * 9);
      it.m.scale.set(s, s, s);
      it.m.material.opacity = 0.75 * (1 - k) ** 1.5;
      it.m.position.y = waterHeightJS(baked, it.m.position.x, it.m.position.z, t) + 0.06;
    };
  }
  return items;
}
