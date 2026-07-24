# AI-native guide consistent wide scale Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Scale wide-screen typography and spacing as one system so component labels, controls, cards, and their padding remain proportional to the 27px body text.

**Architecture:** Replace the absolute wide-screen `body` font override with a 150% root font size and a relative `1.125rem` body size. Existing `rem`-based component sizes and spacing tokens then inherit the same scale without component-specific patches; existing `em`-based prose continues to follow its parent.

**Tech Stack:** Static CSS, Python unittest, in-app browser visual verification, Node test runner.

## Global Constraints

- The consistent scale begins at exactly 100rem (1600px).
- The root font size is exactly 150% in that range.
- The wide body font is exactly 27px through a relative 1.125rem rule.
- Below 100rem, current computed sizes and responsive layout remain unchanged.
- Do not add component-specific wide-screen exceptions.

---

### Task 1: Lock the root-scale contract and remove the body-only contract

**Files:**
- Modify: `tests/test_ai_native_book.py`
- Test: `tests/test_ai_native_book.py`

**Interfaces:**
- Consumes: text of `ai_native_book/assets/book-v2.css`.
- Produces: an updated `LayoutStylesheetTests.test_wide_screen_typography_scales_from_1600px` contract.

- [x] **Step 1: Write the failing test**

Update the test so the `@media (min-width: 100rem)` rules must contain root `font-size: 150%;`, relative body `font-size: 1.125rem;`, must not contain `font-size: 1.6875rem;`, and must retain `--measure: 78ch;`, `--shell: 110rem;`, and `--rail: 14rem;`.

- [x] **Step 2: Run the focused test to verify it fails**

Run: `python3 -m unittest tests.test_ai_native_book.LayoutStylesheetTests.test_wide_screen_typography_scales_from_1600px -v`

Expected: FAIL because the stylesheet still applies absolute `1.6875rem` only to `body` and has no root scale.

### Task 2: Implement the root-scale fix and verify every viewport

**Files:**
- Modify: `ai_native_book/assets/book-v2.css`
- Test: `tests/test_ai_native_book.py`

**Interfaces:**
- Consumes: the existing `@media (min-width: 100rem)` block and `rem`-based design tokens.
- Produces: one consistent wide-screen scale with no JavaScript or HTML changes.

- [x] **Step 1: Implement the minimal CSS change**

Add `font-size: 150%;` to the wide-screen `:root` rule and replace the absolute body size with relative `font-size: 1.125rem;`.

- [x] **Step 2: Run the focused test**

Run: `python3 -m unittest tests.test_ai_native_book.LayoutStylesheetTests -v`

Expected: both layout tests PASS.

- [x] **Step 3: Run complete automated verification**

Run: `python3 scripts/check_ai_native_book.py --phase all && python3 -m unittest discover -s tests -q && node --check ai_native_book/assets/book-v2.js && node --test tests/book-v2.test.mjs && git diff --check`

Expected: every command exits with code 0.

- [x] **Step 4: Verify computed styles and screenshots**

At 1920px verify body 27px, score-option labels at least 20px, service labels at least 16px, card padding at least 36px, and no page overflow. At 1024px and 390px verify the existing body font sizes and zero page overflow. Capture matching prose, scorecard, and template-card screenshots for comparison with the audit evidence.

- [ ] **Step 5: Commit**

Stage the stylesheet, test, and this implementation plan. Commit with `fix: scale wide-screen typography consistently`.
