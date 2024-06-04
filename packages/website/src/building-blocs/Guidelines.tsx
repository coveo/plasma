import {List as MantineList, Text, Title, TitleOrder, Tooltip} from '@coveord/plasma-mantine';
import {Table as MantineTable} from '@mantine/core';
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

const Table: Components['table'] = ({children}: {children: ReactNode}) => <MantineTable>{children}</MantineTable>;

const TableHeader: Components['thead'] = ({children}: {children: ReactNode}) => (
    <MantineTable.Thead>{children}</MantineTable.Thead>
);

const TableBody: Components['tbody'] = ({children}: {children: ReactNode}) => (
    <MantineTable.Tbody>{children}</MantineTable.Tbody>
);

const TableHeading: Components['th'] = ({children, isHeader, ...others}) => (
    <MantineTable.Th fw={500} {...others}>
        {children}
    </MantineTable.Th>
);

const TableRow: Components['tr'] = ({children, isHeader, ...others}) => (
    <MantineTable.Tr {...others}>{children}</MantineTable.Tr>
);

const TableCell: Components['td'] = ({children, ...others}) => (
    <MantineTable.Td {...others}>{children}</MantineTable.Td>
);

const List = ({children, ordered}) => <MantineList type={ordered ? 'ordered' : 'unordered'}>{children}</MantineList>;

const ListItem: Components['li'] = ({children}) => <MantineList.Item>{children}</MantineList.Item>;

const Emphasis: Components['em'] = ({children}: {children: ReactNode}) => (
    <Text span fs="initial">
        {children}
    </Text>
);

const Strong: Components['strong'] = ({children}: {children: ReactNode}) => (
    <Text span fw={500}>
        {children}
    </Text>
);

const Link: Components['a'] = ({title, href, children, ...props}) => (
    <Tooltip label={title || ''}>
        <a target={href && href.match(/^http/) ? '_blank' : ''} className="link" href={href} {...props}>
            {children}
        </a>
    </Tooltip>
);

const Heading: Components['h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'] = ({level, children, ...props}) => (
    <Title order={(level > 2 ? 6 : level + 2) as TitleOrder} mt="sm" {...props}>
        {children}
    </Title>
);

const Divider: Components['hr'] = () => <hr />;

export const MarkdownOverrides: Components = {
    h1: Heading,
    h2: Heading,
    h3: Heading,
    h4: Heading,
    h5: Heading,
    h6: Heading,
    table: Table,
    thead: TableHeader,
    tbody: TableBody,
    th: TableHeading,
    tr: TableRow,
    td: TableCell,
    ul: List,
    ol: List,
    li: ListItem,
    a: Link,
    strong: Strong,
    em: Emphasis,
    hr: Divider,
};
