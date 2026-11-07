import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// ── Globals ──────────────────────────────────────────────
let scene, camera, renderer, controls, waterMesh;
let clock = new THREE.Clock();
let uiVisible = true;
let waterOriginalPositions = null;

// ── Model metadata & prompt ─────────────────────────────
const MODEL_INFO = 'Qwen3.6-35B-A3B — Thinking';
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

document.getElementById('promptText').value = FULL_PROMPT;
document.getElementById('modelInfo').textContent = MODEL_INFO;

// ── UI handlers ─────────────────────────────────────────
document.getElementById('promptBtn').addEventListener('click', () => {
  document.getElementById('prompt-modal').classList.add('open');
});
document.getElementById('prompt-close').addEventListener('click', () => {
  document.getElementById('prompt-modal').classList.remove('open');
});
document.getElementById('prompt-modal').addEventListener('click', (e) => {
  if (e.target.id === 'prompt-modal') e.currentTarget.classList.remove('open');
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'h' || e.key === 'H') {
    uiVisible = !uiVisible;
    const action = uiVisible ? 'remove' : 'add';
    document.getElementById('ui-overlay').classList[action]('hidden');
    document.getElementById('promptBtn').classList[action]('hidden');
  }
  if (e.key === 'r' || e.key === 'R') resetCamera();
});

// ── Noise utility (CPU-side for terrain) ────────────────
function hash(a, b) {
  let h = (a * 374761393 + b * 668265263) & 0x7fffffff;
  h = ((h ^ (h >> 13)) * 1274126177) & 0x7fffffff;
  return (h & 0x7fffffff) / 0x7fffffff;
}

function noise2D(x, y) {
  const ix = Math.floor(x), iy = Math.floor(y);
  const fx = x - ix, fy = y - iy;
  const sx = fx * fx * (3 - 2 * fx), sy = fy * fy * (3 - 2 * fy);
  return (hash(ix, iy) * (1-sx) + hash(ix+1, iy) * sx) * (1-sy) +
         (hash(ix, iy+1) * (1-sx) + hash(ix+1, iy+1) * sx) * sy;
}

function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }
function lerp(a, b, t) { return a + (b - a) * clamp(t, 0, 1); }
function smoothstep(e0, e1, x) { const t = clamp((x-e0)/(e1-e0), 0, 1); return t*t*(3-2*t); }

// ── Core init ────────────────────────────────────────────
function init() {
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  document.body.appendChild(renderer.domElement);

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xd8e6ed);

  camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 200);
  camera.position.set(30, 24, 35);

  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.target.set(0, 4, 2);
  controls.maxPolarAngle = Math.PI * 0.48;
  controls.minDistance = 15;
  controls.maxDistance = 90;

  setupLights();
  buildTerrain();
  buildOcean();
  buildBuildings();
  buildDetails();
  buildAnimals();

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

    animate();
}

function resetCamera() {
  const sp = camera.position.clone(), st = controls.target.clone();
  const ep = new THREE.Vector3(30, 24, 35), et = new THREE.Vector3(0, 4, 2);
  const dur = 800, start = performance.now();
  (function step() {
    const t = clamp((performance.now()-start)/dur, 0, 1);
    const e = 1 - Math.pow(1-t, 3);
    camera.position.lerpVectors(sp, ep, e);
    controls.target.lerpVectors(st, et, e);
    controls.update();
    if (t < 1) requestAnimationFrame(step);
  })();
}

// ── Lights ───────────────────────────────────────────────
function setupLights() {
  scene.add(new THREE.AmbientLight(0x8fa4b8, 0.5));
  scene.add(new THREE.HemisphereLight(0xc4d8e8, 0x5a6b4a, 0.3));

  const sun = new THREE.DirectionalLight(0xffcc88, 1.8);
  sun.position.set(35, 40, -25);
  scene.add(sun);

  const fill = new THREE.DirectionalLight(0xffe0a0, 0.4);
  fill.position.set(-25, 18, 25);
  scene.add(fill);

  const cool = new THREE.DirectionalLight(0x7ba8cc, 0.25);
  cool.position.set(-15, 10, -15);
  scene.add(cool);
}

