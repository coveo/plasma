import {ensureDirSync} from 'fs-extra';
import rimraf from 'rimraf';

import {buildIconsTokens} from './lib/tokens/icons';

const cleanOutputDirectories = () => {
    rimraf.sync('./scss/*');
    rimraf.sync('./src/*');
    ensureDirSync('./scss');
    ensureDirSync('./src');
};

const build = async () => {
    try {
        cleanOutputDirectories();
        buildIconsTokens();
    } catch (err) {
        console.error('An error occured while building tokens\n', err);
    }
};

build();
