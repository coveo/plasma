import {program} from 'commander';
import {Client, Frame} from 'figma-js';
import {writeJsonSync} from 'fs-extra';
import {chunk} from 'lodash';

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
        [],
    );

    console.info(`Detected ${iconsNodeId.length} icons, starting to fetch icons markup in chunks of size ${chunkSize}`);

    const iconsChunks = {
        async *[Symbol.asyncIterator]() {
            const chunks = chunk(iconsNodeId, chunkSize);
            for (let i = 0; i < chunks.length; i++) {
                console.info(`Fetching chunks... (${i + 1}/${chunks.length})`);
                const {data} = await figmaClient.fileImages(FilesId.Icons, {ids: chunks[i], format: 'svg'});
                yield await Promise.all(Object.entries(data.images).map(fetchIconSvgMarkup));
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
