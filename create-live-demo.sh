#!/usr/bin/env bash

git config user.name "Travis CI"
git config user.email "$COMMIT_AUTHOR_EMAIL"

REPO=`git config remote.origin.url`
BASE_PATH=$PWD
SSH_REPO=${REPO/https:\/\/github.com\//git@github.com:}
BRANCH_FOLDER_NAME=`echo "$TRAVIS_PULL_REQUEST_BRANCH" | md5sum | awk '{print $1}'`

echo "Syncing with gh-pages from branch: $TRAVIS_PULL_REQUEST_BRANCH"
pushd $HOME
mkdir gh-pages
cd gh-pages
git init
git remote add -t gh-pages -f origin git@github.com:$TRAVIS_REPO_SLUG.git
git checkout gh-pages

echo "Creating live demo for branch: $TRAVIS_PULL_REQUEST_BRANCH";
cp -R $BASE_PATH/packages/react-vapor/docs/dist "$BRANCH_FOLDER_NAME"

git add "$BRANCH_FOLDER_NAME"
git commit --quiet -m "Demo for branch: $TRAVIS_PULL_REQUEST_BRANCH" --no-verify

SHA=`git rev-parse --verify HEAD`

echo "Pushing live demo to gh-pages for branch: $TRAVIS_PULL_REQUEST_BRANCH"
git push -f "$SSH_REPO" "$SHA:gh-pages"
echo "Demo available at https://coveo.github.io/react-vapor/$BRANCH_FOLDER_NAME/"
popd

BRANCH_FOLDER_NAME="$BRANCH_FOLDER_NAME" node ./create-live-demo.js
