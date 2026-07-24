#!/usr/bin/env python3
"""Build the remaining multipage AI-native book chapters from full.html."""

from __future__ import annotations

import html
import re
from dataclasses import dataclass
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
BOOK = ROOT / "ai_native_book_new_design"
SOURCE = BOOK / "full.html"


@dataclass(frozen=True)
class Chapter:
    number: int
    source_id: str
    title: str
    part: str
    subtitle: str
    route_suffix: str = ""

    @property
    def filename(self) -> str:
        return f"chapter-{self.number:02}.html"


CHAPTERS = (
    Chapter(
        3,
        "first-managed-loop",
        "Первый управляемый цикл",
        "Часть I · Основы",
        "результат · паспорт цикла · ограниченный пилот",
    ),
    Chapter(
        4,
        "ch3",
        "Восемь систем операционной модели",
        "Часть II · Операционная модель",
        "решение · владелец · доказательство",
    ),
    Chapter(
        5,
        "context-memory-skills",
        "Контекст, память и навыки",
        "Часть II · Операционная модель",
        "источники · память · навыки агента",
    ),
    Chapter(
        6,
        "ch6",
        "Жизненный цикл разработки программного обеспечения с ИИ",
        "Часть II · Операционная модель",
        "изменение · изоляция · выпуск по риску",
    ),
    Chapter(
        7,
        "ch7",
        "Проверки качества и наблюдение",
        "Часть II · Операционная модель",
        "проверка результата · проверка пути · наблюдение",
    ),
    Chapter(
        8,
        "ch9",
        "Полномочия, безопасность и устойчивость",
        "Часть II · Операционная модель",
        "права · A0–A3 · устойчивость",
    ),
    Chapter(
        11,
        "ch5",
        "План зрелой компании: 30, 90 и 180 дней",
        "Часть III · Планы изменений",
        "маршрут Б · поток · масштабирование доказанного",
        " · маршрут Б",
    ),
)

CHAPTER_TITLES = {
    1: "Определение и границы",
    2: "Карта зрелости",
    3: "Первый управляемый цикл",
    4: "Восемь систем операционной модели",
    5: "Контекст, память и навыки",
    6: "Жизненный цикл разработки программного обеспечения с ИИ",
    7: "Проверки качества и наблюдение",
    8: "Полномочия, безопасность и устойчивость",
    9: "Экономика и полная стоимость результата",
    10: "План стартапа: 30 и 90 дней",
    11: "План зрелой компании: 30, 90 и 180 дней",
    12: "Практический комплект и следующий шаг",
}


STYLE = """
html { scroll-behavior: smooth; }
body { margin:0; background:#FBF7EE; color:#171106; font-family:Literata,"Iowan Old Style",Georgia,serif; font-size:17px; line-height:1.65; -webkit-font-smoothing:antialiased; text-rendering:optimizeLegibility; }
a { color:#9C4A0E; text-decoration-thickness:1px; text-underline-offset:.18em; }
a:hover { color:#6E3509; text-decoration-thickness:2px; }
::selection { background:#EADFC4; }
.skip-link { position:fixed; top:8px; left:8px; z-index:100; padding:8px 12px; background:#171106; color:#FBF7EE; transform:translateY(-180%); transition:transform .12s ease; }
.skip-link:focus { transform:translateY(0); }
.hv0:hover { background:#F4EEDD; }
.chapter-layout { max-width:1280px; margin:0 auto; padding:40px 24px 0; display:flex; gap:48px; align-items:flex-start; flex-wrap:wrap; }
.chapter-rail { flex:1 1 200px; max-width:240px; position:sticky; top:24px; max-height:calc(100vh - 48px); overflow:auto; }
.chapter-rail ol { margin:0; padding:0; list-style:none; display:flex; flex-direction:column; gap:8px; font-size:14px; line-height:1.4; border-left:2px solid rgba(23,17,6,.14); }
.chapter-rail li { padding-left:14px; }
.chapter-rail a { text-decoration:none; color:#4A4030; }
article { flex:999 1 480px; max-width:88ch; min-width:0; padding-bottom:64px; }
article > p { margin:0 0 18px; text-wrap:pretty; }
article > ul, article > ol { margin:0 0 20px; padding-left:24px; }
article > ul, article > ol { display:flex; flex-direction:column; gap:6px; }
article h2 { margin:48px 0 16px; font-size:27px; line-height:1.25; font-weight:800; letter-spacing:-.015em; scroll-margin-top:24px; }
article h2:first-child { margin-top:0; }
article h3 { margin:32px 0 10px; font-size:20px; line-height:1.35; font-weight:800; letter-spacing:-.01em; scroll-margin-top:24px; }
article .heading-link { font-size:15px; font-weight:400; text-decoration:none; color:#C2782E; }
article code { font-family:"JetBrains Mono",monospace; font-size:.85em; overflow-wrap:anywhere; background:#F1E7CF; padding:.08em .3em; }
article blockquote, article .chapter-route-note { margin:0 0 18px; border-left:3px solid #9C4A0E; background:#F1E7CF; padding:12px 16px; }
.table-wrap { overflow-x:auto; border:1px solid rgba(23,17,6,.22); margin:0 0 20px; }
.table-wrap table { border-collapse:collapse; width:100%; min-width:620px; }
.table-wrap caption { caption-side:top; text-align:left; font-family:"JetBrains Mono",monospace; font-size:11px; letter-spacing:.1em; text-transform:uppercase; color:#7A6B52; padding:9px 14px; border-bottom:1px solid rgba(23,17,6,.22); background:#F4EEDD; }
.table-wrap th { text-align:left; font-family:"JetBrains Mono",monospace; font-size:11px; line-height:1.35; letter-spacing:.06em; text-transform:uppercase; padding:9px 14px; border-bottom:2px solid #171106; vertical-align:bottom; }
.table-wrap td { padding:9px 14px; border-bottom:1px solid rgba(23,17,6,.14); vertical-align:top; font-size:14.5px; line-height:1.5; }
.table-wrap tbody tr:last-child td { border-bottom:0; }
article h3 + .table-wrap { border:2px solid #171106; }
article .source-ref { font-family:"JetBrains Mono",monospace; font-size:.78em; overflow-wrap:anywhere; }
.work-card { display:grid; grid-template-columns:repeat(auto-fit,minmax(260px,1fr)); gap:1px; border:2px solid #171106; background:rgba(23,17,6,.18); margin-top:0; }
.work-card > p, .work-card > ul { margin:0; padding:16px 18px; background:#FBF7EE; font-size:15px; line-height:1.55; }
.work-card > ul { padding-left:38px; }
.work-card > p strong:first-child { display:block; margin:0 0 6px; font-family:"JetBrains Mono",monospace; font-size:10px; line-height:1.4; letter-spacing:.1em; text-transform:uppercase; color:#9C4A0E; }
.work-card > ul:has(input[data-reading-check]) { grid-column:1/-1; list-style:none; padding:16px 18px; background:#F4EEDD; }
.check-item label { display:flex; align-items:flex-start; gap:10px; cursor:pointer; }
.check-item input { width:18px; height:18px; flex:0 0 auto; margin-top:3px; accent-color:#9C4A0E; }
@media (max-width:760px) {
  .chapter-layout { gap:28px; }
  .chapter-rail { position:static; max-width:none; max-height:none; flex-basis:100%; }
  article { flex-basis:100%; }
}
""".strip()


