const sh = require('shelljs')
const branchName = sh.exec('git rev-parse --abbrev-ref HEAD').stdout

// when travis build is finished,
// move dist to a folder with the name of the branch
// add this folder to the vcs, commit, and push to gh-pages

sh.mv('dist', branchName)

sh.exec(`git add ${branchName}`)
sh.exec(`git commit -m 'create live demo for ${branchName}'`)
sh.exec(`git push origin ${branchName}:gh-pages`)
