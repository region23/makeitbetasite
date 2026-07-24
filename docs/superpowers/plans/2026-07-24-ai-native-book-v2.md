# AI-native компания v2 — план реализации

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Подготовить локальную вторую версию руководства, архивировать v1, добавить практические шаблоны и доказать готовность страницы к пользовательскому ревью без публикации.

**Architecture:** Руководство остаётся статической страницей GitHub Pages. Содержание и аудит источников фиксируются в редакционных Markdown-файлах, а читательская версия собирается в семантическом `index.html`; CSS и небольшой модульный JavaScript вынесены в отдельные файлы. Весь текст и основные действия доступны без JavaScript, а сохранение карты зрелости работает только в браузере и не отправляет данные по сети.

**Tech Stack:** HTML5, CSS, JavaScript ES modules, Python 3 standard library for structural checks, Node.js built-in test runner for pure JavaScript functions, local HTTP server and in-app browser for visual and interaction QA.

## Global Constraints

- Дата среза содержания — 24 июля 2026 года; более поздние источники не используются.
- Основной текст написан на ясном русском языке; используется «ИИ», а английский термин поясняется при первом употреблении.
- Светлая тема, мобильная вёрстка в первую очередь, без фреймворка и серверной части.
- Ширина основного текста — примерно 65–75 знаков; проверяемая цель доступности — WCAG 2.2 AA.
- Весь текст, оглавление, якоря, шаблоны и ручное заполнение карты зрелости работают без JavaScript.
- В v2 и архиве v1 нет Яндекс Метрики, Вебвизора, карты кликов и другого стороннего JavaScript.
- Ответы форм хранятся только в `localStorage`; свободный текст не сохраняется, сетевые запросы не выполняются.
- Сохраняются якоря `#ch1`…`#ch12`, `#sources`, `#version` и `#changelog`.
- Локальные PDF из `google_guide/` и `.DS_Store` не меняются и не добавляются в Git.
- До отдельного сообщения «публикуй» запрещены `git push`, слияние в `main` и любые действия, раскрывающие черновик во внешнем репозитории.

## Карта файлов

- `docs/ai-native-book-v2/audit-matrix.md` — постраничный аудит v1 и пяти PDF Google.
- `docs/ai-native-book-v2/source-register.md` — реестр первичных и независимых источников с датой проверки и ограничениями.
- `docs/ai-native-book-v2/manuscript.md` — каноническая русская рукопись v2.
- `scripts/check_ai_native_book.py` — структурная, приватностная и редакционная проверка HTML и Markdown.
- `tests/book-v2.test.mjs` — тесты чистых функций карты зрелости и экспорта.
- `ai_native_book/v1/index.html` — архив первой версии без клиентской аналитики.
- `ai_native_book/index.html` — семантическая читательская версия v2.
- `ai_native_book/assets/book-v2.css` — редакционный стиль, адаптивность, печать и состояния доступности.
- `ai_native_book/assets/book-v2.js` — поиск, маршруты, карта зрелости, сохранение, очистка, копирование и экспорт.
- `ai_native_book/templates/*.md` — тринадцать самостоятельных практических шаблонов.

---

### Task 1: Зафиксировать аудит и реестр источников

**Files:**
- Create: `docs/ai-native-book-v2/audit-matrix.md`
- Create: `docs/ai-native-book-v2/source-register.md`

**Interfaces:**
- Consumes: `google_guide/*.pdf`, `ai_native_book/index.html`, спецификация дизайна.
- Produces: проверяемые тезисы и источники для рукописи; идентификаторы вида `G1-D1-p12`, `V1-ch6`, `NIST-2026-agent-id`.

- [ ] **Step 1: Создать шапку матрицы и зафиксировать корпус**

Матрица начинается с таблицы:

```markdown
| ID | Тезис | Источник и страница | Статус | Аргумент | Место в v2 |
|---|---|---|---|---|---|
```

В начале файла перечислить пять PDF, 241 страницу и SHA-256 из спецификации. Для v1 использовать якоря `V1-ch1`…`V1-ch12`.

- [ ] **Step 2: Заполнить матрицу по всем существенным тезисам**

Для каждого тезиса выбрать ровно один статус: `Принять`, `Адаптировать`, `Отвергнуть`, `Не доказано`. У каждой строки указать страницу PDF или якорь v1, краткий аргумент и будущий раздел v2.

- [ ] **Step 3: Создать реестр внешних источников**

Для каждой записи использовать поля:

