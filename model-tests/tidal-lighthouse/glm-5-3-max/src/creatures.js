// THE TIDAL LIGHTHOUSE — dolphins & gulls
// Dolphins cruise the open-sea arc, surface occasionally and leap at varied
// semi-random intervals, with splash rings, droplets and a faint wake.

import * as THREE from 'three';
import { boundaryRadius } from './terrain.js';
import { surfaceAt } from './water.js';
import { mulberry32 } from './noise.js';

// ---------------------------------------------------------------------------
// Dolphin body (procedural)

function makeDolphinBody() {
  const prof = [
    [0.02, 0.00], [0.10, 0.10], [0.17, 0.26], [0.23, 0.48], [0.265, 0.72],
    [0.275, 0.95], [0.255, 1.18], [0.215, 1.40], [0.165, 1.62], [0.115, 1.84],
    [0.07, 2.04], [0.035, 2.22], [0.012, 2.38], [0.001, 2.46],
  ].map(([r, h]) => new THREE.Vector2(r, h));
  const geo = new THREE.LatheGeometry(prof, 22);
  geo.rotateX(-Math.PI / 2); // nose toward +Z, tail toward -Z
  geo.translate(0, 0, -1.23);
  geo.scale(1.25, 1.05, 1.3); // length ~3.2, slightly flattened

  // countershading via vertex colors
  const p = geo.attributes.position;
  const colors = new Float32Array(p.count * 3);
  const back = new THREE.Color(0x46525c), belly = new THREE.Color(0xccd4d9);
  const c = new THREE.Color();
  for (let i = 0; i < p.count; i++) {
    const t = THREE.MathUtils.smoothstep(p.getY(i), -0.18, 0.14);
    c.copy(belly).lerp(back, t);
    colors[i * 3] = c.r; colors[i * 3 + 1] = c.g; colors[i * 3 + 2] = c.b;
  }
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  return geo;
}

function makeFin(shapePts, thickness, mat) {
  const shape = new THREE.Shape();
  shape.moveTo(shapePts[0][0], shapePts[0][1]);
  for (let i = 1; i < shapePts.length; i++) shape.lineTo(shapePts[i][0], shapePts[i][1]);
  shape.closePath();
  const g = new THREE.ExtrudeGeometry(shape, { depth: thickness, bevelEnabled: false });
  g.translate(0, 0, -thickness / 2);
  return new THREE.Mesh(g, mat);
}

function makeDolphin() {
  const g = new THREE.Group();
  const bodyMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.55 });
  const body = new THREE.Mesh(makeDolphinBody(), bodyMat);
  const finMat = new THREE.MeshStandardMaterial({ color: 0x414c56, roughness: 0.6 });

  const dorsal = makeFin([[0, 0], [0.12, 0.30], [0.05, 0.36], [-0.16, 0.05]], 0.05, finMat);
  dorsal.rotation.y = -Math.PI / 2;
  dorsal.position.set(0, 0.26, 0.05);

  const flukeL = makeFin([[0, 0], [0.34, 0.10], [0.36, 0.02], [0.05, -0.06]], 0.04, finMat);
  flukeL.rotation.x = -Math.PI / 2;
  flukeL.position.set(0, 0.02, -1.5);
  const flukeR = flukeL.clone();
  flukeR.scale.x = -1;

  const pectL = makeFin([[0, 0], [0.22, 0.10], [0.24, 0.02], [0.04, -0.05]], 0.035, finMat);
  pectL.rotation.set(-Math.PI / 2 + 0.5, 0.35, 0);
  pectL.position.set(0.14, -0.02, 0.75);
  const pectR = pectL.clone();
  pectR.scale.x = -1;

  g.add(body, dorsal, flukeL, flukeR, pectL, pectR);
  return g;
}

// ---------------------------------------------------------------------------
// Splashes: expanding rings + instanced droplets

