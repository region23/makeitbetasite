#!/usr/bin/env python3
"""
publish_to_blog.py — публикует статью в блог makeitbeta.ru/blog

Использование:
  python3 scripts/publish_to_blog.py \\
    --title "Заголовок статьи" \\
    --slug "2026-02-24-my-article" \\
    --category "перевод" \\          # или "оригинал"
    --original-url "https://..." \\  # только для переводов
    --original-author "Имя" \\       # только для переводов
    --translated-by "Афина 🦉" \\
    --translator-url "https://t.me/athena_ai_blog" \\
    --channel-url "https://t.me/pavlenkodev" \\
    --channel-name "@pavlenkodev" \\
    --read-time "10 мин" \\
    --content path/to/content.md \\  # или читает stdin
    [--no-push]                      # только локально, без git push

Формат --content: Markdown с поддержкой ```code``` блоков и # заголовков
"""
import argparse
import html as html_lib
import json
import os
import re
import subprocess
import sys
from datetime import date
from pathlib import Path

REPO_ROOT = Path(__file__).parent.parent
BLOG_DIR = REPO_ROOT / 'blog'
POSTS_JSON = BLOG_DIR / 'posts.json'
TEMPLATE = BLOG_DIR / '_template.html'

MONTHS_RU = ['января','февраля','марта','апреля','мая','июня',
             'июля','августа','сентября','октября','ноября','декабря']

ALLOWED_RAW_HTML_LINES = {
    '<details>', '</details>',
    '</summary>',
    '<table>', '</table>',
    '<thead>', '</thead>',
    '<tbody>', '</tbody>',
}

RAW_HTML_PREFIXES = (
    '<summary>',
    '<tr', '</tr>',
    '<th', '</th>',
    '<td', '</td>',
)

def date_ru(iso: str) -> str:
    y, m, d = iso.split('-')
    return f"{int(d)} {MONTHS_RU[int(m)-1]} {y}"