// ── Ocean (simple animated plane) ────────────────────────
function buildOcean() {
  const waterMat = new THREE.MeshStandardMaterial({
    color: 0x3d8b8c,
    roughness: 0.12,
    metalness: 0.25,
    transparent: true,
    opacity: 0.78
  });

  const waterGeo = new THREE.CircleGeometry(55, 80);
  waterGeo.rotateX(-Math.PI / 2);

  // Store original Y positions for wave animation
  waterOriginalPositions = new Float32Array(waterGeo.attributes.position.count);
  const positions = waterGeo.attributes.position;
  for (let i = 0; i < positions.count; i++) {
    waterOriginalPositions[i] = positions.getY(i);
  }

  waterMesh = new THREE.Mesh(waterGeo, waterMat);
  waterMesh.position.setY(-0.2);
  scene.add(waterMesh);

  // Sand under harbor area
  const sandGeo = new THREE.CircleGeometry(16, 32);
  sandGeo.rotateX(-Math.PI / 2);
  const sandMat = new THREE.MeshStandardMaterial({ color: 0xe8d8b0, roughness: 1.0 });
  const sand = new THREE.Mesh(sandGeo, sandMat);
  sand.position.set(-5, -2.7, 0);
  scene.add(sand);

  // Seabed
  const seabedGeo = new THREE.CircleGeometry(50, 48);
  seabedGeo.rotateX(-Math.PI / 2);
  const seabedMat = new THREE.MeshStandardMaterial({ color: 0x3a6b5c, roughness: 0.9 });
  const seabed = new THREE.Mesh(seabedGeo, seabedMat);
  seabed.position.setY(-5);
  scene.add(seabed);

  // Sea grass in harbor
  window._seaGrass = new THREE.Group();
  for (let i = 0; i < 35; i++) {
    const a = Math.random()*Math.PI*2, r = 2+Math.random()*6;
    const x = -4+Math.cos(a)*r*0.5, z = Math.sin(a)*r*0.4;
    const blade = new THREE.Mesh(new THREE.PlaneGeometry(0.1, 0.4+Math.random()*0.3),
      new THREE.MeshStandardMaterial({ color: 0x4a8a5c, roughness: 0.8, side: THREE.DoubleSide, transparent: true, opacity: 0.85 }));
    blade.position.set(x, -2.1, z);
    blade.userData.phase = Math.random()*Math.PI*2;
    blade.userData.speed = 0.8+Math.random()*0.5;
    window._seaGrass.add(blade);
  }
  scene.add(window._seaGrass);
}

