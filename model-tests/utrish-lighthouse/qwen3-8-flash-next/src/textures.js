// Every texture in the diorama is painted into a <canvas> at runtime.
import * as THREE from 'three';
import { fbm, vnoise, hash2, mulberry32, sat, smoothstep } from './noise.js';

function makeCanvas(w, h = w) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  return c;
}

function px(ctx, size, fn) {
  const img = ctx.createImageData(size, size);
  const d = img.data;
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const i = (y * size + x) * 4;
      const c = fn(x / size, y / size, x, y);
      d[i] = c[0];
      d[i + 1] = c[1];
      d[i + 2] = c[2];
      d[i + 3] = c.length > 3 ? c[3] : 255;
    }
  }
  ctx.putImageData(img, 0, 0);
}

export function finishTex(tex, { srgb = false, repeat = 1, aniso = 4 } = {}) {
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(repeat, repeat);
  tex.anisotropy = aniso;
  tex.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
  tex.needsUpdate = true;
  return tex;
}

/** paired colour/bump textures from one paint routine */
function pair(size, paint, opts = {}) {
  const cm = makeCanvas(size);
  const bm = makeCanvas(size);
  paint(cm.getContext('2d'), bm.getContext('2d'), size);
  const map = finishTex(new THREE.CanvasTexture(cm), { srgb: true, ...opts });
  const bumpMap = finishTex(new THREE.CanvasTexture(bm), { ...opts });
  return { map, bumpMap };
}

/* ------------------------------------------------------------------ rock --- */

export function makeRockDetail(size = 512) {
  const c = makeCanvas(size);
  const ctx = c.getContext('2d');
  px(ctx, size, (u, v) => {
    const n1 = fbm(u * 9, v * 9, 5, 3, 9);
    const n2 = fbm(u * 27 + 4.5, v * 27, 4, 11, 27);
    const n3 = vnoise(u * 96, v * 96, 5, 96);
    let g = 0.74 + 0.3 * n1 + 0.12 * n2 + 0.06 * n3;
    // hairline bedding cracks
    const crack = Math.abs(Math.sin((u * 6 + n1 * 1.6) * Math.PI * 3)) + Math.abs(Math.sin((v * 4 - n2 * 0.8) * Math.PI * 2.2));
    if (crack < 0.09) g *= 0.72 + crack * 2.6;
    const b = sat(g) * 255;
    return [b, b * 0.995, b * 0.97];
  });
  return finishTex(new THREE.CanvasTexture(c), { srgb: true, repeat: 1, aniso: 8 });
}

/* ---------------------------------------------------------------- gravel --- */

