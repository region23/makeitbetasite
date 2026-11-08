// Small shared helpers: deterministic noise, canvas-generated textures.

export const TAU = Math.PI * 2;

export function mulberry(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// 2-D value noise (JS side, for geometry/masks)
const PERM = new Uint8Array(512);
{
  const rnd = mulberry(1234);
  const p = new Uint8Array(256);
  for (let i = 0; i < 256; i++) p[i] = i;
  for (let i = 255; i > 0; i--) { const j = (rnd() * (i + 1)) | 0; const t = p[i]; p[i] = p[j]; p[j] = t; }
  for (let i = 0; i < 512; i++) PERM[i] = p[i & 255];
}
function grad2(h, x, y) {
  switch (h & 7) {
    case 0: return x + y; case 1: return x - y; case 2: return -x + y; case 3: return -x - y;
    case 4: return x; case 5: return -x; case 6: return y; default: return -y;
  }
}
const fade = (t) => t * t * t * (t * (t * 6 - 15) + 10);
export function noise2(x, y) {
  const X = Math.floor(x), Y = Math.floor(y);
  const fx = x - X, fy = y - Y;
  const u = fade(fx), v = fade(fy);
  const A = PERM[(X & 255)] + Y, B = PERM[(X + 1) & 255] + Y;
  const n00 = grad2(PERM[A & 255], fx, fy);
  const n10 = grad2(PERM[B & 255], fx - 1, fy);
  const n01 = grad2(PERM[(A + 1) & 255], fx, fy - 1);
  const n11 = grad2(PERM[(B + 1) & 255], fx - 1, fy - 1);
  return (n00 + u * (n10 - n00)) + v * ((n01 + u * (n11 - n01)) - (n00 + u * (n10 - n00)));
}
export function fbm(x, y, oct = 4, lac = 2.0, gain = 0.5) {
  let a = 0.5, s = 0, f = 1, norm = 0;
  for (let i = 0; i < oct; i++) { s += a * noise2(x * f, y * f); norm += a; f *= lac; a *= gain; }
  return s / norm;
}
export const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
export const lerp = (a, b, t) => a + (b - a) * t;
export const smoothstep = (e0, e1, x) => { const t = clamp((x - e0) / (e1 - e0), 0, 1); return t * t * (3 - 2 * t); };

// distance from point p to segment a-b (2-D, {x,z})
export function distToSeg(px, pz, ax, az, bx, bz) {
  const dx = bx - ax, dz = bz - az;
  const l2 = dx * dx + dz * dz;
  const t = l2 === 0 ? 0 : clamp(((px - ax) * dx + (pz - az) * dz) / l2, 0, 1);
  const cx = ax + dx * t, cz = az + dz * t;
  return { d: Math.hypot(px - cx, pz - cz), t };
}
// signed distance to polyline (negative = left of travel direction)
export function signedPolyDist(px, pz, pts, invertSide = false) {
  let best = { d: Infinity, t: 0, i: 0, side: 1 };
  for (let i = 0; i < pts.length - 1; i++) {
    const [ax, az] = pts[i], [bx, bz] = pts[i + 1];
    const r = distToSeg(px, pz, ax, az, bx, bz);
    if (r.d < best.d) {
      const dx = bx - ax, dz = bz - az;
      const cross = dx * (pz - az) - dz * (px - ax);
      best = { d: r.d, t: r.t, i, side: cross >= 0 ? 1 : -1 };
    }
  }
  return (best.side * (invertSide ? -1 : 1)) * best.d;
}

// ---------- canvas textures ----------
function makeCanvas(w, h) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  return [c, c.getContext('2d')];
}
function finish(canvas, repeatX = 1, repeatY = 1, srgb = true) {
  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(repeatX, repeatY);
  tex.anisotropy = 4;
  if (srgb) tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}
import * as THREE from 'three';

// sand-lime brick for the tower — pale beige-grey courses
export function brickTexture() {
  const [c, g] = makeCanvas(256, 256);
  g.fillStyle = '#cfc5ad'; g.fillRect(0, 0, 256, 256);
  const rows = 16, bh = 256 / rows, bw = 64;
  const rnd = mulberry(7);
  for (let r = 0; r < rows; r++) {
    const off = (r % 2) * bw / 2;
    for (let i = -1; i < 5; i++) {
      const x = i * bw + off, y = r * bh;
      const v = 0.86 + rnd() * 0.2;
      const base = [207, 197, 173];
      g.fillStyle = `rgb(${base[0] * v | 0},${base[1] * v | 0},${base[2] * v | 0})`;
      g.fillRect(x + 1, y + 1, bw - 2, bh - 2);
      if (rnd() < 0.18) { g.fillStyle = 'rgba(150,140,120,0.35)'; g.fillRect(x + 1, y + 1, bw - 2, bh - 2); }
      if (rnd() < 0.10) { g.fillStyle = 'rgba(140,110,85,0.25)'; g.fillRect(x + 1, y + bh / 2, bw - 2, bh / 2 - 1); }
    }
  }
  g.fillStyle = 'rgba(120,112,96,0.9)';
  for (let r = 0; r <= rows; r++) g.fillRect(0, r * bh, 256, 1.4);
  return finish(c, 4, 10);
}

