import {appendFileSync, writeFileSync} from 'fs-extra';

import {formatScss} from './formats/formatScss';
import {formatTs} from './formats/formatTs';
import {TokenList} from './formats/token';

export const generateTokens = (name: string, tokens: TokenList) => {
    [
        {filePath: `${name}.scss`, outputFormat: 'scss'},
        {filePath: `${name}.ts`, outputFormat: 'ts'},
    ].forEach(({filePath, outputFormat}) => {
        if (outputFormat === 'ts') {
            const output = formatTs(tokens);
            if (output) {
                writeFileSync('./src/' + filePath, output);
                appendFileSync('./src/index.ts', `export * from './${name}';\n`);
            }
        } else if (outputFormat === 'scss') {
            const output = formatScss(tokens);
            if (output) {
                writeFileSync('./scss/' + filePath, output);
                appendFileSync('./scss/index.scss', `@import '${name}';\n`);
            }
        }
    });
};
