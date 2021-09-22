import {FileNodesResponse, Node, Style, Text} from 'figma-js';

import {getPage} from '../figma';
import {getCssVariable} from '../formats/formatScss';
import {Token, TokenGroup, TokenList} from '../formats/token';
import {generateTokens} from '../generateTokens';
import {PagesId} from '../mappings';

const getTextStyle = (style: Text['style']): Record<string, string | number> => ({
    lineHeight: `${style.lineHeightPx}px`,
    fontSize: `${style.fontSize}px`,
    fontWeight: style.fontWeight,
    letterSpacing: `${style.letterSpacing}px`,
});

const generateTypekitToken = (node: Node, styles: Record<string, Style>): Token | TokenGroup | null => {
    if (node.type === 'FRAME') {
        return {
            name: node.name,
            children: node.children.map((child) => generateTypekitToken(child, styles)).filter(Boolean) as TokenList,
        };
    } else if (node.type !== 'TEXT') {
        console.error(`Expected type TEXT but received ${node.type} for token ${node.name} on page "Typekit".`);
        return null;
    } else if (!(node.styles as any)?.text) {
        console.warn(`Found text element "${node.name}", but its style isn't defined by a token.`);
        return null;
    } else if (!(node.styles as any)?.fill) {
        console.warn(`Found text element "${node.name}", but its color isn't defined by a token.`);
        return null;
    } else {
        const name = styles[(node.styles as any).text].name;
        const color = styles[(node.styles as any).fill].name;

        return {
            name,
            value: {
                ...getTextStyle(node.style),
                color: getCssVariable(color),
            },
            type: 'class',
        };
    }
};

export const generateTypekitTokens = (data: FileNodesResponse) => {
    const {name, styles, children} = getPage(data, PagesId.Typekit);

    const tokens = children.reduce((memo: TokenList, child): TokenList => {
        const token = generateTypekitToken(child, styles);
        if (token != null) {
            memo.push(token);
        }
        return memo;
    }, []);

    generateTokens(name, tokens);
};