// ── Terrain ──────────────────────────────────────────────
function buildTerrain() {
  const segs = 120;
  const geo = new THREE.CircleGeometry(13, segs);
  geo.rotateX(-Math.PI / 2);

  const pos = geo.attributes.position;
  const col = new Float32Array(pos.count * 3);

  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), z = pos.getZ(i);

    // Island shape — crescent with harbor cutout on left side
    const angle = Math.atan2(z, x);
    let baseR = 10.0 + Math.sin(angle * 2) * 2.0 + Math.cos(angle * 3) * 1.0;
    baseR += Math.cos(angle) * 2.5 + Math.sin(angle * 4) * 0.7;

    const dist = Math.sqrt((x / baseR) ** 2 + (z / baseR) ** 2);

    // Harbor cutout
    const harborCut = smoothstep(-2.5, 4.0, x) * (1.0 - smoothstep(-5.0, -2.5, z) * smoothstep(2.5, 0.8, z));

    let h = (1.0 - dist) * 5.0;
    if (harborCut > 0.85) h *= 0.1;

    // Noise
    h += noise2D(x * 0.3, z * 0.35) * 1.2;
    h += noise2D(x * 0.6 + 5, z * 0.7 + 3) * 0.5;

    // Cliff on exposed side
    const exposure = smoothstep(4.0, 12.0, x);
    h += exposure * noise2D(x * 0.3, z * 0.4 + 8) * 2.5;

    // Lighthouse peak at ~ (5, 1)
    const lhDist = Math.sqrt((x - 5) ** 2 + (z - 1) ** 2);
    h = lerp(h, 7.5 + noise2D(x * 0.3, z * 0.4) * 0.8, smoothstep(2.5, 0.3, lhDist));

    // Cottage hill at ~ (-1, 3)
    const ctDist = Math.sqrt((x + 1) ** 2 + (z - 3) ** 2);
    h = lerp(h, 3.5 + noise2D(x * 0.4, z * 0.5) * 0.4, smoothstep(2.5, 0.8, ctDist));

    // Beach transition
    if (h > 0.8 && h < 1.5) {
      const bf = smoothstep(0.8, 1.2, h) * (1.0 - smoothstep(1.2, 1.8, h));
      h = lerp(h, 0.8 + noise2D(x * 0.5, z * 0.6) * 0.3, bf * 0.5);
    }

    // Edge steepening
    if (dist > 0.82) h *= smoothstep(0.82, 0.58, dist);
    h = clamp(h, -3.5, 10);

    pos.setY(i, h);

    // Vertex colors — layered rock
    let r, g, b;
    if (h > 5.0)       { r = 0.38; g = 0.40; b = 0.42; }
    else if (h > 3.0)   { r = 0.48; g = 0.45; b = 0.39; }
    else if (h > 1.5)   { r = 0.52; g = 0.48; b = 0.43; }
    else if (h > 0.6)   { r = 0.70; g = 0.65; b = 0.50; }
    else if (h > -1.0)  { r = 0.74; g = 0.70; b = 0.56; }
    else if (h > -2.5)  { r = 0.35; g = 0.38; b = 0.42; }
    else                { r = 0.22; g = 0.32; b = 0.38; }

    const n = noise2D(x * 0.5 + z * 0.3, x * 0.4 - z * 0.5) * 0.04;
    r += n; g += n; b += n * 0.5;

    if (h > 2.0 && dist < 0.75) {
      const ga = smoothstep(2.0, 5.0, h) * 0.15;
      g += ga * 0.35; b -= ga * 0.12;
    }

    col[i*3] = r; col[i*3+1] = g; col[i*3+2] = b;
  }

  geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  geo.computeVertexNormals();

  const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.85 });
  const island = new THREE.Mesh(geo, mat);
  scene.add(island);

  // Cutaway bottom (seabed face) - circular base matching terrain
  const bot = new THREE.Mesh(new THREE.CircleGeometry(13, 32),
    new THREE.MeshStandardMaterial({ color: 0x3a4852, roughness: 0.9 }));
  bot.rotation.x = Math.PI / 2; bot.position.setY(-3.0);
  scene.add(bot);

  // Stone stairs from lighthouse to cottage
  const stairMat = new THREE.MeshStandardMaterial({ color: 0x8a8278, roughness: 0.9 });
  for (let t = 0; t <= 1; t += 0.025) {
    const sx = lerp(5.0, -1.0, t);
    const sz = 1.0 + Math.sin(t * Math.PI * 2.5) * 2.0;
    const sh = lerp(7.0, 3.5, t) + noise2D(sx * 0.3, sz * 0.35) * 1.2;
    const step = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.2, 0.7), stairMat);
    step.position.set(sx, sh - 0.4, sz);
    step.rotation.y = (Math.random() - 0.5) * 0.2;
    scene.add(step);
  }

  // Jetty into harbor
  const woodMat = new THREE.MeshStandardMaterial({ color: 0x6b5a42, roughness: 0.85 });

  const jp = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.25, 7), woodMat);
  jp.position.set(-5.5, -0.1, -2.5); jp.rotation.y = 0.1;
  scene.add(jp);

  for (let i = 0; i < 5; i++) {
    const t = i / 4;
    const post = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.09, 1.8, 6), woodMat);
    post.position.set(-5.5 + Math.sin(0.1)*t*7, -1.0, -2.5 + (t-0.5)*7);
    scene.add(post);
  }

  for (let i = 0; i < 8; i++) {
    const t = i / 7;
    for (let d = -1; d <= 1; d += 2) {
      const rp = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.65, 4), woodMat);
      rp.position.set(-5.5 + Math.sin(0.1)*t*7 + d*0.4, 0.25, -2.5 + (t-0.5)*7);
      scene.add(rp);
    }
  }

  // Cottage platform
  const plat = new THREE.Mesh(new THREE.CylinderGeometry(2.5, 2.8, 0.45, 8), stairMat);
  plat.position.set(-1.0, 3.2, 3.5);
  scene.add(plat);

  // Scattered rocks
  const rockMat = new THREE.MeshStandardMaterial({ color: 0x6a6458, roughness: 0.9 });
  for (let i = 0; i < 15; i++) {
    const a = Math.random() * Math.PI * 2, d = 1 + Math.random() * 8;
    const rx = Math.cos(a) * d, rz = Math.sin(a) * d * 0.8;
    const rh = (1 - d/12) * 5.0 + noise2D(rx*0.3, rz*0.35) * 1.2;
    if (rh < 0.3 || rh > 5) continue;
    const rs = 0.15 + Math.random() * 0.35;
    const rock = new THREE.Mesh(new THREE.DodecahedronGeometry(rs, 0), rockMat);
    rock.position.set(rx, rh - 0.15 + rs*0.3, rz);
    rock.rotation.set(Math.random()*Math.PI, Math.random()*Math.PI, Math.random()*Math.PI);
    scene.add(rock);
  }
}

