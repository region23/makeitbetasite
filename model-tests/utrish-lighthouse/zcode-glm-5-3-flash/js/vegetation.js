// Vegetation: dry grass tufts (wind-animated), junipers on the cape's cliff edges,
// sparse Pitsunda pines on the ridges, tiny wildflowers in crevices.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { H, mainlandField, islandField, spitField, VILLAGE, insideSlab, islandAxisT } from './geo.js';
import { mulberry, clamp, fbm } from './util.js';

const GRASS_VERT = /* glsl */`
  attribute float aPhase;
  attribute vec3 aColor;
  uniform float uTime;
  varying vec3 vColor;
  varying float vShade;
  void main(){
    vColor = aColor;
    vec3 p = position;
    float bend = pow(clamp(p.y / 0.55, 0.0, 1.0), 1.6);
    float sway = sin(uTime * 1.9 + aPhase + position.x * 0.35 + position.z * 0.3)
               + 0.5 * sin(uTime * 3.7 + aPhase * 1.7);
    p.x += sway * 0.16 * bend;
    p.z += sway * 0.10 * bend;
    vShade = 0.55 + 0.45 * clamp(p.y / 0.55, 0.0, 1.0);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
  }`;
const GRASS_FRAG = /* glsl */`
  varying vec3 vColor; varying float vShade;
  void main(){ gl_FragColor = vec4(vColor * vShade, 1.0); }`;

export function buildVegetation() {
  const group = new THREE.Group();
  const rnd = mulberry(2024);
  addGrass(group, rnd);
  addFlowers(group, rnd);
  addJunipers(group, rnd);
  addPines(group, rnd);
  return group;
}

