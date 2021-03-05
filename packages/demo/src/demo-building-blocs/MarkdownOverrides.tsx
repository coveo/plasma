import * as React from 'react';

const heading = ({level, children}: any) => React.createElement(`h${level}`, {className: `h${level}`}, children);

const table = ({children}: any) => React.createElement('table', {className: 'table mb2'}, children);

const list = ({ordered, children}: any) =>
    ordered
        ? React.createElement('ol', {className: 'list-decimal'}, children)
        : React.createElement('ul', {className: 'list-disc'}, children);

// See https://github.com/rexxars/react-markdown#node-types for possible node types
// See https://github.com/rexxars/react-markdown/blob/master/src/renderers.js as an exmaple
export const MarkdownOverrides: Record<string, React.ReactType> = {
    heading,
    table,
    list,
};
