// island.js — the diorama body: terrain, cutaway strata wall, base plate,
// rocks, sand, seagrass, coastal grasses and flowers.

import * as THREE from 'three';
import {
  heightAt, slopeAt, landRadius, slabRadius, harborMask,
  slabBounds, SLAB_BOTTOM, HEADLAND, HARBOR, mulberry32, sstep,
} from './terrain.js';

// ---------------- procedural canvas textures ----------------
export function canvasTexture(w, h, draw, { repeat, srgb = true } = {}) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  if (repeat) t.repeat.set(repeat[0], repeat[1]);
  t.anisotropy = 4;
  return t;
}

function speckle(ctx, w, h, n, rng, color, aMax, rMax = 1.4) {
  for (let i = 0; i < n; i++) {
    ctx.fillStyle = color;
    ctx.globalAlpha = rng() * aMax;
    const r = 0.4 + rng() * rMax;
    ctx.fillRect(rng() * w, rng() * h, r, r);
  }
  ctx.globalAlpha = 1;
}

function grainTexture() {
  return canvasTexture(256, 256, (ctx, w, h) => {
    const rng = mulberry32(7);
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, w, h);
    for (let i = 0; i < 5200; i++) {
      const g = 200 + Math.floor(rng() * 55);
      ctx.fillStyle = `rgb(${g},${g},${g})`;
      ctx.globalAlpha = 0.35;
      ctx.fillRect(rng() * w, rng() * h, 1.4, 1.4);
    }
    ctx.globalAlpha = 1;
  }, { repeat: [9, 9] });
}