// ── Buildings ────────────────────────────────────────────
function buildBuildings() {
  // Lighthouse at (5, ~7.2, 1)
  const lhX = 5.0, lhY = 7.2;

  const stoneMat = new THREE.MeshStandardMaterial({ color: 0x7a7268, roughness: 0.9 });

  // Base
  const base = new THREE.Mesh(new THREE.CylinderGeometry(1.4, 1.7, 0.9, 12), stoneMat);
  base.position.set(lhX, lhY - 0.45, 1.0);
  scene.add(base);

  // Tower — tapered white plaster
  const towerMat = new THREE.MeshStandardMaterial({ color: 0xe8e4e0, roughness: 0.75 });
  const tower = new THREE.Mesh(new THREE.CylinderGeometry(0.75, 1.2, 6.0, 12), towerMat);
  tower.position.set(lhX, lhY + 2.5, 1.0);
  scene.add(tower);

  // Red stripes
  const redMat = new THREE.MeshStandardMaterial({ color: 0xb83a2a, roughness: 0.6 });
  for (let i = 0; i < 3; i++) {
    const s = new THREE.Mesh(
      new THREE.CylinderGeometry(0.78-i*0.05, 1.23-i*0.07, 0.9, 12), redMat
    );
    s.position.set(lhX, lhY + 1.0 + i * 1.85, 1.0);
    scene.add(s);
  }

  // Gallery deck
  const deck = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 1.1, 0.14, 12),
    new THREE.MeshStandardMaterial({ color: 0x5a5248, roughness: 0.8 }));
  deck.position.set(lhX, lhY + 5.5, 1.0);
  scene.add(deck);

  // Railing
  const rail = new THREE.Mesh(new THREE.TorusGeometry(1.1, 0.03, 6, 18),
    new THREE.MeshStandardMaterial({ color: 0x4a4238, roughness: 0.7 }));
  rail.position.set(lhX, lhY + 5.68, 1.0);
  rail.rotation.x = Math.PI / 2;
  scene.add(rail);

  // Lantern room (glass)
  const lantern = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.6, 1.1, 8),
    new THREE.MeshStandardMaterial({ color: 0xf0e8c0, roughness: 0.3, transparent: true, opacity: 0.6 }));
  lantern.position.set(lhX, lhY + 6.1, 1.0);
  scene.add(lantern);

  // Interior glow + light
  const lhLight = new THREE.PointLight(0xffcc66, 3.5, 10);
  lhLight.position.set(lhX, lhY + 5.9, 1.0);
  scene.add(lhLight);

  const glowMat = new THREE.MeshStandardMaterial({ color: 0xffdd88, emissive: 0xffcc66, emissiveIntensity: 2.5 });
  const glow = new THREE.Mesh(new THREE.SphereGeometry(0.25, 8, 8), glowMat);
  glow.position.set(lhX, lhY + 5.9, 1.0);
  scene.add(glow);
  window._lhGlow = glow;

  // Copper dome roof
  const copperMat = new THREE.MeshStandardMaterial({ color: 0x8a6344, roughness: 0.35, metalness: 0.7 });
  const roofGeo = new THREE.SphereGeometry(0.6, 12, 8, 0, Math.PI*2, 0, Math.PI/3);
  const roof = new THREE.Mesh(roofGeo, copperMat);
  roof.position.set(lhX, lhY + 6.65, 1.0);
  scene.add(roof);

  // Top ball
  const top = new THREE.Mesh(new THREE.SphereGeometry(0.1, 6, 6), copperMat);
  top.position.set(lhX, lhY + 7.45, 1.0);
  scene.add(top);

  // Door
  const door = new THREE.Mesh(new THREE.BoxGeometry(0.55, 1.0, 0.12),
    new THREE.MeshStandardMaterial({ color: 0x5a4a38, roughness: 0.7 }));
  door.position.set(lhX - 0.85, lhY + 0.5, 1.0);
  door.rotation.y = Math.PI;
  scene.add(door);

  // Window
  const win = new THREE.Mesh(new THREE.CircleGeometry(0.22, 8),
    new THREE.MeshStandardMaterial({ color: 0x3a4a5c, roughness: 0.4 }));
  win.position.set(lhX, lhY + 4.6, 0.25);
  scene.add(win);

  // ── Fishing Cottage at (-1, ~3.2, 3.5) ─────────────
  const ctX = -1.0, ctY = 3.2, ctZ = 3.5;

  // Stone foundation
  const foundMat = new THREE.MeshStandardMaterial({ color: 0x7a7268, roughness: 0.9 });
  const found = new THREE.Mesh(new THREE.BoxGeometry(3.8, 0.6, 3.2), foundMat);
  found.position.set(ctX, ctY - 0.3, ctZ);
  scene.add(found);

  // Weathered plaster walls
  const wallMat = new THREE.MeshStandardMaterial({ color: 0xf5f0e8, roughness: 0.75 });
  const walls = new THREE.Mesh(new THREE.BoxGeometry(3.4, 2.5, 3.0), wallMat);
  walls.position.set(ctX, ctY + 1.0, ctZ);
  scene.add(walls);

  // Worn plaster patches
  const patchMat = new THREE.MeshStandardMaterial({ color: 0xd8d0c0, roughness: 0.8 });
  for (let i = 0; i < 6; i++) {
    const pGeo = new THREE.PlaneGeometry(0.35+Math.random()*0.4, 0.25+Math.random()*0.3);
    const patch = new THREE.Mesh(pGeo, patchMat);
    const side = (Math.random() > 0.5) ? 1 : -1;
    if (i < 4) {
      patch.position.set(ctX + (Math.random()-0.5)*2.8, ctY + 0.6 + Math.random()*1.4, ctZ + side*1.52);
    } else {
      patch.position.set(ctX + side*1.72, ctY + 0.6 + Math.random()*1.4, ctZ + (Math.random()-0.5)*2.4);
      patch.rotation.y = Math.PI / 2;
    }
    scene.add(patch);
  }

  // Pitched roof — dark slate
  const roofShape = new THREE.Shape();
  roofShape.moveTo(-1.9, 0); roofShape.lineTo(0, 1.5); roofShape.lineTo(1.9, 0);
  const cottageRoof = new THREE.Mesh(new THREE.ExtrudeGeometry(roofShape, { depth: 3.4, bevelEnabled: false }),
    new THREE.MeshStandardMaterial({ color: 0x4a4540, roughness: 0.85 }));
  cottageRoof.position.set(ctX, ctY + 2.3, ctZ - 1.7);
  scene.add(cottageRoof);

  // Chimney
  const chimney = new THREE.Mesh(new THREE.BoxGeometry(0.45, 1.3, 0.45), foundMat);
  chimney.position.set(ctX + 1.2, ctY + 3.4, ctZ);
  scene.add(chimney);

  // Door with frame
  const cDoor = new THREE.Mesh(new THREE.BoxGeometry(0.6, 1.2, 0.1),
    new THREE.MeshStandardMaterial({ color: 0x6b5a48, roughness: 0.7 }));
  cDoor.position.set(ctX + 0.9, ctY + 0.6, ctZ + 1.52);
  scene.add(cDoor);

  const dfMat = new THREE.MeshStandardMaterial({ color: 0x5a4a38, roughness: 0.7 });
  const addDF = (s, p) => { const m = new THREE.Mesh(new THREE.BoxGeometry(s[0], s[1], 0.12), dfMat); m.position.copy(p); scene.add(m); };
  addDF([0.7, 0.06], new THREE.Vector3(ctX+0.9, ctY+1.23, ctZ+1.53));
  addDF([0.06, 1.24], new THREE.Vector3(ctX+0.57, ctY+0.6, ctZ+1.53));
  addDF([0.06, 1.24], new THREE.Vector3(ctX+1.23, ctY+0.6, ctZ+1.53));

  // Windows with warm glow
  const addWindow = (wp) => {
    const wm = new THREE.Mesh(new THREE.PlaneGeometry(0.5, 0.55),
      new THREE.MeshStandardMaterial({ color: 0xffdd88, emissive: 0xffcc66, emissiveIntensity: 1.4 }));
    wm.position.set(wp.x, wp.y, wp.z);
    scene.add(wm);

    const wfMat = new THREE.MeshStandardMaterial({ color: 0x6a5a48, roughness: 0.7 });
    const addWF = (s, p) => { const m = new THREE.Mesh(new THREE.BoxGeometry(s[0], s[1], 0.08), wfMat); m.position.copy(p); scene.add(m); };
    addWF([0.56, 0.05], new THREE.Vector3(wp.x, wp.y+0.3, wp.z));
    addWF([0.56, 0.05], new THREE.Vector3(wp.x, wp.y-0.3, wp.z));
    addWF([0.05, 0.6], new THREE.Vector3(wp.x-0.27, wp.y, wp.z));
    addWF([0.05, 0.6], new THREE.Vector3(wp.x+0.27, wp.y, wp.z));
    addWF([0.53, 0.04], new THREE.Vector3(wp.x, wp.y, wp.z));
    addWF([0.04, 0.56], new THREE.Vector3(wp.x, wp.y, wp.z));

    const wLight = new THREE.PointLight(0xffcc66, 1.8, 5);
    wLight.position.set(wp.x, wp.y, wp.z + (wp.z > 0 ? 0.6 : -0.6));
    scene.add(wLight);
  };

  addWindow({ x: ctX - 0.6, y: ctY + 1.2, z: ctZ + 1.52 });
  addWindow({ x: ctX + 0.6, y: ctY + 1.2, z: ctZ - 1.52 });
  addWindow({ x: ctX + 1.72, y: ctY + 0.8, z: ctZ });
}