/** rounded shingle: used for the island terrace, the beach and the seabed */
export function makePebbles(size = 512, tint = [198, 192, 180], count = 1700) {
  const cm = makeCanvas(size);
  const bm = makeCanvas(size);
  const ctx = cm.getContext('2d');
  const bctx = bm.getContext('2d');
  ctx.fillStyle = `rgb(${tint[0] * 0.72 | 0},${tint[1] * 0.72 | 0},${tint[2] * 0.74 | 0})`;
  ctx.fillRect(0, 0, size, size);
  bctx.fillStyle = '#585858';
  bctx.fillRect(0, 0, size, size);
  const rnd = mulberry32(1234);
  for (let i = 0; i < count; i++) {
    const x = rnd() * size;
    const y = rnd() * size;
    const r = 2 + Math.pow(rnd(), 2.4) * 15;
    const k = 0.62 + rnd() * 0.62;
    const warm = 1 + (rnd() - 0.45) * 0.16;
    const tone = [tint[0] * k * warm, tint[1] * k, tint[2] * k / warm];
    const rot = rnd() * 6.283;
    const squash = 0.6 + rnd() * 0.42;
    for (const [ox, oy] of [[0, 0], [size, 0], [-size, 0], [0, size], [0, -size], [size, size], [-size, -size]]) {
      const xx = x + ox;
      const yy = y + oy;
      if (xx < -r || xx > size + r || yy < -r || yy > size + r) continue;
      for (const [c2, mode] of [[ctx, 'c'], [bctx, 'b']]) {
        const g = c2.createRadialGradient(xx - r * 0.32, yy - r * 0.36, r * 0.04, xx, yy, r * 1.04);
        if (mode === 'c') {
          g.addColorStop(0, `rgba(${Math.min(255, tone[0] * 1.34) | 0},${Math.min(255, tone[1] * 1.3) | 0},${Math.min(255, tone[2] * 1.26) | 0},1)`);
          g.addColorStop(0.6, `rgba(${tone[0] | 0},${tone[1] | 0},${tone[2] | 0},1)`);
          g.addColorStop(1, `rgba(${tone[0] * 0.46 | 0},${tone[1] * 0.46 | 0},${tone[2] * 0.5 | 0},1)`);
        } else {
          const h = 120 + tone[0] * 0.42;
          g.addColorStop(0, `rgb(${h | 0},${h | 0},${h | 0})`);
          g.addColorStop(0.7, `rgb(${h * 0.82 | 0},${h * 0.82 | 0},${h * 0.82 | 0})`);
          g.addColorStop(1, `rgb(${h * 0.34 | 0},${h * 0.34 | 0},${h * 0.34 | 0})`);
        }
        c2.fillStyle = g;
        c2.beginPath();
        c2.ellipse(xx, yy, r, r * squash, rot, 0, 6.283);
        c2.fill();
      }
    }
  }
  return {
    map: finishTex(new THREE.CanvasTexture(cm), { srgb: true, aniso: 8 }),
    bumpMap: finishTex(new THREE.CanvasTexture(bm), { aniso: 8 }),
  };
}

/* ----------------------------------------------------------------- brick --- */

