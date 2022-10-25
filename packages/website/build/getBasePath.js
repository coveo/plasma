const isCI = !!process.env.JENKINS_HOME || process.env.CI === 'true';
const branchName = process.env.BRANCH_NAME || process.env.GITHUB_HEAD_REF;

let basePath = '/';
if (isCI && branchName !== 'master') {
    basePath = `/feature/${branchName}/`;
}

module.exports = basePath;