// sculpted concrete relief band — abstract frieze: faces, anchor, letters
export function reliefTexture() {
  const [c, g] = makeCanvas(1024, 128);
  g.fillStyle = '#9d9a90'; g.fillRect(0, 0, 1024, 128);
  const rnd = mulberry(21);
  // stone blocks
  for (let i = 0; i < 8; i++) {
    g.fillStyle = i % 2 ? '#a5a299' : '#98958b';
    g.fillRect(i * 128, 0, 128, 128);
    g.strokeStyle = 'rgba(70,68,62,0.6)'; g.lineWidth = 2;
    g.strokeRect(i * 128 + 1, 1, 126, 126);
  }
  // embossed faces (frontal + profile) and anchor motifs
  function face(cx, cy, s, profile = false) {
    g.fillStyle = '#b3b0a6';
    g.beginPath();
    if (profile) { g.moveTo(cx - s * 0.6, cy + s); g.quadraticCurveTo(cx - s * 1.1, cy, cx - s * 0.55, cy - s * 0.75); g.quadraticCurveTo(cx + s * 0.25, cy - s * 1.15, cx + s * 0.6, cy + s); }
    else { g.ellipse(cx, cy, s * 0.78, s, 0, 0, TAU); }
    g.fill();
    g.fillStyle = '#6e6b62';
    if (!profile) {
      g.beginPath(); g.ellipse(cx - s * 0.3, cy - s * 0.15, s * 0.11, s * 0.14, 0, 0, TAU); g.fill();
      g.beginPath(); g.ellipse(cx + s * 0.3, cy - s * 0.15, s * 0.11, s * 0.14, 0, 0, TAU); g.fill();
      g.fillRect(cx - s * 0.13, cy + s * 0.25, s * 0.26, s * 0.10);
    } else {
      g.beginPath(); g.ellipse(cx - s * 0.22, cy - s * 0.15, s * 0.09, s * 0.12, 0, 0, TAU); g.fill();
    }
    // helmet
    g.fillStyle = '#87847a';
    g.beginPath(); g.ellipse(cx, cy - s * 0.72, s * 0.85, s * 0.5, 0, Math.PI, TAU); g.fill();
    g.fillRect(cx - s * 0.85, cy - s * 0.78, s * 1.7, s * 0.16);
  }
  function anchor(cx, cy, s) {
    g.strokeStyle = '#77746b'; g.lineWidth = s * 0.3; g.lineCap = 'round';
    g.beginPath(); g.moveTo(cx, cy - s); g.lineTo(cx, cy + s * 0.7); g.stroke();
    g.beginPath(); g.moveTo(cx - s * 0.7, cy - s * 0.95); g.lineTo(cx + s * 0.7, cy - s * 0.95); g.stroke();
    g.beginPath(); g.arc(cx, cy + s * 0.25, s * 0.7, Math.PI * 0.15, Math.PI * 0.85); g.stroke();
    g.lineWidth = s * 0.16;
    g.beginPath(); g.moveTo(cx - s * 0.62, cy + s * 0.55); g.lineTo(cx - s * 0.85, cy + s * 0.85); g.stroke();
    g.beginPath(); g.moveTo(cx + s * 0.62, cy + s * 0.55); g.lineTo(cx + s * 0.85, cy + s * 0.85); g.stroke();
  }
  const seq = ['faceF', 'anchor', 'faceP', 'letters', 'faceF', 'anchor', 'faceP', 'letters'];
  seq.forEach((kind, i) => {
    const cx = i * 128 + 64, cy = 74;
    if (kind === 'faceF') face(cx, cy, 34);
    else if (kind === 'faceP') face(cx, cy, 32, true);
    else if (kind === 'anchor') anchor(cx, cy, 30);
    else {
      g.fillStyle = '#77746b';
      g.font = 'bold 44px Georgia';
      g.fillText('УТРИШ', cx - 52, cy + 12);
    }
  });
  // grime
  for (let i = 0; i < 260; i++) {
    g.fillStyle = `rgba(60,55,45,${rnd() * 0.09})`;
    g.fillRect(rnd() * 1024, rnd() * 128, 2 + rnd() * 5, 1 + rnd() * 3);
  }
  return finish(c, 3, 1);
}

