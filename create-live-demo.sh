#!/usr/bin/env bash

git config user.name "Travis CI"
git config user.email "$COMMIT_AUTHOR_EMAIL"

REPO=`git config remote.origin.url`
SSH_REPO=${REPO/https:\/\/github.com\//git@github.com:}

echo "Syncing with gh-pages from branch: $TRAVIS_PULL_REQUEST_BRANCH"
git stash
git pull --no-edit --strategy-option ours "$SSH_REPO" gh-pages
git stash pop

echo "Creating live demo for branch: $TRAVIS_PULL_REQUEST_BRANCH";
cp -R packages/react-vapor/docs "$TRAVIS_PULL_REQUEST_BRANCH"
cp -R packages/vapor/out "$TRAVIS_PULL_REQUEST_BRANCH/vapor"

git add "$TRAVIS_PULL_REQUEST_BRANCH"
git commit -m "live demo at https://coveo.github.io/react-vapor/$TRAVIS_PULL_REQUEST_BRANCH/" --no-verify
echo "Deploying demo at https://coveo.github.io/react-vapor/$TRAVIS_PULL_REQUEST_BRANCH/"

SHA=`git rev-parse --verify HEAD`

echo "Pushing live demo to gh-pages for branch: $TRAVIS_PULL_REQUEST_BRANCH"
git push -f "$SSH_REPO" "$SHA:gh-pages"

node ./create-live-demo.js
