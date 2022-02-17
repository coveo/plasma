import {camelCase} from 'lodash';
import {optimize, OptimizedSvg} from 'svgo';

import {isTokenEnum, isTokenGroup, Token, TokenEnum, TokenGroup, TokenList} from './token';

export type SvgFormatOutput = {fileName: string; svgMarkup: string};

const cleanSvgMarkup = (name: string, svgMarkup: string): string => {
    const result = optimize(svgMarkup, {
        multipass: true,
        plugins: [
            {name: 'removeViewBox', active: false},
            {name: 'removeDimensions', active: true},
            {
                name: 'removeAttributesBySelector',
                active: true,
                params: {selector: '[stroke]', attributes: ['stroke']} as any,
            },
            {
                name: 'addAttributesToSVGElement',
                active: true,
                params: {attribute: {stroke: 'currentColor'}} as any,
            },
        ],
    });

    if (result.error) {
        console.error(`Could not parse SVG markup for icon ${name}.`);
        console.error(result.error);
        return '';
    } else {
        return (result as OptimizedSvg).data;
    }
};

const formatSvgName = (name: string, prefix?: string): string =>
    prefix ? `${prefix}/${camelCase(name)}` : camelCase(name);

const formatSvgToken = (token: Token | TokenGroup | TokenEnum, parentPrefix?: string): SvgFormatOutput[] => {
    const name = formatSvgName(token.name, parentPrefix);
    if (isTokenGroup(token)) {
        return token.children.reduce<SvgFormatOutput[]>((memo, child) => memo.concat(formatSvgToken(child, name)), []);
    } else if (!isTokenEnum(token) && token.type === 'svg') {
        return [{fileName: name, svgMarkup: cleanSvgMarkup(name, token.value) + '\n'}];
    } else {
        return [];
    }
};

export const formatSvg = (tokens: TokenList): SvgFormatOutput[] =>
    tokens.reduce<SvgFormatOutput[]>((memo, token) => memo.concat(formatSvgToken(token)), []);
