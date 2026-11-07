// ============================================================================
// THE TIDAL LIGHTHOUSE — an animated Three.js diorama
// All geometry and textures are generated in code (no downloaded assets).
// ============================================================================
import * as THREE from 'three';
import { OrbitControls } from '../vendor/OrbitControls.js';

/* ---------------------------------------------------------------------------
 * Small deterministic utilities
 * ------------------------------------------------------------------------- */
function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const rand = mulberry32(20261107);

function hash2(x, y) {
  let h = Math.imul(x, 374761393) + Math.imul(y, 668265263) + 668265263;
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  h ^= h >>> 16;
  return (h >>> 0) / 4294967296;
}
function valueNoise2(x, y) {
  const ix = Math.floor(x), iy = Math.floor(y);
  const fx = x - ix, fy = y - iy;
  const sx = fx * fx * (3 - 2 * fx), sy = fy * fy * (3 - 2 * fy);
  const a = hash2(ix, iy), b = hash2(ix + 1, iy);
  const c = hash2(ix, iy + 1), d = hash2(ix + 1, iy + 1);
  return a + (b - a) * sx + (c - a) * sy + (a - b - c + d) * sx * sy;
}
function fbm2(x, y, oct) {
  let v = 0, amp = 0.5, f = 1;
  for (let i = 0; i < oct; i++) { v += valueNoise2(x * f, y * f) * amp; f *= 2.0; amp *= 0.5; }
  return v; // ~0..1
}
const clamp = (x, a, b) => Math.min(b, Math.max(a, x));
const lerp = (a, b, t) => a + (b - a) * t;
function sstep(e0, e1, x) {
  const t = clamp((x - e0) / (e1 - e0), 0, 1);
  return t * t * (3 - 2 * t);
}
const gauss = (d) => Math.exp(-d * d);
function wrapAngle(a) {
  a = a % (Math.PI * 2);
  if (a > Math.PI) a -= Math.PI * 2;
  if (a < -Math.PI) a += Math.PI * 2;
  return a;
}

/* ---------------------------------------------------------------------------
 * Landscape field functions (shared by mesh building AND water map baking)
 * ------------------------------------------------------------------------- */
const ISLAND_R0 = 10.6;
function islandR(theta) {
  const a1 = Math.sin(theta * 1 + 2.1) * 0.16;
  const a2 = Math.sin(theta * 2 - 0.6) * 0.11;
  const a3 = Math.sin(theta * 3 + 1.4) * 0.06;
  const a4 = Math.sin(theta * 5 + 3.0) * 0.03;
  const harbor = gauss(wrapAngle(theta - 0.15) / 0.85) * 0.20; // sheltered cove on +X (east)
  return ISLAND_R0 * (1 + a1 + a2 + a3 + a4 - harbor);
}

const HL = { x: -5.0, z: -2.6, s: 4.2, a: 3.9 };      // lighthouse headland (NW)
const RIDGE = { x: -1.4, z: -4.4, s: 3.4, a: 1.7 };   // rocky ridge
const HILL = { x: 3.2, z: 3.5, s: 3.7, a: 1.8 };      // cottage hill (SE)
const COVE = { x: 5.4, z: 1.3, s: 5.2, a: 3.0 };      // harbor basin (E)

function heightAt(x, z) {
  const r = Math.hypot(x, z);
  const th = Math.atan2(z, x);
  const R = islandR(th);
  const d = r - R;
  const inside = 1 - sstep(-5.0, 0.3, d);

  const n = fbm2(x * 0.13 + 7.3, z * 0.13 - 3.1, 4);
  let h = inside * (0.35 + n * 1.7);

  h += gauss(Math.hypot(x - HL.x, z - HL.z) / HL.s) * HL.a;
  h += gauss(Math.hypot(x - RIDGE.x, z - RIDGE.z) / RIDGE.s) * RIDGE.a;
  h += gauss(Math.hypot(x - HILL.x, z - HILL.z) / HILL.s) * HILL.a;
  h -= gauss(Math.hypot(x - COVE.x, z - COVE.z) / COVE.s) * COVE.a;

  // low rock shelves that waves can wash over
  const shelf = fbm2(x * 0.22 + 1.0, z * 0.22 - 2.0, 3);
  h += inside * (shelf - 0.35) * 0.85;

  // rugged coastal rim (cliffs), cut through by the harbour mouth
  const rim = sstep(-2.8, 0.0, d) * (0.75 + fbm2(x * 0.3 + 6.0, z * 0.3 - 5.0, 3) * 0.85);
  const coveMask = gauss(Math.hypot(x - COVE.x, z - COVE.z) / (COVE.s * 1.15));
  h += rim * (1.0 - coveMask * 0.94);

  return h;
}

const BASE_Y = -8.0;
// seabed: terrain inside the island, sloping shelf + deep floor outside
function seabedHeight(x, z) {
  const r = Math.hypot(x, z);
  const th = Math.atan2(z, x);
  const d = r - islandR(th);
  const inside = 1 - sstep(0.0, 2.5, d); // 1 inside, 0 outside
  const t = heightAt(x, z);
  return lerp(BASE_Y, t, inside);
}

function shelterField(x, z) {
  // 0 = exposed open coast, 1 = sheltered harbor. Waves travel +X (eastward).
  const expo = sstep(-5.0, 5.0, x);                 // 0 west .. 1 east
  const cove = gauss(Math.hypot(x - COVE.x, z - COVE.z) / (COVE.s * 1.1));
  return clamp(expo * 0.85 + cove * 0.95, 0, 1);
}

function shoreField(x, z) {
  const h = seabedHeight(x, z);
  if (h > 0.02) return 0; // land
  const depth = -h;       // water depth in metres
  return Math.exp(-depth * depth * 1.35) * Math.exp(-depth * 0.55);
}

/* ---------------------------------------------------------------------------
 * Baked field maps (RGBA half-float texture sampled by world XZ)
 * R = depth01 (0 shallow .. 1 deep), G = shelter, B = shore proximity,
 * A = landness (1 above water, 0 water)
 * ------------------------------------------------------------------------- */
const MAP_MIN = -20, MAP_MAX = 20, MAP_SIZE = 768;
function bakeMaps() {
  const n = MAP_SIZE * MAP_SIZE;
  const data = new Uint8Array(n * 4);
  for (let j = 0; j < MAP_SIZE; j++) {
    const z = MAP_MIN + (MAP_MAX - MAP_MIN) * (j + 0.5) / MAP_SIZE;
    for (let i = 0; i < MAP_SIZE; i++) {
      const x = MAP_MIN + (MAP_MAX - MAP_MIN) * (i + 0.5) / MAP_SIZE;
      const h = seabedHeight(x, z);
      const depth = clamp(-h, 0, 8) / 8;       // 0 shallow .. 1 deep
      const shelter = shelterField(x, z);
      const shore = shoreField(x, z);
      const land = h > 0.03 ? 1 : 0;
      const idx = (j * MAP_SIZE + i) * 4;
      data[idx] = Math.round(depth * 255);
      data[idx + 1] = Math.round(shelter * 255);
      data[idx + 2] = Math.round(shore * 255);
      data[idx + 3] = Math.round(land * 255);
    }
  }
  const tex = new THREE.DataTexture(data, MAP_SIZE, MAP_SIZE, THREE.RGBAFormat, THREE.UnsignedByteType);
  tex.needsUpdate = true;
  tex.magFilter = THREE.LinearFilter;
  tex.minFilter = THREE.LinearFilter;
  tex.wrapS = THREE.ClampToEdgeWrapping;
  tex.wrapT = THREE.ClampToEdgeWrapping;
  tex.generateMipmaps = false;
  return tex;
}

/* ---------------------------------------------------------------------------
 * Renderer / scene / camera / controls / lights
 * ------------------------------------------------------------------------- */
const app = document.getElementById('app');
const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.16;
app.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const fogColor = new THREE.Color(0xe7eceb);
scene.fog = new THREE.Fog(fogColor, 55, 240);

const camera = new THREE.PerspectiveCamera(46, window.innerWidth / window.innerHeight, 0.1, 800);
camera.position.set(11, 8.5, 15);

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 0.9, 0);
controls.enableDamping = true;
controls.dampingFactor = 0.06;
controls.minDistance = 3.5;
controls.maxDistance = 70;
controls.maxPolarAngle = Math.PI * 0.505;
controls.panSpeed = 0.9;
controls.update();
controls.saveState();

const sunDir = new THREE.Vector3(-13, 9, 12).normalize();

const hemi = new THREE.HemisphereLight(0xcee1ee, 0xe8d6b8, 1.0);
scene.add(hemi);

const sun = new THREE.DirectionalLight(0xffd7a3, 3.4);
sun.position.set(-13, 9, 12);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
sun.shadow.camera.near = 2;
sun.shadow.camera.far = 60;
const sc = sun.shadow.camera;
sc.left = -24; sc.right = 24; sc.top = 24; sc.bottom = -24;
sc.updateProjectionMatrix();
sun.shadow.bias = -0.0004;
sun.shadow.normalBias = 0.02;
scene.add(sun);
scene.add(sun.target);

