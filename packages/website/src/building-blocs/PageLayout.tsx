import {AppShell, Box, Container, Divider, Stack, Tabs} from '@coveord/plasma-mantine';
import {Fragment, FunctionComponent, ReactNode} from 'react';

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
            styles={{list: {borderBottom: 'none'}, root: {display: 'flex', height: '100%'}}}
        >
            <Stack gap={0} align="stretch" style={{flexBasis: 'auto', flexGrow: 1}}>
                <Container size="xl" w="100%">
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
                <Box bg="gray.0" style={{flexBasis: 'auto', flexGrow: 1}}>
                    <Container size="xl">
                        <Tabs.Panel value="implementation">
                            <Content id={id} {...contentProps}>
                                {children}
                            </Content>
                        </Tabs.Panel>
                        <Tabs.Panel value="guide">
                            <GuidelinesTab id={id} />
                        </Tabs.Panel>
                    </Container>
                </Box>
            </Stack>
        </Tabs>
    </AppShell.Main>
);

const Content: FunctionComponent<
    Pick<
        PageLayoutProps,
        'demo' | 'examples' | 'id' | 'relatedComponents' | 'withPropsTable' | 'propsMetadata' | 'children'
    >
> = ({demo: mainDemo, examples, id, relatedComponents, withPropsTable = true, propsMetadata, children}) => (
    <>
        {mainDemo && <div className="plasma-page-layout__main-code plasma-page-layout__section">{mainDemo}</div>}

        {withPropsTable && (
            <div className="plasma-page-layout__section">
                <h4 className="h2 mb1">Props</h4>
                <PropsTable propsMetadata={propsMetadata} />
            </div>
        )}
        {examples && (
            <div className="plasma-page-layout__section">
                <h4 className="h2 mb5">Examples</h4>
                <Stack>
                    {Object.entries(examples).map(([exampleId, example]) => (
                        <Fragment key={id + exampleId}>{example}</Fragment>
                    ))}
                </Stack>
            </div>
        )}
        {relatedComponents && relatedComponents.length > 0 && (
            <div className="plasma-page-layout__section">
                <h4 className="h2 mb5">Related Components</h4>
                {relatedComponents.map((tileProps) => (
                    <Tile key={tileProps.title} {...tileProps} />
                ))}
            </div>
        )}
        {children}
    </>
);
