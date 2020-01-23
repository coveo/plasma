#!/usr/bin/env bash

git config user.name "Travis CI"
git config user.email "$COMMIT_AUTHOR_EMAIL"
npm config set package-lock false
npm config set "//registry.npmjs.org/:_authToken=$NPM_TOKEN"

git remote add -t master -f pub git@github.com:$TRAVIS_REPO_SLUG.git
git checkout master
npx lerna publish --yes --create-release github --git-remote pub