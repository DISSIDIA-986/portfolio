#!/usr/bin/env bash
# Generate resume PDFs from markdown and upload to Alibaba Cloud OSS
#
# Chain: Markdown → HTML (pandoc + CSS) → PDF (wkhtmltopdf) → OSS (myoss.put.sh)
#
# Usage:
#   ./resume/generate-pdfs.sh              # generate + upload
#   ./resume/generate-pdfs.sh --skip-upload # generate only
#
# Prerequisites: brew install pandoc wkhtmltopdf

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
CSS="$SCRIPT_DIR/resume.css"
OSS_PREFIX="portfolio/resume"
MYOSS="$HOME/Documents/bash/myoss.put.sh"
SKIP_UPLOAD="${1:-}"

RESUMES=("ai-engineer" "fullstack-ai" "senior-swe")

echo "=== Resume PDF Generation ==="

for name in "${RESUMES[@]}"; do
  md="$SCRIPT_DIR/${name}.md"
  html="$SCRIPT_DIR/${name}.html"
  pdf="$SCRIPT_DIR/${name}.pdf"

  if [ ! -f "$md" ]; then
    echo "SKIP: $md not found"
    continue
  fi

  echo "--- ${name} ---"

  # Step 1: Markdown → HTML (with embedded CSS)
  pandoc "$md" \
    -f markdown \
    -t html5 \
    --standalone \
    --css="$CSS" \
    --metadata title=" " \
    -o "$html"

  # Inline the CSS so wkhtmltopdf can read it
  sed -i '' "s|<link rel=\"stylesheet\" href=\"$CSS\" />|<style>$(cat "$CSS" | tr '\n' ' ')</style>|" "$html" 2>/dev/null || true

  echo "  HTML: ${name}.html"

  # Step 2: HTML → PDF
  wkhtmltopdf \
    --page-size A4 \
    --margin-top 12mm \
    --margin-bottom 8mm \
    --margin-left 14mm \
    --margin-right 14mm \
    --encoding utf-8 \
    --quiet \
    "$html" "$pdf"

  echo "  PDF:  ${name}.pdf ($(du -h "$pdf" | cut -f1 | xargs))"
done

echo ""

# Step 3: Upload PDFs to OSS
if [ "$SKIP_UPLOAD" = "--skip-upload" ]; then
  echo "Skipping OSS upload (--skip-upload)"
else
  if [ ! -x "$MYOSS" ]; then
    echo "ERROR: myoss.put.sh not found at $MYOSS"
    echo "Use --skip-upload or fix the path."
    exit 1
  fi

  echo "=== Uploading to OSS ==="
  for name in "${RESUMES[@]}"; do
    pdf="$SCRIPT_DIR/${name}.pdf"
    if [ -f "$pdf" ]; then
      echo "Uploading: ${name}.pdf"
      "$MYOSS" "$pdf" "$OSS_PREFIX"
    fi
  done
fi

echo ""
echo "=== Complete ==="