export function makeBrick(size = 512) {
  const cm = makeCanvas(size);
  const bm = makeCanvas(size);
  const ctx = cm.getContext('2d');
  const bctx = bm.getContext('2d');
  const base = [206, 193, 170];
  ctx.fillStyle = '#c2b8a5'; // flush pale mortar, the tower is pointed and whitewashed
  ctx.fillRect(0, 0, size, size);
  bctx.fillStyle = '#767676';
  bctx.fillRect(0, 0, size, size);
  const rows = 26;
  const rh = size / rows;
  const bw = size / 8;
  const rnd = mulberry32(99);
  for (let r = 0; r < rows; r++) {
    const off = (r % 2) * bw * 0.5;
    for (let i = -1; i < 9; i++) {
      const x = i * bw + off + 1.2;
      const y = r * rh + 1.2;
      const w = bw - 2.4;
      const h = rh - 2.4;
      const k = 0.94 + rnd() * 0.12;
      const warm = 1 + (rnd() - 0.5) * 0.05;
      ctx.fillStyle = `rgb(${Math.min(255, base[0] * k * warm) | 0},${Math.min(255, base[1] * k) | 0},${Math.min(255, base[2] * k / warm) | 0})`;
      ctx.fillRect(x, y, w, h);
      bctx.fillStyle = `rgb(${200 + rnd() * 30 | 0},${200 + rnd() * 30 | 0},${200 + rnd() * 30 | 0})`;
      bctx.fillRect(x, y, w, h);
      // brick grain
      ctx.globalAlpha = 0.1;
      for (let s = 0; s < 4; s++) {
        ctx.fillStyle = rnd() > 0.5 ? '#fff' : '#8b7c64';
        ctx.beginPath();
        ctx.ellipse(x + rnd() * w, y + rnd() * h, 1 + rnd() * 3, 0.8 + rnd() * 1.2, rnd() * 3, 0, 6.283);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    }
  }
  // weathering streaks / damp staining down the courses
  ctx.globalAlpha = 0.32;
  for (let i = 0; i < 90; i++) {
    const x = rnd() * size;
    const w = 2 + rnd() * 9;
    const g = ctx.createLinearGradient(0, 0, 0, size);
    const dark = rnd() > 0.5;
    g.addColorStop(0, dark ? 'rgba(84,78,68,0.26)' : 'rgba(255,252,240,0.22)');
    g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g;
    ctx.fillRect(x, rnd() * size * 0.7, w, size * (0.1 + rnd() * 0.5));
  }
  ctx.globalAlpha = 1;
  return {
    map: finishTex(new THREE.CanvasTexture(cm), { srgb: true, aniso: 8 }),
    bumpMap: finishTex(new THREE.CanvasTexture(bm), { aniso: 8 }),
  };
}

/* --------------------------------------------------- monument relief band --- */

/**
 * The sculpted band around the 1975 tower: alternating panels of sailor faces,
 * a helm and an anchor, with pilasters between. Painted as height, then baked
 * into colour + bump.
 */
export function makeReliefBand(w = 1024, h = 256) {
  const hc = makeCanvas(w, h);
  const ctx = hc.getContext('2d');
  ctx.fillStyle = '#6b6b6b';
  ctx.fillRect(0, 0, w, h);
  const rnd = mulberry32(20250509);
  const panels = 8;
  const pw = w / panels;

  const raised = (fn) => {
    ctx.save();
    ctx.filter = 'blur(2.2px)';
    fn();
    ctx.restore();
  };

  const face = (cx, cy, r) => {
    raised(() => {
      // head
      let g = ctx.createRadialGradient(cx - r * 0.2, cy - r * 0.3, r * 0.1, cx, cy, r * 1.15);
      g.addColorStop(0, '#f4f4f4');
      g.addColorStop(0.72, '#c9c9c9');
      g.addColorStop(1, '#8f8f8f');
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.ellipse(cx, cy, r * 0.82, r, 0, 0, 6.283);
      ctx.fill();
      // brow + hair block
      ctx.fillStyle = '#d8d8d8';
      ctx.beginPath();
      ctx.ellipse(cx, cy - r * 0.72, r * 0.9, r * 0.42, 0, Math.PI, 0);
      ctx.fill();
      // eyes
      ctx.fillStyle = '#4a4a4a';
      for (const s of [-1, 1]) {
        ctx.beginPath();
        ctx.ellipse(cx + s * r * 0.33, cy - r * 0.16, r * 0.17, r * 0.09, 0, 0, 6.283);
        ctx.fill();
      }
      // nose + mouth
      ctx.strokeStyle = '#5c5c5c';
      ctx.lineWidth = r * 0.1;
      ctx.beginPath();
      ctx.moveTo(cx, cy - r * 0.1);
      ctx.lineTo(cx - r * 0.06, cy + r * 0.26);
      ctx.lineTo(cx + r * 0.09, cy + r * 0.3);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(cx - r * 0.28, cy + r * 0.55);
      ctx.quadraticCurveTo(cx, cy + r * 0.68, cx + r * 0.28, cy + r * 0.55);
      ctx.stroke();
      // jaw shading
      ctx.fillStyle = 'rgba(70,70,70,0.35)';
      ctx.beginPath();
      ctx.ellipse(cx, cy + r * 0.9, r * 0.72, r * 0.3, 0, 0, 6.283);
      ctx.fill();
    });
  };

  const helm = (cx, cy, r) => {
    raised(() => {
      ctx.strokeStyle = '#ececec';
      ctx.lineWidth = r * 0.22;
      ctx.beginPath();
      ctx.arc(cx, cy, r * 0.72, 0, 6.283);
      ctx.stroke();
      ctx.lineWidth = r * 0.17;
      for (let i = 0; i < 8; i++) {
        const a = (i / 8) * 6.283;
        ctx.beginPath();
        ctx.moveTo(cx + Math.cos(a) * r * 0.2, cy + Math.sin(a) * r * 0.2);
        ctx.lineTo(cx + Math.cos(a) * r * 1.08, cy + Math.sin(a) * r * 1.08);
        ctx.stroke();
      }
      ctx.fillStyle = '#f6f6f6';
      ctx.beginPath();
      ctx.arc(cx, cy, r * 0.28, 0, 6.283);
      ctx.fill();
      ctx.fillStyle = '#4d4d4d';
      ctx.beginPath();
      ctx.arc(cx, cy, r * 0.1, 0, 6.283);
      ctx.fill();
    });
  };

  const anchor = (cx, cy, r) => {
    raised(() => {
      ctx.strokeStyle = '#efefef';
      ctx.lineCap = 'round';
      ctx.lineWidth = r * 0.2;
      ctx.beginPath();
      ctx.moveTo(cx, cy - r * 0.9);
      ctx.lineTo(cx, cy + r * 0.62);
      ctx.stroke();
      ctx.lineWidth = r * 0.15;
      ctx.beginPath();
      ctx.arc(cx, cy - r * 1.0, r * 0.24, 0, 6.283);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(cx - r * 0.28, cy - r * 0.5);
      ctx.lineTo(cx + r * 0.28, cy - r * 0.5);
      ctx.stroke();
      ctx.lineWidth = r * 0.21;
      ctx.beginPath();
      ctx.arc(cx, cy + r * 0.1, r * 0.66, 0.24, Math.PI - 0.24);
      ctx.stroke();
      ctx.fillStyle = '#f2f2f2';
      for (const s of [-1, 1]) {
        ctx.beginPath();
        ctx.moveTo(cx + s * r * 0.62, cy + r * 0.56);
        ctx.lineTo(cx + s * r * 0.9, cy + r * 0.34);
        ctx.lineTo(cx + s * r * 0.42, cy + r * 0.3);
        ctx.closePath();
        ctx.fill();
      }
    });
  };

  for (let i = 0; i < panels; i++) {
    const cx = pw * (i + 0.5);
    const kind = i % 4;
    // recessed background panel
    const g = ctx.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, '#7d7d7d');
    g.addColorStop(0.5, '#666');
    g.addColorStop(1, '#767676');
    ctx.fillStyle = g;
    ctx.fillRect(pw * i + pw * 0.11, h * 0.1, pw * 0.78, h * 0.8);
    // pilaster
    ctx.fillStyle = '#c4c4c4';
    ctx.fillRect(pw * i - pw * 0.055, 0, pw * 0.11, h);
    if (kind === 0) face(cx, h * 0.5, h * 0.3);
    else if (kind === 1) helm(cx, h * 0.5, h * 0.31);
    else if (kind === 2) face(cx, h * 0.5, h * 0.3);
    else anchor(cx, h * 0.48, h * 0.3);
  }
  // cornices
  ctx.fillStyle = '#f0f0f0';
  ctx.fillRect(0, 0, w, h * 0.055);
  ctx.fillRect(0, h * 0.945, w, h * 0.055);
  ctx.fillStyle = '#3f3f3f';
  ctx.fillRect(0, h * 0.055, w, h * 0.02);
  ctx.fillRect(0, h * 0.925, w, h * 0.02);

  // grain over the height map
  const img = ctx.getImageData(0, 0, w, h);
  const d = img.data;
  for (let i = 0; i < d.length; i += 4) {
    const n = (hash2(i, 3) - 0.5) * 22;
    d[i] = sat((d[i] + n) / 255) * 255;
    d[i + 1] = d[i];
    d[i + 2] = d[i];
  }
  ctx.putImageData(img, 0, 0);

  // colour = concrete tinted by the relief shading
  const cc = makeCanvas(w, h);
  const cctx = cc.getContext('2d');
  cctx.drawImage(hc, 0, 0);
  cctx.globalCompositeOperation = 'overlay';
  const gg = cctx.createLinearGradient(0, 0, 0, h);
  gg.addColorStop(0, '#cfc7b6');
  gg.addColorStop(0.45, '#bdb3a1');
  gg.addColorStop(1, '#a9a094');
  cctx.fillStyle = gg;
  cctx.fillRect(0, 0, w, h);
  cctx.globalCompositeOperation = 'source-over';
  cctx.globalAlpha = 0.35;
  for (let i = 0; i < 40; i++) {
    cctx.fillStyle = rnd() > 0.5 ? 'rgba(60,58,52,0.5)' : 'rgba(240,236,222,0.4)';
    cctx.fillRect(rnd() * w, rnd() * h, 1 + rnd() * 14, h * (0.1 + rnd() * 0.5));
  }
  return {
    map: finishTex(new THREE.CanvasTexture(cc), { srgb: true, aniso: 8 }),
    bumpMap: finishTex(new THREE.CanvasTexture(hc), { aniso: 8 }),
  };
}

