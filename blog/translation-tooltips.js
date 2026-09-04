(function () {
  'use strict';

  var data = window.AI_NATIVE_SDLC_ORIGINALS;
  var article = document.querySelector('.post-body--sdlc');
  var toggle = document.querySelector('[data-original-toggle]');

  if (!data || !article || !toggle || !Array.isArray(data.blocks)) return;

  var targetSelector = 'h2,h3,h4,p,li,th,td,dt,dd,figcaption,b';
  var storageKey = 'ai-native-sdlc-original-tooltips';
  var sentenceSpans = [];
  var activeSentenceId = null;
  var pinned = false;
  var enabled = readPreference();
  var lastPointerType = 'mouse';

  var tooltip = document.createElement('div');
  tooltip.className = 'original-tooltip';
  tooltip.id = 'translationOriginalTooltip';
  tooltip.setAttribute('role', 'tooltip');
  tooltip.setAttribute('aria-hidden', 'true');
  tooltip.hidden = true;

  var tooltipLabel = document.createElement('span');
  tooltipLabel.className = 'original-tooltip__label';
  tooltipLabel.textContent = 'English original';

  var tooltipText = document.createElement('span');
  tooltipText.className = 'original-tooltip__text';

  tooltip.appendChild(tooltipLabel);
  tooltip.appendChild(tooltipText);
  document.body.appendChild(tooltip);

  var targets = Array.prototype.filter.call(article.querySelectorAll(targetSelector), function (node) {
    if (!normalize(node.textContent)) return false;
    if (node.closest('pre, style, script, nav')) return false;

    return !Array.prototype.some.call(node.querySelectorAll(targetSelector), function (child) {
      return Boolean(normalize(child.textContent));
    });
  });

  if (targets.length !== data.blocks.length || targets.length !== data.fingerprints.length) {
    console.warn('English originals: article structure does not match the source map.');
    return;
  }

  targets.forEach(function (target, blockIndex) {
    var original = data.blocks[blockIndex];
    if (!original || fingerprint(normalize(target.textContent)) !== data.fingerprints[blockIndex]) return;

    decorateBlock(target, original, blockIndex);
  });

  updateState();

  toggle.addEventListener('click', function () {
    enabled = !enabled;
    writePreference(enabled);
    updateState();
  });

  article.addEventListener('pointerover', function (event) {
    if (!enabled || event.pointerType === 'touch') return;
    var sentence = event.target.closest('.original-sentence');
    if (!sentence || !article.contains(sentence)) return;

    pinned = false;
    showTooltip(sentence, event.clientX, event.clientY);
  });

  article.addEventListener('pointerdown', function (event) {
    lastPointerType = event.pointerType || 'mouse';
  });

  article.addEventListener('pointermove', function (event) {
    if (!enabled || pinned || tooltip.hidden || event.pointerType === 'touch') return;
    positionTooltip(event.clientX, event.clientY);
  });

  article.addEventListener('pointerout', function (event) {
    if (pinned) return;
    var sentence = event.target.closest('.original-sentence');
    if (!sentence) return;

    var nextSentence = event.relatedTarget && event.relatedTarget.closest
      ? event.relatedTarget.closest('.original-sentence')
      : null;

    if (nextSentence && nextSentence.dataset.sentenceId === sentence.dataset.sentenceId) return;
    hideTooltip();
  });

  article.addEventListener('click', function (event) {
    if (!enabled || (lastPointerType !== 'touch' && lastPointerType !== 'pen')) return;
    var sentence = event.target.closest('.original-sentence');
    if (!sentence || sentence.closest('a')) return;

    pinned = activeSentenceId === sentence.dataset.sentenceId && !tooltip.hidden ? !pinned : true;
    if (pinned) {
      var rect = sentence.getBoundingClientRect();
      showTooltip(sentence, rect.left + rect.width / 2, rect.bottom);
    } else {
      hideTooltip();
    }
  });

  article.addEventListener('focusin', function (event) {
    if (!enabled || lastPointerType === 'touch' || lastPointerType === 'pen') return;
    var sentence = event.target.closest('.original-sentence--focus');
    if (!sentence) return;

    var rect = sentence.getBoundingClientRect();
    pinned = true;
    showTooltip(sentence, rect.left + rect.width / 2, rect.bottom);
  });

  article.addEventListener('focusout', function (event) {
    if (!event.target.closest('.original-sentence--focus')) return;
    pinned = false;
    hideTooltip();
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Tab') lastPointerType = 'keyboard';
    if (event.key !== 'Escape') return;
    pinned = false;
    hideTooltip();
  });

  document.addEventListener('click', function (event) {
    if (!pinned || event.target.closest('.original-sentence, [data-original-toggle]')) return;
    pinned = false;
    hideTooltip();
  });

  function decorateBlock(target, original, blockIndex) {
    var russianSentences = splitSentences(target.textContent, 'ru');
    var englishSentences = splitSentences(original, 'en');
    if (!russianSentences.length || !englishSentences.length) return;

    var mappedOriginals = alignSentences(russianSentences, englishSentences);
    var textNodes = [];
    var walker = document.createTreeWalker(target, NodeFilter.SHOW_TEXT);
    var cursor = 0;
    var current;

    while ((current = walker.nextNode())) {
      var start = cursor;
      var end = start + current.data.length;
      textNodes.push({ node: current, start: start, end: end, pieces: [] });
      cursor = end;
    }

    russianSentences.forEach(function (sentence, sentenceIndex) {
      var originalSentence = mappedOriginals[sentenceIndex] || original;
      var sentenceId = blockIndex + '-' + sentenceIndex;

      textNodes.forEach(function (record) {
        var start = Math.max(sentence.start, record.start);
        var end = Math.min(sentence.end, record.end);
        if (start >= end) return;

        record.pieces.push({
          start: start - record.start,
          end: end - record.start,
          original: originalSentence,
          sentenceId: sentenceId
        });
      });
    });

    var spansBySentence = {};

    textNodes.forEach(function (record) {
      record.pieces.sort(function (left, right) { return right.start - left.start; });

      record.pieces.forEach(function (piece) {
        if (!record.node.parentNode || !record.node.data.slice(piece.start, piece.end).trim()) return;

        record.node.splitText(piece.end);
        var middle = record.node.splitText(piece.start);
        var span = document.createElement('span');
        span.className = 'original-sentence';
        span.dataset.original = piece.original;
        span.dataset.sentenceId = piece.sentenceId;
        span.tabIndex = -1;
        middle.parentNode.insertBefore(span, middle);
        span.appendChild(middle);

        if (!spansBySentence[piece.sentenceId]) spansBySentence[piece.sentenceId] = [];
        spansBySentence[piece.sentenceId].push(span);
        sentenceSpans.push(span);
      });
    });

    Object.keys(spansBySentence).forEach(function (sentenceId) {
      var spans = spansBySentence[sentenceId];
      spans.sort(function (left, right) {
        return left.compareDocumentPosition(right) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
      });
      spans[0].classList.add('original-sentence--focus');
    });
  }

  function splitSentences(text, locale) {
    if (window.Intl && Intl.Segmenter) {
      var segmenter = new Intl.Segmenter(locale, { granularity: 'sentence' });
      return Array.from(segmenter.segment(text)).map(function (part) {
        var leading = part.segment.match(/^\s*/)[0].length;
        var trailing = part.segment.match(/\s*$/)[0].length;
        return {
          text: part.segment.slice(leading, part.segment.length - trailing),
          start: part.index + leading,
          end: part.index + part.segment.length - trailing
        };
      }).filter(function (part) { return Boolean(part.text); });
    }

    var result = [];
    var expression = /[^.!?…]+(?:[.!?…]+[”»\"']*|$)/g;
    var match;
    while ((match = expression.exec(text))) {
      var leading = match[0].match(/^\s*/)[0].length;
      var trailing = match[0].match(/\s*$/)[0].length;
      result.push({
        text: match[0].slice(leading, match[0].length - trailing),
        start: match.index + leading,
        end: match.index + match[0].length - trailing
      });
    }
    return result;
  }

  function alignSentences(russian, english) {
    if (russian.length === english.length) {
      return english.map(function (sentence) { return sentence.text; });
    }

    var rows = russian.length + 1;
    var columns = english.length + 1;
    var costs = Array.from({ length: rows }, function () {
      return Array(columns).fill(Infinity);
    });
    var moves = Array.from({ length: rows }, function () {
      return Array(columns).fill(null);
    });
    var russianTotal = russian.reduce(function (sum, sentence) { return sum + sentence.text.length; }, 0);
    var englishTotal = english.reduce(function (sum, sentence) { return sum + sentence.text.length; }, 0);
    costs[0][0] = 0;

    for (var i = 0; i < rows; i += 1) {
      for (var j = 0; j < columns; j += 1) {
        if (!Number.isFinite(costs[i][j])) continue;

        for (var ruCount = 1; ruCount <= 3 && i + ruCount < rows; ruCount += 1) {
          for (var enCount = 1; enCount <= 3 && j + enCount < columns; enCount += 1) {
            var ruLength = russian.slice(i, i + ruCount).reduce(function (sum, sentence) {
              return sum + sentence.text.length;
            }, 0);
            var enLength = english.slice(j, j + enCount).reduce(function (sum, sentence) {
              return sum + sentence.text.length;
            }, 0);
            var ratioCost = Math.abs(Math.log((ruLength / russianTotal) / (enLength / englishTotal)));
            var groupingCost = (ruCount + enCount - 2) * 0.22;
            var nextCost = costs[i][j] + ratioCost + groupingCost;

            if (nextCost < costs[i + ruCount][j + enCount]) {
              costs[i + ruCount][j + enCount] = nextCost;
              moves[i + ruCount][j + enCount] = { ru: ruCount, en: enCount };
            }
          }
        }
      }
    }

    if (!moves[russian.length][english.length]) {
      var completeOriginal = english.map(function (sentence) { return sentence.text; }).join(' ');
      return russian.map(function () { return completeOriginal; });
    }

    var mapped = Array(russian.length);
    var ruIndex = russian.length;
    var enIndex = english.length;

    while (ruIndex > 0 && enIndex > 0) {
      var move = moves[ruIndex][enIndex];
      var original = english.slice(enIndex - move.en, enIndex).map(function (sentence) {
        return sentence.text;
      }).join(' ');

      for (var offset = 0; offset < move.ru; offset += 1) {
        mapped[ruIndex - move.ru + offset] = original;
      }

      ruIndex -= move.ru;
      enIndex -= move.en;
    }

    return mapped;
  }

  function showTooltip(sentence, x, y) {
    if (!enabled) return;
    activeSentenceId = sentence.dataset.sentenceId;
    tooltipText.textContent = sentence.dataset.original;
    tooltip.hidden = false;
    tooltip.setAttribute('aria-hidden', 'false');
    sentence.setAttribute('aria-describedby', tooltip.id);
    positionTooltip(x, y);
  }

  function hideTooltip() {
    if (activeSentenceId) {
      article.querySelectorAll('[data-sentence-id="' + activeSentenceId + '"]').forEach(function (sentence) {
        sentence.removeAttribute('aria-describedby');
      });
    }
    activeSentenceId = null;
    tooltip.hidden = true;
    tooltip.setAttribute('aria-hidden', 'true');
  }

  function positionTooltip(x, y) {
    var margin = 14;
    tooltip.style.left = Math.min(Math.max(x + 14, margin), window.innerWidth - margin) + 'px';
    tooltip.style.top = Math.min(y + 18, window.innerHeight - margin) + 'px';

    requestAnimationFrame(function () {
      if (tooltip.hidden) return;
      var rect = tooltip.getBoundingClientRect();
      var left = Math.min(Math.max(rect.left, margin), window.innerWidth - rect.width - margin);
      var top = rect.bottom > window.innerHeight - margin ? y - rect.height - 14 : rect.top;
      tooltip.style.left = Math.max(margin, left) + 'px';
      tooltip.style.top = Math.max(margin, top) + 'px';
    });
  }

  function updateState() {
    article.classList.toggle('originals-enabled', enabled);
    toggle.setAttribute('aria-pressed', enabled ? 'true' : 'false');
    toggle.textContent = enabled ? 'EN-подсказки: включены' : 'EN-подсказки: выключены';
    sentenceSpans.forEach(function (span) {
      span.tabIndex = enabled && span.classList.contains('original-sentence--focus') ? 0 : -1;
    });
    if (!enabled) {
      pinned = false;
      hideTooltip();
    }
  }

  function normalize(text) {
    return text.replace(/\s+/g, ' ').trim();
  }

  function fingerprint(text) {
    var hash = 2166136261;
    for (var character of text) {
      hash ^= character.codePointAt(0);
      hash = Math.imul(hash, 16777619) >>> 0;
    }
    return hash.toString(16).padStart(8, '0');
  }

  function readPreference() {
    try {
      return localStorage.getItem(storageKey) !== 'off';
    } catch (error) {
      return true;
    }
  }

  function writePreference(value) {
    try {
      localStorage.setItem(storageKey, value ? 'on' : 'off');
    } catch (error) {
      // The feature still works for the current page view when storage is unavailable.
    }
  }
})();