def md_to_html(md: str) -> str:
    """Minimal Markdown → HTML converter (no external deps needed)."""
    try:
        import markdown
        return markdown.markdown(md, extensions=['fenced_code', 'tables'])
    except ImportError:
        pass

    # Fallback: hand-rolled minimal converter
    lines = md.splitlines()
    html_parts = []
    in_code = False
    code_lang = ''
    code_lines = []
    in_list = None  # 'ul' or 'ol'
    i = 0

    def flush_list():
        nonlocal in_list
        if in_list:
            html_parts.append(f'</{in_list}>')
            in_list = None

    def esc(s):
        return html_lib.escape(s)

    def inline(s):
        """Apply inline markdown: **bold**, `code`, [text](url), ![alt](url)."""
        s = esc(s)
        s = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', s)
        s = re.sub(r'`([^`]+)`', r'<code>\1</code>', s)
        # Images before links (more specific pattern)
        s = re.sub(r'!\[([^\]]*)\]\(([^)]+)\)', r'<img src="\2" alt="\1" style="max-width:100%;border-radius:6px;margin:16px 0;">', s)
        s = re.sub(r'\[([^\]]+)\]\(([^)]+)\)', r'<a href="\2">\1</a>', s)
        return s

    while i < len(lines):
        line = lines[i]
        # Raw HTML passthrough for collapsible sources (allow only a tiny safe subset)
        sline = line.strip()
        if sline in ALLOWED_RAW_HTML_LINES or any(sline.startswith(pfx) for pfx in RAW_HTML_PREFIXES):
            flush_list()
            html_parts.append(line)
            i += 1
            continue

        # GitHub-style markdown tables
        if '|' in line and i + 1 < len(lines):
            next_line = lines[i + 1].strip()
            if re.match(r'^\|?(\s*:?-{3,}:?\s*\|)+\s*:?-{3,}:?\s*\|?$', next_line):
                flush_list()
                header_cells = [c.strip() for c in line.strip().strip('|').split('|')]
                rows = []
                i += 2
                while i < len(lines) and '|' in lines[i] and lines[i].strip():
                    rows.append([c.strip() for c in lines[i].strip().strip('|').split('|')])
                    i += 1
                html_parts.append('<div class="table-scroll">')
                html_parts.append('<table>')
                html_parts.append('<thead><tr>' + ''.join(f'<th>{inline(c)}</th>' for c in header_cells) + '</tr></thead>')
                html_parts.append('<tbody>')
                for row in rows:
                    if len(row) < len(header_cells):
                        row += [''] * (len(header_cells) - len(row))
                    html_parts.append('<tr>' + ''.join(f'<td>{inline(c)}</td>' for c in row[:len(header_cells)]) + '</tr>')
                html_parts.append('</tbody>')
                html_parts.append('</table>')
                html_parts.append('</div>')
                continue

        # Ignore markdown separators
        if sline == '---':
            flush_list()
            i += 1
            continue
        # Fenced code blocks
        if line.startswith('```'):
            if not in_code:
                flush_list()
                in_code = True
                code_lang = line[3:].strip().lower()
                code_lines = []
            else:
                in_code = False
                code_text = '\n'.join(code_lines)
                lang_class = f' class="language-{code_lang}"' if code_lang else ''
                html_parts.append(f'<pre><code{lang_class}>{esc(code_text)}</code></pre>')
                code_lang = ''
            i += 1
            continue

        if in_code:
            code_lines.append(line)
            i += 1
            continue

        # Headings
        if line.startswith('#### '):
            flush_list(); html_parts.append(f'<h4>{inline(line[5:])}</h4>'); i += 1; continue
        if line.startswith('### '):
            flush_list(); html_parts.append(f'<h3>{inline(line[4:])}</h3>'); i += 1; continue
        if line.startswith('## '):
            flush_list(); html_parts.append(f'<h2>{inline(line[3:])}</h2>'); i += 1; continue
        if line.startswith('# '):
            flush_list(); html_parts.append(f'<h1>{inline(line[2:])}</h1>'); i += 1; continue

        # Blockquote
        if line.startswith('> '):
            flush_list(); html_parts.append(f'<blockquote><p>{inline(line[2:])}</p></blockquote>'); i += 1; continue

        # Standalone image line: ![alt](url)
        img_match = re.match(r'^!\[([^\]]*)\]\(([^)]+)\)\s*$', line)
        if img_match:
            flush_list()
            alt, src = img_match.group(1), img_match.group(2)
            html_parts.append(f'<figure><img src="{src}" alt="{esc(alt)}" style="max-width:100%;border-radius:8px;margin:24px 0;display:block;"></figure>')
            i += 1
            continue

        # Unordered list
        if re.match(r'^[-*] ', line):
            if in_list != 'ul':
                flush_list()
                html_parts.append('<ul>')
                in_list = 'ul'
            html_parts.append(f'<li>{inline(line[2:])}</li>')
            i += 1
            continue

        # Ordered list
        if re.match(r'^\d+\. ', line):
            if in_list != 'ol':
                flush_list()
                html_parts.append('<ol>')
                in_list = 'ol'
            html_parts.append(f'<li>{inline(re.sub(r"^\d+\. ","",line))}</li>')
            i += 1
            continue

        # Blank line
        if not line.strip():
            flush_list()
            i += 1
            continue

        # Normal paragraph
        flush_list()
        html_parts.append(f'<p>{inline(line)}</p>')
        i += 1

    flush_list()
    return '\n'.join(html_parts)


