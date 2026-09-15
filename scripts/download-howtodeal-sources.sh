#!/usr/bin/env bash

set -euo pipefail

project_root="$(cd "$(dirname "$0")/.." && pwd)"
source_dir="$project_root/howtodeal/source-original"
pages_dir="$source_dir/pages"
index_file="$source_dir/index.html"

mkdir -p "$pages_dir"

curl -L --fail --silent --show-error \
  "https://www.howtodeal.dev/" \
  -o "$index_file"

curl -L --fail --silent --show-error \
  "https://www.howtodeal.dev/pdf/how-to-deal-with-difficult-people-on-software-projects.pdf" \
  -o "$source_dir/how-to-deal-with-difficult-people-on-software-projects.pdf"

rg -o 'https://neilonsoftware\.com/difficult-people-on-software-projects/[^" ]+' "$index_file" |
  sort -u |
  while IFS= read -r url; do
    if [[ "$url" == */ ]]; then
      continue
    fi

    relative_path="${url#https://neilonsoftware.com/difficult-people-on-software-projects/}"
    filename="${relative_path//\//--}.html"
    curl -L --fail --silent --show-error "$url" -o "$pages_dir/$filename"
  done

page_count="$(find "$pages_dir" -type f -name '*.html' | wc -l | tr -d ' ')"
printf 'Downloaded %s profile pages into %s\n' "$page_count" "$pages_dir"
