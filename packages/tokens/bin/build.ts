import {ensureDirSync, outputFileSync} from 'fs-extra';
import {rimraf} from 'rimraf';

import {buildColorsTokens} from './lib/tokens/colors';
import {buildIconsTokens} from './lib/tokens/icons';

const cleanOutputDirectories = () => {
    rimraf.sync('./css', {preserveRoot: false});
    rimraf.sync('./scss', {preserveRoot: false});
    rimraf.sync('./src', {preserveRoot: false});
    rimraf.sync('./icons', {preserveRoot: false});
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

void build();
