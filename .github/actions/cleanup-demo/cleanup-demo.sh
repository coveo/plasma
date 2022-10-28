#!/usr/bin/env bash

set -e

BRANCH="$1"
BUCKET="$2"
DESTINATION=react-vapor/feature

echo "Deleting demo of ${BRANCH} in ${BUCKET}/${DESTINATION}/${BRANCH}."
aws s3 rm --recursive s3://${BUCKET}/${DESTINATION}/${BRANCH}

echo "Demo successfully deleted"
