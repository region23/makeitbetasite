// Fallen limestone blocks, boulders and the reserve's open woodland: Pitsunda pine, juniper,
// pistachio, dry grass tufts, crevice wildflowers and underwater seagrass.
import * as THREE from 'three';
import { mergeGeometries, mergeVertices } from 'three/addons/utils/BufferGeometryUtils.js';
import { mulberry32, createNoise2D, smoothstep } from './noise.js';
import { SITES, HOUSES, HANGAR, RESTAURANT, ARM, PATHS, surfaceInfo, headInfo, outlineMargin, distToPolyline, pierPoint } from './world.js';
import { makeTerrainMaterial } from './shaders.js';

const rnd = mulberry32(4242);
const NZ = createNoise2D(mulberry32(77));
const R = (a, b) => a + (b - a) * rnd();

function blocked(x, z, pad = 0) {
  const T = SITES.tower, C = SITES.chapel, S = SITES.slab, V = SITES.service, M = SITES.mast;
  if (Math.hypot(x - T.x, z - T.z) < 9 + pad) return true;
  if (Math.hypot(x - C.x, z - C.z) < 4 + pad) return true;
  if (Math.hypot(x - S.x, z - S.z) < 3 + pad) return true;
  if (Math.hypot(x - V.x, z - V.z) < 6.5 + pad) return true;
  if (Math.hypot(x - M.x, z - M.z) < 2 + pad) return true;
  for (const h of HOUSES) if (Math.hypot(x - h.x, z - h.z) < Math.max(h.w, h.d) * 0.85 + pad) return true;
  if (Math.hypot((x - HANGAR.x) * 1.4, z - HANGAR.z) < 13 + pad) return true;
  if (distToPolyline(x, z, [pierPoint(-6), pierPoint(SITES.pier.len + 5)]) < 4 + pad) return true;
  if (Math.hypot(x - RESTAURANT.x, z - RESTAURANT.z) < 10 + pad) return true;
  if (x > -19 && x < 10 && Math.abs(z - SITES.bridge.z) < 3.5 + pad) return true;
  if (x > -26 && x < -3 && z > -14 && z < 24) return true;
  for (const p of PATHS) if (distToPolyline(x, z, p) < 1.7 + pad) return true;
  return false;
}

// ------------------------------------------------------------------ rock geometry
function rockGeometry(seed, slabby) {
  const r = mulberry32(seed);
  const n = createNoise2D(r);
  const g = new THREE.IcosahedronGeometry(1, 2);
  const pos = g.attributes.position;
  const planes = [];
  for (let i = 0; i < 5; i++) {
    const v = new THREE.Vector3(r() * 2 - 1, (r() * 2 - 1) * 0.6, r() * 2 - 1).normalize();
    planes.push([v, 0.5 + r() * 0.35]);
  }
  planes.push([new THREE.Vector3(0, 1, 0), slabby ? 0.42 : 0.62], [new THREE.Vector3(0, -1, 0), slabby ? 0.42 : 0.7]);
  const v = new THREE.Vector3();
  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i).normalize();
    const m = Math.max(Math.abs(v.x), Math.abs(v.y), Math.abs(v.z));
    v.lerp(v.clone().divideScalar(m).multiplyScalar(0.8), 0.55);
    for (const [pn, c] of planes) {
      const d = v.dot(pn) - c;
      if (d > 0) v.addScaledVector(pn, -d);
    }
    v.multiplyScalar(1 + 0.07 * n(v.x * 2.2 + v.y, v.z * 2.2 - v.y));
    pos.setXYZ(i, v.x, v.y, v.z);
  }
  g.deleteAttribute('uv');
  g.deleteAttribute('normal');
  const m = mergeVertices(g, 1e-4);
  m.computeVertexNormals();
  return m;
}

