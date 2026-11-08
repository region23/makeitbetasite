// Moving life: spray bursting on the cliffs, wild bottlenose dolphins offshore, circling gulls,
// boats and buoys riding the swell.
import * as THREE from 'three';
import { mulberry32, smoothstep } from './noise.js';
import { SITES, KITE_ZONE, headInfo, outlineMargin } from './world.js';
import { WAVES } from './waves.js';
import { makeSprayMaterial } from './shaders.js';
import { updateRopes } from './structures.js';
import { buildKiters } from './kiters.js';

const rnd = mulberry32(2024);
const R = (a, b) => a + (b - a) * rnd();
const TAU = Math.PI * 2;

// ------------------------------------------------------------------ spray particles
class Spray {
  constructor(n, uniforms) {
    this.n = n;
    this.pos = new Float32Array(n * 3);
    this.vel = new Float32Array(n * 3);
    this.life = new Float32Array(n);
    this.rate = new Float32Array(n);
    this.size = new Float32Array(n);
    this.next = 0;
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3));
    g.setAttribute('aLife', new THREE.BufferAttribute(this.life, 1));
    g.setAttribute('aSize', new THREE.BufferAttribute(this.size, 1));
    this.points = new THREE.Points(g, makeSprayMaterial(uniforms));
    this.points.frustumCulled = false;
  }
  emit(x, y, z, vx, vy, vz, life, size) {
    const i = this.next; this.next = (this.next + 1) % this.n;
    this.pos.set([x, y, z], i * 3);
    this.vel.set([vx, vy, vz], i * 3);
    this.life[i] = 1; this.rate[i] = 1 / life; this.size[i] = size;
  }
  update(dt) {
    for (let i = 0; i < this.n; i++) {
      if (this.life[i] <= 0) continue;
      const k = i * 3;
      this.vel[k + 1] -= 7.5 * dt;
      const drag = Math.exp(-0.9 * dt);
      this.vel[k] *= drag; this.vel[k + 2] *= drag;
      this.pos[k] += this.vel[k] * dt; this.pos[k + 1] += this.vel[k + 1] * dt; this.pos[k + 2] += this.vel[k + 2] * dt;
      this.size[i] *= 1 + 0.5 * dt;
      this.life[i] -= this.rate[i] * dt;
      if (this.pos[k + 1] < -0.6) this.life[i] = 0;
      if (this.life[i] < 0) this.life[i] = 0;
    }
    const g = this.points.geometry;
    g.attributes.position.needsUpdate = true; g.attributes.aLife.needsUpdate = true; g.attributes.aSize.needsUpdate = true;
  }
}

