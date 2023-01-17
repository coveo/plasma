import {camelCase} from 'lodash-es';
import {optimize, OptimizedSvg} from 'svgo';

import {isTokenEnum, isTokenGroup, Token, TokenEnum, TokenGroup, TokenList} from '../tokens/index.js';

type SvgFormatOutput = {fileName: string; svgMarkup: string};

const cleanSvgMarkup = (name: string, svgMarkup: string): string => {
    const result = optimize(svgMarkup, {
        multipass: true,
        plugins: [
            {name: 'removeViewBox', active: false},
            {name: 'removeDimensions', active: true},
            {
                name: 'addAttributesToSVGElement',
                active: true,
                params: {attributes: [{width: '1em'}, {height: '1em'}]},
            },
            {
                type: 'visitor',
                name: 'replace-values',
                fn: () => ({
                    element: {
                        enter: (node: any) => {
                            if (node.attributes.fill && node.attributes.fill !== 'none') {
                                node.attributes.fill = 'currentColor';
                            }
                            if (node.attributes.stroke && node.attributes.stroke !== 'none') {
                                node.attributes.stroke = 'currentColor';
                            }
                        },
                    },
                }),
            } as any,
        ],
    });

    if (result.error) {
        console.error(`Could not parse SVG markup for icon ${name}.`);
        console.error(result.error);
        return '';
    }

    return (result as OptimizedSvg).data;
};

const formatSvgName = (name: string, prefix?: string): string =>
    prefix ? `${prefix}/${camelCase(name)}` : camelCase(name);

const formatSvgToken = (token: Token | TokenGroup | TokenEnum, parentPrefix?: string): SvgFormatOutput[] => {
    const name = formatSvgName(token.name, parentPrefix);

    if (isTokenGroup(token)) {
        return token.children.reduce<SvgFormatOutput[]>((memo, child) => memo.concat(formatSvgToken(child, name)), []);
    }

    if (!isTokenEnum(token) && token.type === 'svg') {
        return [{fileName: name, svgMarkup: cleanSvgMarkup(name, token.value) + '\n'}];
    }

    return [];
};

export const formatSvg = (tokens: TokenList): SvgFormatOutput[] =>
    tokens.reduce<SvgFormatOutput[]>((memo, token) => memo.concat(formatSvgToken(token)), []);