function addGrass(group, rnd) {
  // tuft = two crossed quads; ~1500 tufts on island top, spit, cape slopes
  const positions = [], colors = [], phases = [];
  const quad = (cx, cy, cz, w, h, ry, phase, col) => {
    const ca = Math.cos(ry), sa = Math.sin(ry);
    const pts = [[-w / 2, 0], [w / 2, 0], [w / 2, h], [-w / 2, h]];
    const vs = pts.map(([px, py]) => [
      cx + px * ca, cy + py, cz + px * sa,
    ]);
    const idxs = [0, 1, 2, 0, 2, 3];
    for (const i of idxs) {
      positions.push(vs[i][0], vs[i][1], vs[i][2]);
      colors.push(col[0], col[1], col[2]);
      phases.push(phase);
    }
  };
  const palette = [
    [0.60, 0.55, 0.38], [0.66, 0.60, 0.41], [0.52, 0.48, 0.33],
    [0.57, 0.52, 0.35], [0.48, 0.45, 0.31],
  ];
  let placed = 0, guard = 0;
  while (placed < 1600 && guard++ < 11000) {
    const x = (rnd() * 2 - 1) * 380;
    const z = (rnd() * 2 - 1) * 280;
    if (!insideSlab(x, z, 8)) continue;
    const onIsland = islandField(x, z) < -2.5;
    const onSpit = spitField(x, z) < -1.5;
    const onCape = mainlandField(x, z) < -6;
    if (!onIsland && !onSpit && !onCape) continue;
    const y = H(x, z);
    if (y < 0.7 || y > 26) continue;
    // clump into patches
    if (fbm(x * 0.02, z * 0.02, 3) < 0.04) continue;
    // skip village terrace core & plaza
    if (Math.abs(x - VILLAGE.x) < VILLAGE.w / 2 && Math.abs(z - VILLAGE.z) < VILLAGE.h / 2) continue;
    if (Math.hypot(x - 42, z + 56) < 10) continue;
    // a tuft: four crossed quads fanned around the centre
    const baseA = rnd() * Math.PI;
    for (let k = 0; k < 4; k++) {
      const ox = x + (rnd() - 0.5) * 0.7, oz = z + (rnd() - 0.5) * 0.7;
      const oy = H(ox, oz);
      if (oy < 0.6) continue;
      // keep off steep cliffs
      const sl = Math.abs(H(ox + 1, oz) - H(ox - 1, oz)) * 0.5 + Math.abs(H(ox, oz + 1) - H(ox, oz - 1)) * 0.5;
      if (sl > 0.9) continue;
      const h = 0.22 + rnd() * 0.38;
      const col = palette[(rnd() * palette.length) | 0];
      const a = baseA + k * Math.PI / 2 + (rnd() - 0.5) * 0.5;
      quad(ox, oy - 0.04, oz, 0.24 + rnd() * 0.18, h, a, rnd() * 20, col);
    }
    placed++;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute('aColor', new THREE.Float32BufferAttribute(colors, 3));
  geo.setAttribute('aPhase', new THREE.Float32BufferAttribute(phases, 1));
  const mat = new THREE.ShaderMaterial({
    uniforms: { uTime: { value: 0 } },
    vertexShader: GRASS_VERT, fragmentShader: GRASS_FRAG,
    side: THREE.DoubleSide,
  });
  const grass = new THREE.Mesh(geo, mat);
  grass.frustumCulled = false;
  group.add(grass);
  group.userData.grassMat = mat;
}

function addFlowers(group, rnd) {
  const positions = [], colors = [];
  const palette = [[1.0, 0.85, 0.3], [1.0, 0.95, 0.9], [0.95, 0.6, 0.75]];
  let placed = 0, guard = 0;
  while (placed < 170 && guard++ < 4000) {
    const x = -120 + rnd() * 220, z = -100 + rnd() * 170;
    if (islandField(x, z) > -0.5 && spitField(x, z) > -0.5) continue;
    const y = H(x, z);
    if (y < 1.2 || y > 45) continue;
    const c = palette[(rnd() * palette.length) | 0];
    const s = 0.05 + rnd() * 0.05;
    const a = rnd() * Math.PI;
    positions.push(
      x - Math.cos(a) * s, y + 0.12, z - Math.sin(a) * s,
      x + Math.cos(a) * s, y + 0.12, z + Math.sin(a) * s,
      x + Math.sin(a) * s, y + 0.12 + s * 0.6, z - Math.cos(a) * s,
    );
    for (let i = 0; i < 3; i++) colors.push(c[0], c[1], c[2]);
    placed++;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  const mat = new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.DoubleSide });
  const fl = new THREE.Mesh(geo, mat);
  fl.frustumCulled = false;
  group.add(fl);
}

function juniperGeo(rnd, scale) {
  const blobs = [];
  const n = 3 + (rnd() * 2 | 0);
  for (let i = 0; i < n; i++) {
    const g = new THREE.IcosahedronGeometry(1, 1);
    const p = g.attributes.position;
    for (let v = 0; v < p.count; v++) {
      const j = 0.82 + rnd() * 0.4;
      p.setXYZ(v, p.getX(v) * j, p.getY(v) * j * (0.75 + rnd() * 0.2), p.getZ(v) * j);
    }
    g.computeVertexNormals();
    const off = i === 0 ? [0, 0, 0] : [(rnd() - 0.5) * 2.2, rnd() * 1.2, (rnd() - 0.5) * 2.2];
    g.translate(off[0], off[1] + 0.4, off[2]);
    g.scale(scale * (0.8 + rnd() * 0.4), scale * (0.65 + rnd() * 0.35), scale * (0.8 + rnd() * 0.4));
    blobs.push(g);
  }
  const trunk = new THREE.CylinderGeometry(0.10, 0.16, 1.6, 6).toNonIndexed();
  trunk.translate(0, 0.3, 0);
  trunk.scale(scale * 0.9, scale, scale * 0.9);
  blobs.push(trunk);
  const merged = mergeGeometries(blobs);
  return merged;
}

