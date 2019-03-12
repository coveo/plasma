#!/usr/bin/env bash

REPO=`git config remote.origin.url`
SSH_REPO=${REPO/https:\/\/github.com\//git@github.com:}
SHA=`git rev-parse --verify HEAD`

git config user.name "Travis CI"
git config user.email "$COMMIT_AUTHOR_EMAIL"

echo "Creating live demo for branch: $TRAVIS_PULL_REQUEST_BRANCH";
cp -R docs "$TRAVIS_PULL_REQUEST_BRANCH"
git add .
git commit -m "live demo at https://coveo.github.io/react-vapor/$TRAVIS_PULL_REQUEST_BRANCH/" --no-verify

echo "Syncing with gh-pages from branch: $TRAVIS_PULL_REQUEST_BRANCH"
git pull --no-edit --strategy-option ours SSH_REPO gh-pages

echo "Pushing live demo to gh-pages for branch: $TRAVIS_PULL_REQUEST_BRANCH"
git push -f SSH_REPO "$SHA:gh-pages"

node ./create-live-demo.js
