import {FileNodesResponse} from 'figma-js';
import {ensureDirSync} from 'fs-extra';
import rimraf from 'rimraf';

import iconsJson from '../data/icons.json';
import tokenLibraryJson from '../data/tokenLibrary.json';
import {generateColorTokens} from './lib/tokens/colors';
import {generateIconsTokens} from './lib/tokens/icons';
import {generateTypekitTokens} from './lib/tokens/typekit';

rimraf.sync('./dist/*');
rimraf.sync('./scss/*');
rimraf.sync('./src/*');

const tokenLibrary = tokenLibraryJson as FileNodesResponse;
const iconsMarkup = iconsJson as Record<string, string>;

try {
    ensureDirSync('./dist');
    ensureDirSync('./scss');
    ensureDirSync('./src');
    generateColorTokens(tokenLibrary);
    generateTypekitTokens(tokenLibrary);
    generateIconsTokens(tokenLibrary, iconsMarkup);
} catch (err) {
    console.error('An error occured while building tokens', err);
}
