// water.js — the diorama sea. A single displaced water disc; a CPU-generated
// data texture (same heightfield as the land) drives depth, harbor calm and
// the shoreline wash. The GLSL wave constants mirror waveYAt() in terrain.js.

import * as THREE from 'three';
import {
  heightAt, harborMask, slabRadius, slabBounds, sstep,
  SLAB_BOTTOM, clamp01,
} from './terrain.js';

export function makeDataTexture(size = 512) {
  const b = slabBounds();
  const c = document.createElement('canvas');
  c.width = size; c.height = size;
  const ctx = c.getContext('2d');
  const img = ctx.createImageData(size, size);
  for (let iy = 0; iy < size; iy++) {
    // canvas top row = smallest z (north); flipY=true maps it to v=1,
    // and v = (z - z0)/(z1 - z0) — consistent with the planar UVs.
    const z = b.z1 - ((iy + 0.5) / size) * (b.z1 - b.z0);
    for (let ix = 0; ix < size; ix++) {
      const x = b.x0 + ((ix + 0.5) / size) * (b.x1 - b.x0);
      const h = heightAt(x, z);
      const p = (iy * size + ix) * 4;
      img.data[p + 0] = clamp01(-h / 7.0) * 255;          // R: depth fraction (0 on land)
      img.data[p + 1] = harborMask(x, z) * 255;           // G: harbor mask
      img.data[p + 2] = (1 - sstep(0.0, 0.8, Math.abs(h))) * 255; // B: shoreline proximity
      img.data[p + 3] = clamp01((h + 7) / 7) * 255;       // A: local height (for the wash)
    }
  }
  ctx.putImageData(img, 0, 0);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.NoColorSpace;
  t.minFilter = THREE.LinearFilter;
  t.magFilter = THREE.LinearFilter;
  t.generateMipmaps = false;
  return t;
}

const VERT = /* glsl */ `
uniform float uTime;
uniform sampler2D uData;
varying vec2 vUv;
varying vec3 vWorldPos;
varying vec3 vNormal;
varying float vWaveY;
varying float vDepth;

vec2 d1 = normalize(vec2(0.72, -0.69));
vec2 d2 = normalize(vec2(0.95, -0.31));
vec2 d3 = normalize(vec2(0.30, -0.95));
vec2 d4 = normalize(vec2(0.50, 0.87));

float harborMask(vec2 p) {
  float d = length(p - vec2(13.0, 7.0));
  return 1.0 - smoothstep(3.0, 8.5, d);
}

float setEnv(float t) {
  return clamp(0.62 + 0.38 * sin(t * 0.331) + 0.22 * sin(t * 0.203 + 1.7), 0.15, 1.2);
}

float waveY(vec2 p, float t, float open, float shoal, float G) {
  float set = setEnv(t);
  float y = 0.0;
  y += (0.40 * set + 0.10) * sin(dot(p, d1) * 0.70 - t * 1.05)            * open * shoal;
  y += 0.26 * set          * sin(dot(p, d2) * 0.48 - t * 0.87 + 1.3)       * open * shoal;
  y += 0.10                * sin(dot(p, d3) * 1.35 - t * 1.90 + 2.1)       * open * shoal;
  y += 0.06                * sin(dot(p, d4) * 2.60 - t * 2.60)             * G;
  return y;
}

void main() {
  vUv = uv;
  vec2 p = position.xz;
  float G = harborMask(p);
  float open = 1.0 - G * 0.92;
  float depthM = texture2D(uData, uv).r * 7.0;
  float shoal = 1.0 + 0.55 * (1.0 - smoothstep(0.6, 3.2, depthM)) * (1.0 - G);

  // Gerstner-style horizontal lean on the main swell (steepening toward shore).
  float ph1 = dot(p, d1) * 0.70 - uTime * 1.05;
  p += d1 * (0.18 * setEnv(uTime) * shoal * open) * cos(ph1);

  float y = waveY(p, uTime, open, shoal, G);
  vec3 pos = vec3(p.x, y, p.y);

  float e = 0.35;
  float yL = waveY(p - vec2(e, 0.0), uTime, open, shoal, G);
  float yR = waveY(p + vec2(e, 0.0), uTime, open, shoal, G);
  float yD = waveY(p - vec2(0.0, e), uTime, open, shoal, G);
  float yU = waveY(p + vec2(0.0, e), uTime, open, shoal, G);
  vNormal = normalize(vec3(yL - yR, 2.0 * e, yD - yU));

  vWaveY = y;
  vDepth = depthM;
  vec4 wp = modelMatrix * vec4(pos, 1.0);
  vWorldPos = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`;

