const sh = require('shelljs')
const replace = require('replace-in-file');
const branchName = process.env.TRAVIS_PULL_REQUEST_BRANCH // travis provides this env variable
const userpassword = process.env.GITUSRPWD
const originWithAuthentication = `https://${userpassword}@github.com/coveo/react-vapor.git`

console.log(`Creating live demo for branch: ${branchName}`)
sh.cp('-R', 'docs', branchName)
replace.sync({
    files: `${branchName}/index.html`,
    from: 'assets/bundle.js',
    to: `https://raw.githubusercontent.com/coveo/react-vapor/gh-pages/${branchName}/assets/bundle.js`,
});
sh.exec(`git add ${branchName}`)
sh.exec(`git commit -m 'create live demo for ${branchName}' --no-verify`)

const currentCommit = sh.exec('git show --oneline -s').trim().split(' ')[0]
sh.exec(`git push -f ${originWithAuthentication} ${currentCommit}:gh-pages`)

console.log('Live demo creation completed.')
console.log(`If it succeeded, the demo url should be https://coveo.github.io/react-vapor/${branchName}/index.html`)
process.exit()
