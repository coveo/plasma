import {Anchor, Code, Divider, List, Text, Title} from '@coveord/plasma-mantine';
import {Image, Table as MantineTable} from '@mantine/core';
import {Source} from '@storybook/addon-docs/blocks';
import type {ComponentType, MouseEvent, PropsWithChildren} from 'react';

import {IconLink} from '@coveord/plasma-react-icons';

interface HeadingProps extends PropsWithChildren<Record<string, unknown>> {
    id?: string;
}

/**
 * Prevents duplicate heading IDs in long documents (e.g., changelogs) by prefixing
 * sub-headings (h3–h6) with the most recent h2 slug. For example:
 *
 *   ## 60.0.1          → id="6001"
 *   ### Patch Changes  → id="6001-patch-changes"
 *   ## 60.0.0          → id="6000"
 *   ### Patch Changes  → id="6000-patch-changes"
 *   #### Some Detail   → id="6000-some-detail"
 *
 * h1 and h2 headings keep their raw ID (they are already unique in changelogs).
 * h3–h6 are scoped under the nearest h2 to disambiguate repeated section names.
 */
let currentH2Id: string | undefined;

/**
 * Strips trailing GitHub pull/issue link artifacts from a slugified heading ID.
 * markdown-to-jsx slugifies the entire heading text including inline links, producing IDs like:
 *   "renamed-pagination-attributes-4412httpsgithubcomcoveoplasmapull4412"
 * This regex removes the trailing "-NNNN?httpsgithubcom..." portion.
 */
function stripPrLinkFromId(id: string): string {
    return id.replace(/-?\d*httpsgithubcom\S*$/, '');
}

function getScopedId(order: number, rawId: string): string {
    const cleanId = stripPrLinkFromId(rawId);
    if (order <= 2) {
        if (order === 2) {
            currentH2Id = cleanId;
        }
        return cleanId;
    }
    // h3–h6: prefix with the current h2 scope
    return currentH2Id ? `${currentH2Id}-${cleanId}` : cleanId;
}

const HeadingWithAnchor = ({
    order,
    children,
    id: rawId,
    className,
    ...rest
}: HeadingProps & {order: 1 | 2 | 3 | 4 | 5 | 6}) => {
    const id = rawId ? getScopedId(order, rawId) : undefined;
    if (!id) {
        return (
            <Title order={order} className={className as string} {...rest}>
                {children}
            </Title>
        );
    }
    return (
        <Title order={order} id={id} className="heading" {...rest}>
            <Anchor
                href={`#${id}`}
                target="_self"
                aria-label="Link to this heading"
                className="heading-anchor"
                onClick={(event: MouseEvent<HTMLAnchorElement>) => {
                    event.preventDefault();
                    const element = document.getElementById(id);
                    if (element) {
                        window.parent.location.hash = id;
                        element.scrollIntoView({behavior: 'smooth'});
                    }
                }}
            >
                <IconLink size="1em" />
            </Anchor>
            {children}
        </Title>
    );
};

/**
 * Shared component map that maps HTML elements to Plasma/Mantine components.
 * Used by both `parameters.docs.components` (MDX pages) and `<Markdown>` overrides (changelog pages).
 */
export const plasmaDocsComponents: Record<string, ComponentType<any>> = {
    h1: (props) => <HeadingWithAnchor order={1} mb="sm" {...props} />,
    h2: (props) => <HeadingWithAnchor order={2} mt="md" mb="sm" {...props} />,
    h3: (props) => <HeadingWithAnchor order={3} mt="md" mb="sm" {...props} />,
    h4: (props) => <HeadingWithAnchor order={4} mt="md" mb="sm" {...props} />,
    h5: (props) => <HeadingWithAnchor order={5} mt="md" mb="sm" {...props} />,
    h6: (props) => <HeadingWithAnchor order={6} mt="md" mb="sm" {...props} />,
    a: (props) => <Anchor {...props} />,
    hr: () => <Divider />,
    code: ({className, children, ...props}) => {
        if (typeof className === 'string' && className.startsWith('lang-')) {
            return <Source language={className.replace('lang-', '') as any} code={children} />;
        }
        return <Code c="grape" className={className} children={children} {...props} />;
    },
    ul: (props) => <List my="xs" {...props} />,
    ol: (props) => <List type="ordered" my="xs" {...props} />,
    li: (props) => <List.Item {...props} />,
    table: (props) => <MantineTable my="sm" {...props} />,
    thead: (props) => <MantineTable.Thead {...props} />,
    tbody: (props) => <MantineTable.Tbody {...props} />,
    tfoot: (props) => <MantineTable.Tfoot {...props} />,
    tr: (props) => <MantineTable.Tr {...props} />,
    th: (props) => <MantineTable.Th {...props} />,
    td: (props) => <MantineTable.Td {...props} />,
    img: (props) => <Image {...props} />,
};

/**
 * Markdown-to-jsx overrides derived from the shared component map.
 * Use with the Storybook `<Markdown>` component's `options.overrides` prop.
 */
export const plasmaMarkdownOverrides: Record<string, object> = Object.fromEntries(
    Object.entries(plasmaDocsComponents).map(([key, component]) => [key, {component}]),
);
