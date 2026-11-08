/* THE UTRISH LIGHTHOUSE — an animated diorama of the islet, the strait and the
 * cape of Bolshoy Utrish at the end of a windy August afternoon.
 * Everything you see is generated in code: geometry, textures, water, sky.
 */
import * as THREE from 'three';
import { OrbitControls } from '../vendor/OrbitControls.js';

import {
  World, DOMAIN, BOTTOM_Y, L, SEA_LEVEL,
  buildFieldTexture, buildSurfaceGeometry, buildWallGeometry, buildBottomGeometry,
} from './geo.js';
import {
  makeRockDetail, makePebbles, makeDryGrass, makeWeed, makeFoam, makeChop, makeSpray,
} from './textures.js';
import { createSky, environmentFromSky, SUN_DIR, SUN_COLOR } from './sky.js';
import { skyRefs, createLandMaterial, createWallMaterial, createBottomMaterial } from './materials.js';
import { createOcean } from './sea.js';
import { sampleOcean } from './waves.js';
import { makeStructureTextures, buildStructures } from './structures.js';
import { buildLife } from './flora.js';
import { buildFauna } from './fauna.js';
import { PROMPT_TEXT } from './promptText.js';

const HAZE = 0xbcc8cd;
const loaderEl = document.getElementById('loader');
const loaderMsg = document.getElementById('loader-msg');
const hudEl = document.getElementById('hud');

const nextFrame = () => new Promise((r) => requestAnimationFrame(() => r()));
async function stage(msg) {
  if (loaderMsg) loaderMsg.textContent = msg;
  await nextFrame();
  await nextFrame();
}

/* ------------------------------------------------------------------ renderer */

const canvas = document.getElementById('scene');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 0.96;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;

const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(HAZE, 0.0012);

const camera = new THREE.PerspectiveCamera(33, window.innerWidth / window.innerHeight, 0.6, 3000);
camera.position.set(-152, 96, 186);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.06;
controls.target.set(-12, 4, 12);
controls.minDistance = 14;
controls.maxDistance = 520;
controls.maxPolarAngle = Math.PI * 0.495;
controls.autoRotateSpeed = 0.32;

/* ------------------------------------------------------------------- views */

const VIEWS = {
  diorama: { pos: [-152, 96, 186], target: [-12, 4, 12], fov: 33 },
  strait: { pos: [34, 11.5, 45], target: [-14, 7, 3], fov: 37 },
  tower: { pos: [-18, 24, 34], target: [-52, 13, -4], fov: 30 },
  chapel: { pos: [34, 12, 34], target: [-7, 5, 4], fov: 33 },
  cutaway: { pos: [-206, 132, 196], target: [-26, -8, 10], fov: 34 },
  aerial: { pos: [-24, 246, 96], target: [-14, 0, 8], fov: 36 },
};

function flyTo(name, instant = false) {
  const v = VIEWS[name];
  if (!v) return;
  const p = new THREE.Vector3(...v.pos);
  const t = new THREE.Vector3(...v.target);
  if (instant) {
    camera.position.copy(p);
    controls.target.copy(t);
    camera.fov = v.fov;
    camera.updateProjectionMatrix();
    controls.update();
    return;
  }
  const p0 = camera.position.clone();
  const t0 = controls.target.clone();
  const f0 = camera.fov;
  const dur = 1350;
  const start = performance.now();
  controls.enabled = false;
  const step = () => {
    const k = Math.min(1, (performance.now() - start) / dur);
    const e = k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2;
    camera.position.lerpVectors(p0, p, e);
    controls.target.lerpVectors(t0, t, e);
    camera.fov = f0 + (v.fov - f0) * e;
    camera.updateProjectionMatrix();
    controls.update();
    if (k < 1) requestAnimationFrame(step);
    else controls.enabled = true;
  };
  step();
}

/* ------------------------------------------------------------------- build */

let world;
let sky, refs, ocean, life, fauna, structs;
const floats = [];
const updaters = [];

