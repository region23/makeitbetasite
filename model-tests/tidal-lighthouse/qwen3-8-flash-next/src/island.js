/**
 * island.js — the display piece itself.
 *
 * A polar heightfield mesh for the land and seabed, an extruded outer wall so
 * the sides read as a cutaway with layers of rock and sand, a deep apron under
 * the surrounding sea, plus the rocks, stack and arch that give the coastline
 * its silhouette from every side.
 */

import * as THREE from 'three';
import {
  ground,
  groundNormal,
  footprintRadius,
  CUT_DEPTH,
  smoothstep,
  clamp,
  fbm,
  noise2,
  mulberry32,
  PLACES,
} from './terrain.js';
import * as T from './theme.js';
import { mergeGeoms, makeRock, shadeFaces, noiseDisplace, M } from './util.js';

const NA = 300; // angular segments
const NR = 124; // radial segments

/* ------------------------------------------------------------ colouring */

const cSand = new THREE.Color(T.SAND);
const cShingle = new THREE.Color(0xa89a83); // storm-tossed shingle at the tide line
const cSeam = new THREE.Color(0xcfc3ac); // pale limestone seam
const cIron = new THREE.Color(0x8d6647); // iron-stained bed
const cWetSand = new THREE.Color(T.WET_SAND);
const cRock = new THREE.Color(T.ROCK);
const cRockDark = new THREE.Color(T.ROCK_DARK);
const cShore = new THREE.Color(T.SHORE_ROCK);
const cGrass = new THREE.Color(T.GRASS);
const cMoss = new THREE.Color(T.MOSS);
const cWeed = new THREE.Color(0x3d5a3a);
const cDeepSand = new THREE.Color(0xc9b285);
const cSilt = new THREE.Color(0x8e9a86);
const cStack = new THREE.Color(0x6d6058);

const tmp = new THREE.Color();

/** bed colour for submerged ground */
function bedColor(out, x, z, h, slopeY) {
  const depth = -h;
  // sand ripples: broad bands warped by noise
  const rip = Math.sin(x * 1.35 + z * 0.6 + fbm(x * 0.22, z * 0.22, 3, 61) * 7.0) * 0.5 + 0.5;
  out.copy(cSand).lerp(cDeepSand, smoothstep(0.1, 2.6, depth));
  out.lerp(cSilt, smoothstep(0.9, 3.2, depth) * 0.35);
  out.multiplyScalar(0.9 + 0.2 * rip * smoothstep(2.8, 0.2, depth));
  // rock and weed where the bed is hard or steep
  const hard = smoothstep(0.72, 0.94, slopeY);
  const patch = smoothstep(0.55, 0.8, fbm(x * 0.3 + 12.2, z * 0.3 - 3.4, 3, 151));
  out.lerp(cShore, Math.max(hard * 0.85, patch * 0.45));
  // sea grass beds, only in the calm shallows
  const calm = smoothstep(0.45, 0.75, fbm(x * 0.4 - 7.7, z * 0.4 + 2.2, 3, 191));
  const bed = calm * smoothstep(0.25, 0.7, depth) * smoothstep(2.7, 1.6, depth) * smoothstep(18, 12, Math.hypot(x, z));
  out.lerp(cWeed, bed * 0.75);
  // wet, tide-stained sand and rock reads far darker than dry
  out.multiplyScalar(1 - 0.46 * smoothstep(0.5, 0.0, depth));
  return out;
}

