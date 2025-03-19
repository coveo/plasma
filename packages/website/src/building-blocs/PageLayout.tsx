import {AppShell, Box, Container, Divider, Flex, Stack, Tabs, Title} from '@coveord/plasma-mantine';
import {Fragment, FunctionComponent, ReactNode, useEffect} from 'react';
import {useLocation} from 'react-router-dom';

import {GuidelinesTab} from './GuidelinesTab';
import {PageHeader, PageHeaderProps} from './PageHeader';
import {PropsTable, PropsTableProps} from './PropsTable';
import {Tile, TileProps} from './Tile';

export interface PageLayoutProps extends PageHeaderProps, PropsTableProps {
    id: string;
    examples?: Record<string, ReactNode>;
    demo?: ReactNode;
    relatedComponents?: TileProps[];
    /**
     * Whether to show the props section or not
     *
     * @default true
     */
    withPropsTable?: boolean;
    children?: ReactNode;
}

export const PageLayout = ({
    id,
    title,
    description,
    thumbnail,
    section,
    children,
    sourcePath,
    ...contentProps
}: PageLayoutProps) => (
    <AppShell.Main>
        <Tabs
            defaultValue="implementation"
            styles={{
                list: {borderBottom: 'none'},
            }}
            h="100%"
        >
            <Flex direction="column" h="100%">
                <Container size="xl" w="100%" px={0}>
                    <PageHeader
                        sourcePath={sourcePath}
                        section={section}
                        thumbnail={thumbnail}
                        title={title}
                        description={description}
                    />
                    <Tabs.List pl="xl">
                        <Tabs.Tab value="implementation">Implementation</Tabs.Tab>
                        <Tabs.Tab value="guide">Guidelines</Tabs.Tab>
                    </Tabs.List>
                </Container>
                <Divider />
                <Box h="100%">
                    <Container size="xl" py="xl">
                        <Tabs.Panel value="implementation">
                            <ResetScroll />
                            <Content id={id} {...contentProps}>
                                {children}
                            </Content>
                        </Tabs.Panel>
                        <Tabs.Panel value="guide">
                            <GuidelinesTab id={id} />
                        </Tabs.Panel>
                    </Container>
                </Box>
            </Flex>
        </Tabs>
    </AppShell.Main>
);

const Content: FunctionComponent<
    Pick<
        PageLayoutProps,
        'demo' | 'examples' | 'id' | 'relatedComponents' | 'withPropsTable' | 'propsMetadata' | 'children'
    >
> = ({demo: mainDemo, examples, id, relatedComponents, withPropsTable = true, propsMetadata, children}) => (
    <Stack gap="xl">
        {mainDemo && <div>{mainDemo}</div>}

        {withPropsTable && (
            <Stack gap="xs">
                <Title order={2}>Props</Title>
                <PropsTable propsMetadata={propsMetadata} />
            </Stack>
        )}
        {examples && (
            <Stack gap="xs">
                <Title order={2}>Examples</Title>
                <Stack>
                    {Object.entries(examples).map(([exampleId, example]) => (
                        <Fragment key={id + exampleId}>{example}</Fragment>
                    ))}
                </Stack>
            </Stack>
        )}
        {relatedComponents && relatedComponents.length > 0 && (
            <Stack gap="xs">
                <Title order={2}>Related Components</Title>
                {relatedComponents.map((tileProps) => (
                    <Tile key={tileProps.title} {...tileProps} />
                ))}
            </Stack>
        )}
        {children}
    </Stack>
);

const ResetScroll: FunctionComponent = () => {
    const {pathname, hash} = useLocation();
    useEffect(() => {
        if (hash) {
            const el = document.getElementById(window.location.hash.slice(1));
            if (el) {
                el.scrollIntoView();
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [pathname]);
    return null;
};