function makeSplashPool(scene) {
  const rings = [];
  const ringGeo = new THREE.RingGeometry(0.82, 1.0, 26);
  for (let i = 0; i < 10; i++) {
    const m = new THREE.Mesh(ringGeo, new THREE.MeshBasicMaterial({
      color: 0xeef7f9, transparent: true, opacity: 0, depthWrite: false, side: THREE.DoubleSide,
    }));
    m.rotation.x = -Math.PI / 2;
    m.visible = false;
    m.renderOrder = 6;
    scene.add(m);
    rings.push({ mesh: m, t: 1e9, dur: 0.9, scale: 2 });
  }
  const N = 160;
  const drops = new THREE.InstancedMesh(
    new THREE.SphereGeometry(0.035, 6, 5),
    new THREE.MeshStandardMaterial({ color: 0xe9f5f7, roughness: 0.3 }),
    N);
  drops.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  drops.frustumCulled = false;
  scene.add(drops);
  const state = Array.from({ length: N }, () => ({ life: -1, p: new THREE.Vector3(), v: new THREE.Vector3() }));
  const m4 = new THREE.Matrix4();

  return {
    splash(x, z, power = 1) {
      const y = surfaceAt(x, z, perfNow()).y + 0.03;
      const ring = rings.find((r) => r.t > r.dur) || rings[0];
      ring.t = 0; ring.scale = 1.3 + power * 1.6; ring.dur = 0.7 + power * 0.35;
      ring.mesh.position.set(x, y, z);
      ring.mesh.visible = true;
      let count = Math.min(26, Math.round(14 + power * 12));
      for (const d of state) {
        if (count <= 0) break;
        if (d.life >= 0) continue;
        const a = Math.random() * Math.PI * 2;
        const sp = (0.9 + Math.random() * 1.4) * power;
        d.p.set(x + Math.cos(a) * 0.15, y + 0.05, z + Math.sin(a) * 0.15);
        d.v.set(Math.cos(a) * sp, 1.8 + Math.random() * 1.9 * power, Math.sin(a) * sp);
        d.life = 0;
        count--;
      }
    },
    update(t, dt) {
      for (const r of rings) {
        if (r.t > r.dur) { r.mesh.visible = false; continue; }
        r.t += dt;
        const k = Math.min(r.t / r.dur, 1);
        const s = 0.25 + r.scale * (1 - Math.pow(1 - k, 2.2));
        r.mesh.scale.setScalar(s);
        r.mesh.material.opacity = 0.75 * (1 - k) * (1 - k);
      }
      let i = 0;
      for (const d of state) {
        if (d.life >= 0) {
          d.life += dt;
          d.v.y -= 9.8 * dt;
          d.p.addScaledVector(d.v, dt);
          if (d.p.y < 0.02 || d.life > 0.75) d.life = -1;
        }
        const s = d.life >= 0 ? Math.max(0.35, 1 - d.life * 1.4) : 0;
        m4.makeScale(s, s, s).setPosition(d.p);
        drops.setMatrixAt(i++, m4);
      }
      drops.instanceMatrix.needsUpdate = true;
    },
  };
}

// tiny indirection so splash() can read the clock without threading it through
let _t = 0;
const perfNow = () => _t;

// ---------------------------------------------------------------------------
// Dolphins

class Dolphin {
  constructor(scene, splashPool, i, rnd) {
    this.mesh = makeDolphin();
    scene.add(this.mesh);
    this.splashPool = splashPool;
    this.aw = (rnd() - 0.5) * 0.9;        // angle along the open-sea arc
    this.dir = rnd() > 0.5 ? 1 : -1;
    this.rimOffset = 1.9 + (rnd() - 0.5) * 0.4; // distance inside the rim
    this.rimOffsetTarget = this.rimOffset;
    this.speed = 3.2 + rnd() * 1.4;
    this.depth = -0.55;
    this.depthTarget = -0.55;
    this.state = 'cruise';
    this.leapT = 0;
    this.nextSurface = 4 + rnd() * 12;
    this.nextLeap = 18 + rnd() * 45;
    this.phase = rnd() * 10;
    this.pos = new THREE.Vector3();
    this.vel = new THREE.Vector3();
    this.leapOrigin = new THREE.Vector3();
    this.leapDir = new THREE.Vector3();
    this.leapH = 1;
    this.leapDur = 1;
    this.splashedExit = false;
    this.splashedEnter = false;
  }