// ── Details ──────────────────────────────────────────────
function buildDetails() {
  window._boats = [];

  // Two boats moored near jetty in harbor
  const boatDefs = [
    { x: -5.0, z: -3.5, rotY: 0.4 },
    { x: -5.3, z: -2.0, rotY: -0.1 }
  ];

  boatDefs.forEach((bd, idx) => {
    const boat = createBoat(idx);
    boat.position.set(bd.x, 0.12, bd.z);
    boat.rotation.y = bd.rotY;
    boat.userData.phase = Math.random() * Math.PI * 2;
    boat.userData.speed = 0.85 + idx * 0.15;
    scene.add(boat);
    window._boats.push(boat);

    // Mooring rope
    const dx = bd.x - (-5.5), dz = bd.z - (-2.5);
    const rope = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 2.8, 4),
      new THREE.MeshStandardMaterial({ color: 0x8a7a60, roughness: 0.9 }));
    rope.position.set(bd.x + dx*0.35, 0.12, bd.z + dz*0.35);
    rope.rotation.z = Math.PI / 2;
    rope.rotation.y = -Math.atan2(dz, dx);
    scene.add(rope);
  });

  // Buckets
  const bucketMat = new THREE.MeshStandardMaterial({ color: 0x5a7a9a, roughness: 0.6 });
  for (let i = 0; i < 3; i++) {
    const bucket = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.14, 0.28, 8), bucketMat);
    bucket.position.set(-5.2+i*0.4, -0.15, -0.8);
    scene.add(bucket);
  }

  // Coiled rope
  const coilShape = new THREE.Shape();
  for (let a = 0; a < Math.PI * 4; a += 0.3) {
    const r = 0.1 + a * 0.025, px = Math.cos(a)*r, pz = Math.sin(a)*r;
    if (a === 0) coilShape.moveTo(px, pz); else coilShape.lineTo(px, pz);
  }
  const coil = new THREE.Mesh(new THREE.ExtrudeGeometry(coilShape, { depth: 0.07, bevelEnabled: false }),
    new THREE.MeshStandardMaterial({ color: 0x8a7a58, roughness: 0.9 }));
  coil.position.set(-4.5, -0.02, -1.0);
  coil.rotation.x = -Math.PI / 2;
  scene.add(coil);

  // Net pile
  const net = new THREE.Mesh(new THREE.SphereGeometry(0.5, 8, 6, 0, Math.PI*2, 0, Math.PI/2),
    new THREE.MeshStandardMaterial({ color: 0x7a8a6a, roughness: 0.95 }));
  net.position.set(-4.5, -0.15, -1.2);
  scene.add(net);

  // Coastal grasses & flowers on terrain
  window._grass = [];
  for (let i = 0; i < 50; i++) {
    const a = Math.random() * Math.PI * 2, d = 1 + Math.random() * 8;
    const gx = Math.cos(a) * d, gz = Math.sin(a) * d * 0.8;
    const harborCut = smoothstep(-2.5, 4.0, gx) * (1.0 - smoothstep(-5.0, -2.5, gz) * smoothstep(2.5, 0.8, gz));
    if (harborCut > 0.85) continue;

    const lhDist = Math.sqrt((gx - 5) ** 2 + (gz - 1) ** 2);
    if (lhDist < 0.8) continue;

    const islandH = (1 - d/12) * 5.0 + noise2D(gx*0.3, gz*0.35) * 1.2;
    const gy = Math.max(islandH, 0.3);
    if (gy < 0.5 || gy > 6) continue;

    const bh = 0.3 + Math.random() * 0.45;
    const isFlower = Math.random() < 0.12;
    let color;
    if (isFlower) {
      const fc = [0xe8c84a, 0xf09060, 0xd87aaa, 0xe8e04a];
      color = fc[Math.floor(Math.random() * fc.length)];
    } else {
      const gc = [0x5a7a4a, 0x6a8a52, 0x4a6a3a];
      color = gc[Math.floor(Math.random() * gc.length)];
    }

    const blade = new THREE.Mesh(new THREE.PlaneGeometry(0.07, bh),
      new THREE.MeshStandardMaterial({ color, roughness: 0.85, side: THREE.DoubleSide, transparent: true, opacity: 0.9 }));
    blade.position.set(gx, gy + 0.12, gz);
    blade.rotation.y = Math.random() * Math.PI;
    blade.userData.phase = Math.random()*Math.PI*2;
    blade.userData.speed = 1.0 + Math.random() * 0.8;
    scene.add(blade);
    window._grass.push(blade);
  }
}

