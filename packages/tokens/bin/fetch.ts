import {program} from 'commander';
import {Client, Frame} from 'figma-js';
import {writeJsonSync} from 'fs-extra';
import fetch from 'cross-fetch';

import {getPage} from './lib/figma';
import {FilesId, LibraryName, PagesId} from './lib/mappings';

const personalAccessToken: string = process.env.FIGMA_TOKEN!;

const figmaClient = Client({personalAccessToken});

const fetchLibrary = async (library: LibraryName) => {
    const {data} = await figmaClient.fileNodes(FilesId[library], {ids: PagesId[library]});
    return data;
};

const fetchIconSvgMarkup = async ([iconNodeId, iconUrl]: [string, string]): Promise<[string, string]> => {
    const response = await fetch(iconUrl, {method: 'GET', headers: {'Content-Type': 'image/svg+xml'}});
    const iconText = await response.text();
    return [iconNodeId, iconText];
};

const getLibraryData = async (library: LibraryName) => {
    const libraryContent = await fetchLibrary(library);
    writeJsonSync(`./data/${library.toLowerCase()}Library.json`, libraryContent, {spaces: 4});
    return libraryContent;
};

const getIconsLibrary = async () => {
    const iconsLibrary = await getLibraryData('Icons');
    const {children} = getPage(iconsLibrary, PagesId.Icons[0]);
    const iconsNodeId = (children as Frame[])?.reduce<string[]>(
        (memo, set) => memo.concat(set.children.map(({id}) => id)),
        []
    );

    const {data} = await figmaClient.fileImages(FilesId.Icons, {ids: iconsNodeId, format: 'svg'});

    const fetchedIcons = await Promise.all(Object.entries(data.images).map(fetchIconSvgMarkup));
    const output: Record<string, string> = {};

    fetchedIcons.forEach(([iconNodeId, iconSvgMarkup]) => {
        output[iconNodeId] = iconSvgMarkup;
    });

    writeJsonSync(`./data/icons.json`, output, {spaces: 4});
};

const getLibrariesData = async (libraries: LibraryName[]) => {
    console.log('Fetching data from the following Figma libraries:', libraries);

    if (libraries.includes('Icons')) {
        const librariesOtherThanIcons = libraries.filter((library) => library !== 'Icons');
        Promise.all([getIconsLibrary(), ...librariesOtherThanIcons.map(getLibraryData)]);
    } else {
        Promise.all(libraries.map(getLibraryData));
    }
};

program.option('-l, --libraries [libraries...]', 'Name(s) of the libraries to extract', 'All');
program.parse(process.argv);
const options = program.opts();

if (options.libraries === 'All') {
    getLibrariesData(Object.keys(FilesId) as LibraryName[]);
} else {
    getLibrariesData(options.libraries as LibraryName[]);
}
