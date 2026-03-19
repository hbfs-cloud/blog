#!/bin/bash
# Usage: ./tools/publish.sh <category> "<title>" "<description>" "<tags>" [image_url]
# Reads content from stdin
set -e

CATEGORY="$1"
TITLE="$2"
DESC="$3"
TAGS="$4"
IMAGE="${5:-}"

DATE=$(date +%Y-%m-%d)
SLUG=$(echo "$TITLE" | iconv -t ascii//TRANSLIT 2>/dev/null || echo "$TITLE" | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9]/-/g' | sed 's/--*/-/g' | sed 's/^-//;s/-$//')
SLUG=$(echo "$SLUG" | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9]/-/g' | sed 's/--*/-/g' | sed 's/^-//;s/-$//')

FILE="src/content/${CATEGORY}/${DATE}-${SLUG}.md"

cd /home/ci/projects/blog
git pull --rebase origin main 2>/dev/null || true

# Format tags as YAML array
TAGS_YAML=$(echo "$TAGS" | sed 's/,/", "/g')

{
  echo "---"
  echo "title: \"$TITLE\""
  echo "date: $DATE"
  echo "description: \"$DESC\""
  echo "category: $CATEGORY"
  echo "tags: [\"$TAGS_YAML\"]"
  [ -n "$IMAGE" ] && echo "image: \"$IMAGE\""
  echo "---"
  echo ""
  cat -
} > "$FILE"

git add "$FILE"
git commit -m "feat(${CATEGORY}): ${TITLE}"
git push origin main

echo "Published: $FILE"
