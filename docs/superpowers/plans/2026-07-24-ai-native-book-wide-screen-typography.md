# AI-native guide wide-screen typography Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Increase the guide’s physical text scale and main-column width on screens of 1600px and above without changing laptop or mobile layout.

**Architecture:** Keep existing default CSS values. Add one 100rem media query that overrides the body font size, content measure, desktop rail, and shell width; no HTML or JavaScript changes are required.

**Tech Stack:** Static CSS, Python unittest, Node test runner.

## Global Constraints

- The wide-screen rule begins at exactly 100rem.
- The wide-screen body font is 1.6875rem and the reading measure is 78ch.
- Below 100rem, the current responsive layout remains intact.

### Task 1: Define the wide-screen CSS contract

**Files:** Modify and test `tests/test_ai_native_book.py`.

- [x] Add `LayoutStylesheetTests.test_wide_screen_typography_scales_from_1600px` that asserts a `@media (min-width: 100rem)` block contains `font-size: 1.6875rem;`, `--measure: 78ch;`, a wider `--shell`, and a narrower `--rail`.
- [x] Run `python3 -m unittest tests.test_ai_native_book.LayoutStylesheetTests -v`; it fails before the stylesheet is changed.

### Task 2: Implement and verify the override

**Files:** Modify `ai_native_book/assets/book-v2.css`; verify with `tests/test_ai_native_book.py`.

- [x] Add the minimal 100rem media-query override after the existing desktop layout rules.
- [x] Run the focused Python test; it passes.
- [x] Run `python3 scripts/check_ai_native_book.py --phase all`, `python3 -m unittest discover -s tests -q`, `node --check ai_native_book/assets/book-v2.js`, `node --test tests/book-v2.test.mjs`, and `git diff --check`; all exit with code 0.
- [x] Visually verify 1600px, 1024px, and 390px viewports; reset the temporary viewport override.
- [ ] Commit the CSS, test, and implementation plan with `fix: scale guide typography on wide screens`.
