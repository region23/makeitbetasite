// creatures.js — gulls circling overhead and dolphins making occasional,
// graceful breaches in the open sea, with subtle splashes and wake rings.

import * as THREE from 'three';
import { landRadius, slabRadius, mulberry32, sstep } from './terrain.js';

// ---------------- splash particles ----------------
class SplashPool {
  constructor(scene, count = 80) {
    this.count = count;
    this.geo = new THREE.OctahedronGeometry(0.055);
    this.mat = new THREE.MeshStandardMaterial({ color: 0xf0f7f8, roughness: 0.25, metalness: 0.05 });
    this.mesh = new THREE.InstancedMesh(this.geo, this.mat, count);
    this.mesh.frustumCulled = false;
    this.items = [];
    for (let i = 0; i < count; i++) {
      this.items.push({ alive: false, pos: new THREE.Vector3(), vel: new THREE.Vector3(), rot: new THREE.Euler(), spin: new THREE.Vector3(), scale: 1, life: 0, max: 1 });
      this.mesh.setMatrixAt(i, new THREE.Matrix4().makeScale(0, 0, 0));
    }
    scene.add(this.mesh);
  }
  spawn(x, z, n = 14) {
    const rng = Math.random;
    for (let i = 0; i < this.count; i++) {
      const it = this.items[i];
      if (it.alive) continue;
      if (--n < 0) break;
      it.alive = true;
      it.pos.set(x + (rng() - 0.5) * 0.4, 0.05, z + (rng() - 0.5) * 0.4);
      it.vel.set((rng() - 0.5) * 1.3, 0.9 + rng() * 1.9, (rng() - 0.5) * 1.3);
      it.rot.set(rng() * 3, rng() * 3, rng() * 3);
      it.spin.set(rng() * 6 - 3, rng() * 6 - 3, rng() * 6 - 3);
      it.scale = 0.5 + rng() * 0.9;
      it.max = it.life = 0.5 + rng() * 0.4;
    }
  }
  update(dt) {
    const m = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3();
    for (let i = 0; i < this.count; i++) {
      const it = this.items[i];
      if (it.alive) {
        it.life -= dt;
        it.vel.y -= 4.4 * dt;
        it.pos.addScaledVector(it.vel, dt);
        it.rot.x += it.spin.x * dt; it.rot.y += it.spin.y * dt; it.rot.z += it.spin.z * dt;
        if (it.life <= 0 || it.pos.y < -0.12) {
          it.alive = false;
          s.set(0, 0, 0);
        } else {
          s.setScalar(it.scale * (it.life / it.max));
        }
      } else {
        s.set(0, 0, 0);
      }
      q.setFromEuler(it.rot);
      m.compose(it.pos, q, s);
      this.mesh.setMatrixAt(i, m);
    }
    this.mesh.instanceMatrix.needsUpdate = true;
  }
}

class RingPool {
  constructor(scene, count = 14) {
    this.items = [];
    const geo = new THREE.RingGeometry(0.55, 0.78, 24);
    for (let i = 0; i < count; i++) {
      const mat = new THREE.MeshBasicMaterial({ color: 0xf2f7f7, transparent: true, opacity: 0, side: THREE.DoubleSide, depthWrite: false });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.rotation.x = -Math.PI / 2;
      mesh.visible = false;
      mesh.renderOrder = 12;
      scene.add(mesh);
      this.items.push({ mesh, life: 0, max: 1, maxScale: 1 });
    }
  }
  spawn(x, z, maxScale = 1.6, life = 0.9, opacity = 0.5) {
    let it = this.items.find((i) => i.life <= 0);
    if (!it) it = this.items[0];
    it.life = it.max = life;
    it.maxScale = maxScale;
    it.opacity0 = opacity;
    it.mesh.visible = true;
    it.mesh.position.set(x, 0.03, z);
    it.mesh.scale.setScalar(0.35);
    it.mesh.material.opacity = opacity;
  }
  update(dt) {
    for (const it of this.items) {
      if (it.life <= 0) continue;
      it.life -= dt;
      const t = 1 - it.life / it.max;
      const s = 0.35 + (it.maxScale - 0.35) * (t * (0.6 + 0.4 * t));
      it.mesh.scale.setScalar(s);
      it.mesh.material.opacity = (it.opacity0 || 0.5) * (1 - t);
      if (it.life <= 0) it.mesh.visible = false;
    }
  }
}

