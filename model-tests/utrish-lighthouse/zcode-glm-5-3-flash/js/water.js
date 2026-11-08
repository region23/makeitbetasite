// The sea: analytic wave field (shared GLSL/JS), depth-coloured transparent water,
// foam from crests / shorelines / strait surge, and the cutaway water walls.
import * as THREE from 'three';
import { insideSlab, H, BAKE } from './geo.js';
import { sampleBake } from './geo.js';

// ---------- shared wave math ----------
export const WAVE_GLSL = /* glsl */`
  float waveEnv(vec2 p, float t){
    float ph = t*0.27 - dot(p, vec2(0.90,0.435))*0.10 + 1.7;
    return 0.45 + 0.55*pow(0.5+0.5*sin(ph), 3.0);
  }
  float waveH(vec2 p, float t, float expo, float slosh){
    float env = waveEnv(p, t);
    // slow spatial phase drift bends the crest lines so they never stay parallel
    float drift = sin(dot(p, vec2(0.13, 0.07)) * 3.0 + t * 0.35)
                + 0.7 * sin(dot(p, vec2(-0.07, 0.11)) * 4.2 - t * 0.22);
    float h = 0.0;
    h += 0.55*env*expo*sin(dot(p,vec2(0.90,0.435))*(6.2831/26.0) + drift*0.55 - t*1.55);
    h += 0.26*env*expo*sin(dot(p,vec2(0.98,-0.21))*(6.2831/13.5) + drift*0.8 - t*2.12 + 1.3);
    h += 0.13*expo*sin(dot(p,vec2(0.80,0.60))*(6.2831/7.0) + drift*1.4 - t*2.97 + 4.1);
    h += slosh*0.17*sin(dot(p,vec2(0.60,-0.80))*0.50 - t*1.60)*sin(t*1.13);
    return h;
  }
`;

export function waterHeightJS(baked, x, z, t) {
  const s = sampleBake(baked, x, z);
  const damp = Math.min(1, s.depth / 1.5);
  const env = 0.45 + 0.55 * Math.pow(0.5 + 0.5 * Math.sin(t * 0.27 - (x * 0.90 + z * 0.435) * 0.10 + 1.7), 3);
  const expo = s.expo;
  const drift = Math.sin((x * 0.13 + z * 0.07) * 3.0 + t * 0.35)
    + 0.7 * Math.sin((x * -0.07 + z * 0.11) * 4.2 - t * 0.22);
  let h = 0;
  h += 0.55 * env * expo * Math.sin((x * 0.90 + z * 0.435) * (6.2831 / 26.0) + drift * 0.55 - t * 1.55);
  h += 0.26 * env * expo * Math.sin((x * 0.98 - z * 0.21) * (6.2831 / 13.5) + drift * 0.8 - t * 2.12 + 1.3);
  h += 0.13 * expo * Math.sin((x * 0.80 + z * 0.60) * (6.2831 / 7.0) + drift * 1.4 - t * 2.97 + 4.1);
  h += s.slosh * 0.17 * Math.sin((x * 0.60 - z * 0.80) * 0.5 - t * 1.6) * Math.sin(t * 1.13);
  return h * damp;
}

const GLSL_NOISE = /* glsl */`
  float hash12(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
  float vnoise(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
    return mix(mix(hash12(i), hash12(i+vec2(1,0)), f.x), mix(hash12(i+vec2(0,1)), hash12(i+vec2(1,1)), f.x), f.y); }
  float fbm3(vec2 p){ float a=0.5,s=0.0; for(int i=0;i<3;i++){ s+=a*vnoise(p); p=p*2.07+11.7; } return s; }
`;

function bakeUV(xExpr, zExpr) {
  const { x0, x1, z0, z1 } = BAKE;
  return `vec2(((${xExpr}) - (${x0.toFixed(1)})) / (${(x1 - x0).toFixed(1)}), ((${zExpr}) - (${z0.toFixed(1)})) / (${(z1 - z0).toFixed(1)}))`;
}

