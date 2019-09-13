import * as React from 'react';
import * as Markdown from 'react-markdown';

import {BasicHeader} from '../../../src/components/headers/BasicHeader';
import {ITabProps} from '../../../src/components/tab/Tab';
import {TabContent} from '../../../src/components/tab/TabContent';
import {TabPaneConnected} from '../../../src/components/tab/TabPaneConnected';
import Code from '../demo-building-blocs/Code';
import {MarkdownOverrides} from '../demo-building-blocs/MarkdownOverrides';
import {IComponent, TabConfig} from './ComponentsInterface';

type ComponentPageProps = Omit<IComponent, 'path'>;

const buildTabIdTemplate = (componentName: string) => (tabName: string) => `${componentName}-${tabName}-tab`;

const ComponentPage: React.FunctionComponent<ComponentPageProps> = (props) => {
    const {name, tabs, component} = props;
    const hasMarkdownTabs = tabs.length > 0;
    const getTabId = buildTabIdTemplate(name);
    const mapTabConfigToProps = ({tabName}: TabConfig): ITabProps => ({
        id: getTabId(tabName),
        title: tabName,
    });

    const tabProps: ITabProps[] = hasMarkdownTabs && [
        {id: getTabId('development'), title: component.firstTabLabel || 'Develop'},
        ...tabs.sort((tabA, tabB) => tabA.order - tabB.order).map(mapTabConfigToProps),
    ];
    const PageLayout = hasMarkdownTabs ? PageLayoutWithTabs : PageLayoutWithoutTabs;

    return (
        <>
            <BasicHeader title={{text: component.title || name}} description={component.description} tabs={tabProps} />
            <PageLayout {...props} />
        </>
    );
};

const PageLayoutWithTabs: React.FunctionComponent<ComponentPageProps> = (props) => {
    const {name, tabs} = props;
    const getTabId = buildTabIdTemplate(name);
    return (
        <TabContent className="mod-header-padding mod-form-top-bottom-padding">
            <TabPaneConnected id={getTabId('development')}>
                <DevelopmentTabContent {...props} />
            </TabPaneConnected>
            {tabs.map(({tabName, markdown}: TabConfig) => (
                <TabPaneConnected key={getTabId(tabName)} id={getTabId(tabName)}>
                    <Markdown className="markdown-documentation" source={markdown} renderers={MarkdownOverrides} />
                </TabPaneConnected>
            ))}
        </TabContent>
    );
};

const PageLayoutWithoutTabs: React.FunctionComponent<ComponentPageProps> = (props) => (
    <div className="mod-header-padding mod-form-top-bottom-padding">
        <DevelopmentTabContent {...props} />
    </div>
);

const DevelopmentTabContent: React.FunctionComponent<ComponentPageProps> = ({component, code}) => (
    <>
        {React.createElement(component)}
        <div className="mt2">
            <Code language="tsx">{code}</Code>
        </div>
    </>
);

export default ComponentPage;