// ---------------- gulls ----------------
function buildGull() {
  const g = new THREE.Group();
  const white = new THREE.MeshStandardMaterial({ color: 0xf3f1ea, roughness: 0.85 });
  const grey = new THREE.MeshStandardMaterial({ color: 0xaeb6bc, roughness: 0.85 });
  const body = new THREE.Mesh(new THREE.SphereGeometry(1, 10, 8), white);
  body.scale.set(0.14, 0.11, 0.30);
  g.add(body);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.065, 8, 7), white);
  head.position.set(0, 0.055, 0.27);
  g.add(head);
  const beak = new THREE.Mesh(new THREE.ConeGeometry(0.02, 0.09, 6), new THREE.MeshStandardMaterial({ color: 0xd99a3e, roughness: 0.6 }));
  beak.rotation.x = Math.PI / 2;
  beak.position.set(0, 0.05, 0.36);
  g.add(beak);
  const tail = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.018, 0.14), grey);
  tail.position.set(0, 0.01, -0.32);
  g.add(tail);

  const wingShape = new THREE.Shape();
  wingShape.moveTo(0, 0);
  wingShape.quadraticCurveTo(0.28, 0.05, 0.62, 0.11);
  wingShape.quadraticCurveTo(0.8, 0.11, 0.92, 0.02);
  wingShape.lineTo(0.5, -0.07);
  wingShape.closePath();
  const wingGeo = new THREE.ShapeGeometry(wingShape);
  const wingMat = new THREE.MeshStandardMaterial({ color: 0xd8dadd, roughness: 0.85, side: THREE.DoubleSide });
  const wingR = new THREE.Mesh(wingGeo, wingMat);
  wingR.position.set(0.06, 0.02, 0.02);
  wingR.castShadow = true;
  g.add(wingR);
  const wingL = new THREE.Mesh(wingGeo, wingMat);
  wingL.position.set(-0.06, 0.02, 0.02);
  wingL.rotation.y = Math.PI;
  wingL.castShadow = true;
  g.add(wingL);
  return { group: g, wingR, wingL };
}

export function createGulls(scene, count = 3) {
  const rng = mulberry32(555);
  const gulls = [];
  for (let i = 0; i < count; i++) {
    const gl = buildGull();
    scene.add(gl.group);
    gulls.push({
      ...gl,
      r: 13 + rng() * 7,
      h0: 11.5 + rng() * 5,
      w: 0.14 + rng() * 0.10,
      phi: rng() * Math.PI * 2,
      flapSpeed: 6.5 + rng() * 2.5,
      next: new THREE.Vector3(),
    });
  }
  function update(t) {
    for (const gl of gulls) {
      const a = gl.w * t + gl.phi;
      const x = Math.cos(a) * gl.r;
      const z = Math.sin(a) * gl.r * 0.82;
      const y = gl.h0 + Math.sin(t * 0.42 + gl.phi * 2) * 1.2;
      const a2 = a + 0.06;
      gl.next.set(Math.cos(a2) * gl.r, y + Math.cos(t * 0.42 + gl.phi * 2) * 0.06 * 1.2, Math.sin(a2) * gl.r * 0.82);
      gl.group.position.set(x, y, z);
      gl.group.lookAt(gl.next);
      gl.group.rotateX(0.22); // bank into the turn
      const glide = 0.25 + 0.75 * sstep(0.2, 0.9, Math.sin(t * 0.21 + gl.phi * 3) * 0.5 + 0.5);
      const flap = Math.sin(t * gl.flapSpeed + gl.phi) * 0.55 * glide;
      gl.wingR.rotation.z = flap;
      gl.wingL.rotation.z = flap;
    }
  }
  return { update };
}

