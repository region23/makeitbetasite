import unittest
from argparse import Namespace
from pathlib import Path

from scripts.build_ai_native_book_chapters import CHAPTERS, SOURCE, render
from scripts.publish_to_blog import render_article


ROOT = Path(__file__).resolve().parents[1]
EXCLUDED_PREFIXES = ("howtodeal/source-original/",)
MARKERS = (
    "https://mc.yandex.ru/metrika/tag.js?id=108768403",
    "ym(108768403, 'init'",
    "https://mc.yandex.ru/watch/108768403",
)


class YandexMetrikaTests(unittest.TestCase):
    def test_every_html_document_has_one_complete_counter(self) -> None:
        pages = sorted(
            path
            for path in ROOT.rglob("*.html")
            if not path.relative_to(ROOT).as_posix().startswith(EXCLUDED_PREFIXES)
        )

        self.assertTrue(pages)
        for path in pages:
            html = path.read_text(encoding="utf-8")
            with self.subTest(path=path.relative_to(ROOT)):
                for marker in MARKERS:
                    self.assertIn(marker, html)
                self.assertEqual(html.count(MARKERS[0]), 1)
                self.assertNotIn("webvisor", html.lower())
                self.assertNotIn("ecommerce", html.lower())

    def test_new_blog_articles_are_rendered_from_counter_template(self) -> None:
        args = Namespace(
            category="оригинал",
            original_url="",
            original_author="",
            translated_by="Автор",
            translator_url="https://t.me/example",
            channel_url="https://t.me/example-channel",
            channel_name="@example-channel",
            read_time="5 мин",
            title="Тестовая статья",
            slug="2026-09-15-test-article",
        )

        html = render_article(args, "<p>Текст.</p>")

        for marker in MARKERS:
            self.assertIn(marker, html)
        self.assertNotIn("webvisor", html.lower())
        self.assertNotIn("ecommerce", html.lower())

    def test_new_book_chapters_are_rendered_with_counter(self) -> None:
        source = SOURCE.read_text(encoding="utf-8")

        for chapter in CHAPTERS:
            html = render(chapter, source)
            with self.subTest(chapter=chapter.filename):
                for marker in MARKERS:
                    self.assertIn(marker, html)
                self.assertNotIn("webvisor", html.lower())
                self.assertNotIn("ecommerce", html.lower())


if __name__ == "__main__":
    unittest.main()
