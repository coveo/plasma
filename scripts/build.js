#!/usr/bin/env node
import {spawn} from 'node:child_process';
import path from 'node:path';
import {existsSync, cpSync, mkdirSync, globSync, watch as fsWatch} from 'node:fs';
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

const nonTsExtensions = /\.(css|svg|json|png|jpg)$/;

const copyFile = (file) => {
    const dest = path.join('dist', file.slice('src/'.length));
    mkdirSync(path.dirname(dest), {recursive: true});
    cpSync(file, dest);
};

const copyNonTsFiles = () => {
    const files = globSync('src/**/*.{css,svg,json,png,jpg}');
    for (const file of files) {
        copyFile(file);
    }
};

// NOTE: fs.watch with {recursive: true} requires macOS or Windows.
// This is acceptable because watch mode is only used during local development (`pnpm start`),
// never in CI. If Linux dev containers are needed, replace with a directory-walk approach or chokidar.
const watchNonTsFiles = () => {
    const watcher = fsWatch('src', {recursive: true}, (eventType, filename) => {
        if (filename && nonTsExtensions.test(filename)) {
            const file = path.join('src', filename);
            if (existsSync(file)) {
                copyFile(file);
                console.info(`[watch] copied ${file} → dist/${filename}`);
            }
        }
    });
    watcher.on('error', (err) => {
        console.error('[watch] error watching non-TS files:', err);
    });
    return watcher;
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

        if (watch) {
            copyNonTsFiles();
            const watcher = watchNonTsFiles();
            onExit(tsgo)
                .catch((err) => {
                    console.error('tsgo exited with error:', err.message);
                    process.exitCode = 1;
                })
                .finally(() => {
                    watcher.close();
                    process.exit();
                });
        } else {
            await onExit(tsgo);
            copyNonTsFiles();
            console.info('✅');
        }
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

void build({watch: false});
