// main.js — renderer, late-afternoon light, camera controls, animation loop
import * as THREE from 'three';
import { OrbitControls } from '../vendor/OrbitControls.js';
import {
  CFG, SLAB_RMAX, jsWaterHeight, terrainHeight, coastR, polar, shelterAt, bakeWaterTexture,
} from './world.js';
import { buildWater } from './water.js';
import { buildIsland, buildSkirt, buildRocks, buildVegetation } from './terrain.js';
import {
  buildLighthouse, buildCottage, buildStair, buildJetty, buildBoat, buildProps,
  Rope, tickWindows,
} from './structures.js';
import { SplashPool, buildDolphins, Gull } from './creatures.js';
import { initUI } from './ui.js';

// ---------- renderer / scene ----------
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.15;
renderer.outputColorSpace = THREE.SRGBColorSpace;
document.getElementById('app').appendChild(renderer.domElement);

const scene = new THREE.Scene();
const BG = new THREE.Color(0xdfe7ec);
scene.background = BG;

// ---------- late-afternoon light ----------
const SUN_DIR = new THREE.Vector3(-0.457, 0.47, 0.791).normalize();
const sun = new THREE.DirectionalLight(0xffdfae, 2.6);
sun.position.copy(SUN_DIR).multiplyScalar(60);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
sun.shadow.camera.left = -36;
sun.shadow.camera.right = 36;
sun.shadow.camera.top = 36;
sun.shadow.camera.bottom = -36;
sun.shadow.camera.near = 20;
sun.shadow.camera.far = 110;
sun.shadow.bias = -0.0004;
sun.shadow.normalBias = 0.5;
scene.add(sun);
scene.add(new THREE.HemisphereLight(0xcfe0ea, 0xb7a98e, 0.75));
scene.add(new THREE.AmbientLight(0xfff2e0, 0.12));

// sky dome
const sky = new THREE.Mesh(
  new THREE.SphereGeometry(260, 24, 12),
  new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false,
    uniforms: {
      uTop: { value: new THREE.Color(0xc4d9e6) },
      uBot: { value: new THREE.Color(0xf2e7d3) },
      uSun: { value: SUN_DIR.clone() },
    },
    vertexShader: /* glsl */`
      varying vec3 vDir;
      void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
    fragmentShader: /* glsl */`
      uniform vec3 uTop, uBot, uSun;
      varying vec3 vDir;
      void main(){
        float f = smoothstep(-0.1, 0.45, vDir.y);
        vec3 c = mix(uBot, uTop, f);
        float g = pow(clamp(dot(normalize(vDir.xz), normalize(uSun.xz)), 0.0, 1.0), 6.0) * (1.0 - f);
        c += vec3(0.10, 0.055, 0.02) * g;
        gl_FragColor = vec4(c, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,
  }),
);
sky.renderOrder = -1;
sky.frustumCulled = false;
scene.add(sky);

// ---------- world ----------
const terrTex = bakeWaterTexture(256);
scene.add(buildIsland());
scene.add(buildSkirt(SUN_DIR));
scene.add(buildRocks());
const veg = buildVegetation();
scene.add(veg);
const water = buildWater(terrTex);
water.material.uniforms.uSunDir.value.copy(SUN_DIR);
scene.add(water);

const lighthouse = buildLighthouse();
scene.add(lighthouse);
const cottage = buildCottage();
scene.add(cottage);
scene.add(buildStair());
const jetty = buildJetty();
scene.add(jetty);

// boats on their moorings (they swing around the cleat / buoy)
const boatA = buildBoat(0);
const boatB = buildBoat(1);
scene.add(boatA, boatB);
const props = buildProps(jetty);
scene.add(props);

const ropes = { list: [new Rope(scene), new Rope(scene)] };
const thJ = CFG.jettyAz;
const jDir = new THREE.Vector3(Math.cos(thJ), 0, Math.sin(thJ));
const jettyEnd = jetty.userData.cleatPos;
const boatAMooring = jettyEnd.clone();
const buoyPos = props.userData.buoyPos;
const boatBMooring = buoyPos.clone();

// dolphins & gulls & splashes
const splashPool = new SplashPool(scene);
const dolphins = buildDolphins(scene, splashPool);
const gulls = [];
for (let i = 0; i < 4; i++) { const g = new Gull(scene); g.mesh.traverse(o => { o.castShadow = true; }); gulls.push(g); }

// ---------- camera & controls ----------
const HOME = {
  pos: new THREE.Vector3(44.2, 30.6, 26.9),
  target: new THREE.Vector3(0, 1.6, 0),
};
const camera = new THREE.PerspectiveCamera(42, window.innerWidth / window.innerHeight, 0.5, 500);
camera.position.copy(HOME.pos);
const controls = new OrbitControls(camera, renderer.domElement);
controls.target.copy(HOME.target);
controls.enableDamping = true;
controls.dampingFactor = 0.06;
controls.minDistance = 6;
controls.maxDistance = 110;
controls.maxPolarAngle = 1.545;
controls.update();

