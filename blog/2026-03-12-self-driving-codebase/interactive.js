/* Interactive visualizations for Self-Driving Codebase article
   Vanilla JS, no dependencies. Replaces static SVG images. */

(function () {
  'use strict';

  const C = {
    accent: '#C41E3A',
    phase2: '#8B4513',
    phase3: '#2E5A1C',
    phase4: '#1A4A6E',
    textMuted: '#666666',
    border: '#D0D0D0',
    borderLight: '#E0E0E0',
    bg: '#FFFFFF',
  };
  const COLORS = [C.accent, C.phase2, C.phase3, C.phase4];
  const FONT = 'Inter, system-ui, sans-serif';

  /* ========== HOURGLASS CINCH (SDLC Pipeline) ========== */
  function initHourglass(container, opts) {
    const W = 1000, H = 240;
    const TOP = 80, BOT = 220, MID = 150;
    const stages = opts.stages || ['PLAN', 'CODE', 'REVIEW', 'TEST', 'DEPLOY'];
    const showLabels = opts.labels !== false;
    const labelSize = opts.labelSize || 13;

    const div = document.createElement('div');
    div.style.cssText = 'width:100%;cursor:crosshair;padding:12px 0;';
    container.appendChild(div);

    const svg = createSVG(W, H);
    div.appendChild(svg);

    // Calculate stage X positions
    const margin = 140;
    const spread = W - 280;
    const stageXs = stages.map((_, i) => margin + (spread / (stages.length - 1)) * i);
    const centerIdx = Math.floor(stages.length / 2);
    const centerX = stageXs[centerIdx];

    // State
    let cinchX = centerX, cinchAmount = 0;
    let targetCinchX = centerX, targetAmount = 0;
    let isHovering = false;
    let phase = 'free-flow'; // free-flow → cinching → holding → releasing
    let phaseStart = performance.now();
    let items = [];
    let itemId = 0;
    let lastSpawn = 0;

    // Create initial items
    for (let i = 0; i < 20; i++) {
      items.push(makeItem(50 + Math.random() * (W - 100)));
    }

    // SVG elements
    const fillPath = el('path', { fill: C.bg, opacity: '0.45' });
    const topPath = el('path', { fill: 'none', stroke: C.border, 'stroke-width': '1.5' });
    const botPath = el('path', { fill: 'none', stroke: C.border, 'stroke-width': '1.5' });
    svg.append(el('rect', { x: 0, y: 0, width: W, height: H, fill: 'transparent' }));
    svg.append(fillPath, topPath, botPath);

    // Labels
    const labelEls = [], dashEls = [];
    if (showLabels) {
      stages.forEach((s, i) => {
        const t = el('text', {
          x: stageXs[i], y: 30, 'text-anchor': 'middle',
          'font-family': FONT, 'font-size': labelSize, 'font-weight': '600',
          'letter-spacing': '0.1em', fill: C.textMuted
        });
        t.textContent = s;
        svg.append(t);
        labelEls.push(t);

        const d = el('line', {
          x1: stageXs[i], y1: 40, x2: stageXs[i], y2: TOP - 5,
          stroke: '#CCCCCC', 'stroke-width': '1', 'stroke-dasharray': '3,3'
        });
        svg.append(d);
        dashEls.push(d);
      });
    }

    // Cinch indicator line
    const cinchLine = el('line', {
      x1: centerX, y1: TOP - 8, x2: centerX, y2: BOT + 8,
      stroke: C.accent, 'stroke-width': '1', 'stroke-dasharray': '4,4', opacity: '0'
    });
    svg.append(cinchLine);

    // Item circles container
    const itemGroup = el('g');
    svg.append(itemGroup);

    function makeItem(x) {
      itemId++;
      return {
        id: itemId,
        x: x,
        baseY: MID + (Math.random() - 0.5) * 30,
        color: COLORS[itemId % 4],
        el: null
      };
    }

    function lerp(a, b, t) { return a + (b - a) * t; }
    function easeInOut(t) { return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; }

    function buildPaths(cx, amt) {
      const topY = lerp(TOP, MID, amt);
      const botY = lerp(BOT, MID, amt);
      const R = 80;
      const left = 40, right = W - 40;

      const mkPath = (baseY, y) =>
        `M ${left} ${baseY} L ${cx - 40 - R} ${baseY} C ${cx - 40} ${baseY}, ${cx - 40} ${y}, ${cx} ${y} C ${cx + 40} ${y}, ${cx + 40} ${baseY}, ${cx + 40 + R} ${baseY} L ${right} ${baseY}`;

      const tp = mkPath(TOP, topY);
      const bp = mkPath(BOT, botY);
      const fp = tp + ` L ${right} ${BOT} L ${cx + 40 + R} ${BOT} C ${cx + 40} ${BOT}, ${cx + 40} ${botY}, ${cx} ${botY} C ${cx - 40} ${botY}, ${cx - 40} ${BOT}, ${cx - 40 - R} ${BOT} L ${left} ${BOT} Z`;

      return { tp, bp, fp };
    }

    function tick(now) {
      const dt = now - phaseStart;

      if (isHovering) {
        targetAmount = 0.75;
      } else {
        targetCinchX = centerX;
        if (phase === 'free-flow') {
          targetAmount = 0;
          if (dt >= 800) { phase = 'cinching'; phaseStart = now; }
        } else if (phase === 'cinching') {
          const p = Math.min(dt / 600, 1);
          targetAmount = easeInOut(p) * 0.75;
          if (p >= 1) { phase = 'holding'; phaseStart = now; }
        } else if (phase === 'holding') {
          targetAmount = 0.75;
          if (dt >= 3500) { phase = 'releasing'; phaseStart = now; }
        } else if (phase === 'releasing') {
          const p = Math.min(dt / 450, 1);
          targetAmount = (1 - easeInOut(p)) * 0.75;
          if (p >= 1) { phase = 'free-flow'; phaseStart = now; }
        }
      }

      cinchX = lerp(cinchX, targetCinchX, 0.12);
      cinchAmount = lerp(cinchAmount, targetAmount, 0.12);

      // Spawn items
      if (now - lastSpawn > 300) {
        lastSpawn = now;
        items.push(makeItem(20));
      }

      // Update items
      items = items.map(it => {
        const dx = it.x - cinchX;
        let speed;
        if (cinchAmount < 0.05) {
          speed = 1.2 + Math.random() * 0.2;
        } else if (dx < -80) {
          speed = 1.8 + Math.random() * 0.3;
        } else if (dx < 40) {
          speed = lerp(1.2, 0.1, cinchAmount / 0.75) + Math.random() * 0.1;
        } else {
          speed = 0.5 + Math.random() * 0.2;
        }
        let yOff = it.baseY - MID;
        if (Math.abs(dx) < 60) {
          yOff *= 1 - cinchAmount * (1 - Math.abs(dx) / 60);
        }
        return { ...it, x: it.x + speed, renderY: MID + yOff };
      }).filter(it => it.x < W + 20);

      // Render paths
      const { tp, bp, fp } = buildPaths(cinchX, cinchAmount);
      fillPath.setAttribute('d', fp);
      topPath.setAttribute('d', tp);
      botPath.setAttribute('d', bp);

      // Cinch line
      if (cinchAmount > 0.1) {
        cinchLine.setAttribute('x1', cinchX);
        cinchLine.setAttribute('x2', cinchX);
        cinchLine.setAttribute('opacity', Math.min(cinchAmount / 0.3, 0.5));
      } else {
        cinchLine.setAttribute('opacity', '0');
      }

      // Labels highlight
      if (showLabels && cinchAmount > 0.1) {
        const closest = stageXs.reduce((best, sx, i) =>
          Math.abs(sx - cinchX) < Math.abs(stageXs[best] - cinchX) ? i : best, 0);
        labelEls.forEach((l, i) => l.setAttribute('fill', i === closest ? C.accent : C.textMuted));
      }

      // Render items
      // Reuse existing circles or create new ones
      while (itemGroup.children.length > items.length) {
        itemGroup.removeChild(itemGroup.lastChild);
      }
      items.forEach((it, i) => {
        let circle = itemGroup.children[i];
        if (!circle) {
          circle = el('circle', { r: 5 });
          itemGroup.appendChild(circle);
        }
        circle.setAttribute('cx', it.x);
        circle.setAttribute('cy', it.renderY || it.baseY);
        circle.setAttribute('fill', it.color);
        circle.setAttribute('opacity', '0.8');
      });

      requestAnimationFrame(tick);
    }

    div.addEventListener('pointermove', (e) => {
      isHovering = true;
      const rect = svg.getBoundingClientRect();
      targetCinchX = Math.max(80, Math.min(W - 80, (e.clientX - rect.left) / rect.width * W));
    });
    div.addEventListener('pointerleave', () => {
      isHovering = false;
      phase = 'free-flow';
      phaseStart = performance.now();
    });

    requestAnimationFrame(tick);
  }

  /* ========== FALSE SUMMIT ========== */
  function initFalseSummit(container) {
    const W = 1200, H = 550;
    const div = document.createElement('div');
    div.style.cssText = 'width:100%;cursor:crosshair;';
    container.appendChild(div);

    const svg = createSVG(W, H);
    div.appendChild(svg);

    const mountainPath = 'M0,530 C60,525 120,515 180,500 C240,480 300,450 340,430 C360,422 380,418 400,418 C420,418 440,422 460,430 C520,460 580,480 640,485 C700,485 760,470 820,430 C880,380 940,300 1000,220 C1060,150 1120,90 1200,30';
    const fillSuffix = ' L1200,550 L0,550 Z';

    // Layers (back to front)
    const layer3 = el('path', { d: mountainPath + fillSuffix, fill: '#DCDCDC', opacity: '0.2', transform: 'translate(20,45) scale(0.97,1)' });
    const layer2 = el('path', { d: mountainPath + fillSuffix, fill: '#E0E0E0', opacity: '0.4', transform: 'translate(10,25) scale(0.99,1)' });

    // Gradient
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    defs.innerHTML = '<linearGradient id="fs-grad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#E4E4E4"/><stop offset="100%" stop-color="#EBEBEB"/></linearGradient>';
    svg.append(defs);

    const mainFill = el('path', { d: mountainPath + fillSuffix, fill: 'url(#fs-grad)' });
    const mainStroke = el('path', { d: mountainPath, fill: 'none', stroke: '#D0D0D0', 'stroke-width': '1.5' });

    // Summit marker
    const marker = el('circle', { cx: 400, cy: 418, r: 3, fill: C.accent });

    // Labels
    const labelTop = el('text', {
      x: 400, y: 370, 'text-anchor': 'middle', 'font-family': FONT,
      'font-size': 15, 'font-weight': '600', 'letter-spacing': '0.1em', fill: '#888'
    });
    labelTop.textContent = 'AGENTS ON DEVELOPER MACHINES';

    const labelMain = el('text', {
      x: 400, y: 394, 'text-anchor': 'middle',
      'font-family': '"Playfair Display", Georgia, serif',
      'font-style': 'italic', 'font-size': 28, 'font-weight': '400', fill: '#1A1A1A'
    });
    labelMain.textContent = 'The false summit';

    // Steps along the right slope
    const steps = [
      { x: 580, y: 478, label: 'Step 01', sub: 'Establish background agent primitives' },
      { x: 780, y: 410, label: 'Step 02', sub: 'Find your systems bottlenecks' },
      { x: 1020, y: 240, label: 'Step 03', sub: 'Scale your software factory' },
    ];

    svg.append(layer3, layer2, mainFill, mainStroke, marker, labelTop, labelMain);

    // Mouse parallax state
    let mouseX = 0.5, mouseY = 0.5;

    steps.forEach(s => {
      const g = el('g');
      const st = el('text', {
        x: s.x, y: s.y - 20, 'font-family': FONT,
        'font-size': 11, 'font-weight': '600', 'letter-spacing': '0.08em', fill: '#888'
      });
      st.textContent = s.label;
      const st2 = el('text', {
        x: s.x, y: s.y - 4, 'font-family': '"Playfair Display", Georgia, serif',
        'font-style': 'italic', 'font-size': 16, fill: '#444'
      });
      st2.textContent = s.sub;
      const dot = el('circle', { cx: s.x, cy: s.y, r: 3, fill: C.accent, opacity: '0.6' });
      g.append(st, st2, dot);
      svg.append(g);
    });

    function tick() {
      // Subtle parallax on back layers
      const dx = (mouseX - 0.5) * 15;
      const dy = (mouseY - 0.5) * 8;
      layer3.setAttribute('transform', `translate(${20 + dx * 0.6},${45 + dy * 0.4}) scale(0.97,1)`);
      layer2.setAttribute('transform', `translate(${10 + dx * 0.3},${25 + dy * 0.2}) scale(0.99,1)`);
      requestAnimationFrame(tick);
    }

    div.addEventListener('pointermove', (e) => {
      const rect = svg.getBoundingClientRect();
      mouseX = (e.clientX - rect.left) / rect.width;
      mouseY = (e.clientY - rect.top) / rect.height;
    });

    requestAnimationFrame(tick);
  }

  /* ========== PATTERN DIAGRAMS (Architecture) ========== */
  function initPattern1(container) {
    const W = 380, H = 170;
    const div = document.createElement('div');
    div.style.cssText = 'width:100%;max-width:420px;';
    container.appendChild(div);

    const svg = createSVG(W, H);
    div.appendChild(svg);

    // Outer rect
    svg.append(el('rect', { x: 0.5, y: 0.5, width: W - 1, height: H - 1, rx: 5, stroke: C.borderLight, fill: 'none' }));
    // VM label
    const vmLabel = el('text', { x: 12, y: 18, fill: C.accent, 'font-family': FONT, 'font-size': 10, 'font-weight': '600', 'letter-spacing': '0.05em' });
    vmLabel.textContent = 'VM';
    svg.append(vmLabel);

    // Inner rect
    svg.append(el('rect', { x: 12, y: 26, width: 356, height: 132, rx: 4, stroke: C.accent, fill: 'rgba(196,30,58,0.02)' }));
    const dcLabel = el('text', { x: 24, y: 44, fill: C.accent, 'font-family': FONT, 'font-size': 10, 'font-weight': '600', 'letter-spacing': '0.05em' });
    dcLabel.textContent = 'Dev Container';
    svg.append(dcLabel);

    const leftItems = ['Agent', 'Codebase', 'Test suite', 'Build system'];
    const rightItems = ['Databases', 'Internal APIs', 'Secrets', 'Private registries'];

    leftItems.forEach((t, i) => {
      const y = 64 + i * 20;
      const opacity = i === 0 ? '1' : '0.5';
      svg.append(el('circle', { cx: 24, cy: y, r: 2, fill: C.accent, opacity }));
      const txt = el('text', { x: 32, y: y + 4, fill: i === 0 ? '#1A1A1A' : '#4A4A4A', 'font-family': FONT, 'font-size': 11 });
      txt.textContent = t;
      svg.append(txt);
    });

    // Divider
    svg.append(el('line', { x1: 180, y1: 56, x2: 180, y2: 148, stroke: C.borderLight }));

    rightItems.forEach((t, i) => {
      const y = 64 + i * 20;
      svg.append(el('circle', { cx: 192, cy: y, r: 2, fill: C.accent, opacity: '0.5' }));
      const txt = el('text', { x: 200, y: y + 4, fill: '#4A4A4A', 'font-family': FONT, 'font-size': 11 });
      txt.textContent = t;
      svg.append(txt);
    });

    // Hover glow effect
    const glowRect = el('rect', { x: 12, y: 26, width: 356, height: 132, rx: 4, stroke: C.accent, fill: 'rgba(196,30,58,0.04)', opacity: '0' });
    svg.append(glowRect);

    div.addEventListener('mouseenter', () => glowRect.setAttribute('opacity', '1'));
    div.addEventListener('mouseleave', () => glowRect.setAttribute('opacity', '0'));
  }

  function initPattern2(container) {
    const W = 380, H = 170;
    const div = document.createElement('div');
    div.style.cssText = 'width:100%;max-width:420px;';
    container.appendChild(div);

    const svg = createSVG(W, H);
    div.appendChild(svg);

    // Left box - Your Server
    svg.append(el('rect', { x: 0.5, y: 0.5, width: 152, height: H - 1, rx: 5, stroke: C.borderLight, fill: 'none' }));
    const srvLabel = el('text', { x: 12, y: 18, fill: '#999', 'font-family': FONT, 'font-size': 10, 'font-weight': '600', 'letter-spacing': '0.05em' });
    srvLabel.textContent = 'Your Server';
    svg.append(srvLabel);

    ['Agent', 'Secrets', 'State', 'Reasoning'].forEach((t, i) => {
      const y = 40 + i * 24;
      svg.append(el('circle', { cx: 16, cy: y, r: 2, fill: i === 0 ? '#999' : '#CCC' }));
      const txt = el('text', { x: 24, y: y + 4, fill: i === 0 ? '#1A1A1A' : '#4A4A4A', 'font-family': FONT, 'font-size': 11 });
      txt.textContent = t;
      svg.append(txt);
    });

    // Right box - Sandbox
    svg.append(el('rect', { x: 227.5, y: 0.5, width: 152, height: H - 1, rx: 5, stroke: C.borderLight, fill: 'none' }));
    const sbLabel = el('text', { x: 240, y: 18, fill: '#999', 'font-family': FONT, 'font-size': 10, 'font-weight': '600', 'letter-spacing': '0.05em' });
    sbLabel.textContent = 'Sandbox';
    svg.append(sbLabel);
    const sbSub = el('text', { x: 240, y: 31, fill: '#CCC', 'font-family': FONT, 'font-size': 9, 'letter-spacing': '0.05em' });
    sbSub.textContent = '(container)';
    svg.append(sbSub);

    ['Execute code', 'Return result'].forEach((t, i) => {
      const y = 52 + i * 24;
      svg.append(el('circle', { cx: 244, cy: y, r: 2, fill: '#CCC' }));
      const txt = el('text', { x: 252, y: y + 4, fill: '#4A4A4A', 'font-family': FONT, 'font-size': 11 });
      txt.textContent = t;
      svg.append(txt);
    });

    // Arrows
    svg.append(el('line', { x1: 153, y1: 68, x2: 220, y2: 68, stroke: '#CCC' }));
    svg.append(el('polygon', { points: '220,65 227,68 220,71', fill: '#CCC' }));
    svg.append(el('line', { x1: 227, y1: 88, x2: 160, y2: 88, stroke: '#CCC' }));
    svg.append(el('polygon', { points: '160,85 153,88 160,91', fill: '#CCC' }));

    const apiLabel = el('text', { x: 190, y: 60, 'text-anchor': 'middle', fill: '#BBB', 'font-family': FONT, 'font-size': 9, 'font-weight': '600', 'letter-spacing': '0.05em' });
    apiLabel.textContent = 'API';
    svg.append(apiLabel);

    // Animated data flow dots
    const dot1 = el('circle', { r: 3, fill: C.accent, opacity: '0' });
    const dot2 = el('circle', { r: 3, fill: C.phase3, opacity: '0' });
    svg.append(dot1, dot2);

    let anim = false;
    function animateDots(now) {
      if (!anim) { dot1.setAttribute('opacity', '0'); dot2.setAttribute('opacity', '0'); return; }
      const t1 = (now % 2000) / 2000;
      const t2 = ((now + 1000) % 2000) / 2000;
      // Right arrow
      dot1.setAttribute('cx', 153 + t1 * 74);
      dot1.setAttribute('cy', 68);
      dot1.setAttribute('opacity', t1 < 0.9 ? '0.8' : '0');
      // Left arrow
      dot2.setAttribute('cx', 227 - t2 * 74);
      dot2.setAttribute('cy', 88);
      dot2.setAttribute('opacity', t2 < 0.9 ? '0.8' : '0');
      requestAnimationFrame(animateDots);
    }

    container.addEventListener('mouseenter', () => { anim = true; requestAnimationFrame(animateDots); });
    container.addEventListener('mouseleave', () => { anim = false; });
  }

  /* ========== HELPERS ========== */
  function createSVG(w, h) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', `0 0 ${w} ${h}`);
    svg.style.cssText = 'width:100%;height:auto;display:block;';
    return svg;
  }

  function el(tag, attrs) {
    const e = document.createElementNS('http://www.w3.org/2000/svg', tag);
    if (attrs) Object.entries(attrs).forEach(([k, v]) => e.setAttribute(k, v));
    return e;
  }

  /* ========== INIT ========== */
  function init() {
    const sdlc = document.querySelector('.interactive-sdlc');
    if (sdlc) initHourglass(sdlc, { stages: ['PLAN', 'CODE', 'REVIEW', 'TEST', 'DEPLOY'], labels: true });

    const summit = document.querySelector('.interactive-false-summit');
    if (summit) initFalseSummit(summit);

    const p1 = document.querySelector('.interactive-pattern1');
    if (p1) initPattern1(p1);

    const p2 = document.querySelector('.interactive-pattern2');
    if (p2) initPattern2(p2);

    const factory = document.querySelector('.interactive-factory');
    if (factory) initHourglass(factory, {
      stages: ['CODE', 'REVIEW', 'TEST'],
      labels: true, labelSize: 10
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
