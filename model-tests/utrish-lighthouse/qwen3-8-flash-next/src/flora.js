// Wind, vegetation, rocks, gulls and cliff spray.
import * as THREE from 'three';
import { fbm, mulberry32, clamp } from './noise.js';
import { L, pieceSDF, islandSDF, capeSDF } from './geo.js';

/* ------------------------------------------------------------------ wind --- */

export function applyWind(material, strength = 0.09, ref = { uTime: { value: 0 } }) {
  material.onBeforeCompile = (shader) => {
    shader.uniforms.uTime = ref.uTime;
    shader.uniforms.uWind = { value: strength };
    shader.vertexShader = shader.vertexShader
      .replace(
        '#include <common>',
        /* glsl */ `
        #include <common>
        uniform float uTime;
        uniform float uWind;
        `,
      )
      .replace(
        '#include <project_vertex>',
        /* glsl */ `
        vec4 mvPosition = vec4( transformed, 1.0 );
        #ifdef USE_INSTANCING
          vec3 iPos = instanceMatrix[3].xyz;
          float hh = max( transformed.y, 0.0 );
          float sway = sin( uTime * 1.55 + iPos.x * 0.33 + iPos.z * 0.27 ) * 0.62
                     + sin( uTime * 2.7 + iPos.x * 0.72 - iPos.z * 0.53 ) * 0.38;
          float gust = 0.75 + 0.35 * sin( uTime * 0.41 + iPos.x * 0.05 );
          float bend = ( sway * 0.6 + 0.5 ) * uWind * gust * hh * hh;
          mvPosition = instanceMatrix * mvPosition;
          mvPosition.xz += vec2( -0.92, -0.36 ) * bend;
          mvPosition.y  -= bend * 0.22;
        #else
          mvPosition = instanceMatrix * mvPosition;
        #endif
        mvPosition = modelViewMatrix * mvPosition;
        gl_Position = projectionMatrix * mvPosition;
        `,
      );
    material.userData.shader = shader;
  };
  material.customProgramCacheKey = () => `wind-${strength}`;
  return material;
}

/* -------------------------------------------------------------- placement --- */

function makePlacer(world) {
  const keepOut = [
    { x: L.lighthouse[0], z: L.lighthouse[1], r: 12.5 },
    { x: L.mast[0], z: L.mast[1], r: 2.6 },
    { x: L.memorial[0], z: L.memorial[1], r: 4.6 },
    { x: L.yakMemorial[0], z: L.yakMemorial[1], r: 3.4 },
    { x: L.chapel[0], z: L.chapel[1], r: 5.0 },
    { x: L.chapelRuins[0], z: L.chapelRuins[1], r: 2.6 },
    { x: (L.bridgeA[0] + L.bridgeB[0]) / 2, z: (L.bridgeA[1] + L.bridgeB[1]) / 2, r: 6.5 },
    { x: L.quay[0], z: L.quay[1] + 4, r: 24 },
    { x: L.jetty[0], z: L.jetty[1] + 4, r: 12 },
    { x: L.pens[0], z: L.pens[1] + 6, r: 22 },
  ];
  const villageZone = { x: 100, z: -30, r: 26 };
  return function ok(x, z, { minY = 1.0, maxY = 999, maxSlope = 0.8, avoidVillage = false } = {}) {
    if (pieceSDF(x, z) > -1.5) return false;
    const y = world.height(x, z);
    if (y < minY || y > maxY) return false;
    const e = 0.9;
    const dx = (world.height(x + e, z) - world.height(x - e, z)) / (2 * e);
    const dz = (world.height(x, z + e) - world.height(x, z - e)) / (2 * e);
    if (Math.hypot(dx, dz) > maxSlope) return false;
    for (const k of keepOut) {
      if ((x - k.x) ** 2 + (z - k.z) ** 2 < k.r * k.r) return false;
    }
    if (avoidVillage) {
      const d = Math.hypot(x - villageZone.x, z - villageZone.z);
      if (d < villageZone.r) return false;
    }
    return true;
  };
}

