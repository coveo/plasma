const sh = require('shelljs');
const $ = require('jquery');
const branchName = process.env.TRAVIS_PULL_REQUEST_BRANCH; // travis provides this env variable
const prNumber = process.env.TRAVIS_PULL_REQUEST;
const userpassword = process.env.GITUSRPWD;
const originWithAuthentication = `https://${userpassword}@github.com/coveo/react-vapor.git`;
const APIEndpointWithAuthentication = `https://${userpassword}api.github.com/repos/coveo/react-vapor/pulls/${prNumber}/reviews`;
const livedemoMessage = `live demo at https://coveo.github.io/react-vapor/${branchName}/`;

console.log(`Creating live demo for branch: ${branchName}`);
sh.cp('-R', 'docs', branchName);
sh.exec('git add .');
sh.exec(`git commit -m '${livedemoMessage}' --no-verify`);

console.log(`Syncing with gh-pages from branch: ${branchName}`);
sh.exec(`git pull --no-edit --strategy-option ours ${originWithAuthentication} gh-pages`);

console.log(`Pushing live demo to gh-pages for branch: ${branchName}`);
const currentCommit = sh.exec('git show --oneline -s').stdout.trim().split(' ')[0];
sh.exec(`git push -f ${originWithAuthentication} ${currentCommit}:gh-pages`);

console.log('Posting demo in GitHub Pull Request...\n');
$(APIEndpointWithAuthentication).post({event: 'COMMENT', body: livedemoMessage})
    .done(() => console.log('Demo URL successfully posted in GitHub Pull Request'))
    .fail((e) => {
        console.log('Something went wrong while posting demo url in GitHub Pull Request. See error below for details:\n');
        console.log(e);
    });

process.exit();