async function build() {
  await stage('painting limestone, brick and shingle');
  const rock = makeRockDetail(512);
  const gravel = makePebbles(512, [198, 191, 178], 1900);
  const beachPebble = makePebbles(512, [206, 200, 188], 1500);
  const tex = {
    rock,
    rockBump: rock,
    gravel: gravel.map,
    gravelBump: gravel.bumpMap,
    grass: makeDryGrass(512),
    weed: makeWeed(256),
    foam: makeFoam(512),
    chop: makeChop(256, 1.1),
    spray: makeSpray(256),
    beach: beachPebble.map,
  };

  await stage('sounding the seabed and the terraces');
  world = new World(240);
  const field = buildFieldTexture(world, 256);

  await stage('raising the islet and the landslide coast');
  sky = createSky();
  refs = skyRefs(sky.uniforms);
  scene.add(sky.mesh);

  const landMat = createLandMaterial(tex, refs);
  const surface = new THREE.Mesh(buildSurfaceGeometry(world), landMat);
  surface.castShadow = true;
  surface.receiveShadow = true;
  surface.name = 'terrain';
  scene.add(surface);

  const wall = new THREE.Mesh(buildWallGeometry(world, 18), createWallMaterial(tex, refs));
  wall.name = 'cutaway';
  scene.add(wall);

  const bottom = new THREE.Mesh(buildBottomGeometry(), createBottomMaterial());
  bottom.name = 'base';
  scene.add(bottom);

  await stage('letting the Black Sea in');
  ocean = createOcean(field, { chopTex: tex.chop, foamTex: tex.foam, haze: HAZE, refs });
  scene.add(ocean.mesh);

  scene.environment = environmentFromSky(renderer, sky.mesh);
  if ('environmentIntensity' in scene) scene.environmentIntensity = 0.5;

  /* ------ light: the sun an hour and a half before it goes down behind the sea */
  const sun = new THREE.DirectionalLight(SUN_COLOR.getHex(), 2.45);
  sun.position.copy(SUN_DIR).multiplyScalar(240).add(new THREE.Vector3(-14, 0, 10));
  sun.target.position.set(-14, 4, 10);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  const sc = sun.shadow.camera;
  sc.left = -180;
  sc.right = 180;
  sc.top = 150;
  sc.bottom = -150;
  sc.near = 40;
  sc.far = 620;
  sun.shadow.bias = -0.0007;
  sun.shadow.normalBias = 0.7;
  scene.add(sun, sun.target);

  const hemi = new THREE.HemisphereLight(0x9fb6cc, 0x9c8a67, 0.5);
  scene.add(hemi);

  // light bouncing off the sea back into the cliffs
  const bounce = new THREE.DirectionalLight(0x9dbbb2, 0.28);
  bounce.position.set(-70, -40, 60);
  scene.add(bounce);

  await stage('building the lighthouse, the chapel and the bridge');
  const ST = makeStructureTextures();
  structs = buildStructures(ST, world);
  scene.add(structs.group);
  floats.push(...structs.floats);
  updaters.push(...structs.animate);

  await stage('wind in the grass, dolphins in the gap');
  life = buildLife(world, refs, tex);
  scene.add(life.group);
  fauna = buildFauna(world, tex);
  scene.add(fauna.group);

  // shoreline foam collars are already in the shader; these are props that float
  for (const f of floats) f.obj.rotation.order = 'YXZ';

  flyTo('diorama', true);
  renderer.compile(scene, camera);

  // a small handle for checking the piece by hand in the browser console
  window.diorama = { THREE, scene, camera, renderer, controls, world, structs, life, fauna, flyTo, VIEWS };
}

/* -------------------------------------------------------------------- loop */

let lastMs = performance.now();
let elapsed = 0;
let frames = 0;
let fpsTime = 0;

