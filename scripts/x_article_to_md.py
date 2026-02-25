#!/usr/bin/env python3
"""Convert fxtwitter X Article JSON to markdown, preserving images and code blocks.

Usage:
  python3 x_article_to_md.py /path/to/fxtwitter.json > article_en.md

Notes:
- Expects JSON from https://api.fxtwitter.com/<user>/status/<id>
- Handles article.cover_media as cover image (first)
- Handles atomic MEDIA blocks using article.media_entities + content.entityMap
- Handles header-two, blockquote, unstyled
- Best-effort inline styles: bold/italic full-line only (partial ranges ignored)
"""

import json
import sys


def apply_full_line_styles(text: str, inline_styles):
    """Best-effort inline styling.

    We only apply styles when they cover the whole line, otherwise we risk
    breaking offsets used by entityRanges (links/media).
    """
    if not text:
        return text
    for st in inline_styles or []:
        style = st.get("style")
        offset = st.get("offset", 0)
        length = st.get("length", 0)
        if offset == 0 and length >= len(text):
            if style == "Bold":
                return f"**{text}**"
            if style == "Italic":
                return f"*{text}*"
    return text


def apply_entity_links(text: str, entity_ranges, entity_map):
    """Convert LINK entityRanges to markdown links in-place.

    X Article blocks can carry links as entityRanges inside unstyled text.
    We rewrite from right to left to keep offsets stable.
    """
    if not text or not entity_ranges:
        return text

    # Only handle LINK entities; ignore others here.
    ranges = []
    for r in entity_ranges:
        try:
            key = r.get("key")
            ent = entity_map.get(key)
            if ent and ent.get("type") == "LINK":
                ranges.append((r.get("offset", 0), r.get("length", 0), ent.get("data", {}).get("url")))
        except Exception:
            continue

    # rewrite right-to-left
    for off, ln, url in sorted(ranges, key=lambda x: x[0], reverse=True):
        if not url or ln <= 0:
            continue
        label = text[off:off+ln]
        text = text[:off] + f"[{label}]({url})" + text[off+ln:]

    return text


def main():
    path = sys.argv[1]
    j = json.load(open(path, "r", encoding="utf-8"))
    tweet = j["tweet"]
    art = tweet.get("article")
    if not art:
        raise SystemExit("No article in tweet")

    blocks = art["content"]["blocks"]
    entity_map = {int(e["key"]): e["value"] for e in art["content"].get("entityMap", [])}

    # media resolution
    mid_to_url = {}
    for m in art.get("media_entities", []) or []:
        mid = str(m.get("media_id"))
        url = (m.get("media_info") or {}).get("original_img_url")
        if mid and url:
            mid_to_url[mid] = url

    out = []

    cover = (art.get("cover_media") or {}).get("media_info", {}).get("original_img_url")
    if cover:
        out.append(f"![Обложка]({cover})")
        out.append("")

    for b in blocks:
        t = b.get("type")
        text = b.get("text", "")
        # Preserve links before styling (styling may wrap whole line, safe).
        text = apply_entity_links(text, b.get("entityRanges") or [], entity_map)
        text = apply_full_line_styles(text, b.get("inlineStyleRanges"))

        if t == "header-two":
            if text.strip():
                out.append(f"## {text.strip()}")
                out.append("")
            continue

        if t == "blockquote":
            q = text.strip().replace("\n", "\n> ")
            if q:
                out.append(f"> {q}")
                out.append("")
            continue

        if t == "atomic":
            ers = b.get("entityRanges") or []
            if not ers:
                continue
            ent = entity_map.get(ers[0].get("key"))
            # Some fxtwitter responses omit/empty entityMap for atomic blocks.
            # We still preserve the *presence* of the insert to keep structure.
            if not ent:
                out.append("---")
                out.append("")
                continue
            et = ent.get("type")
            data = ent.get("data") or {}

            if et == "MEDIA":
                items = data.get("mediaItems") or []
                if not items:
                    continue
                mid = str(items[0].get("mediaId"))
                url = mid_to_url.get(mid)
                if url:
                    out.append(f"![Иллюстрация]({url})")
                    out.append("")
                continue

            if et == "LINK":
                url = data.get("url")
                if url:
                    out.append(url)
                    out.append("")
                continue

            if et == "TWEET":
                tid = data.get("tweetId")
                if tid:
                    out.append(f"> Встроенный твit: https://x.com/i/status/{tid}")
                    out.append("")
                else:
                    out.append("---")
                    out.append("")
                continue

            if et == "MARKDOWN":
                md = data.get("markdown")
                if md:
                    out.append(md.strip())
                    out.append("")
                else:
                    out.append("---")
                    out.append("")
                continue

            # Unknown atomic insert
            out.append("---")
            out.append("")
            continue

        # Default: treat as paragraph
        if text.strip():
            out.append(text.strip())
            out.append("")

    sys.stdout.write("\n".join(out).strip() + "\n")


if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: x_article_to_md.py <fxtwitter.json>", file=sys.stderr)
        raise SystemExit(2)
    main()
