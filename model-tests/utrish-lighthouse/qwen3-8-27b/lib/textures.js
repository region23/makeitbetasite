import * as THREE from 'three';

// ---------------------------------------------------------------------------
// Procedural texture generation. Every texture is drawn on a 2D canvas in
// code (no downloaded images). Returns THREE.CanvasTexture.
// ---------------------------------------------------------------------------

function makeCanvas(w, h, draw) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  const ctx = c.getContext('2d');
  draw(ctx, w, h);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  return tex;
}

// Deterministic pseudo-random so textures are stable between frames.
function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Hash-based 2D value noise (0..1).
function vnoise(x, y) {
  const xi = Math.floor(x), yi = Math.floor(y);
  const xf = x - xi, yf = y - yi;
  const h = (a, b) => {
    let n = (a * 374761393 + b * 668265263) | 0;
    n = (n ^ (n >>> 13)) * 1274126177;
    return ((n ^ (n >>> 16)) >>> 0) / 4294967296;
  };
  const u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf);
  const a = h(xi, yi), b = h(xi + 1, yi), c = h(xi, yi + 1), d = h(xi + 1, yi + 1);
  return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
}
export function fbm(x, y, oct = 4) {
  let s = 0, amp = 0.5, f = 1;
  for (let i = 0; i < oct; i++) { s += amp * vnoise(x * f, y * f); f *= 2; amp *= 0.5; }
  return s;
}

// ---------------------------------------------------------------------------
// Fractured light grey-ochre limestone / marl rock face.
// ---------------------------------------------------------------------------
export function rockTexture(seed = 7) {
  const rnd = mulberry32(seed);
  return makeCanvas(512, 512, (ctx, w, h) => {
    // base grey-ochre
    ctx.fillStyle = '#c9bda0';
    ctx.fillRect(0, 0, w, h);
    // broad tonal patches (marl vs limestone)
    for (let i = 0; i < 260; i++) {
      const x = rnd() * w, y = rnd() * h, r = 10 + rnd() * 60;
      const t = rnd();
      const col = t < 0.5 ? `rgba(190,178,150,${0.10 + rnd() * 0.12})`
        : t < 0.8 ? `rgba(150,140,120,${0.08 + rnd() * 0.10})`
          : `rgba(210,200,175,${0.08 + rnd() * 0.10})`;
      ctx.fillStyle = col;
      ctx.beginPath(); ctx.arc(x, y, r, 0, 7); ctx.fill();
    }
    // tilted fracture strata (the landslide) — diagonal darker bands
    ctx.save();
    ctx.translate(w / 2, h / 2);
    ctx.rotate(-0.5);
    for (let i = -14; i < 22; i++) {
      const yy = i * 34 + (rnd() - 0.5) * 14;
      ctx.strokeStyle = `rgba(96,88,74,${0.10 + rnd() * 0.16})`;
      ctx.lineWidth = 1.5 + rnd() * 4;
      ctx.beginPath();
      ctx.moveTo(-w, yy);
      ctx.bezierCurveTo(-w / 2, yy + (rnd() - 0.5) * 30, w / 2, yy + (rnd() - 0.5) * 30, w, yy);
      ctx.stroke();
    }
    ctx.restore();
    // fine cracks / fractures
    ctx.strokeStyle = 'rgba(70,62,52,0.35)';
    for (let i = 0; i < 90; i++) {
      let x = rnd() * w, y = rnd() * h;
      ctx.lineWidth = 0.6 + rnd() * 1.2;
      ctx.beginPath(); ctx.moveTo(x, y);
      const segs = 3 + (rnd() * 4 | 0);
      for (let s = 0; s < segs; s++) {
        x += (rnd() - 0.5) * 40; y += (rnd() - 0.3) * 30;
        ctx.lineTo(x, y);
      }
      ctx.stroke();
    }
    // speckle
    for (let i = 0; i < 4000; i++) {
      const a = rnd();
      ctx.fillStyle = a < 0.5 ? `rgba(255,250,235,${rnd() * 0.25})` : `rgba(60,54,44,${rnd() * 0.25})`;
      ctx.fillRect(rnd() * w, rnd() * h, 1.4, 1.4);
    }
  });
}