function addJunipers(group, rnd) {
  const foliageMat = new THREE.MeshStandardMaterial({ color: 0x415e3d, roughness: 0.95, flatShading: true });
  const trunkMat = new THREE.MeshStandardMaterial({ color: 0x54412d, roughness: 1 });
  let placed = 0, guard = 0;
  while (placed < 60 && guard++ < 4000) {
    // mostly on the cape (including cliff edges), a few on the island top
    let x, z, lean = 0;
    if (rnd() < 0.82) {
      x = 95 + rnd() * 240; z = -270 + rnd() * 480;
      const d = mainlandField(x, z);
      if (d > -1.2) continue;
      if (d > -9) lean = (rnd() - 0.3) * 0.5; // clinging to the edge
    } else {
      x = -60 + rnd() * 130; z = -90 + rnd() * 120;
      if (islandField(x, z) > -4) continue;
    }
    const y = H(x, z);
    if (y < 1.5 || y > 75) continue;
    if (Math.abs(x - VILLAGE.x) < VILLAGE.w / 2 + 4 && Math.abs(z - VILLAGE.z) < VILLAGE.h / 2 + 4) continue;
    if (Math.hypot(x - 42, z + 56) < 11) continue;
    const s = 0.7 + rnd() * 1.7;
    const tree = new THREE.Group();
    const foliage = new THREE.Mesh(juniperGeo(rnd, s), foliageMat);
    foliage.position.y = 0.7 * s;
    foliage.castShadow = true;
    tree.add(foliage);
    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.09 * s, 0.14 * s, 1.4 * s, 6), trunkMat);
    trunk.position.y = 0.5 * s;
    trunk.castShadow = true;
    tree.add(trunk);
    tree.position.set(x, y - 0.1, z);
    tree.rotation.z = lean;
    tree.rotation.y = rnd() * Math.PI * 2;
    tree.userData.swayPhase = rnd() * 10;
    tree.userData.swayAmp = 0.012 + rnd() * 0.02;
    group.add(tree);
    placed++;
  }
  group.userData.junipers = group.children.filter((c) => c.isGroup && c.userData.swayPhase !== undefined);
}

function addPines(group, rnd) {
  const trunkMat = new THREE.MeshStandardMaterial({ color: 0x584634, roughness: 1 });
  const needleMat = new THREE.MeshStandardMaterial({ color: 0x24402c, roughness: 0.95, flatShading: true });
  let placed = 0, guard = 0;
  while (placed < 26 && guard++ < 2500) {
    const x = 120 + rnd() * 260, z = -280 + rnd() * 540;
    if (mainlandField(x, z) > -40 || mainlandField(x, z) < -260) continue;
    const y = H(x, z);
    if (y < 22 || y > 95) continue;
    const s = 1.6 + rnd() * 1.6;
    const tree = new THREE.Group();
    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.14 * s, 0.22 * s, 2.2 * s, 6), trunkMat);
    trunk.position.y = 1.1 * s; trunk.castShadow = true;
    tree.add(trunk);
    let cy = 1.6 * s;
    for (let i = 0; i < 3; i++) {
      const cone = new THREE.Mesh(new THREE.ConeGeometry((1.5 - i * 0.38) * s, 2.4 * s, 8), needleMat);
      cone.position.y = cy + 1.1 * s;
      cone.castShadow = true;
      tree.add(cone);
      cy += 1.35 * s;
    }
    tree.position.set(x, y - 0.2, z);
    tree.rotation.y = rnd() * Math.PI * 2;
    tree.rotation.z = (rnd() - 0.5) * 0.08;
    group.add(tree);
    placed++;
  }
}

// per-frame
export function updateVegetation(group, t) {
  if (group.userData.grassMat) group.userData.grassMat.uniforms.uTime.value = t;
  for (const j of group.userData.junipers || []) {
    j.rotation.x = Math.sin(t * 1.15 + j.userData.swayPhase) * j.userData.swayAmp;
    j.rotation.z += Math.sin(t * 0.9 + j.userData.swayPhase * 1.3) * 0.0004;
  }
}