const warmFill = new THREE.DirectionalLight(0xffc98f, 0.7);
warmFill.position.set(12, 5, 15);
scene.add(warmFill);

/* ---------------------------------------------------------------------------
 * Shared tone-mapping GLSL used by all custom materials
 * ------------------------------------------------------------------------- */
const TONE_GLSL = /* glsl */ `
vec3 acesFilmic(vec3 x){
  return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0);
}
vec3 toSRGB(vec3 c){ return pow(c, vec3(1.0 / 2.2)); }
`;

/* ---------------------------------------------------------------------------
 * Sky dome
 * ------------------------------------------------------------------------- */
function buildSky() {
  const geo = new THREE.SphereGeometry(320, 48, 24);
  const mat = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    depthWrite: false,
    uniforms: { uSunDir: { value: sunDir.clone() } },
    vertexShader: /* glsl */ `
      varying vec3 vDir;
      void main(){
        vDir = normalize(position);
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: TONE_GLSL + /* glsl */ `
      varying vec3 vDir;
      uniform vec3 uSunDir;
      void main(){
        vec3 d = normalize(vDir);
        float h = clamp(d.y, -0.05, 1.0);
        vec3 zenith  = vec3(0.62, 0.78, 0.88);
        vec3 mid     = vec3(0.83, 0.88, 0.90);
        vec3 horizon = vec3(0.95, 0.87, 0.76);
        vec3 col = mix(horizon, mid, smoothstep(0.0, 0.16, h));
        col = mix(col, zenith, smoothstep(0.16, 0.62, h));
        float s = max(dot(d, normalize(uSunDir)), 0.0);
        col += vec3(1.0, 0.80, 0.55) * (pow(s, 90.0) * 0.55 + pow(s, 8.0) * 0.10);
        col += vec3(1.0, 0.9, 0.78) * pow(max(dot(d, vec3(-0.4,0.2,0.4)),0.0), 3.0) * 0.05;
        gl_FragColor = vec4(toSRGB(acesFilmic(col)), 1.0);
      }`
  });
  const sky = new THREE.Mesh(geo, mat);
  sky.renderOrder = -10;
  scene.add(sky);
  return sky;
}
buildSky();

/* ---------------------------------------------------------------------------
 * Island slab (the display piece) — polar mesh with strata-painted cutaway
 * ------------------------------------------------------------------------- */
function buildIsland() {
  const K = 192, M = 30, S = 9;
  const positions = [], colors = [], indices = [];
  const tmp = new THREE.Color();

  function pushV(x, y, z, r, g, b) {
    positions.push(x, y, z);
    colors.push(r, g, b);
    return positions.length / 3 - 1;
  }
  function coastY(theta) {
    const rr = islandR(theta);
    return heightAt(rr * Math.cos(theta), rr * Math.sin(theta));
  }

  // ---- top surface (rings 0..M), ring 0 = centre ----
  const topBase = 0;
  for (let i = 0; i <= M; i++) {
    const t = i / M;
    for (let k = 0; k < K; k++) {
      const theta = (k / K) * Math.PI * 2;
      const rr = t * islandR(theta);
      const x = rr * Math.cos(theta), z = rr * Math.sin(theta);
      const y = heightAt(x, z);
      const c = terrainColor(x, y, z);
      pushV(x, y, z, c.r, c.g, c.b);
    }
  }
  for (let i = 0; i < M; i++) {
    for (let k = 0; k < K; k++) {
      const k1 = (k + 1) % K;
      const a = topBase + i * K + k;
      const b = topBase + i * K + k1;
      const c = topBase + (i + 1) * K + k1;
      const d = topBase + (i + 1) * K + k;
      indices.push(a, b, c, a, c, d);
    }
  }

  // ---- side wall (coastline ring duplicated, dropping to base) ----
  const wallBase = positions.length / 3;
  for (let j = 0; j <= S; j++) {
    const yy = lerp(0, BASE_Y, j / S);
    for (let k = 0; k < K; k++) {
      const theta = (k / K) * Math.PI * 2;
      const rr = islandR(theta);
      const x = rr * Math.cos(theta), z = rr * Math.sin(theta);
      const y = j === 0 ? coastY(theta) : BASE_Y + (coastY(theta) - BASE_Y) * (1 - j / S);
      const c = strataColor(y, theta);
      pushV(x, y, z, c.r, c.g, c.b);
    }
  }
  for (let j = 0; j < S; j++) {
    for (let k = 0; k < K; k++) {
      const k1 = (k + 1) % K;
      const a = wallBase + j * K + k;
      const b = wallBase + j * K + k1;
      const c = wallBase + (j + 1) * K + k1;
      const d = wallBase + (j + 1) * K + k;
      indices.push(a, c, b, a, d, c);
    }
  }

  // ---- bottom cap (triangle fan) ----
  const bottomBase = positions.length / 3;
  const centre = pushV(0, BASE_Y, 0, 0.18, 0.20, 0.22);
  for (let k = 0; k < K; k++) {
    const theta = (k / K) * Math.PI * 2;
    const rr = islandR(theta);
    pushV(rr * Math.cos(theta), BASE_Y, rr * Math.sin(theta), 0.16, 0.18, 0.20);
  }
  for (let k = 0; k < K; k++) {
    const k1 = (k + 1) % K;
    indices.push(centre, bottomBase + 1 + k1, bottomBase + 1 + k);
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  geo.setIndex(indices);
  geo.computeVertexNormals();

  const mat = new THREE.MeshStandardMaterial({
    vertexColors: true, roughness: 0.94, metalness: 0.0
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.receiveShadow = true;
  mesh.castShadow = true;
  return mesh;
}

const C = {
  sand: new THREE.Color(0xe3d2a8), wetSand: new THREE.Color(0xc3ab7d),
  grass: new THREE.Color(0x84a457), grass2: new THREE.Color(0x97b26b),
  rock: new THREE.Color(0x888e96), wetRock: new THREE.Color(0x5c636b),
  rockDark: new THREE.Color(0x4a5158), seaGrass: new THREE.Color(0x4f6f52)
};

function terrainColor(x, y, z) {
  const e = 0.7;
  const gx = (heightAt(x + e, z) - heightAt(x - e, z)) / (2 * e);
  const gz = (heightAt(x, z + e) - heightAt(x, z - e)) / (2 * e);
  const slope = Math.hypot(gx, gz);
  if (y > 0.32) {
    const n = valueNoise2(x * 0.55, z * 0.55);
    const exposed = 1 - shelterField(x, z);
    let rocky = sstep(0.55, 1.05, slope) * 0.9;                 // steep cliffs
    rocky = Math.max(rocky, sstep(2.9, 5.0, y) * 0.72);         // high rocky headland
    rocky = Math.max(rocky, exposed * 0.3 * (1 - sstep(0.32, 2.2, y))); // exposed low coast
    let c = C.grass.clone().lerp(C.grass2, n * 0.6);
    c.lerp(C.rock, clamp(rocky, 0, 1) * 0.92);
    const wet = sstep(0.32, 0.9, y);
    c.lerp(C.wetRock, (1 - wet) * 0.3);
    return c;
  } else if (y > 0.04) {
    const t = sstep(0.04, 0.32, y);
    let c = C.wetRock.clone().lerp(C.rock, t);
    c.lerp(C.sand, 0.35 * (1 - t));
    return c;
  } else {
    const depth = -y;
    let c = C.sand.clone();
    c.lerp(C.wetSand, sstep(0.0, 3.2, depth) * 0.65);
    // sea-grass patches in the harbour
    const g = valueNoise2(x * 0.9 + 4, z * 0.9 - 3);
    const patch = sstep(0.55, 0.75, g) * sstep(0.3, 1.4, depth) * (1 - sstep(2.6, 3.6, depth));
    c.lerp(C.seaGrass, patch * 0.75);
    return c;
  }
}

function strataColor(y, theta) {
  const bands = [
    [0x6b7178, 0.0], [0xb9a27e, 0.0], [0x8a929a, 0.0], [0xd4c39c, 0.0],
    [0x5c636b, 0.0], [0xa98d63, 0.0], [0x767d85, 0.0], [0xcfbb94, 0.0]
  ].map(([hex]) => new THREE.Color(hex));
  const jitter = valueNoise2(theta * 2.4, 1.7) * 1.4;
  const t = Math.abs(Math.sin(y * 0.52 + jitter));
  const seg = clamp(y * 0.16 + 0.5, 0, 1);
  let c = bands[Math.floor(clamp(t * bands.length, 0, bands.length - 1))];
  // darker toward the base
  const dark = sstep(0.0, 1.0, (y - BASE_Y) / (-BASE_Y));
  c = c.clone().lerp(new THREE.Color(0x3f464d), dark * 0.45);
  return c;
}

const island = buildIsland();
scene.add(island);

/* ---------------------------------------------------------------------------
 * Water
 * ------------------------------------------------------------------------- */
const WATER_VERT = /* glsl */ `
  uniform sampler2D uMap;
  uniform float uTime;
  varying vec2 vUv;
  varying vec3 vWorldPos;
  varying vec3 vNormal;
  varying float vDepth;
  varying float vShelter;
  varying float vShore;
  varying float vWave;

  vec3 gerstner(vec2 dir, float amp, float wl, float speed, float steep, vec2 p, float t){
    float k = 6.2831853 / wl;
    float f = k * dot(dir, p) - speed * t;
    return vec3(dir.x * amp * steep * cos(f), amp * sin(f), dir.y * amp * steep * cos(f));
  }
  vec3 gerstnerDx(vec2 dir, float amp, float wl, float speed, float steep, vec2 p, float t){
    float k = 6.2831853 / wl;
    float f = k * dot(dir, p) - speed * t;
    return vec3(-dir.x * amp * steep * k * dir.x * sin(f), amp * k * dir.x * cos(f), -dir.y * amp * steep * k * dir.x * sin(f));
  }
  vec3 gerstnerDz(vec2 dir, float amp, float wl, float speed, float steep, vec2 p, float t){
    float k = 6.2831853 / wl;
    float f = k * dot(dir, p) - speed * t;
    return vec3(-dir.x * amp * steep * k * dir.y * sin(f), amp * k * dir.y * cos(f), -dir.y * amp * steep * k * dir.y * sin(f));
  }

  void main(){
    vec4 wp = modelMatrix * vec4(position, 1.0);
    vec2 xz = wp.xz;
    vUv = (xz - vec2(${MAP_MIN}.0)) / vec2(${(MAP_MAX - MAP_MIN)}.0);

    vec4 m = texture2D(uMap, vUv);
    float depth = m.r;
    float shelter = m.g;
    float shore = m.b;

    float shoal = 1.0 + 0.55 * exp(-pow((depth - 0.42) * 3.4, 2.0));
    shoal *= smoothstep(0.0, 0.10, depth);
    float ampScale = (1.0 - shelter * 0.88) * shoal;

    vec2 D1 = vec2(1.0, 0.0), D2 = vec2(0.96, 0.18), D3 = vec2(1.0, -0.14), D4 = vec2(0.97, 0.06);
    float t = uTime;
    vec3 disp = vec3(0.0);
    vec3 dx = vec3(0.0), dz = vec3(0.0);
    float waveH = 0.0;

    vec3 g;
    g = gerstner(D1, 0.62, 9.5, 1.55, 0.60, xz, t); disp += g * ampScale; dx += gerstnerDx(D1, 0.62, 9.5, 1.55, 0.60, xz, t) * ampScale; dz += gerstnerDz(D1, 0.62, 9.5, 1.55, 0.60, xz, t) * ampScale; waveH += g.y * ampScale;
    g = gerstner(D2, 0.34, 6.4, 1.85, 0.66, xz, t); disp += g * ampScale; dx += gerstnerDx(D2, 0.34, 6.4, 1.85, 0.66, xz, t) * ampScale; dz += gerstnerDz(D2, 0.34, 6.4, 1.85, 0.66, xz, t) * ampScale; waveH += g.y * ampScale;
    g = gerstner(D3, 0.24, 4.4, 2.2, 0.70, xz, t); disp += g * ampScale; dx += gerstnerDx(D3, 0.24, 4.4, 2.2, 0.70, xz, t) * ampScale; dz += gerstnerDz(D3, 0.24, 4.4, 2.2, 0.70, xz, t) * ampScale; waveH += g.y * ampScale;
    g = gerstner(D4, 0.14, 2.9, 2.9, 0.55, xz, t); disp += g * ampScale; dx += gerstnerDx(D4, 0.14, 2.9, 2.9, 0.55, xz, t) * ampScale; dz += gerstnerDz(D4, 0.14, 2.9, 2.9, 0.55, xz, t) * ampScale; waveH += g.y * ampScale;

    wp.x += disp.x; wp.y += disp.y; wp.z += disp.z;
    vWorldPos = wp.xyz;
    vDepth = depth; vShelter = shelter; vShore = shore; vWave = waveH;

    vec3 n = normalize(vec3(-dx.y, 1.0, -dz.y));
    vNormal = normalize(mat3(modelMatrix) * n);

    gl_Position = projectionMatrix * viewMatrix * wp;
  }
`;

const WATER_FRAG = TONE_GLSL + /* glsl */ `
  uniform sampler2D uMap;
  uniform float uTime;
  uniform vec3 uSunDir;
  uniform vec3 uCamPos;
  varying vec2 vUv;
  varying vec3 vWorldPos;
  varying vec3 vNormal;
  varying float vDepth;
  varying float vShelter;
  varying float vShore;
  varying float vWave;
  uniform vec3 uFogColor;
  uniform float uFogNear;
  uniform float uFogFar;

  float h21(vec2 p){ p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
  float vnoise(vec2 p){
    vec2 i = floor(p), f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    float a = h21(i), b = h21(i + vec2(1,0)), c = h21(i + vec2(0,1)), d = h21(i + vec2(1,1));
    return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
  }
  float fbm(vec2 p){
    float v = 0.0, a = 0.5;
    for(int i = 0; i < 3; i++){ v += a * vnoise(p); p *= 2.03; a *= 0.5; }
    return v;
  }

  void main(){
    vec3 N = normalize(vNormal);
    vec3 V = normalize(uCamPos - vWorldPos);
    vec3 L = normalize(uSunDir);

    // animated normal detail — smaller in the sheltered harbour
    float calm = (1.0 - vShelter);
    vec2 nuv = vWorldPos.xz * 0.35 + vec2(uTime * 0.35, uTime * 0.22);
    vec2 e = vec2(0.06, 0.0);
    float h0 = fbm(nuv);
    float hx = fbm(nuv + e);
    float hz = fbm(nuv + e.yx);
    vec3 perturb = normalize(vec3(h0 - hx, 0.35, h0 - hz)) * calm;
    N = normalize(N + perturb * 0.85);

    // ---- colour from depth ----
    vec3 deep    = vec3(0.006, 0.06, 0.15);
    vec3 mid     = vec3(0.02, 0.17, 0.31);
    vec3 turq    = vec3(0.10, 0.48, 0.55);
    vec3 shallow = vec3(0.38, 0.68, 0.70);
    vec3 base;
    base = mix(shallow, turq, smoothstep(0.015, 0.18, vDepth));
    base = mix(base, mid, smoothstep(0.18, 0.45, vDepth));
    base = mix(base, deep, smoothstep(0.45, 0.85, vDepth));
    // harbour gets a touch more green
    base = mix(base, base * vec3(0.90, 1.07, 1.0), vShelter * 0.4);

    // ---- foam ----
    float sets = 0.5 + 0.5 * sin(uTime * 0.42) * (0.5 + 0.5 * sin(uTime * 0.19 + 1.3));
    float breakBand = exp(-pow((vDepth - 0.16) * 3.6, 2.0));
    float breaker = breakBand * calm * (0.45 + 0.55 * sets);
    float crest = smoothstep(0.5, 0.95, vWave) * calm * (1.0 - smoothstep(0.3, 0.75, vDepth));
    float swash = vShore * calm * (0.5 + 0.5 * sin(uTime * 1.6 + vnoise(vWorldPos.xz * 0.5) * 6.283));
    float foam = clamp(breaker * 1.1 + crest * 0.9 + swash * 0.7, 0.0, 1.0);

    vec3 col = base;
    col = mix(col, vec3(0.97, 0.99, 0.99), foam);

    // ---- restrained reflections ----
    float fresnel = pow(1.0 - max(dot(N, V), 0.0), 3.0);
    vec3 skyRefl = mix(vec3(0.82, 0.86, 0.86), vec3(0.98, 0.93, 0.84), clamp(N.y, 0.0, 1.0));
    col = mix(col, skyRefl, fresnel * 0.16);

    // ---- sun specular ----
    vec3 H = normalize(L + V);
    float spec = pow(max(dot(N, H), 0.0), 420.0) * calm;
    col += vec3(1.0, 0.86, 0.62) * spec * 1.4;

    // subtle underwater glow in shallows
    col += vec3(0.05, 0.16, 0.14) * (1.0 - vDepth) * 0.35;

    // ---- alpha: opaque deep, translucent shallows, transparent at waterline ----
    float alpha = 0.72 + 0.28 * smoothstep(0.05, 0.8, vDepth);
    alpha *= smoothstep(0.0, 0.02, vDepth);

    vec3 outCol = acesFilmic(col);
    outCol = toSRGB(outCol);
    float dist = distance(vWorldPos, uCamPos);
    float fogF = smoothstep(uFogNear, uFogFar, dist);
    outCol = mix(outCol, uFogColor, fogF);
    gl_FragColor = vec4(outCol, alpha);
  }
`;

function buildWater() {
  const map = bakeMaps();
  const geo = new THREE.PlaneGeometry(130, 130, 280, 280);
  geo.rotateX(-Math.PI / 2);
  const mat = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: true,
    uniforms: {
      uMap: { value: map },
      uTime: { value: 0 },
      uSunDir: { value: sunDir.clone() },
      uCamPos: { value: camera.position },
      uFogColor: { value: new THREE.Vector3(0.906, 0.925, 0.921) },
      uFogNear: { value: 55 },
      uFogFar: { value: 240 }
    },
    vertexShader: WATER_VERT,
    fragmentShader: WATER_FRAG
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.renderOrder = 1;
  mesh.frustumCulled = false;
  scene.add(mesh);
  return mat;
}
const waterMat = buildWater();

/* ---------------------------------------------------------------------------
 * Seabed (shelf + deep floor) — a radial skirt around the island
 * ------------------------------------------------------------------------- */
function buildSeabed() {
  const K = 192, MR = 34;
  const positions = [], colors = [], indices = [];
  const sand = new THREE.Color(0xcbb685);
  const deep = new THREE.Color(0x2c3a46);
  const mixC = new THREE.Color();
  const rockC = new THREE.Color(0x8a7f66);
  const push = (x, y, z, r, g, b) => { positions.push(x, y, z); colors.push(r, g, b); return positions.length / 3 - 1; };
  for (let i = 0; i <= MR; i++) {
    const t = i / MR;
    const extra = t * t * 26.0;
    for (let k = 0; k < K; k++) {
      const theta = (k / K) * Math.PI * 2;
      const rr = islandR(theta) + extra;
      const x = rr * Math.cos(theta), z = rr * Math.sin(theta);
      const y = seabedHeight(x, z);
      const depth = -y;
      mixC.copy(sand).lerp(deep, sstep(0.7, 7.0, depth));
      const n = valueNoise2(x * 0.5, z * 0.5);
      mixC.lerp(rockC, n * 0.32);
      push(x, y, z, mixC.r, mixC.g, mixC.b);
    }
  }
  for (let i = 0; i < MR; i++) {
    for (let k = 0; k < K; k++) {
      const k1 = (k + 1) % K;
      const a = i * K + k, b = i * K + k1, c = (i + 1) * K + k1, d = (i + 1) * K + k;
      indices.push(a, c, b, a, d, c);
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  geo.setIndex(indices);
  geo.computeVertexNormals();
  const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.96, metalness: 0.0 });
  const m = new THREE.Mesh(geo, mat);
  m.receiveShadow = true;
  scene.add(m);
  return m;
}
buildSeabed();

/* ---------------------------------------------------------------------------
 * Procedural canvas textures
 * ------------------------------------------------------------------------- */
function canvasTex(w, h, draw, opts = {}) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  const g = c.getContext('2d');
  draw(g, w, h);
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  if (opts.repeat) tex.repeat.set(...opts.repeat);
  tex.anisotropy = 4;
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}
function grunge(g, w, h, n, alpha, color = 'rgba(60,50,40,') {
  for (let i = 0; i < n; i++) {
    const x = Math.random() * w, y = Math.random() * h, r = Math.random() * 3 + 1;
    g.fillStyle = color + (alpha * Math.random()) + ')';
    g.beginPath(); g.arc(x, y, r, 0, Math.PI * 2); g.fill();
  }
}

function stripeTexture() {
  return canvasTex(64, 512, (g, w, h) => {
    const bands = 8, bh = h / bands;
    for (let i = 0; i < bands; i++) {
      g.fillStyle = i % 2 === 0 ? '#f4ede1' : '#c44a3c';
      g.fillRect(0, i * bh, w, bh + 1);
      // ragged paint edge
      g.fillStyle = 'rgba(0,0,0,0.10)';
      g.fillRect(0, i * bh, w, 2);
    }
    grunge(g, w, h, 900, 0.12);
    // streaks
    for (let i = 0; i < 24; i++) {
      g.fillStyle = 'rgba(90,70,60,' + (0.04 + Math.random() * 0.06) + ')';
      g.fillRect(Math.random() * w, 0, 2, h);
    }
  });
}
function plasterTexture() {
  return canvasTex(256, 256, (g, w, h) => {
    g.fillStyle = '#ede3cf'; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 900; i++) {
      const x = Math.random() * w, y = Math.random() * h;
      g.fillStyle = 'rgba(' + [200, 180, 150][i % 3] + ',' + [195, 170, 145][i % 3] + ',' + [160, 145, 120][i % 3] + ',' + Math.random() * 0.25 + ')';
      g.fillRect(x, y, 2 + Math.random() * 5, 1 + Math.random() * 3);
    }
    // cracks
    g.strokeStyle = 'rgba(120,100,85,0.25)';
    for (let i = 0; i < 14; i++) {
      g.beginPath();
      let x = Math.random() * w, y = Math.random() * h;
      g.moveTo(x, y);
      for (let s = 0; s < 6; s++) { x += (Math.random() - 0.5) * 40; y += (Math.random() - 0.5) * 40; g.lineTo(x, y); }
      g.lineWidth = 1 + Math.random(); g.stroke();
    }
  }, { repeat: [1, 1] });
}
function woodTexture() {
  return canvasTex(256, 256, (g, w, h) => {
    g.fillStyle = '#8a6a48'; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 60; i++) {
      g.fillStyle = 'rgba(' + (90 + Math.random() * 40 | 0) + ',' + (60 + Math.random() * 30 | 0) + ',' + (35 + Math.random() * 20 | 0) + ',0.5)';
      g.fillRect(0, Math.random() * h, w, 1 + Math.random() * 3);
    }
    grunge(g, w, h, 500, 0.15);
  });
}
function stoneTexture() {
  return canvasTex(256, 256, (g, w, h) => {
    g.fillStyle = '#9a948a'; g.fillRect(0, 0, w, h);
    const s = 32;
    for (let y = 0; y < h / s; y++) {
      for (let x = 0; x < w / s; x++) {
        const off = (y % 2) * s * 0.5;
        g.fillStyle = 'hsl(45,' + (6 + Math.random() * 10) + '%,' + (52 + Math.random() * 12) + '%)';
        g.fillRect(x * s + off, y * s, s - 1, s - 1);
        g.fillStyle = 'rgba(0,0,0,0.18)';
        g.fillRect(x * s + off, y * s + s - 2, s - 1, 2);
      }
    }
    grunge(g, w, h, 600, 0.16);
  }, { repeat: [3, 3] });
}
function shingleTexture() {
  return canvasTex(256, 256, (g, w, h) => {
    g.fillStyle = '#7a4a3a'; g.fillRect(0, 0, w, h);
    const s = 16;
    for (let y = 0; y < h / s; y++) {
      for (let x = 0; x < w / s; x++) {
        const off = (y % 2) * s * 0.5;
        g.fillStyle = 'hsl(' + (8 + Math.random() * 10) + ',' + (38 + Math.random() * 14) + '%,' + (30 + Math.random() * 14) + '%)';
        g.beginPath();
        g.moveTo(x * s + off, y * s);
        g.arc(x * s + off + s / 2, y * s + s, s / 2, Math.PI, 0);
        g.fill();
        g.fillStyle = 'rgba(0,0,0,0.15)';
        g.fillRect(x * s + off, y * s + s - 1, s - 1, 1);
      }
    }
    grunge(g, w, h, 400, 0.14);
  }, { repeat: [2, 2] });
}
function copperTexture() {
  return canvasTex(256, 256, (g, w, h) => {
    g.fillStyle = '#4f8a72'; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 1200; i++) {
      const x = Math.random() * w, y = Math.random() * h;
      const t = Math.random();
      g.fillStyle = t < 0.5 ? 'rgba(120,160,140,' + Math.random() * 0.4 + ')' : 'rgba(50,95,82,' + Math.random() * 0.4 + ')';
      g.fillRect(x, y, 2 + Math.random() * 6, 1 + Math.random() * 3);
    }
  });
}

/* ---------------------------------------------------------------------------
 * Material helpers
 * ------------------------------------------------------------------------- */
const std = (opts) => new THREE.MeshStandardMaterial({ roughness: 0.9, metalness: 0.02, ...opts });

/* ---------------------------------------------------------------------------
 * Lighthouse
 * ------------------------------------------------------------------------- */
function buildLighthouse() {
  const group = new THREE.Group();
  const hlx = HL.x, hlz = HL.z;
  const groundY = heightAt(hlx, hlz);

  // stone foundation
  const base = new THREE.Mesh(new THREE.CylinderGeometry(1.55, 1.9, 0.9, 20), std({ map: stoneTexture() }));
  base.position.y = groundY + 0.45;
  base.castShadow = base.receiveShadow = true;
  group.add(base);

  // tapered tower
  const tower = new THREE.Mesh(
    new THREE.CylinderGeometry(0.72, 1.28, 5.4, 24, 1, true),
    new THREE.MeshStandardMaterial({ map: stripeTexture(), roughness: 0.82, metalness: 0.02, side: THREE.DoubleSide })
  );
  tower.position.y = groundY + 0.9 + 2.7;
  tower.castShadow = true; tower.receiveShadow = false;
  group.add(tower);

  // gallery
  const gallery = new THREE.Mesh(new THREE.CylinderGeometry(0.95, 0.8, 0.32, 20), std({ color: 0x353b42, roughness: 0.7 }));
  gallery.position.y = groundY + 0.9 + 5.4 + 0.16;
  gallery.castShadow = true;
  group.add(gallery);

  // lantern room
  const lantern = new THREE.Mesh(
    new THREE.CylinderGeometry(0.62, 0.62, 1.05, 12, 1, true),
    new THREE.MeshStandardMaterial({ color: 0xfff2c0, emissive: 0xffd27a, emissiveIntensity: 1.5, roughness: 0.4 })
  );
  lantern.position.y = groundY + 0.9 + 5.4 + 0.32 + 0.52;
  group.add(lantern);
  // lantern glass struts
  const struts = new THREE.Mesh(new THREE.CylinderGeometry(0.645, 0.645, 1.05, 12, 1, true), std({ color: 0x2b2f35, roughness: 0.6 }));
  struts.position.copy(lantern.position);
  group.add(struts);

  // copper lantern roof
  const roof = new THREE.Mesh(new THREE.ConeGeometry(0.78, 1.0, 20), std({ map: copperTexture(), roughness: 0.6, metalness: 0.25 }));
  roof.position.y = groundY + 0.9 + 5.4 + 0.32 + 1.05 + 0.42;
  roof.castShadow = true;
  group.add(roof);
  const finial = new THREE.Mesh(new THREE.SphereGeometry(0.09, 10, 8), std({ map: copperTexture(), roughness: 0.5, metalness: 0.3 }));
  finial.position.y = roof.position.y + 0.5;
  group.add(finial);

  // door + window (on the tower surface, facing local +X)
  const towerBottom = groundY + 0.9;
  const towerR = (h) => lerp(1.28, 0.72, h / 5.4);

  const doorR = towerR(0.5);
  const door = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.9, 0.6), std({ color: 0x2f2a24, roughness: 0.8 }));
  door.position.set(doorR + 0.02, towerBottom + 0.45, 0);
  group.add(door);
  const doorFrame = new THREE.Mesh(new THREE.BoxGeometry(0.08, 1.02, 0.72), std({ color: 0xe8e2d6, roughness: 0.7 }));
  doorFrame.position.set(doorR + 0.06, towerBottom + 0.45, 0);
  group.add(doorFrame);

  for (let i = 0; i < 2; i++) {
    const hh = 2.1 + i * 1.7;
    const r = towerR(hh);
    const win = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.55, 0.5), std({ color: 0xffe9b0, emissive: 0xffcf7a, emissiveIntensity: 0.9, roughness: 0.5 }));
    win.position.set(r + 0.02, towerBottom + hh, 0);
    group.add(win);
    const frame = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.67, 0.62), std({ color: 0xefe9dc, roughness: 0.7 }));
    frame.position.set(r + 0.06, towerBottom + hh, 0);
    group.add(frame);
  }

  // warm interior light
  const lamp = new THREE.PointLight(0xffc978, 6, 14, 2);
  lamp.position.y = groundY + 0.9 + 5.4 + 0.32 + 0.5;
  group.add(lamp);

  group.position.set(hlx, 0, hlz);
  group.rotation.y = 0.6;
  return group;
}
scene.add(buildLighthouse());

/* ---------------------------------------------------------------------------
 * Cottage
 * ------------------------------------------------------------------------- */
function buildCottage() {
  const group = new THREE.Group();
  const cx = HILL.x, cz = HILL.z;
  const gy = heightAt(cx, cz);

  // stone foundation
  const base = new THREE.Mesh(new THREE.BoxGeometry(3.4, 0.7, 2.6), std({ map: stoneTexture() }));
  base.position.y = gy + 0.35;
  base.castShadow = base.receiveShadow = true;
  group.add(base);

  // plaster walls
  const walls = new THREE.Mesh(new THREE.BoxGeometry(3.0, 2.1, 2.2), std({ map: plasterTexture() }));
  walls.position.y = gy + 0.7 + 1.05;
  walls.castShadow = walls.receiveShadow = true;
  group.add(walls);

  // gabled roof
  const roofGeo = new THREE.ConeGeometry(2.2, 1.3, 4);
  roofGeo.rotateY(Math.PI / 4);
  const roof = new THREE.Mesh(roofGeo, std({ map: shingleTexture() }));
  roof.position.y = gy + 0.7 + 2.1 + 0.55;
  roof.castShadow = true;
  group.add(roof);

  // chimney
  const chimney = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.3, 1.3, 10), std({ map: stoneTexture() }));
  chimney.position.set(0.8, gy + 0.7 + 2.1 + 0.5, -0.4);
  chimney.castShadow = true;
  group.add(chimney);

  // door
  const door = new THREE.Mesh(new THREE.BoxGeometry(0.62, 1.0, 0.08), std({ color: 0x5a3f2c, roughness: 0.85 }));
  door.position.set(0.7, gy + 0.7 + 0.5, 1.11);
  group.add(door);

  // windows (warm glowing)
  for (const [wx, wz] of [[-0.7, 1.11], [-0.7, -1.11], [1.0, -1.11]]) {
    const win = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.62, 0.06), std({ color: 0xffd98a, emissive: 0xffbe66, emissiveIntensity: 1.2, roughness: 0.5 }));
    win.position.set(wx, gy + 0.7 + 1.05, wz);
    group.add(win);
    // frame
    const frame = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.72, 0.04), std({ color: 0xffffff, roughness: 0.7 }));
    frame.position.set(wx, gy + 0.7 + 1.05, wz * 1.02);
    group.add(frame);
  }

  // interior light
  const lamp = new THREE.PointLight(0xffc478, 4, 9, 2);
  lamp.position.y = gy + 0.7 + 1.0;
  group.add(lamp);

  group.position.set(cx, 0, cz);
  group.rotation.y = -0.7;
  return group;
}
scene.add(buildCottage());

/* ---------------------------------------------------------------------------
 * Winding stone stair (cottage -> lighthouse)
 * ------------------------------------------------------------------------- */
function buildStairs() {
  const group = new THREE.Group();
  const from = new THREE.Vector3(HILL.x, 0, HILL.z);
  const to = new THREE.Vector3(HL.x, 0, HL.z);
  const dir = to.clone().sub(from);
  const perp = new THREE.Vector3(-dir.z, 0, dir.x).normalize();
  const N = 34;
  for (let i = 0; i <= N; i++) {
    const t = i / N;
    const bend = Math.sin(t * Math.PI) * 1.1;
    const p = from.clone().lerp(to, t).addScaledVector(perp, bend);
    const y = heightAt(p.x, p.z) + 0.1;
    const step = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.46, 0.16, 8), std({ map: stoneTexture(), roughness: 0.95 }));
    step.position.set(p.x, y, p.z);
    step.castShadow = step.receiveShadow = true;
    group.add(step);
  }
  return group;
}
scene.add(buildStairs());

/* ---------------------------------------------------------------------------
 * Jetty, boats and fishing gear
 * ------------------------------------------------------------------------- */
function buildHarbour() {
  const group = new THREE.Group();

  // jetty: shore (4.6, 2.7) -> harbour (7.5, 1.5)
  const A = new THREE.Vector3(4.4, heightAt(4.4, 2.7), 2.7);
  const B = new THREE.Vector3(7.6, 0.0, 1.4);
  const deckY = (t) => lerp(A.y + 0.15, 0.6, t);
  const deckPts = [];
  for (let i = 0; i <= 16; i++) {
    const t = i / 16;
    const p = A.clone().lerp(B, t);
    p.y = 0; // store xz
    deckPts.push({ p: p.clone(), t, y: deckY(t) });
  }
  // deck planks
  for (let i = 0; i < deckPts.length - 1; i++) {
    const p0 = deckPts[i], p1 = deckPts[i + 1];
    const mid = p0.p.clone().lerp(p1.p, 0.5);
    const dx = p1.p.x - p0.p.x, dz = p1.p.z - p0.p.z;
    const len = Math.hypot(dx, dz);
    const plank = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.09, len), std({ map: woodTexture() }));
    plank.position.set(mid.x, p0.y, mid.z);
    plank.rotation.y = Math.atan2(dx, dz);
    plank.castShadow = plank.receiveShadow = true;
    group.add(plank);
  }
  // posts
  for (let i = 0; i < deckPts.length; i += 2) {
    const p = deckPts[i];
    const bed = Math.min(heightAt(p.p.x, p.p.z), 0);
    const postH = p.y - bed;
    const post = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, postH, 8), std({ map: woodTexture() }));
    post.position.set(p.p.x, bed + postH / 2, p.p.z);
    post.castShadow = true;
    group.add(post);
  }

  // fishing gear near jetty
  const gearY = A.y + 0.1;
  const barrel1 = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.7, 12), std({ color: 0x6e5236, roughness: 0.8 }));
  barrel1.position.set(4.0, gearY + 0.35, 2.2); barrel1.castShadow = true; group.add(barrel1);
  const barrel2 = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.24, 0.6, 12), std({ color: 0x7d5f3e, roughness: 0.8 }));
  barrel2.position.set(3.7, gearY + 0.3, 2.7); barrel2.castShadow = true; group.add(barrel2);
  // rope coil
  const rope = new THREE.Mesh(new THREE.TorusGeometry(0.34, 0.1, 8, 20), std({ color: 0xb9965f, roughness: 0.9 }));
  rope.rotation.x = Math.PI / 2; rope.position.set(4.2, gearY + 0.1, 2.5); rope.castShadow = true; group.add(rope);
  // buoys
  for (const [bx, bz] of [[4.6, 2.0], [4.4, 1.7]]) {
    const buoy = new THREE.Mesh(new THREE.SphereGeometry(0.16, 12, 10), std({ color: Math.random() < 0.5 ? 0xd8602f : 0xf2f0ea, roughness: 0.55 }));
    buoy.position.set(bx, gearY + 0.16, bz); group.add(buoy);
  }
  // lobster pots (small boxes)
  for (let i = 0; i < 2; i++) {
    const pot = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.32, 0.34), std({ color: 0x8a5a30, roughness: 0.9, transparent: true, opacity: 0.9 }));
    pot.position.set(3.5 + i * 0.6, gearY + 0.16, 1.8); pot.rotation.y = i * 0.9; pot.castShadow = true; group.add(pot);
  }

  // two moored boats (returned for bobbing animation)
  const boats = [];
  for (let i = 0; i < 2; i++) {
    const boat = makeBoat();
    const bx = 6.1 + i * 1.15, bz = 1.7 - i * 0.7;
    boat.position.set(bx, 0, bz);
    boat.rotation.y = (i === 0 ? -0.5 : 0.7);
    group.add(boat);
    boats.push({ mesh: boat, base: new THREE.Vector3(bx, 0, bz), phase: i * 1.9 });
  }

  return { group, boats };
}

function makeBoat() {
  const g = new THREE.Group();
  const hull = new THREE.Mesh(
    new THREE.BoxGeometry(0.85, 0.4, 2.3),
    std({ map: woodTexture(), roughness: 0.85 })
  );
  hull.position.y = 0.05; hull.castShadow = true;
  // shape hull like a punt (tapered) using scaled verts
  hull.geometry.translate(0, 0, 0);
  g.add(hull);
  const rim = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.09, 2.4), std({ map: woodTexture() }));
  rim.position.y = 0.28; g.add(rim);
  const seat = new THREE.Mesh(new THREE.BoxGeometry(0.75, 0.06, 0.3), std({ map: woodTexture() }));
  seat.position.set(0, 0.22, 0.1); g.add(seat);
  const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 1.4, 6), std({ color: 0x6e5236 }));
  mast.position.set(0, 0.9, -0.35); g.add(mast);
  // furled sail
  const sail = new THREE.Mesh(new THREE.ConeGeometry(0.4, 0.9, 10), std({ color: 0xe8e0d2, roughness: 0.9, side: THREE.DoubleSide }));
  sail.rotation.z = Math.PI / 2; sail.position.set(0, 1.0, -0.5); g.add(sail);
  // mooring rope
  const rope = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 1.2, 6), std({ color: 0xb9965f }));
  rope.position.set(0.4, 0.2, 1.1); rope.rotation.z = 0.6; g.add(rope);
  return g;
}

const harbour = buildHarbour();
scene.add(harbour.group);

/* ---------------------------------------------------------------------------
 * Coastal grasses + flowers (merged geometry, wind-shader)
 * ------------------------------------------------------------------------- */
function buildVegetation() {
  const blades = [];
  const flowers = [];

  function sampleLand(minY, maxY, count, minDist) {
    const pts = [];
    let guard = 0;
    while (pts.length < count && guard++ < count * 40) {
      const th = rand() * Math.PI * 2;
      const rr = Math.sqrt(rand()) * ISLAND_R0 * 1.02;
      const x = Math.cos(th) * rr, z = Math.sin(th) * rr;
      const y = heightAt(x, z);
      if (y < minY || y > maxY) continue;
      const steep = sstep(0.2, 1.0, Math.abs(y));
      if (rand() > 0.5 + steep) continue;
      let ok = true;
      for (const q of pts) if (Math.hypot(q.x - x, q.z - z) < minDist) { ok = false; break; }
      if (!ok) continue;
      pts.push({ x, z, y });
    }
    return pts;
  }

  const grassPts = sampleLand(0.4, 3.6, 900, 0.55);
  for (const p of grassPts) {
    const h = 0.18 + rand() * 0.3;
    const sway = 0.4 + rand() * 0.6;
    const c = rand() < 0.5 ? new THREE.Color(0x7fa255) : new THREE.Color(0x92b069);
    c.lerp(new THREE.Color(0xc2b06a), rand() * 0.35);
    blades.push({ x: p.x, z: p.z, y: p.y, h, phase: rand() * Math.PI * 2, sway, color: c });
  }

  const flowerPts = sampleLand(0.6, 3.2, 130, 1.1);
  for (const p of flowerPts) {
    const cols = [0xf2e6a8, 0xf2c6b0, 0xe8e0ea, 0xf2d9a8];
    flowers.push({ x: p.x, z: p.z, y: p.y, color: new THREE.Color(cols[Math.floor(rand() * cols.length)]) });
  }

  const grass = buildGrassGeometry(blades, 0.9, 0.16);
  const flowersMesh = buildFlowers(flowers);
  const g = new THREE.Group();
  g.add(grass, flowersMesh);
  return g;
}

function buildGrassGeometry(blades, windAmp, bend) {
  // each blade: two crossed quads (X shape), tip bends with wind
  const N = blades.length;
  const pos = [], col = [], aY = [], aPhase = [], aHeight = [];
  const addQuad = (b, ang) => {
    // blade base at (x,y,z); quad in the plane rotated by ang around Y
    const ca = Math.cos(ang), sa = Math.sin(ang);
    const halfW = 0.035;
    const corners = [
      [-halfW, 0, 0], [halfW, 0, 0], [halfW, 1, 0], [-halfW, 1, 0]
    ];
    const idxBase = pos.length / 3;
    for (const [lx, ly, lz] of corners) {
      const wx = b.x + lx * ca + lz * sa;
      const wz = b.z - lx * sa + lz * ca;
      pos.push(wx, b.y + ly * b.h, wz);
      col.push(b.color.r, b.color.g, b.color.b);
      aY.push(ly);
      aPhase.push(b.phase);
      aHeight.push(b.h);
    }
    return [0, 1, 2, 0, 2, 3].map(o => idxBase + o);
  };
  const idx = [];
  for (const b of blades) {
    idx.push(...addQuad(b, 0));
    idx.push(...addQuad(b, Math.PI / 2));
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  geo.setAttribute('aY', new THREE.Float32BufferAttribute(aY, 1));
  geo.setAttribute('aPhase', new THREE.Float32BufferAttribute(aPhase, 1));
  geo.setAttribute('aHeight', new THREE.Float32BufferAttribute(aHeight, 1));
  geo.setIndex(idx);

  const mat = new THREE.ShaderMaterial({
    vertexColors: true,
    uniforms: { uTime: { value: 0 }, uWind: { value: new THREE.Vector3(0.6, 0, 0.25) }, uSunDir: { value: sunDir.clone() }, uSky: { value: new THREE.Color(0xcfdde8) }, uGround: { value: new THREE.Color(0xccb98e) } },
    vertexShader: /* glsl */ `
      attribute float aY; attribute float aPhase; attribute float aHeight;
      varying vec3 vColor; varying float vY;
      uniform float uTime; uniform vec3 uWind;
      varying vec3 vN;
      void main(){
        vColor = color; vY = aY;
        vec3 p = position;
        float w = sin(uTime * 1.5 + aPhase) * uWind.x + sin(uTime * 1.1 + aPhase * 2.0) * 0.3;
        float bendAmt = aY * aY * (0.5 + 0.5 * aHeight);
        p.x += w * bendAmt * 0.35;
        p.z += (sin(uTime * 1.3 + aPhase) * uWind.z) * bendAmt * 0.3;
        // fake normal: face up-ish, darken lower
        vN = normalize(vec3(0.2, 1.0, 0.15));
        gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
      }`,
    fragmentShader: TONE_GLSL + /* glsl */ `
      varying vec3 vColor; varying float vY; varying vec3 vN;
      uniform vec3 uSunDir; uniform vec3 uSky; uniform vec3 uGround;
      void main(){
        vec3 N = normalize(vN);
        float diff = max(dot(N, normalize(uSunDir)), 0.0);
        float hemi = N.y * 0.5 + 0.5;
        vec3 ambient = mix(uGround, uSky, hemi);
        vec3 col = vColor * (ambient * 0.9 + vec3(1.0,0.9,0.7) * diff * 0.55);
        col *= mix(0.55, 1.0, vY);
        gl_FragColor = vec4(toSRGB(acesFilmic(col)), 1.0);
      }`
  });
  const m = new THREE.Mesh(geo, mat);
  m.frustumCulled = false;
  m.castShadow = false; m.receiveShadow = false;
  m.renderOrder = 0;
  return m;
}

function buildFlowers(flowers) {
  const N = flowers.length;
  const pos = [], col = [];
  for (const f of flowers) {
    // a tiny 4-petal cross + stem
    const stemTop = f.y + 0.22;
    for (let i = 0; i < 4; i++) {
      const ang = i * Math.PI / 2;
      const px = f.x + Math.cos(ang) * 0.05, pz = f.z + Math.sin(ang) * 0.05;
      pos.push(px, stemTop, pz); col.push(f.color.r, f.color.g, f.color.b);
      pos.push(f.x, stemTop, f.z); col.push(f.color.r, f.color.g, f.color.b);
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  const mat = new THREE.PointsMaterial({ size: 0.09, vertexColors: true, sizeAttenuation: true, map: softDot() });
  const m = new THREE.Points(geo, mat);
  m.renderOrder = 1;
  return m;
}
function softDot() {
  const c = document.createElement('canvas'); c.width = c.height = 32;
  const g = c.getContext('2d');
  const gr = g.createRadialGradient(16, 16, 0, 16, 16, 16);
  gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = gr; g.fillRect(0, 0, 32, 32);
  const t = new THREE.CanvasTexture(c); return t;
}

const vegetation = buildVegetation();
scene.add(vegetation);

/* ---------------------------------------------------------------------------
 * Sea grass (harbour floor) — swaying underwater
 * ------------------------------------------------------------------------- */
function buildSeaGrass() {
  const blades = [];
  for (let i = 0; i < 500; i++) {
    const th = rand() * Math.PI * 2;
    const rr = Math.sqrt(rand()) * 9.0;
    const x = Math.cos(th) * rr * 0.6 + 4.0, z = Math.sin(th) * rr * 0.6 + 1.0;
    const y = heightAt(x, z);
    if (y > -0.2 || y < -3.2) continue;
    const g = valueNoise2(x * 0.9 + 4, z * 0.9 - 3);
    if (g < 0.45) continue;
    blades.push({ x, z, y: y + 0.02, h: 0.25 + rand() * 0.5, phase: rand() * Math.PI * 2, sway: 0.25, color: new THREE.Color(0x3f6b4a) });
  }
  const m = buildGrassGeometry(blades, 0.14, 0.06);
  m.renderOrder = 2;
  m.material.transparent = true;
  m.material.uniforms.uWind.value = new THREE.Vector3(0.2, 0, 0.1);
  return m;
}
scene.add(buildSeaGrass());

/* ---------------------------------------------------------------------------
 * Stones on shelves and harbour floor
 * ------------------------------------------------------------------------- */
function buildStones() {
  const group = new THREE.Group();
  const geo = new THREE.DodecahedronGeometry(1, 0);
  for (let i = 0; i < 70; i++) {
    const th = rand() * Math.PI * 2;
    const rr = Math.sqrt(rand()) * 10.5;
    const x = Math.cos(th) * rr, z = Math.sin(th) * rr;
    const y = heightAt(x, z);
    if (y > 1.2 || y < -3.0) continue;
    const s = 0.08 + rand() * 0.24;
    const wet = y < 0.1;
    const c = wet ? new THREE.Color(0x565e66) : new THREE.Color(0x83898f);
    c.lerp(new THREE.Color(0xa89a7c), rand() * 0.4);
    const stone = new THREE.Mesh(geo, std({ color: c, roughness: 0.95 }));
    stone.position.set(x, y + s * 0.3, z);
    stone.scale.set(s, s * (0.6 + rand() * 0.4), s);
    stone.rotation.set(rand() * Math.PI, rand() * Math.PI, rand() * Math.PI);
    stone.castShadow = true; stone.receiveShadow = true;
    group.add(stone);
  }
  return group;
}
scene.add(buildStones());

/* ---------------------------------------------------------------------------
 * Gulls
 * ------------------------------------------------------------------------- */
function buildGulls() {
  const gulls = [];
  for (let i = 0; i < 4; i++) {
    const body = new THREE.Mesh(new THREE.SphereGeometry(0.16, 8, 6), std({ color: 0xf0f1f2, roughness: 0.7 }));
    body.scale.set(1, 0.8, 1.6);
    const wingL = new THREE.Mesh(new THREE.PlaneGeometry(0.85, 0.34), new THREE.MeshStandardMaterial({ color: 0xe8eaec, roughness: 0.7, side: THREE.DoubleSide }));
    const wingR = wingL.clone();
    wingL.position.x = -0.5; wingR.position.x = 0.5;
    const g = new THREE.Group();
    g.add(body, wingL, wingR);
    gulls.push({
      group: g,
      wingL, wingR,
      center: new THREE.Vector3(2 + i * 2, 0, -9 + i * 1.5),
      radius: 4 + i * 1.3,
      height: 4.5 + i * 0.8,
      speed: 0.12 + i * 0.05,
      phase: i * 1.7,
      flapPhase: i * 2.1
    });
    scene.add(g);
  }
  return gulls;
}
const gulls = buildGulls();

/* ---------------------------------------------------------------------------
 * Dolphins + splash/wake particles
 * ------------------------------------------------------------------------- */
function makeDolphin() {
  const g = new THREE.Group();
  const mat = new THREE.MeshStandardMaterial({ color: 0x5b6b7d, roughness: 0.35, metalness: 0.06 });
  const body = new THREE.Mesh(new THREE.SphereGeometry(1, 20, 14), mat);
  body.scale.set(0.32, 0.4, 1.35);
  g.add(body);
  const fin = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.34, 4), mat);
  fin.scale.set(1, 1, 0.4); fin.position.set(0, 0.34, -0.15); fin.rotation.x = -0.4;
  g.add(fin);
  const tail = new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.5, 4), mat);
  tail.scale.set(0.3, 1, 1); tail.position.set(0, 0.05, -1.35); tail.rotation.x = Math.PI / 2;
  g.add(tail);
  return g;
}

class ParticlePool {
  constructor(max) {
    this.max = max;
    this.pos = new Float32Array(max * 3);
    this.vel = new Float32Array(max * 3);
    this.life = new Float32Array(max);
    this.maxLife = new Float32Array(max);
    this.alpha = new Float32Array(max);
    this.head = 0;
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(this.pos, 3));
    this.geo = geo;
    const mat = new THREE.PointsMaterial({ color: 0xffffff, size: 0.16, sizeAttenuation: true, transparent: true, depthWrite: false, map: softDot() });
    this.points = new THREE.Points(geo, mat);
    this.points.frustumCulled = false;
    this.points.renderOrder = 12;
    this.points.visible = true;
    scene.add(this.points);
    this.n = 0;
  }
  spawn(p, v, life) {
    const i = this.head;
    this.head = (this.head + 1) % this.max;
    this.pos[i * 3] = p.x; this.pos[i * 3 + 1] = p.y; this.pos[i * 3 + 2] = p.z;
    this.vel[i * 3] = v.x; this.vel[i * 3 + 1] = v.y; this.vel[i * 3 + 2] = v.z;
    this.life[i] = life; this.maxLife[i] = life; this.alpha[i] = 1;
    this.n = Math.min(this.n + 1, this.max);
  }
  update(dt) {
    const g = -6.0;
    for (let i = 0; i < this.max; i++) {
      if (this.life[i] <= 0) continue;
      this.life[i] -= dt;
      if (this.life[i] <= 0) { this.alpha[i] = 0; this.pos[i * 3 + 1] = -999; continue; }
      this.vel[i * 3 + 1] += g * dt;
      this.pos[i * 3] += this.vel[i * 3] * dt;
      this.pos[i * 3 + 1] += this.vel[i * 3 + 1] * dt;
      this.pos[i * 3 + 2] += this.vel[i * 3 + 2] * dt;
      this.alpha[i] = this.life[i] / this.maxLife[i];
    }
    this.geo.attributes.position.needsUpdate = true;
    this.points.material.opacity = 0.9;
  }
}

function buildDolphins() {
  const dolphins = [];
  const pool = new ParticlePool(700);
  for (let i = 0; i < 4; i++) {
    const mesh = makeDolphin();
    scene.add(mesh);
    const d = {
      mesh,
      pool,
      orbitRadius: 15 + i * 2.2,
      orbitCenter: new THREE.Vector3(0, 0, 0),
      angle: i * (Math.PI * 2 / 4) + 0.6,
      angSpeed: 0.11 + i * 0.02,
      depth: -0.18 - i * 0.03,
      state: 'swim',
      stateT: 0,
      nextLeap: 2.5 + rand() * 6,
      swimSpeed: 1.6 + rand() * 0.6,
      wakeAcc: 0,
      dir: new THREE.Vector3(0, 0, 1)
    };
    dolphins.push(d);
  }
  return dolphins;
}
const dolphins = buildDolphins();

function dolphinUpdate(d, dt, time) {
  const a = d.angle;
  // position on orbit with gentle wander
  const wob = Math.sin(time * 0.4 + d.orbitRadius) * 1.2;
  const r = d.orbitRadius + wob;
  const px = d.orbitCenter.x + Math.cos(a) * r;
  const pz = d.orbitCenter.z + Math.sin(a) * r;

  if (d.state === 'swim') {
    d.nextLeap -= dt;
    d.angle += d.angSpeed * dt;
    // tangent direction (counter-clockwise)
    d.dir.set(-Math.sin(a), 0, Math.cos(a));
    d.mesh.position.set(px, d.depth, pz);
    // orient to tangent
    orientForward(d.mesh, d.dir);
    d.mesh.rotation.z = Math.sin(time * 1.3 + d.angle * 3) * 0.12;
    d.wakeAcc += dt;
    if (d.wakeAcc > 0.55) {
      d.wakeAcc = 0;
      const back = d.mesh.position.clone().addScaledVector(d.dir, -0.7);
      for (let k = 0; k < 3; k++) {
        d.pool.spawn(new THREE.Vector3(back.x + (rand() - 0.5) * 0.3, 0.02, back.z + (rand() - 0.5) * 0.3),
          new THREE.Vector3((rand() - 0.5) * 0.4, 0.6 + rand() * 0.5, (rand() - 0.5) * 0.4), 0.9 + rand() * 0.5);
      }
    }
    if (d.nextLeap <= 0) {
      d.state = 'leap';
      d.stateT = 0;
      d.leapStart = d.mesh.position.clone();
      d.leapDir = d.dir.clone();
      d.leapSpeed = 3.2 + rand() * 1.0;
      d.leapDur = 0.85 + rand() * 0.3;
      d.leapJump = 1.4 + rand() * 0.5;
      // exit splash
      splash(d.pool, d.leapStart.clone().setY(0.05));
    }
  } else if (d.state === 'leap') {
    d.stateT += dt;
    const t = d.stateT;
    const dur = d.leapDur;
    const f = t / dur;
    if (f >= 1) {
      d.state = 'swim';
      d.nextLeap = 3.0 + rand() * 7.0;
      d.mesh.position.y = d.depth;
      splash(d.pool, d.mesh.position.clone().setY(0.05));
      return;
    }
    const xz = d.leapStart.clone().addScaledVector(d.leapDir, d.leapSpeed * t);
    const y = d.depth + d.leapJump * 4.0 * f * (1 - f);
    d.mesh.position.set(xz.x, y, xz.z);
    // pitch with arc
    const vy = d.leapJump * 4.0 * (1 - 2 * f) / dur;
    d.dir.set(d.leapDir.x, vy * 0.12, d.leapDir.z).normalize();
    orientForward(d.mesh, d.dir);
  }
}

function orientForward(obj, fwd) {
  const f = fwd.clone().normalize();
  const up = new THREE.Vector3(0, 1, 0);
  const right = new THREE.Vector3().crossVectors(up, f).normalize();
  if (right.lengthSq() < 1e-6) right.set(1, 0, 0);
  const up2 = new THREE.Vector3().crossVectors(f, right).normalize();
  const m = new THREE.Matrix4().makeBasis(right, up2, f);
  obj.quaternion.setFromRotationMatrix(m);
}

function splash(pool, p) {
  for (let k = 0; k < 14; k++) {
    const a = rand() * Math.PI * 2;
    const sp = 0.6 + rand() * 1.6;
    pool.spawn(p.clone(),
      new THREE.Vector3(Math.cos(a) * sp, 1.2 + rand() * 2.2, Math.sin(a) * sp), 0.7 + rand() * 0.5);
  }
}

/* ---------------------------------------------------------------------------
 * UI wiring (H / R, about panel)
 * ------------------------------------------------------------------------- */
const ui = document.getElementById('ui');
const loading = document.getElementById('loading');
const about = document.getElementById('about');
const aboutToggle = document.getElementById('about-toggle');
const copyBtn = document.getElementById('copy-btn');
const promptEl = document.getElementById('prompt');

const MODEL_NAME = 'deepseek-v4-pro';
document.getElementById('model-name').textContent = MODEL_NAME + ' (DeepSeek Harness)';

const FULL_PROMPT = `Build an animated Three.js diorama: THE TIDAL LIGHTHOUSE.

A rugged miniature coastline curves around a sheltered turquoise harbor. On the highest rocky point stands a weathered red-and-white lighthouse. A winding stone stair connects it to a tiny fishing cottage, a wooden jetty and two moored boats.

Compose the landscape as one irregular island-like display piece against a soft pale background. Its cutaway sides reveal layered rock, sand and the underwater seabed. Give the coastline a strong silhouette and make it interesting from every side.

The ocean is the main visual attraction. On the exposed side, rolling swells approach the rocks, steepen and break into white foam. Water washes across low rock shelves and drains back. In the sheltered harbor, use smaller ripples and clearer water, revealing sand, stones and patches of sea grass. Transition naturally from deep blue to turquoise to transparent shallows.

Give the lighthouse and cottage tactile detail: worn plaster, stone foundations, a copper lantern roof, window frames, warm interior light, ropes and fishing equipment near the jetty. Use coastal grasses and small flowers sparingly.

Set the scene in late-afternoon light: warm sun on the buildings, cool blue shadows in the rocks, bright foam and restrained reflections. Keep the scene readable and richly colored.

Everything runs continuously: waves arrive in overlapping sets, foam disperses, boats bob gently on their moorings, a few gulls circle and grass moves in the wind. Keep the water motion coherent, with the sheltered harbor visibly calmer than the open coast.

During the daylight scene, add a few dolphins (3–5) swimming through the open ocean. They occasionally surface and make small, graceful leaps out of the water at varied, semi-random intervals, with subtle splashes and wakes. Vary their routes and stagger their timing so their appearances feel natural and spontaneous. Keep them away from the rocks and boats, and make their appearances occasional enough that the water remains the main attraction.

Give me full manual camera control: mouse drag to orbit, right-drag to pan, wheel to zoom, with smooth damping. Start with a beautiful elevated three-quarter view showing both the harbor and breaking waves. Keep the camera entirely under my control. H hides any interface; R resets the view.

Generate all geometry and textures in code. Use Three.js and necessary libraries, without downloaded images or models. Deliver a compact runnable web project.

Concentrate on beautiful water, a strong composition and convincing light. Check the result in the browser from an overall view and a closer water-level view, fix obvious problems, then deliver with launch instructions. Avoid adding unrelated features or a testing framework.

In the finished diorama, include an accessible, unobtrusive section that identifies the AI model used to create it and displays the complete prompt used to generate it, including this instruction, so others can copy it and try it themselves. Use the actual model name and variant when known; if they are not available, say so rather than guessing. Keep this section hidden along with the rest of the interface when H is pressed.`;
promptEl.textContent = FULL_PROMPT;

aboutToggle.addEventListener('click', () => about.classList.toggle('open'));
copyBtn.addEventListener('click', async () => {
  try { await navigator.clipboard.writeText(FULL_PROMPT); copyBtn.textContent = 'Copied!'; }
  catch { copyBtn.textContent = 'Copy failed'; }
  setTimeout(() => (copyBtn.textContent = 'Copy prompt'), 1400);
});

let uiHidden = false;
window.addEventListener('keydown', (e) => {
  if (e.key === 'h' || e.key === 'H') {
    uiHidden = !uiHidden;
    ui.classList.toggle('hidden', uiHidden);
    if (uiHidden) about.classList.remove('open');
  } else if (e.key === 'r' || e.key === 'R') {
    controls.reset();
  }
});

/* ---------------------------------------------------------------------------
 * Animation loop
 * ------------------------------------------------------------------------- */
const clock = new THREE.Clock();
function animate() {
  const dt = Math.min(clock.getDelta(), 0.05);
  const t = clock.elapsedTime;

  controls.update();
  waterMat.uniforms.uTime.value = t;
  waterMat.uniforms.uCamPos.value.copy(camera.position);

  // grass / sea-grass wind
  vegetation.children.forEach((c) => { if (c.material && c.material.uniforms) c.material.uniforms.uTime.value = t; });

  // boats bob
  for (const b of harbour.boats) {
    const ph = t * 1.1 + b.phase;
    b.mesh.position.y = Math.sin(ph) * 0.07 + Math.sin(ph * 1.7) * 0.03;
    b.mesh.rotation.x = Math.sin(ph * 0.9) * 0.05;
    b.mesh.rotation.z = Math.sin(ph * 1.3) * 0.07;
  }

  // gulls
  for (const gl of gulls) {
    const a = t * gl.speed + gl.phase;
    gl.group.position.set(
      gl.center.x + Math.cos(a) * gl.radius,
      gl.height + Math.sin(a * 2.0 + gl.phase) * 1.2,
      gl.center.z + Math.sin(a) * gl.radius
    );
    const flap = Math.sin(t * 5.0 + gl.flapPhase);
    gl.wingL.rotation.z = flap * 0.9;
    gl.wingR.rotation.z = -flap * 0.9;
    gl.group.rotation.y = -a + Math.PI / 2;
    gl.group.rotation.z = Math.cos(a) * 0.15;
  }

  // dolphins
  for (const d of dolphins) dolphinUpdate(d, dt, t);
  for (const d of dolphins) d.pool.update(dt);

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

/* ---------------------------------------------------------------------------
 * Ready
 * ------------------------------------------------------------------------- */
requestAnimationFrame(() => {
  loading.classList.add('done');
});

animate();
