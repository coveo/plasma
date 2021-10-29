import {Client} from 'figma-js';
import {writeJsonSync} from 'fs-extra';

import {fileId, PagesId} from './lib/mappings';

const personalAccessToken: string = process.env.FIGMA_TOKEN!;

const figmaClient = Client({personalAccessToken});

const getTokenLibrary = async () => {
    const {data} = await figmaClient.fileNodes(fileId, {ids: Object.values(PagesId)});
    return data;
};

const fetchDesignTokens = async () => {
    const tokenLibraryContent = await getTokenLibrary();
    writeJsonSync('./data/tokenLibrary.json', tokenLibraryContent, {spaces: 4});
};

fetchDesignTokens();
