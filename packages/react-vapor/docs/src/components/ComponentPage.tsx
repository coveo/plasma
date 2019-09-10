import * as React from 'react';

import {TabConnected} from '../../../src/components/tab/TabConnected';
import {TabContent} from '../../../src/components/tab/TabContent';
import {TabNavigation} from '../../../src/components/tab/TabNavigation';
import {TabPaneConnected} from '../../../src/components/tab/TabPaneConnected';
import Code from '../demo-building-blocs/Code';
import {IComponent, TabConfig} from './ComponentsInterface';

type ComponentPageProps = Omit<IComponent, 'path'>;

const ComponentPage: React.FunctionComponent<ComponentPageProps> = (props) => {
    const getTabId = (tabName: string) => `${props.name}-${tabName}-tab`;

    return props.tabs.length > 0 ? (
        <>
            <TabNavigation>
                <TabConnected id={getTabId('development')} title="Develop" />
                {props.tabs
                    .sort((tabA, tabB) => tabA.order - tabB.order)
                    .map(({tabName}: TabConfig) => (
                        <TabConnected key={getTabId(tabName)} id={getTabId(tabName)} title={tabName} />
                    ))}
            </TabNavigation>
            <TabContent className="mod-header-padding mod-form-top-bottom-padding">
                <TabPaneConnected id={getTabId('development')}>
                    <DevelopmentTabContent {...props} />
                </TabPaneConnected>
                {props.tabs.map(({tabName, markdown}: TabConfig) => (
                    <TabPaneConnected key={getTabId(tabName)} id={getTabId(tabName)}>
                        {markdown}
                    </TabPaneConnected>
                ))}
            </TabContent>
        </>
    ) : (
        <div className="mod-header-padding p2">
            <DevelopmentTabContent {...props} />
        </div>
    );
};

const DevelopmentTabContent: React.FunctionComponent<ComponentPageProps> = ({component, code}) => (
    <>
        {React.createElement(component)}
        <div className="mt2">
            <Code language="tsx">{code}</Code>
        </div>
    </>
);

export default ComponentPage;
