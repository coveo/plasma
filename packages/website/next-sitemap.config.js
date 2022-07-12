const basePath = require('./build/getBasePath');

/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: `https://plasma.coveo.com${basePath}`,
    generateRobotsTxt: true,
    outDir: 'out',
};
