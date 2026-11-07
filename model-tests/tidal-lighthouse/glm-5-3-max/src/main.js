// THE TIDAL LIGHTHOUSE — main
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { buildTerrain } from './terrain.js';
import { buildWater } from './water.js';
import { buildProps } from './props.js';
import { buildCreatures } from './creatures.js';

// ---------------------------------------------------------------------------
// Renderer / scene / camera

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.12;
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(44, window.innerWidth / window.innerHeight, 0.1, 600);

const INIT_POS = new THREE.Vector3(-30, 21, 35);
const INIT_TARGET = new THREE.Vector3(0, 1.4, 0.5);
camera.position.copy(INIT_POS);

// ---------------------------------------------------------------------------
// Sky: soft pale gradient with a warm late-afternoon glow toward the sun

const SUN_DIR = new THREE.Vector3(0.62, 0.48, 0.62).normalize();
const skyMat = new THREE.ShaderMaterial({
  side: THREE.BackSide,
  depthWrite: false,
  uniforms: { uSunDir: { value: SUN_DIR } },
  vertexShader: /* glsl */`
    varying vec3 vDir;
    void main() {
      vDir = position;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: /* glsl */`
    uniform vec3 uSunDir;
    varying vec3 vDir;
    float hash(vec2 q) { return fract(sin(dot(q, vec2(127.1, 311.7))) * 43758.5453); }
    void main() {
      vec3 d = normalize(vDir);
      vec3 top = vec3(0.52, 0.68, 0.82);
      vec3 low = vec3(0.80, 0.84, 0.85);
      vec3 hor = vec3(0.95, 0.90, 0.80);
      vec3 c = mix(top, low, smoothstep(0.55, 0.12, d.y));
      c = mix(c, hor, smoothstep(0.14, 0.0, d.y));
      float s = max(dot(d, uSunDir), 0.0);
      c += vec3(1.0, 0.82, 0.55) * (pow(s, 190.0) * 0.7 + pow(s, 9.0) * 0.10);
      c += (hash(d.xy * 421.0) - 0.5) * 0.006; // dither
      gl_FragColor = vec4(c, 1.0);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }
  `,
});
const sky = new THREE.Mesh(new THREE.SphereGeometry(400, 32, 16), skyMat);
scene.add(sky);

// ---------------------------------------------------------------------------
// Late-afternoon light: warm sun, cool fill, soft ambient

const sun = new THREE.DirectionalLight(0xffd9a6, 3.0);
sun.position.copy(SUN_DIR).multiplyScalar(60);
sun.castShadow = true;
sun.shadow.mapSize.set(4096, 4096);
sun.shadow.camera.left = -36; sun.shadow.camera.right = 36;
sun.shadow.camera.top = 36; sun.shadow.camera.bottom = -36;
sun.shadow.camera.near = 5; sun.shadow.camera.far = 150;
sun.shadow.bias = -0.0004;
sun.shadow.normalBias = 0.03;
scene.add(sun, sun.target);

const fill = new THREE.DirectionalLight(0x8fb2d8, 0.8);
fill.position.set(-40, 18, -34);
scene.add(fill);
scene.add(new THREE.HemisphereLight(0xbcd7ee, 0x9a8f78, 1.0));

// ---------------------------------------------------------------------------
// World

const terrain = buildTerrain(scene);
const water = buildWater(scene, terrain, SUN_DIR);
const props = buildProps(scene, terrain, water);
const creatures = buildCreatures(scene, terrain, water);

// ---------------------------------------------------------------------------
// Manual camera control: orbit / pan / zoom with damping

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.copy(INIT_TARGET);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.rotateSpeed = 0.55;
controls.screenSpacePanning = false;
controls.minDistance = 7;
controls.maxDistance = 120;
controls.maxPolarAngle = 1.545;
controls.update();

let resetAnim = null;
function resetView() {
  resetAnim = {
    t: 0, dur: 1.2,
    p0: camera.position.clone(), t0: controls.target.clone(),
    p1: INIT_POS.clone(), t1: INIT_TARGET.clone(),
  };
}

function clampTarget() {
  const t = controls.target;
  t.x = THREE.MathUtils.clamp(t.x, -14, 14);
  t.z = THREE.MathUtils.clamp(t.z, -14, 14);
  t.y = THREE.MathUtils.clamp(t.y, -1, 7);
}

// ---------------------------------------------------------------------------
// UI

const ui = {
  prompt: document.getElementById('prompt-body'),
  source: document.getElementById('source-prompt'),
  aboutBtn: document.getElementById('about-btn'),
  aboutPanel: document.getElementById('about-panel'),
  copyBtn: document.getElementById('copy-btn'),
};
ui.prompt.textContent = ui.source.textContent.trim();

ui.aboutBtn.addEventListener('click', () => {
  ui.aboutPanel.hidden = !ui.aboutPanel.hidden;
  ui.aboutBtn.textContent = ui.aboutPanel.hidden ? 'about & prompt' : 'close';
});
ui.copyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(ui.prompt.textContent).then(() => {
    ui.copyBtn.textContent = 'copied ✓';
    setTimeout(() => { ui.copyBtn.textContent = 'copy prompt'; }, 1600);
  }).catch(() => {
    ui.copyBtn.textContent = 'select & copy manually';
  });
});

window.addEventListener('keydown', (e) => {
  if (e.key.toLowerCase() === 'h') document.body.classList.toggle('hide-ui');
  if (e.key.toLowerCase() === 'r') resetView();
});

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// ---------------------------------------------------------------------------
// Loop

const clock = new THREE.Clock();
function animate() {
  requestAnimationFrame(animate);
  const dt = Math.min(clock.getDelta(), 0.05);
  const t = clock.elapsedTime;

  water.update(t);
  props.update(t, dt);
  creatures.update(t, dt);

  if (resetAnim) {
    resetAnim.t += dt;
    const k = Math.min(resetAnim.t / resetAnim.dur, 1);
    const e = k * k * (3 - 2 * k);
    camera.position.lerpVectors(resetAnim.p0, resetAnim.p1, e);
    controls.target.lerpVectors(resetAnim.t0, resetAnim.t1, e);
    camera.lookAt(controls.target);
    if (k >= 1) { resetAnim = null; controls.update(); }
  } else {
    controls.update();
    clampTarget();
  }

  renderer.render(scene, camera);
}
animate();
