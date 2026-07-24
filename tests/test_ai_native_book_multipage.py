import html
import json
import re
import subprocess
import unittest
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit


ROOT = Path(__file__).resolve().parents[1]
DESIGN = ROOT / "ai_native_book_new_design"
DEPLOYED = ROOT / "ai_native_book"

CHAPTER_FILES = tuple(f"chapter-{number:02}.html" for number in range(1, 13))
NEW_SOURCE_SECTIONS = {
    "chapter-03.html": "first-managed-loop",
    "chapter-04.html": "ch3",
    "chapter-05.html": "context-memory-skills",
    "chapter-06.html": "ch6",
    "chapter-07.html": "ch7",
    "chapter-08.html": "ch9",
    "chapter-11.html": "ch5",
}
LEGACY_HASH_ROUTES = {
    "#ch1": "./chapter-01.html",
    "#ch2": "./chapter-02.html",
    "#ch3": "./chapter-04.html",
    "#ch4": "./chapter-10.html",
    "#ch5": "./chapter-11.html",
    "#ch6": "./chapter-06.html",
    "#ch7": "./chapter-07.html",
    "#ch8": "./chapter-09.html",
    "#ch9": "./chapter-08.html",
    "#ch10": "./full.html#ch10",
    "#ch11": "./full.html#ch11",
    "#ch12": "./chapter-12.html",
    "#sources": "./sources.html",
    "#version": "./version.html",
    "#changelog": "./version.html#что-изменилось",
    "#first-managed-loop": "./chapter-03.html",
    "#context-memory-skills": "./chapter-05.html",
}
FOOTER_GRAPH = {
    "chapter-01.html": ("./index.html", "./chapter-02.html"),
    "chapter-02.html": ("./chapter-01.html", "./chapter-03.html"),
    "chapter-03.html": ("./chapter-02.html", "./chapter-04.html"),
    "chapter-04.html": ("./chapter-03.html", "./chapter-05.html"),
    "chapter-05.html": ("./chapter-04.html", "./chapter-06.html"),
    "chapter-06.html": ("./chapter-05.html", "./chapter-07.html"),
    "chapter-07.html": ("./chapter-06.html", "./chapter-08.html"),
    "chapter-08.html": ("./chapter-07.html", "./chapter-09.html"),
    "chapter-09.html": ("./chapter-08.html", "./chapter-10.html"),
    "chapter-10.html": ("./chapter-09.html", "./chapter-11.html"),
    "chapter-11.html": ("./chapter-10.html", "./chapter-12.html"),
    "chapter-12.html": ("./chapter-11.html", "./sources.html"),
}
DEPLOYED_MIRRORS = (
    "index.html",
    "full.html",
    "sources.html",
    "version.html",
    *CHAPTER_FILES,
    "assets/book-v2.css",
    "assets/book-v2.js",
    "assets/book-v3.js",
)


