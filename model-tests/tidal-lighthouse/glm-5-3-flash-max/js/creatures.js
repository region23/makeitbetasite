// creatures.js — dolphins cruising the open water with occasional leaps, splash effects,
// and gulls circling the island
import * as THREE from 'three';
import {
  CFG, terrainHeight, coastR, slabR, jsWaterHeight, shelterAt,
  polar, rnd, sstep, angDiff, clamp, mix,
} from './world.js';

// ---------------- splash system ----------------
export class SplashPool {
  constructor(scene) {
    this.scene = scene;
    this.active = [];
    this.matRing = new THREE.MeshBasicMaterial({ color: 0xf4fbff, transparent: true, opacity: 0.9, depthWrite: false, depthTest: false });
    this.matPatch = new THREE.MeshBasicMaterial({ color: 0xf4fbff, transparent: true, opacity: 0.75, depthWrite: false, depthTest: false });
    this.geoRing = new THREE.RingGeometry(0.42, 0.6, 28);
    this.geoPatch = new THREE.CircleGeometry(0.55, 24);
    this.geoDrop = new THREE.SphereGeometry(0.028, 6, 5);
  }
  spawn(x, z, scale = 1, delay = 0) {
    const mesh = new THREE.Mesh(this.geoRing, this.matRing.clone());
    mesh.renderOrder = 20;
    this.active.push({ type: 'ring', x, z, scale, t: -delay, life: 0.9, mesh });
  }
  spawnPatch(x, z, scale = 1) {
    const mesh = new THREE.Mesh(this.geoPatch, this.matPatch.clone());
    mesh.renderOrder = 19;
    this.active.push({ type: 'patch', x, z, scale, t: 0, life: 1.7, mesh });
  }
  spawnDrops(x, z, scale = 1) {
    const n = 14;
    const grp = new THREE.Group();
    grp.renderOrder = 20;
    const drops = [];
    for (let i = 0; i < n; i++) {
      const m = new THREE.Mesh(this.geoDrop, this.matRing.clone());
      m.material.depthTest = true;
      m.position.set(x, 0.02, z);
      const a = rnd() * Math.PI * 2;
      drops.push({
        m,
        v: new THREE.Vector3(Math.cos(a) * (0.3 + rnd() * 0.7), 1.1 + rnd() * 1.6, Math.sin(a) * (0.3 + rnd() * 0.7)).multiplyScalar(scale),
      });
      grp.add(m);
    }
    this.scene.add(grp);
    this.active.push({ type: 'drops', grp, drops, t: 0, life: 0.65, x, z, scale });
  }
  splash(x, z, scale = 1) {
    this.spawn(x, z, scale, 0);
    this.spawn(x, z, scale * 0.8, 0.13);
    this.spawnPatch(x, z, scale * 1.4);
    this.spawnDrops(x, z, scale);
  }
  update(dt) {
    for (let i = this.active.length - 1; i >= 0; i--) {
      const e = this.active[i];
      e.t += dt;
      if (e.t < 0) continue;
      const f = clamp(e.t / e.life, 0, 1);
      if (e.type === 'ring') {
        const y = jsWaterHeight(e.x, e.z, performance.now() / 1000) + 0.02;
        e.mesh.position.set(e.x, y, e.z);
        e.mesh.rotation.x = -Math.PI / 2;
        const s = mix(0.3, 2.4, Math.pow(f, 0.7)) * e.scale;
        e.mesh.scale.set(s, s, s);
        e.mesh.material.opacity = 0.85 * (1 - f);
        if (f >= 1) { this.scene.remove(e.mesh); e.mesh.material.dispose(); this.active.splice(i, 1); }
      } else if (e.type === 'patch') {
        const y = jsWaterHeight(e.x, e.z, performance.now() / 1000) + 0.015;
        e.mesh.position.set(e.x, y, e.z);
        e.mesh.rotation.x = -Math.PI / 2;
        const s = mix(0.8, 2.6, f) * e.scale;
        e.mesh.scale.set(s, s, s);
        e.mesh.material.opacity = 0.55 * (1 - Math.pow(f, 1.6));
        if (f >= 1) { this.scene.remove(e.mesh); e.mesh.material.dispose(); this.active.splice(i, 1); }
      } else {
        for (const d of e.drops) {
          d.v.y -= 6.5 * dt;
          d.m.position.addScaledVector(d.v, dt);
          d.m.material.opacity = 0.9 * (1 - f);
        }
        if (f >= 1) { this.scene.remove(e.grp); this.active.splice(i, 1); }
      }
    }
  }
}

