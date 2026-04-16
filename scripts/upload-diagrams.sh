#!/bin/bash
# Upload all project architecture diagrams to Alibaba Cloud OSS
# Source: /Users/niuyp/Documents/ProjectTechGraph/project-diagrams.json
# Destination: portfolio/diagrams/{projectSlug}/{type}-architecture.{svg|png}
set -euo pipefail

GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m'

DIAGRAMS_JSON="/Users/niuyp/Documents/ProjectTechGraph/project-diagrams.json"
UPLOAD_CMD="$HOME/Documents/bash/myoss.put.sh"

if [[ ! -f "$DIAGRAMS_JSON" ]]; then
    printf "${RED}Error: %s not found${NC}\n" "$DIAGRAMS_JSON" >&2
    exit 1
fi

if ! command -v jq &>/dev/null; then
    printf "${RED}Error: jq is required. Install with: brew install jq${NC}\n" >&2
    exit 1
fi

TOTAL=0
OK=0
FAIL=0

jq -c '.[]' "$DIAGRAMS_JSON" | while IFS= read -r project; do
    slug=$(echo "$project" | jq -r '.project')

    for diagram_type in system_architecture product_architecture; do
        type_name="${diagram_type/_/-}"  # system-architecture or product-architecture
        # Extract just the filename part: system-architecture or product-architecture
        short_name="${type_name}"

        for ext in svg png; do
            local_path=$(echo "$project" | jq -r ".diagrams.${diagram_type}.${ext}")

            if [[ -z "$local_path" || "$local_path" == "null" || ! -f "$local_path" ]]; then
                printf "${RED}SKIP: %s/%s.%s — file not found${NC}\n" "$slug" "$short_name" "$ext"
                continue
            fi

            prefix="portfolio/diagrams/${slug}"
            TOTAL=$((TOTAL + 1))

            printf "Uploading %s/%s.%s ... " "$slug" "$short_name" "$ext"
            if "$UPLOAD_CMD" "$local_path" "$prefix" >/dev/null 2>&1; then
                printf "${GREEN}OK${NC}\n"
                OK=$((OK + 1))
            else
                printf "${RED}FAILED${NC}\n"
                FAIL=$((FAIL + 1))
            fi
        done
    done
done

echo ""
echo "Done. Total: $TOTAL, OK: $OK, Failed: $FAIL"
