(() => {
  'use strict';
  const data = window.SPLASH_BENCHMARK;
  if (!data) return;
  const ns = 'http://www.w3.org/2000/svg';
  const fmt = (v, decimals = 1) => new Intl.NumberFormat('ru-RU', {maximumFractionDigits: decimals}).format(v);
  function el(name, attrs = {}, text = '') {
    const node = document.createElementNS(ns, name);
    Object.entries(attrs).forEach(([key, value]) => node.setAttribute(key, value));
    if (text) node.textContent = text;
    return node;
  }
  function canvas(host, height, title) {
    const w = Math.max(260, Math.round(host.clientWidth));
    const svg = el('svg', {viewBox: `0 0 ${w} ${height}`, role: 'img', 'aria-label': title});
    svg.append(el('title', {}, title));
    host.replaceChildren(svg);
    return {svg, w};
  }
  function text(svg, x, y, value, cls = '', anchor = 'start') {
    svg.append(el('text', {x, y, class: cls, 'text-anchor': anchor}, value));
  }
  function vendor(host) {
    const {svg, w} = canvas(host, 298, 'Скорость генерации Qwen3.8-27B в тесте Inco, токенов в секунду. Splash: 74, 55, 55, 54.');
    const left = 32, right = w - 20, top = 28, bottom = 254;
    const x = i => left + i * (right - left) / 3;
    const y = v => bottom - v / 80 * (bottom - top);
    [0, 20, 40, 60, 80].forEach(v => {
      svg.append(el('line', {x1: left, x2: right, y1: y(v), y2: y(v), class: 'chart-grid'}));
      text(svg, left - 8, y(v) + 4, v.toString(), 'axis-label', 'end');
    });
    data.vendor.buckets.forEach((v, i) => text(svg, x(i), bottom + 24, v, 'axis-label', i === 0 ? 'start' : i === 3 ? 'end' : 'middle'));
    Object.entries(data.vendor.series).forEach(([name, values]) => {
      const cls = `series-${name.toLowerCase()}`;
      svg.append(el('polyline', {points: values.map((v, i) => `${x(i)},${y(v)}`).join(' '), class: `series-line ${cls}`}));
      values.forEach((v, i) => {
        const circle = el('circle', {cx: x(i), cy: y(v), r: 4, class: cls});
        circle.append(el('title', {}, `${name}, ${data.vendor.buckets[i]}: ${v} токенов/с`));
        svg.append(circle);
        if (name === 'Splash') text(svg, x(i), y(v) - 12, v.toString(), 'value-label', i === 0 ? 'start' : i === 3 ? 'end' : 'middle');
      });
    });
    text(svg, left, 15, 'токенов/с', 'axis-label');
  }
  function paired(host, rows, mode, max, ticks, unit, title) {
    const rowH = 104, height = rows.length * rowH + 45;
    const {svg, w} = canvas(host, height, title);
    const left = 4, right = w - 76, plotW = right - left;
    const axisY = rows.length * rowH + 5;
    ticks.forEach(tick => {
      const x = left + tick / max * plotW;
      svg.append(el('line', {x1: x, x2: x, y1: 30, y2: axisY, class: 'chart-grid'}));
      text(svg, x, axisY + 20, fmt(tick, 0), 'axis-label', tick === 0 ? 'start' : 'middle');
    });
    text(svg, w - 2, axisY + 20, unit, 'axis-label', 'end');
    rows.forEach((row, i) => {
      const y = i * rowH;
      text(svg, left, y + 19, row.label, 'value-label');
      if (row.saving !== null && row.saving !== undefined) text(svg, w - 2, y + 19, `−${Math.round(row.saving)}%`, 'saving-label', 'end');
      ['Ollama', 'Splash'].forEach((engine, index) => {
        const value = row[engine.toLowerCase()];
        const by = y + 35 + index * 26;
        if (value === null) {
          if (engine === 'Ollama' && row.timeout) {
            svg.append(el('line', {x1: left, x2: right, y1: by + 9, y2: by + 9, class: 'timeout-line'}));
            text(svg, left + 4, by + 4, 'Таймаут через 120 мин', 'axis-label');
          } else text(svg, left + 4, by + 14, 'Следующий ход не запускался', 'axis-label');
          return;
        }
        const plotted = mode === 'relative' ? value / row.ollama * 100 : value;
        const bar = el('rect', {x: left, y: by, width: Math.max(1, plotted / max * plotW), height: 18, rx: 3, class: `series-${engine.toLowerCase()}`});
        const label = mode === 'relative' ? `${fmt(plotted, 0)}%` : `${fmt(value, mode === 'seconds' ? 2 : 1)}`;
        bar.append(el('title', {}, `${row.label}, ${engine}: ${label}${mode === 'relative' ? ' от времени Ollama' : ' ' + unit}`));
        svg.append(bar);
        text(svg, w - 2, by + 14, label, 'value-label', 'end');
      });
    });
  }
  const states = {basic: 'relative', context: 'first'};
  const basicHost = document.getElementById('basic-chart');
  const contextHost = document.getElementById('context-chart');
  const vendorHost = document.getElementById('vendor-chart');
  function basic() {
    const relative = states.basic === 'relative';
    paired(basicHost, data.basic, states.basic, relative ? 100 : 200, relative ? [0,25,50,75,100] : [0,50,100,150,200], relative ? '%' : 'с', relative ? 'Полное время ответа относительно Ollama. Ollama принята за 100%. Меньше лучше.' : 'Полное время ответа в секундах. Меньше лучше.');
    document.getElementById('basic-note').textContent = relative ? 'Полное время ответа. Ollama = 100%.' : 'Полное время ответа, секунды.';
  }
  function context() {
    const first = states.context === 'first';
    const rows = data.context.map(row => ({label: row.label, ollama: row[first ? 'first' : 'followup'].ollama === null ? null : row[first ? 'first' : 'followup'].ollama / (first ? 60 : 1), splash: row[first ? 'first' : 'followup'].splash / (first ? 60 : 1), saving: row[first ? 'first' : 'followup'].saving, timeout: first && row.first.ollama === null}));
    paired(contextHost, rows, first ? 'minutes' : 'seconds', first ? 120 : 6, first ? [0,30,60,90,120] : [0,1,2,3,4,5,6], first ? 'мин' : 'с', first ? 'Первый запрос на большом контексте, минуты. Таймаут не считается завершённым ответом.' : 'Следующий ход с общим префиксом, секунды. Для Ollama 256K запрос пропущен после таймаута.');
    document.getElementById('context-note').textContent = first ? 'Ollama 256K: таймаут, процент не вычисляется.' : 'Продолжение с заданным правильным ответом в истории.';
  }
  document.querySelectorAll('[data-chart-controls]').forEach(group => {
    group.hidden = false;
    group.querySelectorAll('button').forEach(button => button.addEventListener('click', () => {
      states[group.dataset.chartControls] = button.dataset.mode;
      group.querySelectorAll('button').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
      if (group.dataset.chartControls === 'basic') basic(); else context();
    }));
  });
  let pending;
  const render = () => {vendor(vendorHost); basic(); context();};
  const observer = new ResizeObserver(() => {
    cancelAnimationFrame(pending);
    pending = requestAnimationFrame(render);
  });
  [vendorHost, basicHost, contextHost].forEach(host => observer.observe(host));
  render();
})();
