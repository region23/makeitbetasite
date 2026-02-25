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
            if not ent:
                continue
            if ent.get("type") == "MEDIA":
                items = (ent.get("data") or {}).get("mediaItems") or []
                if not items:
                    continue
                mid = str(items[0].get("mediaId"))
                url = mid_to_url.get(mid)
                if url:
                    out.append(f"![Иллюстрация]({url})")
                    out.append("")
            elif ent.get("type") == "LINK":
                url = (ent.get("data") or {}).get("url")
                if url:
                    out.append(url)
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
