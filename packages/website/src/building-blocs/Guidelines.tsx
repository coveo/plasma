import {List as MantineList, Text, Title, Tooltip} from '@coveord/plasma-mantine';
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

const TableHeading: Components['th'] = ({children, ...others}) => (
    <MantineTable.Th fw={500} {...others}>
        {children}
    </MantineTable.Th>
);

const TableRow: Components['tr'] = ({children, ...others}) => <MantineTable.Tr {...others}>{children}</MantineTable.Tr>;

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

const Divider: Components['hr'] = () => <hr />;

export const MarkdownOverrides: Components = {
    h1: (props) => <Title order={3} mt="sm" {...props} />,
    h2: (props) => <Title order={4} mt="sm" {...props} />,
    h3: (props) => <Title order={6} mt="sm" {...props} />,
    h4: (props) => <Title order={6} mt="sm" {...props} />,
    h5: (props) => <Title order={6} mt="sm" {...props} />,
    h6: (props) => <Title order={6} mt="sm" {...props} />,
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
