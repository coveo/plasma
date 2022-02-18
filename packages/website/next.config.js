const withImages = require('next-images');
const basePath = require('./build/getBasePath');

module.exports = withImages({
    basePath: basePath.replace(/\/$/, ''), // remove last slash
    env: {
        basePath,
    },
    images: {
        disableStaticImages: true,
    },
});