// ---------------------------------------------------------------------------
// Pebble / gravel beach deposit.
// ---------------------------------------------------------------------------
export function pebbleTexture(seed = 21) {
  const rnd = mulberry32(seed);
  return makeCanvas(512, 512, (ctx, w, h) => {
    ctx.fillStyle = '#b7ab8e';
    ctx.fillRect(0, 0, w, h);
    const cols = ['#c8bda0', '#a99e83', '#948a72', '#cfc6ad', '#8b8168', '#b3a688', '#d8cfb6', '#7d735d'];
    for (let i = 0; i < 2600; i++) {
      const x = rnd() * w, y = rnd() * h;
      const rx = 2.5 + rnd() * 6, ry = rx * (0.6 + rnd() * 0.5);
      ctx.save();
      ctx.translate(x, y); ctx.rotate(rnd() * Math.PI);
      const c = cols[(rnd() * cols.length) | 0];
      ctx.fillStyle = c;
      ctx.beginPath(); ctx.ellipse(0, 0, rx, ry, 0, 0, 7); ctx.fill();
      // little highlight + shadow for roundness
      ctx.fillStyle = 'rgba(255,255,255,0.25)';
      ctx.beginPath(); ctx.ellipse(-rx * 0.3, -ry * 0.3, rx * 0.4, ry * 0.4, 0, 0, 7); ctx.fill();
      ctx.restore();
    }
    // sand between
    ctx.fillStyle = 'rgba(180,170,140,0.25)';
    for (let i = 0; i < 5000; i++) ctx.fillRect(rnd() * w, rnd() * h, 1.5, 1.5);
  });
}

