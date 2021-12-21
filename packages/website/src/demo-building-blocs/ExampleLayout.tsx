import * as React from 'react';
import {useSelector} from 'react-redux';
import {TabContent, TabPaneConnected, TabSelectors, TabsHeader, Tile} from '@coveord/plasma-react';
import {GuidelinesTab} from './GuidelinesTab';
import '@demo-styling/example-layout.scss';
import Sandbox from './Sandbox';

export interface ExampleLayoutProps {
    id: string;
    title: string;
    description?: React.ReactNode;
    section: string;
    code: string;
    examples: Record<string, {code: string; title: string}>;
}

export const ExampleLayout: React.FunctionComponent<ExampleLayoutProps> = ({
    id,
    title,
    description,
    section,
    children,
    code,
    examples,
}) => {
    const isShowingCode = useSelector((state) =>
        TabSelectors.getIsTabSelected(state, {groupId: 'page', id: 'implementation'})
    );
    return (
        <div id={id} className="example-layout">
            <div className="example-layout__header">
                <h2 className="h4-subdued normal-white-space">{section}</h2>
                <div>Github</div>
                <h3 className="h1-light normal-white-space">{title}</h3>
                <Tile title="" svgName="plasmaComponentBox" description="" href={undefined} />
                <div>{description}</div>
            </div>
            <TabsHeader
                tabs={[
                    {groupId: 'page', id: 'implementation', title: 'Implementation'},
                    {groupId: 'page', id: 'guide', title: 'Guidelines'},
                ]}
            />
            <TabContent>
                <TabPaneConnected id="implementation" groupId="page">
                    {isShowingCode && <Content code={code} examples={examples} />}
                </TabPaneConnected>
                <GuidelinesTab id={id} />
            </TabContent>
        </div>
    );
};
const Content: React.FunctionComponent<Pick<ExampleLayoutProps, 'code' | 'examples'>> = ({code, examples}) => (
    <>
        <div className="example-layout__main-code example-layout__section">
            <Sandbox id="main-code">{code}</Sandbox>
        </div>
        <div className="example-layout__props example-layout__section">
            <h4 className="h2 mb5">Props</h4>
            <div>Insert table props here</div>
        </div>
        <div className="example-layout__examples example-layout__section">
            <h4 className="h2 mb5">Examples</h4>
            {Object.entries(examples).map(([id, {code: exampleCode, title}]) => (
                <Sandbox key={id} id={id} title={title}>
                    {exampleCode}
                </Sandbox>
            ))}
        </div>
        <div className="example-layout__related example-layout__section">
            <h4 className="h2 mb5">Related Components</h4>
            <div>Insert related components here</div>
        </div>
    </>
);
