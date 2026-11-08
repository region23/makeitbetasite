// The Black Sea: one transparent surface, depth-aware colour, coherent breaking,
// shoreline swash and a slow seiche inside the strait.
import * as THREE from 'three';
import { DOMAIN } from './geo.js';
import { WAVE_GLSL, WAVE_CONST, waveUniforms } from './waves.js';
import { SKY_GLSL } from './sky.js';

export function createOcean(field, { chopTex, foamTex, haze, refs }) {
  const uniforms = {
    ...waveUniforms(field),
    uChop: { value: chopTex },
    uFoam: { value: foamTex },
    uTime: refs.uTime,
    uSunDir: refs.uSunDir,
    uSkyZenith: refs.uSkyZenith,
    uSkyHorizon: refs.uSkyHorizon,
    uDomMin: { value: new THREE.Vector2(DOMAIN.minX, DOMAIN.minZ) },
    uDomSize: { value: new THREE.Vector2(DOMAIN.maxX - DOMAIN.minX, DOMAIN.maxZ - DOMAIN.minZ) },
    uFogColor: { value: new THREE.Color(haze) },
    uFogDensity: { value: 0.0013 },
    uSparkle: { value: 1 },
  };

  const nx = 286;
  const nz = 202;
  const geo = new THREE.PlaneGeometry(
    DOMAIN.maxX - DOMAIN.minX,
    DOMAIN.maxZ - DOMAIN.minZ,
    nx,
    nz,
  );
  geo.rotateX(-Math.PI / 2);
  geo.translate((DOMAIN.minX + DOMAIN.maxX) / 2, 0, (DOMAIN.minZ + DOMAIN.maxZ) / 2);

  const mat = new THREE.ShaderMaterial({
    uniforms,
    transparent: true,
    depthWrite: true,
    side: THREE.DoubleSide,
    vertexShader: /* glsl */ `
      ${WAVE_CONST}
      uniform sampler2D tField;
      uniform vec2 uDomMin;
      uniform vec2 uDomSize;
      uniform float uSea;
      uniform float uTime;
      uniform vec4 uWave[NW];
      uniform float uPhase[NW];
      uniform vec2 uAxis;

      ${WAVE_GLSL}

      varying vec3 vWorld;
      varying vec3 vWaveN;
      varying float vBed;
      varying float vEta;
      varying float vExpo;
      varying float vBreak;
      varying float vMask;
      varying float vFogDepth;

      void main() {
        vec2 p = position.xz;
        vec2 fuv = (p - uDomMin) / uDomSize;
        vec4 f = texture2D(tField, fuv);
        float bed = f.r;
        float expo = f.g;
        float chan = f.a;
        float depth = max(uSea - bed, 0.0);

        vec4 w = oceanWaves(p, depth, expo, chan);
        vec3 pos = vec3(p.x, uSea + w.x, p.y);

        vBed = bed;
        vEta = w.x;
        vExpo = expo;
        vBreak = w.w;
        vMask = f.b;
        vWaveN = normalize(vec3(-w.y, 1.0, -w.z));

        vec4 mv = modelViewMatrix * vec4(pos, 1.0);
        vWorld = (modelMatrix * vec4(pos, 1.0)).xyz;
        vFogDepth = length(mv.xyz);
        gl_Position = projectionMatrix * mv;
      }
    `,
    fragmentShader: /* glsl */ `
      uniform sampler2D tField;
      uniform sampler2D uChop;
      uniform sampler2D uFoam;
      uniform vec2 uDomMin;
      uniform vec2 uDomSize;
      uniform float uSea;
      uniform vec3 uFogColor;
      uniform float uFogDensity;
      uniform float uSparkle;

      varying vec3 vWorld;
      varying vec3 vWaveN;
      varying float vBed;
      varying float vEta;
      varying float vExpo;
      varying float vBreak;
      varying float vMask;
      varying float vFogDepth;

      ${SKY_GLSL}

      void main() {
        if (vMask < 0.5) discard;
        if (vBed > uSea + 0.03) discard;

        vec2 p = vWorld.xz;
        float depth = max(uSea - vBed, 0.0);
        float dSurf = max(uSea + vEta - vBed, 0.0);

        // ---- normal: analytic swell + two scrolling chop layers -----------
        float chopAmp = mix(0.12, 0.38, vExpo) * (0.42 + 0.58 * smoothstep(0.8, 4.0, depth));
        vec2 c1 = texture2D(uChop, p * 0.045 + vec2(uTime * 0.028, uTime * 0.011)).rg - 0.5;
        vec2 c2 = texture2D(uChop, p * 0.115 - vec2(uTime * 0.045, uTime * 0.019)).rg - 0.5;
        vec3 N = normalize(vWaveN + vec3((c1.x * 0.62 + c2.x * 0.30) * chopAmp, 0.0, (c1.y * 0.62 + c2.y * 0.30) * chopAmp));

        vec3 V = normalize(cameraPosition - vWorld);
        float NV = max(dot(N, V), 1e-4);
        vec3 R = reflect(-V, N);
        float F = 0.025 + 0.90 * pow(1.0 - NV, 5.0);

        // ---- water body --------------------------------------------------
        // clear Black Sea: green-cyan over the pebbles, deep blue past the shelf
        vec3 deep = vec3(0.007, 0.040, 0.078);
        vec3 mid = vec3(0.017, 0.118, 0.164);
        vec3 shallow = vec3(0.070, 0.235, 0.240);
        vec3 body = mix(mid, deep, smoothstep(2.2, 15.0, depth));
        body = mix(shallow, body, smoothstep(0.10, 1.7, depth));
        float sunFac = 0.86 + 0.26 * max(dot(uSunDir, vec3(0.0, 1.0, 0.0)), 0.0);
        body *= sunFac;
        // the face of each swell taking the light, and the trough behind it
        float setMask = vExpo * smoothstep(1.2, 5.0, depth);
        body *= 1.0 + 0.16 * smoothstep(0.04, 0.34, vEta) * setMask - 0.10 * smoothstep(0.04, 0.30, -vEta) * setMask;
        // sets of swell rolling in: broad bands of brighter, steeper water
        float swellPhase = dot(normalize(vec2(0.906, -0.423)), p) * 0.30 - uTime * 1.7;
        float setband = 0.5 + 0.5 * sin(swellPhase);
        body *= 1.0 + 0.075 * setband * setMask;
        // inner light where a crest lifts off the bottom
        body += vec3(0.03, 0.105, 0.095) * smoothstep(0.0, 0.7, vEta) * smoothstep(2.6, 0.4, depth);

        vec3 skyR = skySample(R);
        // a real sea surface is rough: it reflects an averaged sky, not a mirror,
        // and it is never as bright as the sky above it
        vec3 skyAvg = mix(uSkyZenith, uSkyHorizon, 0.62);
        float roughMix = clamp(length(c1) * 1.1 + length(c2) * 0.7 + 0.30, 0.0, 1.0);
        vec3 refl = mix(skyR, skyAvg, roughMix * 0.55) * vec3(0.68, 0.79, 0.92) * (0.58 + 0.26 * vExpo);
        vec3 col = mix(body, refl, clamp(F, 0.0, 0.74));
        // keep the water saturated instead of milky
        float lum = dot(col, vec3(0.299, 0.587, 0.114));
        col = mix(vec3(lum), col, 1.12);

        // ---- sun glitter: only where the surface actually mirrors the sun ---
        vec3 toSun = normalize(uSunDir);
        float mirror = pow(max(dot(R, toSun), 0.0), 130.0);
        float sparkle = pow(max(dot(R, toSun), 0.0), 1100.0) * smoothstep(0.35, 0.70, fbm2(p * 0.9 + vec2(uTime * 0.5, -uTime * 0.31)));
        float wide = pow(max(dot(R, toSun), 0.0), 14.0) * 0.10;
        float glit = clamp(mirror * 0.42 + sparkle * 1.35 + wide, 0.0, 1.6) * uSparkle;
        col += vec3(1.0, 0.88, 0.70) * glit * (0.45 + 0.55 * (1.0 - smoothstep(0.0, 2.6, depth)));

        // ---- foam --------------------------------------------------------
        vec2 flow = normalize(vec2(0.906, -0.423)) * (uTime * 0.055);
        float warp = fbm2(p * 0.035 + vec2(uTime * 0.013, -uTime * 0.009));
        float filmA = texture2D(uFoam, p * 0.085 + flow + warp * 1.4).a;
        float filmB = texture2D(uFoam, p * 0.031 - flow * 0.6 - warp * 0.9).a;
        float film = clamp(filmA * 0.75 + filmB * 0.55, 0.0, 1.0);

        // the wash is a broken band of patches hugging the water's edge
        float shore = 1.0 - smoothstep(0.0, 0.5, dSurf);
        shore *= mix(0.42, 1.0, vExpo);
        shore *= 0.30 + 0.95 * film;
        float swash = shore * (0.35 + 0.45 * sin(p.x * 0.55 + p.y * 0.32 - uTime * 1.5)) * filmB;
        float foam = clamp(shore * 0.8 + swash * 0.3 + vBreak * 0.95, 0.0, 1.3);
        foam *= 0.25 + 1.15 * film;
        // spindrift and small whitecaps on the exposed crests
        foam += vExpo * 0.26 * smoothstep(0.68, 0.94, filmA) * smoothstep(0.12, 0.32, vEta) * smoothstep(1.2, 4.0, depth);
        foam += vExpo * 0.075 * smoothstep(0.74, 1.0, filmA * setband) * smoothstep(2.0, 6.0, depth);
        foam = clamp(foam, 0.0, 1.0);

        vec3 foamCol = vec3(0.90, 0.945, 0.96) * (0.55 + 0.55 * max(dot(N, uSunDir), 0.0));
        col = mix(col, foamCol, foam * 0.92);

        // ---- alpha: transparent over pebbles, opaque offshore ------------
        float T = exp(-dSurf * 1.6);
        float alpha = 1.0 - T;
        alpha = max(alpha, F * 0.78);
        alpha = max(alpha, foam * 0.92);
        alpha = clamp(alpha, 0.0, 1.0);
        // softening right at the cut edge of the piece
        alpha *= smoothstep(0.5, 0.62, vMask);

        // atmospheric haze
        float fH = 1.0 - exp(-uFogDensity * uFogDensity * vFogDepth * vFogDepth);
        col = mix(col, uFogColor, clamp(fH, 0.0, 1.0) * 0.72);

        gl_FragColor = vec4(col, alpha);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }
    `,
  });

  const mesh = new THREE.Mesh(geo, mat);
  mesh.renderOrder = 1;
  mesh.name = 'sea';
  mesh.frustumCulled = false;
  return { mesh, uniforms, material: mat };
}
