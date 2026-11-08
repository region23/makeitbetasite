#!/usr/bin/env python3
"""Синхронизация общей навигации в статических HTML-страницах сайта.

Правьте шаблоны в site-shell/, затем запускайте этот скрипт. Разметка
попадает в страницы целиком и работает даже при отключённом JavaScript.
"""
import argparse
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SHELL = ROOT / 'site-shell'
HEADER_START = '<!-- site-header:start -->'
HEADER_END = '<!-- site-header:end -->'
FOOTER_START = '<!-- site-footer:start -->'
FOOTER_END = '<!-- site-footer:end -->'
CSS = '<link rel="stylesheet" href="/site-shell/site-shell.css">'
JS = '<script src="/site-shell/site-shell.js" defer></script>'
FONTS = '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&amp;family=Unbounded:wght@700&amp;display=swap">'


def pages():
    yield ROOT / 'index.html'
    yield ROOT / 'blog/index.html'
    yield ROOT / 'blog/_template.html'
    yield from sorted((ROOT / 'blog').glob('*/index.html'))
    yield ROOT / 'consulting/index.html'
    yield ROOT / 'howtodeal/index.html'
    yield ROOT / 'model-tests/index.html'
    yield ROOT / 'model-tests/tidal-lighthouse/index.html'
    yield ROOT / 'model-tests/utrish-lighthouse/index.html'
    yield from sorted((ROOT / 'ai_native_book').glob('*.html'))
    yield ROOT / 'ai_native_book/v1/index.html'
    yield from sorted((ROOT / 'ai_native_book_new_design').glob('*.html'))


def block(name):
    text = (SHELL / f'{name}.html').read_text(encoding='utf-8').strip()
    return f'<!-- site-{name}:start -->\n{text}\n<!-- site-{name}:end -->'


def replace_block(content, name):
    pattern = rf'<!-- site-{name}:start -->.*?<!-- site-{name}:end -->'
    content, count = re.subn(pattern, lambda _: block(name), content, flags=re.S)
    if count != 1:
        raise ValueError(f'Ожидался один шаблон {name}, найдено {count}')
    return content


def apply_shell_templates(content):
    for name in ('header', 'footer'):
        content = replace_block(content, name)
    return content


def install(content, path):
    relative = path.relative_to(ROOT).as_posix()
    if HEADER_START not in content:
        if relative.startswith(('ai_native_book/', 'ai_native_book_new_design/')):
            content, count = re.subn(r'(<body\b[^>]*>)', lambda m: m.group(1) + '\n' + block('header'), content, count=1, flags=re.I)
        elif relative == 'howtodeal/index.html':
            # Шапка атласа остаётся локальной навигацией, а не шапкой сайта.
            content, count = re.subn(r'(<body\b[^>]*>)', lambda m: m.group(1) + '\n' + block('header'), content, count=1, flags=re.I)
        else:
            content, count = re.subn(r'<header class="header">.*?</header>', lambda _: block('header'), content, count=1, flags=re.S)
        if count != 1:
            raise ValueError(f'{relative}: не найдена шапка')
    if FOOTER_START not in content:
        if relative.startswith(('ai_native_book/', 'ai_native_book_new_design/')) or relative == 'howtodeal/index.html':
            position = content.rfind('</footer>')
            if position < 0:
                raise ValueError(f'{relative}: не найден подвал')
            position += len('</footer>')
            content = content[:position] + '\n' + block('footer') + content[position:]
        else:
            content, count = re.subn(r'<footer class="(?:footer|c-footer)"[^>]*>.*?</footer>', lambda _: block('footer'), content, count=1, flags=re.S)
            if count != 1:
                raise ValueError(f'{relative}: не найден подвал')
    offline_books = {"ai_native_book/full.html", "ai_native_book/v1/index.html", "ai_native_book_new_design/full.html"}
    if relative in offline_books:
        content = content.replace(FONTS + "\n", "")
    elif "family=Unbounded" not in content:
        content = re.sub(r"</head>", lambda _: FONTS + "\n</head>", content, count=1, flags=re.I)
    if CSS not in content:
        content, count = re.subn(r'</head>', lambda _: CSS + '\n</head>', content, count=1, flags=re.I)
        if count != 1: raise ValueError(f'{relative}: не найден head')
    if JS not in content:
        content, count = re.subn(r'</body>', lambda _: JS + '\n</body>', content, count=1, flags=re.I)
        if count != 1: raise ValueError(f'{relative}: не найден body')
    return apply_shell_templates(content)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--check', action='store_true', help='Проверить, что страницы синхронизированы')
    args = parser.parse_args()
    changed = []
    for path in pages():
        before = path.read_text(encoding='utf-8')
        after = install(before, path)
        if before != after:
            changed.append(path.relative_to(ROOT))
            if not args.check: path.write_text(after, encoding='utf-8')
    if changed:
        for path in changed: print(path)
        if args.check: return 1
    print('Шаблоны синхронизированы' if not args.check else 'Шаблоны актуальны')
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
