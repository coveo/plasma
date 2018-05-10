const sh = require('shelljs');
const branchName = process.env.TRAVIS_PULL_REQUEST_BRANCH; // travis provides this env variable
const userpassword = process.env.GITUSRPWD;
const originWithAuthentication = `https://${userpassword}@github.com/coveo/react-vapor.git`;

console.log(`Creating live demo for branch: ${branchName}`);
sh.cp('-R', 'docs', branchName);
sh.exec('git add .');
sh.exec(`git commit -m 'live demo at https://coveo.github.io/react-vapor/${branchName}/' --no-verify`);

console.log(`Syncing with gh-pages from branch: ${branchName}`);
sh.exec(`git pull --no-edit --strategy-option ours ${originWithAuthentication} gh-pages`);

console.log(`Pushing live demo to gh-pages for branch: ${branchName}`);
const currentCommit = sh.exec('git show --oneline -s').stdout.trim().split(' ')[0];
sh.exec(`git push -f ${originWithAuthentication} ${currentCommit}:gh-pages`);

process.exit();
