import {kebabCase} from 'lodash';

import {isTokenEnum, isTokenGroup, Token, TokenEnum, TokenGroup, TokenList} from './token';

const formatScssVariableName = (name: string): string => `plasma-${kebabCase(name)}`;

const formatVariable = (name: string, value: string | number): string => `$${name}: ${value};`;

const formatClass = (name: string, value: Record<string, string | number>): string => {
    const styles = Object.entries(value).map(
        ([propertyName, propertyValue]) => `${kebabCase(propertyName)}: ${propertyValue};`,
    );
    return `.${name} {\n\t${styles.join('\n\t')}\n}`;
};

const formatScssToken = (token: Token): string | null => {
    const name = formatScssVariableName(token.name);

    switch (token.type) {
        case 'variable':
            return formatVariable(name, token.value);
        case 'class':
            return formatClass(name, token.value);
        default:
            return null;
    }
};

const filterTokens = (tokens: TokenList, type: Token['type']): Token[] => {
    const filteredTokens: Token[] = [];

    const filterToken = (token: Token | TokenGroup | TokenEnum) => {
        if (isTokenGroup(token)) {
            token.children.map((child) => ({...child, name: `${token.name}-${child.name}`})).forEach(filterToken);
        } else if (!isTokenEnum(token) && token.type === type) {
            filteredTokens.push(token);
        }
    };

    tokens.forEach(filterToken);

    return filteredTokens;
};

export const formatScss = (tokens: TokenList): string => {
    const variables = filterTokens(tokens, 'variable').map(formatScssToken) as string[];
    const classes = filterTokens(tokens, 'class').map(formatScssToken) as string[];
    let output = '';

    if (variables.length > 0) {
        output += variables.join('\n') + '\n';
    }

    if (classes.length > 0) {
        output += classes.join('\n\n') + '\n';
    }

    return output;
};