/* --------------------------------------------------------------- plaster --- */

export function makePlaster(size = 512, base = [238, 234, 224]) {
  const c = makeCanvas(size);
  const b = makeCanvas(size);
  const ctx = c.getContext('2d');
  const bctx = b.getContext('2d');
  px(ctx, size, (u, v) => {
    const n = fbm(u * 7, v * 7, 5, 21, 7);
    const g = fbm(u * 21, v * 21, 3, 8, 21);
    const k = 0.86 + 0.16 * n + 0.07 * (g - 0.5);
    return [base[0] * k, base[1] * k, base[2] * k];
  });
  const rnd = mulberry32(4242);
  // damp patches, hairline cracks, spalled corners
  for (let i = 0; i < 26; i++) {
    const g = ctx.createRadialGradient(rnd() * size, rnd() * size, 2, rnd() * size, rnd() * size, 14 + rnd() * 70);
    g.addColorStop(0, 'rgba(120,112,100,0.20)');
    g.addColorStop(1, 'rgba(120,112,100,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, size, size);
  }
  ctx.strokeStyle = 'rgba(120,110,96,0.5)';
  for (let i = 0; i < 24; i++) {
    ctx.lineWidth = 0.6 + rnd();
    ctx.beginPath();
    let x = rnd() * size;
    let y = rnd() * size;
    ctx.moveTo(x, y);
    for (let k = 0; k < 5; k++) {
      x += (rnd() - 0.5) * 46;
      y += rnd() * 26;
      ctx.lineTo(x, y);
    }
    ctx.stroke();
  }
  px(bctx, size, (u, v) => {
    const g = fbm(u * 18, v * 18, 4, 6, 18);
    const t = fbm(u * 5, v * 5, 3, 12, 5);
    const val = sat(0.55 + 0.3 * g + 0.25 * (t - 0.5)) * 255;
    return [val, val, val];
  });
  return {
    map: finishTex(new THREE.CanvasTexture(c), { srgb: true, aniso: 8 }),
    bumpMap: finishTex(new THREE.CanvasTexture(b), { aniso: 8 }),
  };
}

/* ------------------------------------------------------------------ rust --- */

export function makePaintedMetal(size = 256, base = [128, 134, 138], rust = true) {
  const c = makeCanvas(size);
  const b = makeCanvas(size);
  const ctx = c.getContext('2d');
  const bctx = b.getContext('2d');
  px(ctx, size, (u, v) => {
    const n = fbm(u * 8, v * 8, 4, 33, 8);
    const k = 0.9 + 0.16 * n;
    return [base[0] * k, base[1] * k, base[2] * k];
  });
  const rnd = mulberry32(88);
  if (rust) {
    for (let i = 0; i < 130; i++) {
      const x = rnd() * size;
      const y = rnd() * size;
      const r = 2 + Math.pow(rnd(), 2) * 26;
      const g = ctx.createRadialGradient(x, y, 0, x, y, r);
      const warm = rnd();
      g.addColorStop(0, `rgba(${(120 + warm * 70) | 0},${(52 + warm * 34) | 0},${(26 + warm * 14) | 0},${0.28 + rnd() * 0.45})`);
      g.addColorStop(0.7, `rgba(${(128 + warm * 60) | 0},${(60 + warm * 26) | 0},32,${0.1 + rnd() * 0.2})`);
      g.addColorStop(1, 'rgba(120,60,30,0)');
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, 6.283);
      ctx.fill();
      // rivet runs
      if (i % 22 === 0) {
        ctx.fillStyle = 'rgba(70,72,74,0.35)';
        for (let k = 0; k < 10; k++) {
          ctx.beginPath();
          ctx.arc(6 + k * (size - 12) / 9, y, 2.2, 0, 6.283);
          ctx.fill();
        }
      }
    }
  }
  px(bctx, size, (u, v) => {
    const n = fbm(u * 24, v * 24, 4, 71, 24);
    const val = sat(0.5 + 0.4 * n) * 255;
    return [val, val, val];
  });
  return {
    map: finishTex(new THREE.CanvasTexture(c), { srgb: true, aniso: 8 }),
    bumpMap: finishTex(new THREE.CanvasTexture(b), { aniso: 8 }),
  };
}

