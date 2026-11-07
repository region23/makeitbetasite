/**
 * textures.js — every texture in the scene is painted here with canvas 2D and
 * the noise functions from terrain.js.  Nothing is loaded from disk.
 */

import * as THREE from 'three';
import { fbm, noise2, mulberry32 } from './terrain.js';

function pixels(size, fn) {
  const cv = document.createElement('canvas');
  cv.width = cv.height = size;
  const ctx = cv.getContext('2d');
  const img = ctx.createImageData(size, size);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const o = (y * size + x) * 4;
      const c = fn(x / size, y / size, x, y);
      img.data[o] = c[0];
      img.data[o + 1] = c[1];
      img.data[o + 2] = c[2];
      img.data[o + 3] = c.length > 3 ? c[3] : 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  return { cv, ctx, img };
}

function finish(cv, { repeat = 1, srgb = true } = {}) {
  const tex = new THREE.CanvasTexture(cv);
  if (srgb) tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(repeat, repeat);
  tex.anisotropy = 8;
  tex.needsUpdate = true;
  return tex;
}

const mix = (a, b, t) => a + (b - a) * t;

/* -------------------------------------------------------------------- wood */

export function woodTexture(baseHex = 0xb18c60, repeat = 1) {
  const base = new THREE.Color(baseHex);
  const { cv } = pixels(256, (u, v) => {
    const grain = fbm(u * 3.2, v * 26 + u * 2.5, 4, 17);
    const rings = Math.sin((v * 22 + grain * 4.5) * Math.PI) * 0.5 + 0.5;
    const plank = Math.floor(v * 4);
    const plankTint = noise2(plank * 3.7, 0.5, 9) * 0.24 - 0.12;
    const seam = Math.min(Math.abs((v * 4) % 1 - 0.5), 0.5) * 2;
    const seamDark = 1 - Math.pow(1 - seam, 8) * 0.65;
    const wear = Math.pow(fbm(u * 9, v * 9, 3, 29), 2.2);
    const k = 0.72 + 0.3 * rings + plankTint + 0.18 * wear;
    const f = k * seamDark;
    return [
      Math.min(255, base.r * 255 * f * 1.15),
      Math.min(255, base.g * 255 * f),
      Math.min(255, base.b * 255 * f * 0.9),
    ];
  });
  return finish(cv, { repeat });
}

/* ----------------------------------------------------------------- plaster */

export function plasterTexture(baseHex = 0xe6dcc8, repeat = 1) {
  const base = new THREE.Color(baseHex);
  const { cv } = pixels(256, (u, v) => {
    const l1 = fbm(u * 5, v * 5, 4, 41);
    const l2 = fbm(u * 17, v * 17, 3, 43);
    const grit = noise2(u * 90, v * 90, 47);
    const streak = Math.pow(fbm(u * 26, v * 1.6, 3, 53), 3.0);
    let k = 0.86 + 0.2 * l1 + 0.1 * l2 + 0.07 * grit - 0.22 * streak;
    return [
      Math.min(255, base.r * 255 * k * 1.02),
      Math.min(255, base.g * 255 * k),
      Math.min(255, base.b * 255 * mix(k, k * 1.02, l1)),
    ];
  });
  return finish(cv, { repeat });
}

/* -------------------------------------------------- lighthouse banded coat */

/**
 * Wraps around the tower: u = around, v = bottom → top.
 * Red bands on worn white, salt streaks, a band of algae at the foot.
 */
