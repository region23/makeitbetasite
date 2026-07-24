# AI-native guide layout refinement Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Widen the guide’s main reading column and keep the maturity-map options readable at desktop, tablet, and mobile widths.

**Architecture:** CSS custom properties set the reading-column width. CSS Grid uses the same option markup and changes its column count only at responsive breakpoints; JavaScript and HTML remain unchanged.

**Tech Stack:** Static HTML, CSS, Python unittest, Node test runner.

## Global Constraints

- Keep the mobile option list as a single column.
- Preserve radio inputs, labels, local storage behaviour, and semantic HTML.
- Do not add a dependency or modify the guide’s prose.

### Task 1: Lock the responsive layout contract in an automated check

**Files:** Modify `tests/test_ai_native_book.py`; test `tests/test_ai_native_book.py`.

**Interface:** The test reads `ai_native_book/assets/book-v2.css` and requires `--measure: 82ch;`, `minmax(12rem, 1fr)`, `grid-template-columns: repeat(3, minmax(0, 1fr));`, and `grid-template-columns: 1fr;`.

- [x] Write `LayoutStylesheetTests.test_reading_measure_and_scorecard_grid_are_responsive` with these four assertions.
- [x] Run `python3 -m unittest tests.test_ai_native_book.LayoutStylesheetTests -v`; it fails before CSS is changed.

### Task 2: Implement and verify the responsive CSS layout

**Files:** Modify `ai_native_book/assets/book-v2.css`; verify with `tests/test_ai_native_book.py`.

**Interface:** `--measure` is 82ch. `.score-options` remains a one-column grid by default, uses three columns from 48rem, and uses `repeat(auto-fit, minmax(12rem, 1fr))` from 70rem.

- [x] Add the smallest CSS rules implementing the above contract.
- [x] Run `python3 -m unittest tests.test_ai_native_book.LayoutStylesheetTests -v`; it passes.
- [x] Run `python3 scripts/check_ai_native_book.py --phase all`, `python3 -m unittest discover -s tests -q`, `node --check ai_native_book/assets/book-v2.js`, `node --test tests/book-v2.test.mjs`, and `git diff --check`; all exit with code 0.
- [ ] Commit the CSS, test, and implementation plan with `fix: refine guide content width and scorecard layout`.
