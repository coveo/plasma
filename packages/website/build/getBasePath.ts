const isCI = !!process.env.JENKINS_HOME || process.env.CI === 'true';
const branchName = process.env.BRANCH_NAME || process.env.GITHUB_HEAD_REF || process.env.GITHUB_REF_NAME;

let basePath = '/';
if (isCI) {
    basePath = branchName === 'master' ? '/old/' : `/feature/${branchName.replaceAll('/', '-')}/old/`;
}

export default basePath;