/* -------------------------------------------------------------- concrete --- */

export function makeConcrete(size = 256, base = [214, 210, 202]) {
  const c = makeCanvas(size);
  const ctx = c.getContext('2d');
  px(ctx, size, (u, v) => {
    const n = fbm(u * 10, v * 10, 5, 51, 10);
    const s = vnoise(u * 90, v * 90, 9, 90);
    const k = 0.86 + 0.18 * n + 0.05 * (s - 0.5);
    return [base[0] * k, base[1] * k, base[2] * k];
  });
  const rnd = mulberry32(606);
  for (let i = 0; i < 22; i++) {
    const x = rnd() * size;
    const g = ctx.createLinearGradient(0, 0, 0, size);
    g.addColorStop(0, 'rgba(96,92,86,0.26)');
    g.addColorStop(1, 'rgba(96,92,86,0)');
    ctx.fillStyle = g;
    ctx.fillRect(x, rnd() * size * 0.6, 1 + rnd() * 6, size * (0.08 + rnd() * 0.4));
  }
  return finishTex(new THREE.CanvasTexture(c), { srgb: true, aniso: 8 });
}

/* ----------------------------------------------------------------- wood ---- */

export function makeWood(size = 256, base = [152, 134, 112]) {
  const c = makeCanvas(size);
  const ctx = c.getContext('2d');
  px(ctx, size, (u, v) => {
    const grain = Math.sin((v * 34 + fbm(u * 4, v * 12, 4, 17, 4) * 5.5) * Math.PI * 2) * 0.5 + 0.5;
    const n = fbm(u * 9, v * 3, 4, 29, 9);
    const k = 0.72 + 0.3 * grain * 0.6 + 0.24 * n;
    return [base[0] * k, base[1] * k * (0.97 + 0.06 * grain), base[2] * k * 0.94];
  });
  const rnd = mulberry32(31);
  for (let i = 0; i < 16; i++) {
    ctx.fillStyle = 'rgba(70,58,44,0.35)';
    ctx.fillRect(0, rnd() * size, size, 0.8 + rnd() * 1.4);
  }
  return finishTex(new THREE.CanvasTexture(c), { srgb: true, aniso: 8 });
}

