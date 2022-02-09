import {camelCase} from 'lodash';

import {isTokenGroup, Token, TokenGroup, TokenList} from './token';

export const valueIncludesUnit = (value: string | number) => /px$|%$/.test(value.toString());
export const valueIsVariable = (value: string | number) => /^var\(--(.+)\)$/.test(value.toString());

const formatTsVariableName = (name: string): string => camelCase(name);

const formatTsVariableValue = (token: Token | TokenGroup): string | number => {
    let value: string | number = 'undefined';
    if (isTokenGroup(token)) {
        const nestedObject = token.children.reduce((memo, child) => {
            const name = formatTsVariableName(child.name.replace(token.name, ''));
            return memo + `${name}: ${formatTsVariableValue(child)},\n`;
        }, '');
        value = `{${nestedObject}}`;
    } else if (token.type === 'class') {
        const nestedObject = Object.entries(token.value).reduce((memo, [key, val]) => {
            const propertyValue = valueIncludesUnit(val) || valueIsVariable(val) ? `'${val}'` : val;
            return memo + `${key}: ${propertyValue},\n`;
        }, '');
        value = `{${nestedObject}}`;
    } else if (token.type === 'svg') {
        value = JSON.stringify(token.value);
    } else {
        value = typeof token.value === 'number' ? token.value : `'${token.value}'`;
    }
    return value;
};

const formatTsToken = (token: Token | TokenGroup): string => {
    const name = formatTsVariableName(token.name);
    const value = formatTsVariableValue(token);
    return `export const ${name} = ${value};\n`;
};

export const formatTs = (tokens: TokenList): string => tokens.reduce((memo, token) => memo + formatTsToken(token), '');
