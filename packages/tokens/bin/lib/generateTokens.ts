import {appendFileSync, outputFileSync} from 'fs-extra';

import {formatScss} from './formats/formatScss';
import {formatSvg} from './formats/formatSvg';
import {formatTs} from './formats/formatTs';
import {TokenList} from './formats/token';

export const generateTokens = (name: string, tokens: TokenList) => {
    [
        {filePath: `${name}.scss`, outputFormat: 'scss'},
        {filePath: `${name}.ts`, outputFormat: 'ts'},
        {outputFormat: 'svg'},
    ].forEach(({filePath, outputFormat}) => {
        if (outputFormat === 'ts') {
            const output = formatTs(tokens);
            if (output) {
                outputFileSync('./src/' + filePath, output);
                appendFileSync('./src/index.ts', `export * from './${name}';\n`);
            }
        } else if (outputFormat === 'scss') {
            const output = formatScss(tokens);
            if (output) {
                outputFileSync('./scss/' + filePath, output);
                appendFileSync('./scss/index.scss', `@import '${name}';\n`);
            }
        } else if (outputFormat === 'svg') {
            const outputs = formatSvg(tokens);
            if (outputs.length > 0) {
                outputs.forEach(({fileName, svgMarkup}) => {
                    outputFileSync(`./${fileName}.svg`, svgMarkup);
                });
            }
        }
    });
};