/* ------------------------------------------------------------ geometries --- */

function bladeCluster({ blades = 6, h = 0.5, w = 0.055, bend = 0.35, spread = 0.35 }) {
  const pos = [];
  const nrm = [];
  const col = [];
  const idx = [];
  let v = 0;
  const rnd = mulberry32(blades * 13 + Math.round(h * 100));
  for (let b = 0; b < blades; b++) {
    const a = (b / blades) * Math.PI * 2 + rnd() * 0.6;
    const len = h * (0.6 + rnd() * 0.7);
    const dirx = Math.cos(a);
    const dirz = Math.sin(a);
    const lean = bend * (0.5 + rnd());
    const base = [dirx * rnd() * spread * 0.3, 0, dirz * rnd() * spread * 0.3];
    const segs = 3;
    for (let s = 0; s < segs; s++) {
      const t0 = s / segs;
      const t1 = (s + 1) / segs;
      const w0 = w * (1 - t0 * 0.85);
      const w1 = w * (1 - t1 * 0.85);
      const p = (t, ww, side) => {
        const y = len * t;
        const off = lean * len * t * t;
        const px = base[0] + dirx * off + -dirz * ww * side;
        const pz = base[2] + dirz * off + dirx * ww * side;
        return [px, y, pz];
      };
      const a0 = p(t0, w0, 1);
      const b0 = p(t0, w0, -1);
      const c1 = p(t1, w1, 1);
      const d1 = p(t1, w1, -1);
      pos.push(...a0, ...b0, ...c1, ...d1);
      for (let k = 0; k < 4; k++) nrm.push(-dirz * 0.5, 0.75, dirx * 0.5);
      col.push(1, 1, 1, 1, 1, 1, 0.72, 0.74, 0.62, 0.72, 0.74, 0.62);
      idx.push(v, v + 1, v + 2, v + 1, v + 3, v + 2);
      v += 4;
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(nrm, 3));
  g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  g.setIndex(idx);
  return g;
}

function bushGeometry(seed = 3) {
  const rnd = mulberry32(seed);
  const parts = [];
  const n = 5;
  for (let i = 0; i < n; i++) {
    const g = new THREE.IcosahedronGeometry(0.42 + rnd() * 0.26, 1);
    const p = g.attributes.position;
    for (let k = 0; k < p.count; k++) {
      p.setXYZ(
        k,
        p.getX(k) * (0.92 + rnd() * 0.22) + (i === 0 ? 0 : (rnd() - 0.5) * 0.8),
        Math.max(p.getY(k), -0.3) * (0.6 + rnd() * 0.35) + 0.34,
        p.getZ(k) * (0.92 + rnd() * 0.22) + (i === 0 ? 0 : (rnd() - 0.5) * 0.8),
      );
    }
    parts.push(g);
  }
  return mergeGeos(parts);
}

function rockGeometry(seed, verts = 0.35) {
  const rnd = mulberry32(seed);
  const g = new THREE.DodecahedronGeometry(1, 1);
  const p = g.attributes.position;
  const map = new Map();
  const out = [];
  for (let k = 0; k < p.count; k++) {
    const x = p.getX(k);
    const y = p.getY(k);
    const z = p.getZ(k);
    const key = `${x.toFixed(3)}|${y.toFixed(3)}|${z.toFixed(3)}`;
    let v = map.get(key);
    if (!v) {
      const n = 1 + (rnd() - 0.5) * verts * 2;
      v = [x * n, Math.max(y * n, -0.75) * 0.82, z * n];
      map.set(key, v);
    }
    out.push(...v);
  }
  g.setAttribute('position', new THREE.Float32BufferAttribute(out, 3));
  g.computeVertexNormals();
  return g;
}

function mergeGeos(geos) {
  let total = 0;
  const indexed = geos.map((g) => (g.index ? g.toNonIndexed() : g));
  indexed.forEach((g) => (total += g.attributes.position.count));
  const pos = new Float32Array(total * 3);
  const nrm = new Float32Array(total * 3);
  let off = 0;
  for (const g of indexed) {
    pos.set(g.attributes.position.array, off * 3);
    if (g.attributes.normal) nrm.set(g.attributes.normal.array, off * 3);
    off += g.attributes.position.count;
  }
  const out = new THREE.BufferGeometry();
  out.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  out.setAttribute('normal', new THREE.BufferAttribute(nrm, 3));
  return out;
}

function pineGeometry(seed) {
  const rnd = mulberry32(seed);
  const parts = [];
  const trunk = new THREE.CylinderGeometry(0.13, 0.26, 3.2, 6);
  trunk.translate(0, 1.6, 0);
  parts.push(trunk);
  const n = 3 + Math.floor(rnd() * 2);
  for (let i = 0; i < n; i++) {
    const c = new THREE.ConeGeometry(1.5 - i * 0.28, 0.95, 7);
    c.scale(1, 0.55, 1);
    c.translate((rnd() - 0.5) * 0.5, 3.0 + i * 0.72 + rnd() * 0.3, (rnd() - 0.5) * 0.5);
    parts.push(c);
  }
  return mergeGeos(parts);
}

/* ------------------------------------------------------------------ gulls --- */

function gullGeometry() {
  const g = new THREE.Group();
  const bodyMat = new THREE.MeshStandardMaterial({ color: 0xf6f6f2, roughness: 0.8 });
  const wingMat = new THREE.MeshStandardMaterial({ color: 0xe7e9ea, roughness: 0.85, side: THREE.DoubleSide });
  const tipMat = new THREE.MeshStandardMaterial({ color: 0x35383c, roughness: 0.85, side: THREE.DoubleSide });
  const body = new THREE.Mesh(new THREE.SphereGeometry(0.26, 10, 8), bodyMat);
  body.scale.set(1.9, 0.72, 0.72);
  g.add(body);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.15, 8, 7), bodyMat);
  head.position.set(0.46, 0.1, 0);
  g.add(head);
  const beak = new THREE.Mesh(new THREE.ConeGeometry(0.05, 0.24, 5), new THREE.MeshStandardMaterial({ color: 0xd8a234, roughness: 0.6 }));
  beak.rotation.z = -Math.PI / 2;
  beak.position.set(0.66, 0.09, 0);
  g.add(beak);
  const tail = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.03, 0.3), wingMat);
  tail.position.set(-0.52, 0.02, 0);
  g.add(tail);
  const wings = [];
  for (const s of [-1, 1]) {
    const pivot = new THREE.Group();
    pivot.position.set(0.02, 0.08, s * 0.14);
    const shp = new THREE.Shape();
    shp.moveTo(0, 0);
    shp.quadraticCurveTo(0.55, 0.34 * s, 1.35, 0.06 * s);
    shp.quadraticCurveTo(0.62, -0.2 * s, 0, -0.14);
    const geo = new THREE.ShapeGeometry(shp, 8);
    const w = new THREE.Mesh(geo, wingMat);
    w.rotation.x = Math.PI / 2;
    pivot.add(w);
    const tip = new THREE.Mesh(new THREE.PlaneGeometry(0.36, 0.2), tipMat);
    tip.rotation.x = Math.PI / 2;
    tip.position.set(1.2, 0, s * 0.05);
    pivot.add(tip);
    g.add(pivot);
    wings.push(pivot);
  }
  g.userData.wings = wings;
  return g;
}