export function buildRocks(ctx) {
  const { field, scene, shared } = ctx;
  const mat = makeTerrainMaterial(1, shared);
  const variants = [rockGeometry(11, true), rockGeometry(23, false), rockGeometry(37, true), rockGeometry(51, false), rockGeometry(67, true)];
  const lists = variants.map(() => []);
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), s = new THREE.Vector3(), p = new THREE.Vector3();
  function add(x, z, size, sink, tilt = 0.45, flat = 0.65) {
    if (outlineMargin(x, z) < size * 1.2 + 0.5) return;
    if (blocked(x, z, size * 0.5)) return;
    const y = field.heightAt(x, z);
    p.set(x, y - size * sink, z);
    e.set(R(-tilt, tilt), R(0, Math.PI * 2), R(-tilt, tilt));
    q.setFromEuler(e);
    s.set(size * R(1.0, 1.6), size * R(flat, flat + 0.35), size * R(0.8, 1.2));
    m4.compose(p, q, s);
    lists[Math.floor(rnd() * variants.length)].push(m4.clone());
  }
  const H = SITES.head;
  // fallen blocks along the island's cliff foot and wave-cut ledges
  let headCount = 0;
  for (let i = 0; i < 9000 && headCount < 480; i++) {
    const x = R(H.x - 48, H.x + 40), z = R(H.z - 46, H.z + 44);
    const hi = headInfo(x, z);
    if (hi.d > -2.5 && hi.d < hi.ledge + 4 && rnd() < 0.15 + 0.85 * hi.w) {
      add(x, z, R(0.7, 1.6) + 2.0 * hi.w * rnd() * rnd(), R(0.2, 0.45)); headCount++;
    } else if (hi.d > -hi.cw && hi.d < -0.5 && hi.w > 0.45 && rnd() < 0.15) {
      add(x, z, R(1.2, 2.4), R(0.5, 0.65), 0.6); headCount++;
    }
  }
  // big blocks standing in the surf, a little offshore
  for (let i = 0; i < 400; i++) {
    const a = R(-2.6, 2.6) + Math.PI;
    const hi = headInfo(H.x + Math.cos(a) * 40, H.z + Math.sin(a) * 36);
    const rr = 36 + hi.ledge + R(-1, 5);
    const x = H.x + Math.cos(a) * rr, z = H.z + Math.sin(a) * rr * 0.9;
    const h2 = headInfo(x, z);
    if (h2.w > 0.5 && h2.d > h2.ledge - 1 && h2.d < h2.ledge + 6 && rnd() < 0.12) add(x, z, R(1.4, 2.6), 0.35, 0.5);
  }
  // boulder revetment along the causeway
  for (let i = 0; i < 520; i++) {
    const k = Math.floor(rnd() * (ARM.length - 1));
    const t = rnd();
    const ax = ARM[k][0], az = ARM[k][1], bx = ARM[k + 1][0], bz = ARM[k + 1][1];
    const dx = bx - ax, dz = bz - az, l = Math.hypot(dx, dz);
    const side = rnd() < 0.5 ? -1 : 1;
    const off = R(3.2, 6.2);
    const x = ax + dx * t + (-dz / l) * off * side, z = az + dz * t + (dx / l) * off * side;
    add(x, z, R(0.45, 1.25), 0.3, 0.7, 0.7);
  }
  // cape north shore, knob edge at the strait, tail spit
  for (let i = 0; i < 6000; i++) {
    const x = R(-20, 90), z = R(-150, 70);
    const si = surfaceInfo(field, x, z);
    if (si.ci.wN > 0.5 && si.ci.d > -5 && si.ci.d < 3 && rnd() < 0.08) add(x, z, R(0.8, 2.2), 0.35);
    else if (si.dKnob > -2 && si.dKnob < 2.5 && x < 8 && rnd() < 0.25) add(x, z, R(0.6, 1.4), 0.35, 0.6, 0.7);
    else if (si.dTail > -1 && si.dTail < 2.5 && rnd() < 0.03) add(x, z, R(0.4, 0.9), 0.35, 0.6, 0.6);
  }
  // rounded boulders on the clear shallow shelf of the sheltered beach
  for (let i = 0; i < 4000; i++) {
    const x = R(10, 140), z = R(66, 130);
    const h = field.heightAt(x, z);
    if (h < -0.7 && h > -6 && rnd() < 0.05) add(x, z, R(0.35, 1.1), 0.4, 0.8, 0.6);
  }
  variants.forEach((g, i) => {
    const list = lists[i];
    const im = new THREE.InstancedMesh(g, mat, list.length);
    list.forEach((m, k) => im.setMatrixAt(k, m));
    im.castShadow = true; im.receiveShadow = true;
    im.instanceMatrix.needsUpdate = true;
    im.computeBoundingSphere();
    scene.add(im);
  });
}

