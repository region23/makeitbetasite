"""Regression checks for the shared site navigation and footer."""

import unittest
from argparse import Namespace
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit

from scripts.build_ai_native_book_chapters import CHAPTERS, SOURCE, render
from scripts.publish_to_blog import render_article


ROOT = Path(__file__).resolve().parents[1]
SHELL = ROOT / "site-shell"
HEADER_START = "<!-- site-header:start -->"
HEADER_END = "<!-- site-header:end -->"
FOOTER_START = "<!-- site-footer:start -->"
FOOTER_END = "<!-- site-footer:end -->"


def site_pages():
    return sorted({
        ROOT / "index.html",
        ROOT / "blog/index.html",
        ROOT / "blog/_template.html",
        *ROOT.glob("blog/*/index.html"),
        ROOT / "consulting/index.html",
        ROOT / "howtodeal/index.html",
        ROOT / "model-tests/index.html",
        ROOT / "model-tests/tidal-lighthouse/index.html",
        ROOT / "model-tests/utrish-lighthouse/index.html",
        *ROOT.glob("ai_native_book/*.html"),
        *ROOT.glob("ai_native_book_new_design/*.html"),
        ROOT / "ai_native_book/v1/index.html",
    })


def block(html, start, end):
    if html.count(start) != 1 or html.count(end) != 1:
        raise ValueError(f"Ожидалась одна пара маркеров {start} / {end}")
    before, rest = html.split(start, 1)
    inside, after = rest.split(end, 1)
    return inside.strip()


def template_body(name, start, end):
    html = (SHELL / name).read_text(encoding="utf-8")
    return block(html, start, end) if start in html or end in html else html.strip()


class Elements(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids = set()
        self.links = []
        self.stylesheets = []
        self.scripts = []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if attrs.get("id"):
            self.ids.add(attrs["id"])
        if tag == "a" and "href" in attrs:
            self.links.append(attrs["href"])
        if tag == "link" and "stylesheet" in attrs.get("rel", "").split():
            self.stylesheets.append(attrs.get("href", ""))
        if tag == "script" and attrs.get("src"):
            self.scripts.append(attrs["src"])


def elements(html):
    result = Elements()
    result.feed(html)
    return result


class SiteShellTests(unittest.TestCase):
    def assert_shell_matches(self, html):
        for name, start, end in (
            ("header.html", HEADER_START, HEADER_END),
            ("footer.html", FOOTER_START, FOOTER_END),
        ):
            with self.subTest(part=name):
                self.assertEqual(block(html, start, end), template_body(name, start, end))
        parsed = elements(html)
        self.assertIn("/site-shell/site-shell.css", parsed.stylesheets)
        self.assertIn("/site-shell/site-shell.js", parsed.scripts)

    def test_pages_use_the_shared_header_and_footer(self):
        pages = site_pages()
        self.assertGreater(len(pages), 40)
        for page in pages:
            with self.subTest(page=page.relative_to(ROOT)):
                self.assertTrue(page.is_file(), f"Страница отсутствует: {page}")
                self.assert_shell_matches(page.read_text(encoding="utf-8"))

    def test_shared_links_resolve_from_any_page(self):
        header = template_body("header.html", HEADER_START, HEADER_END)
        footer = template_body("footer.html", FOOTER_START, FOOTER_END)
        links = elements(header).links + elements(footer).links
        self.assertEqual(elements(header).links, [
            "/", "/#projects", "/model-tests/", "/blog/", "/consulting/", "/#contact",
        ])
        self.assertNotIn("https://t.me/makeitbetabot", links)
        for href in links:
            with self.subTest(href=href):
                url = urlsplit(href)
                if url.scheme or url.netloc:
                    self.assertIn(url.scheme, ("https", "mailto", "tel"))
                    continue
                self.assertTrue(url.path.startswith("/"), f"Нужен путь от корня: {href}")
                path = ROOT / unquote(url.path).lstrip("/")
                if path.is_dir():
                    path /= "index.html"
                self.assertTrue(path.is_file(), f"Не найдена цель: {href}")
                if url.fragment:
                    target = elements(path.read_text(encoding="utf-8"))
                    self.assertIn(unquote(url.fragment), target.ids, f"Не найден якорь: {href}")

        self.assertTrue((SHELL / "site-shell.css").is_file())
        self.assertTrue((SHELL / "site-shell.js").is_file())

    def test_new_blog_article_keeps_shared_shell(self):
        args = Namespace(
            category="оригинал", original_url="", original_author="",
            translated_by="Автор", translator_url="https://t.me/example",
            channel_url="https://t.me/example-channel", channel_name="@example-channel",
            read_time="5 мин", title="Тестовая статья", slug="2026-09-15-test-article",
        )
        self.assert_shell_matches(render_article(args, "<p>Текст.</p>"))

    def test_new_book_chapters_keep_shared_shell(self):
        source = SOURCE.read_text(encoding="utf-8")
        for chapter in CHAPTERS:
            with self.subTest(chapter=chapter.filename):
                self.assert_shell_matches(render(chapter, source))


if __name__ == "__main__":
    unittest.main()
