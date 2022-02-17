import {ensureDirSync} from 'fs-extra';
import rimraf from 'rimraf';

import {buildIconsTokens} from './lib/tokens/icons';

const cleanOutputDirectories = () => {
    rimraf.sync('./scss/*');
    rimraf.sync('./src/*');
    rimraf.sync('./icons/*');
    ensureDirSync('./scss');
    ensureDirSync('./src');
    ensureDirSync('./icons');
};

const build = async () => {
    try {
        cleanOutputDirectories();
        await buildIconsTokens();
    } catch (err) {
        console.error('An error occured while building tokens\n', err);
    }
};

build();