/* --------------------------------------------------------------- granite --- */

export function makeGranite(size = 256, base = [86, 84, 88]) {
  const c = makeCanvas(size);
  const ctx = c.getContext('2d');
  px(ctx, size, (u, v) => {
    let k = 0.8 + 0.4 * fbm(u * 14, v * 14, 4, 77, 14);
    const sp = hash2(Math.floor(u * 220), Math.floor(v * 220), 5);
    if (sp > 0.93) k *= 1.5;
    else if (sp < 0.08) k *= 0.6;
    return [base[0] * k * 1.06, base[1] * k, base[2] * k * 1.02];
  });
  return finishTex(new THREE.CanvasTexture(c), { srgb: true, aniso: 8 });
}

/* ------------------------------------------------- engraved plaque lines --- */

export function makePlaque(size = 256, rows = 7, warm = '#6a4a34') {
  const c = makeCanvas(size, size);
  const ctx = c.getContext('2d');
  ctx.fillStyle = warm;
  ctx.fillRect(0, 0, size, size);
  const rnd = mulberry32(1975);
  ctx.fillStyle = 'rgba(232,226,208,0.82)';
  for (let r = 0; r < rows; r++) {
    const y = size * (0.16 + (r * 0.72) / rows);
    const words = 2 + Math.floor(rnd() * 3);
    let x = size * 0.14;
    for (let w = 0; w < words; w++) {
      const wl = size * (0.06 + rnd() * 0.16);
      for (let i = 0; i < Math.floor(wl / 7); i++) {
        const cw = 3 + rnd() * 4;
        ctx.fillRect(x, y, cw, size * 0.028);
        x += cw + 2;
      }
      x += size * 0.045;
      if (x > size * 0.82) break;
    }
  }
  return finishTex(new THREE.CanvasTexture(c), { srgb: true, aniso: 4 });
}