```markdown
### NIST-2026-agent-id
- Организация: NIST
- Материал: Identity and Authority of Software Agents
- URL: https://www.nist.gov/news-events/news/2026/02/new-concept-paper-identity-and-authority-software-agents
- Опубликовано: 2026-02-05
- Проверено: 2026-07-24
- Тип: первичный источник
- Подтверждает: отдельные учётные записи, полномочия и границы действий программных агентов
- Ограничение: концептуальный материал, не отраслевой норматив
```

- [ ] **Step 4: Проверить полноту корпуса**

Run:

```bash
rg -n 'The New SDLC|Agent Tools|Agent Skills|Agent Security|Day_5_v3|Принять|Адаптировать|Отвергнуть|Не доказано' docs/ai-native-book-v2
```

Expected: найдены все пять файлов и все четыре статуса; нет ссылок на материалы после `2026-07-24`.

- [ ] **Step 5: Зафиксировать редакционные документы**

```bash
git add docs/ai-native-book-v2/audit-matrix.md docs/ai-native-book-v2/source-register.md
git commit -m "docs: audit AI-native sources"
```

### Task 2: Написать полную русскую рукопись

**Files:**
- Create: `docs/ai-native-book-v2/manuscript.md`

**Interfaces:**
- Consumes: `audit-matrix.md`, `source-register.md`, утверждённая спецификация.
- Produces: полный текст разделов `ch1`…`ch12`, источников, версии и журнала изменений для HTML.

- [ ] **Step 1: Создать точную структуру рукописи**

В документе должны быть разделы:

```markdown
# AI-native компания v2
## ch1. Определение и границы
## ch2. Карта зрелости
## ch3. Первый управляемый цикл
## ch4. Восемь систем операционной модели
## ch5. Контекст, память и навыки
## ch6. Жизненный цикл разработки программного обеспечения с ИИ
## ch7. Проверки качества и наблюдение
## ch8. Полномочия, безопасность и устойчивость
## ch9. Экономика и полная стоимость результата
## ch10. План стартапа: 30 и 90 дней
## ch11. План зрелой компании: 30, 90 и 180 дней
## ch12. Практический комплект и следующий шаг
## sources. Источники и стандарт доказательности
## version. Версия и дата среза
## changelog. Что изменилось относительно v1
```

- [ ] **Step 2: Написать главы 1–4**

Каждая глава содержит решение, минимальный механизм, ответственную роль, артефакт, критерий готовности, показатели результата и риска, ошибки, различия для двух маршрутов и чек-лист.

- [ ] **Step 3: Написать главы 5–9**

Различить постоянный и оперативный контекст; описать навыки как проверяемые зависимости; дать AI SDLC с небольшими изменениями, изолированной средой, независимыми проверками и выпуском по риску. В безопасности отделить права ИИ-системы от ответственности людей и организации.

- [ ] **Step 4: Написать главы 10–12**

Планы должны называть действия, владельца, артефакт и критерий завершения на каждом горизонте. Стартап не строит общую платформу до повторяемой потребности; зрелая компания начинает со сквозного потока создания ценности.

- [ ] **Step 5: Добавить источники и журнал изменений**

Сильные фактические тезисы получают ссылку на первичный или независимый источник. Для Google показывается статус тезиса и страница PDF без публикации самого PDF. Отдельно отметить исправления A2A 1.0.0, A2UI 0.9.1 и переходный срок статьи 50 Регламента ЕС об ИИ.

- [ ] **Step 6: Провести редакционную проверку**

Run:

```bash
rg -n 'эвалс|говернанс|скоркард|оркестрир|юнлок|радиус ошибки|цифровая идентичность|не просто .+, а|это не про' docs/ai-native-book-v2/manuscript.md
```

Expected: нет непояснённых заимствований и шаблонных оборотов; каждое необходимое совпадение разобрано вручную.

Run:

```bash
awk 'length($0) > 500 {print NR ":" length($0)}' docs/ai-native-book-v2/manuscript.md
```

Expected: нет перегруженных абзацев без осознанной причины.

- [ ] **Step 7: Зафиксировать рукопись**

```bash
git add docs/ai-native-book-v2/manuscript.md
git commit -m "docs: write AI-native guide v2 manuscript"
```

### Task 3: Создать практические шаблоны

