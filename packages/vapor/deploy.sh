#!/bin/bash
npm install
npm run compile

git init
git config user.name "wfortin"
git config user.email "willyfortin@gmail.com"
git add .
git commit -m "Autodeploy to Github Pages"
git push --force --quiet "https://${GH_TOKEN}@github.com/Coveo/styleguide.git" master:gh-pages > /dev/null 2>&1