// ------------------------------------------------------------------ dolphin model
function dolphinMesh() {
  const back = new THREE.Color(0.30, 0.34, 0.38), belly = new THREE.Color(0.74, 0.75, 0.76);
  const prof = [[0.0, 0], [0.05, 0.04], [0.075, 0.3], [0.12, 0.62], [0.19, 0.95], [0.26, 1.3], [0.29, 1.6], [0.275, 1.88], [0.23, 2.1],
    [0.17, 2.26], [0.1, 2.36], [0.065, 2.42], [0.055, 2.52], [0.0, 2.58]].map(([r, y]) => new THREE.Vector2(r, y));
  const body = new THREE.LatheGeometry(prof, 16);
  body.rotateZ(-Math.PI / 2);
  body.translate(-1.3, 0, 0);
  body.scale(1, 0.95, 0.82);
  const paint = (g) => {
    const p = g.attributes.position;
    const c = new Float32Array(p.count * 3);
    const tmp = new THREE.Color();
    for (let i = 0; i < p.count; i++) {
      tmp.copy(belly).lerp(back, smoothstep(-0.13, 0.06, p.getY(i)));
      c.set([tmp.r, tmp.g, tmp.b], i * 3);
    }
    g.setAttribute('color', new THREE.BufferAttribute(c, 3));
    return g;
  };
  const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.35, metalness: 0.05 });
  const g = new THREE.Group();
  const bm = new THREE.Mesh(paint(body), mat); // no shadows: scattering in the water would wash them out
  g.add(bm);
  const fin = new THREE.Shape();
  fin.moveTo(0.18, 0); fin.quadraticCurveTo(0.02, 0.28, -0.32, 0.38); fin.quadraticCurveTo(-0.17, 0.14, -0.24, 0); fin.closePath();
  const fg = new THREE.ExtrudeGeometry(fin, { depth: 0.04, bevelEnabled: false });
  fg.translate(0, 0.24, -0.02);
  const finM = new THREE.Mesh(paint(fg), mat);
  g.add(finM);
  const flip = new THREE.Shape();
  flip.moveTo(0.12, 0); flip.quadraticCurveTo(0.0, 0.22, -0.16, 0.3); flip.quadraticCurveTo(-0.06, 0.1, -0.08, 0); flip.closePath();
  for (const s of [-1, 1]) {
    const pg = new THREE.ExtrudeGeometry(flip, { depth: 0.025, bevelEnabled: false });
    pg.rotateX((s * Math.PI) / 2 + s * 0.5);
    pg.translate(0.75, -0.12, s * 0.17);
    g.add(new THREE.Mesh(paint(pg), mat));
  }
  const fluke = new THREE.Shape();
  fluke.moveTo(0.06, 0); fluke.quadraticCurveTo(-0.05, 0.2, -0.24, 0.36); fluke.quadraticCurveTo(-0.2, 0.18, -0.16, 0.02);
  fluke.lineTo(-0.16, -0.02); fluke.quadraticCurveTo(-0.2, -0.18, -0.24, -0.36); fluke.quadraticCurveTo(-0.05, -0.2, 0.06, 0); fluke.closePath();
  const flg = new THREE.ExtrudeGeometry(fluke, { depth: 0.025, bevelEnabled: false });
  flg.rotateX(Math.PI / 2);
  const tail = new THREE.Group();
  tail.position.set(-1.28, 0, 0);
  const fm = new THREE.Mesh(paint(flg), mat); fm.position.set(-0.02, 0.012, 0);
  tail.add(fm);
  g.add(tail);
  g.userData.tail = tail;
  return g;
}

