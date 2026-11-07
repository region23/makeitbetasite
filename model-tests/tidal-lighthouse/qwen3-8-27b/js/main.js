// main.js — THE TIDAL LIGHTHOUSE: scene setup, light, camera, animation.

import * as THREE from 'three';
import { OrbitControls } from '../vendor/OrbitControls.js';
import { waveYAt } from './terrain.js';
import { createWater } from './water.js';
import { buildIsland, canvasTexture } from './island.js';
import { buildStructures } from './structures.js';
import { createGulls, createDolphins } from './creatures.js';

// ---------------- renderer / scene ----------------
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.22;
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.background = canvasTexture(64, 512, (ctx, w, h) => {
  const g = ctx.createLinearGradient(0, 0, 0, h);
  g.addColorStop(0, '#d3e0e8');
  g.addColorStop(0.55, '#e9e9e2');
  g.addColorStop(1, '#f4eee2');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, w, h);
}, { srgb: true });
scene.fog = new THREE.Fog(0xe9e4da, 130, 320);

// ---------------- camera + controls ----------------
const HOME_POS = new THREE.Vector3(17.5, 16.5, 33.5);
const HOME_TARGET = new THREE.Vector3(0, 0.8, 0);
const camera = new THREE.PerspectiveCamera(42, window.innerWidth / window.innerHeight, 0.5, 500);
camera.position.copy(HOME_POS);

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.copy(HOME_TARGET);
controls.enableDamping = true;
controls.dampingFactor = 0.06;
controls.rotateSpeed = 0.55;
controls.panSpeed = 0.85;
controls.zoomSpeed = 0.9;
controls.minDistance = 6;
controls.maxDistance = 110;
controls.maxPolarAngle = 1.45;
controls.minPolarAngle = 0.04;

// ---------------- light: late afternoon ----------------
const hemi = new THREE.HemisphereLight(0xbfd8e6, 0x96896f, 0.8);
scene.add(hemi);

const sun = new THREE.DirectionalLight(0xffd7a3, 3.0);
sun.position.set(-36, 17, 24);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
sun.shadow.camera.left = -28;
sun.shadow.camera.right = 28;
sun.shadow.camera.top = 28;
sun.shadow.camera.bottom = -28;
sun.shadow.camera.near = 2;
sun.shadow.camera.far = 130;
sun.shadow.bias = -0.0004;
sun.shadow.normalBias = 0.04;
scene.add(sun, sun.target);

const fill = new THREE.DirectionalLight(0x8fa8c8, 0.5);
fill.position.set(24, 12, -20);
scene.add(fill);

// ---------------- build the diorama ----------------
const water = createWater(scene);
const island = buildIsland(scene);
const structures = buildStructures(scene);
const gulls = createGulls(scene, 3);
const dolphins = createDolphins(scene, 4);

// ---------------- animation ----------------
const clock = new THREE.Clock();
const _v = new THREE.Vector3();

function updateBoats(t) {
  for (const b of structures.boats.boats) {
    const g = b.group;
    const wx = g.position.x, wz = g.position.z;
    const wy = waveYAt(wx, wz, t);
    g.position.y = wy * 0.85 + Math.sin(t * 0.5 + b.phase) * b.bobAmp;
    g.rotation.z = Math.sin(t * b.rotSpeed + b.phase) * 0.045;
    g.rotation.x = Math.sin(t * b.rotSpeed * 0.8 + b.phase * 1.7) * 0.035;
  }
  // mooring ropes: sagging curve between bow and ring
  for (const rope of structures.boats.ropes) {
    const boatPos = _v.copy(rope.offset).applyEuler(rope.boat.rotation);
    boatPos.add(rope.boat.position);
    const ringPos = structures.jetty[rope.ringKey];
    const pos = rope.line.geometry.attributes.position;
    const segs = pos.count;
    for (let i = 0; i < segs; i++) {
      const k = i / (segs - 1);
      pos.setXYZ(
        i,
        boatPos.x + (ringPos.x - boatPos.x) * k,
        boatPos.y + (ringPos.y - boatPos.y) * k - Math.sin(k * Math.PI) * 0.35,
        boatPos.z + (ringPos.z - boatPos.z) * k
      );
    }
    pos.needsUpdate = true;
  }
}

function updateLights(t) {
  for (const L of structures.lights) {
    L.light.intensity = L.base * (1 + L.flick * Math.sin(t * L.speed) * Math.sin(t * L.speed * 2.7 + 1.3));
  }
  structures.boats.flags.forEach((f, i) => {
    f.rotation.y = Math.sin(t * 2.1 + i) * 0.25;
  });
}

let resetAnim = null;
function resetView() {
  resetAnim = { t: 0, pos: camera.position.clone(), target: controls.target.clone() };
}
controls.addEventListener('start', () => { resetAnim = null; });

function animate() {
  requestAnimationFrame(animate);
  const dt = Math.min(clock.getDelta(), 0.05);
  const t = clock.elapsedTime;

  if (water.material.uniforms) water.material.uniforms.uTime.value = t;
  island.windUniform.value = t;
  updateBoats(t);
  updateLights(t);
  gulls.update(t);
  dolphins.update(t, dt);

  if (resetAnim) {
    resetAnim.t += dt / 0.6;
    const k = Math.min(1, resetAnim.t);
    const e = k * k * (3 - 2 * k);
    camera.position.lerpVectors(resetAnim.pos, HOME_POS, e);
    controls.target.lerpVectors(resetAnim.target, HOME_TARGET, e);
    if (k >= 1) resetAnim = null;
  }
  controls.update();
  renderer.render(scene, camera);
}
animate();

// ---------------- input ----------------
window.addEventListener('keydown', (e) => {
  if (e.repeat) return;
  const k = e.key.toLowerCase();
  if (k === 'h') {
    document.body.classList.toggle('ui-hidden');
  } else if (k === 'r') {
    resetView();
  }
});

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// ---------------- credits UI ----------------
const creditsBtn = document.getElementById('creditsBtn');
const creditsPanel = document.getElementById('creditsPanel');
creditsBtn.addEventListener('click', () => {
  const open = !creditsPanel.hidden;
  creditsPanel.hidden = open;
  creditsBtn.setAttribute('aria-expanded', String(!open));
});
creditsPanel.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    creditsPanel.hidden = true;
    creditsBtn.setAttribute('aria-expanded', 'false');
    creditsBtn.focus();
  }
});
const copyBtn = document.getElementById('copyBtn');
const copyStatus = document.getElementById('copyStatus');
copyBtn.addEventListener('click', async () => {
  const text = document.getElementById('promptText').textContent;
  try {
    await navigator.clipboard.writeText(text);
    copyStatus.textContent = 'Copied.';
  } catch {
    copyStatus.textContent = 'Select the text above to copy it manually.';
  }
  setTimeout(() => { copyStatus.textContent = ''; }, 2500);
});


