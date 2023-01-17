import escapeStringRegexp from 'escape-string-regexp';
import {ReactNode} from 'react';

import {getReactNodeTextContent} from './JSXUtils.js';

const matchesString = (filterValue: string, str: string, caseSensitive = false): boolean => {
    const escapedFilterValue = escapeStringRegexp(filterValue ?? '');
    return escapedFilterValue === '' || new RegExp(escapedFilterValue, caseSensitive ? 'g' : 'gi').test(str);
};

const matchesNumber = (filterValue: string, num: number): boolean =>
    num != null ? matchesString(filterValue, num.toString()) : false;

const matchesArrayLength = (filterValue: string, array: any[]): boolean =>
    array ? matchesString(filterValue, array.length.toString()) : false;

const matchesReactNode = (filterValue: string, node: ReactNode): boolean =>
    node ? matchesString(filterValue, getReactNodeTextContent(node)) : false;

export const FilterUtils = {
    matchesString,
    matchesNumber,
    matchesReactNode,
    matchesArrayLength,
};
