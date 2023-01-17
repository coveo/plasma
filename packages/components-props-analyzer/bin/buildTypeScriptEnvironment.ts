import {createFSBackedSystem, createVirtualTypeScriptEnvironment} from '@typescript/vfs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import ts from 'typescript';

// eslint-disable-next-line no-underscore-dangle
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const compilerOptions: ts.CompilerOptions = {
    jsx: ts.JsxEmit.ReactJSX,
    target: ts.ScriptTarget.ES2017,
    skipLibCheck: true,
    esModuleInterop: true,
    strict: false,
};

const build = () => {
    const fsMap = new Map<string, string>();
    const system = createFSBackedSystem(fsMap, __dirname, ts);
    const env = createVirtualTypeScriptEnvironment(system, [], ts, compilerOptions);
    return env;
};

export default build;
