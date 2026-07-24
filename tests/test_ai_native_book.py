import unittest
from pathlib import Path

from scripts.check_ai_native_book import validate_html_text

ROOT = Path(__file__).resolve().parents[1]

def minimal_page(body: str, *, head: str = "") -> str:
    return f"""<!doctype html>
<html lang="ru">
  <head>
    <link rel="canonical" href="https://makeitbeta.ru/ai_native_book/">
    {head}
  </head>
  <body>
    <a class="skip-link" href="#main-content">К содержанию</a>
    <main id="main-content">{body}</main>
    <details><summary>Оглавление</summary></details>
  </body>
</html>"""


class HeadingHierarchyTests(unittest.TestCase):
    def test_rejects_heading_before_the_single_h1(self) -> None:
        html = minimal_page("<h2>Оглавление</h2><h1>Руководство</h1>")

        errors = validate_html_text(html, archive=False)

        self.assertTrue(
            any("первым заголовком" in error.lower() for error in errors),
            errors,
        )

    def test_rejects_skipped_heading_level(self) -> None:
        html = minimal_page("<h1>Руководство</h1><h3>Как читать</h3>")

        errors = validate_html_text(html, archive=False)

        self.assertTrue(
            any("уровень заголовка" in error.lower() for error in errors),
            errors,
        )


class VersionTwoAuthorshipTests(unittest.TestCase):
    def test_v2_requires_named_visible_author_and_author_links(self) -> None:
        html = minimal_page(
            "<h1>Руководство</h1><h2>Как читать</h2>",
            head='<meta name="book-version" content="2.0">',
        )

        errors = validate_html_text(html, archive=False)

        self.assertTrue(
            any("павел павленко" in error.lower() for error in errors),
            errors,
        )
        self.assertTrue(
            any("t.me/pavlenkodev" in error.lower() for error in errors),
            errors,
        )
        self.assertTrue(
            any("makeitbeta.ru" in error.lower() for error in errors),
            errors,
        )


class VersionTwoSourceAndTemplateTests(unittest.TestCase):
    def test_v2_rejects_the_old_path_as_a_source_for_v1(self) -> None:
        html = minimal_page(
            """<h1>Руководство</h1><h2>Как читать</h2>
            <p>Автор: Павел Павленко.
              <a href="https://t.me/pavlenkodev">Telegram</a>
              <a href="https://makeitbeta.ru">Сайт</a>
            </p>
            <p>Первая версия проверена по ai_native_book/index.html.</p>""",
            head=(
                '<meta name="book-version" content="2.0">'
                '<meta name="author" content="Павел Павленко">'
            ),
        )

        errors = validate_html_text(html, archive=False)

        self.assertTrue(
            any("ai_native_book/v1/index.html" in error for error in errors),
            errors,
        )

    def test_v2_requires_the_exact_numbered_registry_of_thirteen_templates(self) -> None:
        html = minimal_page(
            """<h1>Руководство</h1><h2>Как читать</h2>
            <p>Автор: Павел Павленко.
              <a href="https://t.me/pavlenkodev">Telegram</a>
              <a href="https://makeitbeta.ru">Сайт</a>
            </p>""",
            head=(
                '<meta name="book-version" content="2.0">'
                '<meta name="author" content="Павел Павленко">'
            ),
        )

        errors = validate_html_text(html, archive=False)

        self.assertTrue(
            any("реестр 13 шаблонов" in error.lower() for error in errors),
            errors,
        )


class NoJavaScriptRouteTests(unittest.TestCase):
    def test_v2_rejects_routes_without_static_links(self) -> None:
        html = minimal_page(
            """<h1>Руководство</h1><h2>Как читать</h2>
            <p>Автор: Павел Павленко.
              <a href="https://t.me/pavlenkodev">Telegram</a>
              <a href="https://makeitbeta.ru">Сайт</a>
            </p>
            <button data-route="startup">Я строю стартап</button>
            <button data-route="mature">Я меняю зрелую компанию</button>""",
            head=(
                '<meta name="book-version" content="2.0">'
                '<meta name="author" content="Павел Павленко">'
            ),
        )

        errors = validate_html_text(html, archive=False)

        self.assertTrue(
            any(
                "маршрут" in error.lower() and "javascript" in error.lower()
                for error in errors
            ),
            errors,
        )


class ArchiveDependencyTests(unittest.TestCase):
    def test_archive_rejects_remote_styles_scripts_and_connection_hints(self) -> None:
        html = """<!doctype html>
<html lang="ru">
  <head>
    <meta name="robots" content="noindex,follow">
    <link rel="canonical" href="https://makeitbeta.ru/ai_native_book/">
    <link rel="preconnect" href="https://fonts.example.test">
    <link rel="stylesheet" href="https://cdn.example.test/archive.css">
    <script src="//cdn.example.test/archive.js"></script>
  </head>
  <body><h1>Архив</h1></body>
</html>"""

        errors = validate_html_text(html, archive=True)

        self.assertTrue(
            any("внеш" in error.lower() and "css" in error.lower() for error in errors),
            errors,
        )
        self.assertTrue(
            any(
                "внеш" in error.lower() and "javascript" in error.lower()
                for error in errors
            ),
            errors,
        )
        self.assertTrue(
            any("preconnect" in error.lower() for error in errors),
            errors,
        )


class SourceRegisterTests(unittest.TestCase):
    def test_google_five_day_materials_are_dated_june_2026(self) -> None:
        register = (
            ROOT / "docs" / "ai-native-book-v2" / "source-register.md"
        ).read_text(encoding="utf-8")
        google_entry = register.split("## GOOGLE-2026-five-day-agents", 1)[1].split(
            "\n## ", 1
        )[0]

        self.assertIn("Опубликовано: 2026-06", google_entry)
        self.assertNotIn("Опубликовано: 2026-05", google_entry)


class LayoutStylesheetTests(unittest.TestCase):
    def test_reading_measure_and_scorecard_grid_are_responsive(self) -> None:
        css = (ROOT / "ai_native_book" / "assets" / "book-v2.css").read_text(
            encoding="utf-8"
        )

        self.assertIn("--measure: 82ch;", css)
        self.assertIn("minmax(12rem, 1fr)", css)
        self.assertIn(
            "grid-template-columns: repeat(3, minmax(0, 1fr));", css
        )
        self.assertIn("grid-template-columns: 1fr;", css)


if __name__ == "__main__":
    unittest.main()
