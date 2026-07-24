const STORAGE_PREFIX = "ai-native-book:v2:";
const STORAGE_KEY = `${STORAGE_PREFIX}scorecard`;

const DIMENSIONS = [
  { id: "value", name: "Ценность и портфель" },
  { id: "people", name: "Люди и полномочия" },
  { id: "context", name: "Контекст и память" },
  { id: "execution", name: "Среда исполнения" },
  { id: "control", name: "Контур управления" },
  { id: "quality", name: "Проверка и наблюдаемость" },
  { id: "delivery", name: "Поставка и эксплуатация" },
  { id: "economics", name: "Управление и экономика" },
];

function isLevel(value) {
  return Number.isInteger(value) && value >= 0 && value <= 4;
}

export function computeProfile(values) {
  if (!Array.isArray(values) || values.length !== DIMENSIONS.length) {
    throw new TypeError("Профиль должен содержать ровно восемь уровней.");
  }
  if (!values.every(isLevel)) {
    throw new RangeError("Каждый уровень должен быть целым числом от 0 до 4.");
  }

  return {
    values,
    minimum: Math.min(...values),
    managed: values.every((value) => value >= 3),
  };
}

export function serializeState(state) {
  const levels = Array.isArray(state?.levels)
    ? state.levels.filter(isLevel)
    : [];
  const checks = Array.isArray(state?.checks)
    ? state.checks.filter((value) => typeof value === "boolean")
    : [];

  return { levels, checks };
}

export function scorecardToMarkdown(values) {
  const profile = computeProfile(values);
  const rows = DIMENSIONS.map(
    (dimension, index) => `| ${dimension.name} | ${profile.values[index]} |`,
  );
  const blockers = DIMENSIONS.flatMap((dimension, index) =>
    profile.values[index] < 3
      ? [`- ${dimension.name}: ${profile.values[index]}`]
      : [],
  );

  return [
    "# Карта зрелости",
    "",
    `Профиль: ${profile.values.join(" / ")}`,
    `Минимальный балл: ${profile.minimum}`,
    `Управляемый процесс: ${profile.managed ? "да" : "нет"}`,
    "",
    "| Измерение | Уровень |",
    "| --- | ---: |",
    ...rows,
    "",
    "## Блокирующие измерения",
    "",
    ...(blockers.length > 0
      ? blockers
      : ["Нет: все восемь измерений достигли уровня 3 или 4."]),
    "",
  ].join("\n");
}

function localStorageFor(view) {
  try {
    return view?.localStorage ?? null;
  } catch {
    return null;
  }
}

function readStoredState(storage) {
  if (!storage) {
    return null;
  }

  try {
    const raw = storage.getItem(STORAGE_KEY);
    if (raw === null) {
      return null;
    }
    const parsed = JSON.parse(raw);
    const state = serializeState(parsed);
    if (state.levels.length !== DIMENSIONS.length) {
      state.levels = [];
    } else {
      computeProfile(state.levels);
    }
    return state;
  } catch {
    return null;
  }
}

function writeStoredState(storage, state) {
  if (!storage) {
    return false;
  }

  try {
    storage.setItem(STORAGE_KEY, JSON.stringify(serializeState(state)));
    return true;
  } catch {
    return false;
  }
}

function collectScoreLevels(form) {
  const levels = [];

  for (const dimension of DIMENSIONS) {
    const fieldset = form.querySelector(
      `[data-score-dimension="${dimension.id}"]`,
    );
    const selected = fieldset?.querySelector(
      'input[type="radio"]:checked',
    );
    if (!selected) {
      return null;
    }
    const value = Number(selected.value);
    if (!isLevel(value)) {
      return null;
    }
    levels.push(value);
  }

  return levels;
}

function collectChecks(checkboxes) {
  return Array.from(checkboxes, (checkbox) => Boolean(checkbox.checked));
}

function renderScorecardResult(output, levels) {
  if (!levels) {
    const selectedCount = DIMENSIONS.reduce((count, dimension) => {
      const fieldset = output.form?.querySelector(
        `[data-score-dimension="${dimension.id}"]`,
      );
      return (
        count +
        Number(Boolean(fieldset?.querySelector('input[type="radio"]:checked')))
      );
    }, 0);
    output.removeAttribute("data-managed");
    output.textContent =
      selectedCount === 0
        ? "Выберите уровень по всем восьми измерениям. Итогом будет профиль без среднего балла."
        : `Заполнено измерений: ${selectedCount} из 8. Незавершённый профиль не получает итоговый статус.`;
    return;
  }

  const profile = computeProfile(levels);
  const blockers = DIMENSIONS.flatMap((dimension, index) =>
    profile.values[index] < 3
      ? [`${dimension.name} (${profile.values[index]})`]
      : [],
  );
  output.dataset.managed = String(profile.managed);
  output.textContent = [
    `Профиль: ${profile.values.join(" / ")}.`,
    `Минимальный балл: ${profile.minimum}.`,
    profile.managed
      ? "Процесс является управляемым: все измерения достигли уровня 3."
      : `Процесс пока не является управляемым. Блокирующие измерения: ${blockers.join(", ")}.`,
  ].join(" ");
}