function createBoat(idx) {
  const group = new THREE.Group();
  const hullColors = [0x8a3a2a, 0x3a5a8a];
  const hullMat = new THREE.MeshStandardMaterial({ color: hullColors[idx], roughness: 0.65 });

  const hullShape = new THREE.Shape();
  hullShape.moveTo(-0.9, 0); hullShape.quadraticCurveTo(-1.0, -0.4, -0.7, -0.45);
  hullShape.lineTo(0.8, -0.42); hullShape.quadraticCurveTo(1.1, -0.3, 1.1, 0);
  const hull = new THREE.Mesh(new THREE.ExtrudeGeometry(hullShape, { depth: 0.55, bevelEnabled: true, bevelThickness: 0.06, bevelSize: 0.06 }), hullMat);
  hull.rotation.x = -Math.PI / 2;
  group.add(hull);

  const cabin = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.4, 0.5),
    new THREE.MeshStandardMaterial({ color: 0xf0e8d8, roughness: 0.7 }));
  cabin.position.set(-0.35, 0.2, 0);
  group.add(cabin);

  const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.035, 1.6, 6),
    new THREE.MeshStandardMaterial({ color: 0x7a6a58, roughness: 0.8 }));
  mast.position.set(0.25, 1.0, 0);
  group.add(mast);

  const sail = new THREE.Mesh(new THREE.PlaneGeometry(0.55, 0.9),
    new THREE.MeshStandardMaterial({ color: 0xf5f0e0, roughness: 0.8, side: THREE.DoubleSide }));
  sail.position.set(0.25, 0.85, 0.17);
  sail.rotation.y = Math.PI / 4;
  group.add(sail);

  return group;
}

