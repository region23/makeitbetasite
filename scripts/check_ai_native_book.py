#!/usr/bin/env python3
"""Проверяет структуру и приватность страниц руководства AI-native."""

from __future__ import annotations

import argparse
import re
from collections import Counter
from html.parser import HTMLParser
from pathlib import Path, PurePosixPath
from urllib.parse import urlsplit


EXPECTED_IDS = {
    *(f"ch{i}" for i in range(1, 13)),
    "sources",
    "version",
    "changelog",
}
EXPECTED_TEMPLATES = {
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
}
FORBIDDEN = ("mc.yandex.ru", "ym(", "webvisor", "clickmap")
NETWORK_APIS = ("fetch(", "xmlhttprequest", "sendbeacon", "websocket(")
REMOTE_URL = re.compile(r"(?:https?:)?//", re.IGNORECASE)


class _HtmlSummary(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.tags: dict[str, int] = {}
        self.ids: Counter[str] = Counter()
        self.anchors: list[dict[str, str]] = []
        self.link_elements: list[dict[str, str]] = []
        self.metas: list[dict[str, str]] = []
        self.scripts: list[dict[str, str]] = []
        self.main_ids: set[str] = set()
        self.h1_inside_main = 0
        self.summary_inside_details = 0
        self._open_tags: list[str] = []

    def handle_starttag(
        self, tag: str, attrs: list[tuple[str, str | None]]
    ) -> None:
        attributes = {name.lower(): value or "" for name, value in attrs}
        tag = tag.lower()
        self.tags[tag] = self.tags.get(tag, 0) + 1
        if attributes.get("id"):
            self.ids[attributes["id"]] += 1
        if tag == "main" and attributes.get("id"):
            self.main_ids.add(attributes["id"])
        elif tag == "h1" and "main" in self._open_tags:
            self.h1_inside_main += 1
        elif tag == "summary" and "details" in self._open_tags:
            self.summary_inside_details += 1
        if tag == "a":
            self.anchors.append(attributes)
        elif tag == "link":
            self.link_elements.append(attributes)
        elif tag == "meta":
            self.metas.append(attributes)
        elif tag == "script":
            self.scripts.append(attributes)
        if tag not in {
            "area",
            "base",
            "br",
            "col",
            "embed",
            "hr",
            "img",
            "input",
            "link",
            "meta",
            "param",
            "source",
            "track",
            "wbr",
        }:
            self._open_tags.append(tag)

    def handle_endtag(self, tag: str) -> None:
        tag = tag.lower()
        if tag in self._open_tags:
            matching_index = len(self._open_tags) - 1 - self._open_tags[::-1].index(tag)
            del self._open_tags[matching_index:]


def _has_canonical(summary: _HtmlSummary) -> bool:
    return any(
        "canonical" in link.get("rel", "").lower().split()
        for link in summary.link_elements
    )


def _forbidden_errors(text: str) -> list[str]:
    lowered = text.lower()
    return [
        f"Найдена запрещённая клиентская аналитика: {token}"
        for token in FORBIDDEN
        if token in lowered
    ]


def validate_html_text(html: str, *, archive: bool = False) -> list[str]:
    """Возвращает русские диагностические сообщения для HTML."""
    summary = _HtmlSummary()
    summary.feed(html)
    errors = _forbidden_errors(html)
    errors.extend(
        f"Идентификатор #{element_id} повторяется на странице"
        for element_id, count in sorted(summary.ids.items())
        if count > 1
    )

    if archive:
        robots = {
            meta.get("content", "").lower().replace(" ", "")
            for meta in summary.metas
            if meta.get("name", "").lower() == "robots"
        }
        if "noindex,follow" not in robots:
            errors.append("Архив v1 должен содержать meta robots noindex,follow")
        if not _has_canonical(summary):
            errors.append("В архиве v1 отсутствует canonical")
        return errors

    has_skip_link = any(
        "skip-link" in anchor.get("class", "").split()
        and anchor.get("href", "").startswith("#")
        and urlsplit(anchor.get("href", "")).fragment in summary.main_ids
        for anchor in summary.anchors
        if "href" in anchor
    )
    if not has_skip_link:
        errors.append("Отсутствует skip-link к основному содержимому")
    if summary.tags.get("main", 0) != 1:
        errors.append("Страница должна содержать ровно один элемент main")
    if summary.tags.get("h1", 0) != 1:
        errors.append("Страница должна содержать ровно один заголовок h1")
    elif summary.h1_inside_main != 1:
        errors.append("Единственный h1 должен находиться внутри main")
    if not summary.tags.get("details") or not summary.summary_inside_details:
        errors.append("Элемент summary должен находиться внутри details")
    if not _has_canonical(summary):
        errors.append("Отсутствует ссылка canonical")

    for section_id in sorted(EXPECTED_IDS):
        if section_id not in summary.ids:
            errors.append(f"Отсутствует обязательный якорь #{section_id}")

    linked_templates = {
        PurePosixPath(urlsplit(anchor.get("href", "")).path).name
        for anchor in summary.anchors
        if anchor.get("href")
    }
    for template in sorted(EXPECTED_TEMPLATES - linked_templates):
        errors.append(f"Отсутствует ссылка на шаблон {template}")

    return errors


def _is_local_reference(reference: str) -> bool:
    parsed = urlsplit(reference)
    return not parsed.scheme and not parsed.netloc and not reference.startswith("//")


def _asset_errors(root: Path, html_path: Path, html: str) -> list[str]:
    summary = _HtmlSummary()
    summary.feed(html)
    stylesheets = [
        link.get("href", "")
        for link in summary.link_elements
        if "stylesheet" in link.get("rel", "").lower().split()
    ]
    scripts = [script.get("src", "") for script in summary.scripts if script.get("src")]
    errors: list[str] = []

    if not stylesheets:
        errors.append("В основной странице отсутствует локальный CSS")
    if not scripts:
        errors.append("В основной странице отсутствует локальный JavaScript")

    for kind, references in (("CSS", stylesheets), ("JavaScript", scripts)):
        for reference in references:
            if not _is_local_reference(reference):
                errors.append(f"{kind} должен быть локальным: {reference}")
                continue
            reference_path = urlsplit(reference).path
            asset_path = (
                root / reference_path.lstrip("/")
                if reference_path.startswith("/")
                else html_path.parent / reference_path
            )
            if not asset_path.is_file():
                errors.append(f"Не найден локальный {kind}: {reference}")
                continue
            asset_text = asset_path.read_text(encoding="utf-8")
            for error in _forbidden_errors(asset_text):
                errors.append(f"{reference}: {error}")
            if REMOTE_URL.search(asset_text):
                errors.append(f"{reference}: найдена внешняя сетевая ссылка")
            if kind == "JavaScript":
                lowered = asset_text.lower().replace(" ", "")
                for api in NETWORK_APIS:
                    if api in lowered:
                        errors.append(
                            f"{reference}: запрещён сетевой API {api.rstrip('(')}"
                        )
    return errors


def _validate_file(path: Path, *, archive: bool) -> tuple[list[str], str | None]:
    try:
        html = path.read_text(encoding="utf-8")
    except FileNotFoundError:
        return [f"Не найден файл {path}"], None
    return validate_html_text(html, archive=archive), html


def run_checks(root: Path, *, phase: str) -> list[str]:
    book = root / "ai_native_book"
    main_path = book / "index.html"
    archive_path = book / "v1" / "index.html"
    errors: list[str] = []

    main_errors, main_html = _validate_file(main_path, archive=False)
    errors.extend(f"{main_path.relative_to(root)}: {error}" for error in main_errors)

    archive_errors, _ = _validate_file(archive_path, archive=True)
    errors.extend(f"{archive_path.relative_to(root)}: {error}" for error in archive_errors)

    if phase == "all" and main_html is not None:
        errors.extend(
            f"{main_path.relative_to(root)}: {error}"
            for error in _asset_errors(root, main_path, main_html)
        )
    return errors


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Проверяет структуру и приватность руководства AI-native."
    )
    parser.add_argument(
        "--phase",
        choices=("structure", "all"),
        default="all",
        help="structure проверяет HTML; all также проверяет локальные CSS и JavaScript",
    )
    args = parser.parse_args()
    root = Path(__file__).resolve().parents[1]
    errors = run_checks(root, phase=args.phase)

    if errors:
        print("Проверка руководства AI-native: ОШИБКА")
        for error in errors:
            print(f"- {error}")
        return 1

    print(f"Проверка руководства AI-native ({args.phase}): OK")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
