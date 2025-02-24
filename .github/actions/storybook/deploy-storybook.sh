#!/usr/bin/env bash

set -e

BRANCH="$1"
BUCKET="$2"

DESTINATION=react-vapor/feature
CLEAN_BRANCH_NAME=${BRANCH//\//-} # replaces all / by -

echo "Pushing storybook files of ${BRANCH} to ${BUCKET}/${DESTINATION}/${CLEAN_BRANCH_NAME}/storybook."
aws s3 cp ./packages/storybook/storybook-static s3://${BUCKET}/${DESTINATION}/${CLEAN_BRANCH_NAME}/storybook --recursive