class Dolphin {
  constructor(id, x, z, heading, life, leader = null, offset = null) {
    this.id = id; this.x = x; this.z = z; this.heading = heading;
    this.leader = leader; this.offset = offset;
    this.obj = dolphinMesh();
    this.obj.rotation.order = 'YZX';
    this.obj.scale.setScalar(R(0.92, 1.08));
    this.life = life;
    this.turn = 0;
    this.speed = 3.2;
    this.y = -2.3;
    this.pitch = 0;
    this.state = 'cruise';
    this.next = null; // scheduled on the first update, staggered per animal
    this.stagger = R(5, 14) + id * 4.5;
    this.seed = R(0, 100);
    this.prevY = this.y;
  }
  allowed(x, z) {
    if (outlineMargin(x, z) < 13) return false;
    const b1 = this.life.bake.sample1(x, z), b2 = this.life.bake.sample2(x, z);
    if (b1[2] > -9 || b1[3] > 0.01 || b2[3] * 40 < 14) return false;
    if (Math.hypot(x + 5, z - 68) < 38 || x > 15) return false;
    if (x > KITE_ZONE.x0 - 14 && z > KITE_ZONE.z0 - 12) return false; // leave the kitesurfer's water alone
    return true;
  }
  startEvent(t, kind) {
    this.state = kind;
    this.t0 = t;
    this.dur = kind === 'leap' ? R(1.35, 1.6) : R(2.2, 2.8);
    this.apex = kind === 'leap' ? R(1.3, 1.9) : R(-0.12, 0.02);
    this.splashed = 0;
  }
  update(dt, t) {
    const L = this.life;
    if (this.next === null) this.next = t + this.stagger;
    // steering: gentle wander, flock cohesion for pod members, keep to deep open water
    let desired = this.heading + 0.5 * Math.sin(t * 0.11 + this.seed) + 0.3 * Math.sin(t * 0.37 + this.seed * 2);
    let spd = 3.2;
    if (this.leader) {
      const ld = this.leader;
      const ca = Math.cos(ld.heading), sa = Math.sin(ld.heading);
      const tx = ld.x + ca * this.offset[0] - sa * this.offset[1];
      const tz = ld.z + sa * this.offset[0] + ca * this.offset[1];
      const dx = tx - this.x, dz = tz - this.z, dist = Math.hypot(dx, dz);
      desired = Math.atan2(dz, dx) * Math.min(1, dist / 6) + ld.heading * (1 - Math.min(1, dist / 6));
      spd = 3.2 + Math.min(2, dist * 0.25);
    }
    const ahead = 20;
    if (!this.allowed(this.x + Math.cos(this.heading) * ahead, this.z + Math.sin(this.heading) * ahead)) {
      // turn toward the centre of the open-water zone
      const cx = -148, cz = this.z > 40 ? 30 : -10;
      desired = Math.atan2(cz - this.z, cx - this.x);
    }
    let diff = desired - this.heading;
    diff = Math.atan2(Math.sin(diff), Math.cos(diff));
    this.turn += (Math.max(-0.6, Math.min(0.6, diff * 0.8)) - this.turn) * Math.min(1, dt * 1.5);
    this.heading += this.turn * dt;

    // vertical behaviour: cruising, breathing rolls and occasional leaps
    let vy = 0;
    if (this.state === 'cruise') {
      this.y += (-2.3 + 0.25 * Math.sin(t * 0.7 + this.seed) - this.y) * Math.min(1, dt * 0.8);
      if (t > this.next) {
        const kind = rnd() < 0.3 ? 'leap' : 'breathe';
        this.startEvent(t, kind);
        if (!this.leader) {
          for (const f of L.dolphins) {
            if (f.leader === this && f.state === 'cruise' && rnd() < 0.55) f.next = t + R(0.3, 1.2);
          }
        }
      }
    } else {
      const s = (t - this.t0) / this.dur;
      if (s >= 1) {
        this.state = 'cruise';
        this.next = t + R(10, 28);
      } else {
        const base = -2.3;
        const yNew = base + (this.apex - base) * Math.sin(Math.PI * s);
        vy = (yNew - this.y) / Math.max(dt, 1e-3);
        this.y = yNew;
        if (this.state === 'leap') spd = 5.6;
      }
    }
    this.speed += (spd - this.speed) * Math.min(1, dt * 1.2);
    this.x += Math.cos(this.heading) * this.speed * dt;
    this.z += Math.sin(this.heading) * this.speed * dt;

    // splashes and rings where the body breaks the surface
    const surf = L.sampler.height(this.x, this.z, t);
    const rel = this.y - surf;
    const prevRel = this.prevY - surf;
    if (this.state !== 'cruise') {
      const up = prevRel < -0.25 && rel >= -0.25;
      const down = prevRel > -0.1 && rel <= -0.1 && vy < 0;
      if (up || down) {
        const big = this.state === 'leap' ? 1 : 0.4;
        L.ripple(this.x, this.z, t, big);
        const n = Math.floor((this.state === 'leap' ? 26 : 7) * (down ? 1.2 : 0.8));
        for (let i = 0; i < n; i++) {
          const a = rnd() * TAU, sp = R(0.5, 2.0) * big + 0.4;
          L.spray.emit(this.x + Math.cos(a) * 0.4, surf + 0.1, this.z + Math.sin(a) * 0.4,
            Math.cos(a) * sp, R(1.5, 4.0) * big + 0.8, Math.sin(a) * sp, R(0.7, 1.3), R(0.25, 0.6) * (0.6 + big));
        }
      }
      if (this.state === 'breathe' && up) {
        for (let i = 0; i < 6; i++) L.spray.emit(this.x + Math.cos(this.heading) * 0.8, surf + 0.4, this.z + Math.sin(this.heading) * 0.8, R(-0.3, 0.3), R(2.5, 3.5), R(-0.3, 0.3), 0.9, 0.35);
      }
    }
    this.prevY = this.y;
    const targetPitch = Math.atan2(vy, this.speed);
    this.pitch += (targetPitch - this.pitch) * Math.min(1, dt * (this.state === 'cruise' ? 2 : 10));
    this.obj.position.set(this.x, this.y, this.z);
    this.obj.rotation.y = -this.heading;
    this.obj.rotation.z = this.pitch;
    this.obj.rotation.x = -this.turn * 0.5;
    const stroke = this.state === 'leap' ? 0.1 : 0.35;
    this.obj.userData.tail.rotation.z = Math.sin(t * (this.speed * 1.4) + this.seed) * stroke;
    this.obj.visible = true;
  }
}