function restoreState(form, checkboxes, state) {
  if (!state) {
    return;
  }

  if (state.levels.length === DIMENSIONS.length) {
    DIMENSIONS.forEach((dimension, index) => {
      const fieldset = form.querySelector(
        `[data-score-dimension="${dimension.id}"]`,
      );
      const radio = fieldset?.querySelector(
        `input[type="radio"][value="${state.levels[index]}"]`,
      );
      if (radio) {
        radio.checked = true;
      }
    });
  }

  state.checks.forEach((checked, index) => {
    if (checkboxes[index] && typeof checked === "boolean") {
      checkboxes[index].checked = checked;
    }
  });
}

function removePrivateStorage(storage) {
  if (!storage) {
    return { available: false, removed: 0 };
  }

  let removed = 0;
  try {
    for (let index = storage.length - 1; index >= 0; index -= 1) {
      const key = storage.key(index);
      if (key?.startsWith(STORAGE_PREFIX)) {
        storage.removeItem(key);
        removed += 1;
      }
    }
    return { available: true, removed };
  } catch {
    return { available: false, removed };
  }
}

function startDownload(doc, values, output) {
  try {
    const markdown = scorecardToMarkdown(values);
    const blob = new Blob([markdown], {
      type: "text/markdown;charset=utf-8",
    });
    const objectUrl = URL.createObjectURL(blob);
    const link = doc.createElement("a");
    link.href = objectUrl;
    link.download = "ai-native-maturity-profile.md";
    link.hidden = true;
    doc.body.append(link);
    link.click();
    link.remove();
    doc.defaultView?.setTimeout(() => URL.revokeObjectURL(objectUrl), 0);
    output.textContent += " Markdown-файл подготовлен для скачивания.";
  } catch {
    output.textContent += " Не удалось подготовить Markdown-файл.";
  }
}

function initScorecard(doc) {
  const form = doc.querySelector("[data-scorecard]");
  const output = doc.querySelector("#scorecard-result");
  if (!form || !output) {
    return;
  }

  const checkboxes = doc.querySelectorAll("[data-reading-check]");
  const storage = localStorageFor(doc.defaultView);
  restoreState(form, checkboxes, readStoredState(storage));

  const save = () =>
    writeStoredState(storage, {
      levels: collectScoreLevels(form) ?? [],
      checks: collectChecks(checkboxes),
    });
  const update = ({ persist = true } = {}) => {
    const levels = collectScoreLevels(form);
    renderScorecardResult(output, levels);
    if (persist) {
      save();
    }
  };

  form.addEventListener("change", (event) => {
    if (event.target.matches('input[type="radio"]')) {
      update();
    }
  });
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", save);
  });

  doc.querySelector("#scorecard-export")?.addEventListener("click", () => {
    const levels = collectScoreLevels(form);
    if (!levels) {
      renderScorecardResult(output, null);
      output.textContent += " Скачивание доступно после заполнения профиля.";
      return;
    }
    startDownload(doc, levels, output);
  });

  doc.querySelector("#scorecard-clear")?.addEventListener("click", () => {
    const result = removePrivateStorage(storage);
    form
      .querySelectorAll('input[type="radio"]')
      .forEach((radio) => (radio.checked = false));
    checkboxes.forEach((checkbox) => (checkbox.checked = false));
    output.removeAttribute("data-managed");
    output.textContent = result.available
      ? `Ответы очищены. Удалено локальных записей: ${result.removed}.`
      : "Форма очищена. Локальное хранилище недоступно; проверить удаление сохранённых записей не удалось.";
  });

  update({ persist: false });
}

function clearSearchMarks(root) {
  const parents = new Set();
  root.querySelectorAll("mark[data-book-search-match]").forEach((mark) => {
    const parent = mark.parentNode;
    mark.replaceWith(mark.ownerDocument.createTextNode(mark.textContent ?? ""));
    if (parent) {
      parents.add(parent);
    }
  });
  parents.forEach((parent) => parent.normalize());
}

function textNodesForSearch(root) {
  const view = root.ownerDocument.defaultView;
  const filter = view?.NodeFilter;
  if (!filter) {
    return [];
  }

  const walker = root.ownerDocument.createTreeWalker(
    root,
    filter.SHOW_TEXT,
    {
      acceptNode(node) {
        const parent = node.parentElement;
        if (
          !parent ||
          !node.nodeValue?.trim() ||
          parent.closest(
            "script, style, noscript, button, input, textarea, select, option",
          )
        ) {
          return filter.FILTER_REJECT;
        }
        return filter.FILTER_ACCEPT;
      },
    },
  );
  const nodes = [];
  while (walker.nextNode()) {
    nodes.push(walker.currentNode);
  }
  return nodes;
}

