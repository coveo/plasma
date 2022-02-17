const withImages = require('next-images');

const isJenkins = !!process.env.JENKINS_HOME;

const basePath = isJenkins ? `/feature/${process.env.BRANCH_NAME}/` : '/';

module.exports = withImages({
    basePath: basePath.replace(/\/$/, ''), // remove last slash
    env: {
        basePath,
    },
    images: {
        disableStaticImages: true,
    },
});