/** land colour from height, slope and position */
function landColor(out, x, z, h, slopeY) {
  const nrmY = slopeY;
  if (h < -0.02) return bedColor(out, x, z, h, nrmY);

  // beach / shore platform
  const beach = smoothstep(0.95, 0.05, h) * smoothstep(0.58, 0.9, nrmY);
  // the working quay is shingle and hard-standing, not turf
  const quay = 1 - smoothstep(2.6, 4.6, Math.hypot(x - 4.3, z + 5.7));
  out.copy(cSand);
  out.lerp(cShingle, clamp(beach * 0.62 + quay * 0.85, 0, 0.9));
  out.lerp(cWetSand, smoothstep(0.55, 0.02, h) * 0.8);
  // scattered shingle so the flat ground never reads as a sheet of one tone
  const gram = smoothstep(0.62, 0.86, fbm(x * 1.9, z * 1.9, 3, 97));
  out.lerp(cShingle, gram * 0.32 * smoothstep(1.8, 0.4, h));

  // rock with sedimentary banding
  const band = Math.pow(0.5 + 0.5 * Math.sin(h * 2.15 + fbm(x * 0.12, z * 0.12, 3, 71) * 5.2), 1.7);
  tmp.copy(cRock).lerp(cRockDark, clamp(band * 0.8 + (noise2(x * 1.4, z * 1.4, 5) - 0.5) * 0.4, 0, 1));
  // two accent beds so the faces read as layered stone rather than one mass
  tmp.lerp(cSeam, smoothstep(0.72, 0.96, band) * 0.5);
  tmp.lerp(cIron, smoothstep(0.04, 0.2, band) * (1 - smoothstep(0.24, 0.42, band)) * 0.55);
  // weathered streaks running down the faces
  tmp.multiplyScalar(0.86 + 0.28 * smoothstep(0.4, 0.75, fbm(x * 2.6 + 1.3, z * 2.6 - 4.4, 3, 313)));
  tmp.lerp(cShore, smoothstep(1.1, 0.15, h) * 0.7); // splash-zone rock, darker and wet
  const rockiness = smoothstep(0.945, 0.72, nrmY) + smoothstep(1.25, 2.4, h) * smoothstep(0.9, 0.74, nrmY) * 0.85;
  out.lerp(tmp, clamp(rockiness, 0, 1));

  // grass and moss on flatter ground above the tide
  const up = smoothstep(0.62, 1.55, h) * smoothstep(0.78, 0.92, nrmY) * (1 - quay * 0.95);
  const patchN = fbm(x * 0.32 + 5.5, z * 0.32 - 9.1, 4, 211);
  tmp.copy(cGrass).lerp(cMoss, smoothstep(0.42, 0.72, patchN));
  tmp.multiplyScalar(0.82 + 0.35 * fbm(x * 1.1, z * 1.1, 3, 233));
  out.lerp(tmp, clamp(up * (0.62 + 0.5 * smoothstep(0.35, 0.6, patchN)), 0, 1));
  return out;
}

/* --------------------------------------------------------------- surface */

function buildSurfaceGeometry() {
  const nVert = (NR + 1) * NA;
  const pos = new Float32Array(nVert * 3);
  const nrm = new Float32Array(nVert * 3);
  const col = new Float32Array(nVert * 3);
  const index = [];
  const c = new THREE.Color();
  const ringR = new Float32Array(NA);

  let p = 0;
  for (let j = 0; j <= NR; j++) {
    const t = j / NR;
    for (let i = 0; i < NA; i++) {
      const th = (i / NA) * Math.PI * 2;
      const R = footprintRadius(th);
      ringR[i] = R;
      const r = t * R;
      const x = Math.cos(th) * r;
      const z = Math.sin(th) * r;
      const h = ground(x, z);
      const n = groundNormal(x, z, 0.32); // fixed step: no radial smearing
      pos[p * 3] = x;
      pos[p * 3 + 1] = h;
      pos[p * 3 + 2] = z;
      nrm[p * 3] = n.x;
      nrm[p * 3 + 1] = n.y;
      nrm[p * 3 + 2] = n.z;
      landColor(c, x, z, h, n.y);
      col[p * 3] = c.r;
      col[p * 3 + 1] = c.g;
      col[p * 3 + 2] = c.b;
      p++;
    }
  }

  for (let j = 0; j < NR; j++) {
    for (let i = 0; i < NA; i++) {
      const a = j * NA + i;
      const b = j * NA + ((i + 1) % NA);
      const cc = a + NA;
      const d = b + NA;
      // wound counter-clockwise seen from above so the front face looks up
      if (j > 0) index.push(a, b, cc);
      index.push(b, d, cc);
    }
  }

  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.BufferAttribute(nrm, 3));
  g.setAttribute('color', new THREE.BufferAttribute(col, 3));
  g.setIndex(index);
  return { geometry: g, ringR };
}

/* ------------------------------------------------- cutaway wall + bottom */

/** strata colour for the cut face: depth bands, seams, one rust layer */
const STRATA = [
  [-0.05, new THREE.Color(0xd8c091)], // pale sand
  [-1.05, new THREE.Color(0xc2a476)],
  [-2.1, new THREE.Color(0x9d8a6b)], // sandy layers
  [-3.4, new THREE.Color(0x7d7268)],
  [-4.9, new THREE.Color(0x5f5a56)], // grey rock
  [-6.6, new THREE.Color(0x4a4746)],
  [-99, new THREE.Color(0x35343a)], // dark basalt
];
const cRust = new THREE.Color(0x8d5b39);

