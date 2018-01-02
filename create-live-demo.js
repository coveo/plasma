const sh = require('shelljs')
const branchName = sh.exec('git rev-parse --abbrev-ref HEAD').stdout.trim()

console.log(`Creating live demo for branch: ${branchName}`)
sh.cp('-R', 'docs', branchName)
sh.exec(`git add ${branchName}`)
sh.exec(`git commit -m 'create live demo for ${branchName}' --no-verify`)
sh.exec(`git push -f origin ${branchName}:gh-pages`)
sh.rm('-rf', branchName)
sh.exec(`git add . && git commit -m 'remove demo repo from vcs' --no-verify && git push origin ${branchName}`)

console.log('Live demo creation completed.')
console.log(`If it succeeded, the demo url should be https://coveo.github.io/react-vapor/${branchName}/index.html`)
process.exit()
