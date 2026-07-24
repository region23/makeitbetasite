(function () {
  'use strict';
  var page = document.body.getAttribute('data-page') || '';
  var LS = function (k, v) {
    try {
      if (arguments.length === 2) { localStorage.setItem(k, JSON.stringify(v)); return v; }
      return JSON.parse(localStorage.getItem(k) || 'null');
    } catch (e) { return arguments.length === 2 ? v : null; }
  };

  if (/^ch\d+$/.test(page)) {
    var lastRead = LS('ainb2-last-read') || {};
    lastRead[page] = Date.now();
    LS('ainb2-last-read', lastRead);
  }

  // Reading progress bar + persisted position
  var bar = document.querySelector('[data-progress]');
  if (bar) {
    var maxP = 0, raf = null;
    var onScroll = function () {
      if (raf) return;
      raf = requestAnimationFrame(function () {
        raf = null;
        var el = document.documentElement;
        var max = el.scrollHeight - window.innerHeight;
        var p = max > 0 ? Math.min(1, Math.max(0, el.scrollTop / max)) : 0;
        bar.style.width = (p * 100).toFixed(1) + '%';
        if (/^ch\d+$/.test(page) && p > maxP) {
          maxP = p;
          var st = LS('ainb2-progress') || {};
          st[page] = Math.max(st[page] || 0, p);
          LS('ainb2-progress', st);
        }
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Checklists
  var checks = document.querySelectorAll('input[data-reading-check]');
  if (checks.length) {
    var key = 'ainb2-checks-' + page;
    var state = LS(key) || [];
    var paint = function (input, on) {
      input.checked = !!on;
      var span = input.parentElement.querySelector('span');
      if (span) span.style.color = on ? '#7A6B52' : '';
    };
    checks.forEach(function (input) {
      var i = Number(input.getAttribute('data-reading-check'));
      paint(input, state[i]);
      input.addEventListener('change', function () {
        state = LS(key) || [];
        state[i] = input.checked;
        LS(key, state);
        paint(input, state[i]);
      });
    });
  }

  // Maturity scorecard (chapter 2)
  var scoreBtns = document.querySelectorAll('[data-score-btn]');
  if (scoreBtns.length) {
    var LEVELS = ['Эпизодический', 'С поддержкой ИИ', 'Повторяемый', 'Управляемый', 'Адаптивный'];
    var NAMES = { value: 'Ценность и портфель', people: 'Люди и полномочия', context: 'Контекст и память', execution: 'Среда исполнения', control: 'Контур управления', quality: 'Проверка и наблюдаемость', delivery: 'Поставка и эксплуатация', economics: 'Управление и экономика' };
    var KEYS = ['value', 'people', 'context', 'execution', 'control', 'quality', 'delivery', 'economics'];
    var SKEY = 'ainb2-scorecard';
    var render = function () {
      var scores = LS(SKEY) || {};
      scoreBtns.forEach(function (b) {
        var sel = scores[b.getAttribute('data-score-btn')] === Number(b.getAttribute('data-level'));
        b.style.background = sel ? '#171106' : 'transparent';
        b.style.color = sel ? '#FBF7EE' : '#4A4030';
        b.style.borderColor = sel ? '#171106' : 'rgba(23,17,6,0.35)';
        b.style.fontWeight = sel ? '700' : '400';
      });
      KEYS.forEach(function (k) {
        var s = scores[k], has = typeof s === 'number';
        var lbl = document.querySelector('[data-score-label="' + k + '"]');
        var fill = document.querySelector('[data-bar="' + k + '"]');
        var num = document.querySelector('[data-score-num="' + k + '"]');
        if (lbl) lbl.textContent = has ? s + ' — ' + LEVELS[s] : 'не оценено';
        if (fill) { fill.style.width = has ? (s / 4) * 100 + '%' : '0%'; fill.style.background = has && s >= 3 ? '#C2782E' : '#8A7A5E'; }
        if (num) num.textContent = has ? String(s) : '·';
      });
      var vals = KEYS.map(function (k) { return scores[k]; });
      var all = vals.every(function (v) { return typeof v === 'number'; });
      var verdict = document.querySelector('[data-verdict]');
      if (verdict) {
        if (all) {
          var min = Math.min.apply(null, vals);
          verdict.textContent = 'Профиль: ' + vals.join(' / ') + '. Минимум профиля — ' + min + '. ' +
            (min >= 3 ? 'Все восемь измерений не ниже 3: процесс считается управляемым.' : 'Есть измерения ниже 3: процесс пока не считается управляемым.');
        } else {
          verdict.textContent = 'Выберите уровень по всем восьми измерениям. Итогом будет профиль без среднего балла.';
        }
      }
    };
    scoreBtns.forEach(function (b) {
      b.addEventListener('click', function () {
        var scores = LS(SKEY) || {};
        var k = b.getAttribute('data-score-btn'), v = Number(b.getAttribute('data-level'));
        if (scores[k] === v) delete scores[k]; else scores[k] = v;
        LS(SKEY, scores);
        render();
      });
    });
    var exp = document.getElementById('scorecard-export');
    if (exp) exp.addEventListener('click', function () {
      var scores = LS(SKEY) || {};
      var lines = ['# Карта зрелости — профиль процесса', '', 'Дата: ' + new Date().toISOString().slice(0, 10), '', '| Измерение | Балл | Уровень |', '|---|---|---|'];
      KEYS.forEach(function (k) {
        var s = scores[k], has = typeof s === 'number';
        lines.push('| ' + NAMES[k] + ' | ' + (has ? s : '—') + ' | ' + (has ? LEVELS[s] : 'не оценено') + ' |');
      });
      var vals = KEYS.map(function (k) { return scores[k]; });
      if (vals.every(function (v) { return typeof v === 'number'; })) lines.push('', 'Минимум профиля: ' + Math.min.apply(null, vals));
      lines.push('', 'Источник: AI-native компания v2 — makeitbeta.ru/ai_native_book/');
      var blob = new Blob([lines.join('\n')], { type: 'text/markdown' });
      var a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'maturity-profile.md';
      a.click();
      URL.revokeObjectURL(a.href);
    });
    var clr = document.getElementById('scorecard-clear');
    if (clr) clr.addEventListener('click', function () {
      LS(SKEY, {});
      LS('ainb2-checks-' + page, []);
      document.querySelectorAll('input[data-reading-check]').forEach(function (i) {
        i.checked = false;
        var span = i.parentElement.querySelector('span');
        if (span) span.style.color = '';
      });
      render();
    });
    render();
  }

  // Copy-example buttons (chapter 12)
  document.querySelectorAll('[data-copy-example]').forEach(function (b) {
    b.addEventListener('click', function () {
      navigator.clipboard.writeText(b.getAttribute('data-copy-example')).then(function () {
        var t = b.textContent;
        b.textContent = 'Скопировано ✓';
        setTimeout(function () { b.textContent = t; }, 1600);
      });
    });
  });

  // Continue banner (hub)
  var banner = document.querySelector('[data-continue-banner]');
  if (banner) {
    var st = LS('ainb2-progress') || {};
    var pages = {
      ch1: ['главе 1', './chapter-01.html'],
      ch2: ['главе 2', './chapter-02.html'],
      ch3: ['главе 3', './chapter-03.html'],
      ch4: ['главе 4', './chapter-04.html'],
      ch5: ['главе 5', './chapter-05.html'],
      ch6: ['главе 6', './chapter-06.html'],
      ch7: ['главе 7', './chapter-07.html'],
      ch8: ['главе 8', './chapter-08.html'],
      ch9: ['главе 9', './chapter-09.html'],
      ch10: ['главе 10', './chapter-10.html'],
      ch11: ['главе 11', './chapter-11.html'],
      ch12: ['главе 12', './chapter-12.html']
    };
    var lastRead = LS('ainb2-last-read') || {};
    var candidates = Object.keys(pages).filter(function (k) {
      var p = st[k];
      return typeof p === 'number' && p > 0.02 && p < 0.98;
    });
    var timed = candidates.filter(function (k) {
      return typeof lastRead[k] === 'number' && isFinite(lastRead[k]);
    });
    timed.sort(function (a, b) { return lastRead[b] - lastRead[a]; });
    var best = timed[0] || null;
    if (!best) {
      candidates.forEach(function (k) {
        if (!best || st[k] > st[best]) best = k;
      });
    }
    if (best) {
      banner.querySelector('[data-continue-label]').textContent = 'на ' + pages[best][0] + ' · ' + Math.round(st[best] * 100) + '%';
      banner.querySelector('[data-continue-link]').setAttribute('href', pages[best][1]);
      banner.style.display = 'inline-flex';
    }
  }
})();
