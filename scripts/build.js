#!/usr/bin/env node
const {spawn} = require('child_process');
const path = require('path');
const {existsSync, writeFileSync} = require('node:fs');
process.on('unhandledRejection', (err) => {
    throw err;
});

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const onExit = (childProcess) =>
    new Promise((resolve, reject) => {
        childProcess.once('exit', (code) => {
            code === 0 ? resolve() : reject(new Error('Exit with error code: ' + code));
        });
        childProcess.once('error', (error) => {
            reject(error);
        });
    });

const build = async ({watch = false}) => {
    // compile with swc and tsc
    try {
        const tscArgs = [];
        const swcArgs = ['./src', '--copy-files', '--config-file', path.resolve(__dirname, '..', 'build.swcrc')];

        if (watch) {
            tscArgs.push('--watch');
            swcArgs.push('--watch');
        }

        const swcCJSArgs = [
            ...swcArgs,
            '--config',
            'module.type=commonjs',
            '--config',
            'jsc.target=es5',
            '--out-dir',
            './dist/cjs',
            '--strip-leading-paths',
        ];
        const swcES6Args = [
            ...swcArgs,
            '--config',
            'module.type=es6',
            '--config',
            'jsc.target=es2020',
            '--out-dir',
            './dist/esm',
            '--strip-leading-paths',
        ];

        const dts = spawn('tsc', tscArgs, {stdio: 'inherit', shell: true});
        const commonJs = spawn('swc', swcCJSArgs, {stdio: 'inherit', shell: true});
        const esm = spawn('swc', swcES6Args, {stdio: 'inherit', shell: true});
        await Promise.all([onExit(dts), onExit(commonJs), onExit(esm)]);

        // Ensure NodeJS resolves dist/cjs/**/*.js as dist/cjs/**/*.cjs
        writeFileSync('dist/cjs/package.json', JSON.stringify({type: 'commonjs'}));

        // Ensure NodeJS resolves dist/esm/**/*.js as dist/esm/**/*.mjs
        writeFileSync('dist/esm/package.json', JSON.stringify({type: 'module'}));

        console.info('✅');
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

if (require.main === module) {
    build({watch: false});
}

module.exports = {build};
