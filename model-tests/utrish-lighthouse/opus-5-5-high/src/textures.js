// All surface textures are painted procedurally on canvases at start-up.
import * as THREE from 'three';
import { mulberry32 } from './noise.js';

function canvas(w, h, opts) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  return [c, c.getContext('2d', opts)];
}
function tex(c, { srgb = true, repeat = true } = {}) {
  const t = new THREE.CanvasTexture(c);
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  if (repeat) t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.anisotropy = 8;
  return t;
}
const hsl = (h, s, l, a = 1) => `hsla(${h},${s}%,${l}%,${a})`;

function speckle(ctx, w, h, rnd, n, color, rMax) {
  ctx.fillStyle = color;
  for (let i = 0; i < n; i++) {
    ctx.globalAlpha = 0.05 + rnd() * 0.15;
    ctx.beginPath();
    ctx.arc(rnd() * w, rnd() * h, 0.5 + rnd() * rMax, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;
}
function streaks(ctx, w, h, rnd, n, color, alpha) {
  for (let i = 0; i < n; i++) {
    const x = rnd() * w, y0 = rnd() * h * 0.6, len = h * (0.1 + rnd() * 0.5), wd = 2 + rnd() * 10;
    const g = ctx.createLinearGradient(0, y0, 0, y0 + len);
    g.addColorStop(0, color(alpha * (0.5 + rnd())));
    g.addColorStop(1, color(0));
    ctx.fillStyle = g;
    ctx.fillRect(x, y0, wd, len);
  }
}

// Cream silicate brick of the 1975 tower, with grey mortar and weather staining
export function brickTexture() {
  const W = 512, H = 512;
  const [c, ctx] = canvas(W, H);
  const rnd = mulberry32(17);
  ctx.fillStyle = '#a9a396';
  ctx.fillRect(0, 0, W, H);
  const rows = 22, bh = H / rows, bw = bh * 2.85;
  for (let r = 0; r < rows; r++) {
    const off = (r % 2) * bw * 0.5;
    for (let x = -bw; x < W + bw; x += bw) {
      const l = 74 + rnd() * 9, s = 10 + rnd() * 10, hue = 40 + rnd() * 12;
      ctx.fillStyle = hsl(hue, s, l);
      ctx.fillRect(x + off + 1.6, r * bh + 1.6, bw - 3.2, bh - 3.2);
      if (rnd() < 0.18) { ctx.fillStyle = hsl(35, 8, 55 + rnd() * 10, 0.35); ctx.fillRect(x + off + 1.6, r * bh + 1.6, bw - 3.2, bh - 3.2); }
    }
  }
  speckle(ctx, W, H, rnd, 2500, '#6f6a60', 1.6);
  streaks(ctx, W, H, rnd, 26, (a) => `rgba(70,66,58,${a})`, 0.18);
  streaks(ctx, W, H, rnd, 10, (a) => `rgba(120,95,60,${a})`, 0.12);
  return tex(c);
}

// Weathered whitewash / lime plaster over stone
export function plasterTexture(seed = 3, base = '#efece4') {
  const W = 512, H = 512;
  const [c, ctx] = canvas(W, H);
  const rnd = mulberry32(seed);
  ctx.fillStyle = base;
  ctx.fillRect(0, 0, W, H);
  for (let i = 0; i < 160; i++) {
    const x = rnd() * W, y = rnd() * H, r = 10 + rnd() * 60;
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    const tone = rnd() < 0.5 ? '190,182,165' : '255,255,250';
    g.addColorStop(0, `rgba(${tone},${0.08 + rnd() * 0.12})`);
    g.addColorStop(1, `rgba(${tone},0)`);
    ctx.fillStyle = g;
    ctx.fillRect(x - r, y - r, r * 2, r * 2);
  }
  // patches where the whitewash has flaked to the stone beneath
  for (let i = 0; i < 26; i++) {
    ctx.fillStyle = `rgba(150,140,120,${0.18 + rnd() * 0.2})`;
    ctx.beginPath();
    const x = rnd() * W, y = rnd() * H;
    ctx.moveTo(x, y);
    for (let k = 0; k < 7; k++) ctx.lineTo(x + (rnd() - 0.5) * 40, y + (rnd() - 0.5) * 26);
    ctx.fill();
  }
  ctx.strokeStyle = 'rgba(90,85,75,0.35)';
  for (let i = 0; i < 18; i++) {
    ctx.lineWidth = 0.6 + rnd();
    ctx.beginPath();
    let x = rnd() * W, y = rnd() * H;
    ctx.moveTo(x, y);
    for (let k = 0; k < 6; k++) { x += (rnd() - 0.5) * 30; y += rnd() * 22; ctx.lineTo(x, y); }
    ctx.stroke();
  }
  streaks(ctx, W, H, rnd, 18, (a) => `rgba(110,100,85,${a})`, 0.12);
  speckle(ctx, W, H, rnd, 1200, '#8a8577', 1.2);
  return tex(c);
}

// Blue painted sheet metal of the old lantern housing (now the chapel drum)
export function bluePaintTexture() {
  const W = 512, H = 256;
  const [c, ctx] = canvas(W, H);
  const rnd = mulberry32(5);
  ctx.fillStyle = '#2756a5';
  ctx.fillRect(0, 0, W, H);
  for (let i = 0; i < 90; i++) {
    const x = rnd() * W, y = rnd() * H, r = 8 + rnd() * 40;
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, `rgba(${rnd() < 0.5 ? '70,120,200' : '20,50,110'},${0.15 + rnd() * 0.15})`);
    g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g; ctx.fillRect(x - r, y - r, 2 * r, 2 * r);
  }
  for (let x = 0; x < W; x += W / 12) {
    ctx.fillStyle = 'rgba(15,35,80,0.55)'; ctx.fillRect(x, 0, 2, H);
    ctx.fillStyle = 'rgba(120,160,230,0.35)'; ctx.fillRect(x + 2, 0, 1.5, H);
  }
  speckle(ctx, W, H, rnd, 500, '#c9cfd8', 1.4);
  speckle(ctx, W, H, rnd, 220, '#8a5a2e', 2.2);
  streaks(ctx, W, H, rnd, 14, (a) => `rgba(130,80,40,${a})`, 0.25);
  return tex(c);
}

// Painted steel with rust and rivet rows (bridge)
export function rustSteelTexture() {
  const W = 512, H = 256;
  const [c, ctx] = canvas(W, H);
  const rnd = mulberry32(11);
  ctx.fillStyle = '#6e7a72';
  ctx.fillRect(0, 0, W, H);
  for (let i = 0; i < 140; i++) {
    const x = rnd() * W, y = rnd() * H, r = 4 + rnd() * 30;
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    const rust = rnd() < 0.55;
    g.addColorStop(0, rust ? `rgba(${130 + rnd() * 40},${62 + rnd() * 20},${28},${0.45 + rnd() * 0.4})` : `rgba(150,160,150,${0.15})`);
    g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g; ctx.fillRect(x - r, y - r, 2 * r, 2 * r);
  }
  streaks(ctx, W, H, rnd, 40, (a) => `rgba(120,58,24,${a})`, 0.4);
  for (const y of [10, H - 12]) {
    for (let x = 6; x < W; x += 14) {
      ctx.fillStyle = 'rgba(40,40,36,0.6)'; ctx.beginPath(); ctx.arc(x + 0.8, y + 0.8, 3, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = 'rgba(170,165,150,0.7)'; ctx.beginPath(); ctx.arc(x, y, 2.4, 0, Math.PI * 2); ctx.fill();
    }
  }
  for (let x = 0; x < W; x += 64) {
    for (let y = 22; y < H - 20; y += 14) {
      ctx.fillStyle = 'rgba(40,40,36,0.5)'; ctx.beginPath(); ctx.arc(x + 4, y, 2.4, 0, Math.PI * 2); ctx.fill();
    }
  }
  return tex(c);
}

export function concreteTexture(seed = 7, base = '#b9b6ae') {
  const W = 256, H = 256;
  const [c, ctx] = canvas(W, H);
  const rnd = mulberry32(seed);
  ctx.fillStyle = base; ctx.fillRect(0, 0, W, H);
  speckle(ctx, W, H, rnd, 2500, '#6d6a62', 1.2);
  speckle(ctx, W, H, rnd, 1500, '#e6e3db', 1.0);
  streaks(ctx, W, H, rnd, 14, (a) => `rgba(80,75,65,${a})`, 0.14);
  return tex(c);
}

export function graniteTexture() {
  const W = 256, H = 256;
  const [c, ctx] = canvas(W, H);
  const rnd = mulberry32(23);
  ctx.fillStyle = '#7b4a3e'; ctx.fillRect(0, 0, W, H);
  speckle(ctx, W, H, rnd, 4000, '#2b1d19', 1.3);
  speckle(ctx, W, H, rnd, 2500, '#c79a85', 1.1);
  speckle(ctx, W, H, rnd, 1500, '#e8d9cc', 0.7);
  return tex(c);
}

// Black polished memorial plate with rows of incised lettering (abstract, unreadable at this scale)
export function plaqueTexture(seed = 29, rows = 14) {
  const W = 256, H = 256;
  const [c, ctx] = canvas(W, H);
  const rnd = mulberry32(seed);
  ctx.fillStyle = '#141414'; ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = 'rgba(205,190,150,0.85)';
  ctx.fillRect(W * 0.3, 16, W * 0.4, 7);
  for (let r = 0; r < rows; r++) {
    const y = 38 + r * ((H - 50) / rows);
    let x = 22;
    while (x < W - 30) {
      const w = 6 + rnd() * 26;
      ctx.globalAlpha = 0.55 + rnd() * 0.3;
      ctx.fillRect(x, y, w, 3.2);
      x += w + 5 + rnd() * 4;
    }
  }
  ctx.globalAlpha = 1;
  return tex(c, { repeat: false });
}

// Net mesh for the dolphinarium pens (alpha-tested)
export function netTexture() {
  const W = 128, H = 128;
  const [c, ctx] = canvas(W, H);
  ctx.clearRect(0, 0, W, H);
  ctx.strokeStyle = 'rgba(30,40,40,1)';
  ctx.lineWidth = 3;
  for (let i = 0; i <= W; i += 16) {
    ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, H); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(W, i); ctx.stroke();
  }
  return tex(c);
}

// Windows on house walls
export function houseWallTexture(base) {
  const W = 256, H = 128;
  const [c, ctx] = canvas(W, H);
  const rnd = mulberry32(base & 0xffff);
  ctx.fillStyle = '#' + base.toString(16).padStart(6, '0');
  ctx.fillRect(0, 0, W, H);
  speckle(ctx, W, H, rnd, 400, '#9a9488', 1.2);
  for (let x = 30; x < W - 20; x += 70) {
    ctx.fillStyle = '#e9e6de'; ctx.fillRect(x - 4, 40, 34, 46);
    ctx.fillStyle = '#3a4650'; ctx.fillRect(x, 44, 26, 38);
    ctx.fillStyle = 'rgba(180,200,210,0.35)'; ctx.fillRect(x, 44, 12, 18);
  }
  return tex(c, { repeat: false });
}

// Height map for the sculpted relief band on the 1975 tower: faces of sailors, caps, anchors, waves.
export function reliefCanvas() {
  const W = 1536, H = 160;
  const [c, ctx] = canvas(W, H, { willReadFrequently: true });
  const rnd = mulberry32(1975);
  ctx.fillStyle = 'rgb(70,70,70)';
  ctx.fillRect(0, 0, W, H);
  const g = (x, y, rx, ry, v0, v1) => {
    const gr = ctx.createRadialGradient(x, y, 0, x, y, Math.max(rx, ry));
    gr.addColorStop(0, `rgb(${v0},${v0},${v0})`);
    gr.addColorStop(1, `rgba(${v1},${v1},${v1},0)`);
    ctx.save(); ctx.translate(x, y); ctx.scale(rx / Math.max(rx, ry), ry / Math.max(rx, ry));
    ctx.fillStyle = gr; ctx.beginPath(); ctx.arc(0, 0, Math.max(rx, ry), 0, Math.PI * 2); ctx.fill();
    ctx.restore();
  };
  const ell = (x, y, rx, ry, v, rot = 0) => {
    ctx.fillStyle = `rgb(${v},${v},${v})`;
    ctx.beginPath(); ctx.ellipse(x, y, rx, ry, rot, 0, Math.PI * 2); ctx.fill();
  };
  function face(x, y, s, headgear) {
    // head mass
    ell(x, y + 6 * s, 30 * s, 44 * s, 150);
    g(x, y + 4 * s, 28 * s, 40 * s, 215, 150);
    // brow ridge and nose
    ell(x, y - 6 * s, 22 * s, 6 * s, 225);
    ctx.fillStyle = 'rgb(235,235,235)';
    ctx.beginPath(); ctx.moveTo(x - 4 * s, y - 4 * s); ctx.lineTo(x + 4 * s, y - 4 * s); ctx.lineTo(x + 7 * s, y + 20 * s); ctx.lineTo(x - 7 * s, y + 20 * s); ctx.fill();
    // eye sockets, mouth, chin
    ell(x - 11 * s, y + 2 * s, 7 * s, 4 * s, 110); ell(x + 11 * s, y + 2 * s, 7 * s, 4 * s, 110);
    ell(x, y + 30 * s, 10 * s, 2.6 * s, 105);
    ell(x, y + 42 * s, 13 * s, 7 * s, 190);
    if (headgear === 'cap') {
      ell(x, y - 30 * s, 36 * s, 14 * s, 200); ell(x, y - 20 * s, 32 * s, 5 * s, 225);
      ell(x + 26 * s, y - 14 * s, 10 * s, 26 * s, 170, 0.3);
    } else if (headgear === 'helmet') {
      ctx.fillStyle = 'rgb(205,205,205)';
      ctx.beginPath(); ctx.ellipse(x, y - 18 * s, 36 * s, 26 * s, 0, Math.PI, 0); ctx.fill();
      ell(x, y - 18 * s, 38 * s, 4 * s, 230);
    } else {
      ctx.fillStyle = 'rgb(185,185,185)';
      for (let i = -3; i <= 3; i++) ell(x + i * 9 * s, y - 30 * s + Math.abs(i) * 3 * s, 7 * s, 12 * s, 170 + rnd() * 30);
    }
  }
  function anchor(x, y, s) {
    ctx.strokeStyle = 'rgb(220,220,220)'; ctx.lineCap = 'round';
    ctx.lineWidth = 9 * s; ctx.beginPath(); ctx.moveTo(x, y - 50 * s); ctx.lineTo(x, y + 45 * s); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(x - 25 * s, y - 32 * s); ctx.lineTo(x + 25 * s, y - 32 * s); ctx.stroke();
    ctx.beginPath(); ctx.arc(x, y + 10 * s, 36 * s, 0.15 * Math.PI, 0.85 * Math.PI); ctx.stroke();
    ctx.lineWidth = 5 * s; ctx.beginPath(); ctx.arc(x, y - 58 * s, 9 * s, 0, Math.PI * 2); ctx.stroke();
  }
  function waves(x, y, w) {
    ctx.strokeStyle = 'rgb(200,200,200)'; ctx.lineWidth = 8;
    for (let r = 0; r < 3; r++) {
      ctx.beginPath();
      for (let i = 0; i <= w; i += 4) ctx.lineTo(x + i, y + r * 26 + Math.sin(i * 0.09 + r) * 9);
      ctx.stroke();
    }
  }
  function leaves(x, y) {
    ctx.strokeStyle = 'rgb(190,190,190)'; ctx.lineWidth = 6;
    ctx.beginPath(); ctx.moveTo(x - 30, y + 60); ctx.quadraticCurveTo(x, y, x + 30, y - 60); ctx.stroke();
    for (let i = 0; i < 6; i++) {
      const t = i / 6, px = x - 30 + 60 * t, py = y + 60 - 120 * t;
      ell(px - 14, py, 16, 7, 210, -0.6); ell(px + 14, py - 6, 16, 7, 210, 0.6);
    }
  }
  function bow(x, y) {
    ctx.fillStyle = 'rgb(215,215,215)';
    ctx.beginPath(); ctx.moveTo(x - 60, y + 50); ctx.lineTo(x + 50, y + 50); ctx.lineTo(x + 70, y - 10); ctx.lineTo(x - 40, y + 10); ctx.fill();
    ctx.fillRect(x - 20, y - 55, 14, 60);
    ctx.fillRect(x - 40, y - 20, 50, 10);
  }
  const motifs = ['cap', 'helmet', 'anchor', 'cap', 'waves', 'hair', 'bow', 'helmet', 'leaves', 'cap', 'hair', 'anchor'];
  const step = W / motifs.length;
  motifs.forEach((m, i) => {
    const x = step * (i + 0.5), y = H * 0.48;
    if (m === 'anchor') anchor(x, y, 1);
    else if (m === 'waves') waves(x - step * 0.45, y - 25, step * 0.9);
    else if (m === 'leaves') leaves(x, y);
    else if (m === 'bow') bow(x, y);
    else face(x, y, 1.15, m);
  });
  ctx.filter = 'blur(1.5px)';
  ctx.drawImage(c, 0, 0);
  ctx.filter = 'none';
  return c;
}

// Colour for the relief: pale cast concrete, darker only in the deepest recesses, with weather streaks
export function reliefColorCanvas(rc) {
  const [c, ctx] = canvas(rc.width, rc.height);
  const src = rc.getContext('2d').getImageData(0, 0, rc.width, rc.height);
  const out = ctx.createImageData(rc.width, rc.height);
  const rnd = mulberry32(88);
  for (let i = 0; i < src.data.length; i += 4) {
    const v = src.data[i] / 255;
    const shade = 0.66 + 0.34 * Math.min(1, (v - 0.2) / 0.6);
    const n = 0.96 + rnd() * 0.08;
    out.data[i] = 214 * shade * n; out.data[i + 1] = 210 * shade * n; out.data[i + 2] = 200 * shade * n; out.data[i + 3] = 255;
  }
  ctx.putImageData(out, 0, 0);
  streaks(ctx, rc.width, rc.height, rnd, 40, (a) => `rgba(90,85,75,${a})`, 0.12);
  return c;
}

// Painted name board for the restaurant
export function signTexture(text) {
  const [c, ctx] = canvas(512, 84);
  ctx.fillStyle = '#5b3a22'; ctx.fillRect(0, 0, 512, 84);
  ctx.strokeStyle = '#d9b36a'; ctx.lineWidth = 4; ctx.strokeRect(6, 6, 500, 72);
  ctx.fillStyle = '#f3e3b8';
  ctx.font = 'bold 46px Georgia, "Times New Roman", serif';
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText(text, 256, 45);
  return tex(c, { repeat: false });
}

export function glowTexture() {
  const [c, ctx] = canvas(128, 128);
  const g = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
  g.addColorStop(0, 'rgba(255,240,200,1)');
  g.addColorStop(0.2, 'rgba(255,210,140,0.55)');
  g.addColorStop(0.6, 'rgba(255,170,90,0.12)');
  g.addColorStop(1, 'rgba(255,160,80,0)');
  ctx.fillStyle = g; ctx.fillRect(0, 0, 128, 128);
  return tex(c, { repeat: false });
}