// ------------------------------------------------------------------ plant geometry (unit height, vertex colours)
function colorize(g, fn) {
  const pos = g.attributes.position;
  const col = new Float32Array(pos.count * 3);
  const c = new THREE.Color();
  for (let i = 0; i < pos.count; i++) { fn(c, pos.getX(i), pos.getY(i), pos.getZ(i)); col.set([c.r, c.g, c.b], i * 3); }
  g.setAttribute('color', new THREE.BufferAttribute(col, 3));
  return g;
}
function lump(r, x, y, z, sx, sy, sz, detail = 1) {
  const g = new THREE.IcosahedronGeometry(r, detail);
  const pos = g.attributes.position;
  const n = createNoise2D(mulberry32(Math.floor(x * 100 + y * 1000 + z * 10) + 5));
  for (let i = 0; i < pos.count; i++) {
    const vx = pos.getX(i), vy = pos.getY(i), vz = pos.getZ(i);
    const k = 1 + 0.22 * n(vx * 3 + vy, vz * 3 - vy);
    pos.setXYZ(i, vx * k * sx + x, vy * k * sy + y, vz * k * sz + z);
  }
  g.computeVertexNormals();
  return g;
}
const strip = (g) => { const o = g.index ? g.toNonIndexed() : g; o.deleteAttribute('uv'); return o; };

