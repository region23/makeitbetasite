// Terrain: display-piece surface + cutaway skirt, procedural geology coloring,
// fallen blocks at the waterline, beach pebbles.
import * as THREE from 'three';
import {
  H, insideSlab, boundaryPoint, SKIRT_BASE, PATH, BEACH, PLAZA, VILLAGE,
  islandField, shoreDist, exposureAt,
} from './geo.js';
import { mulberry } from './util.js';

const GLSL_NOISE = /* glsl */`
  float hash12(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
  float vnoise(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
    return mix(mix(hash12(i), hash12(i+vec2(1,0)), f.x), mix(hash12(i+vec2(0,1)), hash12(i+vec2(1,1)), f.x), f.y); }
  float fbm2(vec2 p){ float a=0.5,s=0.0; for(int i=0;i<4;i++){ s+=a*vnoise(p); p*=2.03; a*=0.5;} return s; }
  float fbm3(vec2 p){ float a=0.5,s=0.0; for(int i=0;i<3;i++){ s+=a*vnoise(p); p*=2.07; a*=0.5;} return s; }
  float sdn(float a, float b, float x){ return 1.0 - smoothstep(a, b, x); }
  float segDist(vec2 p, vec2 a, vec2 b){ vec2 pa=p-a, ba=b-a; float h=clamp(dot(pa,ba)/dot(ba,ba),0.0,1.0); return length(pa-ba*h); }
`;

// colors
const C = {
  limestoneA: new THREE.Color(0.78, 0.70, 0.53), limestoneB: new THREE.Color(0.66, 0.58, 0.42),
  marlA: new THREE.Color(0.61, 0.59, 0.55), marlB: new THREE.Color(0.50, 0.49, 0.45),
  gravelA: new THREE.Color(0.65, 0.60, 0.51), gravelB: new THREE.Color(0.52, 0.50, 0.45),
  grass: new THREE.Color(0.63, 0.57, 0.36),
  pebbleA: new THREE.Color(0.66, 0.62, 0.55), pebbleB: new THREE.Color(0.47, 0.46, 0.43),
  sandUW: new THREE.Color(0.72, 0.66, 0.52), rockUW: new THREE.Color(0.55, 0.51, 0.42),
  deepUW: new THREE.Color(0.25, 0.29, 0.33), algae: new THREE.Color(0.23, 0.32, 0.22),
  path: new THREE.Color(0.55, 0.47, 0.37), plaza: new THREE.Color(0.72, 0.70, 0.66),
};

