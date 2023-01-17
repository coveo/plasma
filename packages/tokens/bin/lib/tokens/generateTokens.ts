import {appendFileSync} from 'fs';
import {outputFileSync} from 'fs-extra/esm';

import {formatCss} from '../formats/formatCss.js';
import {formatScss} from '../formats/formatScss.js';
import {formatSvg} from '../formats/formatSvg.js';
import {formatTs} from '../formats/formatTs.js';
import {TokenList} from './token.js';

export const generateTokens = (name: string, tokens: TokenList) => {
    [
        {filePath: `${name}.css`, outputFormat: 'css'},
        {filePath: `${name}.scss`, outputFormat: 'scss'},
        {filePath: `${name}.ts`, outputFormat: 'ts'},
        {outputFormat: 'svg'},
    ].forEach(({filePath, outputFormat}) => {
        if (outputFormat === 'ts') {
            const output = formatTs(tokens);
            if (output) {
                outputFileSync('./src/' + filePath, output);
                appendFileSync('./src/index.ts', `export * from './${name}.js';\n`);
            }
        } else if (outputFormat === 'scss') {
            const output = formatScss(tokens);
            if (output) {
                outputFileSync('./scss/' + filePath, output);
                appendFileSync('./scss/index.scss', `@import '${name}';\n`);
            }
        } else if (outputFormat === 'css') {
            const output = formatCss(tokens);
            if (output) {
                outputFileSync('./css/' + filePath, output);
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