**Files:**
- Create: `ai_native_book/templates/ai-loop-passport.md`
- Create: `ai_native_book/templates/use-case-canvas.md`
- Create: `ai_native_book/templates/decision-rights-map.md`
- Create: `ai_native_book/templates/context-register.md`
- Create: `ai_native_book/templates/agent-skill.md`
- Create: `ai_native_book/templates/eval-plan.md`
- Create: `ai_native_book/templates/risk-register.md`
- Create: `ai_native_book/templates/autonomy-contract.md`
- Create: `ai_native_book/templates/ai-pr.md`
- Create: `ai_native_book/templates/incident-to-check.md`
- Create: `ai_native_book/templates/cost-to-outcome.md`
- Create: `ai_native_book/templates/startup-90-days.md`
- Create: `ai_native_book/templates/mature-company-180-days.md`

**Interfaces:**
- Consumes: поля артефактов из рукописи.
- Produces: самостоятельные Markdown-файлы, на которые ссылается `index.html`.

- [ ] **Step 1: Применить единый формат к каждому шаблону**

Каждый файл содержит:

```markdown
# Название артефакта

## Когда нужен
## Кто отвечает
## Обязательные поля
## Пустая форма
## Короткий пример
## Критерий готовности
```

- [ ] **Step 2: Заполнить шаблоны цикла, сценария, полномочий и контекста**

Поля должны быть конкретными: результат, исходный показатель, цена ошибки, разрешённые действия, источник данных, владелец, свежесть, права и резервный сценарий.

- [ ] **Step 3: Заполнить инженерные шаблоны**

`agent-skill.md` включает назначение, вход, выход, ограничения, инструменты, примеры и проверки. `eval-plan.md` разделяет проверку результата и хода действий. `ai-pr.md` содержит цель, объём изменения, доказательства, риск, откат и наблюдение после выпуска.

- [ ] **Step 4: Заполнить риск, автономию, инциденты, экономику и планы**

`autonomy-contract.md` фиксирует A0–A3, права, лимиты и условия понижения. `cost-to-outcome.md` включает модели, инфраструктуру, инструменты, повторы, человеческую проверку и стоимость ошибки. Планы 30/90/180 дней используют владельца, артефакт и критерий завершения.

- [ ] **Step 5: Проверить комплект**

Run:

```bash
find ai_native_book/templates -name '*.md' -maxdepth 1 -type f | sort
```

Expected: ровно 13 файлов из карты файлов.

Run:

```bash
rg -L '## Когда нужен' ai_native_book/templates/*.md
```

Expected: пустой вывод.

- [ ] **Step 6: Зафиксировать шаблоны**

```bash
git add ai_native_book/templates
git commit -m "feat: add AI-native guide templates"
```

### Task 4: Добавить автоматические проверки до замены страницы

**Files:**
- Create: `scripts/check_ai_native_book.py`
- Create: `tests/book-v2.test.mjs`

**Interfaces:**
- Consumes: будущие `index.html`, `v1/index.html`, CSS, JS и шаблоны.
- Produces: команда проверки структуры и тестируемые функции `computeProfile`, `serializeState`, `scorecardToMarkdown`.

- [ ] **Step 1: Написать структурную проверку, которая сначала падает**

Скрипт Python проверяет:

```python
EXPECTED_IDS = {
    *(f"ch{i}" for i in range(1, 13)),
    "sources",
    "version",
    "changelog",
}
EXPECTED_TEMPLATES = {
    "ai-loop-passport.md",
    "use-case-canvas.md",
    "decision-rights-map.md",
    "context-register.md",
    "agent-skill.md",
    "eval-plan.md",
    "risk-register.md",
    "autonomy-contract.md",
    "ai-pr.md",
    "incident-to-check.md",
    "cost-to-outcome.md",
    "startup-90-days.md",
    "mature-company-180-days.md",
}
FORBIDDEN = ("mc.yandex.ru", "ym(", "webvisor", "clickmap")
```

Он также требует skip-link, `main`, один `h1`, `details/summary`, canonical, локальные CSS/JS, `noindex,follow` в v1 и отсутствие запрещённых строк в обоих HTML.

- [ ] **Step 2: Запустить проверку и увидеть ожидаемое падение**

Run:

```bash
python3 scripts/check_ai_native_book.py
```

Expected: FAIL, потому что `ai_native_book/v1/index.html` и новые активы ещё не созданы.

- [ ] **Step 3: Написать тесты чистых функций JavaScript**