def strip_tags(fragment: str) -> str:
    return html.unescape(re.sub(r"<[^>]+>", "", fragment)).strip()


def extract_source_section(document: str, source_id: str) -> str:
    match = re.search(
        rf'<section id="{re.escape(source_id)}"[^>]*>(.*?)</section>',
        document,
        flags=re.DOTALL,
    )
    if match is None:
        raise ValueError(f"Missing source section #{source_id}")
    return match.group(1).strip()


def prepare_content(source: str) -> str:
    content = re.sub(r"<h2\b[^>]*>.*?</h2>", "", source, count=1, flags=re.DOTALL)
    content = re.sub(r"<hr\s*/?>\s*$", "", content.strip(), flags=re.DOTALL)
    content = re.sub(
        r'href="#((?:src|audit)-[^"]+)"',
        r'href="./full.html#\1"',
        content,
    )
    content = content.replace(
        'href="#уровни-a0-a3"',
        'href="./chapter-08.html#уровни-a0-a3"',
    )
    content = re.sub(
        r"<(/?)h([34])(\b)",
        lambda match: (
            f"<{match.group(1)}h{int(match.group(2)) - 1}{match.group(3)}"
        ),
        content,
    )

    check_index = 0

    def number_check(match: re.Match[str]) -> str:
        nonlocal check_index
        replacement = f'data-reading-check="{check_index}"'
        check_index += 1
        return replacement

    content = re.sub(r"data-reading-check(?!\s*=)", number_check, content)
    card_match = re.search(
        r'(<h2 id="рабочая-карточка[^"]*"[^>]*>.*?</h2>)(.*)$',
        content,
        flags=re.DOTALL,
    )
    if card_match:
        content = (
            content[: card_match.start()]
            + card_match.group(1)
            + '\n<div class="work-card">\n'
            + card_match.group(2).strip()
            + "\n</div>"
        )
    return content.strip()


def rail_items(content: str) -> str:
    rows = []
    for section_id, inner in re.findall(
        r'<h2 id="([^"]+)"[^>]*>(.*?)</h2>',
        content,
        flags=re.DOTALL,
    ):
        title = re.sub(
            r'<a\b[^>]*class="heading-link"[^>]*>.*?</a>',
            "",
            inner,
            flags=re.DOTALL,
        )
        rows.append(
            f'        <li><a href="#{html.escape(section_id)}">'
            f"{html.escape(strip_tags(title))}</a></li>"
        )
    return "\n".join(rows)


def indent(fragment: str, spaces: int) -> str:
    prefix = " " * spaces
    return "\n".join(prefix + line if line else "" for line in fragment.splitlines())


