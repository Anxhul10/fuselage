#!/bin/bash

BASE_BRANCH="origin/main"
TARGET_PACKAGE="packages/fuselage"

echo "🔍 Checking for changed story files in $TARGET_PACKAGE since $BASE_BRANCH..."

CHANGED_FILES=$(git diff --name-only "$BASE_BRANCH")

STORY_FILES=()
echo "📄 Changed files:"
while IFS= read -r file; do
  if [[ "$file" == $TARGET_PACKAGE/* && "$file" == *.stories.tsx ]]; then
    echo "    * $file"
    STORY_FILES+=("$(basename "$file")")
  fi
done <<< "$CHANGED_FILES"

if [ ${#STORY_FILES[@]} -eq 0 ]; then
  echo "✅ No changed story files in $TARGET_PACKAGE. Skipping Loki."
  exit 0
fi

echo "▶️ Running Loki for each story file..."
for story in "${STORY_FILES[@]}"; do
  echo "🔸 Testing: $story"
  yarn loki test --storiesFilter="$story"
done