/* --------------------------------------------------------------- the scene --- */

export function buildLife(world, refs, tex) {
  const group = new THREE.Group();
  group.name = 'life';
  const ok = makePlacer(world);
  const rnd = mulberry32(20250510);
  const m4 = new THREE.Matrix4();
  const q = new THREE.Quaternion();
  const e = new THREE.Euler();
  const v = new THREE.Vector3();
  const col = new THREE.Color();

  const scatter = (geo, mat, count, test, place, opts = {}) => {
    const im = new THREE.InstancedMesh(geo, mat, count);
    let n = 0;
    let tries = 0;
    const colr = opts.colour ? new Float32Array(count * 3) : null;
    while (n < count && tries < count * 90) {
      tries++;
      const x = -150 + rnd() * 290;
      const z = -90 + rnd() * 195;
      if (!test(x, z)) continue;
      const s = place(x, z, n);
      if (!s) continue;
      e.set(s.rx || 0, s.ry || 0, s.rz || 0);
      q.setFromEuler(e);
      m4.compose(v.set(x, s.y, z), q, new THREE.Vector3(s.sx, s.sy, s.sz));
      im.setMatrixAt(n, m4);
      if (colr) {
        const c = opts.colour(n, s, x, z);
        col.setRGB(c[0], c[1], c[2]);
        colr[n * 3] = col.r;
        colr[n * 3 + 1] = col.g;
        colr[n * 3 + 2] = col.b;
      }
      n++;
    }
    im.count = n;
    if (colr) im.instanceColor = new THREE.InstancedBufferAttribute(colr, 3);
    im.instanceMatrix.needsUpdate = true;
    im.castShadow = opts.shadow !== false;
    im.receiveShadow = true;
    if (n === 0) return null;
    group.add(im);
    return im;
  };

  /* dry grass tufts on the islet terrace and the cape slopes */
  const tuft = bladeCluster({ blades: 7, h: 0.4, w: 0.045, bend: 0.55 });
  const grassMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.95, side: THREE.DoubleSide });
  applyWind(grassMat, 0.55, refs);
  scatter(
    tuft,
    grassMat,
    1600,
    (x, z) => {
      if (pieceSDF(x, z) > -1) return false;
      const y = world.height(x, z);
      if (y < 0.9 || y > 40) return false;
      const onIsl = islandSDF(x, z) < 0;
      const onCape = capeSDF(x, z) < 0;
      if (!onIsl && !onCape) return false;
      const d = fbm(x / 6.5, z / 6.5, 3, 41);
      return d > (onIsl ? 0.36 : 0.42);
    },
    (x, z, i) => {
      const y = world.height(x, z);
      const sc = 0.55 + rnd() * 0.85;
      return { y: y - 0.04, ry: rnd() * 6.283, sx: sc, sy: sc * (0.85 + rnd() * 0.8), sz: sc };
    },
    {
      shadow: false,
      colour: (i) => {
        const k = 0.15 + rnd() * 0.17;
        return [k * (1.02 + rnd() * 0.12), k * (0.95 + rnd() * 0.1), k * (0.56 + rnd() * 0.22)];
      },
    },
  );

  /* wildflowers on the islet (the terrace is full of yellow blooms) */
  const flowerGeo = new THREE.OctahedronGeometry(0.075, 0);
  const flowerMat = new THREE.MeshStandardMaterial({ roughness: 0.85, emissive: 0x1a1408, emissiveIntensity: 0.2 });
  applyWind(flowerMat, 0.4, refs);
  scatter(
    flowerGeo,
    flowerMat,
    300,
    (x, z) => islandSDF(x, z) < -1 && world.height(x, z) > 6.5 && fbm(x / 5, z / 5, 2, 61) > 0.44,
    (x, z) => ({ y: world.height(x, z) + 0.16 + rnd() * 0.25, ry: rnd() * 3, sx: 1, sy: 1.5, sz: 1 }),
    {
      shadow: false,
      colour: () => (rnd() > 0.35 ? [0.60, 0.47, 0.10] : [0.55, 0.54, 0.46]),
    },
  );

  /* juniper / pistachio bushes on the cape, on the dark map dots */
  const bushMat = applyWind(
    new THREE.MeshStandardMaterial({ roughness: 0.94, flatShading: true }),
    0.02,
    refs,
  );
  scatter(
    bushGeometry(9),
    bushMat,
    620,
    (x, z) => {
      if (capeSDF(x, z) < -1.5) {
        const y = world.height(x, z);
        if (y < 1.3 || y > 46) return false;
        const e2 = 1.0;
        const dx = (world.height(x + e2, z) - world.height(x - e2, z)) / (2 * e2);
        const dz = (world.height(x, z + e2) - world.height(x, z - e2)) / (2 * e2);
        if (Math.hypot(dx, dz) > 1.15) return false;
        return fbm(x / 7.6, z / 7.6, 2, 77) > 0.60;
      }
      if (islandSDF(x, z) < -2) {
        const y = world.height(x, z);
        return y > 7 && y < 15 && fbm(x / 6.2, z / 6.2, 2, 23) > 0.68;
      }
      return false;
    },
    (x, z) => {
      const y = world.height(x, z);
      const sc = 0.62 + rnd() * 1.1;
      return { y: y - 0.12, ry: rnd() * 6.283, sx: sc * 1.2, sy: sc * (0.55 + rnd() * 0.45), sz: sc * 1.2 };
    },
    {
      colour: (i, s, x, z) => {
        // juniper on the cape is almost black green, on the islet it is grey sage
        const onIsl = islandSDF(x, z) < 0;
        const k = 0.85 + rnd() * 0.4;
        if (onIsl) return [0.092 * k, 0.100 * k, 0.070 * k];
        return [0.048 * k, (0.080 + rnd() * 0.032) * k, 0.042 * k];
      },
    },
  );

  /* Pitsunda pines and juniper trees along the ridge */
  const pineMat = applyWind(new THREE.MeshStandardMaterial({ roughness: 0.92, flatShading: true }), 0.006, refs);
  scatter(
    pineGeometry(5),
    pineMat,
    190,
    (x, z) => {
      if (capeSDF(x, z) < -3) {
        const y = world.height(x, z);
        if (y < 6 || y > 48) return false;
        const e2 = 1.2;
        const dx = (world.height(x + e2, z) - world.height(x - e2, z)) / (2 * e2);
        const dz = (world.height(x, z + e2) - world.height(x, z - e2)) / (2 * e2);
        if (Math.hypot(dx, dz) > 0.9) return false;
        return fbm(x / 11, z / 11, 2, 123) > 0.54;
      }
      return false;
    },
    (x, z) => {
      const y = world.height(x, z);
      const sc = 0.8 + rnd() * 1.15;
      return { y: y - 0.2, ry: rnd() * 6.283, sx: sc, sy: sc * (0.85 + rnd() * 0.7), sz: sc };
    },
    {
      colour: () => {
        const k = 0.8 + rnd() * 0.5;
        return [0.028 * k, 0.046 * k, 0.024 * k];
      },
    },
  );

  /* grey-green tumblebrush on the islet terrace (as in the panorama) */
  const brushMat = applyWind(new THREE.MeshStandardMaterial({ roughness: 0.96, flatShading: true }), 0.015, refs);
  scatter(
    bushGeometry(17),
    brushMat,
    130,
    (x, z) => islandSDF(x, z) < -1.5 && world.height(x, z) > 6 && fbm(x / 9, z / 9, 2, 7) > 0.5,
    (x, z) => {
      const sc = 0.55 + rnd() * 0.9;
      return { y: world.height(x, z) - 0.1, ry: rnd() * 6.283, sx: sc * 1.3, sy: sc * 0.8, sz: sc * 1.3 };
    },
    { colour: () => [0.062 + rnd() * 0.03, 0.070 + rnd() * 0.03, 0.048 + rnd() * 0.02] },
  );

  /* fallen blocks and shore boulders */
  const rockMats = [0, 1, 2].map(
    () =>
      new THREE.MeshStandardMaterial({
        map: tex.rock,
        bumpMap: tex.rockBump,
        bumpScale: 0.8,
        roughness: 0.95,
        flatShading: true,
      }),
  );
  const rocks = [rockGeometry(3), rockGeometry(8, 0.5), rockGeometry(15, 0.28)];
  const rockPlaced = [];
  const built = [
    [L.lighthouse[0], L.lighthouse[1], 13],
    [L.chapel[0], L.chapel[1], 7],
    [L.chapelRuins[0], L.chapelRuins[1], 3.4],
    [L.memorial[0], L.memorial[1], 4.4],
    [L.yakMemorial[0], L.yakMemorial[1], 3.2],
    [L.mast[0], L.mast[1], 2.4],
  ];
  rocks.forEach((rg, ri) => {
    scatter(
      rg,
      rockMats[ri],
      ri === 0 ? 150 : 90,
      (x, z) => {
        const y = world.height(x, z);
        if (y > 12 || y < -3.2) return false;
        if (pieceSDF(x, z) > -2) return false;
        // blocks belong on firm ground, not balanced on the edge of a cliff
        const e2 = 1.0;
        const dx2 = (world.height(x + e2, z) - world.height(x - e2, z)) / (2 * e2);
        const dz2 = (world.height(x, z + e2) - world.height(x, z - e2)) / (2 * e2);
        if (Math.hypot(dx2, dz2) > 1.05) return false;
        const near = islandSDF(x, z) < 9 || capeSDF(x, z) < 6;
        if (!near) return false;
        // fallen blocks belong at the waterline; only strays sit on the terrace
        if (y > 3.4 && fbm(x / 12, z / 12, 2, 91) < 0.74) return false;
        for (const k of built) {
          if ((x - k[0]) ** 2 + (z - k[1]) ** 2 < k[2] * k[2]) return false;
        }
        return true;
      },
      (x, z) => {
        const y = world.height(x, z);
        const big = rnd();
        const sc = 0.34 + big * big * 1.95;
        const out = { y: y - sc * 0.1, rx: (rnd() - 0.5) * 0.5, ry: rnd() * 6.283, rz: (rnd() - 0.5) * 0.5, sx: sc * (0.95 + rnd() * 0.6), sy: sc * (0.7 + rnd() * 0.6), sz: sc * (0.95 + rnd() * 0.6) };
        rockPlaced.push([x, y, z, sc]);
        return out;
      },
      {
        colour: () => {
          const k = 0.27 + rnd() * 0.24;
          const warm = 1 + (rnd() - 0.35) * 0.16;
          return [k * warm, k, (k / warm) * 0.96];
        },
      },
    );
  });

  /* seagrass in the clear, sheltered shallows */
  const weedGeo = bladeCluster({ blades: 5, h: 0.62, w: 0.07, bend: 0.22, spread: 0.5 });
  const weedMat = applyWind(
    new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.85, side: THREE.DoubleSide }),
    0.34,
    refs,
  );
  scatter(
    weedGeo,
    weedMat,
    900,
    (x, z) => {
      const y = world.height(x, z);
      // deeper than the plant itself, otherwise the meadow pokes out of the sea
      if (y > -1.3 || y < -3.4) return false;
      // sheltered water only: the bay, the strait mouth and the lee of the islet
      const sheltered = z > 14 && x > -30 ? fbm(x / 9, z / 9, 2, 91) > 0.42 : false;
      const lee = x > -46 && x < 6 && z > 12 && z < 34 ? fbm(x / 6, z / 6, 2, 17) > 0.4 : false;
      return (sheltered || lee) && pieceSDF(x, z) < -2;
    },
    (x, z) => {
      const y = world.height(x, z);
      const sc = 0.6 + rnd() * 1.1;
      return { y: y - 0.05, ry: rnd() * 6.283, sx: sc, sy: sc * (0.7 + rnd() * 0.8), sz: sc };
    },
    {
      shadow: false,
      colour: () => {
        const k = 0.6 + rnd() * 0.5;
        return [0.055 * k, 0.140 * k, 0.052 * k];
      },
    },
  );

  /* ---------------------------------------------------------------- gulls */
  const gulls = [];
  for (let i = 0; i < 8; i++) {
    const b = gullGeometry();
    b.scale.setScalar(0.42 + rnd() * 0.16);
    group.add(b);
    gulls.push({
      obj: b,
      cx: -18 + rnd() * 46,
      cz: -4 + rnd() * 24,
      r: 26 + rnd() * 44,
      y: 15 + rnd() * 16,
      w: (0.11 + rnd() * 0.1) * (rnd() > 0.5 ? 1 : -1),
      ph: rnd() * 6.283,
      flap: 5 + rnd() * 3.5,
      ecc: 0.55 + rnd() * 0.4,
      dz: rnd() * 6,
    });
  }

  /* -------------------------------------------------- spray against rock */
  // plumes are placed where the swell actually reaches rock: on the exposed
  // side of the islet, at the waterline
  const sprayTex = tex.spray;
  const puffs = [];
  const puffSpots = [];
  for (let x = -95; x < 42 && puffSpots.length < 15; x += 2.5) {
    for (let z = -42; z < 44 && puffSpots.length < 15; z += 2.5) {
      const h = world.height(x, z);
      if (h < -0.2 || h > 0.7) continue;
      if (islandSDF(x, z) > 1.2 && capeSDF(x, z) > 1.2) continue;
      if (world.exposure(x, z) < 0.6) continue;
      if (puffSpots.every(([px, pz]) => (px - x) ** 2 + (pz - z) ** 2 > 110)) puffSpots.push([x, z]);
    }
  }
  for (const [sx, sz] of puffSpots) {
    const spr = new THREE.Sprite(new THREE.SpriteMaterial({
      map: sprayTex, color: 0xffffff, transparent: true, opacity: 0,
      blending: THREE.NormalBlending, depthWrite: false,
    }));
    spr.renderOrder = 3;
    const base = new THREE.Vector3(sx, Math.max(world.height(sx, sz), 0.05), sz);
    spr.position.copy(base);
    group.add(spr);
    puffs.push({
      spr,
      period: 3.2 + rnd() * 4.0,
      phase: rnd() * 10,
      size: 2.0 + rnd() * 2.2,
      power: 0.55 + rnd() * 0.45,
      base,
    });
  }

  function update(t, dt) {
    void dt;
    for (const g of gulls) {
      const a = g.ph + t * g.w;
      const x = g.cx + Math.cos(a) * g.r;
      const z = g.cz + Math.sin(a) * g.r * g.ecc;
      const y = g.y + Math.sin(t * 0.5 + g.dz) * 1.6;
      g.obj.position.set(x, y, z);
      const heading = Math.atan2(-Math.sin(a) * g.r * g.ecc * g.w, Math.cos(a) * g.r * g.w);
      g.obj.rotation.set(Math.sin(t * 0.7 + g.dz) * 0.12, -heading + Math.PI / 2, Math.sin(a) * 0.25 + 0.06, 'YXZ');
      const fl = Math.sin(t * g.flap + g.ph);
      g.obj.userData.wings[0].rotation.x = fl * 0.75;
      g.obj.userData.wings[1].rotation.x = -fl * 0.75;
    }
    for (const p of puffs) {
      const ph = ((t + p.phase) % p.period) / p.period;
      const env = Math.pow(Math.sin(Math.PI * ph), 2.6);
      const s = p.size * (0.4 + env * 0.9);
      p.spr.scale.set(s * 0.8, s * 1.25, 1);
      p.spr.position.set(p.base.x, p.base.y + env * p.size * 0.75, p.base.z);
      p.spr.material.opacity = env * 0.32 * p.power;
      p.spr.visible = env > 0.02;
    }
  }

  return { group, update, rockPlaced };
}
