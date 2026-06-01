#!/usr/bin/env node
import {spawn} from 'node:child_process';
import path from 'node:path';
import {existsSync, writeFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

process.on('unhandledRejection', (err) => {
    throw err;
});

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const onExit = (childProcess) =>
    new Promise((resolve, reject) => {
        childProcess.once('exit', (code) => {
            if (code === 0) {
                resolve();
            } else {
                reject(new Error('Exit with error code: ' + code));
            }
        });
        childProcess.once('error', (error) => {
            reject(error);
        });
    });

export const build = async ({watch = false}) => {
    // compile with swc and tsgo
    try {
        const tsgoArgs = ['--emitDeclarationOnly'];
        if (existsSync('./tsconfig.build.json')) {
            tsgoArgs.push('--project', './tsconfig.build.json');
        }
        const swcArgs = ['./src', '--copy-files', '--config-file', path.resolve(__dirname, '..', 'build.swcrc')];

        if (watch) {
            tsgoArgs.push('--watch');
            swcArgs.push('--watch');
        }

        const tsgoESMArgs = [...tsgoArgs, '--declarationDir', './dist'];

        const swcES6Args = [
            ...swcArgs,
            '--config',
            'module.type=es6',
            '--config',
            'jsc.target=es2020',
            '--out-dir',
            './dist',
            '--strip-leading-paths',
        ];

        const dtsESM = spawn('tsgo', tsgoESMArgs, {stdio: 'inherit', shell: true});
        const esm = spawn('swc', swcES6Args, {stdio: 'inherit', shell: true});
        await Promise.all([onExit(dtsESM), onExit(esm)]);

        // Ensure NodeJS resolves dist/**/*.js as ESM
        writeFileSync('dist/package.json', JSON.stringify({type: 'module'}));

        console.info('✅');
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

void build({watch: false});