def render_article(args, content_html: str) -> str:
    tpl = TEMPLATE.read_text()

    # Category tag
    cat_class = 'translation' if args.category == 'перевод' else 'original'
    category_tag = f'<span class="tag tag--{cat_class}">{html_lib.escape(args.category)}</span>'

    # Original block (for translations)
    if args.category == 'перевод' and args.original_url:
        original_block = f'''<div class="post-original">
      Оригинал: <a href="{html_lib.escape(args.original_url)}" target="_blank">{html_lib.escape(args.original_author or args.original_url)}</a>
    </div>'''
    else:
        original_block = ''

    # Translator block
    if args.category == 'перевод':
        translator_block = (
            f'Перевела <a href="{html_lib.escape(args.translator_url)}">'
            f'{html_lib.escape(args.translated_by)}</a>'
            f' — специально для канала '
            f'<a href="{html_lib.escape(args.channel_url)}">'
            f'{html_lib.escape(args.channel_name)}</a>'
        )
    else:
        translator_block = (
            f'Автор: <a href="{html_lib.escape(args.translator_url)}">'
            f'{html_lib.escape(args.translated_by)}</a>'
            f' для канала '
            f'<a href="{html_lib.escape(args.channel_url)}">'
            f'{html_lib.escape(args.channel_name)}</a>'
        )

    iso_date = args.slug[:10] if len(args.slug) >= 10 else str(date.today())

    result = (tpl
        .replace('$TITLE', html_lib.escape(args.title))
        .replace('$DESCRIPTION', html_lib.escape(args.title))
        .replace('$DATE_RU', date_ru(iso_date))
        .replace('$READ_TIME', html_lib.escape(args.read_time))
        .replace('$CATEGORY_TAG', category_tag)
        .replace('$AUTHOR_META', '')
        .replace('$ORIGINAL_BLOCK', original_block)
        .replace('$CONTENT', content_html)
        .replace('$TRANSLATOR_BLOCK', translator_block)
    )
    return result


def update_posts_json(args):
    posts = json.loads(POSTS_JSON.read_text()) if POSTS_JSON.exists() else []
    iso_date = args.slug[:10] if len(args.slug) >= 10 else str(date.today())

    # Remove existing entry with same slug
    posts = [p for p in posts if p.get('slug') != args.slug]

    new_post = {
        "slug": args.slug,
        "title": args.title,
        "date": iso_date,
        "date_ru": date_ru(iso_date),
        "category": args.category,
        "original_url": args.original_url or "",
        "original_author": args.original_author or "",
        "translated_by": args.translated_by,
        "translator_url": args.translator_url,
        "channel_url": args.channel_url,
        "channel_name": args.channel_name,
        "read_time": args.read_time,
    }

    # Prepend (newest first)
    posts.insert(0, new_post)
    POSTS_JSON.write_text(json.dumps(posts, ensure_ascii=False, indent=2))
    print(f"✅ posts.json updated ({len(posts)} posts)")


def main():
    parser = argparse.ArgumentParser(description='Publish article to makeitbeta.ru/blog')
    parser.add_argument('--title', required=True)
    parser.add_argument('--slug', required=True, help='e.g. 2026-02-24-my-article')
    parser.add_argument('--category', default='перевод', choices=['перевод', 'оригинал'])
    parser.add_argument('--original-url', default='')
    parser.add_argument('--original-author', default='')
    parser.add_argument('--translated-by', default='Афина 🦉')
    parser.add_argument('--translator-url', default='https://t.me/athena_ai_blog')
    parser.add_argument('--channel-url', default='https://t.me/pavlenkodev')
    parser.add_argument('--channel-name', default='@pavlenkodev')
    parser.add_argument('--read-time', default='10 мин')
    parser.add_argument('--content', help='Path to markdown file (default: stdin)')
    parser.add_argument('--no-push', action='store_true', help='Skip git push')
    args = parser.parse_args()

    # Read content
    if args.content:
        md = Path(args.content).read_text()
    else:
        print("Reading markdown from stdin (Ctrl+D to finish)...")
        md = sys.stdin.read()

    # Convert markdown to HTML
    content_html = md_to_html(md)

    # Create post directory
    post_dir = BLOG_DIR / args.slug
    post_dir.mkdir(parents=True, exist_ok=True)

    # Render and save article
    article_html = render_article(args, content_html)
    post_file = post_dir / 'index.html'
    post_file.write_text(article_html)
    print(f"✅ Article saved: {post_file}")

    # Update posts.json
    update_posts_json(args)

    # Commit and push
    if not args.no_push:
        os.chdir(REPO_ROOT)
        subprocess.run(['git', 'add', '-A'], check=True)
        subprocess.run(['git', 'commit', '-m', f'blog: add {args.slug}'], check=True)
        subprocess.run(['git', 'push'], check=True)
        print(f"✅ Pushed to GitHub → https://makeitbeta.ru/blog/{args.slug}/")
    else:
        print(f"✅ Done (--no-push: skipped git commit/push)")


if __name__ == '__main__':
    main()