def footer_link(number: int, direction: str) -> str:
    target = number - 1 if direction == "prev" else number + 1
    arrow = "← " if direction == "prev" else " →"
    label = f"{arrow}Глава {target}" if direction == "prev" else f"Глава {target}{arrow}"
    align = (
        ""
        if direction == "prev"
        else "; align-items:flex-end; text-align:right; border-left:1px solid rgba(23,17,6,0.14)"
    )
    return f"""      <a href="./chapter-{target:02}.html" style="flex:1 1 280px; text-decoration:none; color:#171106; padding:24px; display:flex; flex-direction:column; gap:6px{align}" class="hv0">
        <span style="font-family:'JetBrains Mono',monospace; font-size:11px; letter-spacing:0.12em; text-transform:uppercase; color:#7A6B52">{label}</span>
        <span style="font-size:19px; font-weight:700">{html.escape(CHAPTER_TITLES[target])}</span>
      </a>"""


def render(chapter: Chapter, source: str) -> str:
    content = prepare_content(extract_source_section(source, chapter.source_id))
    rail = rail_items(content)
    previous = footer_link(chapter.number, "prev")
    following = footer_link(chapter.number, "next")
    title = html.escape(chapter.title)
    return f"""<!doctype html>
<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="Глава {chapter.number} — {title}. AI-native компания v2">
<title>Глава {chapter.number}. {title} — AI-native компания v2</title>
<link rel="canonical" href="https://makeitbeta.ru/ai_native_book/chapter-{chapter.number:02}.html">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Literata:ital,opsz,wght@0,7..72,400..900;1,7..72,400..900&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet">
<style>
{STYLE}
</style>
</head>
<body data-page="ch{chapter.number}">
<a class="skip-link" href="#main-content">Перейти к основному содержимому</a>

<div>
  <div aria-hidden="true" style="position:fixed; top:0; left:0; right:0; height:3px; background:rgba(23,17,6,0.08); z-index:50">
    <div data-progress style="height:100%; background:#9C4A0E; width:0%"></div>
  </div>

  <header style="display:flex; align-items:center; gap:16px; flex-wrap:wrap; max-width:1280px; margin:0 auto; padding:18px 24px; border-bottom:2px solid #171106">
    <a href="./index.html" style="font-family:'JetBrains Mono',monospace; font-size:12px; text-decoration:none; color:#4A4030">← Оглавление</a>
    <div style="display:flex; align-items:baseline; gap:10px; margin:0 auto">
      <span style="font-weight:700; font-size:16px">AI-native компания</span>
      <span style="font-family:'JetBrains Mono',monospace; font-size:10px; font-weight:700; letter-spacing:0.08em; background:#171106; color:#FBF7EE; padding:2px 6px">V2</span>
    </div>
    <span style="font-family:'JetBrains Mono',monospace; font-size:12px; color:#7A6B52">Глава {chapter.number} из 12{chapter.route_suffix}</span>
  </header>

  <main id="main-content">
  <section data-screen-label="Опенер главы {chapter.number}" style="max-width:1280px; margin:0 auto; padding:56px 24px 40px; border-bottom:1px solid rgba(23,17,6,0.14); display:flex; gap:32px; align-items:baseline; flex-wrap:wrap">
    <span aria-hidden="true" style="font-family:'JetBrains Mono',monospace; font-size:clamp(72px,10vw,128px); font-weight:700; line-height:0.9; color:#C2782E">{chapter.number:02}</span>
    <div style="flex:1 1 320px">
      <p style="margin:0 0 12px; font-family:'JetBrains Mono',monospace; font-size:11px; font-weight:500; letter-spacing:0.14em; text-transform:uppercase; color:#9C4A0E">{html.escape(chapter.part)}</p>
      <h1 style="margin:0 0 14px; font-size:clamp(36px,5vw,56px); line-height:1.05; font-weight:800; letter-spacing:-0.02em; text-wrap:balance">{title}</h1>
      <p style="margin:0; font-size:15px; color:#7A6B52; max-width:44em">{html.escape(chapter.subtitle)}</p>
    </div>
  </section>

  <div class="chapter-layout">
    <nav aria-label="В этой главе" class="chapter-rail">
      <p style="margin:0 0 12px; font-family:'JetBrains Mono',monospace; font-size:11px; letter-spacing:0.14em; text-transform:uppercase; color:#7A6B52">В этой главе</p>
      <ol>
{rail}
      </ol>
    </nav>

    <article data-source-section="{html.escape(chapter.source_id)}">
{indent(content, 6)}
    </article>
  </div>
  </main>

  <footer style="border-top:2px solid #171106; margin-top:24px">
    <div style="max-width:1280px; margin:0 auto; display:flex; flex-wrap:wrap">
{previous}
{following}
    </div>
  </footer>
</div>

<script src="./assets/book-v3.js" defer></script>
</body>
</html>
"""


def main() -> int:
    source = SOURCE.read_text(encoding="utf-8")
    for chapter in CHAPTERS:
        output = BOOK / chapter.filename
        output.write_text(render(chapter, source), encoding="utf-8")
        print(output.relative_to(ROOT))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