class _VisibleText(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.parts: list[str] = []
        self.ignored_depth = 0

    def handle_starttag(
        self, tag: str, attrs: list[tuple[str, str | None]]
    ) -> None:
        if tag in {"script", "style"}:
            self.ignored_depth += 1

    def handle_endtag(self, tag: str) -> None:
        if tag in {"script", "style"} and self.ignored_depth:
            self.ignored_depth -= 1

    def handle_data(self, data: str) -> None:
        if self.ignored_depth:
            return
        value = data.strip()
        if value and value != "#":
            self.parts.append(value)


def visible_text(fragment: str) -> str:
    parser = _VisibleText()
    parser.feed(fragment)
    return re.sub(r"\s+", " ", " ".join(parser.parts)).strip()


def element_inner_html(document: str, tag: str, attribute: str, value: str) -> str:
    match = re.search(
        rf'<{tag}\b[^>]*\b{re.escape(attribute)}="{re.escape(value)}"[^>]*>'
        rf"(.*?)</{tag}>",
        document,
        flags=re.DOTALL,
    )
    if match is None:
        raise AssertionError(f"Не найден <{tag} {attribute}={value!r}>")
    return match.group(1)


def first_element_inner_html(document: str, tag: str) -> str:
    match = re.search(rf"<{tag}\b[^>]*>(.*?)</{tag}>", document, flags=re.DOTALL)
    if match is None:
        raise AssertionError(f"Не найден <{tag}>")
    return match.group(1)


def hrefs(fragment: str) -> list[str]:
    return re.findall(r'<a\b[^>]*\bhref="([^"]+)"', fragment)


def ids(document: str) -> set[str]:
    return set(re.findall(r'\bid="([^"]+)"', document))


class ChapterContentTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls) -> None:
        cls.full_html = (DESIGN / "full.html").read_text(encoding="utf-8")

    def test_all_twelve_chapter_pages_exist(self) -> None:
        missing = [name for name in CHAPTER_FILES if not (DESIGN / name).is_file()]
        self.assertEqual(missing, [])

    def test_new_chapter_prose_is_verbatim_from_full_page(self) -> None:
        for filename, source_id in NEW_SOURCE_SECTIONS.items():
            with self.subTest(chapter=filename):
                page = (DESIGN / filename).read_text(encoding="utf-8")
                source = element_inner_html(
                    self.full_html, "section", "id", source_id
                )
                source_h2 = first_element_inner_html(source, "h2")
                source_without_h2 = re.sub(
                    r"<h2\b[^>]*>.*?</h2>", "", source, count=1, flags=re.DOTALL
                )
                source_without_tail = re.sub(
                    r"<hr\s*/?>\s*$", "", source_without_h2, flags=re.DOTALL
                )
                article = element_inner_html(
                    page, "article", "data-source-section", source_id
                )
                page_h1 = first_element_inner_html(page, "h1")

                self.assertEqual(visible_text(page_h1), visible_text(source_h2))
                self.assertEqual(
                    visible_text(article),
                    visible_text(source_without_tail),
                )

    def test_checklist_indices_are_stable_and_sequential(self) -> None:
        for filename in NEW_SOURCE_SECTIONS:
            with self.subTest(chapter=filename):
                page = (DESIGN / filename).read_text(encoding="utf-8")
                values = re.findall(r'data-reading-check="(\d+)"', page)
                self.assertTrue(values, "В главе должен быть чек-лист")
                self.assertEqual(values, [str(index) for index in range(len(values))])


class LegacyRedirectTests(unittest.TestCase):
    def test_hub_redirects_every_legacy_hash_to_its_semantic_destination(self) -> None:
        index = (DESIGN / "index.html").read_text(encoding="utf-8")
        inline_script_match = re.search(
            r"<script>(.*?)</script>",
            index,
            flags=re.DOTALL,
        )
        self.assertIsNotNone(inline_script_match)
        inline_script = inline_script_match.group(1)
        harness = f"""
const vm = require('node:vm');
const source = {json.dumps(inline_script)};
const expected = {json.dumps(LEGACY_HASH_ROUTES, ensure_ascii=False)};
const actual = {{}};
for (const hash of Object.keys(expected)) {{
  const location = {{
    hash,
    replace(target) {{ actual[hash] = target; }}
  }};
  vm.runInNewContext(source, {{ window: {{ location }}, decodeURIComponent }});
}}
process.stdout.write(JSON.stringify(actual));
"""
        result = subprocess.run(
            ["node", "-e", harness],
            cwd=ROOT,
            check=True,
            capture_output=True,
            text=True,
        )
        self.assertEqual(json.loads(result.stdout), LEGACY_HASH_ROUTES)
        self.assertLess(index.index("legacyHashRoutes"), index.index('<link rel="preconnect"'))


