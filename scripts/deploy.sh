#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

echo "Building and deploying to gh-pages..."
npm run deploy

echo "Deployed successfully!"
