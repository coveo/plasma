const isJenkins = !!process.env.JENKINS_HOME;
const branchName = process.env.BRANCH_NAME;

let basePath = '/';
if (isJenkins && branchName !== 'master') {
    basePath = `/feature/${branchName}/`;
}

module.exports = basePath;
