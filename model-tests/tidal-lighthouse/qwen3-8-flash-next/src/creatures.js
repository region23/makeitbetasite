/**
 * creatures.js — gulls on the thermals and dolphins that cruise, surface and
 * leap in the open water clear of the rocks and the moorings.
 */

import * as THREE from 'three';
import { ground, PLACES, mulberry32, clamp, lerp, smoothstep } from './terrain.js';
import * as T from './theme.js';
import { mergeGeoms, M } from './util.js';

/* ------------------------------------------------------------ particles */

/** additive point sprite field for spray, wakes and spill from a breach */
class Spray {
  constructor(capacity, texture) {
    this.cap = capacity;
    this.i = 0;
    this.pos = new Float32Array(capacity * 3);
    this.vel = new Float32Array(capacity * 3);
    this.life = new Float32Array(capacity);
    this.maxLife = new Float32Array(capacity);
    this.size = new Float32Array(capacity);
    this.alpha = new Float32Array(capacity);
    this.col = new Float32Array(capacity * 3);
    this.drag = new Float32Array(capacity);

    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3));
    g.setAttribute('aSize', new THREE.BufferAttribute(this.size, 1));
    g.setAttribute('aAlpha', new THREE.BufferAttribute(this.alpha, 1));
    g.setAttribute('aColor', new THREE.BufferAttribute(this.col, 3));
    g.boundingSphere = new THREE.Sphere(new THREE.Vector3(0, 0, 0), 200);

    const mat = new THREE.ShaderMaterial({
      uniforms: {
        uMap: { value: texture },
        uPR: { value: 1 },
        uFogColor: { value: new THREE.Color(T.FOG_COLOR) },
        uFogNear: { value: T.FOG_NEAR },
        uFogFar: { value: T.FOG_FAR },
      },
      vertexShader: /* glsl */ `
        attribute float aSize;
        attribute float aAlpha;
        attribute vec3 aColor;
        varying float vAlpha;
        varying vec3 vColor;
        varying float vDepth;
        uniform float uPR;
        void main() {
          vAlpha = aAlpha;
          vColor = aColor;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          vDepth = -mv.z;
          gl_PointSize = aSize * uPR * (360.0 / max(1.0, -mv.z));
          gl_Position = projectionMatrix * mv;
        }
      `,
      fragmentShader: /* glsl */ `
        precision highp float;
        uniform sampler2D uMap;
        uniform vec3 uFogColor;
        uniform float uFogNear;
        uniform float uFogFar;
        varying float vAlpha;
        varying vec3 vColor;
        varying float vDepth;
        void main() {
          vec4 tex = texture2D(uMap, gl_PointCoord);
          float a = tex.a * vAlpha;
          if (a < 0.004) discard;
          float fog = smoothstep(uFogNear, uFogFar, vDepth);
          gl_FragColor = vec4(mix(vColor, uFogColor, fog * 0.85), a * (1.0 - fog * 0.7));
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    this.points = new THREE.Points(g, mat);
    this.points.frustumCulled = false;
    this.geo = g;
    this.mat = mat;
  }

  burst(x, y, z, opts = {}) {
    const { n = 14, speed = 3.2, spread = 0.75, up = 1.0, size = 0.3, life = 0.9, color = 0xffffff, jitter = 0.25 } = opts;
    const c = new THREE.Color(color);
    for (let k = 0; k < n; k++) {
      const i = this.i;
      this.i = (this.i + 1) % this.cap;
      const a = Math.random() * Math.PI * 2;
      const r = Math.pow(Math.random(), 0.6);
      const i3 = i * 3;
      this.pos[i3] = x + (Math.random() - 0.5) * jitter;
      this.pos[i3 + 1] = y + Math.random() * 0.08;
      this.pos[i3 + 2] = z + (Math.random() - 0.5) * jitter;
      const sp = speed * (0.45 + Math.random() * 0.9);
      this.vel[i3] = Math.cos(a) * r * sp * spread;
      this.vel[i3 + 1] = sp * up * (0.5 + Math.random());
      this.vel[i3 + 2] = Math.sin(a) * r * sp * spread;
      const lf = life * (0.6 + Math.random() * 0.8);
      this.life[i] = lf;
      this.maxLife[i] = lf;
      this.size[i] = size * (0.5 + Math.random());
      this.drag[i] = 1.1 + Math.random() * 1.3;
      const tint = 0.82 + Math.random() * 0.3;
      this.col[i3] = c.r * tint;
      this.col[i3 + 1] = c.g * tint;
      this.col[i3 + 2] = c.b * tint;
    }
  }

  /** throw a fan of droplets in a direction (a breach or a slapping tail) */
  throw(x, y, z, dir, opts = {}) {
    const { n = 18, speed = 4.2, size = 0.28, life = 0.85, cone = 0.55, color = 0xffffff } = opts;
    const c = new THREE.Color(color);
    const d = new THREE.Vector3(dir[0], dir[1], dir[2]).normalize();
    for (let k = 0; k < n; k++) {
      const i = this.i;
      this.i = (this.i + 1) % this.cap;
      const i3 = i * 3;
      this.pos[i3] = x;
      this.pos[i3 + 1] = y;
      this.pos[i3 + 2] = z;
      const v = d.clone().multiplyScalar(speed * (0.5 + Math.random() * 0.8));
      v.x += (Math.random() - 0.5) * speed * cone;
      v.y += Math.random() * speed * 0.45;
      v.z += (Math.random() - 0.5) * speed * cone;
      this.vel[i3] = v.x;
      this.vel[i3 + 1] = v.y;
      this.vel[i3 + 2] = v.z;
      const lf = life * (0.6 + Math.random() * 0.8);
      this.life[i] = lf;
      this.maxLife[i] = lf;
      this.size[i] = size * (0.5 + Math.random());
      this.drag[i] = 0.9 + Math.random();
      const tint = 0.8 + Math.random() * 0.35;
      this.col[i3] = c.r * tint;
      this.col[i3 + 1] = c.g * tint;
      this.col[i3 + 2] = c.b * tint;
    }
  }

  update(dt, waterY) {
    const { pos, vel, life, maxLife, alpha, drag } = this;
    for (let i = 0; i < this.cap; i++) {
      if (life[i] <= 0) {
        if (alpha[i] !== 0) alpha[i] = 0;
        continue;
      }
      life[i] -= dt;
      const i3 = i * 3;
      const dk = Math.max(0, 1 - drag[i] * dt);
      vel[i3] *= dk;
      vel[i3 + 2] *= dk;
      vel[i3 + 1] -= 9.2 * dt;
      vel[i3 + 1] *= 1 - 0.25 * dt;
      pos[i3] += vel[i3] * dt;
      pos[i3 + 1] += vel[i3 + 1] * dt;
      pos[i3 + 2] += vel[i3 + 2] * dt;
      if (pos[i3 + 1] < waterY(pos[i3], pos[i3 + 2])) {
        // hitting the surface: splash out the rest as a low puff
        vel[i3 + 1] = Math.abs(vel[i3 + 1]) * 0.22;
        pos[i3 + 1] = waterY(pos[i3], pos[i3 + 2]) + 0.02;
        life[i] = Math.min(life[i], 0.3);
      }
      const t = clamp(life[i] / maxLife[i], 0, 1);
      alpha[i] = t * t * 0.95;
      this.size[i] *= 1 + 0.5 * dt;
    }
    this.geo.attributes.position.needsUpdate = true;
    this.geo.attributes.aAlpha.needsUpdate = true;
    this.geo.attributes.aSize.needsUpdate = true;
    this.geo.attributes.aColor.needsUpdate = true;
  }
}

/** pool of expanding surface rings used for wakes and landing slaps */
class RingPool {
  constructor(n, texture) {
    this.pool = [];
    this.geo = new THREE.PlaneGeometry(1, 1);
    for (let i = 0; i < n; i++) {
      const m = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        opacity: 0,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        color: new THREE.Color(0xdff2f6),
      });
      const mesh = new THREE.Mesh(this.geo, m);
      mesh.rotation.x = -Math.PI / 2;
      mesh.visible = false;
      this.pool.push({ mesh, life: 0, max: 1, r0: 0.4, r1: 3 });
    }
    this.i = 0;
    this.group = new THREE.Group();
    this.pool.forEach((p) => this.group.add(p.mesh));
  }
  spawn(x, y, z, r1 = 3, life = 1.5) {
    const p = this.pool[this.i];
    this.i = (this.i + 1) % this.pool.length;
    p.life = p.max = life;
    p.r1 = r1;
    p.mesh.position.set(x, y + 0.04, z);
    p.mesh.visible = true;
  }
  update(dt, waterY) {
    for (const p of this.pool) {
      if (p.life <= 0) continue;
      p.life -= dt;
      const t = 1 - clamp(p.life / p.max, 0, 1);
      const r = lerp(p.r0, p.r1, Math.pow(t, 0.62));
      p.mesh.scale.set(r, r, 1);
      p.mesh.position.y = waterY(p.mesh.position.x, p.mesh.position.z) + 0.05;
      p.mesh.material.opacity = 0.55 * Math.pow(1 - t, 1.5);
      if (p.life <= 0) p.mesh.visible = false;
    }
  }
}

/* ---------------------------------------------------------------- models */

function push(list, geo, matrix, color) {
  list.push({ geo, matrix, color });
}

function gullModel(mat) {
  const g = new THREE.Group();
  const white = 0xf3f2ec;
  const grey = 0xb8bcc2;
  const dark = 0x3d4249;
  const beak = 0xe8a63c;

  const body = [];
  const torso = new THREE.SphereGeometry(0.13, 9, 7);
  torso.scale(1.05, 0.85, 1.9);
  push(body, torso, M.place(0, 0, 0), white);
  push(body, new THREE.SphereGeometry(0.075, 8, 6), M.place(0, 0.045, 0.26), white);
  const b = new THREE.ConeGeometry(0.026, 0.13, 5);
  push(body, b, M.place(0, 0.04, 0.375, Math.PI / 2), beak);
  push(body, new THREE.SphereGeometry(0.012, 5, 4), M.place(0.055, 0.07, 0.3), dark);
  push(body, new THREE.SphereGeometry(0.012, 5, 4), M.place(-0.055, 0.07, 0.3), dark);
  // tail
  const tail = new THREE.PlaneGeometry(0.16, 0.2);
  push(body, tail, M.place(0, 0.005, -0.3, -Math.PI / 2 + 0.15), grey);
  const bodyMesh = new THREE.Mesh(mergeGeoms(body), mat);
  bodyMesh.castShadow = true;
  g.add(bodyMesh);

  // wings hinged at the shoulders
  const wings = [];
  for (const s of [-1, 1]) {
    const shape = new THREE.Shape();
    shape.moveTo(0, 0);
    shape.lineTo(0.1 * s, 0.02);
    shape.quadraticCurveTo(0.36 * s, 0.1, 0.46 * s, 0.03);
    shape.lineTo(0.44 * s, -0.05);
    shape.quadraticCurveTo(0.3 * s, -0.06, 0.02 * s, -0.05);
    shape.closePath();
    const wg = new THREE.ShapeGeometry(shape, 6);
    const pivot = new THREE.Group();
    pivot.position.set(s * 0.05, 0.03, 0.02);
    const wm = new THREE.Mesh(mergeGeoms([{ geo: wg, matrix: null, color: s > 0 ? grey : grey }]), mat);
    // dark tips
    const tip = new THREE.PlaneGeometry(0.12, 0.09);
    const tipM = new THREE.Mesh(mergeGeoms([{ geo: tip, matrix: M.place(0.4 * s, 0.0, 0), color: dark }]), mat);
    wm.castShadow = true;
    pivot.add(wm, tipM);
    g.add(pivot);
    wings.push(pivot);
  }
  g.userData.wings = wings;
  return g;
}

/**
 * Dolphin pointing along +Z, up +Y.  Body is a lofted section; the melon,
 * rostrum, dorsal, flukes and flippers are added on top.
 */
function dolphinModel(mat, len = 2.3, girth = 0.44) {
  const NU = 34;
  const NV = 16;
  const pos = [];
  const col = [];
  const index = [];
  const back = new THREE.Color(0x4a5f70);
  const belly = new THREE.Color(0xd9dfe0);
  const patch = new THREE.Color(0x93a6ae);

  const prof = (u) => {
    // u: 0 = tail tip, 1 = snout
    const w = Math.pow(Math.sin(Math.PI * Math.pow(clamp(u, 0.02, 1), 0.72)), 0.72);
    const rz = girth * 0.5 * Math.max(w, 0.035) * (1 + 0.18 * smoothstep(0.62, 0.95, u));
    const ry = girth * 0.46 * Math.max(w, 0.03) * (1 + 0.22 * smoothstep(0.55, 0.9, u));
    return [rz, ry];
  };
  const spine = (u) => -0.1 * Math.sin(u * Math.PI) + 0.06 * smoothstep(0.7, 1.0, u) - 0.16 * smoothstep(0.12, 0.0, u);

  for (let iu = 0; iu <= NU; iu++) {
    const u = iu / NU;
    const z = (u - 0.5) * len;
    const [rz, ry] = prof(u);
    const y0 = spine(u);
    for (let iv = 0; iv <= NV; iv++) {
      const t = (iv / NV) * Math.PI * 2;
      const sy = Math.sin(t);
      const sz = Math.cos(t);
      pos.push(z, y0 + sy * ry, sz * rz);
      const h = clamp((sy * ry + ry * 0.35) / (ry * 1.9), 0, 1);
      const c = belly.clone().lerp(back, smoothstep(0.3, 0.72, h));
      if (u > 0.5 && u < 0.82 && h > 0.45 && h < 0.72) c.lerp(patch, 0.5);
      col.push(c.r, c.g, c.b);
    }
  }
  for (let iu = 0; iu < NU; iu++) {
    for (let iv = 0; iv < NV; iv++) {
      const a = iu * (NV + 1) + iv;
      const bb = a + NV + 1;
      index.push(a, bb, a + 1, a + 1, bb, bb + 1);
    }
  }
  const body = new THREE.BufferGeometry();
  body.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  body.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  body.setIndex(index);
  body.computeVertexNormals();

  const parts = [{ geo: body }];

  // Fins are flat outlines given straight in dolphin space (z = body, x = across,
  // y = up), which keeps them readable and avoids stacked compound rotations.
  const flatFin = (pts) => {
    const p = [];
    for (let i = 1; i < pts.length - 1; i++) p.push(...pts[0], ...pts[i], ...pts[i + 1]);
    const g2 = new THREE.BufferGeometry();
    g2.setAttribute('position', new THREE.Float32BufferAttribute(p, 3));
    g2.computeVertexNormals();
    return g2;
  };
  const k = girth / 0.44;

  // dorsal fin, hooked aft
  parts.push({
    geo: flatFin([
      [0, 0.05 * k, len * 0.13],
      [0, 0.2 * k, len * 0.05],
      [0, 0.26 * k, -len * 0.03],
      [0, 0.12 * k, -len * 0.05],
      [0, 0.03 * k, -len * 0.11],
    ]),
    shade: [0x4f647a, 0x5c7286],
  });

  // tail flukes, one per side, with the notch
  for (const s of [-1, 1]) {
    const zt = -len * 0.4;
    parts.push({
      geo: flatFin([
        [s * 0.02, spine(0) + 0.01, zt],
        [s * 0.17, spine(0) - 0.01, zt - len * 0.06],
        [s * 0.35, spine(0) - 0.03, zt - len * 0.13],
        [s * 0.15, spine(0) - 0.04, zt - len * 0.1],
        [s * 0.04, spine(0) - 0.04, zt - len * 0.04],
      ]),
      shade: [0x44586a, 0x9fb0b6],
    });
  }

  // pectoral flippers
  for (const s of [-1, 1]) {
    parts.push({
      geo: flatFin([
        [s * girth * 0.24, 0, len * 0.2],
        [s * girth * 0.6, -girth * 0.14, len * 0.13],
        [s * girth * 0.76, -girth * 0.19, len * 0.02],
        [s * girth * 0.4, -girth * 0.1, len * 0.07],
        [s * girth * 0.22, -girth * 0.02, len * 0.11],
      ]),
      shade: [0x495d6f, 0xbcc8cc],
    });
  }

  const prepared = parts.map((p) => {
    const g2 = p.geo.clone();
    if (p.matrix) g2.applyMatrix4(p.matrix);
    g2.computeVertexNormals();
    if (!g2.getAttribute('color')) {
      const pa = g2.getAttribute('position');
      const n = pa.count;
      const c = new Float32Array(n * 3);
      const top = new THREE.Color(p.shade ? p.shade[0] : 0x53697c);
      const bot = new THREE.Color(p.shade ? p.shade[1] : 0xcfd6d8);
      const cc = new THREE.Color();
      for (let i = 0; i < n; i++) {
        cc.copy(bot).lerp(top, clamp(pa.getY(i) * 2.6 + 0.35, 0, 1));
        c[i * 3] = cc.r;
        c[i * 3 + 1] = cc.g;
        c[i * 3 + 2] = cc.b;
      }
      g2.setAttribute('color', new THREE.BufferAttribute(c, 3));
    }
    return { geo: g2, matrix: null };
  });
  const mesh = new THREE.Mesh(mergeGeoms(prepared), mat);
  mesh.castShadow = true;
  const g = new THREE.Group();
  g.add(mesh);
  // eyes
  const eyeMat = new THREE.MeshBasicMaterial({ color: 0x14181c });
  for (const s of [-1, 1]) {
    const e = new THREE.Mesh(new THREE.SphereGeometry(0.022, 6, 5), eyeMat);
    e.position.set(s * girth * 0.42, 0.05, len * 0.33);
    g.add(e);
  }
  return g;
}

/* ------------------------------------------------------------ gull flocks */

function createGulls(mat) {
  const group = new THREE.Group();
  const rnd = mulberry32(1971);
  const birds = [];
  for (let i = 0; i < 7; i++) {
    const m = gullModel(mat);
    const s = 0.86 + rnd() * 0.4;
    m.scale.setScalar(s);
    group.add(m);
    birds.push({
      obj: m,
      r: 11 + rnd() * 9,
      a: rnd() * Math.PI * 2,
      w: (0.11 + rnd() * 0.1) * (rnd() > 0.5 ? 1 : -1),
      y: 6.5 + rnd() * 5.5,
      bob: rnd() * 6.28,
      flapRate: 5.4 + rnd() * 2.6,
      glide: rnd() * 6,
      perch: i >= 5,
      perchSpot: i,
      bank: 0,
    });
  }
  // perched birds on the jetty head and a rock
  const perchSpots = [
    [PLACES.jettyHead.x + 1.05, PLACES.jettyHead.z + 1.8],
    [1.9, -3.4],
  ];
  for (const b of birds) {
    if (!b.perch) continue;
    const spot = perchSpots[b.perchSpot % perchSpots.length];
    b.x = spot[0];
    b.z = spot[1];
    const y = Math.max(ground(b.x, b.z), 0.2);
    b.obj.position.set(b.x, y + 0.16, b.z);
    b.a = rnd() * 6.28;
    b.obj.rotation.y = b.a;
  }
  return {
    group,
    birds,
    update(t, dt) {
      for (const b of birds) {
        if (b.perch) {
          b.obj.position.y += Math.sin(t * 1.7 + b.bob) * 0.0006;
          b.obj.rotation.y = b.a + Math.sin(t * 0.5 + b.bob) * 0.25;
          const w = 0.05 + 0.05 * Math.sin(t * 0.9 + b.bob);
          b.obj.userData.wings[0].rotation.z = w;
          b.obj.userData.wings[1].rotation.z = -w;
          continue;
        }
        b.a += b.w * dt;
        const wob = Math.sin(t * 0.6 + b.bob);
        const r = b.r + wob * 1.4;
        const x = Math.cos(b.a) * r;
        const z = Math.sin(b.a) * r;
        const y = b.y + Math.sin(t * 0.45 + b.bob) * 1.1 + wob * 0.4;
        b.obj.position.set(x, y, z);
        // face along the orbit, bank into the turn
        const fx = -Math.sin(b.a) * Math.sign(b.w);
        const fz = Math.cos(b.a) * Math.sign(b.w);
        b.obj.rotation.set(0, Math.atan2(fx, fz), -0.32 * Math.sign(b.w) * (0.6 + 0.4 * wob), 'YXZ');
        // flap, with resting stretches of glide
        const cyc = t * 0.35 + b.glide;
        const gliding = Math.sin(cyc) > 0.55;
        const amp = gliding ? 0.06 : 0.62;
        const f = Math.sin(t * b.flapRate + b.bob) * amp;
        b.obj.userData.wings[0].rotation.z = f;
        b.obj.userData.wings[1].rotation.z = -f;
        b.obj.userData.wings[0].rotation.y = gliding ? 0.2 : 0;
        b.obj.userData.wings[1].rotation.y = gliding ? -0.2 : 0;
      }
    },
  };
}

/* -------------------------------------------------------------- dolphins */

const _eye = new THREE.Vector3();
const _ctr = new THREE.Vector3();
const _up = new THREE.Vector3(0, 1, 0);

const HAZARDS = [
  { x: PLACES.stack.x, z: PLACES.stack.z, r: 4.2 },
  { x: PLACES.arch.x, z: PLACES.arch.z, r: 3.6 },
  { x: PLACES.lighthouse.x, z: PLACES.lighthouse.z, r: 8.5 },
  ...PLACES.boats.map((b) => ({ x: b.x, z: b.z, r: 5.0 })),
  { x: PLACES.jettyHead.x, z: PLACES.jettyHead.z, r: 4.6 },
  { x: 9.6, z: 4.6, r: 4.0 }, // the reef teeth below the mouth
  { x: 5.5, z: 1.5, r: 7.6 }, // the harbour itself: calm water, boats, jetty
  { x: 11.6, z: 3.8, r: 5.2 }, // and the entrance channel up to the mouth
];

function createDolphins(mat, sea, sampler, spray, rings) {
  const group = new THREE.Group();
  const rnd = mulberry32(4242);
  const N = 4;
  const dodos = [];
  const m4 = new THREE.Matrix4();

  for (let i = 0; i < N; i++) {
    const scale = 0.86 + rnd() * 0.42;
    const obj = dolphinModel(mat, 2.3 * scale, 0.44 * scale);
    group.add(obj);
    const a0 = (i / N) * Math.PI * 2 + rnd() * 0.8;
    const r0 = 13.5 + rnd() * 5.5;
    dodos.push({
      obj,
      scale,
      x: Math.cos(a0) * r0,
      z: Math.sin(a0) * r0,
      y: 0,
      heading: a0 + Math.PI / 2,
      speed: 4.4 + rnd() * 1.6,
      r: r0,
      state: 'cruise',
      timer: 1.5 + rnd() * 6,
      phase: 0,
      pitch: 0,
      breath: 0,
      trail: 0,
      leapCooldown: 4 + rnd() * 8,
      ballistic: null,
      turnBias: rnd() > 0.5 ? 1 : -1,
    });
  }

  const steer = (d, dt) => {
    // desired motion: along the deep ring, away from hazards
    const dist = Math.hypot(d.x, d.z);
    let tx = -Math.sin(d.heading);
    let tz = Math.cos(d.heading);
    let hx = 0;
    let hz = 0;
    for (const h of HAZARDS) {
      const dx = d.x - h.x;
      const dz = d.z - h.z;
      const dd = Math.hypot(dx, dz);
      const near = h.r + 2.5;
      if (dd < near && dd > 0.001) {
        const k = (1 - dd / near) * 3.4;
        hx += (dx / dd) * k;
        hz += (dz / dd) * k;
      }
    }
    // stay in the ring of open water
    const wantR = 15.5 + 2.5 * Math.sin(d.heading * 2 + d.leapCooldown);
    const radial = (wantR - dist) * 0.55;
    const rx = (d.x / (dist || 1)) * radial;
    const rz = (d.z / (dist || 1)) * radial;
    tx += hx * 1.2 + rx * 0.9;
    tz += hz * 1.2 + rz * 0.9;
    const l = Math.hypot(tx, tz) || 1;
    const want = Math.atan2(tx / l, tz / l);
    let diff = want - d.heading;
    while (diff > Math.PI) diff -= Math.PI * 2;
    while (diff < -Math.PI) diff += Math.PI * 2;
    const maxTurn = 0.85 * dt;
    d.heading += clamp(diff, -maxTurn, maxTurn);
    const sp = d.speed * (d.state === 'leap' ? 1.35 : d.state === 'cruise' ? 1 : 1.1);
    d.x += Math.sin(d.heading) * sp * dt;
    d.z += Math.cos(d.heading) * sp * dt;

    // hard no-entry: a pod member never crosses into shallow rock, the moorings
    // or the harbour — it rides along the edge of the exclusion instead
    for (const h of HAZARDS) {
      const dx = d.x - h.x;
      const dz = d.z - h.z;
      const dd = Math.hypot(dx, dz);
      if (dd < h.r) {
        const inv = 1 / (dd || 0.001);
        d.x = h.x + dx * inv * h.r;
        d.z = h.z + dz * inv * h.r;
        d.heading = Math.atan2(dx * inv, dz * inv);
      }
    }
  };

  const surfaceY = (x, z, t) => sampler.sample(x, z, t).y;

  return {
    group,
    pod: dodos,
    update(t, dt) {
      for (const d of dodos) {
        const s = sampler.sample(d.x, d.z, t);
        const swl = s.y;
        steer(d, dt);
        d.timer -= dt;
        d.leapCooldown -= dt;
        d.trail -= dt;

        switch (d.state) {
          case 'cruise': {
            d.y = lerp(d.y, swl - 0.42 * d.scale, 1 - Math.exp(-3 * dt));
            d.pitch = lerp(d.pitch, 0.06, 2 * dt);
            if (d.trail <= 0) {
              d.trail = 0.16;
              spray.burst(d.x, swl, d.z, { n: 2, speed: 0.9, size: 0.14, life: 0.5, jitter: 0.5, up: 0.5 });
            }
            if (d.timer <= 0) {
              const roll = Math.random();
              if (d.leapCooldown <= 0 && roll < 0.5) {
                d.state = 'launch';
                d.timer = 0;
                d.phase = 0;
              } else {
                d.state = 'breathe';
                d.timer = 1.1 + Math.random() * 0.9;
              }
            }
            break;
          }
          case 'breathe': {
            // arch the back out of the water, blow, then slide back under
            const k = clamp(1 - Math.abs(d.timer - 1.0) / 1.0, 0, 1);
            d.y = swl + (0.34 * d.scale) * k - 0.12;
            d.pitch = lerp(d.pitch, 0.18 * k, 4 * dt);
            if (d.breath <= 0 && k > 0.7) {
              d.breath = 0.9;
              spray.burst(d.x + Math.sin(d.heading) * 0.6 * d.scale, swl + 0.3, d.z + Math.cos(d.heading) * 0.6 * d.scale, {
                n: 16,
                speed: 2.1,
                spread: 0.35,
                up: 1.7,
                size: 0.18,
                life: 0.7,
                jitter: 0.2,
              });
              rings.spawn(d.x, swl, d.z, 2.6, 1.4);
            }
            d.breath -= dt;
            if (d.timer <= 0) {
              d.state = 'cruise';
              d.timer = 2.5 + Math.random() * 7;
            }
            break;
          }
          case 'launch': {
            // jump out of the surface on a ballistic arc
            const vy = 5.6 + Math.random() * 2.4;
            const fwd = d.speed * 1.35;
            d.ballistic = {
              t: 0,
              y0: swl,
              vy,
              x0: d.x,
              z0: d.z,
              vx: Math.sin(d.heading) * fwd,
              vz: Math.cos(d.heading) * fwd,
              spin: (Math.random() > 0.65 ? 2.2 : 0.9) * (Math.random() > 0.5 ? 1 : -1),
            };
            d.state = 'leap';
            d.phase = 0;
            spray.throw(d.x, swl + 0.1, d.z, [Math.sin(d.heading), 0.6, Math.cos(d.heading)], {
              n: 34,
              speed: 4.6,
              size: 0.3,
              life: 0.9,
            });
            rings.spawn(d.x, swl, d.z, 4.2, 1.8);
            d.leapCooldown = 12 + Math.random() * 16;
            break;
          }
          case 'leap': {
            const b = d.ballistic;
            b.t += dt;
            d.x = b.x0 + b.vx * b.t;
            d.z = b.z0 + b.vz * b.t;
            d.y = b.y0 + b.vy * b.t - 4.9 * b.t * b.t;
            const vyNow = b.vy - 9.8 * b.t;
            const horiz = Math.hypot(b.vx, b.vz);
            d.pitch = Math.atan2(vyNow, horiz);
            const s2 = sampler.sample(d.x, d.z, t);
            if (d.y <= s2.y && b.t > 0.25) {
              // re-entry
              d.y = s2.y;
              spray.throw(d.x, s2.y, d.z, [Math.sin(d.heading), 0.25, Math.cos(d.heading)], {
                n: 42,
                speed: 4.0,
                size: 0.32,
                life: 1.0,
                cone: 0.9,
              });
              rings.spawn(d.x, s2.y, d.z, 5.0, 2.0);
              d.state = 'cruise';
              d.timer = 2 + Math.random() * 5;
              d.ballistic = null;
            } else if (b.t > 0.12 && b.t < 1.9 && Math.random() < 0.5) {
              spray.burst(d.x, d.y - 0.1 * d.scale, d.z, { n: 1, speed: 0.7, size: 0.16, life: 0.55, up: 0.2, jitter: 0.9 });
            }
            break;
          }
          default:
            d.state = 'cruise';
        }

        // pose: yaw from the heading, pitch from the arc, roll from the bank
        const roll = clamp(Math.sin(t * 0.7 + d.leapCooldown) * 0.18, -0.3, 0.3);
        const pitch = clamp(d.pitch, -1.05, 1.05);
        const py = d.y - 0.15 * d.scale;
        const cp = Math.cos(pitch);
        _ctr.set(d.x, py, d.z);
        _eye.set(d.x + Math.sin(d.heading) * cp, py + Math.sin(pitch), d.z + Math.cos(d.heading) * cp);
        m4.lookAt(_eye, _ctr, _up);
        d.obj.quaternion.setFromRotationMatrix(m4);
        d.obj.rotateZ(roll);
        d.obj.position.copy(_ctr);
      }
    },
  };
}

/* ---------------------------------------------------------------- combine */

export function createCreatures({ sampler, sprayTexture, foamTexture }) {
  const group = new THREE.Group();
  const birdMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.82, side: THREE.DoubleSide });
  const dolphinMat = new THREE.MeshStandardMaterial({
    vertexColors: true,
    roughness: 0.46,
    metalness: 0.02,
    side: THREE.DoubleSide,
  });

  const gulls = createGulls(birdMat);
  const spray = new Spray(900, sprayTexture);
  const rings = new RingPool(14, foamTexture);
  const dolphins = createDolphins(dolphinMat, null, sampler, spray, rings);

  group.add(gulls.group, dolphins.group, rings.group, spray.points);

  return {
    group,
    gulls,
    dolphins,
    spray,
    rings,
    setPixelRatio(pr) {
      spray.mat.uniforms.uPR.value = pr;
    },
    update(t, dt, waterY) {
      gulls.update(t, dt);
      dolphins.update(t, dt);
      const wy = waterY || ((x, z) => sampler.sample(x, z, t).y);
      spray.update(dt, wy);
      rings.update(dt, wy);
    },
  };
}
