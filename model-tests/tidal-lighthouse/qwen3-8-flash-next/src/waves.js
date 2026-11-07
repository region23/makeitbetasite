/**
 * waves.js — the single source of truth for the ocean motion.
 *
 * The wave table below generates both the GLSL used by the water mesh and the
 * CPU sampler used by boats, dolphins, gull splashes and the shoreline wash,
 * so everything floats on exactly the same water.
 *
 * Crest lines are bent and compressed over the bank with a travel-time lag
 * field (geometric-optics approximation): phase = k·p + ωt − ω·lag.
 */

import { SWELL_DIR } from './terrain.js';

export const GRAVITY = 9.81;
export const LAG_SCALE = 6; // seconds represented by the lag texture channel

/** swell wavelength (m) used for the travel-time field */
export const SWELL_WL = 15.5;

/**
 * dir: travel direction (xz, normalised below)
 * a:   amplitude (m)        wl: wavelength (m)
 * q:   Gerstner horizontal factor
 * lag: how much this wave follows the bathymetry (1 = swell, 0 = local chop)
 */
const RAW_WAVES = [
  { d: SWELL_DIR, a: 0.42, wl: 15.5, q: 1.9, lag: 1.0 },
  { d: [-0.3, -0.95], a: 0.27, wl: 10.4, q: 1.75, lag: 0.85 },
  { d: [-0.02, -1.0], a: 0.185, wl: 7.0, q: 1.6, lag: 0.65 },
  { d: [-0.66, -0.75], a: 0.11, wl: 4.4, q: 1.5, lag: 0.35 },
  { d: [0.62, -0.78], a: 0.072, wl: 2.9, q: 1.4, lag: 0.2 },
  { d: [-0.93, -0.37], a: 0.048, wl: 1.95, q: 1.3, lag: 0.12 },
];

export const WAVES = RAW_WAVES.map((w) => {
  const len = Math.hypot(w.d[0], w.d[1]);
  const k = (Math.PI * 2) / w.wl;
  return {
    dx: w.d[0] / len,
    dz: w.d[1] / len,
    a: w.a,
    k,
    q: w.q,
    lag: w.lag,
    omega: Math.sqrt(GRAVITY * k),
    wl: w.wl,
  };
});

/** deep water celerity of the dominant swell */
export const CELERITY = (depth) => {
  const k = (Math.PI * 2) / SWELL_WL;
  return Math.sqrt((GRAVITY / k) * Math.tanh(k * Math.max(depth, 0.05)));
};

/** per-wave distance beyond which short waves are faded out (coarse grid) */
const FADE_NEAR = 26;
const FADE_FAR = 62;

/* ------------------------------------------------------------------ GLSL */

export function waveGLSL() {
  const body = WAVES.map((w) => {
    const fade = w.wl < 6 ? ` * (1.0 - smoothstep(${FADE_NEAR.toFixed(1)}, ${FADE_FAR.toFixed(1)}, r))` : '';
    const lagMix = w.lag < 1 ? ` * ${w.lag.toFixed(2)}` : '';
    return /* glsl */ `
  {
    float k = ${w.k.toFixed(5)};
    float om = ${w.omega.toFixed(5)};
    float a = ${(w.a).toFixed(5)} * body${fade};
    vec2 D = vec2(${w.dx.toFixed(5)}, ${w.dz.toFixed(5)});
    float ph = k * dot(D, p) + om * uTime - om * lag${lagMix};
    float c = cos(ph), s = sin(ph);
    dsp.y += a * s;
    dsp.x += ${w.q.toFixed(3)} * a * D.x * c;
    dsp.z += ${w.q.toFixed(3)} * a * D.y * c;
  }`;
  }).join('\n');

  return /* glsl */ `
/** horizontal + vertical displacement of the sea surface at world xz = p */
vec3 waveDisp(vec2 p, float depth, float calm, float lag) {
  float r = length(p);
  float damp = smoothstep(-0.5, 0.55, depth);            // flatten inside land
  float shoal = 1.0 + 0.62 * smoothstep(8.5, 1.3, depth); // swells stand up
  float setEnv = 0.72 + 0.28 * sin(uTime * 0.19 + 1.9 * sin(uTime * 0.041));
  float tide = 0.055 * sin(uTime * 0.21) + 0.035 * sin(uTime * 0.118 + 2.1);
  float body = uAmp * damp * mix(1.0, shoal, 1.0 - calm * 0.7) * setEnv;
  vec3 dsp = vec3(0.0, tide, 0.0);
${body}
  // small ripple that keeps the sheltered harbour alive
  float hp = mix(0.0, 1.0, calm);
  dsp.y += hp * uAmp * 0.05 * (sin(p.x * 1.7 + uTime * 1.3) + sin(p.y * 2.3 - uTime * 1.7)) * damp;
  dsp.x += hp * uAmp * 0.02 * sin(p.y * 2.1 + uTime * 1.1) * damp;
  return dsp;
}
`;
}

