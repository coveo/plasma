import {gl} from 'chroma-js';
import {FileNodesResponse, Node, Style, VectorBase} from 'figma-js';

import {getPage} from '../figma';
import {Token, TokenGroup, TokenList} from '../formats/token';
import {generateTokens} from '../generateTokens';
import {PagesId} from '../mappings';

const handleSolidColor = (fills: VectorBase['fills']): string | undefined => {
    const color = fills[0].color;
    return color ? gl(color.r, color.g, color.b, color.a).hex() : undefined;
};

const handleLinearGradient = (fills: VectorBase['fills']): string => {
    const [start, finish] = fills[0]?.gradientHandlePositions ?? [
        {x: 0, y: 0},
        {x: 1, y: 1},
    ];
    const stops =
        fills[0]?.gradientStops?.map(
            ({color, position}) => `${gl(color.r, color.g, color.b, color.a).hex()} ${position * 100}%`
        ) ?? [];
    const angleDeg = (Math.atan2(finish.y - start.y, finish.x - start.x) * 180) / Math.PI; // angle (deg) between 2 vectors
    return `linear-gradient(${angleDeg}deg, ${stops.join(', ')})`;
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

const generateColorToken = (node: Node, styles: Record<string, Style>): Token | TokenGroup | null => {
    if (node.type === 'FRAME') {
        return {
            name: node.name,
            children: node.children.map((child) => generateColorToken(child, styles)).filter(Boolean) as TokenList,
        };
    } else if (node.type !== 'RECTANGLE') {
        console.error(`Expected type RECTANGLE but received ${node.type} for token ${node.name} on page "Colors".`);
        return null;
    } else if (!(node.styles as any)?.fill) {
        console.warn(`Found color rectangle "${node.name}", but its style isn't defined by a token`);
        return null;
    } else {
        const name = styles[(node.styles as any).fill].name;
        const value = getColorValue(node.fills);
        if (value != null) {
            return {name, value, type: 'variable'};
        } else {
            return null;
        }
    }
};

export const generateColorTokens = (data: FileNodesResponse) => {
    const {name, styles, children} = getPage(data, PagesId.Colors);

    const tokens = children.reduce((memo: TokenList, child): TokenList => {
        const token = generateColorToken(child, styles);
        if (token != null) {
            memo.push(token);
        }
        return memo;
    }, []);

    generateTokens(name, tokens);
};