function strataTexture() {
  return canvasTexture(1024, 512, (ctx, w, h) => {
    const rng = mulberry32(41);
    // bands: [v0, v1, color] top (just under the water line) -> bottom
    const band = [
      [0.00, 0.07, '#6e675b'],
      [0.07, 0.17, '#8d8474'],
      [0.17, 0.30, '#b3a284'],
      [0.30, 0.47, '#857c6c'],
      [0.47, 0.60, '#bfae8f'],
      [0.60, 0.78, '#6f6659'],
      [0.78, 1.00, '#5a544d'],
    ];
    for (const [v0, v1, col] of band) {
      ctx.fillStyle = col;
      ctx.beginPath();
      ctx.moveTo(0, v0 * h);
      for (let x = 0; x <= w; x += 8) {
        const wobble = Math.sin(x * 0.012 + v0 * 21) * 4 + Math.sin(x * 0.033 + v0 * 47) * 2.5;
        ctx.lineTo(x, v0 * h + wobble);
      }
      ctx.lineTo(w, v1 * h + 10);
      ctx.lineTo(0, v1 * h + 10);
      ctx.closePath();
      ctx.fill();
    }
    // horizontal streaks
    for (let i = 0; i < 160; i++) {
      ctx.fillStyle = rng() > 0.5 ? 'rgba(30,26,20,0.10)' : 'rgba(235,225,200,0.07)';
      const y = rng() * h, len = 40 + rng() * 220;
      ctx.fillRect(rng() * w, y, len, 1 + rng() * 2);
    }
    // embedded pebbles
    for (let i = 0; i < 240; i++) {
      ctx.fillStyle = 'rgba(40,36,30,0.28)';
      ctx.beginPath();
      ctx.ellipse(rng() * w, rng() * h, 1.5 + rng() * 4, 1 + rng() * 3, rng() * 3, 0, Math.PI * 2);
      ctx.fill();
    }
    // soft darkening toward the bottom
    const g = ctx.createLinearGradient(0, h * 0.5, 0, h);
    g.addColorStop(0, 'rgba(0,0,0,0)');
    g.addColorStop(1, 'rgba(10,10,14,0.30)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
    speckle(ctx, w, h, 9000, rng, 'rgba(255,250,235,0.05)', 0.5);
  });
}

// ---------------- terrain mesh ----------------
const ZONES = {
  sand: new THREE.Color('#e2cda2'),
  grass: new THREE.Color('#7c9250'),
  grassLight: new THREE.Color('#93a65e'),
  rock: new THREE.Color('#8d8578'),
  rockDark: new THREE.Color('#6f675c'),
  seabedSand: new THREE.Color('#c9b283'),
  seabedRock: new THREE.Color('#8a8170'),
  seabedDeep: new THREE.Color('#545047'),
  seabedBlue: new THREE.Color('#4d6069'),
};

function buildTerrainMesh() {
  const ANG = 240, RAD = 132;
  const b = slabBounds();
  const bw = b.x1 - b.x0, bh = b.z1 - b.z0;
  const rng = mulberry32(99);
  const noise = new Float32Array((ANG + 1) * (RAD + 1));
  for (let i = 0; i < noise.length; i++) noise[i] = rng();

  const positions = new Float32Array((ANG + 1) * (RAD + 1) * 3);
  const colors = new Float32Array((ANG + 1) * (RAD + 1) * 3);
  const uvs = new Float32Array((ANG + 1) * (RAD + 1) * 2);
  const index = [];

  let k = 0, u = 0;
  for (let i = 0; i <= ANG; i++) {
    const a = (i / ANG) * Math.PI * 2;
    const cb = Math.cos(a), sb = Math.sin(a);
    for (let j = 0; j <= RAD; j++) {
      const r = (j / RAD) * slabRadius(a);
      const x = r * cb, z = r * sb;
      const h = heightAt(x, z);
      const G = harborMask(x, z);

      const c = new THREE.Color();
      const slopeCoarse = slopeAt(x, z, 1.35);
      if (h >= 0) {
        // land
        const sandBand = 1 - sstep(0.0, 0.6, h);
        const grassOn = sstep(0.45, 1.05, h) * (1 - sstep(0.7, 1.25, slopeCoarse));
        const rockOn = Math.max(sstep(1.0, 1.7, slopeCoarse), sstep(5.6, 7.6, h));
        c.copy(ZONES.sand);
        c.lerp(ZONES.grass, grassOn);
        c.lerp(ZONES.grassLight, grassOn * 0.45 * (0.5 + 0.5 * noise[i * (RAD + 1) + j]));
        c.lerp(ZONES.rock, rockOn * 0.85);
        c.lerp(ZONES.rockDark, sstep(6.6, 8.6, h) * 0.55 + rockOn * sstep(1.4, 2.2, slopeCoarse) * 0.3);
        c.lerp(ZONES.sand, sandBand * (1 - rockOn) * 0.9);
      } else {
        // seabed
        const d = -h;
        c.copy(ZONES.seabedRock);
        c.lerp(ZONES.seabedSand, 1 - sstep(0.2, 1.8, d));
        c.lerp(ZONES.seabedDeep, sstep(3.4, 6.5, d));
        c.lerp(ZONES.seabedBlue, sstep(4.6, 7.0, d) * 0.55);
        c.lerp(ZONES.seabedSand, G * (1 - sstep(0.8, 2.4, d)) * 0.75); // harbor sand
        c.lerp(new THREE.Color('#b3a077'), (1 - sstep(0.12, 0.6, d)) * 0.5);
      }
      // organic variation
      const v = 0.93 + noise[i * (RAD + 1) + j] * 0.14;
      c.multiplyScalar(v);

      positions[k++] = x; positions[k++] = h; positions[k++] = z;
      colors[k - 3] = c.r; colors[k - 2] = c.g; colors[k - 1] = c.b;
      uvs[u++] = (x - b.x0) / bw;
      uvs[u++] = (z - b.z0) / bh;
    }
  }
  for (let i = 0; i < ANG; i++) {
    for (let j = 0; j < RAD; j++) {
      // quad corners: (i,j) (i+1,j) (i,j+1) (i+1,j+1); vertex stride to the
      // next radius ring is 1 (j is the inner loop), to the next angle is RAD+1.
      const a = i * (RAD + 1) + j;
      const bIdx = (i + 1) * (RAD + 1) + j;
      index.push(a, bIdx, a + 1, bIdx, bIdx + 1, a + 1);
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  geo.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
  geo.setIndex(index);
  geo.computeVertexNormals();
  const mat = new THREE.MeshStandardMaterial({
    vertexColors: true,
    map: grainTexture(),
    roughness: 0.96,
    metalness: 0.0,
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

// ---------------- cutaway wall + base + rim ----------------
function buildWall() {
  const ANG = 240;
  const rng = mulberry32(5);
  // cumulative arclength for UVs
  let total = 0;
  const per = new Float32Array(ANG);
  let prev = null;
  for (let i = 0; i < ANG; i++) {
    const a = (i / ANG) * Math.PI * 2;
    const r = slabRadius(a);
    const p = new THREE.Vector2(r * Math.cos(a), r * Math.sin(a));
    if (prev) total += p.distanceTo(prev);
    prev = p;
    per[i] = total;
  }
  const positions = new Float32Array(ANG * 2 * 3);
  const uvs = new Float32Array(ANG * 2 * 2);
  const colors = new Float32Array(ANG * 2 * 3);
  const index = [];
  for (let i = 0; i < ANG; i++) {
    const a = (i / ANG) * Math.PI * 2;
    const r = slabRadius(a);
    const x = r * Math.cos(a), z = r * Math.sin(a);
    const u = per[i] / total;
    positions[i * 6 + 0] = x; positions[i * 6 + 1] = 0; positions[i * 6 + 2] = z;
    positions[i * 6 + 3] = x; positions[i * 6 + 4] = SLAB_BOTTOM; positions[i * 6 + 5] = z;
    uvs[i * 4 + 0] = u; uvs[i * 4 + 1] = 0;
    uvs[i * 4 + 2] = u; uvs[i * 4 + 3] = 1;
    const shade = 0.94 + rng() * 0.1;
    for (let q = 0; q < 2; q++) { colors[i * 6 + q * 3 + 0] = shade; colors[i * 6 + q * 3 + 1] = shade; colors[i * 6 + q * 3 + 2] = shade; }
  }
  for (let i = 0; i < ANG; i++) {
    const n = (i + 1) % ANG;
    const a = i * 2, b = n * 2;
    index.push(a, a + 1, b, b, a + 1, b + 1);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geo.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  geo.setIndex(index);
  geo.computeVertexNormals();
  const mat = new THREE.MeshStandardMaterial({
    map: strataTexture(),
    vertexColors: true,
    roughness: 0.95,
    side: THREE.DoubleSide,
  });
  return new THREE.Mesh(geo, mat);
}

function blobShape(offset, segments = 120) {
  const shape = new THREE.Shape();
  for (let i = 0; i <= segments; i++) {
    const a = (i / segments) * Math.PI * 2;
    const r = slabRadius(a) + offset;
    const x = r * Math.cos(a), y = r * Math.sin(a);
    if (i === 0) shape.moveTo(x, y); else shape.lineTo(x, y);
  }
  shape.closePath();
  return shape;
}

function buildBaseAndRim(scene) {
  // base plate
  const baseShape = blobShape(-0.05);
  const baseGeo = new THREE.ShapeGeometry(baseShape, 4);
  baseGeo.rotateX(-Math.PI / 2);
  baseGeo.translate(0, SLAB_BOTTOM, 0);
  const base = new THREE.Mesh(baseGeo, new THREE.MeshStandardMaterial({ color: 0x3d3830, roughness: 1 }));
  base.receiveShadow = true;
  scene.add(base);

  // display rim (lip) around the water line
  const rimShape = blobShape(0.10);
  const holePts = [];
  for (let i = 0; i <= 120; i++) {
    const a = (i / 120) * Math.PI * 2;
    const r = slabRadius(a) - 0.24;
    holePts.push(new THREE.Vector2(r * Math.cos(a), r * Math.sin(a)));
  }
  const hole = new THREE.Path();
  holePts.forEach((p, i) => (i === 0 ? hole.moveTo(p.x, p.y) : hole.lineTo(p.x, p.y)));
  hole.closePath();
  rimShape.holes.push(hole);
  const rimGeo = new THREE.ExtrudeGeometry(rimShape, { depth: 0.16, bevelEnabled: false, curveSegments: 4 });
  rimGeo.rotateX(-Math.PI / 2);
  rimGeo.translate(0, 0.0, 0);
  const rim = new THREE.Mesh(rimGeo, new THREE.MeshStandardMaterial({ color: 0x4a4237, roughness: 0.9 }));
  rim.castShadow = true;
  rim.receiveShadow = true;
  scene.add(rim);

  // soft contact shadow under the piece
  const shadowTex = canvasTexture(256, 256, (ctx, w, h) => {
    const g = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w / 2);
    g.addColorStop(0, 'rgba(52,44,34,0.42)');
    g.addColorStop(0.55, 'rgba(52,44,34,0.22)');
    g.addColorStop(1, 'rgba(52,44,34,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
  });
  const b = slabBounds();
  const sh = new THREE.Mesh(
    new THREE.PlaneGeometry((b.x1 - b.x0) * 1.55, (b.z1 - b.z0) * 1.5),
    new THREE.MeshBasicMaterial({ map: shadowTex, transparent: true, depthWrite: false })
  );
  sh.rotation.x = -Math.PI / 2;
  sh.position.set((b.x0 + b.x1) / 2, SLAB_BOTTOM - 0.04, (b.z0 + b.z1) / 2);
  sh.renderOrder = -1;
  scene.add(sh);
}

// ---------------- vegetation (instanced, wind-swayed) ----------------
export function makeBladeGeometry(h = 1) {
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array([
    -0.035, 0, 0,   0.035, 0, 0,   0.014, h * 0.55, 0.018,  -0.004, h * 0.55, -0.012,   0, h, 0.045,
  ]), 3));
  geo.setAttribute('color', new THREE.BufferAttribute(new Float32Array([
    0.78, 0.78, 0.75,  0.78, 0.78, 0.75,  0.92, 0.92, 0.80,  0.92, 0.92, 0.80,  1.0, 1.0, 0.88,
  ]), 3));
  geo.setIndex([0, 1, 3, 1, 2, 3, 3, 2, 4]);
  geo.computeVertexNormals();
  return geo;
}

function injectWind(material, windUniform) {
  material.onBeforeCompile = (shader) => {
    shader.uniforms.uWTime = windUniform;
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nuniform float uWTime;')
      .replace('#include <begin_vertex>', /* glsl */ `
        #include <begin_vertex>
        #ifdef USE_INSTANCING
          vec4 wpos = instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);
          float sway = sin(uWTime * 1.55 + wpos.x * 0.42 + wpos.z * 0.57) * 0.5
                     + sin(uWTime * 2.35 + wpos.z * 0.93 + wpos.x * 0.2) * 0.32;
          transformed.xz += vec2(sway, sway * 0.55) * position.y;
        #endif
      `);
  };
  material.customProgramCacheKey = () => 'wind';
  return material;
}

function scatterRng(rng, count, test, place) {
  let placed = 0, guard = 0;
  while (placed < count && guard < count * 40) {
    guard++;
    const a = rng() * Math.PI * 2;
    const r = Math.sqrt(rng());
    const x = Math.cos(a) * r * 22, z = Math.sin(a) * r * 22;
    if (!test(x, z)) continue;
    place(x, z, heightAt(x, z));
    placed++;
  }
  return placed;
}

export function buildIsland(scene) {
  const rng = mulberry32(20260107);
  scene.add(buildTerrainMesh());
  scene.add(buildWall());
  buildBaseAndRim(scene);

  // ---- rocks ----
  const rockGeo = new THREE.IcosahedronGeometry(1, 0);
  const rockMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.92, flatShading: true });
  const rockCount = 150;
  const rocks = new THREE.InstancedMesh(rockGeo, rockMat, rockCount);
  let ri = 0;
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), p = new THREE.Vector3();
  const rockColor = new THREE.Color();
  const placeRock = (x, z, h, minS, maxS) => {
    if (ri >= rockCount) return;
    p.set(x, h - 0.06, z);
    q.setFromEuler(new THREE.Euler(rng() * 3, rng() * 3, rng() * 3));
    const sc = minS + rng() * (maxS - minS);
    s.set(sc * (0.8 + rng() * 0.5), sc * (0.6 + rng() * 0.5), sc * (0.8 + rng() * 0.5));
    m4.compose(p, q, s);
    rocks.setMatrixAt(ri, m4);
    rockColor.setHSL(0.09 + rng() * 0.03, 0.10 + rng() * 0.08, 0.42 + rng() * 0.16);
    rocks.setColorAt(ri, rockColor);
    ri++;
  };
  scatterRng(rng, 70, (x, z) => {
    const h = heightAt(x, z);
    return h > -1.15 && h < 1.5 && slopeAt(x, z) < 1.6;
  }, (x, z, h) => placeRock(x, z, h, 0.16, 0.55));
  // headland cluster
  for (let i = 0; i < 14; i++) {
    const a = rng() * Math.PI * 2, r = 2.6 + rng() * 1.8;
    const x = HEADLAND.x + Math.cos(a) * r, z = HEADLAND.z + Math.sin(a) * r;
    placeRock(x, z, heightAt(x, z), 0.22, 0.5);
  }
  // harbor underwater stones (revealed through the clear water)
  scatterRng(rng, 20, (x, z) => {
    const h = heightAt(x, z);
    return h < -0.85 && h > -2.6 && harborMask(x, z) > 0.45;
  }, (x, z, h) => placeRock(x, z, h + 0.10, 0.16, 0.5));
  rocks.count = ri;
  rocks.castShadow = true;
  rocks.receiveShadow = true;
  scene.add(rocks);

  // ---- coastal grasses ----
  const windUniform = { value: 0 };
  const bladeGeo = makeBladeGeometry(1);
  const grassMat = injectWind(
    new THREE.MeshStandardMaterial({
      vertexColors: true, side: THREE.DoubleSide, roughness: 0.85,
      color: 0x87a056,
    }), windUniform);
  const grassCount = 460;
  const grass = new THREE.InstancedMesh(bladeGeo, grassMat, grassCount);
  const gColor = new THREE.Color();
  let gi = 0;
  scatterRng(rng, grassCount, (x, z) => {
    const h = heightAt(x, z);
    if (h < 0.55 || slopeAt(x, z) > 0.55) return false;
    if (harborMask(x, z) > 0.3) return false;
    if (Math.hypot(x - HEADLAND.x, z - HEADLAND.z) < 4.2) return false;
    if (Math.hypot(x - HARBOR.x, z - HARBOR.z) < 5.0) return false;
    return true;
  }, (x, z, h) => {
    if (gi >= grassCount) return;
    const sc = 0.5 + rng() * 0.65;
    q.setFromEuler(new THREE.Euler(0, rng() * Math.PI * 2, (rng() - 0.5) * 0.25));
    p.set(x, h + 0.01, z);
    s.set(sc, sc * (0.7 + rng() * 0.6), sc);
    m4.compose(p, q, s);
    grass.setMatrixAt(gi, m4);
    gColor.setHSL(0.24 + rng() * 0.05, 0.32 + rng() * 0.2, 0.34 + rng() * 0.14);
    grass.setColorAt(gi, gColor);
    gi++;
  });
  grass.count = gi;
  grass.castShadow = true;
  scene.add(grass);

  // ---- flowers (sparing) ----
  const stemGeo = new THREE.CylinderGeometry(0.012, 0.016, 0.26, 4);
  const stemMat = new THREE.MeshStandardMaterial({ color: 0x5c7040, roughness: 0.9 });
  const headGeo = new THREE.IcosahedronGeometry(0.05, 0);
  const headMat = new THREE.MeshStandardMaterial({ roughness: 0.6 });
  const flowerN = 26;
  const stems = new THREE.InstancedMesh(stemGeo, stemMat, flowerN);
  const heads = new THREE.InstancedMesh(headGeo, headMat, flowerN);
  const flowerColors = [new THREE.Color('#efe9da'), new THREE.Color('#e5c251'), new THREE.Color('#d9808d'), new THREE.Color('#b9c9e8')];
  let fi = 0;
  scatterRng(rng, flowerN, (x, z) => {
    const h = heightAt(x, z);
    return h > 0.7 && slopeAt(x, z) < 0.4 && harborMask(x, z) < 0.2 &&
      Math.hypot(x - HEADLAND.x, z - HEADLAND.z) > 3.5;
  }, (x, z, h) => {
    if (fi >= flowerN) return;
    q.setFromEuler(new THREE.Euler(0, rng() * 3, 0));
    s.set(1, 1, 1);
    p.set(x, h + 0.13, z);
    m4.compose(p, q, s);
    stems.setMatrixAt(fi, m4);
    p.y = h + 0.30;
    m4.compose(p, q, s);
    heads.setMatrixAt(fi, m4);
    heads.setColorAt(fi, flowerColors[Math.floor(rng() * flowerColors.length)]);
    fi++;
  });
  stems.count = fi; heads.count = fi;
  scene.add(stems); scene.add(heads);

  // ---- seagrass in the clear harbor ----
  const seaBlade = makeBladeGeometry(0.5);
  const seaMat = injectWind(
    new THREE.MeshStandardMaterial({ vertexColors: true, side: THREE.DoubleSide, roughness: 0.9, color: 0x54745a }),
    windUniform);
  const seaN = 90;
  const sea = new THREE.InstancedMesh(seaBlade, seaMat, seaN);
  const sColor = new THREE.Color();
  let si = 0;
  scatterRng(rng, seaN, (x, z) => {
    const h = heightAt(x, z);
    return h < -0.7 && h > -2.5 && harborMask(x, z) > 0.5;
  }, (x, z, h) => {
    if (si >= seaN) return;
    const sc = 0.7 + rng() * 0.6;
    q.setFromEuler(new THREE.Euler(0, rng() * Math.PI * 2, (rng() - 0.5) * 0.3));
    p.set(x, h + 0.02, z);
    s.set(sc, sc, sc);
    m4.compose(p, q, s);
    sea.setMatrixAt(si, m4);
    sColor.setHSL(0.33 + rng() * 0.05, 0.4, 0.30 + rng() * 0.12);
    sea.setColorAt(si, sColor);
    si++;
  });
  sea.count = si;
  scene.add(sea);

  return { windUniform };
}
