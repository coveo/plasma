#!/usr/bin/env bash

set -e

BUCKET="$1"
DESTINATION=react-vapor
URL_PATH="${PLASMA_BASE_URL#https://plasma.coveo.com}" # strips the origin, leaving "" for master or "/feature/my-branch" for PRs

echo "demo-output-path=${PLASMA_BASE_URL}" >> $GITHUB_OUTPUT

echo "Deploying Storybook to ${PLASMA_BASE_URL}/"
aws s3 cp ./packages/storybook/storybook-static s3://${BUCKET}/${DESTINATION}${URL_PATH}/ --recursive

echo "Deploying old Plasma website to ${PLASMA_BASE_URL}/old/"
aws s3 cp ./packages/website/dist s3://${BUCKET}/${DESTINATION}${URL_PATH}/old/ --recursive

echo "Successfully deployed to ${PLASMA_BASE_URL}"