  // point on the cruise arc: an arc around -Z that tracks the irregular rim
  arcPoint(aw, out) {
    const dth = Math.atan2(-Math.cos(aw), Math.sin(aw));
    const r = boundaryRadius(dth) - this.rimOffset;
    out.set(Math.sin(aw) * r, 0, -Math.cos(aw) * r);
    return out;
  }

  safe(x, z) {
    // stay off the islet and inside the display piece
    if (Math.hypot(x - 11, z + 15.5) < 5.2) return false;
    const Rb = boundaryRadius(Math.atan2(z, x));
    return Math.hypot(x, z) < Rb - 1.15;
  }

  update(t, dt, rnd, activeLeaps) {
    if (this.state === 'cruise') {
      const rNow = Math.hypot(this.pos.x, this.pos.z) || 23;
      const w = (this.speed / rNow) * this.dir;
      let nextAw = this.aw + w * dt;
      const awMax = 0.5;
      if (Math.abs(nextAw) > awMax) { this.dir *= -1; nextAw = this.aw + (this.speed / rNow) * this.dir * dt * 2; }
      this.aw = nextAw;

      // gentle drift in rim distance and depth
      if (Math.abs(this.rimOffset - this.rimOffsetTarget) < 0.1) this.rimOffsetTarget = 1.7 + rnd() * 0.5;
      this.rimOffset += (this.rimOffsetTarget - this.rimOffset) * dt * 0.3;

      const prev = this.pos.clone();
      this.arcPoint(this.aw, this.pos);
      if (!this.safe(this.pos.x, this.pos.z)) {
        this.rimOffsetTarget = 2.1;
        this.dir *= -1;
        this.aw += (this.speed / rNow) * this.dir * dt * 4;
      }
      // vertical wander: deep, or grazing the surface
      if (Math.abs(this.depth - this.depthTarget) < 0.06) {
        this.depthTarget = rnd() > 0.45 ? -0.42 + rnd() * 0.18 : -1.3 - rnd() * 0.6;
      }
      this.depth += (this.depthTarget - this.depth) * dt * 0.7;
      this.pos.y = this.depth + Math.sin(t * 1.1 + this.phase) * 0.12;
      this.vel.copy(this.pos).sub(prev).divideScalar(Math.max(dt, 1e-4));

      // schedule the occasional surfacing hop / full leap
      this.nextSurface -= dt;
      this.nextLeap -= dt;
      if (this.nextLeap <= 0 && activeLeaps.count < 2 && this.safe(this.pos.x, this.pos.z)
        && surfaceAt(this.pos.x, this.pos.z, t).depth > 1.8) {
        this.state = 'leap';
        this.leapT = 0;
        this.leapDur = 0.95 + rnd() * 0.4;
        this.leapH = 1.3 + rnd() * 0.9;
        this.leapOrigin.copy(this.pos);
        const tangent = new THREE.Vector3(Math.cos(this.aw) * this.dir, 0, Math.sin(this.aw) * this.dir);
        this.leapDir.copy(tangent).multiplyScalar(this.speed * 1.35);
        this.nextLeap = 30 + rnd() * 45;
        this.splashedExit = false;
        this.splashedEnter = false;
        activeLeaps.count++;
      } else if (this.nextLeap <= 0) {
        this.nextLeap = 3 + rnd() * 6; // too shallow or busy: re-arm, stay staggered
      }
      if (this.state === 'cruise' && this.nextSurface <= 0 && activeLeaps.count < 2) {
        this.state = 'leap';
        this.leapT = 0;
        this.leapDur = 0.55 + rnd() * 0.25;
        this.leapH = 0.35 + rnd() * 0.3;
        this.leapOrigin.copy(this.pos);
        const tangent = new THREE.Vector3(Math.cos(this.aw) * this.dir, 0, Math.sin(this.aw) * this.dir);
        this.leapDir.copy(tangent).multiplyScalar(this.speed * 1.2);
        this.nextSurface = 8 + rnd() * 16;
        this.splashedExit = false;
        this.splashedEnter = false;
        activeLeaps.count++;
      }
    } else {
      // parabolic leap; horizontal motion continues along the launch heading
      this.leapT += dt;
      const k = this.leapT / this.leapDur;
      this.pos.copy(this.leapOrigin).addScaledVector(this.leapDir, this.leapT);
      const start = this.leapOrigin.y;
      this.pos.y = start + (this.leapH - start) * 4 * k * (1 - k);
      this.vel.copy(this.leapDir);
      this.vel.y = (this.leapH - start) * 4 * (1 - 2 * k) / this.leapDur;
      if (!this.splashedExit && k > 0.04) {
        this.splashPool.splash(this.pos.x, this.pos.z, this.leapH > 1 ? 1 : 0.45);
        this.splashedExit = true;
      }
      if (!this.splashedEnter && k > 0.93) {
        this.splashPool.splash(this.pos.x, this.pos.z, this.leapH > 1 ? 1.2 : 0.5);
        this.splashedEnter = true;
      }
      if (k >= 1) {
        this.state = 'cruise';
        activeLeaps.count--;
        this.depth = -0.5;
        this.depthTarget = -0.5;
        // re-anchor the cruise arc to where we landed
        this.aw = THREE.MathUtils.clamp(Math.atan2(this.pos.x, -this.pos.z), -0.48, 0.48);
        const dth = Math.atan2(this.pos.z, this.pos.x);
        this.rimOffset = THREE.MathUtils.clamp(
          boundaryRadius(dth) - Math.hypot(this.pos.x, this.pos.z), 1.5, 2.4);
        this.rimOffsetTarget = this.rimOffset;
      }
    }

    // orient: yaw from heading, pitch from vertical velocity
    const yaw = Math.atan2(this.vel.x, this.vel.z);
    const pitch = -Math.atan2(this.vel.y, Math.hypot(this.vel.x, this.vel.z));
    this.mesh.rotation.order = 'YXZ';
    this.mesh.rotation.y = yaw;
    this.mesh.rotation.x = pitch * 0.9;
    this.mesh.rotation.z = Math.sin(t * 2 + this.phase) * 0.05;
    this.mesh.position.copy(this.pos);
    // tail beat
    this.mesh.children[0].rotation.x = Math.sin(t * 9 + this.phase) * 0.06;
  }
}

