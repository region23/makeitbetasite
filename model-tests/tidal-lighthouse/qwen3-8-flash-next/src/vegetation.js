/**
 * vegetation.js — grass, sea thrift and gorse on the headland.
 *
 * Blades are instanced quads bent by a shared wind field in the vertex shader,
 * so a few thousand of them cost one draw call and sway in step with the gusts
 * crossing the water.
 */

import * as THREE from 'three';
import { ground, groundNormal, insideBank, footprintRadius, fbm, mulberry32, clamp, smoothstep, PLACES } from './terrain.js';
import * as T from './theme.js';
import { mergeGeoms, makeRock, shadeFaces, M } from './util.js';

const WIND_VERT = /* glsl */ `
  uniform float uTime;
  uniform float uBend;
  uniform float uBladeH;
  attribute float aPhase;
  attribute float aStiff;
  varying float vWind;

  vec2 windAt(vec2 p, float ph) {
    float t = uTime;
    float gust = 0.62 + 0.38 * sin(t * 0.42 + p.x * 0.11 + p.y * 0.07);
    float a = sin(p.x * 0.55 + t * 1.9 + ph) * 0.55
            + sin(p.y * 0.72 - t * 2.4 + ph * 1.7) * 0.3
            + sin((p.x + p.y) * 1.35 + t * 3.7 + ph * 0.6) * 0.16;
    return vec2(-0.86, 0.51) * (a * gust);
  }
`;

function windMaterial(opts, bendKey = 1, bladeH = 0.5) {
  const mat = new THREE.MeshStandardMaterial({
    vertexColors: true,
    roughness: 0.9,
    metalness: 0,
    side: THREE.DoubleSide,
    ...opts,
  });
  const extra = { uTime: { value: 0 }, uBend: { value: bendKey }, uBladeH: { value: bladeH } };
  mat.onBeforeCompile = (shader) => {
    Object.assign(shader.uniforms, extra);
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', `#include <common>\n${WIND_VERT}`)
      .replace(
        '#include <begin_vertex>',
        `#include <begin_vertex>
         {
           #ifdef USE_INSTANCING
             vec3 iP = vec3(instanceMatrix[3][0], instanceMatrix[3][1], instanceMatrix[3][2]);
           #else
             vec3 iP = vec3(0.0);
           #endif
           float hf = clamp(transformed.y / uBladeH, 0.0, 1.0);           vec2 w = windAt(iP.xz, aPhase);
           float bend = pow(hf, 1.65) * uBend / max(aStiff, 0.35);
           transformed.x += w.x * bend;
           transformed.z += w.y * bend;
           transformed.y -= (abs(w.x) + abs(w.y)) * bend * 0.22;
           vWind = length(w);
         }`
      );
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', '#include <common>\nvarying float vWind;\nuniform float uBend;')
      .replace(
        '#include <color_fragment>',
        `#include <color_fragment>
         diffuseColor.rgb *= 1.0 + 0.16 * vWind * uBend;`
      );
  };
  mat.customProgramCacheKey = () => `tidal-wind-${bendKey}-${bladeH}`;
  return { mat, extra };
}