// ---------------------------------------------------------------------------
// Dry summer grass + Mediterranean shrub ground cover.
// ---------------------------------------------------------------------------
export function grassTexture(seed = 33) {
  const rnd = mulberry32(seed);
  return makeCanvas(256, 256, (ctx, w, h) => {
    ctx.fillStyle = '#9a8f5f';
    ctx.fillRect(0, 0, w, h);
    const tints = ['#a89a5e', '#8d8450', '#b3a877', '#7c7448', '#9c8a4f'];
    for (let i = 0; i < 1400; i++) {
      ctx.strokeStyle = tints[(rnd() * tints.length) | 0];
      ctx.globalAlpha = 0.5 + rnd() * 0.5;
      ctx.lineWidth = 0.8 + rnd();
      const x = rnd() * w, y = rnd() * h, len = 4 + rnd() * 10;
      ctx.beginPath(); ctx.moveTo(x, y);
      ctx.lineTo(x + (rnd() - 0.5) * 6, y - len);
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
    // rocky patches
    for (let i = 0; i < 40; i++) {
      ctx.fillStyle = 'rgba(150,140,110,0.35)';
      ctx.beginPath(); ctx.arc(rnd() * w, rnd() * h, 6 + rnd() * 14, 0, 7); ctx.fill();
    }
  });
}

// ---------------------------------------------------------------------------
// Weathered whitewash / plaster over stone (buildings).
// ---------------------------------------------------------------------------
export function plasterTexture(seed = 55) {
  const rnd = mulberry32(seed);
  return makeCanvas(256, 256, (ctx, w, h) => {
    ctx.fillStyle = '#e8e2d4';
    ctx.fillRect(0, 0, w, h);
    // stone blocks faintly showing through
    for (let y = 0; y < h; y += 22) {
      const off = (y / 22 % 2) * 24;
      for (let x = -24; x < w; x += 48) {
        ctx.fillStyle = `rgba(190,180,160,${0.10 + rnd() * 0.14})`;
        ctx.fillRect(x + off + 1, y + 1, 46, 20);
      }
    }
    // plaster cracks
    ctx.strokeStyle = 'rgba(120,110,95,0.30)';
    for (let i = 0; i < 34; i++) {
      let x = rnd() * w, y = rnd() * h;
      ctx.lineWidth = 0.5 + rnd();
      ctx.beginPath(); ctx.moveTo(x, y);
      for (let s = 0; s < 4; s++) { x += (rnd() - 0.5) * 30; y += (rnd() - 0.4) * 24; ctx.lineTo(x, y); }
      ctx.stroke();
    }
    // streaks (weathering)
    for (let i = 0; i < 60; i++) {
      ctx.strokeStyle = `rgba(150,140,120,${rnd() * 0.18})`;
      ctx.lineWidth = 1 + rnd() * 3;
      const x = rnd() * w;
      ctx.beginPath(); ctx.moveTo(x, rnd() * h * 0.4); ctx.lineTo(x + (rnd() - 0.5) * 8, h); ctx.stroke();
    }
    // speckle
    for (let i = 0; i < 2500; i++) {
      ctx.fillStyle = rnd() < 0.5 ? `rgba(255,255,255,${rnd() * 0.3})` : `rgba(90,80,65,${rnd() * 0.25})`;
      ctx.fillRect(rnd() * w, rnd() * h, 1.2, 1.2);
    }
  });
}

// ---------------------------------------------------------------------------
// Tilted marl / limestone strata for the diorama cutaway sides.
// ---------------------------------------------------------------------------
export function strataTexture(seed = 77) {
  const rnd = mulberry32(seed);
  return makeCanvas(512, 512, (ctx, w, h) => {
    ctx.fillStyle = '#cabd9e';
    ctx.fillRect(0, 0, w, h);
    // tilted layers
    ctx.save();
    ctx.translate(w / 2, h / 2);
    ctx.rotate(0.32);
    const layers = [
      '#d3c8a8', '#b8ab88', '#8f8469', '#c4b896', '#a2977a',
      '#cfc4a4', '#948a70', '#d8cdb0', '#7e7459', '#bdae8b'
    ];
    for (let i = -16; i < 24; i++) {
      const th = 18 + rnd() * 26;
      const yy = i * (th + 6);
      ctx.fillStyle = layers[i % layers.length];
      ctx.globalAlpha = 0.85;
      ctx.fillRect(-w, yy, w * 2, th);
      // bedding line
      ctx.globalAlpha = 1;
      ctx.strokeStyle = 'rgba(70,62,50,0.35)';
      ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.moveTo(-w, yy); ctx.lineTo(w, yy); ctx.stroke();
    }
    ctx.restore();
    // grain
    for (let i = 0; i < 5000; i++) {
      ctx.fillStyle = rnd() < 0.5 ? `rgba(255,250,235,${rnd() * 0.15})` : `rgba(50,44,34,${rnd() * 0.15})`;
      ctx.fillRect(rnd() * w, rnd() * h, 1.5, 1.5);
    }
  });
}

// ---------------------------------------------------------------------------
// Bas-relief band: sailors' faces, ship's wheel, anchor (the 1975 tower).
// Drawn with strong light/dark so it reads as carved stone.
// ---------------------------------------------------------------------------
export function reliefTexture() {
  return makeCanvas(1024, 128, (ctx, w, h) => {
    // stone base
    ctx.fillStyle = '#cfc6b2';
    ctx.fillRect(0, 0, w, h);
    // subtle mottling
    const rnd = mulberry32(99);
    for (let i = 0; i < 900; i++) {
      ctx.fillStyle = rnd() < 0.5 ? `rgba(255,255,255,${rnd() * 0.12})` : `rgba(90,82,66,${rnd() * 0.12})`;
      ctx.fillRect(rnd() * w, rnd() * h, 2, 2);
    }
    const units = 16; // repeating medallions around the band
    const cw = w / units;
    for (let i = 0; i < units; i++) {
      const cx = i * cw + cw / 2;
      const kind = i % 3; // 0 face, 1 wheel, 2 anchor
      ctx.save();
      ctx.translate(cx, h / 2);
      // engraved circle frame
      ctx.strokeStyle = 'rgba(70,62,50,0.55)';
      ctx.lineWidth = 3;
      ctx.beginPath(); ctx.arc(0, 0, h * 0.42, 0, 7); ctx.stroke();
      ctx.strokeStyle = 'rgba(255,252,240,0.5)';
      ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.arc(0, -1.5, h * 0.42, 0, 7); ctx.stroke();

      ctx.strokeStyle = 'rgba(60,54,44,0.8)';
      ctx.fillStyle = 'rgba(255,252,240,0.5)';
      if (kind === 0) {
        // face (head + shoulders in profile)
        ctx.lineWidth = 3;
        ctx.beginPath(); ctx.arc(-2, -h * 0.12, h * 0.16, 0, 7); ctx.stroke(); // head
        ctx.beginPath();
        ctx.moveTo(-h * 0.2, h * 0.34);
        ctx.quadraticCurveTo(-h * 0.16, h * 0.06, 0, h * 0.06);
        ctx.quadraticCurveTo(h * 0.18, h * 0.06, h * 0.2, h * 0.34);
        ctx.stroke();
        // cap brim
        ctx.beginPath(); ctx.moveTo(-h * 0.2, -h * 0.2); ctx.lineTo(h * 0.12, -h * 0.2); ctx.stroke();
      } else if (kind === 1) {
        // ship's wheel
        ctx.lineWidth = 3;
        ctx.beginPath(); ctx.arc(0, 0, h * 0.2, 0, 7); ctx.stroke();
        ctx.beginPath(); ctx.arc(0, 0, h * 0.07, 0, 7); ctx.stroke();
        for (let s = 0; s < 8; s++) {
          const a = s * Math.PI / 4;
          ctx.beginPath();
          ctx.moveTo(Math.cos(a) * h * 0.07, Math.sin(a) * h * 0.07);
          ctx.lineTo(Math.cos(a) * h * 0.34, Math.sin(a) * h * 0.34);
          ctx.stroke();
        }
      } else {
        // anchor
        ctx.lineWidth = 3.5;
        ctx.beginPath(); ctx.moveTo(0, -h * 0.3); ctx.lineTo(0, h * 0.22); ctx.stroke();
        ctx.beginPath(); ctx.arc(0, -h * 0.34, h * 0.06, 0, 7); ctx.stroke(); // ring
        ctx.beginPath(); ctx.moveTo(-h * 0.18, -h * 0.12); ctx.lineTo(h * 0.18, -h * 0.12); ctx.stroke(); // stock
        ctx.beginPath(); ctx.arc(0, h * 0.05, h * 0.19, Math.PI * 0.15, Math.PI * 0.85); ctx.stroke(); // flukes
      }
      ctx.restore();
    }
  });
}

// ---------------------------------------------------------------------------
// Granite memorial slab with engraved crew names (faint rows of text).
// ---------------------------------------------------------------------------
export function memorialSlabTexture() {
  const rnd = mulberry32(123);
  return makeCanvas(512, 640, (ctx, w, h) => {
    // granite
    ctx.fillStyle = '#6f6d68';
    ctx.fillRect(0, 0, w, h);
    for (let i = 0; i < 6000; i++) {
      const a = rnd();
      ctx.fillStyle = a < 0.4 ? `rgba(255,255,255,${rnd() * 0.2})` : a < 0.7 ? `rgba(40,40,40,${rnd() * 0.25})` : `rgba(150,150,150,${rnd() * 0.2})`;
      ctx.fillRect(rnd() * w, rnd() * h, 1.6, 1.6);
    }
    // title block
    ctx.fillStyle = 'rgba(230,228,220,0.85)';
    ctx.textAlign = 'center';
    ctx.font = 'bold 34px Georgia, serif';
    ctx.fillText('ПАМЯТИ МОРЯКОВ', w / 2, 70);
    ctx.font = 'italic 22px Georgia, serif';
    ctx.fillText('экипажа транспорта «Фабрициус»', w / 2, 108);
    // rows of names (engraved)
    ctx.fillStyle = 'rgba(235,233,225,0.7)';
    ctx.font = '17px Georgia, serif';
    const syll = ['ИВАНОВ', 'PETR.', 'С.Г.', 'ГРИГОР', 'А.М.', 'КУЗНЕЦОВ', 'Д.И.', 'ОЛЕНИЧ', 'Н.П.', 'БОЯРИН', 'В.С.', 'ТКАЧЕНКО', 'Е.А.', 'РОДЗЕВ', 'М.И.', 'ШЕВЧЕНКО'];
    let y = 165;
    for (let r = 0; r < 16; r++) {
      let x = 40;
      for (let c = 0; c < 3; c++) {
        const nm = syll[(rnd() * syll.length) | 0] + ' ' + syll[(rnd() * syll.length) | 0];
        ctx.fillText(nm, x, y);
        x += 155;
      }
      y += 30;
    }
    // weathering streaks
    ctx.strokeStyle = 'rgba(30,30,30,0.25)';
    for (let i = 0; i < 30; i++) {
      const x = rnd() * w;
      ctx.lineWidth = 1 + rnd() * 2;
      ctx.beginPath(); ctx.moveTo(x, rnd() * h * 0.5); ctx.lineTo(x + (rnd() - 0.5) * 6, h); ctx.stroke();
    }
  });
}

// ---------------------------------------------------------------------------
// Rusty riveted metal (bridge).
// ---------------------------------------------------------------------------
export function rustMetalTexture(seed = 42) {
  const rnd = mulberry32(seed);
  return makeCanvas(256, 256, (ctx, w, h) => {
    ctx.fillStyle = '#6b6f70';
    ctx.fillRect(0, 0, w, h);
    // rivets
    for (let y = 16; y < h; y += 28) {
      const off = (y / 28 % 2) * 14;
      for (let x = 14; x < w; x += 28) {
        ctx.fillStyle = 'rgba(40,42,44,0.8)';
        ctx.beginPath(); ctx.arc(x + off, y, 3.2, 0, 7); ctx.fill();
        ctx.fillStyle = 'rgba(220,220,220,0.6)';
        ctx.beginPath(); ctx.arc(x + off - 1, y - 1, 1.4, 0, 7); ctx.fill();
      }
    }
    // rust patches
    for (let i = 0; i < 220; i++) {
      const t = rnd();
      ctx.fillStyle = t < 0.5 ? `rgba(140,80,40,${rnd() * 0.35})` : `rgba(170,110,60,${rnd() * 0.3})`;
      ctx.beginPath(); ctx.arc(rnd() * w, rnd() * h, 3 + rnd() * 12, 0, 7); ctx.fill();
    }
    // grime streaks
    ctx.strokeStyle = 'rgba(60,40,25,0.3)';
    for (let i = 0; i < 40; i++) {
      const x = rnd() * w;
      ctx.lineWidth = 1 + rnd() * 2;
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x + (rnd() - 0.5) * 10, h); ctx.stroke();
    }
  });
}