// ------------------------------------------------------------------ gulls
function gullMesh() {
  const g = new THREE.Group();
  const white = new THREE.MeshStandardMaterial({ color: 0xf4f4f0, roughness: 0.7 });
  const wingMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.7, side: THREE.DoubleSide });
  const body = new THREE.Mesh(new THREE.SphereGeometry(0.12, 10, 8), white);
  body.scale.set(2.9, 0.95, 1.0);
  g.add(body);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.075, 8, 6), white);
  head.position.set(0.32, 0.05, 0);
  g.add(head);
  const beak = new THREE.Mesh(new THREE.ConeGeometry(0.02, 0.1, 5), new THREE.MeshStandardMaterial({ color: 0xe8b830, roughness: 0.5 }));
  beak.rotation.z = -Math.PI / 2; beak.position.set(0.42, 0.04, 0);
  g.add(beak);
  const wingGeo = (s) => {
    const P = [[0.08, 0], [0.02, 0.33], [-0.02, 0.62], [-0.1, 0.7], [-0.13, 0.36], [-0.12, 0]];
    const pos = [], col = [];
    for (let i = 1; i < P.length - 1; i++) {
      for (const k of [0, i, i + 1]) {
        pos.push(P[k][0], 0, P[k][1] * s);
        const tip = P[k][1] > 0.55;
        col.push(...(tip ? [0.08, 0.08, 0.09] : [0.62, 0.66, 0.7]));
      }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    geo.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
    geo.computeVertexNormals();
    return geo;
  };
  const wl = new THREE.Group(), wr = new THREE.Group();
  wl.add(new THREE.Mesh(wingGeo(1), wingMat));
  wr.add(new THREE.Mesh(wingGeo(-1), wingMat));
  wl.position.set(0.02, 0.04, 0.05); wr.position.set(0.02, 0.04, -0.05);
  g.add(wl, wr);
  g.userData.wings = [wl, wr];
  g.scale.setScalar(1.35);
  return g;
}

