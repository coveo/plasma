#!/usr/bin/env bash

set -e

BRANCH="$1"
BUCKET="$2"
DESTINATION=react-vapor

if [ "$BRANCH" = "master" ]
then
    echo "Deploying Plasma website"
    aws s3 sync ./packages/website/dist s3://${BUCKET}/${DESTINATION}
    echo "master branch successfully deployed to https://plasma.coveo.com/"
else
    echo "Deploying new demo of branch ${BRANCH}."
    aws s3 sync ./packages/website/dist s3://${BUCKET}/${DESTINATION}/feature/${BRANCH}
    echo "Branch ${BRANCH} successfully deployed to https://plasma.coveo.com/feature/${BRANCH}/"
fi
