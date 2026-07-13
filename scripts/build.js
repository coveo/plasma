#!/usr/bin/env node
import {spawn} from 'node:child_process';
import path from 'node:path';
import {existsSync, cpSync, mkdirSync, globSync} from 'node:fs';
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

const copyNonTsFiles = () => {
    const files = globSync('src/**/*.{css,svg,json,png,jpg}');
    for (const file of files) {
        const dest = path.join('dist', file.slice('src/'.length));
        mkdirSync(path.dirname(dest), {recursive: true});
        cpSync(file, dest);
    }
};

export const build = async ({watch = false}) => {
    try {
        const tsgoArgs = [];
        if (existsSync('./tsconfig.build.json')) {
            tsgoArgs.push('--project', './tsconfig.build.json');
        }

        if (watch) {
            tsgoArgs.push('--watch');
        }

        const tsgoBin = path.resolve(__dirname, '..', 'node_modules', '.bin', 'tsgo');
        const tsgo = spawn(tsgoBin, tsgoArgs, {stdio: 'inherit'});
        await onExit(tsgo);

        copyNonTsFiles();

        console.info('✅');
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

void build({watch: false});