// ---------------------------------------------------------------------------
// Sky: soft pale late-afternoon gradient with a warm low sun toward the west.
// ---------------------------------------------------------------------------
export function skyTexture() {
  return makeCanvas(1024, 512, (ctx, w, h) => {
    const g = ctx.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0.0, '#8fb6d9');
    g.addColorStop(0.45, '#bcd3e6');
    g.addColorStop(0.72, '#e8ecdd');
    g.addColorStop(0.88, '#f4e3c2');
    g.addColorStop(1.0, '#f7d9a8');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
    // warm glow near the horizon on the west side (low sun)
    const rg = ctx.createRadialGradient(w * 0.28, h * 0.86, 10, w * 0.28, h * 0.86, w * 0.55);
    rg.addColorStop(0, 'rgba(255,214,150,0.55)');
    rg.addColorStop(0.4, 'rgba(250,200,140,0.18)');
    rg.addColorStop(1, 'rgba(250,200,140,0)');
    ctx.fillStyle = rg;
    ctx.fillRect(0, 0, w, h);
    // a few soft high clouds
    const rnd = mulberry32(8);
    for (let i = 0; i < 14; i++) {
      const x = rnd() * w, y = h * (0.15 + rnd() * 0.4), rw = 60 + rnd() * 160;
      const cg = ctx.createRadialGradient(x, y, 4, x, y, rw);
      cg.addColorStop(0, 'rgba(255,255,255,0.5)');
      cg.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = cg;
      ctx.beginPath(); ctx.ellipse(x, y, rw, rw * 0.4, 0, 0, 7); ctx.fill();
    }
  });
}

export default { rockTexture, pebbleTexture, grassTexture, plasterTexture, strataTexture, reliefTexture, memorialSlabTexture, rustMetalTexture, skyTexture, fbm };
