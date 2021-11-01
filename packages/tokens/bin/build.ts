import {FileNodesResponse} from 'figma-js';
import {ensureDirSync, existsSync} from 'fs-extra';
import rimraf from 'rimraf';

const loadJSONData = async <T>(path: string): Promise<T> => {
    if (existsSync(path)) {
        const data = await import(path);
        return data as T;
    } else {
        throw new Error(`Cannot find module ${path}, perhaps you forgot to fetch the tokens?`);
    }
};

const cleanOutputDirectories = () => {
    rimraf.sync('./dist/*');
    rimraf.sync('./scss/*');
    rimraf.sync('./src/*');
    ensureDirSync('./dist');
    ensureDirSync('./scss');
    ensureDirSync('./src');
};

const build = async () => {
    try {
        const tokenLibrary = await loadJSONData<FileNodesResponse>('../data/tokenLibrary.json');
        cleanOutputDirectories();
        // todo: iterate over tokenLibrary structure
    } catch (err) {
        console.error('An error occured while building tokens\n', err);
    }
};

build();
