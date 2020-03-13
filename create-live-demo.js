const axios = require('axios');
const _ = require('underscore');
const slugify = require('@sindresorhus/slugify');
const walk = require('walkdir');
const mime = require('mime-types');
const fs = require('fs');
const AWS = require('aws-sdk');

const branchName = slugify(process.env.TRAVIS_PULL_REQUEST_BRANCH);
const prNumber = process.env.TRAVIS_PULL_REQUEST;
const userpassword = process.env.GITUSRPWD;
const APIEndpointWithAuthentication = `https://${userpassword}@api.github.com/repos/coveo/react-vapor/pulls/${prNumber}/reviews`;
const liveDemoMessage = `[Live demo available here](https://vapor.cloud.coveo.com/${branchName}/index.html).`;

const s3 = new AWS.S3();

const uploadFile = (src, target, bucket) => {
    return new Promise((resolve, reject) => {
        const contentType = mime.lookup(src) || 'application/octet-stream';
        s3.putObject(
            {
                Bucket: bucket,
                Key: target,
                Body: fs.readFileSync(src),
                ACL: 'public-read',
                ContentType: contentType,
            },
            (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    console.log(`Successfully uploaded ${src}.`);
                    resolve();
                }
            }
        );
    });
};

const uploadDir = async (dir, bucketName) => {
    const result = await walk.async(dir, {return_object: true});
    await Promise.all(
        Object.entries(result).map(([src, stat]) => {
            if (stat.isFile()) {
                const target = src.split(dir)[1];
                return uploadFile(src, target, bucketName);
            }
            return Promise.resolve();
        })
    );
};

uploadDir('packages/demo/dist/', `coveo-prd-jsadmin/react-vapor/${branchName}`)
    .then(() => {
        console.log('Posting demo link in GitHub Pull Request...\n');
        const handleError = (e) => {
            console.log(
                'Something went wrong while posting Demo URL in GitHub Pull Request. See error below for details:\n'
            );
            console.log(e);
            process.exit();
        };
        const exitSinceDemoIsAlreadyPosted = () => {
            console.log('Demo URL is already posted in GitHub Pull Request.');
            process.exit();
        };
        axios
            .get(APIEndpointWithAuthentication)
            .then((response) =>
                _.chain(response.data)
                    .pluck('body')
                    .contains(liveDemoMessage)
                    .value()
                    ? exitSinceDemoIsAlreadyPosted()
                    : axios
                          .post(APIEndpointWithAuthentication, {event: 'COMMENT', body: liveDemoMessage})
                          .then(() => {
                              console.log('Demo URL successfully posted in GitHub Pull Request');
                              process.exit();
                          })
                          .catch(handleError)
            )
            .catch(handleError);
    })
    .catch((e) => {
        console.log(
            'Something went wrong while posting Demo URL in GitHub Pull Request. See error below for details:\n'
        );
        console.log(e);
        process.exit(1);
    });