function strataColor(out, y, th, noiseVal) {
  for (let i = 0; i < STRATA.length - 1; i++) {
    if (y <= STRATA[i][0] && y > STRATA[i + 1][0]) {
      const k = smoothstep(STRATA[i][0], STRATA[i + 1][0], y);
      out.copy(STRATA[i][1]).lerp(STRATA[i + 1][1], k);
      break;
    }
  }
  // thin darker seams and a little bedding
  const seam = Math.sin(y * 7.5 + noiseVal * 3.0 + th * 1.5);
  out.multiplyScalar(0.82 + 0.2 * smoothstep(0.2, 0.85, seam) + 0.1 * noiseVal);
  const rust = Math.exp(-Math.pow((y + 3.9) / 0.22, 2));
  out.lerp(cRust, rust * 0.6);
  return out;
}

function buildWallGeometry(ringR) {
  const rows = [0, -0.55, -1.3, -2.3, -3.6, -5.2, -7.0, CUT_DEPTH];
  const nVert = rows.length * NA;
  const pos = new Float32Array(nVert * 3);
  const nrm = new Float32Array(nVert * 3);
  const col = new Float32Array(nVert * 3);
  const index = [];
  const c = new THREE.Color();

  // top row sits on the seabed at the rim; each row below bulges inwards a
  // little so the face is not a smooth drum
  let p = 0;
  for (let r = 0; r < rows.length; r++) {
    const y = rows[r];
    for (let i = 0; i < NA; i++) {
      const th = (i / NA) * Math.PI * 2;
      const R = ringR[i];
      const bulge =
        1 -
        0.028 * Math.min(1, -y / 3) * (0.5 + 0.5 * Math.sin(th * 7.0 + y * 0.6)) -
        0.05 * Math.min(1, -y / 5) * fbm(Math.cos(th) * 2.2 + 4, Math.sin(th) * 2.2 - y * 0.35, 3, 271);
      const rad = R * bulge;
      const x = Math.cos(th) * rad;
      const z = Math.sin(th) * rad;
      pos[p * 3] = x;
      pos[p * 3 + 1] = r === 0 ? ground(x, z) : y;
      pos[p * 3 + 2] = z;
      const nv = fbm(x * 0.4, z * 0.4 + y, 3, 311);
      strataColor(c, r === 0 ? ground(x, z) : y, th, nv);
      col[p * 3] = c.r;
      col[p * 3 + 1] = c.g;
      col[p * 3 + 2] = c.b;
      p++;
    }
  }
  for (let r = 0; r < rows.length - 1; r++) {
    for (let i = 0; i < NA; i++) {
      const a = r * NA + i;
      const b = r * NA + ((i + 1) % NA);
      const cc = a + NA;
      const d = b + NA;
      index.push(a, b, cc, b, d, cc);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.BufferAttribute(nrm, 3));
  g.setAttribute('color', new THREE.BufferAttribute(col, 3));
  g.setIndex(index);
  g.computeVertexNormals();
  return g;
}

function buildBottomGeometry(ringR) {
  const pos = [0, CUT_DEPTH - 0.35, 0];
  const col = [0.1, 0.1, 0.12];
  const nrm = [0, -1, 0];
  const index = [];
  for (let i = 0; i < NA; i++) {
    const th = (i / NA) * Math.PI * 2;
    const R = ringR[i] * 0.985;
    pos.push(Math.cos(th) * R, CUT_DEPTH, Math.sin(th) * R);
    col.push(0.12, 0.12, 0.14);
    nrm.push(0, -1, 0);
  }
  for (let i = 0; i < NA; i++) index.push(0, 1 + i, 1 + ((i + 1) % NA));
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(nrm, 3));
  g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  g.setIndex(index);
  return g;
}

