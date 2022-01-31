import '@styles/example-layout.scss';

import {SvgNames, TabContent, TabPaneConnected, TabSelectors, TabsHeader} from '@coveord/plasma-react';
import * as React from 'react';
import {useSelector} from 'react-redux';

import {GithubButton} from './GithubButton';
import {GuidelinesTab} from './GuidelinesTab';
import {PropsDoc} from './PropsDoc';
import Sandbox from './Sandbox';
import {Tile, TileProps} from './Tile';

interface PlaygroundProps {
    title: string;
    code: string;
    layout?: 'horizontal' | 'vertical';
}

export interface ExampleLayoutProps extends PlaygroundProps {
    id: string;
    thumbnail?: TileProps['thumbnail'];
    description?: React.ReactNode;
    section: string;
    examples?: Record<string, PlaygroundProps>;
    relatedComponents?: TileProps[];
    /**
     * Path to the component's source file from /packages/react/src/components
     *
     * @example '/button/Button.tsx'
     */
    componentSourcePath: string;
}

export const ExampleLayout: React.FunctionComponent<ExampleLayoutProps> = ({
    id,
    title,
    description,
    thumbnail,
    section,
    code,
    layout = 'horizontal',
    examples,
    componentSourcePath,
    relatedComponents,
}) => {
    const isShowingCode = useSelector((state) =>
        TabSelectors.getIsTabSelected(state, {groupId: 'page', id: 'implementation'})
    );
    return (
        <div id={id} className="example-layout">
            <div className="example-layout__header">
                <h2 className="h4-subdued normal-white-space">{section}</h2>
                <GithubButton
                    ariaLabel="View source code on GitHub"
                    href={`https://github.com/coveo/plasma/blob/master/packages/react/src/components${componentSourcePath}`}
                >
                    View source
                </GithubButton>
                <h3 className="h1-light normal-white-space" data-coveo-field="title">
                    {title}
                </h3>
                <Tile thumbnail={thumbnail} />
                <div data-coveo-field="description">{description}</div>
            </div>
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
                        />
                    )}
                </TabPaneConnected>
                <div className="mod-header-padding mod-form-top-bottom-padding">
                    <GuidelinesTab id={id} />
                </div>
            </TabContent>
        </div>
    );
};
const Content: React.FunctionComponent<Pick<
    ExampleLayoutProps,
    'code' | 'examples' | 'id' | 'relatedComponents' | 'layout'
>> = ({code, examples, id, relatedComponents, layout}) => (
    <>
        <div className="example-layout__main-code example-layout__section">
            <Sandbox id="main-code" horizontal={layout === 'horizontal'}>
                {code}
            </Sandbox>
        </div>
        <div className="example-layout__props example-layout__section">
            <h4 className="h2 mb1">Props</h4>
            <PropsDoc componentName={id} />
        </div>
        {examples && (
            <div className="example-layout__examples example-layout__section">
                <h4 className="h2 mb5">Examples</h4>
                {Object.entries(examples).map(
                    ([exampleId, {code: exampleCode, title, layout: exampleLayout = 'horizontal'}]) => (
                        <Sandbox
                            key={exampleId}
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
            <div className="example-layout__related example-layout__section">
                <h4 className="h2 mb5">Related Components</h4>
                {relatedComponents.map((tileProps) => (
                    <Tile key={tileProps.title} {...tileProps} />
                ))}
            </div>
        )}
    </>
);