// ── Animals ──────────────────────────────────────────────
function buildAnimals() {
  window._gulls = [];
  window._dolphins = [];

  // Gulls circling high above
  for (let i = 0; i < 5; i++) {
    const gull = createGull();
    gull.userData.orbitRadius  = 10 + Math.random() * 8;
    gull.userData.orbitSpeed   = (0.12 + Math.random() * 0.08) * (Math.random() > 0.5 ? 1 : -1);
    gull.userData.orbitY       = 12 + Math.random() * 8;
    gull.userData.orbitOffset  = Math.random() * Math.PI * 2;
    scene.add(gull);
    window._gulls.push(gull);
  }

  // Dolphins in open ocean (away from island)
  for (let i = 0; i < 4; i++) {
    const dolphin = createDolphin();
    dolphin.userData.swimRadius = 25 + Math.random() * 18;
    dolphin.userData.swimSpeed  = 0.18 + Math.random() * 0.12;
    dolphin.userData.surfTimer  = 4 + Math.random() * 10;
    dolphin.userData.isSurfacing = false;
    dolphin.userData.surfPhase   = 0;

    const angle = -Math.PI * 0.4 + Math.random() * Math.PI * 0.6;
    const dist = dolphin.userData.swimRadius;
    dolphin.position.set(Math.cos(angle) * dist, -0.8, Math.sin(angle) * dist);
    scene.add(dolphin);
    window._dolphins.push(dolphin);
  }
}

function createGull() {
  const group = new THREE.Group();
  const bodyMat = new THREE.MeshStandardMaterial({ color: 0xf8f6f2, roughness: 0.7 });
  const wingMat = new THREE.MeshStandardMaterial({ color: 0xe8e4dc, roughness: 0.75, side: THREE.DoubleSide });

  const body = new THREE.Mesh(new THREE.SphereGeometry(0.12, 6, 4), bodyMat);
  body.scale.set(1, 0.7, 0.6);
  group.add(body);

  const wingGeo = new THREE.PlaneGeometry(0.45, 0.13);
  const wingL = new THREE.Mesh(wingGeo, wingMat);
  wingL.position.set(0, 0.02, -0.2);
  wingL.rotation.x = Math.PI / 2;
  group.add(wingL);

  const wingR = new THREE.Mesh(wingGeo, wingMat);
  wingR.position.set(0, 0.02, 0.2);
  wingR.rotation.x = -Math.PI / 2;
  group.add(wingR);

  const head = new THREE.Mesh(new THREE.SphereGeometry(0.065, 5, 4), bodyMat);
  head.position.set(0.13, 0.03, 0);
  group.add(head);

  const beak = new THREE.Mesh(new THREE.ConeGeometry(0.025, 0.07, 4),
    new THREE.MeshStandardMaterial({ color: 0xe8c43a, roughness: 0.5 }));
  beak.position.set(0.2, 0.02, 0);
  beak.rotation.z = -Math.PI / 2;
  group.add(beak);

  group.userData.wingL = wingL;
  group.userData.wingR = wingR;
  return group;
}

function createDolphin() {
  const group = new THREE.Group();
  const bodyMat = new THREE.MeshStandardMaterial({ color: 0x4a6878, roughness: 0.45, metalness: 0.15 });
  const finMat = new THREE.MeshStandardMaterial({ color: 0x3a5868, roughness: 0.5 });
  const bellyMat = new THREE.MeshStandardMaterial({ color: 0x8aaaba, roughness: 0.5 });

  const body = new THREE.Mesh(new THREE.SphereGeometry(0.35, 8, 6), bodyMat);
  body.scale.set(1, 0.7, 2.5);
  group.add(body);

  const head = new THREE.Mesh(new THREE.SphereGeometry(0.2, 6, 5), bodyMat);
  head.scale.set(1, 0.8, 0.6);
  head.position.set(0, 0, 0.75);
  group.add(head);

  const snout = new THREE.Mesh(new THREE.ConeGeometry(0.1, 0.25, 6), bodyMat);
  snout.position.set(0, 0, 1.0);
  snout.rotation.x = Math.PI / 2;
  group.add(snout);

  const finShape = new THREE.Shape();
  finShape.moveTo(0, 0); finShape.lineTo(-0.15, 0.35); finShape.lineTo(0.2, 0.05);
  const df = new THREE.Mesh(new THREE.ExtrudeGeometry(finShape, { depth: 0.03, bevelEnabled: false }), finMat);
  df.position.set(0.18, 0.25, -0.1);
  group.add(df);

  const tailShape = new THREE.Shape();
  tailShape.moveTo(0, 0); tailShape.lineTo(-0.3, 0.25); tailShape.lineTo(-0.05, 0);
  tailShape.lineTo(0.3, 0.25); tailShape.closePath();
  const tail = new THREE.Mesh(new THREE.ExtrudeGeometry(tailShape, { depth: 0.03, bevelEnabled: false }), finMat);
  tail.position.set(0, 0, -0.85);
  group.add(tail);

  const belly = new THREE.Mesh(new THREE.SphereGeometry(0.3, 8, 4), bellyMat);
  belly.scale.set(1, 0.5, 2.3);
  belly.position.setY(-0.15);
  group.add(belly);

  const eye = new THREE.Mesh(new THREE.SphereGeometry(0.04, 4, 4),
    new THREE.MeshStandardMaterial({ color: 0x1a1a1a }));
  eye.position.set(0.25, 0.05, 0.65);
  group.add(eye);

  return group;
}

