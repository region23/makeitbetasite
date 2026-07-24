import tempfile
import unittest
from pathlib import Path

from scripts.check_ai_native_book import validate_html_text


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


if __name__ == "__main__":
    unittest.main()
