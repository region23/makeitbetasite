# AI-native Book Multipage Completion Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Finish chapters 3–8 and 11 without changing their source text, preserve legacy hash links, and deploy the completed multipage edition to `ai_native_book/`.

**Architecture:** `ai_native_book_new_design/full.html` remains the canonical source for chapter prose. The new chapter pages reuse the chapter shell, inline design tokens, and `assets/book-v3.js`; navigation and legacy redirects point to the semantic destination of each old anchor. A focused Python unittest verifies the generated static graph and normalized visible chapter text.

**Tech Stack:** Static HTML, inline CSS, vanilla JavaScript, Python 3 `unittest` and `html.parser`.

## Global Constraints

- Copy chapter prose verbatim from `ai_native_book_new_design/full.html`.
- Use `chapter-01.html` for the chapter shell and `chapter-10.html` for table-heavy layout patterns.
- Keep `ai_native_book/v1/` unchanged.
- Do not add a framework, build step, or runtime dependency.
- Preserve the legacy meaning of `#ch1` through `#ch12`, not merely their numeric spelling.

---

### Task 1: Multipage regression checks

**Files:**
- Create: `tests/test_ai_native_book_multipage.py`

**Interfaces:**
- Consumes: static files in `ai_native_book_new_design/` and `ai_native_book/`
- Produces: `python3 -m unittest tests.test_ai_native_book_multipage -v`

- [ ] **Step 1: Write failing structural tests**

```python
EXPECTED_CHAPTERS = tuple(f"chapter-{number:02}.html" for number in range(1, 13))
EXPECTED_NEXT = {
    "chapter-01.html": "chapter-02.html",
    "chapter-02.html": "chapter-03.html",
    "chapter-03.html": "chapter-04.html",
    "chapter-04.html": "chapter-05.html",
    "chapter-05.html": "chapter-06.html",
    "chapter-06.html": "chapter-07.html",
    "chapter-07.html": "chapter-08.html",
    "chapter-08.html": "chapter-09.html",
    "chapter-09.html": "chapter-10.html",
    "chapter-10.html": "chapter-11.html",
    "chapter-11.html": "chapter-12.html",
    "chapter-12.html": "sources.html",
}
```

The tests must also assert the exact legacy hash map, hub links, local targets, and normalized source-to-page text.

- [ ] **Step 2: Run the focused test and confirm RED**

Run:

```bash
python3 -m unittest tests.test_ai_native_book_multipage -v
```

Expected: failure because `chapter-03.html` through `chapter-08.html` and `chapter-11.html` do not exist and `index.html` has no legacy hash router.

- [ ] **Step 3: Commit**

```bash
git add tests/test_ai_native_book_multipage.py
git commit -m "test: cover AI-native multipage navigation"
```

### Task 2: New chapter pages

**Files:**
- Create: `ai_native_book_new_design/chapter-03.html`
- Create: `ai_native_book_new_design/chapter-04.html`
- Create: `ai_native_book_new_design/chapter-05.html`
- Create: `ai_native_book_new_design/chapter-06.html`
- Create: `ai_native_book_new_design/chapter-07.html`
- Create: `ai_native_book_new_design/chapter-08.html`
- Create: `ai_native_book_new_design/chapter-11.html`

**Interfaces:**
- Consumes source sections `first-managed-loop`, `ch3`, `context-memory-skills`, `ch6`, `ch7`, `ch9`, and `ch5` from `full.html`
- Produces pages with `body[data-page="chN"]`, progress tracking, chapter rail, source-backed article, checklist, and canonical prev/next links

- [ ] **Step 1: Add the common shell and exact content**

Each page must use:

```html
<body data-page="chN">
  <div aria-hidden="true"><div data-progress></div></div>
  <header>…</header>
  <section>…<h1>Source title</h1>…</section>
  <div>
    <nav aria-label="В этой главе">…</nav>
    <article data-source-section="legacy-id">…verbatim source content…</article>
  </div>
  <footer>…canonical prev/next…</footer>
  <script src="./assets/book-v3.js" defer></script>
</body>
```