```javascript
import test from "node:test";
import assert from "node:assert/strict";
import {
  computeProfile,
  serializeState,
  scorecardToMarkdown,
} from "../ai_native_book/assets/book-v2.js";

test("profile keeps all eight dimensions and never hides the minimum", () => {
  const values = [3, 3, 2, 3, 4, 3, 3, 3];
  assert.deepEqual(computeProfile(values), {
    values,
    minimum: 2,
    managed: false,
  });
});

test("state contains only integer levels and boolean checks", () => {
  assert.deepEqual(
    serializeState({ levels: [0, 1, 2, 3, 4, 2, 1, 0], checks: [true, false] }),
    { levels: [0, 1, 2, 3, 4, 2, 1, 0], checks: [true, false] },
  );
});

test("markdown export names the profile and storage warning", () => {
  const result = scorecardToMarkdown([0, 1, 2, 3, 4, 2, 1, 0]);
  assert.match(result, /Карта зрелости/);
  assert.match(result, /Ценность и портфель/);
  assert.doesNotMatch(result, /средний балл/i);
});
```

- [ ] **Step 4: Подтвердить второе ожидаемое падение**

Run:

```bash
node --test tests/book-v2.test.mjs
```

Expected: FAIL, потому что модуль `book-v2.js` ещё не существует.

- [ ] **Step 5: Зафиксировать проверки**

```bash
git add scripts/check_ai_native_book.py tests/book-v2.test.mjs
git commit -m "test: define AI-native guide acceptance checks"
```

### Task 5: Создать приватный архив v1

**Files:**
- Create: `ai_native_book/v1/index.html`
- Modify: `ai_native_book/v1/index.html`

**Interfaces:**
- Consumes: текущий `ai_native_book/index.html`.
- Produces: архив с прежним текстом, ссылкой на v2, `noindex,follow` и без аналитики.

- [ ] **Step 1: Скопировать исходную страницу без смысловой редактуры**

```bash
mkdir -p ai_native_book/v1
cp ai_native_book/index.html ai_native_book/v1/index.html
```

- [ ] **Step 2: Внести архивные метаданные**

В `<head>` добавить:

```html
<meta name="robots" content="noindex,follow">
<link rel="canonical" href="https://makeitbeta.ru/ai_native_book/">
```

Сразу после `<body>` добавить заметную ссылку:

```html
<aside class="archive-notice" aria-label="Архивная версия">
  Это первая версия руководства. <a href="/ai_native_book/">Открыть актуальную версию</a>.
</aside>
```

- [ ] **Step 3: Удалить Яндекс Метрику**

Удалить весь блок счётчика, включая внешний скрипт, `ym(...)`, Вебвизор, карту кликов и `<noscript>` с пикселем. Не менять главы и старые якоря.

- [ ] **Step 4: Проверить архив**

Run:

```bash
rg -n 'noindex,follow|Архивная версия|mc.yandex.ru|webvisor|clickmap' ai_native_book/v1/index.html
```

Expected: найдены архивная метка и `noindex,follow`; строки аналитики отсутствуют.

- [ ] **Step 5: Зафиксировать архив**

```bash
git add ai_native_book/v1/index.html
git commit -m "feat: archive AI-native guide v1 privately"
```

### Task 6: Собрать семантическую страницу v2

**Files:**
- Modify: `ai_native_book/index.html`

**Interfaces:**
- Consumes: `manuscript.md`, файлы шаблонов, карта старых якорей.
- Produces: полный статический документ и стабильные DOM-интерфейсы для CSS/JS.

- [ ] **Step 1: Создать head и каркас без стороннего JavaScript**

Подключить:

```html
<link rel="canonical" href="https://makeitbeta.ru/ai_native_book/">
<link rel="stylesheet" href="./assets/book-v2.css">
<script type="module" src="./assets/book-v2.js"></script>
```

В `body` использовать `a.skip-link`, `header`, `nav`, `main`, `aside` и `footer`.

- [ ] **Step 2: Добавить первый экран и два маршрута**

Показать название, обещание, дату проверки, ссылку на v1 и две кнопки-маршрута. Кнопки имеют `data-route="startup"` и `data-route="mature"`; без JavaScript они остаются обычными якорями.

- [ ] **Step 3: Добавить доступное оглавление**

Мобильное оглавление строится на `<details><summary>`. Широкий вариант использует тот же список ссылок. Ни один маршрут не скрывает главы.

- [ ] **Step 4: Перенести полную рукопись**

Каждый раздел получает `section` и старый идентификатор `ch1`…`ch12`. Фактические утверждения ссылаются на записи реестра источников; у таблиц есть `<caption>`, `th` и понятный порядок чтения.

- [ ] **Step 5: Добавить карту зрелости**