/* ------------------------------------------------------------------ net ---- */

export function makeNet(size = 128) {
  const c = makeCanvas(size);
  const ctx = c.getContext('2d');
  ctx.clearRect(0, 0, size, size);
  ctx.strokeStyle = 'rgba(232,236,230,0.9)';
  ctx.lineWidth = 1.6;
  const n = 8;
  for (let i = 0; i <= n; i++) {
    const p = (i / n) * size;
    ctx.beginPath();
    ctx.moveTo(p, 0);
    ctx.lineTo(p, size);
    ctx.moveTo(0, p);
    ctx.lineTo(size, p);
    ctx.stroke();
  }
  return finishTex(new THREE.CanvasTexture(c), { srgb: true, repeat: 8 });
}

/* ------------------------------------------------------------- water FX --- */

export function makeSpray(size = 256) {
  const c = makeCanvas(size);
  const ctx = c.getContext('2d');
  ctx.clearRect(0, 0, size, size);
  const rnd = mulberry32(1616);
  ctx.filter = 'blur(6px)';
  for (let i = 0; i < 170; i++) {
    const a = rnd() * 6.283;
    const r = Math.pow(rnd(), 0.65) * size * 0.44;
    const x = size / 2 + Math.cos(a) * r;
    const y = size / 2 + Math.sin(a) * r * 0.85;
    const rr = 4 + rnd() * 22 * (1 - r / (size * 0.5));
    const g = ctx.createRadialGradient(x, y, 0, x, y, Math.max(2, rr));
    const al = 0.5 * (1 - r / (size * 0.5)) + 0.05;
    g.addColorStop(0, `rgba(255,255,255,${al})`);
    g.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(x, y, Math.max(2, rr), 0, 6.283);
    ctx.fill();
  }
  ctx.filter = 'none';
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.needsUpdate = true;
  return t;
}

/** tiling foam film: cellular bubbles + wisps, alpha = foam coverage */
export function makeFoam(size = 512) {
  const c = makeCanvas(size);
  const ctx = c.getContext('2d');
  px(ctx, size, (u, v) => {
    const w = fbm(u * 5, v * 5, 4, 13, 5);
    const n = fbm(u * 17 + w * 2.5, v * 17 - w * 2.0, 5, 41, 17);
    const cells = Math.pow(sat(1 - Math.abs(n * 2 - 1) * 1.55), 2.2);
    const a = sat(cells * 0.9 + (n - 0.52) * 1.5);
    const val = 255;
    return [val, val, val, a * 255];
  });
  return finishTex(new THREE.CanvasTexture(c), { repeat: 1 });
}

/** tiling derivative map of fine chop, RG = dh/dx, dh/dy */
export function makeChop(size = 256, strength = 1) {
  const heights = new Float32Array(size * size);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const u = x / size;
      const v = y / size;
      heights[y * size + x] = fbm(u * 22, v * 22, 4, 3, 22) * 0.65 + fbm(u * 47, v * 47, 3, 71, 47) * 0.35;
    }
  }
  const c = makeCanvas(size);
  const ctx = c.getContext('2d');
  const img = ctx.createImageData(size, size);
  const d = img.data;
  const at = (x, y) => heights[((y + size) % size) * size + ((x + size) % size)];
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const dx = (at(x + 1, y) - at(x - 1, y)) * strength;
      const dy = (at(x, y + 1) - at(x, y - 1)) * strength;
      const i = (y * size + x) * 4;
      d[i] = sat(0.5 + dx) * 255;
      d[i + 1] = sat(0.5 + dy) * 255;
      d[i + 2] = 255;
      d[i + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  return finishTex(new THREE.CanvasTexture(c), { repeat: 1 });
}

/* ------------------------------------------------------- seagrass / weed --- */

/**
 * Dry Mediterranean steppe cover: straw, thistle and bare limestone dust.
 * Painted bright because it multiplies the vertex colour.
 */