const FRAG = /* glsl */ `
uniform float uTime;
uniform sampler2D uData;
uniform vec3 uSunDir;
uniform vec3 uSunColor;
varying vec2 vUv;
varying vec3 vWorldPos;
varying vec3 vNormal;
varying float vWaveY;
varying float vDepth;

float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123); }
float vnoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
             mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}
float fbm(vec2 p) { return 0.62 * vnoise(p) + 0.38 * vnoise(p * 2.13 + 5.2); }

void main() {
  vec4 data = texture2D(uData, vUv);
  float depthM = data.r * 7.0;
  float G = data.g;
  float shoreNess = data.b;
  float hLocal = data.a * 7.0 - 7.0;

  vec3 V = normalize(cameraPosition - vWorldPos);
  vec3 N = normalize(vNormal);

  // Water column: deep opaque blue -> turquoise -> transparent shallow.
  // The open sea is near-opaque so its own color dominates; only the thin
  // coastal band and the harbor stay clear enough to show sand and stones.
  vec3 deep  = vec3(0.008, 0.210, 0.480);
  vec3 mid   = vec3(0.020, 0.470, 0.520);
  vec3 shall = vec3(0.200, 0.720, 0.600);
  vec3 col = mix(deep, mid, 1.0 - smoothstep(0.9, 3.2, depthM));
  col = mix(col, shall, 1.0 - smoothstep(0.12, 1.05, depthM));
  col = mix(col, vec3(0.030, 0.420, 0.380), G * 0.40);

  // Opacity profile: the sea is a body of water, not a tint.
  float alpha = mix(0.97, 0.55, 1.0 - smoothstep(0.14, 2.2, depthM));
  alpha = mix(alpha, 0.72, G * 0.65);

  // Fresnel sky + restrained sun glint (kept low so the water never blows out).
  float fr = pow(1.0 - max(dot(N, V), 0.0), 3.0);
  vec3 sky = mix(vec3(0.52, 0.66, 0.78), vec3(0.96, 0.80, 0.60),
                 clamp(dot(V, uSunDir) * 0.5 + 0.5, 0.0, 1.0) * 0.55);
  col = mix(col, sky, 0.06 + 0.20 * fr);
  // soft sky light from above keeps the shaded bowl readable
  col += vec3(0.03, 0.055, 0.075) * max(N.y, 0.0);
  vec3 R = reflect(-V, N);
  float sd = max(dot(R, uSunDir), 0.0);
  float spec = pow(sd, 160.0) * 1.4 + pow(sd, 28.0) * 0.22;
  col += uSunColor * spec * (0.55 + 0.30 * fr);

  // Sunlight through the crests.
  col += vec3(0.04, 0.17, 0.15) * smoothstep(0.12, 0.45, vWaveY) * (0.45 + 0.55 * fr);

  // --- foam ---
  float n1 = fbm(vWorldPos.xz * 0.55 + uTime * vec2(0.10, -0.09));
  float n2 = fbm(vWorldPos.xz * 1.60 - uTime * vec2(0.16, 0.14) + 3.7);

  // Surf: breaking where the shelf shoals, strongest on wave crests.
  float surfBand = (1.0 - smoothstep(1.0, 4.2, depthM)) * (1.0 - G);
  float crest = smoothstep(0.16, 0.42, vWaveY);
  float surfFoam = surfBand * smoothstep(0.48, 0.78, n1 * 0.65 + n2 * 0.55) * (0.30 + 0.70 * crest);

  // Shoreline wash: the displaced surface running over a LOW rock shelf only
  // (band of hLocal between ~ -0.9 and +1.1) and draining back as the wave falls.
  float wet = smoothstep(-0.06, 0.30, vWaveY - hLocal - 0.05);
  float shelfMask = (1.0 - smoothstep(0.2, 1.1, hLocal)) * smoothstep(-2.5, -0.9, hLocal);
  float washFoam = wet * shelfMask * (0.50 + 0.50 * n2) * (1.0 - G * 0.8);

  // Bright line where the water meets the shore, advancing and retreating.
  float shoreLine = (1.0 - smoothstep(0.0, 0.10, depthM)) * (1.0 - G)
                  * (0.35 + 0.65 * smoothstep(-0.12, 0.18, vWaveY));

  float foam = max(max(surfFoam, washFoam * 0.95), shoreLine * 0.9);
  foam = smoothstep(0.10, 0.72, foam);

  vec3 foamCol = vec3(0.985, 0.990, 0.975) * (1.0 + 0.35 * spec);
  col = mix(col, foamCol, clamp(foam, 0.0, 1.0));
  alpha = max(alpha, foam * 0.85);

  // Darken the wet edge where the water surface just meets a rock shelf.
  col = mix(col, col * 0.72, shoreNess * 0.30 * smoothstep(0.14, 0.0, abs(vWaveY - hLocal)));

  gl_FragColor = vec4(col, alpha);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;

export function createWater(scene) {
  const b = slabBounds();
  const bw = b.x1 - b.x0, bh = b.z1 - b.z0;

  const ANG = 200, RAD = 110;
  const positions = new Float32Array((ANG + 1) * (RAD + 1) * 3);
  const uvs = new Float32Array((ANG + 1) * (RAD + 1) * 2);
  const index = [];
  let k = 0, u = 0;
  for (let i = 0; i <= ANG; i++) {
    const a = (i / ANG) * Math.PI * 2;
    const cb = Math.cos(a), sb = Math.sin(a);
    for (let j = 0; j <= RAD; j++) {
      const r = (j / RAD) * slabRadius(a);
      const x = r * cb, z = r * sb;
      positions[k++] = x; positions[k++] = 0; positions[k++] = z;
      uvs[u++] = (x - b.x0) / bw;
      uvs[u++] = (z - b.z0) / bh;
    }
  }
  for (let i = 0; i < ANG; i++) {
    for (let j = 0; j < RAD; j++) {
      const a = i * (RAD + 1) + j;
      const bIdx = (i + 1) * (RAD + 1) + j;
      index.push(a, bIdx, a + 1, bIdx, bIdx + 1, a + 1);
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geo.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
  geo.setIndex(index);

  const mat = new THREE.ShaderMaterial({
    vertexShader: VERT,
    fragmentShader: FRAG,
    uniforms: {
      uTime: { value: 0 },
      uData: { value: makeDataTexture(512) },
      uSunDir: { value: new THREE.Vector3(-0.72, 0.38, 0.55).normalize() },
      uSunColor: { value: new THREE.Color(1.0, 0.86, 0.68) },
    },
    transparent: true,
    depthWrite: false,
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.renderOrder = 10;
  mesh.frustumCulled = false;
  scene.add(mesh);
  return mesh;
}

export const WATER_Y = 0;
export { SLAB_BOTTOM };
