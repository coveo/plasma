/**
 * To run the scrip with params try this:
 *    npm run start ../pnpm-lock.yaml ../package-lock.json
 */
import {generateNpmLock} from './generateNpmLockfile';
import {generatePackageJson} from './generatePackageJson';
import {readLockfile} from './processPnpmLockfile';
import {writeFile} from './writeFile';

const [pnpmLockPath, outputPath] = process.argv.slice(2);

const convert = async () => {
    const pnpmLock = await readLockfile(pnpmLockPath);
    if (pnpmLock == null) {
        throw new Error(`Failed to load pnpm lock file ${pnpmLockPath}`);
    }
    const outDir = outputPath.replace(/\/+$/, ''); // remove trailing "/"

    await Promise.all([
        writeFile(generateNpmLock(pnpmLock), `${outDir}/package-lock.json`),
        writeFile(generatePackageJson(pnpmLock), `${outDir}/package.json`),
    ]);
};

convert().then(() => console.log('done'));