export function towerTexture() {
  const size = 512;
  const cv = document.createElement('canvas');
  cv.width = size;
  cv.height = size;
  const ctx = cv.getContext('2d');
  const img = ctx.createImageData(size, size);

  // band layout, v measured from the bottom of the tower
  const bands = [
    [0.0, 0.1, 'stone'],
    [0.1, 0.3, 'white'],
    [0.3, 0.46, 'red'],
    [0.46, 0.63, 'white'],
    [0.63, 0.78, 'red'],
    [0.78, 1.0, 'white'],
  ];
  const white = new THREE.Color(0xf2ece0);
  const red = new THREE.Color(0xb0423a);
  const stone = new THREE.Color(0x9d9284);

  for (let y = 0; y < size; y++) {
    const v = 1 - y / size;
    let kind = 'white';
    let edge = 1;
    for (const b of bands) {
      if (v >= b[0] && v < b[1]) {
        kind = b[2];
        edge = Math.min(v - b[0], b[1] - v) / 0.012;
        break;
      }
    }
    const baseCol = kind === 'white' ? white : kind === 'red' ? red : stone;
    for (let x = 0; x < size; x++) {
      const u = x / size;
      const plaster = fbm(u * 7.0, v * 22.0, 4, 61);
      const grit = noise2(u * 160, v * 210, 67);
      const bleed = smooth(0.0, 0.02, Math.min(1, edge)) * 0.1;
      let k = 0.84 + 0.24 * plaster + 0.08 * grit;
      // grime bleeding down from every band edge and around the windows
      const streak = Math.pow(fbm(u * 34, v * 1.1 + 3.3, 3, 71), 2.6) * (1 - v) * 0.5;
      k -= streak * 0.5;
      if (kind === 'stone') k *= 0.9 + 0.25 * smooth(0.25, 0.85, fbm(u * 14, v * 14, 3, 73));
      // algae / sea line at the foot
      const algae = smooth(0.16, 0.03, v) * smooth(0.4, 0.75, fbm(u * 12, v * 30, 3, 79));
      const r = mix(baseCol.r, 0.32, algae * 0.55) * k;
      const g = mix(baseCol.g, 0.38, algae * 0.5) * k;
      const b = mix(baseCol.b, 0.28, algae * 0.5) * k;
      const dirt = bleed * 255;
      const o = (y * size + x) * 4;
      img.data[o] = Math.max(0, Math.min(255, r * 255 - dirt));
      img.data[o + 1] = Math.max(0, Math.min(255, g * 255 - dirt * 1.05));
      img.data[o + 2] = Math.max(0, Math.min(255, b * 255 - dirt * 0.9));
      img.data[o + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);

  // hairline cracks
  const rnd = mulberry32(9);
  ctx.strokeStyle = 'rgba(60,52,44,0.30)';
  for (let i = 0; i < 26; i++) {
    ctx.lineWidth = 0.6 + rnd() * 0.9;
    ctx.beginPath();
    let x = rnd() * size;
    let y = rnd() * size;
    ctx.moveTo(x, y);
    for (let s = 0; s < 9; s++) {
      x += (rnd() - 0.5) * 26;
      y += (rnd() - 0.35) * 22;
      ctx.lineTo(x, y);
    }
    ctx.stroke();
  }
  return finish(cv, { repeat: 1 });
}

/* ------------------------------------------------------------------- slate */

export function slateTexture(repeat = 1) {
  const size = 256;
  const cv = document.createElement('canvas');
  cv.width = cv.height = size;
  const ctx = cv.getContext('2d');
  const rnd = mulberry32(21);
  ctx.fillStyle = '#4b4e55';
  ctx.fillRect(0, 0, size, size);
  const rows = 9;
  const cols = 7;
  for (let r = 0; r < rows; r++) {
    const y = (r / rows) * size;
    const h = size / rows;
    const off = (r % 2) * (size / cols) * 0.5;
    for (let c = -1; c < cols + 1; c++) {
      const x = off + (c / cols) * size;
      const w = size / cols - 1.5;
      const t = 0.55 + rnd() * 0.55;
      ctx.fillStyle = `rgb(${Math.round(66 * t)},${Math.round(70 * t)},${Math.round(78 * t)})`;
      ctx.fillRect(x, y, w, h - 1.5);
      ctx.fillStyle = 'rgba(255,255,255,0.06)';
      ctx.fillRect(x, y, w, 1.2);
    }
  }
  // lichen and damp
  const img = ctx.getImageData(0, 0, size, size);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const o = (y * size + x) * 4;
      const n = fbm((x / size) * 6, (y / size) * 6, 4, 83);
      const d = Math.pow(fbm((x / size) * 3, (y / size) * 2.2, 3, 89), 2.4);
      img.data[o] = Math.max(0, img.data[o] * (1 - d * 0.5) + (n > 0.72 ? 40 : 0));
      img.data[o + 1] = Math.max(0, img.data[o + 1] * (1 - d * 0.42) + (n > 0.74 ? 44 : 0));
      img.data[o + 2] = Math.max(0, img.data[o + 2] * (1 - d * 0.5));
    }
  }
  ctx.putImageData(img, 0, 0);
  return finish(cv, { repeat });
}

/* ------------------------------------------------------------------- stone */