// ---------------- dolphins ----------------
function buildDolphin() {
  const g = new THREE.Group();
  const prof = [
    [0.012, 0.60], [0.048, 0.52], [0.088, 0.40], [0.126, 0.26],
    [0.156, 0.10], [0.166, -0.04], [0.146, -0.18], [0.106, -0.30],
    [0.064, -0.40], [0.036, -0.48], [0.02, -0.52], [0.008, -0.56],
  ];
  const pts = prof.map(([r, y]) => new THREE.Vector2(r, y));
  const bodyGeo = new THREE.LatheGeometry(pts, 18);
  // vertex colors: dark back, light belly, dark snout
  const colors = new Float32Array(bodyGeo.attributes.position.count * 3);
  const cTop = new THREE.Color(0x3d4d5e), cBelly = new THREE.Color(0xa9b6bd), cNose = new THREE.Color(0x31404d);
  const v = new THREE.Vector3();
  for (let i = 0; i < bodyGeo.attributes.position.count; i++) {
    v.fromBufferAttribute(bodyGeo.attributes.position, i);
    const belly = sstep(0.0, 0.14, v.x / 0.17); // +x = belly side
    const nose = sstep(0.42, 0.6, v.y);
    const c = cBelly.clone().lerp(cTop, 1 - belly).lerp(cNose, nose);
    colors[i * 3] = c.r; colors[i * 3 + 1] = c.g; colors[i * 3 + 2] = c.b;
  }
  bodyGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  const body = new THREE.Mesh(bodyGeo, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.5 }));
  body.rotation.x = Math.PI / 2; // nose +Y -> +Z
  g.add(body);

  const finMat = new THREE.MeshStandardMaterial({ color: 0x46586a, roughness: 0.55, side: THREE.DoubleSide });
  // dorsal fin (built in XY: length x, height y) -> rotated so x -> z (body axis), y stays up
  const dorsalShape = new THREE.Shape();
  dorsalShape.moveTo(-0.10, 0);
  dorsalShape.quadraticCurveTo(-0.02, 0.16, 0.06, 0.17);
  dorsalShape.quadraticCurveTo(0.12, 0.13, 0.16, 0.0);
  dorsalShape.closePath();
  const dorsal = new THREE.Mesh(new THREE.ShapeGeometry(dorsalShape), finMat);
  dorsal.rotation.y = -Math.PI / 2;
  dorsal.position.set(0, 0.10, -0.05);
  g.add(dorsal);

  // tail fluke (horizontal): shape in XY (x lateral, y length) -> rotateX 90° so y -> z
  const flukeShape = new THREE.Shape();
  flukeShape.moveTo(0, 0);
  flukeShape.lineTo(0.06, 0.10);
  flukeShape.lineTo(0.30, 0.16);
  flukeShape.lineTo(0.35, 0.06);
  flukeShape.lineTo(0.14, 0.0);
  flukeShape.lineTo(0.35, -0.06);
  flukeShape.lineTo(0.30, -0.16);
  flukeShape.lineTo(0.06, -0.10);
  flukeShape.closePath();
  const fluke = new THREE.Mesh(new THREE.ShapeGeometry(flukeShape), finMat);
  fluke.rotation.x = Math.PI / 2;
  fluke.position.set(0, 0, -0.55);
  g.add(fluke);

  // pectoral fins
  const pecShape = new THREE.Shape();
  pecShape.moveTo(0, 0);
  pecShape.lineTo(0.10, -0.05);
  pecShape.lineTo(0.13, -0.16);
  pecShape.lineTo(0.03, -0.08);
  pecShape.closePath();
  for (const side of [-1, 1]) {
    const pec = new THREE.Mesh(new THREE.ShapeGeometry(pecShape), finMat);
    pec.position.set(side * 0.10, -0.02, 0.16);
    pec.rotation.set(0.5, side * 0.9, 0);
    g.add(pec);
  }
  const eye = new THREE.Mesh(new THREE.SphereGeometry(0.014, 6, 5), new THREE.MeshBasicMaterial({ color: 0x14181c }));
  eye.position.set(0.075, 0.045, 0.47);
  g.add(eye);

  g.scale.setScalar(1.35);
  return g;
}