// ── Animation ────────────────────────────────────────────
function animate() {
  requestAnimationFrame(animate);
  const t = clock.getElapsedTime();

  // Animate water waves via vertex position manipulation
  if (waterMesh && waterOriginalPositions) {
    const pos = waterMesh.geometry.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const ox = pos.getX(i), oz = pos.getZ(i);
      const origY = waterOriginalPositions[i];

      // Multi-octave wave pattern
      let y = origY;
      y += Math.sin(ox*0.15 + t*0.4) * Math.cos(oz*0.12 + t*0.3) * 0.6;
      y += Math.sin(ox*0.3 + oz*0.25 + t*0.6) * 0.25;
      y += Math.sin(ox*0.6 - oz*0.5 + t*0.8) * 0.12;

      // Swell on exposed side
      const exposure = smoothstep(8.0, 20.0, ox);
      y += Math.sin(ox*0.1 + t*0.15) * Math.cos(oz*0.1 + t*0.25) * exposure * 0.8;

      // Near rocks: more turbulence
      const rockDist = Math.sqrt(Math.max(0, ox-6.0)**2 + oz**2);
      y += smoothstep(6.0, 1.5, rockDist) * Math.sin(ox*0.8+t) * Math.cos(oz*0.7+t) * 0.3;

      // Harbor calm
      const harbor = smoothstep(6.0, -2.0, ox);
      y += Math.sin(ox*0.2+t) * Math.cos(oz*0.2+t) * harbor * 0.1;

      pos.setY(i, y);
    }
    pos.needsUpdate = true;
  }

  // Sea grass sway (harbor)
  (window._seaGrass?.children || []).forEach(b => {
    if (b.userData.phase !== undefined) b.rotation.z = Math.sin(t * b.userData.speed + b.userData.phase) * 0.3;
  });

  // Boats bobbing
  (window._boats || []).forEach(boat => {
    const d = boat.userData;
    const sy = 0.12 + Math.sin(t * d.speed + d.phase) * 0.1;
    boat.position.setY(sy);
    const rx = Math.sin(t * d.speed * 0.7 + d.phase) * 0.04;
    const rz = Math.sin(t * d.speed * 0.5 + d.phase + 1) * 0.025;
    boat.rotation.x = rx;
  });

  // Grass sway
  (window._grass || []).forEach(blade => {
    if (blade.userData.phase !== undefined) blade.rotation.z = Math.sin(t * blade.userData.speed + blade.userData.phase) * 0.3;
  });

  // Gulls
  (window._gulls || []).forEach(gull => {
    const d = gull.userData;
    const angle = t * d.orbitSpeed + d.orbitOffset;
    gull.position.set(Math.cos(angle) * d.orbitRadius, d.orbitY + Math.sin(t*0.5 + d.orbitOffset) * 1.8, Math.sin(angle) * d.orbitRadius);
    gull.rotation.y = -angle + Math.PI / 2;
    const flap = Math.sin(t * 5.5 + d.orbitOffset) * 0.45;
    if (gull.userData.wingL) {
      if (gull.userData.wingL) {
        gull.userData.wingL.rotation.z = flap;
        gull.userData.wingR.rotation.z = -flap;
      }
    }
  });

  // Dolphins
  (window._dolphins || []).forEach(dolphin => {
    const d = dolphin.userData;
    if (!d.isSurfacing) {
      d.surfTimer -= 0.016;
      const angle = t * d.swimSpeed + d.surfTimer * 0.1;
      const r = d.swimRadius;
      dolphin.position.set(Math.cos(angle) * r, -0.8 + Math.sin(t*0.5+angle) * 0.1, Math.sin(angle) * r);
      dolphin.rotation.y = -angle + Math.PI / 2;
      if (d.surfTimer <= 0) { d.isSurfacing = true; d.surfPhase = 0; }
    } else {
      d.surfPhase += 0.016;
      const progress = d.surfPhase / 2.5;
      if (progress < 1.0) {
        const jh = Math.sin(progress * Math.PI) * 2.5;
        dolphin.position.setY(-0.8 + jh);
        const rx2 = Math.sin(progress * Math.PI) * -0.5;
        dolphin.rotation.x = rx2;
        const angle = t * d.swimSpeed + d.surfTimer * 0.1;
        dolphin.position.set(Math.cos(angle) * d.swimRadius, -0.8 + jh, Math.sin(angle) * d.swimRadius);
      } else {
        d.isSurfacing = false;
        d.surfTimer = 8 + Math.random() * 15;
      }
    }
  });

  // Lighthouse glow pulse
  if (window._lhGlow) window._lhGlow.material.emissiveIntensity = 2.0 + Math.sin(t * 0.8) * 0.6;

  controls.update();
  renderer.render(scene, camera);
}



// ── Start ────────────────────────────────────────────────
init();