function pineGeometry() {
  const parts = [];
  const trunk = new THREE.CylinderGeometry(0.035, 0.07, 0.8, 6, 3);
  trunk.translate(0, 0.4, 0);
  const tp = trunk.attributes.position;
  for (let i = 0; i < tp.count; i++) { const y = tp.getY(i); tp.setX(i, tp.getX(i) + Math.sin(y * 3) * 0.04); }
  parts.push(colorize(strip(trunk), (c) => c.setRGB(0.36, 0.27, 0.2)));
  const crowns = [[0, 0.86, 0, 0.3], [0.17, 0.8, 0.07, 0.22], [-0.15, 0.82, -0.08, 0.22], [0.02, 0.92, -0.14, 0.2]];
  for (const [x, y, z, r] of crowns) {
    parts.push(colorize(strip(lump(r, x, y, z, 1.2, 0.5, 1.2)), (c, px, py) => c.setRGB(0.11 + (py - y) * 0.25, 0.2 + (py - y) * 0.35, 0.11)));
  }
  return mergeGeometries(parts);
}
function juniperGeometry() {
  const parts = [];
  parts.push(colorize(strip(lump(0.5, 0, 0.45, 0, 1.0, 0.85, 1.0)), (c, x, y) => c.setRGB(0.1 + y * 0.06, 0.17 + y * 0.08, 0.13 + y * 0.04)));
  parts.push(colorize(strip(lump(0.36, 0.32, 0.32, 0.12, 1, 0.8, 1)), (c, x, y) => c.setRGB(0.11, 0.18 + y * 0.06, 0.14)));
  parts.push(colorize(strip(lump(0.3, -0.28, 0.3, -0.18, 1, 0.9, 1)), (c, x, y) => c.setRGB(0.12, 0.19 + y * 0.05, 0.13)));
  return mergeGeometries(parts);
}
function pistachioGeometry() {
  const parts = [];
  const trunk = new THREE.CylinderGeometry(0.03, 0.05, 0.4, 5);
  trunk.translate(0, 0.2, 0);
  parts.push(colorize(strip(trunk), (c) => c.setRGB(0.33, 0.27, 0.2)));
  for (const [x, y, z, r] of [[0, 0.64, 0, 0.44], [0.3, 0.52, 0.1, 0.32], [-0.26, 0.55, -0.12, 0.32]]) {
    parts.push(colorize(strip(lump(r, x, y, z, 1.1, 0.8, 1.1)), (c, px, py) => c.setRGB(0.26 + py * 0.08, 0.31 + py * 0.08, 0.17)));
  }
  return mergeGeometries(parts);
}
function tuftGeometry() {
  const pos = [], col = [];
  const blades = 11;
  for (let i = 0; i < blades; i++) {
    const a = (i / blades) * Math.PI * 2 + rnd();
    const lean = R(0.15, 0.5), h = R(0.6, 1.0), w = 0.035;
    const tx = Math.cos(a) * lean * h, tz = Math.sin(a) * lean * h;
    const px = -Math.sin(a) * w, pz = Math.cos(a) * w;
    pos.push(px, 0, pz, -px, 0, -pz, tx, h, tz);
    const base = [0.55, 0.47, 0.28], tip = rnd() < 0.3 ? [0.62, 0.62, 0.36] : [0.92, 0.82, 0.56];
    col.push(...base, ...base, ...tip);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  g.computeVertexNormals();
  const nrm = g.attributes.normal;
  for (let i = 0; i < nrm.count; i++) nrm.setXYZ(i, nrm.getX(i) * 0.3, 1, nrm.getZ(i) * 0.3);
  return g;
}
function flowerGeometry() {
  const parts = [];
  for (const [x, z, h] of [[0, 0, 0.32], [0.1, 0.06, 0.26], [-0.08, 0.07, 0.22], [0.04, -0.1, 0.28]]) {
    const st = new THREE.CylinderGeometry(0.008, 0.01, h, 3); st.translate(x, h / 2, z);
    parts.push(colorize(strip(st), (c) => c.setRGB(0.35, 0.45, 0.22)));
    const hd = new THREE.IcosahedronGeometry(0.045, 0); hd.translate(x, h, z);
    parts.push(colorize(strip(hd), (c) => c.setRGB(1, 1, 1)));
  }
  return mergeGeometries(parts);
}
function seagrassGeometry() {
  const pos = [], col = [];
  for (let i = 0; i < 7; i++) {
    const a = rnd() * Math.PI * 2, r = R(0, 0.25);
    const bx = Math.cos(a) * r, bz = Math.sin(a) * r;
    const w = 0.04, h = R(0.6, 1.0);
    const segs = 4;
    for (let s = 0; s < segs; s++) {
      const y0 = (s / segs) * h, y1 = ((s + 1) / segs) * h;
      const o0 = Math.sin(s * 0.8) * 0.06, o1 = Math.sin((s + 1) * 0.8) * 0.06;
      pos.push(bx - w + o0, y0, bz, bx + w + o0, y0, bz, bx + w + o1, y1, bz);
      pos.push(bx - w + o0, y0, bz, bx + w + o1, y1, bz, bx - w + o1, y1, bz);
      for (let k = 0; k < 6; k++) col.push(0.12, 0.22 + 0.06 * s, 0.09);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  g.computeVertexNormals();
  return g;
}

function windMaterial(shared, freq, strength, extra = {}) {
  const mat = new THREE.MeshLambertMaterial({ vertexColors: true, ...extra });
  mat.onBeforeCompile = (sh) => {
    sh.uniforms.uTime = shared.uTime;
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nuniform float uTime;')
      .replace('#include <begin_vertex>', `#include <begin_vertex>
        #ifdef USE_INSTANCING
        mat3 wIm = mat3(instanceMatrix);
        vec3 ip = instanceMatrix[3].xyz;
        float sc = length(wIm[0]);
        float hgt = max(position.y, 0.0);
        float ph = uTime * ${freq.toFixed(3)} + ip.x * 0.21 + ip.z * 0.17;
        float gust = 0.65 + 0.35 * sin(uTime * 0.31 + ip.x * 0.013 - ip.z * 0.008);
        float sw = (sin(ph) + 0.45 * sin(ph * 2.3 + 1.7) + 0.6) * ${strength.toFixed(4)} * hgt * hgt * sc * gust;
        vec3 wd = vec3(sw, 0.0, sw * 0.55);
        transformed += (transpose(wIm) * wd) / (sc * sc);
        #endif`);
  };
  mat.customProgramCacheKey = () => 'wind' + freq + strength;
  return mat;
}

export function buildVegetation(ctx) {
  const { field, scene, shared } = ctx;
  const dummy = new THREE.Object3D();
  function scatter(geo, mat, count, tries, accept, opts = {}) {
    const mats = [], cols = [];
    const c = new THREE.Color();
    for (let i = 0; i < tries && mats.length < count; i++) {
      const x = R(opts.x0 ?? -200, opts.x1 ?? 200), z = R(opts.z0 ?? -160, opts.z1 ?? 160);
      if (outlineMargin(x, z) < 2.5) continue;
      const si = surfaceInfo(field, x, z);
      const r = accept(x, z, si);
      if (!r) continue;
      if (blocked(x, z, opts.pad ?? 0.5)) continue;
      dummy.position.set(x, si.h - (r.sink ?? 0.05), z);
      dummy.rotation.set(R(-0.08, 0.08) + (r.tiltX ?? 0), rnd() * Math.PI * 2, R(-0.08, 0.08));
      const sc = r.scale;
      dummy.scale.set(sc * (r.sx ?? 1), sc * (r.sy ?? 1), sc * (r.sx ?? 1));
      dummy.updateMatrix();
      mats.push(dummy.matrix.clone());
      if (r.color) { c.copy(r.color); cols.push(c.clone()); }
    }
    const im = new THREE.InstancedMesh(geo, mat, mats.length);
    mats.forEach((m, i) => im.setMatrixAt(i, m));
    if (cols.length === mats.length && cols.length) cols.forEach((cc, i) => im.setColorAt(i, cc));
    im.castShadow = opts.cast ?? true;
    im.receiveShadow = true;
    im.computeBoundingSphere();
    scene.add(im);
    return im;
  }
  const tint = (r, g, b) => new THREE.Color(r, g, b);
  const forest = (x, z) => NZ(x / 28, z / 28);

  // Pitsunda pines on the ridge
  scatter(pineGeometry(), windMaterial(shared, 0.9, 0.035), 150, 40000, (x, z, s) => {
    if (s.ci.hill < 5 || s.slope > 1.05 || s.h < 4 || s.rock > 0.5) return null;
    if (forest(x, z) < 0.1) return null;
    const v = R(0.85, 1.12);
    return { scale: R(3.6, 6.8), sx: R(0.85, 1.15), color: tint(v, v, v * 0.95) };
  }, { x0: 20, x1: 200 });
  // junipers: dark mounds in the open woodland and clinging to cliff edges
  const jun = juniperGeometry();
  const junMat = windMaterial(shared, 1.3, 0.05);
  scatter(jun, junMat, 850, 60000, (x, z, s) => {
    if (s.ci.hill < 1.2 || s.slope > 1.25 || s.rock > 0.6) return null;
    if (forest(x, z) < -0.3 && rnd() < 0.8) return null;
    if (NZ(x / 9 + 40, z / 9) < -0.2) return null;
    const v = R(0.8, 1.15);
    return { scale: R(1.0, 2.4), sx: R(0.9, 1.4), color: tint(v * 0.95, v, v) };
  }, { x0: 15, x1: 200 });
  scatter(jun, junMat, 110, 30000, (x, z, s) => {
    if (s.ci.wN < 0.4 || s.ci.d > -2.5 || s.ci.d < -16 || s.h < 2.5) return null;
    return { scale: R(1.0, 2.0), sx: R(1.1, 1.5), sy: 0.8, tiltX: R(-0.3, 0.3) };
  }, { x0: -10, x1: 100, z0: -160, z1: 0 });
  // pistachio shrubs
  scatter(pistachioGeometry(), windMaterial(shared, 1.1, 0.06), 360, 50000, (x, z, s) => {
    if (s.ci.hill < 2 || s.slope > 1.1 || s.rock > 0.6) return null;
    if (NZ(x / 12 - 20, z / 12) < -0.25) return null;
    const v = R(0.85, 1.15);
    return { scale: R(1.6, 3.4), color: tint(v, v, v * 0.9) };
  }, { x0: 15, x1: 200 });
  // a few junipers and shrubs on the island's sheltered slope and the cape flats
  scatter(jun, junMat, 26, 20000, (x, z, s) => {
    if (s.hi.d > -3 || s.hi.d < -16 || s.hi.w > 0.4 || s.h < 3) return null;
    return { scale: R(0.8, 1.5), sx: 1.3, sy: 0.7 };
  }, { x0: -110, x1: -40, z0: -45, z1: 30 });

  // dry grass tufts
  const tuftMat = windMaterial(shared, 2.2, 0.16, { side: THREE.DoubleSide });
  scatter(tuftGeometry(), tuftMat, 1700, 40000, (x, z, s) => {
    if (s.hi.d > -1.5 || s.h < 2 || s.paved > 0.3 || s.path > 0.2) return null;
    if (NZ(x / 6, z / 6) < -0.25) return null;
    const v = R(0.85, 1.1);
    return { scale: R(0.35, 0.75), sx: R(0.8, 1.3), color: tint(v, v, v) };
  }, { x0: -120, x1: -40, z0: -50, z1: 40, cast: false, pad: 0 });
  scatter(tuftGeometry(), tuftMat, 1200, 50000, (x, z, s) => {
    if (s.h < 1.0 || s.grass < 0.4 || s.paved > 0.3 || s.path > 0.2) return null;
    if (s.hi.d < 4) return null;
    return { scale: R(0.3, 0.7), sx: R(0.8, 1.3) };
  }, { x0: -60, x1: 200, cast: false, pad: 0 });

  // wildflowers in crevices at the cliff tops
  const flowerCols = [tint(0.95, 0.82, 0.2), tint(0.62, 0.38, 0.85), tint(0.98, 0.97, 0.92), tint(0.95, 0.45, 0.62), tint(0.35, 0.5, 0.95)];
  scatter(flowerGeometry(), windMaterial(shared, 2.6, 0.4), 520, 40000, (x, z, s) => {
    if (s.hi.d > -0.8 || s.hi.d < -s.hi.cw - 5 || s.h < 1.6) return null;
    return { scale: R(0.7, 1.3), color: flowerCols[Math.floor(rnd() * flowerCols.length)] };
  }, { x0: -120, x1: -40, z0: -50, z1: 40, cast: false, pad: 0 });
  scatter(flowerGeometry(), windMaterial(shared, 2.6, 0.4), 200, 30000, (x, z, s) => {
    if (s.h < 1.2 || s.grass < 0.3 || s.slope < 0.2) return null;
    return { scale: R(0.7, 1.2), color: flowerCols[Math.floor(rnd() * flowerCols.length)] };
  }, { x0: -10, x1: 120, cast: false, pad: 0 });

  // seagrass meadows on the clear sheltered shelf and in the lagoon
  const sg = createNoise2D(mulberry32(9));
  scatter(seagrassGeometry(), windMaterial(shared, 0.7, 0.18, { side: THREE.DoubleSide }), 600, 60000, (x, z, s) => {
    if (s.h > -1.8 || s.h < -6 || s.rock > 0.3) return null;
    if (sg(x / 14, z / 14) < 0.3) return null;
    return { scale: R(0.4, 0.8), sink: 0.02 };
  }, { x0: -50, x1: 150, z0: -20, z1: 140, cast: false, pad: -1 });
}
