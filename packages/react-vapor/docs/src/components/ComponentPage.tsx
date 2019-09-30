import * as React from 'react';
import * as Markdown from 'react-markdown';

import {BasicHeader} from '../../../src/components/headers/BasicHeader';
import {ITabProps} from '../../../src/components/tab/Tab';
import {TabContent} from '../../../src/components/tab/TabContent';
import {TabPaneConnected} from '../../../src/components/tab/TabPaneConnected';
import Code from '../demo-building-blocs/Code';
import {MarkdownOverrides} from '../demo-building-blocs/MarkdownOverrides';
import {IComponent, TabConfig} from './ComponentsInterface';

type ComponentPageProps = IComponent;

const buildTabIdTemplate = (componentName: string) => (tabName: string) => `${componentName}-${tabName}-tab`;

const ComponentPage: React.FunctionComponent<ComponentPageProps> = (props) => {
    const componentRootPath = props.path.substring(0, props.path.lastIndexOf('.'));
    const [tabs, setTabs] = React.useState([]);
    React.useEffect(() => {
        const load = async (path: string, ctx: any) => {
            if (path.includes(componentRootPath)) {
                const [, order, tabName] = /\w+Examples?(?:\.(\d+))?(?:\.(\w+))?\.md$/.exec(path);
                const {default: markdown} = await ctx(path);
                const c: TabConfig = {
                    tabName,
                    markdown,
                    order: parseInt(order, 10) || 0,
                };
                return c;
            }
        };
        const loadAll = () => {
            const mdFiles = require.context(
                '!!raw-loader!../../../src/',
                true,
                /Examples?(\.\d+)?(\.\w+)?\.md$/i,
                'lazy'
            );
            return Promise.all(mdFiles.keys().map((path) => load(path, mdFiles)));
        };
        loadAll().then((all) => setTabs(all.filter(Boolean)));
    }, [componentRootPath]);
    const {name, component} = props;
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
            <PageLayout {...props} tabs={tabs} />
        </>
    );
};

const PageLayoutWithTabs: React.FunctionComponent<ComponentPageProps & {tabs: TabConfig[]}> = (props) => {
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

const START_STOP = /\/\/ start-print\s*([\s\S]*)\/\/ stop-print/;
const START_END = /\/\/ start-print\s*([\s\S]*)$/;
const BEGIN_STOP = /^([\s\S]*)\/\/ stop-print/;

function chopDownSourceFile(wholeFile: string): string {
    const hasStartDirective = wholeFile.indexOf('// start-print') >= 0;
    const hasStopDirective = wholeFile.indexOf('// stop-print') >= 0;

    if (hasStartDirective && hasStopDirective) {
        return wholeFile.match(START_STOP)[1];
    } else if (hasStartDirective) {
        return wholeFile.match(START_END)[1];
    } else if (hasStopDirective) {
        return wholeFile.match(BEGIN_STOP)[1];
    } else {
        return wholeFile;
    }
}

const DevelopmentTabContent: React.FunctionComponent<ComponentPageProps> = ({component, path}) => {
    const [code, setCode] = React.useState('');
    React.useEffect(() => {
        const doImport = async () => {
            const res: {default: string} = await import('!!raw-loader!../../../src/' + path.replace('./', ''));
            return chopDownSourceFile(res.default);
        };
        doImport().then(setCode);
    }, [path]);
    return (
        <>
            {React.createElement(component)}
            {code && (
                <div className="mt2">
                    <Code language="tsx">{code}</Code>
                </div>
            )}
        </>
    );
};

export default ComponentPage;