/* ------------------------------------------------------------- JS sampler */

/**
 * CPU mirror of waveDisp + waveNormal.
 * @param {{height:Function,calm:Function,lag:Function}} sea
 */
export function createWaveSampler(sea) {
  const smoothstepJS = (e0, e1, x) => {
    const t = Math.max(0, Math.min(1, (x - e0) / (e1 - e0)));
    return t * t * (3 - 2 * t);
  };

  const disp = (x, z, t, amp = 1) => {
    const h = sea.height(x, z);
    const depth = Math.max(-h, 0);
    const calm = sea.calm(x, z);
    const lag = sea.lag(x, z);
    const r = Math.hypot(x, z);
    const damp = smoothstepJS(-0.5, 0.55, depth);
    const shoal = 1 + 0.62 * smoothstepJS(8.5, 1.3, depth);
    const setEnv = 0.72 + 0.28 * Math.sin(t * 0.19 + 1.9 * Math.sin(t * 0.041));
    const tide = 0.055 * Math.sin(t * 0.21) + 0.035 * Math.sin(t * 0.118 + 2.1);
    const body = amp * damp * (1 + (shoal - 1) * (1 - calm * 0.7)) * setEnv;
    let dx = 0;
    let dy = tide * amp;
    let dz = 0;
    for (let i = 0; i < WAVES.length; i++) {
      const w = WAVES[i];
      let a = w.a * body;
      if (w.wl < 6) a *= 1 - smoothstepJS(FADE_NEAR, FADE_FAR, r);
      const ph = w.k * (w.dx * x + w.dz * z) + w.omega * t - w.omega * lag * w.lag;
      const c = Math.cos(ph);
      dy += a * Math.sin(ph);
      dx += w.q * a * w.dx * c;
      dz += w.q * a * w.dz * c;
    }
    const hp = calm;
    dy += (hp * amp * 0.05 * (Math.sin(x * 1.7 + t * 1.3) + Math.sin(z * 2.3 - t * 1.7)) * damp);
    dx += hp * amp * 0.02 * Math.sin(z * 2.1 + t * 1.1) * damp;
    return [dx, dy, dz];
  };

  /** surface height of the water at world xz */
  const surfaceY = (x, z, t) => disp(x, z, t)[1];

  /** water surface point + normal (finite difference over base positions) */
  const sample = (x, z, t, out) => {
    const e = 0.55;
    const d0 = disp(x, z, t);
    const dX = disp(x + e, z, t);
    const dZ = disp(x, z + e, t);
    const ux = [e + dX[0] - d0[0], dX[1] - d0[1], dX[2] - d0[2]];
    const uz = [dZ[0] - d0[0], dZ[1] - d0[1], e + dZ[2] - d0[2]];
    // normal = Tz × Tx, which points up for a flat sea
    let nx = uz[1] * ux[2] - uz[2] * ux[1];
    let ny = uz[2] * ux[0] - uz[0] * ux[2];
    let nz = uz[0] * ux[1] - uz[1] * ux[0];
    const l = Math.hypot(nx, ny, nz) || 1;
    nx /= l;
    ny /= l;
    nz /= l;
    const o = out || {};
    o.x = x + d0[0];
    o.y = d0[1];
    o.z = z + d0[2];
    o.nx = nx;
    o.ny = ny;
    o.nz = nz;
    o.depth = Math.max(-sea.height(x, z), 0);
    o.calm = sea.calm(x, z);
    return o;
  };

  return { disp, surfaceY, sample };
}
