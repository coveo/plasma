const withImages = require('next-images');

const isJenkins = !!process.env.JENKINS_HOME;
const branchName = process.env.BRANCH_NAME;

let basePath = '/';
if (isJenkins && branchName !== 'master') {
    basePath = `/feature/${branchName}/`;
}

module.exports = withImages({
    basePath: basePath.replace(/\/$/, ''), // remove last slash
    env: {
        basePath,
    },
    images: {
        disableStaticImages: true,
    },
});
