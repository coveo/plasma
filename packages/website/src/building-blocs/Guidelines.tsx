import {Tooltip} from '@coveord/plasma-react';
import {Components} from 'react-markdown';

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

const OrderedList: Components['ol'] = ({children}) => <ol className="list-decimal mt1">{children}</ol>;

const UnorderedList: Components['ul'] = ({children}) => <ul className="list-disc mt1">{children}</ul>;

const Emphasis: Components['em'] = ({children}) => <em className="body-m-book-italic">{children}</em>;

const Strong: Components['strong'] = ({children}) => <strong className="body-m">{children}</strong>;

const Link: Components['a'] = ({title, href, children, ...props}) => (
    <Tooltip title={title || ''}>
        <a target={href && href.match(/^http/) ? '_blank' : ''} className="link" href={href} {...props}>
            {children}
        </a>
    </Tooltip>
);

const Heading1: Components['h1'] = ({children}) => <h1 className="h4-book mt5 mb1">{children}</h1>;

const Heading2: Components['h2'] = ({children}) => <h2 className="h6 mt2 mb1">{children}</h2>;

const Heading: Components['h3' | 'h4' | 'h5' | 'h6'] = ({level, children, ...props}) => {
    const Hx = `h${level + 3}` as 'h3' | 'h4' | 'h5' | 'h6';
    return (
        <Hx {...props} className="body-m my1">
            {children}
        </Hx>
    );
};

const Divider: Components['hr'] = () => <hr className="my3" />;

export const MarkdownOverrides: Components = {
    h1: Heading1,
    h2: Heading2,
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
    hr: Divider,
};