Использовать восемь `fieldset` с `legend`, пятью радиокнопками 0–4 и текстом требуемого доказательства. Результат размещается в `output#scorecard-result` с `aria-live="polite"`. Отдельно показать, что зрелость не требует более высокой автономии.

- [ ] **Step 6: Добавить практический комплект**

Для каждого из 13 шаблонов показать назначение, владельца, обязательные поля, короткий пример и обычную ссылку на Markdown. Кнопка копирования является улучшением, а не единственным способом получить текст.

- [ ] **Step 7: Добавить источники, версию и изменения**

Раздел `sources` показывает тип источника, дату и ограничение. `version` фиксирует дату среза. `changelog` содержит проверяемую матрицу отличий v1/Google/v2.

- [ ] **Step 8: Запустить структурную проверку**

Run:

```bash
python3 scripts/check_ai_native_book.py
```

Expected: возможны только ошибки отсутствующих CSS/JS; структура HTML, архив и шаблоны проходят.

- [ ] **Step 9: Зафиксировать HTML**

```bash
git add ai_native_book/index.html
git commit -m "feat: build AI-native guide v2 page"
```

### Task 7: Реализовать редакционный визуальный слой

**Files:**
- Create: `ai_native_book/assets/book-v2.css`

**Interfaces:**
- Consumes: классы и семантика `index.html`.
- Produces: светлая адаптивная страница, печать, фокус и состояния маршрутов.

- [ ] **Step 1: Определить токены и базовую типографику**

Использовать CSS-переменные для тёплого фона, тёмного текста, янтарного акцента с контрастом AA, границ, ширины текста и шагов отступа. Основной текст ограничить `max-width: 72ch`.

- [ ] **Step 2: Сверстать первый экран, оглавление и главы**

Сохранить визуальный язык v1: светлый редакционный фон, выразительные заголовки, тонкие линии и много воздуха. Не добавлять тёмные секции, декоративные иллюстрации или новую цветовую систему.

- [ ] **Step 3: Сверстать карту зрелости, таблицы и шаблоны**

Состояние выбора показывать цветом, рамкой и текстом. Таблицы получают горизонтальную прокрутку только внутри контейнера; карточки шаблонов остаются читаемыми на 360 пикселях.

- [ ] **Step 4: Добавить доступные состояния**

Определить `.skip-link`, `:focus-visible`, минимальные цели 24 × 24 CSS-пикселя, стили ошибок и сообщений. При `prefers-reduced-motion: reduce` отключить необязательные переходы.

- [ ] **Step 5: Добавить адаптивность и печать**

Проверить точки 360, 768 и 1280 пикселей. В `@media print` убрать служебную навигацию и кнопки, раскрыть содержимое и печатать адреса внешних ссылок.

- [ ] **Step 6: Зафиксировать CSS**

```bash
git add ai_native_book/assets/book-v2.css
git commit -m "style: add AI-native guide v2 layout"
```

### Task 8: Реализовать локальные интерактивные функции

**Files:**
- Create: `ai_native_book/assets/book-v2.js`
- Modify: `tests/book-v2.test.mjs`

**Interfaces:**
- Produces:
  - `computeProfile(values: number[]) -> {values, minimum, managed}`
  - `serializeState({levels, checks}) -> {levels, checks}`
  - `scorecardToMarkdown(values: number[]) -> string`

- [ ] **Step 1: Реализовать чистые функции**

Экспортировать функции из ES-модуля. `computeProfile` требует восемь целых значений 0–4; `managed` истинно только при восьми значениях не ниже 3. `serializeState` отбрасывает строки и лишние поля.

- [ ] **Step 2: Запустить модульные тесты**

Run:

```bash
node --test tests/book-v2.test.mjs
```

Expected: PASS, 3 tests.

- [ ] **Step 3: Подключить карту зрелости**

На `change` читать восемь групп, пересчитывать профиль, обновлять текстовый результат и сохранять только массив уровней и булевы отметки под ключом `ai-native-book:v2:scorecard`.

- [ ] **Step 4: Добавить явную очистку**

Кнопка очистки удаляет только ключи с префиксом `ai-native-book:v2:` и сообщает результат через `aria-live`. Она не очищает другие данные домена.

- [ ] **Step 5: Добавить поиск, маршруты и ход чтения**

Поиск отмечает совпадения и показывает число результатов. Маршрут меняет подсветку ссылок, но не `display` и не `hidden` у глав. Индикатор чтения не мешает `prefers-reduced-motion`.

- [ ] **Step 6: Добавить копирование и экспорт**