function markSearchMatches(root, query) {
  const normalizedQuery = query.toLocaleLowerCase("ru");
  let count = 0;

  for (const node of textNodesForSearch(root)) {
    const text = node.nodeValue ?? "";
    const normalizedText = text.toLocaleLowerCase("ru");
    let cursor = 0;
    let matchAt = normalizedText.indexOf(normalizedQuery);
    if (matchAt < 0) {
      continue;
    }

    const fragment = node.ownerDocument.createDocumentFragment();
    while (matchAt >= 0) {
      fragment.append(text.slice(cursor, matchAt));
      const mark = node.ownerDocument.createElement("mark");
      mark.dataset.bookSearchMatch = "true";
      mark.textContent = text.slice(matchAt, matchAt + query.length);
      fragment.append(mark);
      count += 1;
      cursor = matchAt + query.length;
      matchAt = normalizedText.indexOf(normalizedQuery, cursor);
    }
    fragment.append(text.slice(cursor));
    node.replaceWith(fragment);
  }

  return count;
}

function initSearch(doc) {
  const form = doc.querySelector("[data-book-search]");
  const input = form?.querySelector('input[type="search"]');
  const output = form?.querySelector("output");
  const root = doc.querySelector("main");
  if (!form || !input || !output || !root) {
    return;
  }

  const search = () => {
    clearSearchMarks(root);
    const query = input.value.trim();
    if (!query) {
      output.textContent = "Введите слово или фразу для поиска по руководству.";
      return;
    }
    const count = markSearchMatches(root, query);
    output.textContent =
      count === 0
        ? "Совпадений не найдено."
        : `Найдено совпадений: ${count}.`;
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    search();
  });
  input.addEventListener("input", search);
  output.textContent = "Введите слово или фразу для поиска по руководству.";
}

function initRoutes(doc) {
  const links = Array.from(doc.querySelectorAll("[data-route]"));
  links.forEach((link) => {
    link.addEventListener("click", () => {
      links.forEach((candidate) => {
        candidate.classList.remove("is-active");
        candidate.removeAttribute("aria-current");
      });
      link.classList.add("is-active");
      link.setAttribute("aria-current", "true");
    });
  });
}

function initReadingProgress(doc) {
  const indicator = doc.querySelector("[data-reading-progress]");
  const view = doc.defaultView;
  if (!indicator || !view) {
    return;
  }

  const update = () => {
    const page = doc.documentElement;
    const available = Math.max(page.scrollHeight - view.innerHeight, 0);
    const scrollTop = view.scrollY || page.scrollTop || 0;
    const progress =
      available === 0
        ? 100
        : Math.min(100, Math.max(0, (scrollTop / available) * 100));
    indicator.style.width = `${progress}%`;
  };

  view.addEventListener("scroll", update, { passive: true });
  view.addEventListener("resize", update);
  update();
}

function fallbackCopy(doc, target) {
  const selection = doc.defaultView?.getSelection();
  if (!selection || typeof doc.execCommand !== "function") {
    return false;
  }

  const range = doc.createRange();
  range.selectNodeContents(target);
  selection.removeAllRanges();
  selection.addRange(range);
  try {
    return doc.execCommand("copy");
  } catch {
    return false;
  } finally {
    selection.removeAllRanges();
  }
}

async function copyTarget(doc, target) {
  const text = target.innerText || target.textContent || "";
  const clipboard = doc.defaultView?.navigator?.clipboard;
  if (clipboard?.writeText) {
    try {
      await clipboard.writeText(text);
      return true;
    } catch {
      return fallbackCopy(doc, target);
    }
  }
  return fallbackCopy(doc, target);
}

function initCopyButtons(doc) {
  doc.querySelectorAll("[data-copy-template]").forEach((button) => {
    button.addEventListener("click", async () => {
      const targetId = button.dataset.copyTemplate;
      const target = targetId ? doc.getElementById(targetId) : null;
      const copied = target ? await copyTarget(doc, target) : false;
      button.setAttribute("aria-live", "polite");
      button.textContent = copied
        ? "Пример скопирован"
        : "Не удалось скопировать — выделите видимый пример вручную";
    });
  });
}

export function initBookInteractions(doc) {
  if (!doc?.querySelector) {
    return;
  }
  initScorecard(doc);
  initSearch(doc);
  initRoutes(doc);
  initReadingProgress(doc);
  initCopyButtons(doc);
}

if (typeof document !== "undefined") {
  const start = () => initBookInteractions(document);
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start, { once: true });
  } else {
    start();
  }
}
