for pkg in fuselage fuselage-toastbar onboarding-ui layout; do
            echo "generating storybook-stats for $pkg"
            cd $pkg
            yarn build-storybook --stats-json
            cd ..
          done