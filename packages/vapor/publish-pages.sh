#!/bin/bash

set -x

( cd _gh_pages
  git init
  git config user.name "Travis CI"
  git config user.email "$COMMIT_AUTHOR_EMAIL"
  git add .
  git commit -m "Autodeploy to Github Pages"
  git push --force --quiet "git@github.com:coveo/vapor.git" master:gh-pages
)
