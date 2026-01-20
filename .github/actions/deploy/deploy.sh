#!/usr/bin/env bash

set -e

BRANCH="$1"
BUCKET="$2"
DESTINATION=react-vapor
ORIGIN="https://plasma.coveo.com"
STORYBOOK_PATHNAME="/"
OLD_WEBSITE_PATHNAME="/old/"
DEMO_PATHNAME="/feature/"


if [ "$BRANCH" = "master" ]
then
    echo "Deploying Storybook"
    aws s3 cp ./packages/storybook/storybook-static s3://${BUCKET}/${DESTINATION}${STORYBOOK_PATHNAME} --recursive
    echo "Storybook successfully deployed to ${ORIGIN}${STORYBOOK_PATHNAME}"
    echo "Deploying old Plasma website"
    aws s3 cp ./packages/website/dist s3://${BUCKET}/${DESTINATION}${OLD_WEBSITE_PATHNAME} --recursive
    echo "Old Plasma website successfully deployed to ${ORIGIN}${OLD_WEBSITE_PATHNAME}"
else
    CLEAN_BRANCH_NAME=${BRANCH//\//-} # replaces all / by -
    echo "demo-output-path=${ORIGIN}${DEMO_PATHNAME}${CLEAN_BRANCH_NAME}" >> $GITHUB_OUTPUT
    echo "Uploading storybook files of ${BRANCH} to ${BUCKET}/${DESTINATION}${DEMO_PATHNAME}${CLEAN_BRANCH_NAME}${STORYBOOK_PATHNAME}."
    aws s3 cp ./packages/storybook/storybook-static s3://${BUCKET}/${DESTINATION}${DEMO_PATHNAME}${CLEAN_BRANCH_NAME}${STORYBOOK_PATHNAME} --recursive
    echo "Uploading plasma-website files of ${BRANCH} to ${BUCKET}/${DESTINATION}${DEMO_PATHNAME}${CLEAN_BRANCH_NAME}${OLD_WEBSITE_PATHNAME}."
    aws s3 cp ./packages/website/dist s3://${BUCKET}/${DESTINATION}${DEMO_PATHNAME}${CLEAN_BRANCH_NAME}${OLD_WEBSITE_PATHNAME} --recursive
    echo "Branch ${BRANCH} successfully deployed to ${ORIGIN}${DEMO_PATHNAME}${CLEAN_BRANCH_NAME}${STORYBOOK_PATHNAME} and ${ORIGIN}${DEMO_PATHNAME}${CLEAN_BRANCH_NAME}${OLD_WEBSITE_PATHNAME}"
fi