class NavigationTests(unittest.TestCase):
    def test_hub_links_directly_to_every_chapter_page(self) -> None:
        index = (DESIGN / "index.html").read_text(encoding="utf-8")
        index_hrefs = hrefs(index)
        for chapter in CHAPTER_FILES:
            with self.subTest(chapter=chapter):
                self.assertIn(f"./{chapter}", index_hrefs)

        self.assertFalse(
            any(reference.startswith("./full.html#") for reference in index_hrefs),
            "Хаб не должен отправлять главы обратно в одностраничник",
        )

    def test_chapter_footers_form_one_continuous_sequence(self) -> None:
        for filename, expected in FOOTER_GRAPH.items():
            with self.subTest(chapter=filename):
                page = (DESIGN / filename).read_text(encoding="utf-8")
                footer = first_element_inner_html(page, "footer")
                self.assertEqual(tuple(hrefs(footer)), expected)

    def test_continue_reading_supports_all_chapters(self) -> None:
        script = (DESIGN / "assets" / "book-v3.js").read_text(encoding="utf-8")
        for number in range(1, 13):
            with self.subTest(chapter=number):
                self.assertRegex(
                    script,
                    rf"\bch{number}\s*:\s*\[\s*['\"]главе {number}['\"]\s*,"
                    rf"\s*['\"]\./chapter-{number:02}\.html['\"]\s*\]",
                )

    def test_continue_reading_prefers_the_most_recent_incomplete_chapter(self) -> None:
        script = (DESIGN / "assets" / "book-v3.js").read_text(encoding="utf-8")
        harness = f"""
const vm = require('node:vm');
const source = {json.dumps(script)};
const values = new Map([
  ['ainb2-progress', JSON.stringify({{ch1: 0.8, ch5: 0.1}})],
  ['ainb2-last-read', JSON.stringify({{ch1: 100, ch5: 200}})]
]);
const label = {{textContent: ''}};
const link = {{href: '', setAttribute(name, value) {{ this[name] = value; }}}};
const banner = {{
  style: {{display: 'none'}},
  querySelector(selector) {{
    return selector === '[data-continue-label]' ? label : link;
  }}
}};
const empty = [];
const context = {{
  localStorage: {{
    getItem(key) {{ return values.get(key) || null; }},
    setItem(key, value) {{ values.set(key, value); }}
  }},
  document: {{
    body: {{getAttribute() {{ return 'hub'; }}}},
    documentElement: {{}},
    querySelector(selector) {{
      return selector === '[data-continue-banner]' ? banner : null;
    }},
    querySelectorAll() {{ return empty; }}
  }},
  window: {{addEventListener() {{}}}},
  navigator: {{clipboard: {{writeText() {{ return Promise.resolve(); }}}}}},
  Blob: function () {{}},
  URL: {{createObjectURL() {{}}, revokeObjectURL() {{}}}},
  requestAnimationFrame(callback) {{ callback(); }},
  setTimeout() {{}},
  Date
}};
vm.runInNewContext(source, context);
process.stdout.write(JSON.stringify({{
  href: link.href,
  label: label.textContent,
  display: banner.style.display
}}));
"""
        result = subprocess.run(
            ["node", "-e", harness],
            cwd=ROOT,
            check=True,
            capture_output=True,
            text=True,
        )
        self.assertEqual(
            json.loads(result.stdout),
            {
                "href": "./chapter-05.html",
                "label": "на главе 5 · 10%",
                "display": "inline-flex",
            },
        )

    def test_chapter_visit_persists_its_last_read_time(self) -> None:
        script = (DESIGN / "assets" / "book-v3.js").read_text(encoding="utf-8")
        harness = f"""
const vm = require('node:vm');
const source = {json.dumps(script)};
const values = new Map();
const context = {{
  localStorage: {{
    getItem(key) {{ return values.get(key) || null; }},
    setItem(key, value) {{ values.set(key, value); }}
  }},
  document: {{
    body: {{getAttribute() {{ return 'ch5'; }}}},
    documentElement: {{}},
    querySelector() {{ return null; }},
    querySelectorAll() {{ return []; }}
  }},
  window: {{addEventListener() {{}}}},
  navigator: {{clipboard: {{writeText() {{ return Promise.resolve(); }}}}}},
  Blob: function () {{}},
  URL: {{createObjectURL() {{}}, revokeObjectURL() {{}}}},
  requestAnimationFrame(callback) {{ callback(); }},
  setTimeout() {{}},
  Date: {{now() {{ return 4242; }}}}
}};
vm.runInNewContext(source, context);
process.stdout.write(values.get('ainb2-last-read'));
"""
        result = subprocess.run(
            ["node", "-e", harness],
            cwd=ROOT,
            check=True,
            capture_output=True,
            text=True,
        )
        self.assertEqual(json.loads(result.stdout), {"ch5": 4242})

    def test_chapter_six_hub_card_matches_its_page(self) -> None:
        index = (DESIGN / "index.html").read_text(encoding="utf-8")
        card = re.search(
            r'<a href="./chapter-06\.html"[^>]*>(.*?)</a>',
            index,
            flags=re.DOTALL,
        )
        self.assertIsNotNone(card)
        self.assertEqual(
            visible_text(card.group(1)),
            "06 Новая вёрстка "
            "Жизненный цикл разработки программного обеспечения с ИИ "
            "изменение · изоляция · выпуск по риску",
        )