// ---------------- dolphins ----------------
function colorize(geo, fn) {
  const p = geo.attributes.position;
  const cols = new Float32Array(p.count * 3);
  const c = new THREE.Color();
  for (let i = 0; i < p.count; i++) {
    fn(c, p.getX(i), p.getY(i), p.getZ(i));
    cols[i * 3] = c.r; cols[i * 3 + 1] = c.g; cols[i * 3 + 2] = c.b;
  }
  geo.setAttribute('color', new THREE.BufferAttribute(cols, 3));
  return geo;
}

function buildDolphinMesh() {
  const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.55 });
  const back = new THREE.Color(0x5e6c7a), belly = new THREE.Color(0xd4dae0);
  const bodyCol = (c, x, y) => {
    c.copy(belly);
    c.lerp(back, sstep(y, -0.12, 0.1));
  };
  const g = new THREE.Group();
  const body = new THREE.Mesh(colorize(new THREE.SphereGeometry(0.5, 24, 16), bodyCol), mat);
  body.scale.set(2.5, 1.0, 0.8);
  g.add(body);
  const snout = new THREE.Mesh(colorize(new THREE.SphereGeometry(0.16, 12, 10), bodyCol), mat);
  snout.scale.set(2.2, 0.9, 0.85);
  snout.position.set(1.18, -0.05, 0);
  g.add(snout);
  const tailStock = new THREE.Mesh(colorize(new THREE.SphereGeometry(0.16, 10, 8), bodyCol), mat);
  tailStock.scale.set(2.4, 0.7, 0.6);
  tailStock.position.set(-1.28, 0.02, 0);
  g.add(tailStock);
  // flukes
  const flukeGeo = new THREE.SphereGeometry(0.22, 10, 8);
  colorize(flukeGeo, (c, x, y) => c.copy(back));
  for (const s of [-1, 1]) {
    const fl = new THREE.Mesh(flukeGeo, mat);
    fl.scale.set(0.5, 0.32, 1.5);
    fl.position.set(-1.72, 0.02, s * 0.18);
    fl.rotation.y = s * 0.5;
    g.add(fl);
  }
  // dorsal
  const dorsal = new THREE.Mesh(colorize(new THREE.SphereGeometry(0.16, 10, 8), bodyCol), mat);
  dorsal.scale.set(1.0, 1.9, 0.35);
  dorsal.position.set(0.1, 0.48, 0);
  dorsal.rotation.z = -0.35;
  g.add(dorsal);
  // pectorals
  for (const s of [-1, 1]) {
    const pect = new THREE.Mesh(colorize(new THREE.SphereGeometry(0.14, 8, 6), bodyCol), mat);
    pect.scale.set(0.9, 0.28, 1.6);
    pect.position.set(0.5, -0.18, s * 0.38);
    pect.rotation.z = -0.5;
    pect.rotation.x = s * 0.9;
    g.add(pect);
  }
  g.scale.setScalar(0.62);
  g.traverse(o => { o.castShadow = false; });
  return g;
}

const _v1 = new THREE.Vector3(), _v2 = new THREE.Vector3(), _up = new THREE.Vector3(0, 1, 0);

