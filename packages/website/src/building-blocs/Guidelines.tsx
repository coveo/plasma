import {Tooltip} from '@coveord/plasma-mantine';
import {ReactNode} from 'react';
import {Components} from 'react-markdown';

const MarkdownFiles = new Map();

const guidelines = import.meta.glob('../docs/**/*.md', {query: '?raw', import: 'default', eager: true});

for (const filePath in guidelines) {
    if (Object.hasOwn(guidelines, filePath)) {
        const key = filePath.split('/').at(-1)?.replace(/\.md$/, '');
        MarkdownFiles.set(key, guidelines[filePath]);
    }
}

export const Guidelines = {
    exists: (fileName: string): boolean => MarkdownFiles.has(fileName),
    get: (fileName: string): string => MarkdownFiles.get(fileName),
};

const Table: Components['table'] = ({children}: {children: ReactNode}) => (
    <table className="table my2">{children}</table>
);

const OrderedList: Components['ol'] = ({children}: {children: ReactNode}) => (
    <ol className="list-decimal mt1">{children}</ol>
);

const UnorderedList: Components['ul'] = ({children}: {children: ReactNode}) => (
    <ul className="list-disc mt1">{children}</ul>
);

const Emphasis: Components['em'] = ({children}: {children: ReactNode}) => (
    <em className="body-m-book-italic">{children}</em>
);

const Strong: Components['strong'] = ({children}: {children: ReactNode}) => (
    <strong className="body-m">{children}</strong>
);

const Link: Components['a'] = ({title, href, children, ...props}) => (
    <Tooltip label={title || ''}>
        <a target={href && href.match(/^http/) ? '_blank' : ''} className="link" href={href} {...props}>
            {children}
        </a>
    </Tooltip>
);

const Heading1: Components['h1'] = ({children}: {children: ReactNode}) => (
    <h1 className="h4-book mt5 mb1">{children}</h1>
);

const Heading2: Components['h2'] = ({children}: {children: ReactNode}) => <h2 className="h6 mt2 mb1">{children}</h2>;

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