function injectTerrainColor(mat, skirt = false) {
  mat.onBeforeCompile = (shader) => {
    const uPath = PATH.map((p) => new THREE.Vector2(p[0], p[1]));
    const uBeach = BEACH.map((p) => new THREE.Vector2(p[0], p[1]));
    shader.uniforms.uPath = { value: uPath };
    shader.uniforms.uBeach = { value: uBeach };
    shader.uniforms.uPlaza = { value: new THREE.Vector3(PLAZA.x, PLAZA.z, PLAZA.r) };
    shader.uniforms.uVillage = { value: new THREE.Vector4(VILLAGE.x, VILLAGE.z, VILLAGE.w, VILLAGE.h) };

    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', `#include <common>
        varying vec3 vWpos; varying vec3 vWNorm;`)
      .replace('#include <begin_vertex>', `#include <begin_vertex>
        vWpos = (modelMatrix * vec4(transformed, 1.0)).xyz;
        vWNorm = normalize(mat3(modelMatrix) * objectNormal);`);

    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', `#include <common>
        varying vec3 vWpos; varying vec3 vWNorm;
        uniform vec2 uPath[6]; uniform vec2 uBeach[5];
        uniform vec3 uPlaza; uniform vec4 uVillage;
        ${GLSL_NOISE}`)
      .replace('#include <color_fragment>', `#include <color_fragment>
        {
          vec3 wp = vWpos;
          vec3 n = normalize(vWNorm);
          float ny = clamp(n.y, 0.0, 1.0);
          float cliff = 1.0 - ny;

          // tilted limestone / marl strata
          float b1 = sin(dot(wp, vec3(0.545, 0.60, 0.585)) * 0.62 + (fbm2(wp.xz * 0.06) - 0.5) * 5.2);
          float b2 = sin(dot(wp, vec3(-0.35, 0.72, 0.60)) * 0.34 + 1.7 + (fbm2(wp.xz * 0.11) - 0.5) * 6.0);
          vec3 lime = mix(vec3(0.80,0.72,0.55), vec3(0.60,0.52,0.38), b1 * 0.5 + 0.5);
          vec3 marl = mix(vec3(0.62,0.60,0.56), vec3(0.45,0.44,0.40), b2 * 0.5 + 0.5);
          vec3 rock = mix(lime, marl, smoothstep(-0.3, 0.5, b2));
          float fract_ = smoothstep(0.50, 0.88, fbm2(wp.xz * 0.32 + wp.y * 0.18));
          rock *= 1.0 - 0.45 * fract_ * cliff;
          rock *= 0.90 + 0.18 * vnoise(wp.xz * 1.4);

          // gravel top with dry grass patches
          float spec = vnoise(wp.xz * 3.1);
          vec3 gravel = mix(vec3(0.65,0.60,0.51), vec3(0.50,0.48,0.43), smoothstep(0.35, 0.75, spec));
          float grassP = smoothstep(0.42, 0.8, fbm2(wp.xz * 0.045 + 7.3));
          gravel = mix(gravel, vec3(0.63,0.57,0.36), grassP * 0.55);

          // pebble beach (cell pebbles)
          float bd = 1e9;
          for (int i = 0; i < 4; i++) bd = min(bd, segDist(wp.xz, uBeach[i], uBeach[i + 1]));
          float beachM = sdn(5.0, 17.0, bd);
          vec2 pc = wp.xz * 1.9;
          vec2 cid = floor(pc), cf = fract(pc) - 0.5;
          float cr = hash12(cid) * 0.35;
          float pd2 = length(cf - vec2(cr * sign(cf.x + 0.001), cr * sign(cf.y)));
          float peb = sdn(0.18, 0.34, pd2);
          vec3 pebble = mix(vec3(0.66,0.62,0.55), vec3(0.46,0.45,0.42), hash12(cid + 7.1) * 0.7 + peb * 0.2);
          pebble *= 0.9 + 0.25 * (1.0 - pd2 * 2.0);

          float landUW = sdn(-0.6, 0.4, wp.y);
          vec3 col = rock;
          col = mix(col, gravel, smoothstep(0.55, 0.8, ny) * (1.0 - landUW));
          col = mix(col, pebble, beachM);

          // footpath & plaza
          float ptd = 1e9;
          for (int i = 0; i < 5; i++) ptd = min(ptd, segDist(wp.xz, uPath[i], uPath[i + 1]));
          float pathM = sdn(0.7, 2.2, ptd) * smoothstep(0.6, 0.85, ny) * (1.0 - landUW);
          col = mix(col, vec3(0.55,0.47,0.37), pathM * 0.85);
          float plazaM = sdn(uPlaza.z - 0.5, uPlaza.z + 1.5, length(wp.xz - uPlaza.xy)) * smoothstep(0.6, 0.85, ny) * (1.0 - landUW);
          col = mix(col, vec3(0.72,0.70,0.66), plazaM * 0.9);

          // underwater: sand -> rock -> deep sediment, algae, boulders
          float depth = max(0.0, -wp.y);
          float uw = sdn(-0.5, 0.12, wp.y);
          vec3 sea = mix(vec3(0.52,0.47,0.36), vec3(0.40,0.38,0.31), smoothstep(1.5, 7.0, depth));
          sea = mix(sea, vec3(0.25,0.29,0.33), smoothstep(9.0, 26.0, depth));
          float algaeM = smoothstep(0.55, 0.85, fbm2(wp.xz * 0.14 + 3.7)) * sdn(2.5, 8.0, depth);
          sea = mix(sea, vec3(0.23,0.32,0.22), algaeM * 0.65);
          float bould = smoothstep(0.62, 0.85, vnoise(wp.xz * 0.7));
          sea *= 1.0 - 0.22 * bould * sdn(4.0, 14.0, depth);
          col = mix(col, sea, uw);

          // wet band + algae line at the waterline
          float wet = sdn(0.1, 0.55, wp.y) * smoothstep(-0.75, -0.3, wp.y);
          col *= 1.0 - 0.45 * wet;
          float algaeLine = sdn(-0.6, 0.15, wp.y) * smoothstep(-1.6, -1.0, wp.y);
          col = mix(col, vec3(0.30, 0.34, 0.26), algaeLine * 0.5 * cliff);

          if (${skirt ? 'true' : 'false'}) {
            // cutaway wall: stronger strata, dark base, gravel lip
            col = mix(rock, gravel, smoothstep(0.75, 0.92, ny) * (1.0 - landUW) * 0.7);
            col = mix(col, vec3(0.30, 0.31, 0.33), sdn(${SKIRT_BASE.toFixed(1)}, ${(-14).toFixed(1)}, wp.y));
          }

          diffuseColor.rgb = col;
        }`);
  };
  return mat;
}

export function buildTerrain() {
  const group = new THREE.Group();

  // ---- surface heightfield grid ----
  const x0 = -402, x1 = 402, z0 = -294, z1 = 294, step = 2.5;
  const nx = Math.round((x1 - x0) / step) + 1, nz = Math.round((z1 - z0) / step) + 1;
  const pos = [], norm = [], idx = [], map = new Int32Array(nx * nz).fill(-1);
  const P = (i, j) => [x0 + i * step, z0 + j * step];
  const heights = new Float32Array(nx * nz);
  for (let j = 0; j < nz; j++) for (let i = 0; i < nx; i++) {
    const [x, z] = P(i, j);
    heights[j * nx + i] = insideSlab(x, z, 3) ? H(x, z) : -999;
  }
  const addVert = (i, j) => {
    const k = j * nx + i;
    if (map[k] === -1) {
      map[k] = pos.length / 3;
      const [x, z] = P(i, j);
      pos.push(x, heights[k], z);
    }
    return map[k];
  };
  for (let j = 0; j < nz - 1; j++) for (let i = 0; i < nx - 1; i++) {
    const h00 = heights[j * nx + i], h10 = heights[j * nx + i + 1];
    const h01 = heights[(j + 1) * nx + i], h11 = heights[(j + 1) * nx + i + 1];
    if (h00 < -900 && h10 < -900 && h01 < -900 && h11 < -900) continue;
    const a = addVert(i, j), b = addVert(i + 1, j), c = addVert(i + 1, j + 1), d = addVert(i, j + 1);
    idx.push(a, c, b, a, d, c);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setIndex(idx);
  geo.computeVertexNormals();
  const terrMat = injectTerrainColor(new THREE.MeshStandardMaterial({ roughness: 0.96, metalness: 0 }));
  const terr = new THREE.Mesh(geo, terrMat);
  terr.receiveShadow = true; terr.castShadow = true;
  group.add(terr);

  // ---- cutaway skirt ----
  const NS = 150;
  const sPos = [], sIdx = [];
  for (let s = 0; s <= NS; s++) {
    const th = (s / NS) * Math.PI * 2;
    const [bx, bz] = boundaryPoint(th);
    const inset = 0.985;
    const tx = bx * inset, tz = bz * inset;
    const top = H(tx, tz) - 0.6;
    sPos.push(tx, top, tz);
    sPos.push(bx * 1.008, SKIRT_BASE, bz * 1.008);
  }
  for (let s = 0; s < NS; s++) {
    const a = s * 2, b = s * 2 + 1, c = s * 2 + 3, d = s * 2 + 2;
    sIdx.push(a, b, c, a, c, d);
  }
  const sgeo = new THREE.BufferGeometry();
  sgeo.setAttribute('position', new THREE.Float32BufferAttribute(sPos, 3));
  sgeo.setIndex(sIdx);
  sgeo.computeVertexNormals();
  const skirtMat = injectTerrainColor(new THREE.MeshStandardMaterial({ roughness: 0.95, metalness: 0, side: THREE.DoubleSide }), true);
  const skirt = new THREE.Mesh(sgeo, skirtMat);
  skirt.receiveShadow = true;
  group.add(skirt);

  // ---- bottom cap ----
  const capGeo = new THREE.CircleGeometry(1, 64);
  const cap = new THREE.Mesh(capGeo, new THREE.MeshStandardMaterial({ color: 0x35322d, roughness: 1 }));
  cap.rotation.x = -Math.PI / 2;
  cap.scale.setScalar(430);
  cap.position.y = SKIRT_BASE - 0.01;
  group.add(cap);

  addFallenBlocks(group);
  addBeachPebbles(group);
  return group;
}

// fallen blocks at cliff waterlines (exposed side + strait)
function addFallenBlocks(group) {
  const rnd = mulberry(4242);
  const geo = new THREE.DodecahedronGeometry(1, 0);
  const mat = new THREE.MeshStandardMaterial({ color: 0xa89a78, roughness: 0.95 });
  // find shoreline spots around the island
  const spots = [];
  for (let s = 0; s < 260; s++) {
    const th = (s / 260) * Math.PI * 2;
    const cx = -28 + Math.cos(th), cz = -22 + Math.sin(th);
    // march outward from island centre until land field rises to shoreline
    let px = -28 + Math.cos(th) * 90, pz = -22 + Math.sin(th) * 90;
    // sample radial line from centre: find zero crossing of islandField
    let prev = islandField(-28, -22);
    for (let r = 4; r < 160; r += 2.2) {
      const x = -28 + Math.cos(th) * r, z = -22 + Math.sin(th) * r;
      const f = islandField(x, z);
      if (prev < 0 && f >= 0) { px = x; pz = z; spots.push([px + 2.5, pz + 2.5]); break; }
      prev = f;
    }
  }
  const expo = spots.filter((p) => exposureAt(p[0], p[1]) > 0.55);
  const chosen = expo.filter((_, i) => i % 2 === 0).slice(0, 70);
  const inst = new THREE.InstancedMesh(geo, mat, chosen.length + 22);
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), sc = new THREE.Vector3();
  let n = 0;
  for (const [x, z] of chosen) {
    const s = 1.0 + rnd() * 2.6;
    e.set(rnd() * 3, rnd() * 6, rnd() * 3); q.setFromEuler(e);
    sc.set(s * (0.8 + rnd() * 0.5), s * (0.5 + rnd() * 0.4), s * (0.8 + rnd() * 0.5));
    const y = Math.max(-2.6, H(x, z) + s * 0.18);
    m.compose(new THREE.Vector3(x, y, z), q, sc);
    inst.setMatrixAt(n++, m);
  }
  // a few blocks in the strait + off the spit tip
  const extra = [[92, -4], [88, 8], [97, 2], [100, -12], [104, 40], [86, 14], [90, 20]];
  for (const [x, z] of extra) {
    const s = 1.1 + rnd() * 2.2;
    e.set(rnd() * 3, rnd() * 6, rnd() * 3); q.setFromEuler(e);
    sc.set(s, s * 0.6, s * 0.9);
    m.compose(new THREE.Vector3(x, Math.max(-2.4, H(x, z) + s * 0.15), z), q, sc);
    inst.setMatrixAt(n++, m);
  }
  inst.count = n;
  inst.castShadow = true; inst.receiveShadow = true;
  group.add(inst);
}

// a thin scatter of real pebbles along the beach waterline for parallax
function addBeachPebbles(group) {
  const rnd = mulberry(777);
  const geo = new THREE.SphereGeometry(1, 7, 5);
  const mat = new THREE.MeshStandardMaterial({ color: 0x8f887a, roughness: 0.9 });
  const N = 260;
  const inst = new THREE.InstancedMesh(geo, mat, N);
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), sc = new THREE.Vector3();
  let n = 0;
  for (let i = 0; i < N; i++) {
    const t = rnd();
    const seg = Math.min(3, Math.floor(t * 4));
    const [ax, az] = BEACH[seg], [bx, bz] = BEACH[seg + 1];
    const ft = t * 4 - seg;
    const px = lerp(ax, bx, ft) + (rnd() - 0.5) * 20;
    const pz = lerp(az, bz, ft) + (rnd() - 0.5) * 20;
    const s = 0.16 + rnd() * 0.34;
    e.set(rnd() * 3, rnd() * 6, rnd() * 3); q.setFromEuler(e);
    sc.set(s, s * 0.62, s);
    const y = H(px, pz) + s * 0.3;
    if (y < -0.6) continue;
    m.compose(new THREE.Vector3(px, y, pz), q, sc);
    inst.setMatrixAt(n++, m);
  }
  inst.count = n;
  inst.receiveShadow = true;
  group.add(inst);
}

import { lerp as lerpN } from './util.js';
const lerp = lerpN;
