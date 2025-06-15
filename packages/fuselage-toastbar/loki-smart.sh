#!/bin/bash

BASE_BRANCH="origin/main"
STORY_PATTERN="packages/*/src/**/*.stories.@(ts|tsx|js|jsx)"

echo "🔍 Checking for changed story files since $BASE_BRANCH..."

CHANGED_FILES=$(git diff --name-only "$BASE_BRANCH")

STORY_FILES_CHANGED=()
for file in $CHANGED_FILES; do
  if [[ "$file" == *.stories.ts || "$file" == *.stories.tsx || "$file" == *.stories.js || "$file" == *.stories.jsx ]]; then
    STORY_FILES_CHANGED+=("$file")
  fi
done

if [ ${#STORY_FILES_CHANGED[@]} -eq 0 ]; then
  echo "✅ No changed story files detected. Skipping Loki."
  exit 0
fi

# Extract unique package names (e.g., from packages/fuselage-button/src/Button.stories.tsx)
PACKAGES=()
for path in "${STORY_FILES_CHANGED[@]}"; do
  pkg=$(echo "$path" | cut -d/ -f2)
  PACKAGES+=("$pkg")
done

# Remove duplicates
UNIQUE_PACKAGES=($(echo "${PACKAGES[@]}" | tr ' ' '\n' | sort -u))

echo "📦 Detected changed packages: ${UNIQUE_PACKAGES[*]}"
for pkg in "${UNIQUE_PACKAGES[@]}"; do
  echo "▶️ Running Loki for packages/$pkg"
  yarn loki test --filter=packages/$pkg
done