// R: smooth reset
let tween = null;
function resetView() {
  tween = {
    t: 0, dur: 0.9,
    p0: camera.position.clone(), p1: HOME.pos.clone(),
    t0: controls.target.clone(), t1: HOME.target.clone(),
  };
}

// ---------- boat motion ----------
const boats = [
  { grp: boatA, mooring: boatAMooring, radius: 1.5, phase: 1.2, yaw: 0 },
  { grp: boatB, mooring: boatBMooring, radius: 1.15, phase: 4.0, yaw: 0 },
];
function updateBoats(t, dt) {
  for (const b of boats) {
    const ang = b.phase + t * 0.07 + Math.sin(t * 0.13 + b.phase) * 0.35;
    const x = b.mooring.x + Math.cos(ang) * b.radius;
    const z = b.mooring.z + Math.sin(ang) * b.radius;
    const hC = jsWaterHeight(x, z, t);
    const fx = x + jDir.x * 0.8, fz = z + jDir.z * 0.8;
    const bx = x - jDir.x * 0.8, bz = z - jDir.z * 0.8;
    const hF = jsWaterHeight(fx, fz, t), hB = jsWaterHeight(bx, bz, t);
    const px = x + jDir.z * 0.4, pz = z - jDir.x * 0.4;
    const qx = x - jDir.z * 0.4, qz = z + jDir.x * 0.4;
    const hP = jsWaterHeight(px, pz, t), hQ = jsWaterHeight(qx, qz, t);
    const sh = shelterAt(x, z);
    const pitch = Math.atan2(hF - hB, 1.6) * (0.5 + 0.5 * (1 - sh));
    const roll = Math.atan2(hP - hQ, 0.8) * (0.5 + 0.5 * (1 - sh));
    b.grp.position.set(x, hC * 0.85 + 0.04, z);
    b.grp.rotation.set(0, -ang + Math.PI / 2 + Math.sin(t * 0.2 + b.phase) * 0.15, 0, 'YXZ');
    b.grp.rotation.x = pitch;
    b.grp.rotation.z = roll;
    b.pos = b.grp.position;
  }
  // ropes
  const bowA = boatA.localToWorld(boatA.userData.bowLocal.clone());
  ropes.list[0].update(jettyEnd, bowA, 0.1);
  const bowB = boatB.localToWorld(boatB.userData.bowLocal.clone());
  const buoyTop = buoyPos.clone().setY(jsWaterHeight(buoyPos.x, buoyPos.z, t) + 0.32);
  ropes.list[1].update(buoyTop, bowB, 0.12);
  // buoy bobbing
  const buoy = props.userData.buoy;
  buoy.position.y = jsWaterHeight(buoyPos.x, buoyPos.z, t);
  buoy.rotation.x = Math.sin(t * 1.3) * 0.12;
  buoy.rotation.z = Math.sin(t * 1.1 + 1) * 0.12;
}

// ---------- loop ----------
const clock = new THREE.Clock();
const windMats = veg.userData.uTimeMats;
let started = false;

function animate() {
  requestAnimationFrame(animate);
  const dt = Math.min(clock.getDelta(), 0.05);
  const t = clock.elapsedTime;

  water.material.uniforms.uTime.value = t;
  for (const m of windMats) m.userData.uTime.value = t;
  tickWindows(t);
  updateBoats(t, dt);
  for (const g of gulls) g.update(dt, t);
  for (const d of dolphins) d.update(dt, t);
  splashPool.update(dt);

  if (tween) {
    tween.t += dt / tween.dur;
    const k = tween.t >= 1 ? 1 : 1 - Math.pow(1 - tween.t, 3);
    camera.position.lerpVectors(tween.p0, tween.p1, k);
    controls.target.lerpVectors(tween.t0, tween.t1, k);
    if (tween.t >= 1) tween = null;
  }
  controls.update();
  renderer.render(scene, camera);

  if (!started) {
    started = true;
    document.getElementById('loading')?.classList.add('done');
  }
}

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'h' || e.key === 'H') document.body.classList.toggle('hide-ui');
  if (e.key === 'r' || e.key === 'R') resetView();
});

// test/inspection hooks (harmless, also handy for power users)
window.__tl = {
  scene, camera, controls, renderer,
  dolphins, splashPool,
  setView(name) {
    if (name === 'home') return resetView();
    if (name === 'water') {
      const p = polar(CFG.openAngle, SLAB_RMAX - 2);
      camera.position.set(p[0], 1.7, p[1]);
      controls.target.set(Math.cos(CFG.openAngle) * 10, 1.2, Math.sin(CFG.openAngle) * 10);
    } else if (name === 'harbor') {
      const p = polar(CFG.harborAngle, SLAB_RMAX - 4);
      camera.position.set(p[0], 6, p[1]);
      controls.target.set(CFG.cottageP[0] * 0.5, 1.2, CFG.cottageP[1] * 0.5);
    } else if (name === 'top') {
      camera.position.set(0.01, 62, 0);
      controls.target.set(0, 0, 0);
    }
    tween = null;
    controls.update();
  },
};

initUI();
animate();
