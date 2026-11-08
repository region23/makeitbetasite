// Shared wave model. The same numbers drive the GPU water surface (shaders.js) and the CPU-side
// sampling used to float boats and buoys and to time the spray bursts on the cliffs.
import * as THREE from 'three';

const deg = (d) => (d * Math.PI) / 180;
// dir: travel direction in the x/z plane (+x east, +z south)
// group 0: main swell from the open sea (W-NW), group 1: weaker cross swell (W-SW), group 2: local wind chop
export const WAVES = [
  { dir: deg(37), L: 27, A: 0.6, group: 0, steep: 0.55, phase: 0.0 },
  { dir: deg(45), L: 21, A: 0.4, group: 0, steep: 0.5, phase: 1.3 },
  { dir: deg(30), L: 33, A: 0.34, group: 0, steep: 0.45, phase: 2.1 },
  { dir: deg(-20), L: 13, A: 0.085, group: 1, steep: 0.4, phase: 0.7 },
  { dir: deg(-12), L: 9, A: 0.045, group: 1, steep: 0.35, phase: 2.9 },
  { dir: deg(40), L: 5.2, A: 0.045, group: 2, steep: 0.3, phase: 0.4 },
  { dir: deg(-62), L: 3.4, A: 0.028, group: 2, steep: 0.25, phase: 1.9 },
];

export function waveUniforms() {
  return {
    uWaveA: { value: WAVES.map((w) => new THREE.Vector4(Math.cos(w.dir), Math.sin(w.dir), w.L, w.A)) },
    uWaveB: { value: WAVES.map((w) => new THREE.Vector4(w.group, w.steep, 1, w.phase)) },
  };
}

const smooth = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };

export function swellEnv(x, z, t, dx, dz, seed) {
  const s = x * dx + z * dz;
  const g1 = Math.sin(s * 0.0449 - t * 0.143 + seed);
  const g2 = Math.sin(s * 0.0273 - t * 0.087 + 1.7 + seed * 2);
  const g3 = Math.sin((x * -dz + z * dx) * 0.013 + t * 0.031 + seed * 3);
  const e = 0.5 + 0.32 * g1 + 0.22 * g2 + 0.12 * g3;
  return 0.2 + 0.8 * smooth(0.2, 0.95, e);
}

// CPU mirror of evalWaves() vertical displacement (without dolphin ripples).
export function makeWaveSampler(bake) {
  const b1 = [0, 0, 0, 0], b2 = [0, 0, 0, 0];
  const W = WAVES.map((w) => ({ ...w, dx: Math.cos(w.dir), dz: Math.sin(w.dir), k: (2 * Math.PI) / w.L }));
  function height(x, z, t) {
    bake.sample1(x, z, b1); bake.sample2(x, z, b2);
    const D = Math.max(0.05, -b1[2]);
    const envP = swellEnv(x, z, t, W[0].dx, W[0].dz, 0);
    const envS = swellEnv(x, z, t, W[3].dx, W[3].dz, 2.3);
    let y = 0;
    for (const w of W) {
      const om = Math.sqrt(9.8 * w.k);
      const ph = w.k * (w.dx * x + w.dz * z) - om * t + w.phase;
      const th = Math.tanh(Math.min(w.k * D, 10));
      const Ks = Math.min(1.85, Math.max(1, Math.pow(Math.max(th, 0.02), -0.25)));
      const expo = w.group === 0 ? b1[0] : w.group === 1 ? b1[1] : b2[2];
      const env = w.group === 0 ? envP : w.group === 1 ? envS : 1;
      let A = w.A * expo * env * Ks;
      if (w.group < 2) A = Math.min(A, 0.42 * D + 0.04);
      y += A * Math.sin(ph);
    }
    y += extraHeight(x, z, t, b1, b2, envP);
    return y;
  }
  function extraHeight(x, z, t, B1, B2, envP) {
    let y = 0;
    const st = B2[0];
    if (st > 0.001) {
      y += st * (0.22 + 0.2 * envP) * Math.sin(0.95 * t - z * 0.16) + st * 0.08 * Math.sin(2.3 * t - z * 0.4 + 1);
    }
    y += B2[1] * 0.05 * Math.sin(0.42 * t + x * 0.02);
    const cd = B2[3] * 40;
    const lapA = 0.035 * (1 - 0.7 * B1[0]) * smooth(9, 1, cd) * (0.7 + 0.3 * Math.sin(0.37 * t + x * 0.05));
    y += lapA * Math.sin(cd * 1.5 + t * 2.1);
    return y;
  }
  // Information about the main swell at a point: used to time cliff spray.
  function primary(x, z, t) {
    bake.sample1(x, z, b1);
    const D = Math.max(0.05, -b1[2]);
    const w = W[0];
    const om = Math.sqrt(9.8 * w.k);
    const ph = w.k * (w.dx * x + w.dz * z) - om * t + w.phase;
    const envP = swellEnv(x, z, t, w.dx, w.dz, 0);
    let amp = 0;
    for (let i = 0; i < 3; i++) {
      const th = Math.tanh(Math.min(W[i].k * D, 10));
      const Ks = Math.min(1.85, Math.max(1, Math.pow(Math.max(th, 0.02), -0.25)));
      amp += W[i].A * Ks;
    }
    return { phase: ph, amp: amp * b1[0] * envP, exposure: b1[0], rock: b1[3], env: envP };
  }
  return { height, primary };
}
