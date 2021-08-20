import {createDefaultMapFromCDN} from '@typescript/vfs';
import lzstring from 'lz-string';
import * as monaco from 'monaco-editor';
import React from 'react';
import * as ts from 'typescript';

monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
    jsx: monaco.languages.typescript.JsxEmit.React,
    jsxFactory: 'React.createElement',
    jsxFragmentFactory: 'React.Fragment',
    reactNamespace: 'React',
});
monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
    noSemanticValidation: false,
    noSyntaxValidation: false,
});
monaco.languages.typescript.typescriptDefaults.setEagerModelSync(true);

export const compilerOptions: ts.CompilerOptions = {
    jsx: ts.JsxEmit.React,
    lib: ['es2015', 'dom'],
    module: ts.ModuleKind.CommonJS,
    target: ts.ScriptTarget.ES5,
    skipLibCheck: true,
    esModuleInterop: true,
    strict: false,
};

const typesFiles = require.context('!!raw-loader!@types', true, /\.d\.ts$/i, 'lazy');
const typescriptLibs = require.context('!!raw-loader!typescript/lib', false, /\.d\.ts$/i, 'lazy');
const reactVaporTypes = require.context('!!raw-loader!react-vapor/dist/definitions', true, /\.d\.ts$/i, 'lazy');
const load = async (path: string, ctx: any, root: string) => {
    const {default: content} = await ctx(path);
    let newPath = `${root}/${path.replace('./', '')}`;
    if (root.includes('react-vapor') && path.includes('Entry.d.ts')) {
        newPath = newPath.replace('Entry.d.ts', 'index.d.ts');
    }
    return {path: newPath, content};
};
const loadAll = () =>
    Promise.all([
        ...typesFiles.keys().map((path) => load(path, typesFiles, '/node_modules/@types')),
        ...typescriptLibs.keys().map((path) => load(path, typescriptLibs, '')),
        ...reactVaporTypes.keys().map((path) => load(path, reactVaporTypes, '/node_modules/react-vapor')),
    ]);

export const useTypescriptServer = () => {
    const [fsMap, setFsMap] = React.useState<Map<string, string> | null>(null);
    React.useEffect(() => {
        loadAll().then((mappedTypes) => {
            createDefaultMapFromCDN(compilerOptions as any, ts.version!, true, ts as any, lzstring).then((map) => {
                mappedTypes.forEach(({path, content}) => {
                    monaco.languages.typescript.typescriptDefaults.addExtraLib(content, `file://${path}`);
                    map.set(path, content);
                });
                setFsMap(map);
            });
        });
    }, []);
    return {fsMap, setFsMap, compilerOptions};
};
