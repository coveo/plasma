import {ensureDir, removeSync} from 'fs-extra';
import * as path from 'node:path';
import simpleGit, {SimpleGit} from 'simple-git';
import {DEMO_FILENAME_PATTERN} from './constants';
import {copyDemoFiles} from './copyDemoFiles';
import {findTsxAndCssModule} from './findTsxAndCssModule';
import {generatePage} from './generatePage';
import {groupFilesByComponent} from './groupFilesByComponent';
import packageJson from '../package.json';

const cloneRepository = async (repoUrl: string, destinationFolder: string): Promise<void> => {
    const git: SimpleGit = simpleGit();
    await git.clone(repoUrl, destinationFolder, ['-b', packageJson.dependencies['@mantine/core'], '--single-branch']);
};

const main = async (): Promise<void> => {
    const repoUrl = 'https://github.com/mantinedev/mantine.git';
    const destinationFolder = 'mantine_tmp';
    const localCopyFolder = path.join('src', 'examples', 'mantine');
    const srcFolder = path.join(destinationFolder, 'packages', '@docs', 'demos', 'src', 'demos', 'core');

    removeSync(destinationFolder);
    removeSync(localCopyFolder);
    // Clone the repository
    await cloneRepository(repoUrl, destinationFolder);

    // Find files, copy them, group them by component and generate a demo page
    await ensureDir(localCopyFolder);
    const allFilesPath = await findTsxAndCssModule(srcFolder);
    const files = await copyDemoFiles(allFilesPath, localCopyFolder);
    const tsxFiles = files
        .filter(({sourcePath}) => sourcePath.match(DEMO_FILENAME_PATTERN))
        .map(({sourcePath}) => path.basename(sourcePath));
    const cssFileByTsxFile = files
        .filter(({cssImport}) => cssImport !== null)
        .reduce((acc, {sourcePath, cssImport}) => ({...acc, [path.basename(sourcePath)]: cssImport}), {});
    console.log(cssFileByTsxFile);
    const grouppedFiles = groupFilesByComponent(tsxFiles);

    for (const [key, filesPath] of Object.entries(grouppedFiles)) {
        await generatePage(key, filesPath, cssFileByTsxFile);
    }

    // cleanup mantine src
    removeSync(destinationFolder);
};

main().catch((error) => {
    console.error('Error:', error);
});
