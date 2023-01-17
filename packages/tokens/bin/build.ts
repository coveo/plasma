import {ensureDirSync, outputFileSync} from 'fs-extra/esm';
import rimraf from 'rimraf';

import {buildColorsTokens, buildIconsTokens} from './lib/index.js';

const cleanOutputDirectories = () => {
    rimraf.sync('./css/*');
    rimraf.sync('./scss/*');
    rimraf.sync('./src/*');
    rimraf.sync('./icons/*');
    ensureDirSync('./css');
    ensureDirSync('./scss');
    ensureDirSync('./src');
    ensureDirSync('./icons');
};

const build = async () => {
    try {
        cleanOutputDirectories();
        outputFileSync('./src/index.ts', '');
        await buildIconsTokens();
        await buildColorsTokens();
    } catch (err) {
        console.error('An error occured while building tokens\n', err);
    }
};

build();
