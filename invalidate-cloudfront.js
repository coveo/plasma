const exec = require('child_process').exec;
const AWS = require('aws-sdk');

const cloudfront = new AWS.CloudFront();
const pathToInvalidate = `/react-vapor/*`;

const shouldDoInvalidation = () => !!process.env.TRAVIS;
const logInRed = (str) => console.log('\x1b[31m%s\x1b[0m', str);
const logInGreen = (str) => console.log('\x1b[32m%s\x1b[0m', str);

if (shouldDoInvalidation()) {
    cloudfront
        .createInvalidation({
            DistributionId: process.env.AWS_CLOUDFRONT_DISTRIBUTION_ID,
            InvalidationBatch: {
                CallerReference: new Date().getTime().toString(),
                Paths: {
                    Quantity: 1,
                    Items: [pathToInvalidate],
                },
            },
        })
        .send((error, success) => {
            if (error) {
                logInRed('ERROR WHILE INVALIDATING RESSOURCES ON CLOUDFRONT');
                logInRed('*************');
                logInRed(error.message);
                logInRed('*************');
                exec('travis_terminate 1');
                throw error;
            }
            if (success) {
                logInGreen('INVALIDATED CLOUDFRONT CACHE SUCCESSFULLY');
                logInGreen('*************');
                logInGreen(`PATH INVALIDATED: ${pathToInvalidate}`);
                logInGreen(`INVALIDATION ID : ${success.Invalidation.Id}`);
                logInGreen('*************');
            }
        });
} else {
    console.log('INVALIDATION FROM CLOUDFRONT SKIPPED BECAUSE THIS IS NOT AN OFFICIAL RELEASE');
}
