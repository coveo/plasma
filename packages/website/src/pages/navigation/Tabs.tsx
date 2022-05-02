import {PageLayout} from '../../building-blocs/PageLayout';

const withIcons = `
    import {Badge, TabConnected, TabContent, TabNavigation, TabPaneConnected} from '@coveord/plasma-react';
    
    export default () => (
    <>
        <TabNavigation>
            <TabConnected groupId="banane" id="tab5" title="Pikachu" icon={'lightning'} />
            <TabConnected groupId="banane" id="tab6" title="Gyarados" icon={'crawlingBotStroked16'} iconModStroke />
            <TabConnected groupId="banane" id="tab7" title="Charmander" icon={'check'} />
        </TabNavigation>
        <TabContent>
            <TabPaneConnected groupId="banane" id="tab5">
                <div className="mod-header-padding mod-form-top-bottom-padding">Content of the first tab.</div>
            </TabPaneConnected>
            <TabPaneConnected groupId="banane" id="tab6">
                <div className="mod-header-padding mod-form-top-bottom-padding">Content of the second tab.</div>
            </TabPaneConnected>
            <TabPaneConnected groupId="banane" id="tab7">
                <div className="mod-header-padding mod-form-top-bottom-padding">Content of the third tab .</div>
            </TabPaneConnected>
        </TabContent>
    </>
    );
`;

const code = `
    import {Badge, TabConnected, TabContent, TabNavigation, TabPaneConnected} from '@coveord/plasma-react';

    export default () => (
        <>
            <TabNavigation>
                <TabConnected groupId="patate" id="tab2" title="Gyarados" tooltip="I have a toolip!" />
                <TabConnected
                    groupId="patate"
                    id="tab13"
                    title="Mr. Mime"
                    tooltip="I have a badge!"
                    badge={<Badge label="Beta" extraClasses={['mod-beta mod-small ml1']} />}
                />
                <TabConnected groupId="patate" id="tab4" title="Rapidash" tooltip="I'm disabled" disabled />
            </TabNavigation>
            <TabContent>
                <TabPaneConnected groupId="patate" id="tab2">
                    <div className="mod-header-padding mod-form-top-bottom-padding">Content of the second tab.</div>
                </TabPaneConnected>
                <TabPaneConnected groupId="patate" id="tab4">
                    <div className="mod-header-padding mod-form-top-bottom-padding">Content of the fourth tab.</div>
                </TabPaneConnected>
            </TabContent>
        </>
    );
`;

export const TabsExamples = () => (
    <PageLayout
        id="Tab"
        componentSourcePath="/tab/Tab.tsx"
        title="Tab"
        section="Navigation"
        description="A set of tabs allows users to navigate between sections of the same interface."
        thumbnail="tab"
        code={code}
        examples={{withIcons: {code: withIcons, title: 'Tab with icons'}}}
    />
);

export default TabsExamples;