export function buildWater(baked) {
  const group = new THREE.Group();

  // ---- grid clipped to slab & below-land cells ----
  const x0 = -404, x1 = 404, z0 = -296, z1 = 296, step = 3.0;
  const nx = Math.round((x1 - x0) / step) + 1, nz = Math.round((z1 - z0) / step) + 1;
  const map = new Int32Array(nx * nz).fill(-1);
  const pos = [], idx = [];
  const keep = new Uint8Array(nx * nz);
  for (let j = 0; j < nz; j++) for (let i = 0; i < nx; i++) {
    const x = x0 + i * step, z = z0 + j * step;
    keep[j * nx + i] = insideSlab(x, z, 1.5) && H(x, z) < 0.35 ? 1 : 0;
  }
  const addV = (i, j) => {
    const k = j * nx + i;
    if (map[k] === -1) { map[k] = pos.length / 3; pos.push(x0 + i * step, 0, z0 + j * step); }
    return map[k];
  };
  for (let j = 0; j < nz - 1; j++) for (let i = 0; i < nx - 1; i++) {
    if (!(keep[j * nx + i] | keep[j * nx + i + 1] | keep[(j + 1) * nx + i] | keep[(j + 1) * nx + i + 1])) continue;
    const a = addV(i, j), b = addV(i + 1, j), c = addV(i + 1, j + 1), d = addV(i, j + 1);
    idx.push(a, c, b, a, d, c);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setIndex(idx);

  const uniforms = {
    uTime: { value: 0 },
    uBake: { value: baked.tex },
    uTexel: { value: new THREE.Vector2(1 / BAKE.w, 1 / BAKE.h) },
    uSunDir: { value: new THREE.Vector3(-0.83, 0.32, -0.46).normalize() },
    uSunCol: { value: new THREE.Color(1.0, 0.78, 0.52) },
    uSkyCol: { value: new THREE.Color(0.93, 0.90, 0.84) },
  };

  const mat = new THREE.ShaderMaterial({
    transparent: true,
    uniforms,
    vertexShader: /* glsl */`
      uniform float uTime; uniform sampler2D uBake; uniform vec2 uTexel;
      varying vec3 vWP; varying float vDepth; varying float vShore; varying float vSlosh; varying float vExpo;
      ${WAVE_GLSL}
      void main(){
        vec3 p = position;
        vec2 uv = ${bakeUV('p.x', 'p.z')};
        vec4 bk = texture2D(uBake, uv);
        float damp = smoothstep(0.0, 1.5, bk.r * 48.0);
        float h = waveH(p.xz, uTime, bk.a, bk.b) * damp;
        p.y += h;
        vWP = p;
        vDepth = bk.r * 48.0; vShore = bk.g; vSlosh = bk.b; vExpo = bk.a;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
      }`,
    fragmentShader: /* glsl */`
      uniform float uTime; uniform sampler2D uBake; uniform vec2 uTexel;
      uniform vec3 uSunDir; uniform vec3 uSunCol; uniform vec3 uSkyCol;
      varying vec3 vWP; varying float vDepth; varying float vShore; varying float vSlosh; varying float vExpo;
      ${WAVE_GLSL}
      ${GLSL_NOISE}
      float sdn(float a, float b, float x){ return 1.0 - smoothstep(a, b, x); }
      float waveTotal(vec2 p){
        vec4 bk = texture2D(uBake, ${bakeUV('p.x', 'p.y')});
        float damp = smoothstep(0.0, 1.5, bk.r * 48.0);
        return waveH(p, uTime, bk.a, bk.b) * damp;
      }
      void main(){
        vec3 V = normalize(cameraPosition - vWP);
        float e = 0.35;
        float hC = waveTotal(vWP.xz);
        float hX = waveTotal(vWP.xz + vec2(e, 0.0));
        float hZ = waveTotal(vWP.xz + vec2(0.0, e));
        vec3 N = normalize(vec3(hC - hX, e, hC - hZ));
        // fine ripple detail
        float d1 = vnoise(vWP.xz * 0.9 + vec2(uTime * 1.4, -uTime * 0.9));
        float d2 = vnoise(vWP.xz * 2.3 - vec2(uTime * 1.1, uTime * 1.7));
        N.xz += (d1 - 0.5) * (0.28 + 0.5 * vExpo) * vec2(0.9, 0.7);
        N.xz += (d2 - 0.5) * (0.16 + 0.3 * vExpo);
        // glassy calm in sheltered shallows
        float calm = (1.0 - vExpo) * sdn(2.0, 8.0, vDepth);
        N = normalize(mix(N, vec3(0, 1, 0), calm * 0.4));
        N = normalize(N);

        float d = vDepth;
        // Black Sea gradient: emerald shallows -> blue-green -> deep blue
        vec3 wcol = mix(vec3(0.22, 0.60, 0.55), vec3(0.10, 0.42, 0.58), smoothstep(0.4, 5.5, d));
        wcol = mix(wcol, vec3(0.03, 0.16, 0.40), smoothstep(5.5, 24.0, d));
        wcol *= 0.94 + 0.12 * (fbm3(vWP.xz * 0.11) - 0.5);

        float fr = pow(1.0 - max(dot(N, V), 0.0), 5.0);
        vec3 col = wcol;
        col = mix(col, uSkyCol * vec3(0.96, 0.93, 0.88), fr * 0.32);

        // sun glint, sparkling (patchy, restrained)
        vec3 R = reflect(-uSunDir, N);
        float sp = pow(max(dot(R, V), 0.0), 1400.0);
        float sparkle = vnoise(vWP.xz * 7.0 + vec2(uTime * 3.1, -uTime * 2.2));
        float bandBreak = smoothstep(0.35, 0.72, fbm3(vWP.xz * 0.5 + vec2(uTime * 0.4, 0.0)));
        col += uSunCol * sp * (0.12 + 2.0 * smoothstep(0.86, 0.99, sparkle * sparkle))
             * (0.25 + 0.75 * vExpo) * (1.0 - calm * 0.8) * bandBreak;

        // ---- foam ----
        float env = waveEnv(vWP.xz, uTime);
        float driftF = sin(dot(vWP.xz, vec2(0.13, 0.07)) * 3.0 + uTime * 0.35)
                     + 0.7 * sin(dot(vWP.xz, vec2(-0.07, 0.11)) * 4.2 - uTime * 0.22);
        float ph1 = dot(vWP.xz, vec2(0.90, 0.435)) * (6.2831 / 26.0) + driftF * 0.55 - uTime * 1.55;
        float crest = smoothstep(0.60, 0.97, sin(ph1)) * env;
        float breakZone = sdn(0.8, 3.2, d) + vShore * 0.55;
        float patchy = smoothstep(0.60, 0.92, fbm3(vWP.xz * 0.10 + vec2(uTime * 0.16, -uTime * 0.11)) * 1.45)
                     * smoothstep(0.38, 0.78, fbm3(vWP.xz * 0.018 + vec2(uTime * 0.05, 0.0)) * 1.3);
        float whitecap = crest * sdn(1.0, 3.0, d) * 0.38 * smoothstep(0.6, 1.0, env) * patchy;
        float shoreFoam = sdn(0.15, 2.0, d);
        float lines = smoothstep(0.45, 0.95, sin(ph1 * 1.15 - (1.0 - vShore) * 4.5 + d * 0.7)) * shoreFoam * (0.55 + 0.45 * vExpo);
        float ring = vShore * vShore * (0.45 + 0.55 * sin(ph1 * 1.45 + fbm3(vWP.xz * 0.4) * 5.0))
                   * sdn(0.4, 2.6, d);
        float sloshF = vSlosh * sdn(0.7, 3.0, d) * (0.4 + 0.6 * sin(uTime * 1.7 + vWP.x * 0.55 + vWP.z * 0.3));
        float foamRaw = crest * breakZone * 1.15 + lines * 0.55 + ring * 0.22 + sloshF * 0.34 + whitecap;
        foamRaw *= 0.5 + 0.6 * fbm3(vWP.xz * 1.55 + vec2(uTime * 0.35, -uTime * 0.22));
        // foam lingers a moment (dispersal)
        float foam = smoothstep(0.38, 0.82, foamRaw);
        vec3 foamCol = vec3(0.93, 0.95, 0.94);
        col = mix(col, foamCol, foam * 0.88);

        // sparkle on foam edges
        col += uSunCol * foam * smoothstep(0.8, 0.95, sparkle) * 0.6;

        float alpha = mix(0.52, 0.94, smoothstep(0.3, 6.0, d));
        alpha = max(alpha, foam * 0.92);
        alpha *= 0.94;
        gl_FragColor = vec4(col, alpha);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,
  });
  const water = new THREE.Mesh(geo, mat);
  water.renderOrder = 10;
  water.frustumCulled = false;
  group.add(water);

  group.add(buildWaterWalls(uniforms));
  return { group, uniforms };
}

// cutaway "aquarium" walls of the water body along the slab boundary
function buildWaterWalls(shared) {
  const NS = 150;
  const pos = [], attr = [], idx = [];
  let v = 0;
  const rows = [];
  for (let s = 0; s <= NS; s++) {
    const th = (s / NS) * Math.PI * 2;
    const c = Math.cos(th) * 0.993, sn = Math.sin(th) * 0.993;
    const r = 1 / Math.sqrt((c * c) / (392 * 392) + (sn * sn) / (282 * 282));
    const wob = 1 + 0.055 * Math.sin(3 * th + 1.2) + 0.042 * Math.sin(5 * th + 4.1) + 0.028 * Math.sin(7 * th + 2.2);
    const R = r * wob * 0.995;
    const x = Math.cos(th) * R, z = Math.sin(th) * R;
    const seab = H(x, z);
    if (seab > -0.9) { rows.push(null); continue; }
    pos.push(x, 0.05, z, x, Math.max(seab - 0.3, -44), z);
    attr.push(1, 0);
    rows.push([v, v + 1]);
    v += 2;
  }
  for (let s = 0; s < NS; s++) {
    const a = rows[s], b = rows[s + 1];
    if (!a || !b) continue;
    idx.push(a[0], b[0], b[1], a[0], b[1], a[1]);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute('aTop', new THREE.Float32BufferAttribute(attr, 1));
  geo.setIndex(idx);

  const mat = new THREE.ShaderMaterial({
    transparent: true, side: THREE.DoubleSide, depthWrite: false,
    uniforms: shared,
    vertexShader: /* glsl */`
      attribute float aTop;
      uniform float uTime; uniform sampler2D uBake;
      varying float vFrac; varying vec3 vWP;
      ${WAVE_GLSL}
      void main(){
        vec3 p = position;
        if (aTop > 0.5) {
          vec4 bk = texture2D(uBake, ${bakeUV('p.x', 'p.z')});
          p.y = 0.05 + waveH(p.xz, uTime, bk.a, bk.b) * 0.8;
        }
        vWP = p;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
        vFrac = aTop;
      }`,
    fragmentShader: /* glsl */`
      varying float vFrac; varying vec3 vWP;
      uniform vec3 uSkyCol;
      void main(){
        vec3 top = vec3(0.20, 0.52, 0.64);
        vec3 deep = vec3(0.03, 0.14, 0.33);
        vec3 col = mix(deep, top, vFrac);
        col *= 0.9 + 0.15 * sin(vWP.y * 0.5 + vWP.x * 0.1);
        float alpha = mix(0.62, 0.42, vFrac);
        // faint foam fringe at the moving surface line
        alpha = max(alpha, (1.0 - vFrac) * 0.0);
        if (vFrac > 0.98) { col = vec3(0.88, 0.92, 0.90); }
        gl_FragColor = vec4(col, alpha);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,
  });
  const walls = new THREE.Mesh(geo, mat);
  walls.renderOrder = 9;
  walls.frustumCulled = false;
  return walls;
}