export function makeDryGrass(size = 512) {
  const c = makeCanvas(size);
  const ctx = c.getContext('2d');
  const rnd = mulberry32(808);
  // pale dusty ground so the gaps between blades stay light
  const g0 = ctx.createLinearGradient(0, 0, size, size);
  g0.addColorStop(0, '#cfc7a2');
  g0.addColorStop(0.5, '#c8bf97');
  g0.addColorStop(1, '#d4cdaa');
  ctx.fillStyle = g0;
  ctx.fillRect(0, 0, size, size);
  for (let i = 0; i < 2600; i++) {
    const x = rnd() * size;
    const y = rnd() * size;
    const len = 7 + rnd() * 26;
    const a = -Math.PI / 2 + (rnd() - 0.5) * 2.3;
    const dry = rnd();
    const rr = 150 + dry * 95;
    const gg = 140 + dry * 92;
    const bb = 74 + dry * 60;
    ctx.strokeStyle = `rgba(${rr | 0},${gg | 0},${bb | 0},${0.4 + rnd() * 0.5})`;
    ctx.lineWidth = 0.9 + rnd() * 1.7;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(x, y + len / 2);
    ctx.quadraticCurveTo(x + Math.cos(a) * len * 0.4, y, x + Math.cos(a) * len, y - len / 2);
    ctx.stroke();
  }
  // a few darker thistle clumps and grey limestone chips
  for (let i = 0; i < 130; i++) {
    const x = rnd() * size;
    const y = rnd() * size;
    ctx.fillStyle = `rgba(${(86 + rnd() * 40) | 0},${(90 + rnd() * 34) | 0},${(66 + rnd() * 26) | 0},0.5)`;
    ctx.beginPath();
    ctx.ellipse(x, y, 3 + rnd() * 8, 2 + rnd() * 5, rnd() * 3, 0, 6.283);
    ctx.fill();
  }
  for (let i = 0; i < 180; i++) {
    const x = rnd() * size;
    const y = rnd() * size;
    ctx.fillStyle = `rgba(${(214 + rnd() * 30) | 0},${(210 + rnd() * 30) | 0},${(198 + rnd() * 30) | 0},0.7)`;
    ctx.beginPath();
    ctx.ellipse(x, y, 1.6 + rnd() * 4, 1.2 + rnd() * 3, rnd() * 3, 0, 6.283);
    ctx.fill();
  }
  return finishTex(new THREE.CanvasTexture(c), { srgb: true, repeat: 7, aniso: 8 });
}

export function makeWeed(size = 256) {
  const c = makeCanvas(size);
  const ctx = c.getContext('2d');
  // opaque bed of posidonia-green so the multiplier never goes black
  ctx.fillStyle = '#8b9a63';
  ctx.fillRect(0, 0, size, size);
  const rnd = mulberry32(9);
  for (let i = 0; i < 260; i++) {
    const x = rnd() * size;
    const y = rnd() * size;
    const len = 8 + rnd() * 34;
    const wob = (rnd() - 0.5) * 22;
    const g = 40 + rnd() * 90;
    ctx.strokeStyle = `rgba(${(g * 0.45) | 0},${g | 0},${(g * 0.5) | 0},${0.35 + rnd() * 0.5})`;
    ctx.lineWidth = 1 + rnd() * 2.4;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(x, y + len / 2);
    ctx.quadraticCurveTo(x + wob * 0.5, y, x + wob, y - len / 2);
    ctx.stroke();
  }
  for (let i = 0; i < 40; i++) {
    const x = rnd() * size;
    const y = rnd() * size;
    ctx.fillStyle = `rgba(${(120 + rnd() * 60) | 0},${(80 + rnd() * 40) | 0},40,${0.2 + rnd() * 0.35})`;
    ctx.beginPath();
    ctx.ellipse(x, y, 6 + rnd() * 16, 3 + rnd() * 8, rnd() * 3, 0, 6.283);
    ctx.fill();
  }
  return finishTex(new THREE.CanvasTexture(c), { srgb: true, repeat: 6 });
}