// weathered whitewash plaster
export function plasterTexture(base = '#e8e2d2', stain = 0.16) {
  const [c, g] = makeCanvas(256, 256);
  g.fillStyle = base; g.fillRect(0, 0, 256, 256);
  const rnd = mulberry(99);
  for (let i = 0; i < 500; i++) {
    const v = rnd();
    g.fillStyle = v < 0.5 ? `rgba(190,182,165,${0.05 + rnd() * stain})` : `rgba(255,255,250,${0.05 + rnd() * 0.12})`;
    const s = 2 + rnd() * 26;
    g.fillRect(rnd() * 256, rnd() * 256, s, s * (0.3 + rnd()));
  }
  // cracks
  g.strokeStyle = 'rgba(120,110,95,0.35)'; g.lineWidth = 1;
  for (let i = 0; i < 14; i++) {
    let x = rnd() * 256, y = rnd() * 256;
    g.beginPath(); g.moveTo(x, y);
    for (let s = 0; s < 6; s++) { x += (rnd() - 0.5) * 40; y += rnd() * 30; g.lineTo(x, y); }
    g.stroke();
  }
  return finish(c, 1, 1);
}

// lantern glazing — dark panes with mullions
export function glazingTexture() {
  const [c, g] = makeCanvas(256, 128);
  g.fillStyle = '#3f4a52'; g.fillRect(0, 0, 256, 128);
  const rnd = mulberry(5);
  for (let x = 0; x < 8; x++) {
    const v = 0.55 + rnd() * 0.35;
    g.fillStyle = `rgba(150,180,190,${0.28 * v})`;
    g.fillRect(x * 32 + 4, 6, 24, 116);
  }
  g.fillStyle = 'rgba(20,24,28,0.85)';
  for (let x = 0; x <= 8; x++) g.fillRect(x * 32 - 2, 0, 4, 128);
  g.fillRect(0, 0, 256, 5); g.fillRect(0, 123, 256, 5);
  return finish(c, 4, 1);
}

// fine pebble/gravel ground speckle (overlay-style, used sparingly on boats' deck etc.)
export function rustTexture() {
  const [c, g] = makeCanvas(128, 128);
  g.fillStyle = '#8a8078'; g.fillRect(0, 0, 128, 128);
  const rnd = mulberry(31);
  for (let i = 0; i < 240; i++) {
    g.fillStyle = `rgba(${140 + rnd() * 60 | 0},${70 + rnd() * 40 | 0},${30 + rnd() * 20 | 0},${0.25 + rnd() * 0.5})`;
    const s = 1 + rnd() * 6;
    g.fillRect(rnd() * 128, rnd() * 128, s, s);
  }
  return finish(c, 1, 1);
}

// floating net pen (alpha grid)
export function netTexture() {
  const [c, g] = makeCanvas(128, 128);
  g.clearRect(0, 0, 128, 128);
  g.strokeStyle = 'rgba(40,55,60,0.85)'; g.lineWidth = 1.5;
  for (let i = 0; i <= 16; i++) {
    g.beginPath(); g.moveTo(i * 8, 0); g.lineTo(i * 8, 128); g.stroke();
    g.beginPath(); g.moveTo(0, i * 8); g.lineTo(128, i * 8); g.stroke();
  }
  const tex = finish(c, 12, 1);
  return tex;
}

// small noise normal-ish bump for metal deck
export function deckTexture() {
  const [c, g] = makeCanvas(128, 128);
  g.fillStyle = '#96938e'; g.fillRect(0, 0, 128, 128);
  g.fillStyle = 'rgba(60,60,62,0.8)';
  for (let y = 0; y < 128; y += 16) g.fillRect(0, y, 128, 2);
  for (let x = 0; x < 128; x += 32) g.fillRect(x, 0, 2, 128);
  const rnd = mulberry(61);
  for (let i = 0; i < 150; i++) {
    g.fillStyle = `rgba(${120 + rnd() * 80 | 0},${60 + rnd() * 40 | 0},${25 + rnd() * 20 | 0},${rnd() * 0.4})`;
    g.fillRect(rnd() * 128, rnd() * 128, 1 + rnd() * 5, 1 + rnd() * 4);
  }
  return finish(c, 6, 2);
}

export function disposeObject(root) {
  root.traverse((o) => {
    if (o.geometry) o.geometry.dispose();
    if (o.material) {
      const ms = Array.isArray(o.material) ? o.material : [o.material];
      ms.forEach((m) => { for (const k in m) { const v = m[k]; if (v && v.isTexture) v.dispose(); } m.dispose(); });
    }
  });
}
