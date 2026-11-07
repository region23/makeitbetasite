/**
 * main.js — The Tidal Lighthouse.
 *
 * Builds the sea lookup tables, the island display piece, the buildings, the
 * growing things and the creatures, then draws them each frame: refraction pass,
 * then the frame itself.
 */

import * as THREE from 'three';
import { OrbitControls } from '../vendor/OrbitControls.js';

import { buildSeaData, makeSeaSampler } from './terrain.js';
import { CELERITY, LAG_SCALE, createWaveSampler } from './waves.js';
import { makeSeaTexture, createWater } from './water.js';
import { createSky } from './sky.js';
import { createIsland } from './island.js';
import { buildTextures } from './textures.js';
import { makePropMaterials, createStructures } from './props.js';
import { createVegetation } from './vegetation.js';
import { createCreatures } from './creatures.js';
import * as T from './theme.js';
import { PROMPT } from './prompt.js';

const MAX_PR = 1.75;
const DEFAULT_VIEW = {
  pos: new THREE.Vector3(34.0, 21.0, 35.0),
  target: new THREE.Vector3(-1.0, 2.4, 0.5),
};

const boot = {
  root: document.getElementById('boot'),
  msg: document.getElementById('boot-msg'),
  bar: document.getElementById('boot-bar'),
  step(label, pct) {
    if (this.msg) this.msg.textContent = label;
    if (this.bar) this.bar.style.width = `${pct}%`;
    // two frames so the browser actually repaints the bar between heavy steps
    return new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
  },
  done() {
    if (!this.root) return;
    this.root.classList.add('done');
    setTimeout(() => this.root.remove(), 900);
  },
  fail(err) {
    if (this.msg) this.msg.textContent = `Could not build the scene: ${err && err.message ? err.message : err}`;
    if (this.bar) this.bar.style.display = 'none';
    console.error(err);
  },
};

/** let the browser breathe — the build steps are all synchronous math */
const idle = () => new Promise((r) => setTimeout(r, 0));

