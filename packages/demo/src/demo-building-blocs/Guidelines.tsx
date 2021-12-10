import * as React from 'react';
import {Components} from 'react-markdown';
import {Tooltip} from 'react-vapor';

const MarkdownFiles = new Map();

const importAll = (context: __WebpackModuleApi.RequireContext) => {
    context.keys().forEach((key) => {
        const [, formattedKey] = /.*\/(\w+)\.md$/.exec(key);
        MarkdownFiles.set(formattedKey, context(key).default);
    });
};

importAll(require.context('!raw-loader!../../docs', false, /\.md$/));

export const Guidelines = {
    exists: (fileName: string): boolean => MarkdownFiles.has(fileName),
    get: (fileName: string): string => MarkdownFiles.get(fileName),
};

const Table: Components['table'] = ({children}) => React.createElement('table', {className: 'table my2'}, children);

const OrderedList: Components['ol'] = ({children}) => React.createElement('ol', {className: 'list-decimal'}, children);

const UnorderedList: Components['ul'] = ({children}) => React.createElement('ul', {className: 'list-disc'}, children);

const Emphasis: Components['em'] = ({children}) =>
    React.createElement('em', {className: 'body-m-book-italic'}, children);

const Strong: Components['strong'] = ({children}) => React.createElement('strong', {className: 'body-m'}, children);

const Link: Components['a'] = ({title, children, ...props}) =>
    React.createElement(
        Tooltip,
        {
            title: title || '',
        },
        React.createElement(
            'a',
            {
                ...props,
                // if the link is relative don't open in a new tab
                target: props.href && props.href.match(/^http/) ? '_blank' : '',
                rel: 'noopener noreferrer',
                className: 'link',
            },
            children
        )
    );

const Heading: Components['h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'] = ({level, children, ...props}) => {
    if (level < 4) {
        return React.createElement(`h${level + 3}`, {...props, className: 'mb1'}, children);
    } else {
        return React.createElement('div', {...props, className: 'body-m mb1'}, children);
    }
};

export const MarkdownOverrides: Components = {
    h1: Heading,
    h2: Heading,
    h3: Heading,
    h4: Heading,
    h5: Heading,
    h6: Heading,
    table: Table,
    ul: UnorderedList,
    ol: OrderedList,
    a: Link,
    strong: Strong,
    em: Emphasis,
};
