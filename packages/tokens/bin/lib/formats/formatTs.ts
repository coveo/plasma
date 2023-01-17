import {camelCase} from 'lodash-es';

import {isTokenEnum, isTokenGroup, Token, TokenEnum, TokenGroup, TokenList} from '../tokens/token.js';

const valueIncludesUnit = (value: string | number) => /px$|%$/.test(value.toString());

const valueIsVariable = (value: string | number) => /^var\(--(.+)\)$/.test(value.toString());

const formatTsVariableName = (name: string): string => camelCase(name);

const formatTsVariableValue = (token: Token | TokenGroup): string | number => {
    let value: string | number = '';
    if (isTokenGroup(token)) {
        const nestedObject = token.children.reduce((memo, child) => {
            const name = formatTsVariableName(child.name.replace(token.name, ''));
            const childValue = formatTsVariableValue(child);
            return childValue === '' ? memo : memo + `${name}: ${childValue},\n`;
        }, '');
        value = nestedObject === '' ? nestedObject : `{${nestedObject}}`;
    } else if (token.type === 'class') {
        const nestedObject = Object.entries(token.value).reduce((memo, [key, val]) => {
            const propertyValue = valueIncludesUnit(val) || valueIsVariable(val) ? `'${val}'` : val;
            return memo + `${key}: ${propertyValue},\n`;
        }, '');
        value = `{${nestedObject}}`;
    } else if (token.type === 'variable') {
        value = typeof token.value === 'number' ? token.value : `'${token.value}'`;
    }
    return value;
};

const formatTsType = (token: TokenEnum): string => token.members.map((member) => `"${member}"`).join(' | ');

const formatTsToken = (token: Token | TokenGroup | TokenEnum): string => {
    if (isTokenEnum(token)) {
        const type = formatTsType(token);
        return type === '' ? type : `export type ${token.name} = ${type};\n`;
    }

    const value = formatTsVariableValue(token);
    const name = formatTsVariableName(token.name);
    return value === '' ? value : `export const ${name} = ${value};\n`;
};

export const formatTs = (tokens: TokenList): string => tokens.reduce((memo, token) => memo + formatTsToken(token), '');
