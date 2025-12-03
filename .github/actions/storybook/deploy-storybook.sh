#!/usr/bin/env bash

set -e

BRANCH="$1"
BUCKET="$2"
DESTINATION=react-vapor

if [ "$BRANCH" = "master" ]
then
    echo "Deploying Storybook for master"
    aws s3 cp ./packages/storybook/storybook-static s3://${BUCKET}/${DESTINATION}/storybook --recursive
    echo "Storybook successfully deployed to https://plasma.coveo.com/storybook/"
else
    CLEAN_BRANCH_NAME=${BRANCH//\//-} # replaces all / by -
    echo "Pushing storybook files of ${BRANCH} to ${BUCKET}/${DESTINATION}/feature/${CLEAN_BRANCH_NAME}/storybook."
    aws s3 cp ./packages/storybook/storybook-static s3://${BUCKET}/${DESTINATION}/feature/${CLEAN_BRANCH_NAME}/storybook --recursive
fi
