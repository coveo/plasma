import escapeRegExp from 'escape-string-regexp';
import {ReactNode} from 'react';

import {getReactNodeTextContent} from './JSXUtils';

function matchesString(filterValue: string, str: string, caseSensitive = false): boolean {
    const escapedFilterValue = escapeRegExp(filterValue ?? '');
    return escapedFilterValue === '' || new RegExp(escapedFilterValue, caseSensitive ? 'g' : 'gi').test(str);
}

function matchesNumber(filterValue: string, num: number): boolean {
    return num != null ? matchesString(filterValue, num.toString()) : false;
}

function matchesArrayLength(filterValue: string, array: any[]): boolean {
    return array ? matchesString(filterValue, array.length.toString()) : false;
}

function matchesReactNode(filterValue: string, node: ReactNode): boolean {
    return node ? matchesString(filterValue, getReactNodeTextContent(node)) : false;
}

export const FilterUtils = {
    matchesString,
    matchesNumber,
    matchesReactNode,
    matchesArrayLength,
};
