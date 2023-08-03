import {ensureDirSync, outputFileSync} from 'fs-extra';
import {rimrafSync} from 'rimraf';

import {buildColorsTokens} from './lib/tokens/colors';
import {buildIconsTokens} from './lib/tokens/icons';

const cleanOutputDirectories = () => {
    rimrafSync('./css/*');
    rimrafSync('./scss/*');
    rimrafSync('./src/*');
    rimrafSync('./icons/*');
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