/** build one grass blade: a tapered strip that curves over its height */
function bladeGeometry(h, w, curve, segs = 4) {
  const pos = [];
  const col = [];
  const idx = [];
  const cRoot = new THREE.Color(0x3f5a2a);
  const cTip = new THREE.Color(0xa8b860);
  const c = new THREE.Color();
  for (let i = 0; i <= segs; i++) {
    const t = i / segs;
    const y = t * h;
    const zc = curve * t * t;
    const half = w * 0.5 * (1 - 0.86 * Math.pow(t, 1.25));
    pos.push(-half, y, zc, half, y, zc);
    c.copy(cRoot).lerp(cTip, Math.pow(t, 0.75));
    col.push(c.r, c.g, c.b, c.r, c.g, c.b);
    if (i < segs) {
      const a = i * 2;
      idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
}

/** one clump: several blades fanned out, so instances look like tufts */
function tuftGeometry(blades, h, w, seed) {
  const rnd = mulberry32(seed);
  const parts = [];
  for (let i = 0; i < blades; i++) {
    const a = rnd() * Math.PI * 2;
    const r = rnd() * w * 1.1;
    const s = 0.7 + rnd() * 0.6;
    const g = bladeGeometry(h * s, w * (0.8 + rnd() * 0.5), 0.06 + rnd() * 0.12);
    parts.push({ geo: g, matrix: M.place(Math.cos(a) * r, 0, Math.sin(a) * r, 0, a, (rnd() - 0.5) * 0.25) });
  }
  return mergeGeoms(parts);
}

/* ------------------------------------------------------------ placement */

function scatter(count, seed, test) {
  const rnd = mulberry32(seed);
  const out = [];
  let guard = 0;
  while (out.length < count && guard < count * 60) {
    guard++;
    const a = rnd() * Math.PI * 2;
    const rr = Math.sqrt(rnd()) * 21;
    const x = Math.cos(a) * rr;
    const z = Math.sin(a) * rr;
    const theta = Math.atan2(z, x);
    if (Math.hypot(x, z) > footprintRadius(theta) - 0.7) continue;
    if (!insideBank(x, z) && Math.hypot(x, z) > 12) continue;
    const n = groundNormal(x, z, 0.4);
    const y = ground(x, z);
    if (!test(x, z, y, n, rnd)) continue;
    out.push([x, y, z]);
  }
  return out;
}

const inBuilding = (x, z) => {
  const dl = Math.hypot(x - PLACES.lighthouse.x, z - PLACES.lighthouse.z);
  const dc = Math.hypot(x - PLACES.cottage.x, z - PLACES.cottage.z);
  const ds = Math.hypot(x - (PLACES.cottage.x + 1.6), z - (PLACES.cottage.z + 2.2));
  return dl < 2.5 || dc < 2.9 || ds < 1.5;
};

/* --------------------------------------------------------------- module */

export function createVegetation() {
  const group = new THREE.Group();
  const uniforms = [];

  /* ---- grass tufts */
  const spots = scatter(
    2400,
    5150,
    (x, z, y, n, rnd) => {
      if (y < 0.55 || y > 11.5) return false;
      if (n.y < 0.62) return false; // no grass on a cliff face
      if (inBuilding(x, z)) return false;
      // clumps, thicker on the flanks than on the bare summit
      const patch = fbm(x * 0.55 + 3.1, z * 0.55 - 1.7, 4, 91);
      const need = 0.4 + 0.16 * smoothstep(2.0, 9.5, y);
      if (patch < need) return false;
      return rnd() < 0.55 + 0.45 * smoothstep(6.5, 1.4, y);
    }
  );

  const geo = tuftGeometry(9, 0.4, 0.075, 12);
  const { mat: grassMat, extra: grassU } = windMaterial({ flatShading: false }, 0.17, 0.4);
  const n = spots.length;
  const grass = new THREE.InstancedMesh(geo, grassMat, n);
  const phase = new Float32Array(n);
  const stiff = new Float32Array(n);
  const colors = new Float32Array(n * 3);
  const rnd = mulberry32(99);
  const mtx = new THREE.Matrix4();
  const q = new THREE.Quaternion();
  const e = new THREE.Euler();
  const pv = new THREE.Vector3();
  const sv = new THREE.Vector3();
  const cA = new THREE.Color(T.GRASS);
  const cB = new THREE.Color(T.MOSS);
  const cC = new THREE.Color(0xa99a5e); // drought-yellow on the exposed ridge
  const cOut = new THREE.Color();
  for (let i = 0; i < n; i++) {
    const [x, y, z] = spots[i];
    const s = 0.68 + rnd() * 0.62;
    e.set((rnd() - 0.5) * 0.25, rnd() * Math.PI * 2, (rnd() - 0.5) * 0.25);
    q.setFromEuler(e);
    pv.set(x, y - 0.03, z);
    sv.set(s, s * (0.85 + rnd() * 0.5), s);
    mtx.compose(pv, q, sv);
    grass.setMatrixAt(i, mtx);
    phase[i] = rnd() * 6.283;
    stiff[i] = 0.75 + rnd() * 0.8;
    const p = fbm(x * 0.8, z * 0.8, 3, 17);
    cOut.copy(cA).lerp(cB, clamp(p * 1.6 - 0.2, 0, 1));
    cOut.lerp(cC, smoothstep(5.5, 10.5, y) * 0.7 * rnd());
    cOut.multiplyScalar(0.9 + 0.34 * rnd());
    colors[i * 3] = cOut.r;
    colors[i * 3 + 1] = cOut.g;
    colors[i * 3 + 2] = cOut.b;
  }
  geo.setAttribute('aPhase', new THREE.InstancedBufferAttribute(phase, 1));
  geo.setAttribute('aStiff', new THREE.InstancedBufferAttribute(stiff, 1));
  grass.instanceColor = new THREE.InstancedBufferAttribute(colors, 3);
  grass.instanceMatrix.needsUpdate = true;
  grass.receiveShadow = true;
  group.add(grass);
  uniforms.push(grassU);

  /* ---- flowers: thrift and sea campion on the upper turf */
  const fspots = scatter(
    420,
    6161,
    (x, z, y, nn) => y > 1.6 && y < 10.5 && nn.y > 0.72 && !inBuilding(x, z) && fbm(x * 1.3, z * 1.3, 3, 33) > 0.5
  );
  const flowerGeo = mergeGeoms([
    { geo: bladeGeometry(0.22, 0.02, 0.02, 2), matrix: M.place(0, 0, 0), color: 0x5c7a3a },
    { geo: new THREE.IcosahedronGeometry(0.055, 0), matrix: M.place(0, 0.24, 0.004), color: 0xffffff },
    { geo: new THREE.IcosahedronGeometry(0.05, 0), matrix: M.place(0.035, 0.2, -0.02), color: 0xfffaf0 },
  ]);
  const { mat: flowerMat, extra: flowerU } = windMaterial({ roughness: 0.8 }, 0.1, 0.26);
  const flowers = new THREE.InstancedMesh(flowerGeo, flowerMat, fspots.length);
  const fp = new Float32Array(fspots.length);
  const fs = new Float32Array(fspots.length);
  const fc = new Float32Array(fspots.length * 3);
  const petal = [new THREE.Color(0xe9f0e2), new THREE.Color(0xf7f2e0), new THREE.Color(0xffd9e2), new THREE.Color(0xf6e7a8)];
  for (let i = 0; i < fspots.length; i++) {
    const [x, y, z] = fspots[i];
    const s = 0.7 + rnd() * 0.6;
    e.set(0, rnd() * Math.PI * 2, 0);
    q.setFromEuler(e);
    mtx.compose(pv.set(x, y - 0.02, z), q, sv.set(s, s, s));
    flowers.setMatrixAt(i, mtx);
    fp[i] = rnd() * 6.283;
    fs[i] = 0.5 + rnd() * 0.5;
    const c = petal[(rnd() * petal.length) | 0];
    fc[i * 3] = c.r;
    fc[i * 3 + 1] = c.g;
    fc[i * 3 + 2] = c.b;
  }
  flowerGeo.setAttribute('aPhase', new THREE.InstancedBufferAttribute(fp, 1));
  flowerGeo.setAttribute('aStiff', new THREE.InstancedBufferAttribute(fs, 1));
  flowers.instanceColor = new THREE.InstancedBufferAttribute(fc, 3);
  flowers.receiveShadow = true;
  group.add(flowers);
  uniforms.push(flowerU);

  /* ---- gorse and bracken clumps along the paths and behind the cottage */
  const bushGeo = makeRock(909, 0.4, false, 0.88, 2);
  shadeFaces(bushGeo, (c, x, y) => c.setHex(0x4c6b34).multiplyScalar(0.7 + 0.5 * smoothstep(-0.4, 0.4, y)));
  const { mat: bushMat, extra: bushU } = windMaterial({ flatShading: true }, 0.035, 0.42);
  const bspots = scatter(
    130,
    7177,
    (x, z, y, nn) => y > 1.1 && y < 9 && nn.y > 0.84 && !inBuilding(x, z) && fbm(x * 0.9 - 2.2, z * 0.9 + 5.5, 3, 129) > 0.56
  );
  const bushes = new THREE.InstancedMesh(bushGeo, bushMat, bspots.length);
  const bp = new Float32Array(bspots.length);
  const bs = new Float32Array(bspots.length);
  const bc = new Float32Array(bspots.length * 3);
  for (let i = 0; i < bspots.length; i++) {
    const [x, y, z] = bspots[i];
    const s = 0.5 + rnd() * 0.62;
    e.set((rnd() - 0.5) * 0.3, rnd() * Math.PI * 2, (rnd() - 0.5) * 0.3);
    q.setFromEuler(e);
    mtx.compose(pv.set(x, y + s * 0.2, z), q, sv.set(s * 1.2, s * 0.8, s * 1.2));
    bushes.setMatrixAt(i, mtx);
    bp[i] = rnd() * 6.283;
    bs[i] = 2.4 + rnd() * 1.6;
    // gorse and sea thrift are yellower and greyer than lawn green
    const f = 0.66 + rnd() * 0.5;
    const kind = rnd();
    const warm = kind < 0.3 ? 1.3 : kind < 0.55 ? 1.12 : 0.96;
    bc[i * 3] = f * warm;
    bc[i * 3 + 1] = f * (kind < 0.3 ? 0.92 : 1.0);
    bc[i * 3 + 2] = f * (kind < 0.55 ? 0.6 : 0.78);
  }
  bushGeo.setAttribute('aPhase', new THREE.InstancedBufferAttribute(bp, 1));
  bushGeo.setAttribute('aStiff', new THREE.InstancedBufferAttribute(bs, 1));
  bushes.instanceColor = new THREE.InstancedBufferAttribute(bc, 3);
  bushes.castShadow = true;
  bushes.receiveShadow = true;
  group.add(bushes);
  uniforms.push(bushU);

  /* ---- a couple of stacked driftwood logs above the shingle */
  const drift = [];
  const driftRnd = mulberry32(313);
  for (let i = 0; i < 7; i++) {
    const a = -2.2 + driftRnd() * 2.6;
    const rr = 12.4 + driftRnd() * 4.2;
    const x = Math.cos(a) * rr;
    const z = Math.sin(a) * rr;
    const y = ground(x, z);
    if (y < 0.35 || y > 1.7) continue;
    const len = 0.9 + driftRnd() * 1.5;
    const g = new THREE.CylinderGeometry(0.09 + driftRnd() * 0.06, 0.12 + driftRnd() * 0.05, len, 7, 1);
    drift.push({ geo: g, matrix: M.place(x, y + 0.07, z, Math.PI / 2 + (driftRnd() - 0.5) * 0.2, driftRnd() * 3.1, 0), color: 0xb6a488 });
  }
  if (drift.length) {
    const mesh = new THREE.Mesh(mergeGeoms(drift), new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.98 }));
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    group.add(mesh);
  }

  return {
    group,
    counts: { grass: n, flowers: fspots.length, bushes: bspots.length },
    setTime(t) {
      for (const u of uniforms) u.uTime.value = t;
    },
  };
}
