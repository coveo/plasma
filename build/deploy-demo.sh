#!/usr/bin/env bash

set -e

BRANCH="$1"
DESTINATION=react-vapor/feature
BUCKET=coveo-nrd-jsadmin

echo "Pushing new demo of ${BRANCH} to ${BUCKET}/${DESTINATION}/${BRANCH}."
aws s3 sync ./donut s3://${BUCKET}/${DESTINATION}/${BRANCH}

echo "Branch successfully deployed to https://plasma.coveo.com/feature/${BRANCH}/"
