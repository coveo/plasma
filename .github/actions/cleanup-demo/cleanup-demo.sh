#!/usr/bin/env bash

set -e

BRANCH="$1"
CLEAN_BRANCH_NAME=${BRANCH//\//-} # replaces all / by -
BUCKET="$2"
DESTINATION=react-vapor/feature

echo "Deleting demo of ${BRANCH} in ${BUCKET}/${DESTINATION}/${CLEAN_BRANCH_NAME}."
aws s3 rm --recursive s3://${BUCKET}/${DESTINATION}/${CLEAN_BRANCH_NAME}

echo "Demo successfully deleted"