class DeploymentTests(unittest.TestCase):
    def test_deployed_pages_and_assets_match_the_completed_design(self) -> None:
        mismatches = []
        for relative in DEPLOYED_MIRRORS:
            design_path = DESIGN / relative
            deployed_path = DEPLOYED / relative
            if not deployed_path.is_file() or (
                design_path.read_bytes() != deployed_path.read_bytes()
            ):
                mismatches.append(relative)
        self.assertEqual(mismatches, [])


class LocalLinkTests(unittest.TestCase):
    def local_link_errors(self, book: Path) -> list[str]:
        pages = [
            book / "index.html",
            book / "sources.html",
            book / "version.html",
            *(book / chapter for chapter in CHAPTER_FILES),
        ]
        errors: list[str] = []
        cached_ids: dict[Path, set[str]] = {}

        for page in pages:
            if not page.is_file():
                errors.append(f"{page.relative_to(ROOT)}: файл отсутствует")
                continue
            document = page.read_text(encoding="utf-8")
            for reference in hrefs(document):
                parsed = urlsplit(html.unescape(reference))
                if parsed.scheme or parsed.netloc or reference.startswith("//"):
                    continue

                relative_path = unquote(parsed.path)
                if relative_path == "/ai_native_book/":
                    target = book / "index.html"
                elif relative_path.startswith("/ai_native_book/"):
                    target = book / relative_path.removeprefix("/ai_native_book/")
                else:
                    target = page if not relative_path else (page.parent / relative_path)
                target = target.resolve()
                if not target.is_file():
                    errors.append(
                        f"{page.relative_to(ROOT)}: не найдено {reference}"
                    )
                    continue

                if parsed.fragment and target.suffix.lower() == ".html":
                    target_ids = cached_ids.setdefault(
                        target,
                        ids(target.read_text(encoding="utf-8")),
                    )
                    fragment = unquote(parsed.fragment)
                    if fragment not in target_ids:
                        errors.append(
                            f"{page.relative_to(ROOT)}: нет #{fragment} в "
                            f"{target.relative_to(ROOT)}"
                        )

        return errors

    def test_local_links_in_completed_design_resolve(self) -> None:
        self.assertEqual(self.local_link_errors(DESIGN), [])

    def test_local_links_in_deployed_edition_resolve(self) -> None:
        self.assertEqual(self.local_link_errors(DEPLOYED), [])


if __name__ == "__main__":
    unittest.main()
