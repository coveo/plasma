import * as React from 'react';

// See https://github.com/rexxars/react-markdown#node-types for possible node types
// See https://github.com/rexxars/react-markdown/blob/master/src/renderers.js as an exmaple
export const MarkdownOverrides: Record<string, React.ReactType> = {
    heading,
    table,
    list,
};

function heading({level, children}: any) {
    return React.createElement(`h${level}`, {className: `h${level} text-medium-blue`}, children);
}

function table({children}: any) {
    return React.createElement('table', {className: 'table mb2'}, children);
}

function list({ordered, children}: any) {
    return ordered
        ? React.createElement('ol', {className: 'list-decimal'}, children)
        : React.createElement('ul', {className: 'list-disc'}, children);
}
