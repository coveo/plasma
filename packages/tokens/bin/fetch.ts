import {program} from 'commander';
import fetch from 'cross-fetch';
import {Client, Frame} from 'figma-js';
import {writeJsonSync} from 'fs-extra/esm';
import {chunk} from 'lodash-es';

import {FilesId, getPage, LibraryName, PagesId} from './lib/index.js';

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
    console.info(`Fetching "${library}" library.`);
    const libraryContent = await fetchLibrary(library);
    writeJsonSync(`./data/${library.toLowerCase()}Library.json`, libraryContent, {spaces: 4});
    console.info(`${library} library done.`);
    return libraryContent;
};

const getIconsLibrary = async () => {
    const chunkSize = 100;
    const iconsLibrary = await getLibraryData('Icons');
    const {children} = getPage(iconsLibrary, PagesId.Icons[0]);
    const iconsNodeId = (children as Frame[])?.reduce<string[]>(
        (memo, set) => memo.concat(set.children.map(({id}) => id)),
        []
    );

    console.info(`Detected ${iconsNodeId.length} icons, starting to fetch icons markup in chunks of size ${chunkSize}`);

    const {data} = await figmaClient.fileImages(FilesId.Icons, {ids: iconsNodeId, format: 'svg'});
    const iconsChunks = {
        async *[Symbol.asyncIterator]() {
            const chunks = chunk(Object.entries(data.images), chunkSize);
            for (let i = 0; i < chunks.length; i++) {
                console.info(`Fetching chunks... (${i + 1}/${chunks.length})`);
                yield await Promise.all(chunks[i].map(fetchIconSvgMarkup));
            }
            console.info('Icons markup done.');
        },
    };

    const output: Record<string, string> = {};
    for await (const fetchedIcons of iconsChunks) {
        fetchedIcons.forEach(([iconNodeId, iconSvgMarkup]) => {
            output[iconNodeId] = iconSvgMarkup;
        });
    }

    writeJsonSync(`./data/icons.json`, output, {spaces: 4});
};

const getLibrariesData = async (libraries: LibraryName[]) => {
    console.info('Starting to fetch data from the following Figma libraries:', libraries);

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
