const sh = require('shelljs')
const branchName = sh.exec('git rev-parse --abbrev-ref HEAD').stdout.trim()

// when travis build is finished,
// move dist to a folder with the name of the branch
// add this folder to the vcs, commit, and push to gh-pages
// and than remove this folder from the vcs, commit, and delete it

console.log(`Cleaning gh-pages branch before creating live demo for branch: ${branchName}`)
sh.exec(`git checkout gh-pages && git pull origin && rm -rf ${branchName}`)
sh.exec(`git add . && git commit -m 'remove previous ${branchName} folder if it exists'`)
sh.exec(`git push origin gh-pages && git checkout ${branchName}`)


console.log(`Creating live demo for branch: ${branchName}`)
sh.cp('-R', 'docs', branchName)
sh.exec(`git add ${branchName}`)
sh.exec(`git commit -m 'create live demo for ${branchName}' --no-verify`)
sh.exec(`git push -f origin ${branchName}:gh-pages`)
sh.rm('-rf', branchName)
sh.exec(`git add . && git commit -m 'remove demo repo from vcs' --no-verify`)

console.log('Live demo creation completed.')
console.log(`If it succeeded, the demo url should be https://coveo.github.io/react-vapor/${branchName}/`)
process.exit()
