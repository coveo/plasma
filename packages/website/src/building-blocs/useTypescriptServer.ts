import {createDefaultMapFromCDN} from '@typescript/vfs';
import lzstring from 'lz-string';
import React from 'react';
import * as ts from 'typescript';
import {loader} from '@monaco-editor/react';

export const compilerOptions: ts.CompilerOptions = {
    jsx: ts.JsxEmit.React,
    lib: ['es2015', 'dom'],
    module: ts.ModuleKind.CommonJS,
    target: ts.ScriptTarget.ES5,
    skipLibCheck: true,
    esModuleInterop: true,
    strict: false,
};

const typesFiles = require.context('!!raw-loader!@types', true, /\.d\.ts$/i, 'lazy-once');
const plasmaTypes = require.context(
    '!!raw-loader!@coveord/plasma-react/dist/definitions',
    true,
    /\.d\.ts$/i,
    'lazy-once'
);
const plasmaReactIconsTypes = require.context(
    '!!raw-loader!@coveord/plasma-react-icons/dist/definitions',
    true,
    /\.d\.ts$/i,
    'lazy-once'
);
const load = async (path: string, ctx: any, root: string) => {
    const {default: content} = await ctx(path);
    let newPath = `${root}/${path.replace('./', '')}`;
    if (root.includes('@coveord/plasma-react') && path.includes('Entry.d.ts')) {
        newPath = newPath.replace('Entry.d.ts', 'index.d.ts');
    }
    return {path: newPath, content};
};

const loadAll: Promise<Map<string, string>> = Promise.all([
    createDefaultMapFromCDN(compilerOptions as any, ts.version!, true, ts as any, lzstring),
    ...typesFiles.keys().map((path) => load(path, typesFiles, '/node_modules/@types')),
    ...plasmaTypes.keys().map((path) => load(path, plasmaTypes, '/node_modules/@coveord/plasma-react')),
    ...plasmaReactIconsTypes
        .keys()
        .map((path) => load(path, plasmaReactIconsTypes, '/node_modules/@coveord/plasma-react-icons')),
]).then(([map, ...mappedTypes]) => {
    mappedTypes.forEach(({path, content}) => {
        map.set(path, content);
    });
    return map;
});

export const useTypescriptServer = () => {
    const [fsMap, setFsMap] = React.useState<Map<string, string> | null>(null);

    React.useEffect(() => {
        Promise.all([loadAll, loader.init()]).then(([defaultMap, monaco]) => {
            monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
                jsx: monaco.languages.typescript.JsxEmit.React,
                jsxFactory: 'React.createElement',
                jsxFragmentFactory: 'React.Fragment',
                reactNamespace: 'React',
            });

            defaultMap.forEach((content, path) => {
                monaco.languages.typescript.typescriptDefaults.addExtraLib(content, `file://${path}`);
            });
            setFsMap(new Map(defaultMap));
        });
    }, []);

    return {fsMap, setFsMap, compilerOptions};
};