// ---------------------------------------------------------------------------
// Gulls

function makeGull(scene, rnd, i) {
  const g = new THREE.Group();
  const white = new THREE.MeshStandardMaterial({ color: 0xeef0f2, roughness: 0.9 });
  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.055, 0.2, 4, 8), white);
  body.rotation.x = Math.PI / 2;
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.05, 8, 6), white);
  head.position.set(0, 0.035, 0.16);
  const beak = new THREE.Mesh(new THREE.ConeGeometry(0.016, 0.07, 6),
    new THREE.MeshStandardMaterial({ color: 0xd99a3c, roughness: 0.7 }));
  beak.rotation.x = Math.PI / 2;
  beak.position.set(0, 0.03, 0.23);
  const tail = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.012, 0.12), white);
  tail.position.set(0, 0.01, -0.17);

  const wingShape = new THREE.Shape();
  wingShape.moveTo(0, 0);
  wingShape.quadraticCurveTo(0.32, 0.10, 0.62, 0.055);
  wingShape.quadraticCurveTo(0.8, 0.02, 0.88, -0.045);
  wingShape.quadraticCurveTo(0.5, -0.075, 0, -0.06);
  wingShape.closePath();
  const wingGeo = new THREE.ShapeGeometry(wingShape);
  wingGeo.rotateX(-Math.PI / 2);
  const wingMat = new THREE.MeshStandardMaterial({ color: 0xdfe3e7, roughness: 0.9, side: THREE.DoubleSide });
  const wingTipMat = wingMat; // tips darkened with a small overlay quad
  const mkWing = (side) => {
    const pivot = new THREE.Group();
    const w = new THREE.Mesh(wingGeo, wingMat);
    const tip = new THREE.Mesh(new THREE.PlaneGeometry(0.16, 0.14),
      new THREE.MeshStandardMaterial({ color: 0x3d434a, roughness: 0.9, side: THREE.DoubleSide }));
    tip.rotation.x = -Math.PI / 2;
    tip.position.set(0.78 * side, 0, -0.005);
    w.scale.x = side;
    pivot.add(w, tip);
    return pivot;
  };
  const wingL = mkWing(1), wingR = mkWing(-1);
  g.add(body, head, beak, tail, wingL, wingR);
  g.scale.setScalar(1.5);
  scene.add(g);
  return {
    mesh: g, wingL, wingR,
    r: 11 + rnd() * 8,
    h: 9.5 + rnd() * 4.5,
    w: (0.16 + rnd() * 0.12) * (rnd() > 0.5 ? 1 : -1),
    a: rnd() * Math.PI * 2,
    cx: -2 + (rnd() - 0.5) * 6,
    cz: -3 + (rnd() - 0.5) * 6,
    phase: rnd() * 10,
    flapFreq: 5.2 + rnd() * 1.6,
    _prev: new THREE.Vector3(),
  };
}