function updateFloats(t) {
  for (const f of floats) {
    const o = sampleOcean(world, f.x, f.z, t, { expo: 1 });
    const o2 = sampleOcean(world, f.x + 2.4, f.z + 2.4, t, { expo: 1 });
    f.obj.position.set(f.x, SEA_LEVEL + o.eta + (f.dy || 0), f.z);
    const yaw = f.yaw || 0;
    const fx = Math.cos(yaw);
    const fz = -Math.sin(yaw);
    const bx = -fz;
    const bz = fx;
    const gx = o.dx;
    const gz = o.dz;
    const sf = gx * fx + gz * fz;
    const sb = gx * bx + gz * bz;
    const surge = (o2.eta - o.eta) * 0.5;
    f.obj.rotation.set(
      -(sf * 1.1 + surge * 0.2) * (f.pitch ?? 1) + Math.sin(t * 0.9 + f.phase) * 0.008,
      yaw,
      (sb * 1.1) * (f.roll ?? 1) + Math.sin(t * 1.3 + f.phase * 1.7) * 0.012,
    );
  }
}

function tick() {
  const nowMs = performance.now();
  const dt = Math.min((nowMs - lastMs) / 1000, 0.05);
  lastMs = nowMs;
  elapsed += dt;
  const t = elapsed;
  refs.uTime.value = t;
  updateFloats(t);
  life.update(t, dt);
  fauna.update(t, dt);
  for (const u of updaters) u(t, dt);
  controls.update();
  renderer.render(scene, camera);

  frames++;
  fpsTime += dt;
  if (fpsTime > 1) {
    const el = document.getElementById('fps');
    if (el) el.textContent = `${Math.round(frames / fpsTime)} fps`;
    frames = 0;
    fpsTime = 0;
  }
}

function onResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

/* ---------------------------------------------------------------- interface */

function wireUI() {
  document.querySelectorAll('[data-view]').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-view]').forEach((b) => b.classList.remove('on'));
      btn.classList.add('on');
      flyTo(btn.dataset.view);
    });
  });

  const rot = document.getElementById('btn-rotate');
  rot?.addEventListener('click', () => {
    controls.autoRotate = !controls.autoRotate;
    rot.classList.toggle('on', controls.autoRotate);
  });

  // the little label that says what this is, and what prompt made it
  const promptEl = document.getElementById('prompt');
  if (promptEl) promptEl.textContent = PROMPT_TEXT;
  const copy = document.getElementById('btn-copy');
  const state = document.getElementById('copy-state');
  copy?.addEventListener('click', async () => {
    let ok = false;
    try {
      await navigator.clipboard.writeText(PROMPT_TEXT);
      ok = true;
    } catch (e) {
      const ta = document.createElement('textarea');
      ta.value = PROMPT_TEXT;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try { ok = document.execCommand('copy'); } catch (e2) { ok = false; }
      ta.remove();
    }
    if (state) state.textContent = ok ? `${PROMPT_TEXT.length} characters copied` : 'select the text above and copy it manually';
  });

  const ui = document.getElementById('ui');
  window.addEventListener('keydown', (ev) => {
    if (ev.metaKey || ev.ctrlKey || ev.altKey) return;
    const tag = document.activeElement && document.activeElement.tagName;
    if (tag === 'TEXTAREA' || tag === 'INPUT') return;
    const k = ev.key.toLowerCase();
    const keys = Object.keys(VIEWS);
    if (k >= '1' && k <= String(Math.min(9, keys.length))) {
      document.querySelector(`[data-view="${keys[Number(k) - 1]}"]`)?.click();
    } else if (k === 'h') {
      ui.classList.toggle('hidden');
    } else if (k === 'r') {
      document.querySelector('[data-view="diorama"]')?.click();
    } else if (k === 't') {
      rot?.click();
    } else if (k === 'escape') {
      const about = document.getElementById('about');
      if (about) about.open = false;
    }
  });
}

/* ---------------------------------------------------------------------- go */

onResize();
window.addEventListener('resize', onResize);
wireUI();

build()
  .then(() => {
    loaderEl.classList.add('done');
    hudEl.classList.add('ready');
    renderer.setAnimationLoop(tick);
  })
  .catch((err) => {
    console.error(err);
    if (loaderMsg) {
      loaderMsg.textContent = `the diorama did not finish: ${err.message}`;
      loaderMsg.style.color = '#e2a08c';
    }
  });