Копирование использует `navigator.clipboard` с резервным выделением видимого текста. Экспорт создаёт `Blob` и локальную ссылку `download`; `fetch`, `XMLHttpRequest`, `sendBeacon` и внешние адреса не используются.

- [ ] **Step 7: Проверить синтаксис и приватность**

Run:

```bash
node --check ai_native_book/assets/book-v2.js
node --test tests/book-v2.test.mjs
rg -n 'fetch\\(|XMLHttpRequest|sendBeacon|https?://' ai_native_book/assets/book-v2.js
```

Expected: синтаксис и тесты проходят; поиск сетевых API пуст.

- [ ] **Step 8: Зафиксировать JavaScript**

```bash
git add ai_native_book/assets/book-v2.js tests/book-v2.test.mjs
git commit -m "feat: add private guide interactions"
```

### Task 9: Провести содержательную, функциональную и визуальную приёмку

**Files:**
- Modify: только файлы, в которых проверка нашла конкретный дефект.

**Interfaces:**
- Consumes: вся локальная v2 и архив v1.
- Produces: доказательства готовности и локальный предпросмотр для пользователя.

- [ ] **Step 1: Запустить полный автоматический набор**

Run:

```bash
python3 scripts/check_ai_native_book.py
node --check ai_native_book/assets/book-v2.js
node --test tests/book-v2.test.mjs
git diff --check
```

Expected: все команды проходят без предупреждений.

- [ ] **Step 2: Запустить локальный сервер**

Run:

```bash
python3 -m http.server 8765 --bind 127.0.0.1
```

Expected: страницы доступны локально по `/ai_native_book/` и `/ai_native_book/v1/`.

- [ ] **Step 3: Проверить без JavaScript**

Отключить JavaScript в браузере и проверить полный текст, оглавление, якоря, форму для ручного заполнения, ссылки на шаблоны и печать.

- [ ] **Step 4: Проверить основные взаимодействия**

Заполнить карту, перезагрузить страницу, экспортировать Markdown, очистить данные, выполнить поиск, выбрать оба маршрута и скопировать шаблон. Во вкладке «Сеть» подтвердить отсутствие отправки значений формы.

- [ ] **Step 5: Проверить доступность**

Пройти страницу клавиатурой и программой экранного доступа. Проверить порядок заголовков, подписи полей, сообщения состояния, таблицы, фокус, отсутствие значения только в цвете, увеличение 400% и `prefers-reduced-motion`.

- [ ] **Step 6: Проверить экраны и печать**

Сделать и сравнить снимки 360 × 800, 768 × 1024 и 1280 × 900. Проверить обрезку, ширину текста, отступы, оглавление, таблицы, первый экран и печатную версию.

- [ ] **Step 7: Перепроверить содержание**

Сверить каждое сильное фактическое утверждение с `source-register.md`, а каждый тезис Google — с `audit-matrix.md`. Прочитать русский текст вслух; убрать канцелярит, непояснённые заимствования, повторы и предложения, которые приходится перечитывать.

- [ ] **Step 8: Проверить границы Git**

Run:

```bash
git status --short
git diff --name-only main...HEAD
```

Expected: `.DS_Store` и `google_guide/` остаются только пользовательскими неотслеживаемыми файлами; удалённая отправка не выполнялась.

- [ ] **Step 9: Зафиксировать только найденные исправления**

Добавить точные изменённые файлы отдельными путями и создать локальный коммит:

```bash
git commit -m "fix: complete AI-native guide v2 review"
```

Если после проверок изменений нет, отдельный пустой коммит не создавать.

### Task 10: Передать локальную версию на утверждение

**Files:**
- No file changes.

**Interfaces:**
- Produces: локальный адрес предпросмотра, краткий аудит, список проверок и явный статус «не опубликовано».

- [ ] **Step 1: Подготовить краткий отчёт**

Сообщить:

- что сохранено из v1;
- что принято, адаптировано и отвергнуто из Google;
- какие факты были исправлены при перепроверке;
- какие тесты и ручные проверки прошли;
- какие файлы принадлежат v2 и архиву.

- [ ] **Step 2: Передать предпросмотр**

Открыть локальную страницу в доступном браузере и попросить пользователя проверить текст, маршруты, карту зрелости и шаблоны.

- [ ] **Step 3: Сохранить запрет на публикацию**

Не выполнять `git push`, не сливать ветку и не менять GitHub Pages. Следующий внешний шаг возможен только после точной команды пользователя «публикуй».
