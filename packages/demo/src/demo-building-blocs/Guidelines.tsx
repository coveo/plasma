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

const Table: Components['table'] = ({children}) => <table className="table my2">{children}</table>;

const OrderedList: Components['ol'] = ({children}) => <ol className="list-decimal">{children}</ol>;

const UnorderedList: Components['ul'] = ({children}) => <ul className="list-disc">{children}</ul>;

const Emphasis: Components['em'] = ({children}) => <em className="body-m-book-italic">{children}</em>;

const Strong: Components['strong'] = ({children}) => <strong className="body-m">{children}</strong>;

const Link: Components['a'] = ({title, href, children, ...props}) => (
    <Tooltip title={title || ''}>
        <a target={href && href.match(/^http/) ? '_blank' : ''} className="link" {...props}>
            {children}
        </a>
    </Tooltip>
);

const Heading: Components['h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'] = ({level, children, ...props}) => {
    if (level < 4) {
        const Hx = `h${level + 3}` as 'h4' | 'h5' | 'h6';
        return (
            <Hx {...props} className="mb1">
                {children}
            </Hx>
        );
    }

    return (
        <div {...props} className="body-m mb1">
            {children}
        </div>
    );
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
