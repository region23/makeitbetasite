import tempfile
import unittest
from pathlib import Path

from scripts.check_ai_native_book import run_checks, validate_html_text


EXPECTED_IDS = [*(f"ch{number}" for number in range(1, 13)), "sources", "version", "changelog"]
EXPECTED_TEMPLATES = [
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
]


def html_from_temp_file(html: str) -> str:
    """Exercise the validator with HTML produced as a temporary page fixture."""
    with tempfile.TemporaryDirectory() as directory:
        path = Path(directory) / "index.html"
        path.write_text(html, encoding="utf-8")
        return path.read_text(encoding="utf-8")


def valid_html(*, archive: bool = False) -> str:
    archive_meta = '<meta name="robots" content="noindex,follow">' if archive else ""
    sections = "".join(f'<section id="{section_id}"></section>' for section_id in EXPECTED_IDS)
    templates = "".join(
        f'<a href="templates/{template}">{template}</a>' for template in EXPECTED_TEMPLATES
    )
    return f"""<!doctype html>
<html lang="ru">
  <head>
    <link rel="canonical" href="https://example.test/ai-native-book/">
    {archive_meta}
  </head>
  <body>
    <a class="skip-link" href="#guide">К содержанию</a>
    <main id="guide">
      <h1>AI-native компания</h1>
      <details><summary>Оглавление</summary></details>
      {sections}
      {templates}
    </main>
  </body>
</html>"""


def write_project(
    root: Path,
    *,
    stylesheet: str,
    script: str,
    css_text: str = "body { color: black; }",
    js_text: str = "document.documentElement.dataset.ready = 'true';",
) -> None:
    book = root / "ai_native_book"
    assets = book / "assets"
    archive = book / "v1"
    assets.mkdir(parents=True)
    archive.mkdir()
    page = valid_html().replace(
        "</head>",
        f'<link rel="stylesheet" href="{stylesheet}">'
        f'<script src="{script}"></script></head>',
    )
    (book / "index.html").write_text(page, encoding="utf-8")
    (archive / "index.html").write_text(valid_html(archive=True), encoding="utf-8")
    (assets / "book.css").write_text(css_text, encoding="utf-8")
    (assets / "book.js").write_text(js_text, encoding="utf-8")


class ValidateHtmlTextTests(unittest.TestCase):
    def test_accepts_valid_minimal_page(self) -> None:
        errors = validate_html_text(html_from_temp_file(valid_html()), archive=False)

        self.assertEqual(errors, [])

    def test_rejects_yandex_analytics(self) -> None:
        html = valid_html().replace(
            "</body>",
            '<script src="https://mc.yandex.ru/metrika/tag.js"></script></body>',
        )

        errors = validate_html_text(html_from_temp_file(html), archive=False)

        self.assertTrue(any("аналитик" in error.lower() for error in errors))

    def test_rejects_page_with_lost_chapter_anchor(self) -> None:
        html = valid_html().replace('<section id="ch1"></section>', "")

        errors = validate_html_text(html_from_temp_file(html), archive=False)

        self.assertTrue(any("ch1" in error for error in errors))

    def test_rejects_archive_without_noindex_follow(self) -> None:
        errors = validate_html_text(html_from_temp_file(valid_html()), archive=True)

        self.assertTrue(any("noindex,follow" in error for error in errors))

    def test_rejects_skip_link_without_matching_main_id(self) -> None:
        html = valid_html().replace('href="#guide"', 'href="#missing"')

        errors = validate_html_text(html, archive=False)

        self.assertTrue(any("skip-link" in error for error in errors))

    def test_rejects_skip_link_to_another_document(self) -> None:
        html = valid_html().replace('href="#guide"', 'href="/other#guide"')

        errors = validate_html_text(html, archive=False)

        self.assertTrue(any("skip-link" in error for error in errors))

    def test_rejects_summary_outside_details(self) -> None:
        html = valid_html().replace(
            "<details><summary>Оглавление</summary></details>",
            "<details></details><summary>Оглавление</summary>",
        )

        errors = validate_html_text(html, archive=False)

        self.assertTrue(any("summary" in error for error in errors))

    def test_rejects_h1_outside_main(self) -> None:
        html = valid_html().replace(
            '<main id="guide">\n      <h1>AI-native компания</h1>',
            '<h1>AI-native компания</h1>\n    <main id="guide">',
        )

        errors = validate_html_text(html, archive=False)

        self.assertTrue(any("h1" in error for error in errors))

    def test_canonical_must_be_a_link_element(self) -> None:
        html = valid_html().replace(
            '<link rel="canonical" href="https://example.test/ai-native-book/">',
            '<a rel="canonical" href="https://example.test/ai-native-book/">Канон</a>',
        )

        errors = validate_html_text(html, archive=False)

        self.assertTrue(any("canonical" in error for error in errors))

    def test_rejects_duplicate_ids(self) -> None:
        html = valid_html().replace(
            '<section id="ch1"></section>',
            '<section id="ch1"></section><div id="ch1"></div>',
        )

        errors = validate_html_text(html, archive=False)

        self.assertTrue(any("ch1" in error and "повтор" in error.lower() for error in errors))

    def test_rejects_duplicate_ids_in_archive(self) -> None:
        html = valid_html(archive=True).replace(
            '<section id="ch1"></section>',
            '<section id="ch1"></section><div id="ch1"></div>',
        )

        errors = validate_html_text(html, archive=True)

        self.assertTrue(any("ch1" in error and "повтор" in error.lower() for error in errors))


class AssetValidationTests(unittest.TestCase):
    def test_accepts_relative_and_root_relative_local_assets(self) -> None:
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            write_project(
                root,
                stylesheet="assets/book.css",
                script="/ai_native_book/assets/book.js",
            )

            errors = run_checks(root, phase="all")

        self.assertEqual(errors, [])

    def test_rejects_remote_stylesheet_and_script(self) -> None:
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            write_project(
                root,
                stylesheet="https://cdn.example.test/book.css",
                script="//cdn.example.test/book.js",
            )

            errors = run_checks(root, phase="all")

        self.assertTrue(any("CSS должен быть локальным" in error for error in errors))
        self.assertTrue(any("JavaScript должен быть локальным" in error for error in errors))

    def test_scans_css_and_javascript_for_privacy_violations(self) -> None:
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            write_project(
                root,
                stylesheet="assets/book.css",
                script="assets/book.js",
                css_text="/* webvisor */ body { color: black; }",
                js_text='navigator.sendBeacon("/collect", "event");',
            )

            errors = run_checks(root, phase="all")

        self.assertTrue(any("webvisor" in error for error in errors))
        self.assertTrue(any("sendbeacon" in error.lower() for error in errors))


if __name__ == "__main__":
    unittest.main()
