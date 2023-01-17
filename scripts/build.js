#!/usr/bin/env node
const {spawn} = require('child_process');
const path = require('path');
const fs = require('fs');

process.on('unhandledRejection', (err) => {
    throw err;
});

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const onExit = (childProcess) => {
    return new Promise((resolve, reject) => {
        childProcess.once('exit', (code, signal) => {
            code === 0 ? resolve() : reject(new Error('Exit with error code: ' + code));
        });
        childProcess.once('error', (error) => {
            reject(error);
        });
    });
};

const build = async ({watch = false}) => {
    // compile with swc and tsc
    try {
        console.info('starting typescript compilation');
        const tsconfigPath = fs.existsSync('./tsconfig.build.json') ? './tsconfig.build.json' : './tsconfig.json';

        const tscArgs = ['-p', tsconfigPath, '--emitDeclarationOnly'];
        const swcArgs = ['./src', '--copy-files', '--config-file', path.resolve(__dirname, '..', 'build.swcrc')];

        if (watch) {
            tscArgs.push('--watch');
            swcArgs.push('--watch');
        }

        const swcCJSArgs = [
            ...swcArgs,
            '--config',
            'module.type=commonjs',
            'jsc.target=es5',
            '--out-dir',
            './dist/cjs',
        ];
        const swcES6Args = [...swcArgs, '--config', 'module.type=es6', 'jsc.target=es2020', '--out-dir', './dist/esm'];

        const dts = spawn('tsc', tscArgs, {stdio: 'inherit', shell: true});
        const commonJs = spawn('swc', swcCJSArgs, {stdio: 'inherit', shell: true});
        const esm = spawn('swc', swcES6Args, {stdio: 'inherit', shell: true});
        await Promise.all([onExit(dts), onExit(commonJs), onExit(esm)]);
        // Ensure NodeJS resolves dist/cjs/**/*.js as dist/cjs/**/*.cjs
        fs.writeFileSync(
            'dist/cjs/package.json',
            JSON.stringify({
                type: 'commonjs',
            })
        );
        // Ensure NodeJS resolves dist/esm/**/*.js as dist/esm/**/*.mjs
        fs.writeFileSync(
            'dist/esm/package.json',
            JSON.stringify({
                type: 'module',
            })
        );

        console.info('typescript compilation ended');
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

if (require.main === module) {
    build({watch: false});
}

module.exports = {build};
