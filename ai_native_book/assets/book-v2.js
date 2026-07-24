const STORAGE_PREFIX = "ai-native-book:v2:";
const STORAGE_KEY = `${STORAGE_PREFIX}scorecard`;
const READING_CHECK_COUNT = 99;
const ROUTES = Object.freeze({
  startup: Object.freeze([
    "#ch1",
    "#ch2",
    "#first-managed-loop",
    "#ch3",
    "#ch4",
    "#ch12",
  ]),
  mature: Object.freeze([
    "#ch1",
    "#ch2",
    "#first-managed-loop",
    "#ch3",
    "#context-memory-skills",
    "#ch6",
    "#ch7",
    "#ch9",
    "#ch8",
    "#ch5",
    "#ch12",
  ]),
});

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

export function routeStepsFor(route) {
  return ROUTES[route]?.slice() ?? [];
}

export function computeProfile(values) {
  if (!Array.isArray(values) || values.length !== DIMENSIONS.length) {
    throw new TypeError("Профиль должен содержать ровно восемь уровней.");
  }
  if (!values.every(isLevel)) {
    throw new RangeError("Каждый уровень должен быть целым числом от 0 до 4.");
  }

  const profileValues = values.slice();
  return {
    values: profileValues,
    minimum: Math.min(...profileValues),
    managed: profileValues.every((value) => value >= 3),
  };
}

export function serializeState(state) {
  const levels =
    Array.isArray(state?.levels) && state.levels.every(isLevel)
      ? state.levels.slice()
      : [];
  const checks =
    Array.isArray(state?.checks) &&
    state.checks.every((value) => typeof value === "boolean")
      ? state.checks.slice()
      : [];

  return { levels, checks };
}

export function encodeState(state) {
  const levels = state?.levels;
  const checks = state?.checks;
  if (
    !Array.isArray(levels) ||
    levels.length !== DIMENSIONS.length ||
    !levels.every((value) => value === null || isLevel(value))
  ) {
    throw new TypeError(
      "Для сохранения нужны восемь целых уровней 0–4 или незаполненных позиций.",
    );
  }
  if (
    !Array.isArray(checks) ||
    checks.length !== READING_CHECK_COUNT ||
    !checks.every((value) => typeof value === "boolean")
  ) {
    throw new TypeError(
      `Для сохранения нужны ровно ${READING_CHECK_COUNT} булевых отметок чтения.`,
    );
  }

  const mask = levels.map(isLevel);
  return serializeState({
    levels: levels.filter(isLevel),
    checks: [...mask, ...checks],
  });
}

export function decodeState(storedState) {
  if (
    !Array.isArray(storedState?.levels) ||
    !Array.isArray(storedState?.checks)
  ) {
    return null;
  }

  const state = serializeState(storedState);
  if (
    state.levels.length !== storedState.levels.length ||
    state.checks.length !== storedState.checks.length ||
    state.levels.length > DIMENSIONS.length ||
    state.checks.length !== DIMENSIONS.length + READING_CHECK_COUNT
  ) {
    return null;
  }

  const mask = state.checks.slice(0, DIMENSIONS.length);
  const selectedCount = mask.filter(Boolean).length;
  if (selectedCount !== state.levels.length) {
    return null;
  }

  let levelIndex = 0;
  return {
    levels: mask.map((selected) =>
      selected ? state.levels[levelIndex++] : null,
    ),
    checks: state.checks.slice(DIMENSIONS.length),
  };
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
    return decodeState(JSON.parse(raw));
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
  return DIMENSIONS.map((dimension) => {
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
    return isLevel(value) ? value : null;
  });
}

function collectChecks(checkboxes) {
  return Array.from(checkboxes, (checkbox) => Boolean(checkbox.checked));
}

function renderScorecardResult(output, levels) {
  if (!levels.every(isLevel)) {
    const selectedCount = levels.filter(isLevel).length;
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
      if (!isLevel(state.levels[index])) {
        return;
      }
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

  const save = () => {
    try {
      return writeStoredState(
        storage,
        encodeState({
          levels: collectScoreLevels(form),
          checks: collectChecks(checkboxes),
        }),
      );
    } catch {
      return false;
    }
  };
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
    if (!levels.every(isLevel)) {
      renderScorecardResult(output, levels);
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
  const searches = Array.from(doc.querySelectorAll("[data-book-search]"))
    .map((form) => ({
      form,
      input: form.querySelector('input[type="search"]'),
      output: form.querySelector("output"),
    }))
    .filter(({ input, output }) => input && output);
  const root = doc.querySelector("main");
  if (searches.length === 0 || !root) {
    return;
  }

  const search = (rawQuery) => {
    clearSearchMarks(root);
    const query = rawQuery.trim();
    searches.forEach(({ input }) => {
      if (input.value !== rawQuery) {
        input.value = rawQuery;
      }
    });

    let message;
    if (!query) {
      message = "Введите слово или фразу для поиска по руководству.";
    } else {
      const count = markSearchMatches(root, query);
      message =
        count === 0
          ? "Совпадений не найдено."
          : `Найдено совпадений: ${count}.`;
    }
    searches.forEach(({ output }) => {
      output.textContent = message;
    });
  };

  searches.forEach(({ form, input, output }) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      search(input.value);
    });
    input.addEventListener("input", () => search(input.value));
    output.textContent = "Введите слово или фразу для поиска по руководству.";
  });
}

function initRoutes(doc) {
  const buttons = Array.from(doc.querySelectorAll("[data-route]"));
  const tocLinks = Array.from(
    doc.querySelectorAll(
      ".desktop-toc a[href^='#'], .mobile-toc a[href^='#']",
    ),
  );
  const status = doc.querySelector("[data-route-status]");

  const clearSteps = () => {
    tocLinks.forEach((link) => {
      link.classList.remove("is-route-step");
      link.removeAttribute("data-route-step");
      link.querySelector("[data-route-step-label]")?.remove();
    });
  };

  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      buttons.forEach((candidate) => {
        candidate.classList.remove("is-active");
        candidate.setAttribute("aria-pressed", "false");
      });
      button.classList.add("is-active");
      button.setAttribute("aria-pressed", "true");

      clearSteps();
      const route = button.dataset.route;
      const steps = routeStepsFor(route);
      steps.forEach((target, index) => {
        tocLinks
          .filter((link) => link.getAttribute("href") === target)
          .forEach((link) => {
            link.classList.add("is-route-step");
            link.dataset.routeStep = String(index + 1);
            const label = doc.createElement("span");
            label.className = "route-step-label";
            label.dataset.routeStepLabel = "true";
            label.textContent = `Шаг ${index + 1}`;
            link.append(label);
          });
      });

      if (status) {
        const name =
          route === "startup" ? "для стартапа" : "для зрелой компании";
        status.textContent =
          `Выбран маршрут ${name}. В оглавлении отмечены ${steps.length} шагов.`;
      }
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