/** dark seabed apron continuing outwards under the deep water */
function buildApronGeometry(ringR) {
  const rings = [1.0, 1.14, 1.34, 1.62, 2.05, 2.7, 3.6, 4.9];
  const NA2 = 150;
  const pos = [];
  const col = [];
  const nrm = [];
  const index = [];
  const c = new THREE.Color();
  for (let r = 0; r < rings.length; r++) {
    const k = rings[r];
    const y = r === 0 ? 0 : -1.2 - Math.pow(r - 1, 1.65) * 1.5;
    for (let i = 0; i < NA2; i++) {
      const th = (i / NA2) * Math.PI * 2;
      const R = ringR[Math.floor((i / NA2) * NA)] * k;
      const x = Math.cos(th) * R;
      const z = Math.sin(th) * R;
      pos.push(x, r === 0 ? ground(x, z) : y, z);
      const t = smoothstep(0, 5, -y);
      c.copy(cShore).lerp(new THREE.Color(0x2c3a44), t);
      col.push(c.r, c.g, c.b);
      nrm.push(0, 1, 0);
    }
  }
  for (let r = 0; r < rings.length - 1; r++) {
    for (let i = 0; i < NA2; i++) {
      const a = r * NA2 + i;
      const b = r * NA2 + ((i + 1) % NA2);
      const cc = a + NA2;
      const d = b + NA2;
      index.push(a, b, cc, b, d, cc);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(nrm, 3));
  g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  g.setIndex(index);
  g.computeVertexNormals();
  return g;
}

/* ---------------------------------------------------- rocks, stack, arch */

function buildRocks() {
  const parts = [];
  const rnd = mulberry32(4242);

  /** place a boulder so it sits half bedded in the ground */
  const boulder = (x, z, r, seed, sink = 0.35, tint = 1) => {
    const g = makeRock(seed, r, true, 0.7 + rnd() * 0.35);
    shadeFaces(g, (c, lx, ly, lz) => {
      const wy = ly + ground(x, z) - r * sink;
      landColor(c, x + lx, z + lz, wy, 0.6);
      c.multiplyScalar(tint * (0.9 + 0.2 * smoothstep(-r, r, ly)));
    });
    parts.push({ geo: g, matrix: M.place(x, ground(x, z) - r * sink, z, 0, rnd() * 6.28, 0) });
  };

  // boulders along the coast, mostly on the exposed side and the headland
  const spots = [];
  for (let i = 0; i < 46; i++) {
    const th = rnd() * Math.PI * 2;
    const r = 6 + rnd() * 12;
    const x = Math.cos(th) * r;
    const z = Math.sin(th) * r;
    const h = ground(x, z);
    if (h > 4.6 || h < -2.4) continue;
    // keep the harbour, the jetty and the building pads clear
    if (Math.hypot(x - PLACES.harbor.x, z - PLACES.harbor.z) < 5.4) continue;
    if (Math.hypot(x - PLACES.lighthouse.x, z - PLACES.lighthouse.z) < 4.4) continue;
    if (Math.hypot(x - PLACES.cottage.x, z - PLACES.cottage.z) < 3.6) continue;
    if (Math.abs(z - 0) < 2.4 && x > 0 && x < 12) continue;
    spots.push([x, z, 0.3 + rnd() * 1.5, i + 3]);
  }
  for (const s of spots) boulder(s[0], s[1], s[2], s[3]);

  // a tight cluster of surf rocks off the south arm — the break line reads
  // around them
  const surf = [
    [-5.2, 10.4, 1.15],
    [-6.6, 11.9, 0.8],
    [-3.4, 12.4, 0.62],
    [1.6, 11.0, 0.95],
    [3.4, 12.8, 0.7],
    [-12.2, 6.2, 1.0],
    [-13.4, 4.0, 0.75],
    [9.6, 9.2, 0.85],
  ];
  surf.forEach((s, i) => {
    const g = makeRock(700 + i, s[2], true, 0.72);
    shadeFaces(g, (c, lx, ly, lz) => {
      landColor(c, s[0] + lx, s[1] + lz, ly + ground(s[0], s[1]) - s[2] * 0.5, 0.55);
      c.lerp(cShore, 0.3);
    });
    parts.push({ geo: g, matrix: M.place(s[0], ground(s[0], s[1]) - s[2] * 0.5, s[1], 0, i * 1.3, 0) });
  });

  // shingle: small pebbles scattered along the beach strands
  const pebbleG = new THREE.IcosahedronGeometry(1, 0);
  pebbleG.computeVertexNormals();
  const pcol = new Float32Array(pebbleG.getAttribute('position').count * 3);
  for (let i = 0; i < pcol.length; i += 3) {
    const v = 0.5 + rnd() * 0.5;
    pcol[i] = v * 0.7;
    pcol[i + 1] = v * 0.66;
    pcol[i + 2] = v * 0.58;
  }
  pebbleG.setAttribute('color', new THREE.Float32BufferAttribute(pcol, 3));
  let placed = 0;
  for (let i = 0; placed < 150 && i < 2600; i++) {
    const th = rnd() * Math.PI * 2;
    const r = 4 + rnd() * 17;
    const x = Math.cos(th) * r;
    const z = Math.sin(th) * r;
    const h = ground(x, z);
    if (h < -0.55 || h > 0.95) continue;
    const s = 0.06 + rnd() * 0.17;
    parts.push({ geo: pebbleG, matrix: M.place(x, h + s * 0.3, z, rnd() * 0.6, rnd() * 6.28, rnd() * 0.6, s) });
    placed++;
  }

  return mergeGeoms(parts);
}

/** sea stack plus a small natural arch, both on the shallow rim */
function buildStack() {
  const parts = [];

  const pillar = (x, z, r, height, seed, squashTop = 0.7) => {
    const bed = ground(x, z);
    const g = new THREE.CylinderGeometry(r * squashTop, r * 1.08, height, 18, 12, false);
    // a stack should stand up straight and break in steps, not lean like a
    // broken column: keep the low-frequency wobble small
    noiseDisplace(g, r * 0.2, 0.5, seed, new THREE.Vector3(x, 0, z));
    noiseDisplace(g, r * 0.1, 1.5, seed + 5, new THREE.Vector3(x, 0, z));
    // horizontal bedding grooves so the column reads as stacked strata
    {
      const gp = g.getAttribute('position');
      const gn = g.getAttribute('normal');
      for (let i = 0; i < gp.count; i++) {
        const wy = gp.getY(i) + height / 2;
        const px = gp.getX(i);
        const pz = gp.getZ(i);
        // a stepped taper: shelves of nearly vertical face separated by ledges
        const t = clamp(wy / height, 0, 1);
        const ledge = Math.floor(t * 4.0 + 0.001) / 4.0;
        const scale = 1 - 0.14 * t + 0.055 * Math.sin(seed * 1.7 + ledge * 7.3);
        const bench = Math.sin(wy * 2.3 + 0.6) * 0.05;
        gp.setXYZ(i, px * scale + gn.getX(i) * bench, wy, pz * scale + gn.getZ(i) * bench);
      }
      g.computeVertexNormals();
    }
    g.translate(0, height / 2, 0);
    shadeFaces(g, (c, lx, ly, lz) => {
      const wy = bed + ly;
      c.copy(cStack).lerp(cRockDark, smoothstep(bed + height * 0.2, bed + height, wy) * 0.5);
      const seam = 0.5 + 0.5 * Math.sin(wy * 2.6 + lx * 0.7);
      c.multiplyScalar(0.82 + 0.3 * seam);
      c.lerp(new THREE.Color(0x4f6b4a), smoothstep(2.0, 2.9, wy) * 0.35 * smoothstep(2.6, 2.2, wy)); // guano / weed line
      c.lerp(cWetSand, smoothstep(bed + 0.7, bed - 0.1, wy) * 0.5);
    });
    parts.push({ geo: g, matrix: M.place(x, bed - height * 0.06, z, 0, seed * 0.7, 0) });
    // rubble skirt
    const sk = makeRock(seed + 91, r * 1.9, true, 0.42);
    shadeFaces(sk, (c) => c.copy(cStack).multiplyScalar(0.9));
    parts.push({ geo: sk, matrix: M.place(x, bed - r * 0.5, z, 0, seed, 0) });
  };

  const st = PLACES.stack;
  pillar(st.x, st.z, 1.62, 8.8, 12, 0.82);
  pillar(st.x + 2.9, st.z + 1.9, 0.95, 5.2, 27);
  pillar(st.x - 1.6, st.z + 2.6, 0.6, 3.0, 33);

  // natural arch off the south arm: a half torus springing from the head, the
  // chord aligned with the buttresses so the ends land on rock
  const ar = PLACES.arch;
  const rot = 0.5;
  const R = 2.05;
  const f1 = { x: ar.x + Math.cos(rot) * R, z: ar.z - Math.sin(rot) * R };
  const f2 = { x: ar.x - Math.cos(rot) * R, z: ar.z + Math.sin(rot) * R };
  const bedA = Math.max(ground(f1.x, f1.z), ground(f2.x, f2.z)) - 0.2;
  const torus = new THREE.TorusGeometry(R, 0.66, 9, 26, Math.PI);
  noiseDisplace(torus, 0.24, 0.75, 55);
  noiseDisplace(torus, 0.1, 2.1, 57);
  torus.rotateY(rot);
  shadeFaces(torus, (c, lx, ly, lz) => {
    const wy = bedA + ly;
    c.copy(cStack).lerp(cRockDark, smoothstep(1.0, 3.6, wy) * 0.5);
    const seam = 0.5 + 0.5 * Math.sin(wy * 2.9 + lx * 0.8);
    c.multiplyScalar(0.84 + 0.26 * seam);
    c.lerp(cWetSand, smoothstep(0.8, 0.0, wy) * 0.6);
    c.lerp(cIron, smoothstep(1.6, 2.1, wy) * (1 - smoothstep(2.3, 2.9, wy)) * 0.35);
  });
  parts.push({ geo: torus, matrix: M.place(ar.x, bedA, ar.z, 0, 0, 0) });

  return mergeGeoms(parts);
}

/* ------------------------------------------------------------- material */

const CAUSTIC_GLSL = /* glsl */ `
uniform float uTime;
varying vec3 vWP;
float caustics(vec2 p, float t) {
  vec2 i = p;
  float c = 1.0;
  const float inten = 0.0042;
  for (int n = 0; n < 3; n++) {
    float tt = t * (1.0 - (3.5 / float(n + 1)));
    i = p + vec2(cos(tt - i.x) + sin(tt + i.y), sin(tt - i.y) + cos(tt + i.x));
    c += 1.0 / length(vec2(p.x / (sin(i.x + tt) / inten), p.y / (cos(i.y + tt) / inten)));
  }
  c /= 3.0;
  c = 1.17 - pow(c, 1.4);
  return clamp(pow(abs(c), 8.0), 0.0, 2.4);
}
`;

function makeGroundMaterial() {
  const mat = new THREE.MeshStandardMaterial({
    vertexColors: true,
    roughness: 0.94,
    metalness: 0.0,
    dithering: true,
  });
  const extra = { uTime: { value: 0 } };
  mat.onBeforeCompile = (shader) => {
    Object.assign(shader.uniforms, extra);
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vWP;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\n  vWP = (modelMatrix * vec4(transformed, 1.0)).xyz;');
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', `#include <common>\n${CAUSTIC_GLSL}`)
      .replace(
        '#include <opaque_fragment>',
        `#include <opaque_fragment>
         {
           float uw = smoothstep(0.22, -0.55, vWP.y) * smoothstep(-4.6, -1.2, vWP.y);
           if (uw > 0.001) {
             float ca = caustics(vWP.xz * 0.62, uTime * 0.5);
             float ca2 = caustics(vWP.xz * 0.31 + 19.0, uTime * 0.33 + 4.0);
             gl_FragColor.rgb += (ca * 0.75 + ca2 * 0.5) * uw * vec3(0.34, 0.62, 0.58);
           }
         }`
      );
  };
  mat.customProgramCacheKey = () => 'tidal-ground';
  return { mat, extra };
}

/* -------------------------------------------------------------- assemble */

export function createIsland() {
  const group = new THREE.Group();
  const { geometry: surfGeo, ringR } = buildSurfaceGeometry();
  const { mat: groundMat, extra } = makeGroundMaterial();

  const surface = new THREE.Mesh(surfGeo, groundMat);
  surface.castShadow = true;
  surface.receiveShadow = true;
  group.add(surface);

  const wall = new THREE.Mesh(buildWallGeometry(ringR), groundMat);
  wall.receiveShadow = true;
  wall.castShadow = false;
  group.add(wall);

  const bottomMat = new THREE.MeshBasicMaterial({ vertexColors: true });
  const bottom = new THREE.Mesh(buildBottomGeometry(ringR), bottomMat);
  group.add(bottom);

  const apron = new THREE.Mesh(buildApronGeometry(ringR), groundMat);
  apron.receiveShadow = false;
  group.add(apron);

  const rockMat = new THREE.MeshStandardMaterial({
    vertexColors: true,
    roughness: 0.95,
    metalness: 0.0,
    flatShading: true,
    dithering: true,
  });
  const rocks = new THREE.Mesh(buildRocks(), rockMat);
  rocks.castShadow = true;
  rocks.receiveShadow = true;
  group.add(rocks);

  const stackMat = new THREE.MeshStandardMaterial({
    vertexColors: true,
    roughness: 0.93,
    metalness: 0.0,
    flatShading: true,
  });
  const stack = new THREE.Mesh(buildStack(), stackMat);
  stack.castShadow = true;
  stack.receiveShadow = true;
  group.add(stack);

  return {
    group,
    setTime: (t) => {
      extra.uTime.value = t;
    },
  };
}