export function createDolphins(scene, count = 4) {
  const rng = mulberry32(808);
  const splashes = new SplashPool(scene);
  const rings = new RingPool(scene);

  // open-sea corridor: mid-ring of the diorama, restricted to the western half
  function midRadius(a) { return (landRadius(a) + slabRadius(a)) / 2; }
  const dolphins = [];
  const windows = [
    [Math.PI * 0.58, Math.PI * 1.42],
    [Math.PI * 0.75, Math.PI * 1.62],
    [Math.PI * 0.50, Math.PI * 1.25],
    [Math.PI * 0.90, Math.PI * 1.80],
  ];
  for (let i = 0; i < count; i++) {
    const d = buildDolphin();
    scene.add(d);
    const [t0, t1] = windows[i % windows.length];
    const dp = {
      group: d,
      u: rng(),
      speed: 1.0 + rng() * 0.5,   // m/s along the corridor
      t0, t1,
      depth: -0.95 - rng() * 0.55,
      phi: rng() * 10,
      state: 'cruise',
      s: 0,
      nextBreach: 3.5 + i * 4.2 + rng() * 4,
      lastWake: 0,
      heading: new THREE.Vector3(1, 0, 0),
      pos: new THREE.Vector3(),
      arcStart: new THREE.Vector3(),
      entryStart: new THREE.Vector3(),
      splashed: false,
    };
    pathPointInit(dp);
    dolphins.push(dp);
  }

  function pathPointInit(dp) {
    pathPoint(dp, dp.u, dp.pos);
    pathTangent(dp, dp.u, dp.heading);
  }

  function pathPoint(dp, u, out) {
    // ping-pong u in [0,1]; ease at the turns (U-turn deceleration)
    let f = u % 2;
    if (f > 1) f = 2 - f;
    f = f * f * (3 - 2 * f);
    const a = dp.t0 + (dp.t1 - dp.t0) * f;
    const r = midRadius(a);
    out.set(Math.cos(a) * r, 0, Math.sin(a) * r);
    return out;
  }

  function pathTangent(dp, u, out) {
    const e = 0.01;
    const p0 = pathPoint(dp, u - e, new THREE.Vector3());
    const p1 = pathPoint(dp, u + e, new THREE.Vector3());
    out.copy(p1).sub(p0);
    if (out.lengthSq() < 1e-6) return false; // at a turnaround, keep old heading
    let f = u % 2;
    if (f > 1) out.negate();
    out.normalize();
    return true;
  }

  const V = new THREE.Vector3(), V2 = new THREE.Vector3(), A = new THREE.Vector3();
  const H0 = new THREE.Vector3();

  function update(t, dt) {
    for (const dp of dolphins) {
      dp.s += dt;
      const aCur = dp.t0 + (dp.t1 - dp.t0) * pingF(dp.u);
      dp.u += (dp.speed * dt) / (midRadius(aCur) * (dp.t1 - dp.t0));

      pathPoint(dp, dp.u, A);
      const tangentOk = pathTangent(dp, dp.u, V2);
      if (tangentOk && dp.state !== 'arc' && dp.state !== 'entry') dp.heading.copy(V2);

      let y = 0, pitch = 0;
      const dive = dp.depth + Math.sin(t * 0.5 + dp.phi) * 0.22;

      if (dp.state === 'cruise') {
        y = dive;
        pitch = Math.sin(t * 0.7 + dp.phi) * 0.05;
        dp.pos.lerp(A, 1 - Math.exp(-6 * dt));
        if (t >= dp.nextBreach && y > -1.45) {
          dp.state = 'rise'; dp.s = 0;
        }
      } else if (dp.state === 'rise') {
        const k = Math.min(1, dp.s / 0.9);
        y = dive * (1 - k * k) + 0.18 * k * k;
        pitch = 0.9 * k * k;
        dp.pos.lerp(A, 1 - Math.exp(-6 * dt));
        if (dp.s > 0.5 && t - dp.lastWake > 0.16) {
          rings.spawn(dp.pos.x, dp.pos.z, 0.55, 0.5, 0.16);
          dp.lastWake = t;
        }
        if (k >= 1) {
          dp.state = 'arc'; dp.s = 0;
          dp.arcStart.copy(dp.pos); dp.arcStart.y = 0.18;
          H0.copy(dp.heading);
        }
      } else if (dp.state === 'arc') {
        const v0 = 2.7, ang = 0.91, g = 2.7;
        const vy = v0 * Math.sin(ang), vx = v0 * Math.cos(ang);
        const tau = dp.s;
        dp.pos.copy(dp.arcStart).addScaledVector(H0, vx * tau);
        y = 0.18 + vy * tau - 0.5 * g * tau * tau;
        pitch = 0.91 - 1.75 * (tau / 0.95);
        if (tau > 0.95 || y < -0.05) {
          dp.state = 'entry'; dp.s = 0;
          dp.entryStart.copy(dp.pos); dp.entryStart.y = 0;
          dp.splashed = false;
        }
      } else if (dp.state === 'entry') {
        const k = Math.min(1, dp.s / 0.7);
        const tau = dp.s;
        dp.pos.copy(dp.entryStart).addScaledVector(H0, 2.2 * tau);
        y = -0.05 - 1.5 * k * k;
        pitch = -0.62 + 0.4 * k;
        if (!dp.splashed && tau > 0.14) {
          // the body passes the water line: splash + foam ring
          splashes.spawn(dp.pos.x, dp.pos.z, 15);
          rings.spawn(dp.pos.x, dp.pos.z, 1.5, 0.9, 0.45);
          dp.splashed = true;
        }
        if (k >= 1) { dp.state = 'dive'; dp.s = 0; }
      } else if (dp.state === 'dive') {
        const k = Math.min(1, dp.s / 0.9);
        y = -0.1 + (dive + 0.1) * k;
        pitch = -0.22 * (1 - k);
        dp.pos.lerp(A, 1 - Math.exp(-3.5 * dt));
        if (dp.s > 0.4 && t - dp.lastWake > 0.2) {
          rings.spawn(dp.pos.x, dp.pos.z, 0.5, 0.55, 0.13);
          dp.lastWake = t;
        }
        if (k >= 1) {
          dp.state = 'cruise';
          dp.nextBreach = t + 11 + rng() * 13;
        }
      }

      // orient: face the heading, apply pitch
      const gp = dp.group.position;
      gp.copy(dp.pos); gp.y = y;
      V.copy(gp).add(dp.heading);
      dp.group.lookAt(V);
      dp.group.rotateX(pitch);
      // gentle tail beat (lookAt resets the orientation each frame)
      dp.group.rotateZ(Math.sin(t * (dp.state === 'cruise' ? 4.2 : 7.5) + dp.phi) * 0.03);
    }
    splashes.update(dt);
    rings.update(dt);
  }
  return { update };
}

function pingF(u) {
  let f = u % 2;
  if (f > 1) f = 2 - f;
  return f;
}
