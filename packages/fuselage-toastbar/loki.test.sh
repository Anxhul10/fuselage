#!/bin/bash

# Get changed .stories.tsx files in packages/fuselage/src
files=$(git diff --name-only main chore/loki | grep '^packages/fuselage-toastbar/src/.*\.stories\.tsx$')

# Create an array to hold the base names
story_names=()

# Loop through each file path
while IFS= read -r file; do
  # Extract the file name (strip path), then remove the .stories.tsx suffix
  base_name=$(basename "$file" .stories.tsx)
  story_names+=("$base_name")
done <<< "$files"

# Print the array elements
for name in "${story_names[@]}"; do
    echo "Running loki test for: $name"
    yarn loki test --storiesFilter $name
done