export class Dolphin {
  constructor(scene, splashPool, idx) {
    this.pool = splashPool;
    this.mesh = buildDolphinMesh();
    scene.add(this.mesh);
    this.curve = this.makeRoute(idx);
    this.len = this.curve.getLength();
    this.speed = mix(2.4, 3.4, rnd()); // units/s
    this.t = rnd();
    this.nextLeap = 4 + rnd() * 18;
    this.leapP = -1;
    this.leapDur = 2.3;
    this.leapPeak = 0.9 + rnd() * 0.5;
    this.time = 0;
  }
  makeRoute(idx) {
    // elongated loop in the open-water band, away from harbor, rocks and boats
    const angOff = [-0.55, 0.15, 0.7, 1.2][idx % 4] + (rnd() - 0.5) * 0.25;
    const centerTh = CFG.openAngle + angOff;
    const pts = [];
    const cr = coastR(centerTh);
    const Lr = 4.5 + rnd() * 2.0;
    const Wr = 1.5 + rnd() * 0.8;
    const [cx, cz] = polar(centerTh, cr + 5.8 + rnd() * 1.0);
    const tan = new THREE.Vector2(-Math.sin(centerTh), Math.cos(centerTh));
    const rad = new THREE.Vector2(Math.cos(centerTh), Math.sin(centerTh));
    for (let k = 0; k < 8; k++) {
      const a = k / 8 * Math.PI * 2;
      let x = cx + tan.x * Lr * Math.cos(a) + rad.x * Wr * Math.sin(a);
      let z = cz + tan.y * Lr * Math.cos(a) + rad.y * Wr * Math.sin(a);
      // keep inside the slab and over deep-enough water
      const th = Math.atan2(z, x);
      const rMax = slabR(th) - 1.2;
      const rMin = coastR(th) + 4.0;
      const r = Math.hypot(x, z);
      if (r > rMax) { x *= rMax / r; z *= rMax / r; }
      else if (r < rMin) { x *= rMin / r; z *= rMin / r; }
      pts.push(new THREE.Vector3(x, 0, z));
    }
    return new THREE.CatmullRomCurve3(pts, true, 'catmullrom', 0.8);
  }
  surfaceY(x, z, t) {
    return jsWaterHeight(x, z, t);
  }
  update(dt, time) {
    this.time = time;
    this.t = (this.t + dt * this.speed / this.len) % 1;
    const p = this.curve.getPointAt(this.t);
    // hard safety clamp: never inside the rocks or off the slab
    const thNow = Math.atan2(p.z, p.x);
    const rNow = Math.hypot(p.x, p.z);
    const rMinNow = coastR(thNow) + 3.4;
    const rMaxNow = slabR(thNow) - 1.0;
    if (rNow < rMinNow || rNow > rMaxNow) {
      const rc = clamp(rNow, rMinNow, rMaxNow);
      p.x *= rc / rNow; p.z *= rc / rNow;
    }
    let yOff;
    let scaled = false;

    if (this.leapP >= 0) {
      this.leapP += dt / this.leapDur;
      const lp = this.leapP;
      const peak = this.leapPeak;
      if (lp >= 1) {
        this.leapP = -1;
        this.nextLeap = time + 12 + rnd() * 16;
      } else {
        const baseY = -0.85;
        if (lp < 0.28) {
          yOff = mix(baseY - 0.25, 0, sstep(lp, 0.10, 0.28));
        } else if (lp <= 0.72) {
          yOff = peak * Math.sin(Math.PI * (lp - 0.28) / 0.44);
        } else {
          yOff = mix(0, baseY - 0.6, sstep(lp, 0.72, 0.94));
        }
        const prev = this.prevLp ?? 0;
        if (prev < 0.28 && lp >= 0.28) { this.pool.splash(p.x, p.z, 0.9); }
        if (prev < 0.72 && lp >= 0.72) { this.pool.splash(p.x, p.z, 1.1); }
        if ((lp > 0.15 && lp < 0.3) || (lp > 0.68 && lp < 0.8)) {
          if (rnd() < dt * 9) this.pool.spawnPatch(p.x, p.z, 0.55);
        }
        this.prevLp = lp;
        scaled = true;
      }
    } else if (time > this.nextLeap) {
      this.leapP = 0;
      this.prevLp = 0;
      this.leapPeak = 0.9 + rnd() * 0.5;
      this.leapDur = 2.1 + rnd() * 0.5;
      yOff = -1.1;
    }

    if (!scaled) yOff = -0.85 - 0.25 * Math.sin(this.t * Math.PI * 2 * 3 + idxSeed(this));

    const wy = this.surfaceY(p.x, p.z, time);
    const px = this.curve.getPointAt((this.t + 0.012) % 1);
    const vel = _v1.set(px.x - p.x, 0, px.z - p.z);
    // leap pitch from the profile a little further ahead (keeps arcs graceful, never vertical)
    const yAhead = this.leapP >= 0 ? this.yAt(lp2(this.leapP, 0.05)) : 0;
    vel.y = yAhead - yOff;
    vel.normalize();
    this.mesh.position.set(p.x, yOff + wy * 0.35, p.z);
    // orient along velocity
    _v2.copy(this.mesh.position).add(vel);
    this.mesh.lookAt(_v2);
    this.mesh.rotateY(-Math.PI / 2);
    const bank = 0.18 * Math.sin(this.t * Math.PI * 2 * 2 + idxSeed(this) * 2);
    this.mesh.rotateX(bank);
  }
  yAt(lp) {
    const peak = this.leapPeak;
    if (lp < 0.28) return mix(-1.1, 0, sstep(lp, 0.10, 0.28));
    if (lp <= 0.72) return peak * Math.sin(Math.PI * (lp - 0.28) / 0.44);
    return mix(0, -1.45, sstep(lp, 0.72, 0.94));
  }
  yAtAhead() {
    return this.yAt(this.leapP + 0.004);
  }
}
function lp2(lp, d) { return Math.min(lp + d, 0.999); }
function idxSeed(d) { return d.curve.getPointAt(0).x; }

