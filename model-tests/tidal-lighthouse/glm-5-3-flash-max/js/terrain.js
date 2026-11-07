// terrain.js — island top surface with painted cover, cutaway strata skirt,
// boulders, shelf rocks, grass tufts, flowers, seagrass, underwater stones
import * as THREE from 'three';
import {
  CFG, slabR, coastR, terrainHeight, shelterAt, shelfRockPos, SHELF_ROCKS,
  fbm, rnd, sstep, clamp, mix, polar, GLSL_NOISE,
} from './world.js';

const C = (h) => new THREE.Color(h);
const scratch = new THREE.Color(), scratch2 = new THREE.Color();

function noiseTexture(size, lo, hi, seed) {
  const cv = document.createElement('canvas');
  cv.width = cv.height = size;
  const g = cv.getContext('2d');
  const img = g.createImageData(size, size);
  const n = makeNoise(seed);
  for (let i = 0; i < size * size; i++) {
    const v = 255 * mix(lo, hi, n() );
    img.data[i * 4] = img.data[i * 4 + 1] = img.data[i * 4 + 2] = v;
    img.data[i * 4 + 3] = 255;
  }
  g.putImageData(img, 0, 0);
  const t = new THREE.CanvasTexture(cv);
  t.colorSpace = THREE.SRGBColorSpace;
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  return t;
}
function makeNoise(seed) {
  let a = seed >>> 0;
  return () => {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// ---------------- top surface ----------------
export function buildIsland() {
  const SIZE = 60, SEG = 196;
  const geo = new THREE.PlaneGeometry(SIZE, SIZE, SEG, SEG);
  geo.rotateX(-Math.PI / 2);
  const pos = geo.attributes.position;
  const colors = new Float32Array(pos.count * 3);

  for (let i = 0; i < pos.count; i++) {
    let x = pos.getX(i), z = pos.getZ(i);
    const r = Math.hypot(x, z);
    const th = Math.atan2(z, x);
    const rb = slabR(th) - 0.06;
    if (r > rb) { x = Math.cos(th) * rb; z = Math.sin(th) * rb; pos.setX(i, x); pos.setZ(i, z); }
    const h = terrainHeight(x, z);
    pos.setY(i, h);
  }
  geo.computeVertexNormals();

  const cn = C(0x74894d), cg = C(0x55693e), cdry = C(0x99904f);
  const csand = C(0xd9c695), cwet = C(0xb0a077), cru = C(0x8fa39b), cdeep = C(0x647878);
  const crk1 = C(0x7d766e), crk2 = C(0x6b655e), clich = C(0x8a9459);
  const cseag = C(0x2f6349);

  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), z = pos.getZ(i), h = pos.getY(i);
    const n = fbm(x * 0.9 + 13, z * 0.9 + 7, 3) * 0.5 + 0.5;
    const n2 = fbm(x * 2.6 + 4, z * 2.6 + 9, 2) * 0.5 + 0.5;
    const sh = shelterAt(x, z);
    const e = 0.45;
    const hx = terrainHeight(x + e, z) - terrainHeight(x - e, z);
    const hz = terrainHeight(x, z + e) - terrainHeight(x, z - e);
    const slope = Math.hypot(hx, hz) / (2 * e);

    let col;
    if (h < -0.06) { // underwater
      const deep = sstep(h, -1.2, -5.2);
      col = scratch.copy(csand).lerp(cru, 0.45 * deep).lerp(cdeep, 0.4 * sstep(h, -2.5, -6.0));
      if (sh > 0.35 && h > -2.5 && h < -0.4) {
        const pm = sstep(fbm(x * 0.75 + 21, z * 0.75 + 11, 2), 0.10, 0.42);
        col.lerp(cseag, 0.75 * pm);
      }
      col.offsetHSL(0, 0, (n2 - 0.5) * 0.08);
    } else if (h < 0.62) { // beach / wet shelf
      const wet = 1 - sstep(h, 0.03, 0.62);
      col = scratch.copy(csand).lerp(cwet, wet * 0.75);
      const rk = sstep(slope, 0.8, 1.5);
      col.lerp(scratch2.copy(crk1).lerp(crk2, n2), rk * 0.85);
      col.offsetHSL(0, 0, (n2 - 0.5) * 0.06);
    } else { // grass / rock
      col = scratch.copy(cn).lerp(cg, n);
      const dry = sstep(n2, 0.62, 0.9) * (1 - sh * 0.5);
      col.lerp(cdry, 0.6 * dry);
      let rk = sstep(slope, 0.55, 1.1);
      rk = Math.max(rk, sstep(h, 3.9, 6.2));
      const rock = scratch2.copy(crk1).lerp(crk2, n2);
      rock.lerp(clich, 0.5 * sstep(fbm(x * 3.1 + 31, z * 3.1, 2), 0.1, 0.45));
      col.lerp(rock, rk);
      col.offsetHSL(0, 0, (n2 - 0.5) * 0.07);
    }
    colors[i * 3] = col.r; colors[i * 3 + 1] = col.g; colors[i * 3 + 2] = col.b;
  }
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const tex = noiseTexture(128, 0.82, 1.0, 99173);
  tex.repeat.set(14, 14);
  const mat = new THREE.MeshStandardMaterial({
    vertexColors: true, map: tex, roughness: 0.96, metalness: 0,
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.receiveShadow = true;
  mesh.castShadow = true;
  mesh.name = 'island';
  return mesh;
}

// ---------------- cutaway skirt (strata) ----------------
const SKIRT_VERT = /* glsl */`
attribute float aU;
varying vec3 vWorld;
varying vec3 vN;
varying float vU;
void main(){
  vWorld = (modelMatrix * vec4(position, 1.0)).xyz;
  vN = normalize(mat3(modelMatrix) * normal);
  vU = aU;
  gl_Position = projectionMatrix * viewMatrix * vec4(vWorld, 1.0);
}`;

const SKIRT_FRAG = /* glsl */`
uniform vec3 uSunDir, uSunCol, uSkyA, uSkyB;
varying vec3 vWorld;
varying vec3 vN;
varying float vU;
${GLSL_NOISE}
void main(){
  vec3 N = normalize(vN);
  float y = vWorld.y;
  float wob = (vnoise(vec2(vWorld.x*0.5, vWorld.z*0.5)) - 0.5) + (fbm2(vec2(vWorld.x*0.22, y*0.5)) - 0.5)*0.5;
  float yy = y + wob*0.22 + 0.10*sin(vU*31.0 + y*2.2);
  vec3 wet = vec3(0.45,0.44,0.38);
  vec3 algae = vec3(0.38,0.44,0.31);
  vec3 sand1 = vec3(0.76,0.66,0.47), pale = vec3(0.55,0.51,0.42);
  vec3 sed1 = vec3(0.62,0.48,0.30), sed2 = vec3(0.40,0.31,0.22), sed3 = vec3(0.52,0.43,0.33);
  vec3 seam = vec3(0.32,0.27,0.22);
  vec3 rock1 = vec3(0.42,0.41,0.40), rock2 = vec3(0.30,0.32,0.36);
  vec3 base = vec3(0.20,0.22,0.26);
  vec3 c;
  if (yy > -0.55) c = mix(wet, algae, 0.5 + 0.5*sin(yy*9.0 + wob*4.0));
  else if (yy > -1.55) c = mix(sand1, pale, smoothstep(-0.75, -1.55, yy));
  else if (yy > -3.35) {
    float sB = 0.5 + 0.5*sin(yy*7.3);
    c = mix(sed2, sed1, sB);
    c = mix(c, sed3, 0.35*smoothstep(0.4, 0.9, sin(yy*2.3 + 1.2)));
    c *= 1.0 - 0.22*step(0.88, sin(yy*21.0 + wob*6.0));
  } else if (yy > -4.3) {
    c = mix(sand1*1.12, sand1, 0.5 + 0.5*sin(yy*9.0));
    c = mix(c, seam, smoothstep(-4.1, -4.3, yy));
  } else if (yy > -7.2) {
    float sB = 0.5 + 0.5*sin(yy*3.4 + 1.7);
    c = mix(rock2, rock1, sB);
  } else c = base;
  c *= 0.86 + 0.28*vnoise(vWorld.xz*2.6);
  c *= 1.0 - 0.08*smoothstep(0.6, 1.0, sin(yy*40.0 + wob*8.0));
  float dif = clamp(dot(N, uSunDir), 0.0, 1.0);
  vec3 amb = mix(uSkyB, uSkyA, clamp(N.y*0.5 + 0.5, 0.0, 1.0));
  vec3 col = c * (amb*1.05 + uSunCol*dif*0.85);
  // submerged cool shift (kept subtle — the strata must stay readable)
  float uw = smoothstep(0.05, -0.9, y);
  col = mix(col, col*vec3(0.68,0.80,0.83) + vec3(0.008,0.02,0.03), uw*0.5);
  // waterline stain
  col *= 1.0 - 0.30*exp(-pow((y + 0.02)*7.0, 2.0));
  // depth AO
  col *= mix(0.42, 1.0, smoothstep(-9.6, -0.8, y));
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`;

export function buildSkirt(sunDir) {
  const NSEG = 280;
  const R = slabR;
  const verts = [], norms = [], uvs = [], idx = [];
  for (let i = 0; i <= NSEG; i++) {
    const th = i / NSEG * Math.PI * 2;
    const r = R(th) + 0.04;
    const x = Math.cos(th) * r, z = Math.sin(th) * r;
    // wall rises above the waterline so the piece reads as a solid water-block edge
    const top = Math.max(terrainHeight(Math.cos(th) * R(th), Math.sin(th) * R(th)), 0.26);
    verts.push(x, top, z, x, CFG.slabBottom, z);
    const nx = Math.cos(th), nz = Math.sin(th);
    norms.push(nx, 0, nz, nx, 0, nz);
    uvs.push(i / NSEG, i / NSEG);
  }
  for (let i = 0; i < NSEG; i++) {
    const a = i * 2, b = a + 1, c = a + 2, d = a + 3;
    idx.push(a, c, b, b, c, d);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3));
  geo.setAttribute('normal', new THREE.Float32BufferAttribute(norms, 3));
  geo.setAttribute('aU', new THREE.Float32BufferAttribute(uvs, 1));
  geo.setIndex(idx);

  const mat = new THREE.ShaderMaterial({
    uniforms: {
      uSunDir: { value: sunDir.clone() },
      uSunCol: { value: new THREE.Color(0xffd9a8) },
      uSkyA: { value: new THREE.Color(0xf2e3ca) },
      uSkyB: { value: new THREE.Color(0x9fb4c4) },
    },
    vertexShader: SKIRT_VERT, fragmentShader: SKIRT_FRAG,
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.name = 'skirt';

  const capGeo = new THREE.CircleGeometry(SLAB_CAP_R, 64);
  capGeo.rotateX(Math.PI / 2);
  const cap = new THREE.Mesh(capGeo, new THREE.MeshStandardMaterial({ color: 0x3a4149, roughness: 1 }));
  cap.position.y = CFG.slabBottom;
  const grp = new THREE.Group();
  grp.add(mesh, cap);
  return grp;
}
const SLAB_CAP_R = (() => {
  let m = 0;
  for (let i = 0; i < 360; i++) m = Math.max(m, slabR(i / 360 * Math.PI * 2));
  return m;
})();

// ---------------- boulders ----------------
export function buildRocks() {
  const grp = new THREE.Group();
  const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.95 });
  const cn = C(0x565b60), cl = C(0x8a9464), cw = C(0x777d80);

  function boulder(sx, sy, sz, seed) {
    const geo = new THREE.IcosahedronGeometry(1, 2);
    const p = geo.attributes.position;
    const nz = makeNoise(seed);
    const pts = [];
    for (let i = 0; i < p.count; i++) {
      const v = new THREE.Vector3().fromBufferAttribute(p, i);
      const key = `${v.x.toFixed(3)},${v.y.toFixed(3)},${v.z.toFixed(3)}`;
      let d = pts.find(o => o.k === key);
      if (!d) { d = { k: key, n: nz() * 2 - 1 }; pts.push(d); }
      v.multiplyScalar(1 + 0.28 * d.n);
      p.setXYZ(i, v.x, v.y, v.z);
    }
    geo.computeVertexNormals();
    const cols = new Float32Array(p.count * 3);
    const tmp = new THREE.Color();
    for (let i = 0; i < p.count; i++) {
      const y = p.getY(i);
      const n = makeNoise(seed + i)();
      tmp.copy(cn).lerp(cw, n * 0.5);
      tmp.lerp(cl, sstep(y, 0.1, 0.85) * 0.55);
      cols[i * 3] = tmp.r; cols[i * 3 + 1] = tmp.g; cols[i * 3 + 2] = tmp.b;
    }
    geo.setAttribute('color', new THREE.BufferAttribute(cols, 3));
    const m = new THREE.Mesh(geo, mat);
    m.scale.set(sx, sy, sz);
    return m;
  }

  // cliff-base boulders + knoll rocks (above water, exposed side)
  let placed = 0, tries = 0;
  while (placed < 26 && tries < 900) {
    tries++;
    const th = CFG.openAngle + (rnd() - 0.5) * 2.6;
    const r = coastR(th) - rnd() * 2.2;
    const [x, z] = polar(th, r);
    const h = terrainHeight(x, z);
    if (h < 0.15 || h > 3.4) continue;
    const s = 0.28 + rnd() * 0.9;
    const m = boulder(s * (0.8 + rnd() * 0.5), s * (0.55 + rnd() * 0.4), s * (0.8 + rnd() * 0.5), 100 + placed);
    m.position.set(x, h - s * 0.35, z);
    m.rotation.y = rnd() * Math.PI * 2;
    m.castShadow = true;
    m.receiveShadow = true;
    grp.add(m);
    placed++;
  }
  // lighthouse knoll rocks
  for (let i = 0; i < 8; i++) {
    const a = rnd() * Math.PI * 2, rr = rnd() * 3.4;
    const x = CFG.lightP[0] + Math.cos(a) * rr, z = CFG.lightP[1] + Math.sin(a) * rr;
    const h = terrainHeight(x, z);
    if (h < 1.5) continue;
    const s = 0.22 + rnd() * 0.5;
    const m = boulder(s, s * 0.7, s * 0.9, 300 + i);
    m.position.set(x, h - s * 0.3, z);
    m.rotation.y = rnd() * Math.PI * 2;
    m.castShadow = true;
    grp.add(m);
  }
  // half-sunk shelf rocks (match heightmap bumps -> foam rings)
  for (let i = 0; i < SHELF_ROCKS.length; i++) {
    const sr = SHELF_ROCKS[i];
    const [x, z] = shelfRockPos(sr);
    const h = terrainHeight(x, z);
    const s = 0.75 + rnd() * 0.35;
    const m = boulder(s * 1.15, s * 0.75, s, 400 + i);
    m.position.set(x, h - 0.32, z);
    m.rotation.y = rnd() * Math.PI * 2;
    m.castShadow = true;
    grp.add(m);
  }
  // harbor stones (visible through clear water)
  let hs = 0, ht = 0;
  while (hs < 16 && ht < 600) {
    ht++;
    const th = CFG.harborAngle + (rnd() - 0.5) * 1.4;
    const r = coastR(th) + 1.0 + rnd() * 4.5;
    const [x, z] = polar(th, r);
    const h = terrainHeight(x, z);
    if (h > -0.5 || h < -2.4) continue;
    const s = 0.14 + rnd() * 0.3;
    const m = boulder(s, s * 0.6, s * 0.8, 500 + hs);
    m.position.set(x, h - s * 0.15, z);
    m.rotation.y = rnd() * Math.PI * 2;
    grp.add(m);
    hs++;
  }
  return grp;
}

// ---------------- grass & flowers (wind) ----------------
export function makeWindMaterial(baseMat, amp) {
  const uTime = { value: 0 };
  baseMat.onBeforeCompile = (sh) => {
    sh.uniforms.uTime = uTime;
    sh.vertexShader = 'uniform float uTime;\n' + sh.vertexShader.replace(
      '#include <begin_vertex>',
      `#include <begin_vertex>
      {
        float wx = 0.0, wz = 0.0;
        #ifdef USE_INSTANCING
          wx = instanceMatrix[3][0]; wz = instanceMatrix[3][2];
        #endif
        float ph = uTime*1.6 + wx*0.9 + wz*0.7;
        float sway = (sin(ph)*0.6 + sin(ph*2.17 + 1.3)*0.4) * ${amp};
        transformed.x += sway * position.y;
        transformed.z += sway * 0.6 * position.y;
      }`
    );
  };
  baseMat.userData.uTime = uTime;
  return baseMat;
}

function tuftGeometry(height, blades, c0, c1) {
  const pos = [], col = [], idx = [];
  const cBase = C(c0), cTip = C(c1), tmp = new THREE.Color();
  for (let b = 0; b < blades; b++) {
    const a = (b / blades) * Math.PI * 2 + rnd() * 0.8;
    const lean = 0.25 + rnd() * 0.45;
    const w = 0.018 + rnd() * 0.012;
    const h = height * (0.7 + rnd() * 0.6);
    const tx = Math.cos(a) * lean * h, tz = Math.sin(a) * lean * h;
    const mx = tx * 0.45, mz = tz * 0.45, my = h * 0.55;
    const ox = Math.cos(a + Math.PI / 2) * w, oz = Math.sin(a + Math.PI / 2) * w;
    const base = pos.length / 3;
    pos.push(-ox, 0, -oz, ox, 0, oz, mx - ox, my, mz - oz, mx + ox, my, mz + oz, tx, h, tz);
    tmp.copy(cBase).lerp(cTip, 0.25);
    for (let k = 0; k < 4; k++) col.push(tmp.r, tmp.g, tmp.b);
    tmp.copy(cBase).lerp(cTip, 1.0);
    col.push(tmp.r, tmp.g, tmp.b);
    idx.push(base, base + 1, base + 2, base + 1, base + 3, base + 2, base + 2, base + 3, base + 4);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  geo.setIndex(idx);
  geo.computeVertexNormals();
  return geo;
}

export function buildVegetation() {
  const grp = new THREE.Group();

  // coastal grass tufts
  const grassPts = [];
  for (let i = 0; i < 5200 && grassPts.length < 300; i++) {
    const a = rnd() * Math.PI * 2, r = Math.sqrt(rnd()) * 22;
    const [x, z] = polar(a, r);
    const h = terrainHeight(x, z);
    const sh = shelterAt(x, z);
    if (h < 0.85 || h > 4.6) continue;
    if (fbm(x * 0.8 + 3, z * 0.8 + 1, 2) < 0.02) continue;
    if (rnd() > 0.35 + sh * 0.5) continue;
    grassPts.push([x, h, z]);
  }
  const grassGeo = tuftGeometry(0.42, 7, 0x4c5c33, 0x93a352);
  const grassMat = makeWindMaterial(new THREE.MeshStandardMaterial({
    vertexColors: true, roughness: 1, side: THREE.DoubleSide,
  }), 0.34);
  const grass = new THREE.InstancedMesh(grassGeo, grassMat, grassPts.length);
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), s3 = new THREE.Vector3(), p3 = new THREE.Vector3();
  grassPts.forEach(([x, y, z], i) => {
    q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), rnd() * Math.PI * 2);
    const sc = 0.7 + rnd() * 0.8;
    s3.set(sc, sc * (0.8 + rnd() * 0.5), sc);
    p3.set(x, y - 0.03, z);
    m4.compose(p3, q, s3);
    grass.setMatrixAt(i, m4);
  });
  grass.castShadow = true;
  grass.instanceMatrix.needsUpdate = true;
  grp.add(grass);

  // small flowers
  const flowerPts = [];
  for (let i = 0; i < 1600 && flowerPts.length < 26; i++) {
    const a = rnd() * Math.PI * 2, r = Math.sqrt(rnd()) * 20;
    const [x, z] = polar(a, r);
    const h = terrainHeight(x, z);
    if (h < 1.0 || h > 3.6) continue;
    if (rnd() > 0.25) continue;
    flowerPts.push([x, h, z]);
  }
  const fStem = new THREE.CylinderGeometry(0.008, 0.012, 0.3, 4);
  fStem.translate(0, 0.15, 0);
  const fHead = new THREE.SphereGeometry(0.045, 8, 6);
  fHead.translate(0, 0.32, 0);
  const colsA = new Float32Array(fStem.attributes.position.count * 3).fill(1);
  const stemCol = new Float32Array(fStem.attributes.position.count * 3);
  for (let i = 0; i < fStem.attributes.position.count; i++) { stemCol[i * 3] = 0.36; stemCol[i * 3 + 1] = 0.5; stemCol[i * 3 + 2] = 0.28; }
  fStem.setAttribute('color', new THREE.BufferAttribute(stemCol, 3));
  const headCol = new Float32Array(fHead.attributes.position.count * 3).fill(1);
  fHead.setAttribute('color', new THREE.BufferAttribute(headCol, 3));
  const fGeo = mergeGeoms([fStem, fHead]);
  const fMat = makeWindMaterial(new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.9 }), 0.22);
  const flowers = new THREE.InstancedMesh(fGeo, fMat, flowerPts.length);
  const palette = [0xc94f3d, 0xd98ba3, 0xefe6da, 0xe8c86a];
  flowerPts.forEach(([x, y, z], i) => {
    q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), rnd() * Math.PI * 2);
    const sc = 0.8 + rnd() * 0.6;
    s3.set(sc, sc, sc);
    p3.set(x, y - 0.02, z);
    m4.compose(p3, q, s3);
    flowers.setMatrixAt(i, m4);
    flowers.setColorAt(i, C(palette[(rnd() * palette.length) | 0]));
  });
  flowers.castShadow = true;
  grp.add(flowers);

  // underwater seagrass in the harbor shallows
  const sgPts = [];
  for (let i = 0; i < 4200 && sgPts.length < 220; i++) {
    const th = CFG.harborAngle + (rnd() - 0.5) * 1.6;
    const r = coastR(th) + 0.8 + rnd() * 4.6;
    const [x, z] = polar(th, r);
    const h = terrainHeight(x, z);
    if (h > -0.45 || h < -2.3) continue;
    if (fbm(x * 0.75 + 21, z * 0.75 + 11, 2) < 0.08) continue;
    sgPts.push([x, h, z]);
  }
  const sgGeo = tuftGeometry(0.5, 6, 0x27523e, 0x4e8a5e);
  const sgMat = makeWindMaterial(new THREE.MeshStandardMaterial({
    vertexColors: true, roughness: 0.9, side: THREE.DoubleSide,
  }), 0.16);
  const seag = new THREE.InstancedMesh(sgGeo, sgMat, sgPts.length);
  sgPts.forEach(([x, y, z], i) => {
    q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), rnd() * Math.PI * 2);
    const sc = 0.8 + rnd() * 0.7;
    s3.set(sc, sc * (0.8 + rnd() * 0.6), sc);
    p3.set(x, y - 0.04, z);
    m4.compose(p3, q, s3);
    seag.setMatrixAt(i, m4);
  });
  grp.add(seag);

  grp.userData.uTimeMats = [grassMat, fMat, sgMat];
  return grp;
}

// tiny helper: merge position/color/index of two geometries (same attrs)
function mergeGeoms(list) {
  let vc = 0, ic = 0;
  for (const g of list) { vc += g.attributes.position.count; ic += g.index.count; }
  const pos = new Float32Array(vc * 3), col = new Float32Array(vc * 3);
  const idx = new Uint16Array(ic);
  let vo = 0, io = 0;
  for (const g of list) {
    pos.set(g.attributes.position.array, vo * 3);
    col.set(g.attributes.color.array, vo * 3);
    const gi = g.index.array;
    for (let i = 0; i < gi.length; i++) idx[io + i] = gi[i] + vo;
    vo += g.attributes.position.count;
    io += gi.length;
  }
  const out = new THREE.BufferGeometry();
  out.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  out.setAttribute('color', new THREE.BufferAttribute(col, 3));
  out.setIndex(new THREE.BufferAttribute(idx, 1));
  out.computeVertexNormals();
  return out;
}
