// Utrish lighthouse diorama: renderer, light, camera and the frame loop.
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { buildField, buildBake, buildTerrainGeometry, buildWaterGeometry, buildWallGeometries, OUTLINE } from './world.js';
import { waveUniforms, makeWaveSampler } from './waves.js';
import { makeTerrainMaterial, makeWaterMaterial, makeSeaWallMaterial, makeCompositeMaterial } from './shaders.js';
import { buildStructures } from './structures.js';
import { buildRocks, buildVegetation } from './nature.js';
import { buildLife } from './life.js';

const TIME_SCALE = 0.9;
const SUN_DIR = new THREE.Vector3(-0.88, 0.36, -0.2).normalize(); // low sun over the open sea to the west
const SUN_COLOR = new THREE.Color(1.0, 0.68, 0.4);
const HOME = { pos: new THREE.Vector3(-228, 146, 246), target: new THREE.Vector3(-14, -5, 28) };

const status = document.getElementById('loading');
const setStatus = (s) => { if (status) status.querySelector('span').textContent = s; };
const frame = () => new Promise((r) => requestAnimationFrame(() => setTimeout(r, 0)));

async function init() {
  const renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: 'high-performance' });
  const maxPR = Math.min(window.devicePixelRatio, 1.5);
  let pixelRatio = maxPR;
  renderer.setPixelRatio(pixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  renderer.shadowMap.autoUpdate = false; // the sun is fixed: refresh shadows every few frames
  document.getElementById('app').appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const fxScene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(34, window.innerWidth / window.innerHeight, 0.5, 2500);
  camera.position.copy(HOME.pos);

  // ---------------------------------------------------------------- render targets
  const dbs = renderer.getDrawingBufferSize(new THREE.Vector2());
  const depthTex = new THREE.DepthTexture(dbs.x, dbs.y);
  depthTex.type = THREE.UnsignedIntType;
  const rt = new THREE.WebGLRenderTarget(dbs.x, dbs.y, { type: THREE.HalfFloatType, samples: 4, depthTexture: depthTex });
  const comp = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), makeCompositeMaterial(rt));
  comp.frustumCulled = false;
  const compScene = new THREE.Scene();
  compScene.add(comp);
  const orthoCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

  // ---------------------------------------------------------------- light
  // soft sky environment (gradient dome with a low warm sun) for reflections on paint and metal;
  // applied only to glossy materials, the rest is lit by sun + sky hemisphere
  let envMap = null;
  {
    const pm = new THREE.PMREMGenerator(renderer);
    const skyScene = new THREE.Scene();
    skyScene.add(new THREE.Mesh(new THREE.SphereGeometry(100, 48, 24), new THREE.ShaderMaterial({
      side: THREE.BackSide,
      uniforms: { uSun: { value: SUN_DIR } },
      vertexShader: 'varying vec3 vD; void main(){ vD = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
      fragmentShader: `uniform vec3 uSun; varying vec3 vD;
        void main(){
          vec3 d = normalize(vD);
          vec3 zen = vec3(0.22, 0.40, 0.78), hor = vec3(0.86, 0.80, 0.70), gnd = vec3(0.30, 0.27, 0.23);
          vec3 c = d.y > 0.0 ? mix(hor, zen, pow(d.y, 0.55)) : mix(hor * 0.75, gnd, pow(-d.y, 0.4));
          float s = max(dot(d, uSun), 0.0);
          c += vec3(1.0, 0.72, 0.42) * (pow(s, 8.0) * 0.7 + pow(s, 300.0) * 8.0);
          gl_FragColor = vec4(c, 1.0);
        }`,
    })));
    envMap = pm.fromScene(skyScene, 0.02).texture;
    pm.dispose();
  }

  const sun = new THREE.DirectionalLight(SUN_COLOR, 3.9);
  sun.position.copy(SUN_DIR).multiplyScalar(420).add(new THREE.Vector3(-10, 0, 0));
  sun.target.position.set(-10, 0, 0);
  sun.castShadow = true;
  sun.shadow.mapSize.set(4096, 4096);
  const sc = sun.shadow.camera;
  sc.left = -235; sc.right = 235; sc.top = 200; sc.bottom = -200; sc.near = 150; sc.far = 760;
  sun.shadow.radius = 2.5;
  sun.shadow.bias = -0.0004;
  sun.shadow.normalBias = 0.35;
  scene.add(sun, sun.target);
  const hemi = new THREE.HemisphereLight(0x8fb0e0, 0x6f604c, 1.0);
  scene.add(hemi);

  const shared = { uTime: { value: 0 }, uSunColor: { value: SUN_COLOR }, uBumpScale: { value: 0.6 } };

  // ---------------------------------------------------------------- landform
  setStatus('Shaping the landslide…'); await frame();
  const field = buildField();
  setStatus('Reading the sea…'); await frame();
  const bake = buildBake(field);
  const sampler = makeWaveSampler(bake);

  setStatus('Cutting the diorama…'); await frame();
  const terrain = new THREE.Mesh(buildTerrainGeometry(field), makeTerrainMaterial(0, shared));
  terrain.castShadow = true; terrain.receiveShadow = true;
  // the seabed does not cast shadows: under water, light is softened by scattering anyway
  const depthMat = new THREE.MeshDepthMaterial({ depthPacking: THREE.RGBADepthPacking });
  depthMat.onBeforeCompile = (sh) => {
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying float vWY;')
      .replace('#include <project_vertex>', '#include <project_vertex>\nvWY = (modelMatrix * vec4(transformed, 1.0)).y;');
    sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nvarying float vWY;')
      .replace('void main() {', 'void main() {\n  if (vWY < -0.8) discard;');
  };
  terrain.customDepthMaterial = depthMat;
  scene.add(terrain);
  const walls = buildWallGeometries(field);
  const wallMesh = new THREE.Mesh(walls.wall, makeTerrainMaterial(2, shared));
  wallMesh.receiveShadow = true;
  scene.add(wallMesh);
  const baseMesh = new THREE.Mesh(walls.base, new THREE.MeshStandardMaterial({ color: 0x2a2521, roughness: 0.55, metalness: 0.1 }));
  baseMesh.receiveShadow = true;
  scene.add(baseMesh);

  const waterUniforms = {
    uTime: shared.uTime,
    uBake1: { value: bake.tex1 }, uBake2: { value: bake.tex2 },
    uBMin: { value: bake.min }, uBSize: { value: bake.size },
    ...waveUniforms(),
    uRipples: { value: Array.from({ length: 8 }, () => new THREE.Vector4(0, 0, -100, 0)) },
    uRippleOn: { value: 0 },
    uSceneColor: { value: rt.texture }, uSceneDepth: { value: rt.depthTexture },
    uResolution: { value: dbs.clone() }, uNear: { value: camera.near }, uFar: { value: camera.far },
    uSunDir: { value: SUN_DIR }, uSunColor: { value: SUN_COLOR },
    uCenter: { value: new THREE.Vector2(OUTLINE.cx, OUTLINE.cz) },
  };
  const seaWall = new THREE.Mesh(walls.water, makeSeaWallMaterial(waterUniforms));
  seaWall.frustumCulled = false;
  scene.add(seaWall);
  const water = new THREE.Mesh(buildWaterGeometry(field), makeWaterMaterial(waterUniforms));
  water.frustumCulled = false;
  fxScene.add(water);

  setStatus('Raising the lighthouses…'); await frame();
  const structures = buildStructures({ heightAt: field.heightAt, scene });
  scene.traverse((o) => {
    const m = o.material;
    if (m && m.isMeshStandardMaterial && !m.onBeforeCompile.toString().includes('surfaceMain') && (m.metalness > 0.1 || m.roughness < 0.6)) {
      m.envMap = envMap; m.envMapIntensity = 0.6;
    }
  });
  structures.tower.updateMatrixWorld(true);
  structures.glow.position.copy(structures.tower.localToWorld(structures.glowLocal.clone()));
  fxScene.add(structures.glow);

  setStatus('Planting juniper and pine…'); await frame();
  buildRocks({ field, scene, shared });
  buildVegetation({ field, scene, shared });

  const sprayUniforms = { uScale: { value: 1 }, uSunColor: { value: SUN_COLOR } };
  const life = buildLife({ scene, fxScene, bake, sampler, structures, sprayUniforms, rippleUniform: waterUniforms.uRipples });

  // ---------------------------------------------------------------- camera control
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.copy(HOME.target);
  controls.enableDamping = true;
  controls.dampingFactor = 0.07;
  controls.screenSpacePanning = true;
  controls.zoomToCursor = true;
  controls.minDistance = 4;
  controls.maxDistance = 760;
  controls.maxPolarAngle = Math.PI * 0.62;
  controls.rotateSpeed = 0.6;
  controls.panSpeed = 0.9;
  controls.update();

  let reset = null;
  controls.addEventListener('start', () => { reset = null; });
  function startReset() {
    reset = { t: 0, p0: camera.position.clone(), t0: controls.target.clone() };
  }
  window.addEventListener('keydown', (e) => {
    if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    if (e.key === 'h' || e.key === 'H') document.body.classList.toggle('ui-hidden');
    if (e.key === 'r' || e.key === 'R') startReset();
  });
  document.getElementById('reset-btn')?.addEventListener('click', startReset);

  function onResize() {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.getDrawingBufferSize(dbs);
    rt.setSize(dbs.x, dbs.y);
    waterUniforms.uResolution.value.copy(dbs);
    sprayUniforms.uScale.value = dbs.y / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2));
  }
  window.addEventListener('resize', onResize);
  onResize();

  // ---------------------------------------------------------------- loop
  const clock = new THREE.Clock();
  let simT = 40; // start mid-way through a wave group
  const bg = new THREE.Color(0.8, 0.8, 0.8);
  let perfT = 0, perfN = 0, frameNo = 0;
  renderer.setAnimationLoop(() => {
    const raw = clock.getDelta();
    const dt = Math.min(raw, 0.05);
    // keep the frame rate smooth on slower GPUs by lowering the render resolution
    if (clock.elapsedTime > 4) { perfT += raw; perfN++; } // ignore shader warm-up
    if (perfT > 2.5) {
      const fps = perfN / perfT;
      if (fps < 36 && pixelRatio > 0.75) {
        pixelRatio = Math.max(0.75, pixelRatio - 0.25);
        renderer.setPixelRatio(pixelRatio);
        onResize();
      }
      perfT = 0; perfN = 0;
    }
    simT += dt * TIME_SCALE;
    shared.uTime.value = simT;
    if (reset) {
      reset.t = Math.min(1, reset.t + dt / 1.3);
      const k = reset.t * reset.t * (3 - 2 * reset.t);
      camera.position.lerpVectors(reset.p0, HOME.pos, k);
      controls.target.lerpVectors(reset.t0, HOME.target, k);
      if (reset.t >= 1) reset = null;
    }
    controls.target.x = THREE.MathUtils.clamp(controls.target.x, -230, 230);
    controls.target.z = THREE.MathUtils.clamp(controls.target.z, -190, 190);
    controls.target.y = THREE.MathUtils.clamp(controls.target.y, -50, 120);
    controls.update();
    life.update(dt * TIME_SCALE, simT);
    waterUniforms.uRippleOn.value = waterUniforms.uRipples.value.some((r) => r.w > 0 && simT - r.z < 7) ? 1 : 0;
    structures.glow.material.opacity = 0.8 + 0.08 * Math.sin(simT * 1.7);

    if (frameNo++ % 3 === 0) renderer.shadowMap.needsUpdate = true;
    renderer.setRenderTarget(rt);
    renderer.setClearColor(bg, 1);
    renderer.render(scene, camera);
    renderer.setRenderTarget(null);
    renderer.render(compScene, orthoCam);
    renderer.autoClear = false;
    renderer.render(fxScene, camera);
    renderer.autoClear = true;
  });

  status?.classList.add('done');
  setTimeout(() => status?.remove(), 900);
  window.__diorama = { camera, controls, renderer, scene, field, sampler, life, startReset, time: () => simT };
}

init().catch((err) => {
  console.error(err);
  setStatus('Sorry — WebGL 2 is required to show this diorama. (' + err.message + ')');
});
