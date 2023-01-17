import chroma from 'chroma-js';
import {FileNodesResponse, Node, Paint, Rectangle, Style, VectorBase} from 'figma-js';
import {readJson} from 'fs-extra/esm';
import {groupBy, omit} from 'lodash-es';

import {getPage, PagesId} from '../figma.js';
import {generateTokens} from './generateTokens.js';
import {Token, TokenGroup} from './token.js';

type UncategorizedToken = Token & {path: string[]};

const handleSolidColor = (fills: VectorBase['fills']): string | undefined => {
    const color = fills[0].color;
    return color ? chroma.gl(color.r, color.g, color.b, color.a).hex() : undefined;
};

const handleLinearGradient = (fills: readonly Paint[]): string => {
    const [gradientStart, gradientEnd, gradientWidth] = fills[0].gradientHandlePositions!;
    const stops =
        fills[0]?.gradientStops?.map(
            ({color, position}) =>
                `${chroma.gl(color.r, color.g, color.b, color.a).hex()} ${(position * 100).toFixed(2)}%`
        ) ?? [];
    const angleDeg = (Math.atan2(gradientWidth.y - gradientStart.y, gradientWidth.x - gradientStart.x) * 180) / Math.PI; // angle (deg) between 2 vectors
    return `linear-gradient(${angleDeg.toFixed(2)}deg, ${stops.join(', ')})`;
};

const getColorValue = (fills: VectorBase['fills']): string | undefined => {
    switch (fills[0].type) {
        case 'SOLID':
            return handleSolidColor(fills);
        case 'GRADIENT_LINEAR':
            return handleLinearGradient(fills);
        default:
            console.error(`Unhandled color fill: "${fills[0].type}"`);
            return undefined;
    }
};

const isColorFilledRectangle = (node: Node): node is Rectangle =>
    node.type === 'RECTANGLE' && !!(node.styles as any)?.fill;

const generateColorsToken = (styles: {readonly [key: string]: Style}, node: Rectangle): UncategorizedToken | null => {
    const colorValue = getColorValue(node.fills);
    if (!colorValue) {
        return null;
    }

    const colorPath = styles[(node.styles as any).fill].name.toLowerCase().split(' - ')[0].split('/');
    return {
        type: 'variable',
        value: colorValue,
        name: colorPath[colorPath.length - 1],
        path: colorPath,
    };
};

const categorizeTokens = (tokens: UncategorizedToken[]): Array<Token | TokenGroup> => {
    const grouped = groupBy<UncategorizedToken>(tokens, ({path}) => path.shift());
    return Object.keys(grouped).map((category): Token | TokenGroup => {
        const group = grouped[category];
        if (group.length === 1) {
            return omit(group[0], 'path') as Token;
        }

        return {
            name: category,
            children: categorizeTokens(grouped[category]),
        };
    });
};

const generateColorsTokens = (tokenLibrary: FileNodesResponse) => {
    const {name, styles, children} = getPage(tokenLibrary, PagesId.Colors[0]);

    const colorsTokensList = children
        .filter(isColorFilledRectangle)
        .map((rect) => generateColorsToken(styles, rect))
        .filter(Boolean);

    const colorsTokens = categorizeTokens(colorsTokensList);

    generateTokens(name, [{name: 'color', children: colorsTokens}]);
};

export const buildColorsTokens = async () => {
    const libraryContent: FileNodesResponse = await readJson('./data/colorsLibrary.json');
    generateColorsTokens(libraryContent);
};