export function buildDolphins(scene, splashPool) {
  const list = [];
  for (let i = 0; i < 4; i++) list.push(new Dolphin(scene, splashPool, i));
  return list;
}

// ---------------- gulls ----------------
function buildGullMesh() {
  const g = new THREE.Group();
  const white = new THREE.MeshStandardMaterial({ color: 0xf2f3f4, roughness: 0.8 });
  const dark = new THREE.MeshStandardMaterial({ color: 0x3d4045, roughness: 0.9 });
  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.05, 0.2, 4, 8), white);
  body.rotation.z = Math.PI / 2;
  g.add(body);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.05, 8, 6), white);
  head.position.set(0.17, 0.03, 0);
  const beak = new THREE.Mesh(new THREE.ConeGeometry(0.016, 0.06, 6), new THREE.MeshStandardMaterial({ color: 0xd9913c }));
  beak.rotation.z = -Math.PI / 2;
  beak.position.set(0.24, 0.02, 0);
  const tail = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.015, 0.07), white);
  tail.position.set(-0.16, 0.01, 0);
  tail.rotation.z = 0.15;
  g.add(head, beak, tail);
  const wings = [];
  for (const s of [-1, 1]) {
    const pivot = new THREE.Group();
    const wing = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.012, 0.34), white);
    wing.position.z = s * 0.17;
    const tip = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.012, 0.1), dark);
    tip.position.z = s * 0.36;
    pivot.add(wing, tip);
    g.add(pivot);
    wings.push({ pivot, s });
  }
  g.userData.wings = wings;
  g.scale.setScalar(1.15);
  return g;
}

export class Gull {
  constructor(scene) {
    this.mesh = buildGullMesh();
    scene.add(this.mesh);
    this.r = 17 + rnd() * 12;
    this.h = 8.5 + rnd() * 4;
    this.a = rnd() * Math.PI * 2;
    this.sp = (0.14 + rnd() * 0.1) * (rnd() > 0.5 ? 1 : -1);
    this.flapPh = rnd() * 9;
    this.glide = 0;
    this.nextGlide = 3 + rnd() * 6;
  }
  update(dt, time) {
    this.a += this.sp * dt;
    const x = Math.cos(this.a) * this.r;
    const z = Math.sin(this.a) * this.r;
    const y = this.h + 1.1 * Math.sin(this.a * 2.3 + this.flapPh);
    this.mesh.position.set(x, y, z);
    // face travel direction
    const nx = Math.cos(this.a + 0.05 * Math.sign(this.sp)) * this.r;
    const nz = Math.sin(this.a + 0.05 * Math.sign(this.sp)) * this.r;
    this.mesh.lookAt(nx, y, nz);
    this.mesh.rotateY(-Math.PI / 2);
    this.mesh.rotateZ(-0.25 * Math.sign(this.sp));
    // flap / glide cycles
    if (time > this.nextGlide) { this.glide = 1.8 + rnd() * 2.5; this.nextGlide = time + 4 + rnd() * 6; }
    this.glide = Math.max(0, this.glide - dt);
    const amp = this.glide > 0 ? 0.1 : 0.8;
    const flap = Math.sin(time * 6.5 + this.flapPh) * amp;
    for (const w of this.mesh.userData.wings) w.pivot.rotation.x = -flap * w.s;
  }
}
