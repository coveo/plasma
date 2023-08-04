import {camelCase} from 'lodash';
import {optimize} from 'svgo';

import {isTokenEnum, isTokenGroup, Token, TokenEnum, TokenGroup, TokenList} from './token';

type SvgFormatOutput = {fileName: string; svgMarkup: string};

const cleanSvgMarkup = (name: string, svgMarkup: string): string => {
    try {
        const result = optimize(svgMarkup, {
            multipass: true,
            plugins: [
                {
                    name: 'preset-default',
                    params: {
                        overrides: {
                            removeViewBox: false,
                        },
                    },
                },
                'removeDimensions',
                {
                    name: 'prefixIds',
                    params: {
                        prefix: formatSvgName(name),
                    },
                },
                {
                    name: 'addAttributesToSVGElement',
                    params: {attributes: [{width: '1em'}, {height: '1em'}]},
                },
                {
                    type: 'visitor',
                    name: 'replace-values',
                    fn: () => ({
                        element: {
                            enter: (node: any) => {
                                if (node.attributes.fill && node.attributes.fill !== 'none' && node.name !== 'mask') {
                                    node.attributes.fill = 'currentColor';
                                }
                                if (
                                    node.attributes.stroke &&
                                    node.attributes.stroke !== 'none' &&
                                    node.name !== 'mask'
                                ) {
                                    node.attributes.stroke = 'currentColor';
                                }
                            },
                        },
                    }),
                } as any,
            ],
        });
        return result.data;
    } catch (error) {
        console.error(`Could not parse SVG markup for icon ${name}.`);
        console.error(error);
        return '';
    }
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
