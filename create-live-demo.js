const sh = require('shelljs')
const branchName = sh.exec('git rev-parse --abbrev-ref HEAD').stdout.trim()
console.log(`Creating live demo for branch: ${branchName}`)

// when travis build is finished,
// move dist to a folder with the name of the branch
// add this folder to the vcs, commit, and push to gh-pages
// and than remove this folder from the vcs, commit, and delete it

sh.cp('-R', 'docs', branchName)
sh.exec(`git add ${branchName}`)
sh.exec(`git commit -m 'create live demo for ${branchName}' --no-verify`)
sh.exec(`git push origin ${branchName}:gh-pages`)
sh.exec(`git rm ${branchName} && git commit -m 'remove demo repo from vcs'`)
sh.exec(`rm -rf ${branchName}`)

console.log('Live demo creation completed.')
console.log(`If it succeeded, the demo url should be https://coveo.github.io/react-vapor/${branchName}/`)
process.exit()