Source and audit references must keep their visible labels and point to `./full.html#…`. Checklist inputs must receive stable zero-based `data-reading-check` indices.

- [ ] **Step 2: Run the focused test**

Run:

```bash
python3 -m unittest tests.test_ai_native_book_multipage -v
```

Expected: chapter existence and verbatim-content assertions pass; navigation and redirect assertions may still fail.

- [ ] **Step 3: Commit**

```bash
git add ai_native_book_new_design/chapter-0{3,4,5,6,7,8}.html ai_native_book_new_design/chapter-11.html
git commit -m "feat: add remaining AI-native book chapters"
```

### Task 3: Legacy redirects and navigation graph

**Files:**
- Modify: `ai_native_book_new_design/index.html`
- Modify: `ai_native_book_new_design/chapter-02.html`
- Modify: `ai_native_book_new_design/chapter-09.html`
- Modify: `ai_native_book_new_design/chapter-10.html`
- Modify: `ai_native_book_new_design/chapter-12.html`
- Modify: `ai_native_book_new_design/assets/book-v3.js`

**Interfaces:**
- Consumes: legacy `location.hash`
- Produces: an early `location.replace()` to the semantic page and a complete 1→12→sources navigation graph

- [ ] **Step 1: Add the exact redirect table**

```javascript
var legacyHashRoutes = {
  '#ch1': './chapter-01.html',
  '#ch2': './chapter-02.html',
  '#ch3': './chapter-04.html',
  '#ch4': './chapter-10.html',
  '#ch5': './chapter-11.html',
  '#ch6': './chapter-06.html',
  '#ch7': './chapter-07.html',
  '#ch8': './chapter-09.html',
  '#ch9': './chapter-08.html',
  '#ch10': './full.html#ch10',
  '#ch11': './full.html#ch11',
  '#ch12': './chapter-12.html',
  '#sources': './sources.html',
  '#version': './version.html',
  '#changelog': './version.html#что-изменилось'
};
```

- [ ] **Step 2: Replace hub and neighboring footer links**

All chapter cards must use `chapter-NN.html`; the systems map must link to the corresponding chapter page. Update neighboring existing pages so the sequence has no fallback through `full.html`.

- [ ] **Step 3: Expand the continue-reading map**

```javascript
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
```

- [ ] **Step 4: Run the focused test**

Run:

```bash
python3 -m unittest tests.test_ai_native_book_multipage -v
```

Expected: all focused tests pass.

- [ ] **Step 5: Commit**

```bash
git add ai_native_book_new_design/index.html ai_native_book_new_design/chapter-02.html ai_native_book_new_design/chapter-09.html ai_native_book_new_design/chapter-10.html ai_native_book_new_design/chapter-12.html ai_native_book_new_design/assets/book-v3.js
git commit -m "feat: complete AI-native book navigation"
```

### Task 4: Deploy the static edition and verify

**Files:**
- Modify/Create: matching files under `ai_native_book/`
- Preserve: `ai_native_book/v1/index.html`

**Interfaces:**
- Consumes: completed `ai_native_book_new_design/`
- Produces: deployable `/ai_native_book/` static pages

- [ ] **Step 1: Mechanically synchronize the handoff files**

Copy the completed HTML pages, `assets/book-v3.js`, legacy `book-v2` assets, and templates into `ai_native_book/` without deleting `ai_native_book/v1/`.

- [ ] **Step 2: Run focused and existing tests**

Run:

```bash
python3 -m unittest tests.test_ai_native_book_multipage -v
python3 -m unittest discover -s tests -p 'test*.py' -v
node --test tests/book-v2.test.mjs
```

Expected: all tests pass.

- [ ] **Step 3: Verify local links and repository diff**

Run:

```bash
python3 -m unittest tests.test_ai_native_book_multipage.LocalLinkTests -v
git diff --check
git status --short
```

Expected: no missing local targets, no whitespace errors, and only intended book/test/plan changes.
