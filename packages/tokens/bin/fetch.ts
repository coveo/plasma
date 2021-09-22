import {Canvas, Client, FileNodesResponse, Frame} from 'figma-js';
import {writeJsonSync} from 'fs-extra';
import fetch from 'cross-fetch';

import {fileId, PagesId} from './lib/mappings';
import {getPage} from './lib/figma';

const personalAccessToken: string = process.env.FIGMA_TOKEN!;

const figmaClient = Client({personalAccessToken});

const getTokenLibrary = async () => {
    const {data} = await figmaClient.fileNodes(fileId, {ids: Object.values(PagesId)});
    return data;
};

const getIcon = async ([iconNodeId, iconUrl]: [string, string]): Promise<[string, string]> => {
    const response = await fetch(iconUrl, {method: 'GET', headers: {'Content-Type': 'image/svg+xml'}});
    const iconText = await response.text();
    return [iconNodeId, iconText];
};

const getIcons = async (file: FileNodesResponse) => {
    const {children} = getPage(file, PagesId.Icons);
    const iconsNodeId = (children as Frame[])?.reduce<string[]>(
        (memo, set) => memo.concat(set.children.map(({id}) => id)),
        []
    );

    const {data} = await figmaClient.fileImages(fileId, {ids: iconsNodeId, format: 'svg'});

    const fetchedIcons = await Promise.all(Object.entries(data.images).map(getIcon));
    const output: Record<string, string> = {};

    fetchedIcons.forEach(([iconNodeId, iconSvgMarkup]) => {
        output[iconNodeId] = iconSvgMarkup;
    });

    return output;
};

const fetchDesignTokens = async () => {
    const tokenLibraryContent = await getTokenLibrary();
    const icons = await getIcons(tokenLibraryContent);
    writeJsonSync('./data/tokenLibrary.json', tokenLibraryContent, {spaces: 4});
    writeJsonSync('./data/icons.json', icons, {spaces: 4});
};

fetchDesignTokens();
