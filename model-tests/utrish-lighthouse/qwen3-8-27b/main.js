import * as THREE from 'three';
import { OrbitControls } from './libs/OrbitControls.js';
import { buildTerrain, terrainHeight } from './lib/terrain.js';
import { buildWater } from './lib/water.js';
import { buildStructures } from './lib/buildings.js';
import { buildVegetation, buildGulls, buildDolphins } from './lib/life.js';
import { skyTexture } from './lib/textures.js';
import { LAYOUT } from './lib/config.js';

// ---------------------------------------------------------------------------
// Utrish Light House — animated Three.js diorama.
// ---------------------------------------------------------------------------

const container = document.getElementById('scene');
const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;
renderer.outputColorSpace = THREE.SRGBColorSpace;
container.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const FOG_COLOR = new THREE.Color(0xe6e3d5);
scene.fog = new THREE.Fog(FOG_COLOR, 90, 220);

// Sky dome (soft pale late-afternoon gradient, warm low western sun)
const sky = new THREE.Mesh(
  new THREE.SphereGeometry(400, 32, 16),
  new THREE.MeshBasicMaterial({ map: skyTexture(), side: THREE.BackSide, fog: false })
);
scene.add(sky);

// Camera
const camera = new THREE.PerspectiveCamera(46, container.clientWidth / container.clientHeight, 0.1, 1000);
const HOME_POS = new THREE.Vector3(-47, 31, 26);
const HOME_TGT = new THREE.Vector3(-3, 5, 0);
camera.position.copy(HOME_POS);

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.copy(HOME_TGT);
controls.enableDamping = true;
controls.dampingFactor = 0.06;
controls.minDistance = 8;
controls.maxDistance = 160;
controls.maxPolarAngle = Math.PI * 0.495; // don't go under the piece
controls.update();

// Lights: warm low sun over the open west sea + cool fill.
const sunDir = new THREE.Vector3(-0.72, 0.34, 0.30).normalize();
const sun = new THREE.DirectionalLight(0xffd9a6, 2.4);
sun.position.copy(sunDir).multiplyScalar(70);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
sun.shadow.camera.near = 1;
sun.shadow.camera.far = 200;
const sc = sun.shadow.camera;
sc.left = -70; sc.right = 70; sc.top = 60; sc.bottom = -60;
sun.shadow.bias = -0.0004;
scene.add(sun, sun.target);

const hemi = new THREE.HemisphereLight(0xbcd4e8, 0x5a4a34, 0.75);
scene.add(hemi);
scene.add(new THREE.AmbientLight(0x40454f, 0.35));
// cool blue rim from the open sea side (shadows read cool)
const rim = new THREE.DirectionalLight(0x5f7fa8, 0.5);
rim.position.set(-40, 10, -20);
scene.add(rim);

// Build the world
const terrain = buildTerrain();
terrain.name = 'terrain';
scene.add(terrain);

const water = buildWater();
water.name = 'water';
scene.add(water);

const { group: structures, boats } = buildStructures();
structures.name = 'structures';
scene.add(structures);

const vegetation = buildVegetation();
scene.add(vegetation);

const gulls = buildGulls();
scene.add(gulls);

const dolphins = buildDolphins();
scene.add(dolphins);

// ---------------------------------------------------------------------------
// UI: hide with H, reset view with R.
// ---------------------------------------------------------------------------
const ui = document.getElementById('ui');
let uiHidden = false;
function resetView() {
  camera.position.copy(HOME_POS);
  controls.target.copy(HOME_TGT);
  controls.update();
}
window.addEventListener('keydown', (e) => {
  const k = e.key.toLowerCase();
  if (k === 'h') {
    uiHidden = !uiHidden;
    ui.classList.toggle('hidden', uiHidden);
  } else if (k === 'r') {
    resetView();
  }
});

const infoBtn = document.getElementById('infoBtn');
const infoPanel = document.getElementById('infoPanel');
infoBtn.addEventListener('click', () => infoPanel.classList.toggle('open'));
document.getElementById('copyPrompt').addEventListener('click', async () => {
  const txt = document.getElementById('promptText').innerText;
  try { await navigator.clipboard.writeText(txt); document.getElementById('copyPrompt').textContent = 'Copied ✓'; }
  catch { document.getElementById('copyPrompt').textContent = 'Select + copy'; }
  setTimeout(() => (document.getElementById('copyPrompt').textContent = 'Copy prompt'), 1500);
});
document.getElementById('closeInfo').addEventListener('click', () => infoPanel.classList.remove('open'));

// ---------------------------------------------------------------------------
// Resize + animation loop
// ---------------------------------------------------------------------------
window.addEventListener('resize', () => {
  const w = container.clientWidth, h = container.clientHeight;
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  renderer.setSize(w, h);
});

const clock = new THREE.Clock();

// tiny dev hook (used for automated visual checks; harmless in production)
window.utrish = {
  camera, controls, scene,
  setView(pos, target) {
    camera.position.set(pos[0], pos[1], pos[2]);
    controls.target.set(target[0], target[1], target[2]);
    controls.update();
  },
  // raycast from normalized screen coords; returns object names along the ray
  raycastAt(nx, ny) {
    const ray = new THREE.Raycaster();
    ray.setFromCamera(new THREE.Vector2(nx, ny), camera);
    const hits = ray.intersectObjects(scene.children, true);
    return hits.slice(0, 4).map(h => {
      let n = h.object.name || 'anon';
      if (!h.object.name) {
        let o = h.object, d = 0;
        while (o && !o.name && d < 6) { o = o.parent; d++; }
        n = o ? (o.name || 'anon') : 'anon';
      }
      return `${n}@${h.distance.toFixed(1)}`;
    });
  },
  // CPU depth (meters) at a world XZ point, from the uploaded depth map
  depthProbe(x, z) {
    const wt = water.userData.depthTex;
    const { data, N, W0, WSIZE, maxD } = wt.userData;
    const i = Math.round((x - W0.x) / WSIZE.x * (N - 1));
    const j = Math.round((z - W0.z) / WSIZE.z * (N - 1));
    const ii = Math.max(0, Math.min(N - 1, i));
    const jj = Math.max(0, Math.min(N - 1, j));
    return data[(jj * N + ii) * 4] / 255 * maxD;
  },
  // terrain height at a world XZ point
  heightProbe: (x, z) => terrainHeight(x, z),
};

function animate() {
  requestAnimationFrame(animate);
  const t = clock.getElapsedTime();

  try {
    water.userData.update(t);
    vegetation.userData.update(t);
    gulls.userData.update(t);
    dolphins.userData.update(t);

    // boats bob gently at the pier
    for (const b of boats) {
      b.mesh.position.y = b.base.y + Math.sin(t * 1.2 + b.phase) * 0.12;
      b.mesh.rotation.z = Math.sin(t * 0.9 + b.phase) * 0.04;
      b.mesh.rotation.x = Math.cos(t * 0.7 + b.phase) * 0.03;
    }
  } catch (err) {
    console.error('frame update error', err);
  }

  controls.update();
  renderer.render(scene, camera);
}
animate();