export function stoneTexture(baseHex = 0xa59b8e, repeat = 1) {
  const base = new THREE.Color(baseHex);
  const size = 256;
  const cv = document.createElement('canvas');
  cv.width = cv.height = size;
  const ctx = cv.getContext('2d');
  const rnd = mulberry32(31);
  ctx.fillStyle = `rgb(${Math.round(base.r * 255 * 0.72)},${Math.round(base.g * 255 * 0.72)},${Math.round(base.b * 255 * 0.72)})`;
  ctx.fillRect(0, 0, size, size);
  for (let r = 0; r < 9; r++) {
    const y = (r / 9) * size;
    const hh = size / 9;
    let x = -rnd() * 24;
    while (x < size) {
      const w = 18 + rnd() * 34;
      const t = 0.62 + rnd() * 0.62;
      ctx.fillStyle = `rgb(${Math.round(base.r * 255 * t)},${Math.round(base.g * 255 * t)},${Math.round(base.b * 255 * t)})`;
      roundRect(ctx, x + 1.6, y + 1.6, w - 3, hh - 3.2, 3);
      ctx.fill();
      ctx.strokeStyle = 'rgba(255,255,255,0.07)';
      ctx.lineWidth = 1;
      ctx.stroke();
      x += w;
    }
  }
  const img = ctx.getImageData(0, 0, size, size);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const o = (y * size + x) * 4;
      const n = fbm((x / size) * 14, (y / size) * 14, 3, 97);
      const g = 0.86 + 0.3 * n;
      img.data[o] *= g;
      img.data[o + 1] *= g;
      img.data[o + 2] *= g * (0.98 + 0.06 * n);
    }
  }
  ctx.putImageData(img, 0, 0);
  return finish(cv, { repeat });
}

/* ----------------------------------------------------------- emissive glass */

export function windowGlowTexture() {
  const size = 128;
  const cv = document.createElement('canvas');
  cv.width = cv.height = size;
  const ctx = cv.getContext('2d');
  const g = ctx.createRadialGradient(size * 0.5, size * 0.55, 2, size * 0.5, size * 0.5, size * 0.62);
  g.addColorStop(0, '#fff0cf');
  g.addColorStop(0.55, '#ffbe6a');
  g.addColorStop(1, '#7a4a1c');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  // muntin bars and a curtain
  ctx.fillStyle = 'rgba(60,38,18,0.85)';
  ctx.fillRect(size * 0.47, 0, size * 0.06, size);
  ctx.fillRect(0, size * 0.46, size, size * 0.055);
  ctx.fillStyle = 'rgba(120,80,40,0.35)';
  ctx.fillRect(0, size * 0.62, size, size * 0.38);
  return finish(cv, { repeat: 1 });
}

/** soft round sprite for spray, glow and gull bodies */
export function softSprite(inner = 'rgba(255,255,255,1)', outer = 'rgba(255,255,255,0)') {
  const size = 64;
  const cv = document.createElement('canvas');
  cv.width = cv.height = size;
  const ctx = cv.getContext('2d');
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, inner);
  g.addColorStop(0.45, inner.replace(/[\d.]+\)$/, '0.55)'));
  g.addColorStop(1, outer);
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.needsUpdate = true;
  return tex;
}

/** wispy foam sprite: torn edges, used for breakers and splashes */
export function foamSprite() {
  const size = 128;
  const { cv } = pixels(size, (u, v) => {
    const dx = u - 0.5;
    const dy = v - 0.5;
    const r = Math.hypot(dx, dy) * 2;
    const warp = fbm(u * 5.5, v * 5.5, 4, 101);
    const a = Math.max(0, 1 - r * (0.62 + 0.7 * warp));
    const bubbles = smooth(0.35, 0.8, fbm(u * 22, v * 22, 3, 103));
    const al = Math.min(1, a * 1.5) * (0.45 + 0.55 * bubbles);
    return [255, 255, 255, Math.round(al * 255)];
  });
  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.needsUpdate = true;
  return tex;
}

/* ------------------------------------------------------------------ shared */

function smooth(e0, e1, x) {
  const t = Math.max(0, Math.min(1, (x - e0) / (e1 - e0)));
  return t * t * (3 - 2 * t);
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

/** one shared set, cloned where a different repeat is needed */
export function buildTextures() {
  return {
    wood: woodTexture(0x9a7a52, 1),
    woodDark: woodTexture(0x6f5636, 1),
    plaster: plasterTexture(0xe8dfcd, 1),
    plasterWarm: plasterTexture(0xdfd2b8, 1),
    tower: towerTexture(),
    slate: slateTexture(1),
    stone: stoneTexture(0x8e8579, 1),
    stoneGrey: stoneTexture(0x7b7469, 1),
    glow: windowGlowTexture(),
    net: netTexture(),
    foamSprite: foamSprite(),
    soft: softSprite(),
  };
}

/** fishing net: diagonal mesh on a transparent ground, used with alphaTest */
export function netTexture() {
  const size = 128;
  const { cv } = pixels(size, (u, v) => {
    const gx = Math.abs(((u * 10) % 1) - 0.5) * 2;
    const gy = Math.abs(((v * 10) % 1) - 0.5) * 2;
    const line = Math.max(gx, gy);
    const a = smooth(0.72, 0.98, line) ? 255 : 24;
    const worn = fbm(u * 8, v * 8, 3, 109);
    return [92 + worn * 40, 96 + worn * 36, 78 + worn * 26, a];
  });
  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(3, 3);
  tex.needsUpdate = true;
  return tex;
}
