const sh = require('shelljs');
const axios = require('axios');
const _ = require('underscore');
const branchName = process.env.TRAVIS_PULL_REQUEST_BRANCH; // travis provides this env variable
const prNumber = process.env.TRAVIS_PULL_REQUEST;
const userpassword = process.env.GITUSRPWD;
const originWithAuthentication = `https://${userpassword}@github.com/coveo/react-vapor.git`;
const APIEndpointWithAuthentication = `https://${userpassword}@api.github.com/repos/coveo/react-vapor/pulls/${prNumber}/reviews`;
const liveDemoMessage = `live demo at https://coveo.github.io/react-vapor/${branchName}/`;

console.log(`Creating live demo for branch: ${branchName}`);
sh.cp('-R', 'docs', branchName);
sh.exec('git add .');
sh.exec(`git commit -m '${liveDemoMessage}' --no-verify`);

console.log(`Syncing with gh-pages from branch: ${branchName}`);
sh.exec(`git pull --no-edit --strategy-option ours ${originWithAuthentication} gh-pages`);

console.log(`Pushing live demo to gh-pages for branch: ${branchName}`);
const currentCommit = sh.exec('git show --oneline -s').stdout.trim().split(' ')[0];
sh.exec(`git push -f ${originWithAuthentication} ${currentCommit}:gh-pages`);

console.log('Posting demo in GitHub Pull Request...\n');
const handleError = (e) => {
    console.log('Something went wrong while posting Demo URL in GitHub Pull Request. See error below for details:\n');
    console.log(e);
    process.exit();
};

const exitSinceDemoIsAlreadyPosted = () => {
    console.log('Demo URL is already posted in GitHub Pull Request.');
    process.exit();
};

axios.get(APIEndpointWithAuthentication)
    .then((response) => _.chain(response.data).pluck('body').contains(liveDemoMessage).value()
        ? exitSinceDemoIsAlreadyPosted()
        : axios.post(APIEndpointWithAuthentication, {event: 'COMMENT', body: liveDemoMessage})
            .then(() => {
                console.log('Demo URL successfully posted in GitHub Pull Request');
                process.exit();
            })
            .catch(handleError)
    )
    .catch(handleError);
