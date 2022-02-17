const isJenkins = !!process.env.JENKINS_HOME;

const basePath = isJenkins ? `feature/${process.env.BRANCH_NAME}/` : '';

/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: `https://plasma.coveo.com/${basePath}`,
    generateRobotsTxt: true,
    outDir: 'out',
};
