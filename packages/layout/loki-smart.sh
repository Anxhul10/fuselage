#!/bin/bash

BASE_BRANCH="origin/main"
TARGET_PACKAGE="packages/layout"

echo "🔍 Checking for changed story files in $TARGET_PACKAGE since $BASE_BRANCH..."

CHANGED_FILES=$(git diff --name-only "$BASE_BRANCH")

STORIES_FILTER=""
echo "📄 Changed files:"
while IFS= read -r file; do
  if [[ "$file" == $TARGET_PACKAGE/* && "$file" == *.stories.tsx ]]; then
    filename=$(basename "$file")
    echo "    * $file"
    if [ -z "$STORIES_FILTER" ]; then
      STORIES_FILTER="$filename"
    else
      STORIES_FILTER="$STORIES_FILTER|$filename"
    fi
  fi
done <<< "$CHANGED_FILES"

if [ -z "$STORIES_FILTER" ]; then
  echo "✅ No changed story files in $TARGET_PACKAGE. Skipping Loki."
  exit 0
fi

echo "▶️ Running Loki with filter: $STORIES_FILTER"
yarn loki test --storiesFilter="$STORIES_FILTER"
