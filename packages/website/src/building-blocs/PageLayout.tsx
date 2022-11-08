import {TabContent, TabPaneConnected, TabSelectors, TabsHeader} from '@coveord/plasma-react';
import dynamic from 'next/dynamic';
import {FunctionComponent, ReactNode} from 'react';
import {useSelector} from 'react-redux';

import {GuidelinesTab} from './GuidelinesTab';
import {PageHeader, PageHeaderProps} from './PageHeader';
import {PlasmaLoading} from './PlasmaLoading';
import {PropsDoc, PropsTableProps} from './PropsTable';
import {Tile, TileProps} from './Tile';

const Sandbox = dynamic(
    import('./Sandbox').then((mod) => mod.Sandbox),
    {ssr: false, loading: () => <PlasmaLoading />}
);

interface PlaygroundProps {
    title: string;
    code?: string;
    layout?: 'horizontal' | 'vertical';
}

export interface PageLayoutProps extends PageHeaderProps, PlaygroundProps, PropsTableProps {
    id: string;
    examples?: Record<string, PlaygroundProps>;
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
    code,
    layout = 'horizontal',
    examples,
    componentSourcePath,
    sourcePath,
    relatedComponents,
    withPropsTable = true,
    propsMetadata,
    children,
}: PageLayoutProps) => {
    const isShowingCode = useSelector((state) =>
        TabSelectors.getIsTabSelected(state, {groupId: 'page', id: 'implementation'})
    );
    return (
        <div id={id} className="plasma-page-layout">
            <PageHeader
                componentSourcePath={componentSourcePath}
                sourcePath={sourcePath}
                section={section}
                thumbnail={thumbnail}
                title={title}
                description={description}
            />
            <TabsHeader
                tabs={[
                    {groupId: 'page', id: 'implementation', title: 'Implementation'},
                    {groupId: 'page', id: 'guide', title: 'Guidelines'},
                ]}
            />
            <TabContent>
                <TabPaneConnected id="implementation" groupId="page">
                    {isShowingCode && (
                        <Content
                            id={id}
                            code={code}
                            examples={examples}
                            relatedComponents={relatedComponents}
                            layout={layout}
                            withPropsTable={withPropsTable}
                            propsMetadata={propsMetadata}
                        >
                            {children}
                        </Content>
                    )}
                </TabPaneConnected>
                <div className="mod-header-padding">
                    <GuidelinesTab id={id} />
                </div>
            </TabContent>
        </div>
    );
};
const Content: FunctionComponent<
    Pick<
        PageLayoutProps,
        'code' | 'examples' | 'id' | 'relatedComponents' | 'layout' | 'withPropsTable' | 'propsMetadata' | 'children'
    >
> = ({code, examples, id, relatedComponents, layout, withPropsTable, propsMetadata, children}) => (
    <>
        {code && (
            <div className="plasma-page-layout__main-code plasma-page-layout__section">
                <Sandbox id="main-code" horizontal={layout === 'horizontal'}>
                    {code}
                </Sandbox>
            </div>
        )}

        {withPropsTable && (
            <div className="plasma-page-layout__section">
                <h4 className="h2 mb1">Props</h4>
                <PropsDoc propsMetadata={propsMetadata} />
            </div>
        )}
        {examples && (
            <div className="plasma-page-layout__section">
                <h4 className="h2 mb5">Examples</h4>
                {Object.entries(examples).map(
                    ([exampleId, {code: exampleCode, title, layout: exampleLayout = 'horizontal'}]) => (
                        <Sandbox
                            key={id + exampleId}
                            id={exampleId}
                            title={title}
                            horizontal={exampleLayout === 'horizontal'}
                        >
                            {exampleCode}
                        </Sandbox>
                    )
                )}
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
