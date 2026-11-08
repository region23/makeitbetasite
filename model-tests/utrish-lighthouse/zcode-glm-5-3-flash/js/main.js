// Main: renderer, warm late-afternoon light, soft pale background, controls,
// and assembly of the whole diorama.
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

import { bakeMaps } from './geo.js';
import { buildTerrain } from './terrain.js';
import { buildWater } from './water.js';
import { initMaterials, buildLighthouse, buildChapel, buildMemorial, buildFence,
         buildBridge, buildPierAndBoats, buildVillage, buildDolphinarium, buildProps,
         animated } from './structures.js';
import { buildVegetation, updateVegetation } from './vegetation.js';
import { buildLife } from './life.js';
import { initUI } from './ui.js';

/* ---------- renderer & scene ---------- */
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.0;
document.getElementById('app').appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0xefe8da, 700, 2600);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.5, 7000);
const HOME = {
  pos: new THREE.Vector3(-335, 210, 325),
  target: new THREE.Vector3(-5, -12, 5),
};
camera.position.copy(HOME.pos);

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.copy(HOME.target);
controls.enableDamping = true;
controls.dampingFactor = 0.07;
controls.maxPolarAngle = Math.PI * 0.495;
controls.minDistance = 12;
controls.maxDistance = 1500;
controls.screenSpacePanning = true;
controls.update();

/* ---------- sky dome ---------- */
const SUN_DIR = new THREE.Vector3(-0.80, 0.30, -0.42).normalize();
function makeSky() {
  const geo = new THREE.SphereGeometry(3200, 32, 20);
  const mat = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    depthWrite: false,
    uniforms: { uSun: { value: SUN_DIR } },
    vertexShader: /* glsl */`
      varying vec3 vDir;
      void main(){
        vDir = normalize(position);
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: /* glsl */`
      uniform vec3 uSun;
      varying vec3 vDir;
      void main(){
        float y = vDir.y;
        vec3 zen = vec3(0.66, 0.78, 0.86);
        vec3 mid = vec3(0.87, 0.87, 0.85);
        vec3 hor = vec3(0.96, 0.90, 0.80);
        vec3 col = mix(mid, zen, smoothstep(0.06, 0.65, y));
        col = mix(hor, col, smoothstep(-0.02, 0.16, y));
        col = mix(vec3(0.93, 0.90, 0.85), col, smoothstep(-0.25, 0.0, y));
        float s = max(dot(vDir, uSun), 0.0);
        col += vec3(1.0, 0.72, 0.42) * pow(s, 18.0) * 0.44;
        col += vec3(1.0, 0.85, 0.60) * pow(s, 4.0) * 0.10;
        gl_FragColor = vec4(col, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,
  });
  return new THREE.Mesh(geo, mat);
}
const sky = makeSky();
scene.add(sky);

// environment for standard materials
{
  const pmrem = new THREE.PMREMGenerator(renderer);
  const envScene = new THREE.Scene();
  envScene.add(makeSky());
  const ground = new THREE.Mesh(new THREE.SphereGeometry(3000, 16, 8),
    new THREE.MeshBasicMaterial({ color: 0x8d8672, side: THREE.BackSide }));
  envScene.add(ground);
  scene.environment = pmrem.fromScene(envScene, 0.02).texture;
  pmrem.dispose();
}

/* ---------- light ---------- */
const sun = new THREE.DirectionalLight(0xffd7a4, 2.7);
sun.position.copy(SUN_DIR).multiplyScalar(760);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
const sc = sun.shadow.camera;
sc.left = -430; sc.right = 430; sc.top = 330; sc.bottom = -330; sc.near = 100; sc.far = 1700;
sun.shadow.bias = -0.0004;
sun.shadow.normalBias = 1.6;
scene.add(sun, sun.target);
scene.add(new THREE.HemisphereLight(0xd6e6f2, 0x8f8267, 0.75));

/* ---------- build the diorama ---------- */
let baked, waterUniforms, lifeUpdate, vegGroup;
function build() {
  baked = bakeMaps();
  scene.add(buildTerrain());

  initMaterials();
  const water = buildWater(baked);
  scene.add(water.group);
  waterUniforms = water.uniforms;

  scene.add(buildLighthouse());
  scene.add(buildFence());
  scene.add(buildChapel());
  scene.add(buildMemorial());
  scene.add(buildBridge());
  scene.add(buildPierAndBoats(baked));
  scene.add(buildVillage());
  scene.add(buildDolphinarium(baked));
  scene.add(buildProps());

  vegGroup = buildVegetation();
  scene.add(vegGroup);

  const life = buildLife(baked);
  scene.add(life.group);
  lifeUpdate = life.update;
}

/* ---------- reset / debug views ---------- */
let resetAnim = null;
function flyTo(pos, target, dur = 1.0) {
  resetAnim = {
    t0: performance.now() / 1000, dur,
    p0: camera.position.clone(), p1: pos.clone(),
    g0: controls.target.clone(), g1: target.clone(),
  };
}
function resetView() { flyTo(HOME.pos, HOME.target, 1.1); }
initUI(resetView);

window.__setView = (name) => {
  if (name === 'overview') flyTo(HOME.pos, HOME.target, 0.3);
  else if (name === 'strait') flyTo(new THREE.Vector3(35, 4.5, 75), new THREE.Vector3(85, 12, -10), 0.3);
  else if (name === 'water') flyTo(new THREE.Vector3(-195, 4.5, 165), new THREE.Vector3(-15, 10, 5), 0.3);
  else if (name === 'tower') flyTo(new THREE.Vector3(90, 40, -10), new THREE.Vector3(45, 28, -50), 0.3);
  else if (name === 'bay') flyTo(new THREE.Vector3(60, 32, -168), new THREE.Vector3(125, 2, -75), 0.3);
};

/* ---------- animate ---------- */
const clock = new THREE.Clock();
function animate() {
  requestAnimationFrame(animate);
  const t = clock.getElapsedTime();
  if (waterUniforms) waterUniforms.uTime.value = t;
  if (vegGroup) updateVegetation(vegGroup, t);
  for (const a of animated) a.update(t);
  if (lifeUpdate) lifeUpdate(t);

  if (resetAnim) {
    const k = Math.min(1, (performance.now() / 1000 - resetAnim.t0) / resetAnim.dur);
    const e = k * k * (3 - 2 * k);
    camera.position.lerpVectors(resetAnim.p0, resetAnim.p1, e);
    controls.target.lerpVectors(resetAnim.g0, resetAnim.g1, e);
    if (k >= 1) resetAnim = null;
  }
  controls.update();
  renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

build();
animate();
document.getElementById('loading').classList.add('done');
