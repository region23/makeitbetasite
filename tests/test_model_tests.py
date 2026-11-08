"""Проверки каталога экспериментов с моделями."""
from html.parser import HTMLParser
from pathlib import Path
import unittest


ROOT = Path(__file__).resolve().parents[1]


class Links(HTMLParser):
    def __init__(self):
        super().__init__()
        self.targets = []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == 'a' and 'case-card' in attrs.get('class', '').split():
            self.targets.append(attrs.get('href'))


class ExperimentCatalogTests(unittest.TestCase):
    def test_experiments_have_unique_working_catalog_links(self):
        catalog = Links()
        catalog.feed((ROOT / 'model-tests/index.html').read_text(encoding='utf-8'))
        expected = {'/model-tests/tidal-lighthouse/', '/model-tests/utrish-lighthouse/'}
        self.assertTrue(expected.issubset(catalog.targets))
        self.assertEqual(len(catalog.targets), len(set(catalog.targets)))
        for target in catalog.targets:
            with self.subTest(target=target):
                self.assertTrue(target.startswith('/model-tests/'))
                self.assertTrue((ROOT / target.lstrip('/') / 'index.html').is_file())

class ExperimentResultTests(unittest.TestCase):
    def test_utrish_has_eight_runnable_results_and_original_prompt(self):
        from html import unescape
        import re

        page = (ROOT / 'model-tests/utrish-lighthouse/index.html').read_text(encoding='utf-8')
        targets = re.findall(r'href="(/model-tests/utrish-lighthouse/[^"/]+/)"', page)
        self.assertEqual(len(targets), 8)
        self.assertEqual(len(set(targets)), 8)
        for target in targets:
            with self.subTest(target=target):
                self.assertTrue((ROOT / target.lstrip('/') / 'index.html').is_file())
        prompt = re.search(r'<pre id="prompt-text"[^>]*>(.*?)</pre>', page, re.S)
        self.assertIsNotNone(prompt)
        self.assertEqual(unescape(prompt.group(1)), (ROOT / 'model-tests/utrish-lighthouse/prompt.txt').read_text(encoding='utf-8').strip())
        self.assertNotIn('Дополнительные запросы для Claude Opus 5.5', page)


if __name__ == '__main__':
    unittest.main()
