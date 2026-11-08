// A wild pod of bottlenose dolphins working the reef gap: bodies under the
// surface, arcs at the surface, a wake that lingers behind.
import * as THREE from 'three';
import { mulberry32, clamp } from './noise.js';
import { pieceSDF, islandSDF, capeSDF } from './geo.js';
import { sampleOcean } from './waves.js';

const STATIONS = [
  //  x      half-width   half-height    (metres, body length 2.6 m)
  [-1.35, 0.02, 0.02],
  [-1.15, 0.09, 0.10],
  [-0.85, 0.16, 0.185],
  [-0.45, 0.215, 0.245],
  [-0.05, 0.235, 0.255],
  [0.35, 0.222, 0.235],
  [0.72, 0.175, 0.185],
  [1.02, 0.115, 0.125],
  [1.25, 0.062, 0.075],
  [1.42, 0.035, 0.05],
];

function dolphinGeometry() {
  const rings = 14;
  const radial = 12;
  const pos = [];
  const idx = [];
  const uv = [];
  for (let i = 0; i < rings; i++) {
    const t = i / (rings - 1);
    const si = t * (STATIONS.length - 1);
    const i0 = Math.floor(si);
    const i1 = Math.min(i0 + 1, STATIONS.length - 1);
    const f = si - i0;
    const lerp3 = (k) => STATIONS[i0][k] + (STATIONS[i1][k] - STATIONS[i0][k]) * f;
    const x = lerp3(0);
    const hw = lerp3(1);
    const hh = lerp3(2);
    // belly flatter than the back, snout flattens the head
    for (let j = 0; j < radial; j++) {
      const a = (j / radial) * Math.PI * 2;
      const cy = Math.sin(a);
      const y = cy >= 0 ? cy * hh : cy * hh * 0.82;
      pos.push(x, y, Math.cos(a) * hw);
      uv.push(t, j / radial);
    }
  }
  for (let i = 0; i < rings - 1; i++) {
    for (let j = 0; j < radial; j++) {
      const a = i * radial + j;
      const b = i * radial + ((j + 1) % radial);
      const c = (i + 1) * radial + j;
      const d = (i + 1) * radial + ((j + 1) % radial);
      idx.push(a, c, b, b, c, d);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  g.computeVertexNormals();

  // dorsal fin, fluke, flippers
  const parts = [g];
  const finShape = new THREE.Shape();
  finShape.moveTo(-0.16, 0);
  finShape.quadraticCurveTo(-0.02, 0.02, 0.05, 0.26);
  finShape.quadraticCurveTo(0.13, 0.1, 0.24, -0.02);
  const fin = new THREE.ShapeGeometry(finShape, 6);
  fin.rotateY(Math.PI / 2);
  fin.translate(0.05, 0.2, 0);
  parts.push(fin);
  const flukeShape = new THREE.Shape();
  flukeShape.moveTo(0, 0);
  flukeShape.quadraticCurveTo(0.16, 0.06, 0.3, -0.02);
  flukeShape.quadraticCurveTo(0.16, -0.05, 0.0, -0.04);
  for (const s of [1, -1]) {
    const fl = new THREE.ShapeGeometry(flukeShape, 6);
    fl.rotateX(Math.PI / 2);
    fl.scale(1, 1, s);
    fl.rotateZ(0.32 * s);
    fl.translate(1.36, 0.02, 0);
    parts.push(fl);
  }
  for (const s of [1, -1]) {
    const shp = new THREE.Shape();
    shp.moveTo(0, 0);
    shp.quadraticCurveTo(-0.1, -0.05, -0.34, -0.16);
    shp.quadraticCurveTo(-0.12, 0.06, 0.02, 0.05);
    const fp = new THREE.ShapeGeometry(shp, 6);
    fp.rotateX(Math.PI / 2 - 0.5 * s);
    fp.rotateZ(-0.4);
    fp.translate(-0.28, -0.09, s * 0.17);
    parts.push(fp);
  }
  const merged = mergeParts(parts);
  merged.computeVertexNormals();
  return merged;
}

function mergeParts(parts) {
  const nonIndexed = parts.map((p) => (p.index ? p.toNonIndexed() : p));
  let total = 0;
  nonIndexed.forEach((p) => (total += p.attributes.position.count));
  const pos = new Float32Array(total * 3);
  let off = 0;
  for (const p of nonIndexed) {
    pos.set(p.attributes.position.array, off * 3);
    off += p.attributes.position.count;
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  return g;
}

/** closed polyline in open water, walked until every node is deep enough */
function podPath(world) {
  const want = [
    [-24, 40], [-44, 30], [-56, 14], [-50, -4], [-32, -12], [-12, -6],
    [4, 8], [12, 26], [-4, 42],
  ];
  const pts = [];
  const rnd = mulberry32(5);
  for (const [x0, z0] of want) {
    let bx = x0;
    let bz = z0;
    let found = false;
    for (let k = 0; k < 220 && !found; k++) {
      const a = rnd() * 6.283;
      const r = k * 0.42;
      const x = x0 + Math.cos(a) * r;
      const z = z0 + Math.sin(a) * r;
      const y = world.height(x, z);
      if (y < -3.4 && y > -22 && pieceSDF(x, z) < -7 && islandSDF(x, z) > 7 && capeSDF(x, z) > 7) {
        bx = x;
        bz = z;
        found = true;
      }
    }
    pts.push(new THREE.Vector3(bx, 0, bz));
  }
  const c = new THREE.CatmullRomCurve3(pts, true, 'catmullrom', 0.5);
  return c;
}

export function buildFauna(world, tex) {
  const group = new THREE.Group();
  group.name = 'fauna';
  const rnd = mulberry32(90210);

  const bodyMat = new THREE.MeshStandardMaterial({
    color: 0x6d7d88,
    roughness: 0.42,
    metalness: 0.05,
  });
  const geo = dolphinGeometry();

  const path = podPath(world);
  const nD = 4;
  const pod = [];
  for (let i = 0; i < nD; i++) {
    const m = new THREE.Mesh(geo, bodyMat);
    m.castShadow = false;
    m.receiveShadow = false;
    const s = 0.86 + rnd() * 0.5;
    m.scale.setScalar(s);
    group.add(m);
    pod.push({
      mesh: m,
      s,
      u: i / nD + rnd() * 0.02,
      speed: 0.020 + rnd() * 0.004,
      lane: (i - (nD - 1) / 2) * 1.5 + (rnd() - 0.5),
      surfPeriod: 4.4 + rnd() * 2.6,
      surfPhase: rnd() * 6.28,
      roll: rnd() * 6.28,
    });
  }
  const speedBase = 3.4; // metres / second along the path

  // ---- wake + splash sprite pools
  const wake = [];
  const wakePool = [];
  for (let i = 0; i < 130; i++) {
    const sp = new THREE.Sprite(new THREE.SpriteMaterial({
      map: tex.foam, transparent: true, opacity: 0, depthWrite: false, color: 0xf4fbfd,
    }));
    sp.visible = false;
    sp.renderOrder = 3;
    group.add(sp);
    wakePool.push(sp);
  }
  const spawnWake = (x, z, size, alpha, kind) => {
    const sp = wakePool.find((s) => !s.visible);
    if (!sp) return;
    sp.visible = true;
    sp.position.set(x, 0.06 + (kind ? 0.35 : 0), z);
    sp.scale.set(size, size * (kind ? 1 : 0.5), 1);
    sp.material.opacity = alpha;
    sp.material.rotation = rnd() * 3;
    wake.push({
      sp, life: 0, ttl: kind ? 1.5 : 2.6, size, growth: kind ? 2.4 : 1.5,
    });
  };

  const tmpA = new THREE.Vector3();
  const tmpB = new THREE.Vector3();
  const tan = new THREE.Vector3();
  const side = new THREE.Vector3();

  function update(t, dt) {
    for (const d of pod) {
      d.u = (d.u + d.speed * dt * 0.08) % 1;
      const u = d.u;
      path.getPointAt(u, tmpA);
      path.getPointAt((u + 0.006) % 1, tmpB);
      tan.subVectors(tmpB, tmpA);
      tan.y = 0;
      const L = Math.max(tan.length(), 1e-4);
      tan.divideScalar(L);
      side.set(-tan.z, 0, tan.x);
      const heading = Math.atan2(tan.z, tan.x);

      // surface arc: rise, break, sink
      const ph = ((t / d.surfPeriod) + d.surfPhase) % 1;
      const arc = Math.sin(ph * Math.PI * 2);
      const surfacing = arc > 0.35;
      const y = -0.55 * d.s + Math.max(arc, -0.2) * 0.62 * d.s;
      const px = tmpA.x + side.x * d.lane;
      const pz = tmpA.z + side.z * d.lane;
      const oc = sampleOcean(world, px, pz, t);
      d.mesh.position.set(px, y + oc.y * 0.6, pz);
      d.mesh.rotation.order = 'YXZ';
      d.mesh.rotation.set(
        -Math.cos(ph * Math.PI * 2) * 0.5 - 0.05,
        -heading,
        Math.sin(t * 2.2 + d.roll) * 0.14,
      );
      // pitch along the arc: nose up when rising
      d.mesh.rotation.x = -Math.cos(ph * Math.PI * 2) * 0.55;

      if (surfacing && ph < 0.32) {
        const env = Math.sin(ph / 0.32 * Math.PI);
        if (Math.random() < dt * 16 * env) {
          spawnWake(px + tan.x * 0.9 * d.s, pz + tan.z * 0.9 * d.s, 1.1 * d.s, 0.5 * env, 1);
        }
        if (Math.random() < dt * 6) {
          spawnWake(px - tan.x * 1.2 * d.s, pz - tan.z * 1.2 * d.s, 1.9 * d.s, 0.3, 0);
        }
      } else if (Math.random() < dt * 3.5) {
        spawnWake(px, pz, 1.4 * d.s, 0.14, 0);
      }
    }

    for (let i = wake.length - 1; i >= 0; i--) {
      const w = wake[i];
      w.life += dt;
      const k = w.life / w.ttl;
      if (k >= 1) {
        w.sp.visible = false;
        wake.splice(i, 1);
        continue;
      }
      const s = w.size * (1 + k * w.growth);
      w.sp.scale.set(s, s * 0.55, 1);
      w.sp.material.opacity = clamp((1 - k) * (1 - k) * 0.65, 0, 1);
      w.sp.position.y = 0.05;
    }
  }

  return { group, update, path };
}
