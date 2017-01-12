#!/bin/bash

set -x

( cd _gh_pages
  git init
  git config user.name "pastjean"
  git config user.email "pastjean@coveo.com"
  git add .
  git commit -m "Autodeploy to Github Pages"
  git push --force --quiet "git@github.com:coveo/vapor.git" master:gh-pages
)