export function buildLife(ctx) {
  const { scene, fxScene, bake, sampler, structures, sprayUniforms, rippleUniform } = ctx;
  const L = { bake, sampler, dolphins: [], gulls: [] };
  L.spray = new Spray(1600, sprayUniforms);
  fxScene.add(L.spray.points);
  let rippleIdx = 0;
  L.ripple = (x, z, t, strength) => {
    rippleUniform.value[rippleIdx].set(x, z, t, strength);
    rippleIdx = (rippleIdx + 1) % rippleUniform.value.length;
  };

  // pod of three in the open water west of the island, and one solitary animal to the south-west
  const lead = new Dolphin(0, -146, -40, 1.5, L);
  L.dolphins.push(lead);
  L.dolphins.push(new Dolphin(1, -150, -46, 1.5, L, lead, [-3.5, 2.6]));
  L.dolphins.push(new Dolphin(2, -142, -48, 1.5, L, lead, [-5.5, -2.2]));
  L.dolphins.push(new Dolphin(3, -150, 40, 1.9, L));
  for (const d of L.dolphins) scene.add(d.obj);

  // gulls circling over the island
  for (let i = 0; i < 6; i++) {
    const g = gullMesh();
    scene.add(g);
    L.gulls.push({
      obj: g, cx: SITES.head.x + R(-14, 18), cz: SITES.head.z + R(-14, 18), r: R(12, 30), h: R(24, 40),
      w: (rnd() < 0.5 ? -1 : 1) * R(0.18, 0.3), p: R(0, TAU), fp: R(0, TAU),
    });
  }

  // kitesurfers in the lee of the island
  L.kiters = buildKiters({ scene, fxScene, sampler, bake, spray: L.spray, ripple: L.ripple });

  // cliff impact sites around the exposed side of the island
  const sites = [];
  for (let a = 0; a < TAU; a += 0.025) {
    const H = SITES.head;
    for (let r = 20; r < 60; r += 0.25) {
      const x = H.x + Math.cos(a) * r, z = H.z + Math.sin(a) * r * 0.9;
      const hi = headInfo(x, z);
      if (hi.d > hi.ledge * 0.6) {
        if (hi.w > 0.3) sites.push({ x, z, nx: Math.cos(a), nz: Math.sin(a), last: null, w: hi.w });
        break;
      }
    }
  }
  const dir0 = [Math.cos(WAVES[0].dir), Math.sin(WAVES[0].dir)];

  L.update = (dt, t) => {
    // spray where the swell meets the cliffs and fallen blocks
    for (const s of sites) {
      const info = sampler.primary(s.x, s.z, t);
      const c = Math.floor((info.phase - Math.PI / 2) / TAU);
      if (s.last !== null && c !== s.last) {
        const I = info.amp * (0.6 + 0.6 * s.w);
        if (I > 0.32 && rnd() < 0.85) {
          const Ic = Math.min(I, 1.3);
          const n = Math.min(28, Math.floor(Ic * R(10, 24)));
          for (let i = 0; i < n; i++) {
            const tx = -s.nz, tz = s.nx, along = R(-1.8, 1.8);
            const up = R(1.8, 5.2) * Ic;
            const back = R(0.2, 1.4);
            L.spray.emit(s.x + tx * along - s.nx * R(0, 1.2), R(0.0, 0.5), s.z + tz * along - s.nz * R(0, 1.2),
              dir0[0] * back - s.nx * R(0, 1.0) + tx * R(-0.7, 0.7), up, dir0[1] * back - s.nz * R(0, 1.0) + tz * R(-0.7, 0.7),
              R(0.9, 1.8), R(0.35, 0.95) * (0.6 + 0.4 * Ic));
          }
        }
      }
      s.last = c;
    }
    L.spray.update(dt);

    for (const d of L.dolphins) d.update(dt, t);
    L.kiters.update(dt, t);

    for (const g of L.gulls) {
      const th = g.p + g.w * t + 0.3 * Math.sin(t * 0.2 + g.p);
      const x = g.cx + Math.cos(th) * g.r, z = g.cz + Math.sin(th) * g.r;
      const y = g.h + 3 * Math.sin(t * 0.27 + g.p);
      g.obj.position.set(x, y, z);
      const vx = -Math.sin(th) * g.w, vz = Math.cos(th) * g.w;
      g.obj.rotation.set(0, 0, 0);
      g.obj.rotation.order = 'YXZ';
      g.obj.rotation.y = -Math.atan2(vz, vx);
      g.obj.rotation.x = Math.sign(g.w) * -0.38;
      const flapping = Math.sin(t * 0.45 + g.fp) > 0.45;
      const ang = flapping ? 0.55 * Math.sin(t * 10 + g.fp) : 0.12 + 0.04 * Math.sin(t * 2 + g.fp);
      g.obj.userData.wings[0].rotation.x = -ang;
      g.obj.userData.wings[1].rotation.x = ang;
    }

    // boats and buoys ride the local swell
    for (const b of structures.boats) {
      const o = b.obj;
      const swing = b.moor === 'buoy' ? 0.22 * Math.sin(t * 0.05 + b.phase) + 0.08 * Math.sin(t * 0.13 + b.phase) : 0.015 * Math.sin(t * 0.3 + b.phase);
      const yaw = b.yaw + swing;
      const len = o.userData.len, beam = o.userData.beam;
      const fx = Math.cos(yaw), fz = -Math.sin(yaw);
      const hc = sampler.height(b.x, b.z, t);
      const hf = sampler.height(b.x + fx * len * 0.4, b.z + fz * len * 0.4, t);
      const hb = sampler.height(b.x - fx * len * 0.4, b.z - fz * len * 0.4, t);
      const hl = sampler.height(b.x - fz * beam * 0.45, b.z + fx * beam * 0.45, t);
      const hr = sampler.height(b.x + fz * beam * 0.45, b.z - fx * beam * 0.45, t);
      o.position.y += ((hc + hf + hb) / 3 - 0.06 - o.position.y) * Math.min(1, dt * 4);
      o.rotation.y = yaw;
      const pitch = Math.atan2(hf - hb, len * 0.8);
      const roll = Math.atan2(hl - hr, beam * 0.9) + 0.012 * Math.sin(t * 0.9 + b.phase);
      o.rotation.z += (pitch - o.rotation.z) * Math.min(1, dt * 3);
      o.rotation.x += (roll - o.rotation.x) * Math.min(1, dt * 3);
    }
    for (const b of structures.buoys) {
      const h = sampler.height(b.x, b.z, t);
      b.obj.position.set(b.x, h - b.r * 0.3, b.z);
    }
    updateRopes(structures.ropes);
    if (structures.radar) structures.radar.rotation.y = t * 1.4;
  };
  return L;
}
