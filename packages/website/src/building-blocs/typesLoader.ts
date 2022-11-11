import {loader} from '@monaco-editor/react';
import {createDefaultMapFromCDN} from '@typescript/vfs';
import lzstring from 'lz-string';
import * as ts from 'typescript';

const initMonaco = loader.init();

export const compilerOptions: ts.CompilerOptions = {
    jsx: ts.JsxEmit.ReactJSX,
    lib: ['es2017', 'dom'],
    target: ts.ScriptTarget.ES2017,
    skipLibCheck: true,
    esModuleInterop: true,
    strict: false,
};

const typesFiles = require.context('!!raw-loader!@types', true, /\.d\.ts$/i, 'lazy-once');
const plasmaReactTypes = require.context(
    '!!raw-loader!@coveord/plasma-react/dist/definitions',
    true,
    /\.d\.ts$/i,
    'lazy-once'
);
const plasmaMantineTypes = require.context(
    '!!raw-loader!@coveord/plasma-mantine/dist/definitions',
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
const mantineCoreTypes = require.context('!!raw-loader!@mantine/core/lib', true, /\.d\.ts$/i, 'lazy-once');
const mantineHooksTypes = require.context('!!raw-loader!@mantine/hooks/lib', true, /\.d\.ts$/i, 'lazy-once');
const mantineFormTypes = require.context('!!raw-loader!@mantine/form/lib', true, /\.d\.ts$/i, 'lazy-once');
const momentJsTypes = require.context('!!raw-loader!moment', true, /\.d\.ts$/i, 'lazy-once');
const reduxTypes = require.context('!!raw-loader!redux', true, /\.d\.ts$/i, 'lazy-once');
const loremIpsumTypes = require.context('!!raw-loader!lorem-ipsum/types/src', true, /\.d\.ts$/i, 'lazy-once');
const rcSliderTypes = require.context('!!raw-loader!rc-slider/es', true, /\.d\.ts$/i, 'lazy-once');

const load = async (path: string, ctx: any, root: string) => {
    const {default: content} = await ctx(path);
    let newPath = `${root}/${path.replace('./', '')}`;
    if (root.includes('@coveord/plasma-react') && path.includes('Entry.d.ts')) {
        newPath = newPath.replace('Entry.d.ts', 'index.d.ts');
    }
    if (root.includes('moment') && path.includes('moment.d.ts')) {
        newPath = newPath.replace('moment.d.ts', 'index.d.ts');
    }
    return {path: newPath, content};
};

const loadAll: Promise<Map<string, string>> = Promise.all([
    createDefaultMapFromCDN(compilerOptions as any, ts.version!, true, ts as any, lzstring),
    ...typesFiles.keys().map((path) => load(path, typesFiles, '/node_modules/@types')),
    ...loremIpsumTypes.keys().map((path) => load(path, loremIpsumTypes, '/node_modules/lorem-ipsum')),
    ...reduxTypes.keys().map((path) => load(path, reduxTypes, '/node_modules/redux')),
    ...rcSliderTypes.keys().map((path) => load(path, rcSliderTypes, '/node_modules/rc-slider')),
    ...plasmaReactTypes.keys().map((path) => load(path, plasmaReactTypes, '/node_modules/@coveord/plasma-react')),
    ...plasmaMantineTypes.keys().map((path) => load(path, plasmaMantineTypes, '/node_modules/@coveord/plasma-mantine')),
    ...plasmaReactIconsTypes
        .keys()
        .map((path) => load(path, plasmaReactIconsTypes, '/node_modules/@coveord/plasma-react-icons')),
    ...momentJsTypes.keys().map((path) => load(path, momentJsTypes, '/node_modules/moment')),
    ...mantineCoreTypes.keys().map((path) => load(path, mantineCoreTypes, '/node_modules/@mantine/core')),
    ...mantineHooksTypes.keys().map((path) => load(path, mantineHooksTypes, '/node_modules/@mantine/hooks')),
    ...mantineFormTypes.keys().map((path) => load(path, mantineFormTypes, '/node_modules/@mantine/form')),
]).then(([map, ...mappedTypes]) => {
    mappedTypes.forEach(({path, content}) => {
        map.set(path, content);
    });
    return map;
});

let loaded = false;

const loadTypesInMonaco = async () => {
    if (!loaded) {
        const [defaultMap, monaco] = await Promise.all([loadAll, initMonaco]);
        monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
            jsx: monaco.languages.typescript.JsxEmit.ReactJSX,
            jsxFactory: 'React.createElement',
            jsxFragmentFactory: 'React.Fragment',
            reactNamespace: 'React',
            esModuleInterop: true,
            allowSyntheticDefaultImports: true,
        });

        defaultMap.forEach((content, path) => {
            monaco.languages.typescript.typescriptDefaults.addExtraLib(content, `file://${path}`);
        });

        loaded = true;
    }
};

export default {load: loadTypesInMonaco};