async function build() {
  const canvas = document.getElementById('stage');
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false, powerPreference: 'high-performance' });
  if (!renderer.capabilities.isWebGL2) throw new Error('WebGL 2 is required');
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, MAX_PR));
  renderer.setSize(window.innerWidth, window.innerHeight, false);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.setClearColor(T.FOG_COLOR, 1);

  await boot.step('sounding the seabed…', 6);
  await idle();

  /* ---------------------------------------------------------- the sea table */
  const sea = buildSeaData(CELERITY, LAG_SCALE);
  const seaSampler = makeSeaSampler(sea);
  const waves = createWaveSampler(seaSampler);

  await boot.step('pouring the ocean…', 22);
  await idle();

  /* ------------------------------------------------------------------ scene */
  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(T.FOG_COLOR, T.FOG_NEAR, T.FOG_FAR);

  const camera = new THREE.PerspectiveCamera(41, window.innerWidth / window.innerHeight, 0.12, 1400);
  camera.position.copy(DEFAULT_VIEW.pos);

  const sky = createSky();
  scene.add(sky.mesh);

  const sun = new THREE.DirectionalLight(T.SUN_COLOR, T.SUN_INTENSITY);
  sun.position.copy(T.SUN_DIR).multiplyScalar(52);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  sun.shadow.camera.near = 6;
  sun.shadow.camera.far = 110;
  const SD = 30;
  sun.shadow.camera.left = -SD;
  sun.shadow.camera.right = SD;
  sun.shadow.camera.top = SD;
  sun.shadow.camera.bottom = -SD;
  sun.shadow.bias = -0.0006;
  sun.shadow.normalBias = 0.035;
  sun.shadow.radius = 1.4;
  sun.target.position.set(-1, 0, 1);
  scene.add(sun, sun.target);

  scene.add(new THREE.HemisphereLight(T.HEMI_SKY, T.HEMI_GROUND, T.HEMI_INTENSITY));

  // cool bounce off the sea on the shaded side
  const fill = new THREE.DirectionalLight(0x9dc2dd, 0.5);
  fill.position.set(-T.SUN_DIR.x * 30, 12, -T.SUN_DIR.z * 30);
  scene.add(fill);

  /* ----------------------------------------------------------------- water */
  const water = createWater({ sea, seaTexture: makeSeaTexture(sea) });
  scene.add(water.mesh);

  await boot.step('raising the island…', 40);
  await idle();

  /* ---------------------------------------------------------------- island */
  const island = createIsland();
  scene.add(island.group);

  await boot.step('painting plaster and slate…', 56);
  await idle();

  /* -------------------------------------------------------- buildings, gear */
  const tx = buildTextures();
  const mats = makePropMaterials(tx);
  const structures = createStructures(mats);
  scene.add(structures.group);

  await boot.step('sowing the turf…', 74);
  await idle();

  /* ------------------------------------------------------------ growing bit */
  const vegetation = createVegetation();
  scene.add(vegetation.group);

  await boot.step('calling the dolphins…', 88);
  await idle();

  /* -------------------------------------------------------------- creatures */
  const creatures = createCreatures({
    sampler: waves,
    sprayTexture: tx.soft,
    foamTexture: tx.foamSprite,
  });
  scene.add(creatures.group);
  creatures.setPixelRatio(renderer.getPixelRatio());

  /* --------------------------------------------------------------- controls */
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.copy(DEFAULT_VIEW.target);
  controls.enableDamping = true;
  controls.dampingFactor = 0.055;
  controls.rotateSpeed = 0.8;
  controls.zoomSpeed = 0.85;
  controls.panSpeed = 0.75;
  controls.screenSpacePanning = true;
  controls.minDistance = 4.5;
  controls.maxDistance = 120;
  controls.maxPolarAngle = Math.PI * 0.495;
  controls.keys = {}; // arrow keys would fight the page; camera is mouse/touch only
  controls.update();

  /* ------------------------------------------------------------------ hooks */
  const ui = Array.from(document.querySelectorAll('.ui'));
  let uiVisible = true;
  const setUI = (on) => {
    uiVisible = on;
    for (const el of ui) el.classList.toggle('hidden', !on);
    document.body.dataset.ui = on ? 'on' : 'off';
  };

  const promptEl = document.getElementById('prompt');
  if (promptEl) promptEl.textContent = PROMPT;
  const copyBtn = document.getElementById('copy');
  const copyState = document.getElementById('copy-state');
  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      let ok = false;
      try {
        await navigator.clipboard.writeText(PROMPT);
        ok = true;
      } catch {
        try {
          const ta = document.createElement('textarea');
          ta.value = PROMPT;
          ta.setAttribute('readonly', 'readonly');
          ta.style.position = 'fixed';
          ta.style.opacity = '0';
          document.body.appendChild(ta);
          ta.select();
          ok = document.execCommand('copy');
          ta.remove();
        } catch {
          ok = false;
        }
      }
      if (copyState) copyState.textContent = ok ? 'copied — paste it into any model' : 'select the text above and copy';
    });
  }

  /* view reset, eased so the camera does not jump */
  let tween = null;
  const resetView = () => {
    tween = {
      t: 0,
      dur: 0.85,
      p0: camera.position.clone(),
      t0: controls.target.clone(),
      p1: DEFAULT_VIEW.pos.clone(),
      t1: DEFAULT_VIEW.target.clone(),
    };
  };

  window.addEventListener('keydown', (e) => {
    const el = e.target;
    if (el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.isContentEditable)) return;
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    const k = e.key.toLowerCase();
    if (k === 'h') {
      e.preventDefault();
      setUI(!uiVisible);
    } else if (k === 'r') {
      e.preventDefault();
      resetView();
    }
  });

  const onResize = () => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, MAX_PR));
    renderer.setSize(w, h, false);
    water.resize(renderer.getDrawingBufferSize(new THREE.Vector2()), renderer.getPixelRatio());
    creatures.setPixelRatio(renderer.getPixelRatio());
  };
  window.addEventListener('resize', onResize);
  onResize();

  /* ------------------------------------------------------------------ loop */
  const clock = new THREE.Clock();
  let elapsed = 0;
  const ease = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);

  function frame() {
    const dt = Math.min(clock.getDelta(), 1 / 20);
    elapsed += dt;
    const t = elapsed;

    if (tween) {
      tween.t += dt;
      const k = ease(Math.min(1, tween.t / tween.dur));
      camera.position.lerpVectors(tween.p0, tween.p1, k);
      controls.target.lerpVectors(tween.t0, tween.t1, k);
      if (tween.t >= tween.dur) tween = null;
    }

    controls.update();
    // never let the user end up under the sea
    if (camera.position.y < 0.42) camera.position.y = 0.42;

    water.setTime(t);
    island.setTime(t);
    vegetation.setTime(t);
    structures.update(t, waves);
    creatures.update(t, dt, (x, z) => waves.surfaceY(x, z, t));

    water.renderRefraction(renderer, scene, camera);
    renderer.render(scene, camera);
    requestAnimationFrame(frame);
  }

  // one warm-up frame so the shader programs are compiled before the reveal
  water.renderRefraction(renderer, scene, camera);
  renderer.render(scene, camera);

  boot.done();
  requestAnimationFrame(frame);

  /* a small handle for poking at the scene from the console */
  window.TIDAL = {
    renderer,
    scene,
    camera,
    controls,
    sea,
    waves,
    water,
    island,
    structures,
    vegetation,
    creatures,
    setView: (px, py, pz, tx = 0, ty = 1.5, tz = 0) => {
      camera.position.set(px, py, pz);
      controls.target.set(tx, ty, tz);
      controls.update();
    },
    resetView,
    get stats() {
      return {
        drawCalls: renderer.info.render.calls,
        triangles: renderer.info.render.triangles,
        grass: vegetation.counts.grass,
        textures: renderer.info.memory.textures,
        geometries: renderer.info.memory.geometries,
      };
    },
  };
  return window.TIDAL;
}

boot.step('lighting the lamp…', 2);
build().catch((err) => {
  boot.fail(err);
  const box = document.getElementById('boot');
  if (box) box.style.opacity = '1';
});