// ---------------------------------------------------------------------------

export function buildCreatures(scene, terrain, water) {
  const rnd = mulberry32(2027);
  const splashPool = makeSplashPool(scene);
  const activeLeaps = { count: 0 };
  const dolphins = Array.from({ length: 4 }, (_, i) => new Dolphin(scene, splashPool, i, rnd));
  const gulls = Array.from({ length: 4 }, (_, i) => makeGull(scene, rnd, i));

  return {
    dolphins,
    update(t, dt) {
      _t = t;
      for (const d of dolphins) d.update(t, dt, rnd, activeLeaps);
      splashPool.update(t, dt);

      // wake slots for the water shader (dolphins near the surface)
      for (let i = 0; i < water.surf.length; i++) {
        const d = dolphins[i];
        if (d && d.state === 'cruise' && d.pos.y > -0.75) {
          const near = THREE.MathUtils.clamp((d.pos.y + 0.75) / 0.6, 0, 1);
          water.surf[i].set(d.pos.x, d.pos.z, 0.28 * near);
        } else {
          water.surf[i].z *= Math.max(0, 1 - dt * 3);
        }
      }

      for (const g of gulls) {
        g.a += g.w * dt;
        const x = g.cx + Math.cos(g.a) * g.r;
        const z = g.cz + Math.sin(g.a) * g.r;
        const y = g.h + Math.sin(t * 0.7 + g.phase) * 0.8;
        g._prev.copy(g.mesh.position);
        g.mesh.position.set(x, y, z);
        const vx = x - g._prev.x, vz = z - g._prev.z;
        if (Math.abs(vx) + Math.abs(vz) > 1e-5) g.mesh.rotation.y = Math.atan2(vx, vz);
        g.mesh.rotation.z = -0.35 * Math.sign(g.w);
        g.mesh.rotation.x = Math.sin(t * 0.9 + g.phase) * 0.08;
        const glide = 0.5 + 0.5 * Math.sin(t * 0.21 + g.phase * 2.3);
        const flap = Math.sin(t * g.flapFreq + g.phase) * 0.85 * (0.25 + 0.75 * glide) - 0.12;
        g.wingL.rotation.z = flap;
        g.wingR.rotation.z = -flap;
      }
    },
  };
}
