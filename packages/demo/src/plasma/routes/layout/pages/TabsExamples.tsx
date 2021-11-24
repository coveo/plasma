import * as React from 'react';
import {Badge, Section, TabConnected, TabContent, TabNavigation, TabPaneConnected} from 'react-vapor';
import VaporComponent from '../../../../demo-building-blocs/VaporComponent';

export const TabsExamples: React.FunctionComponent = () => (
    <VaporComponent id="tab" title="Tabs" usage="">
        <Section>
            <Section level={3} title="Simple tab navigation">
                <DefaultExmaple />
            </Section>
            <Section
                level={3}
                title="Tab with icons"
                description="Icons on tabs are an optional elements usually added for illustrative purposes. If used in an instance, they should be considered for every tab item or none at all."
            >
                <WithIconsExmaple />
            </Section>
        </Section>
    </VaporComponent>
);

// start-print

const DefaultExmaple: React.FunctionComponent = () => (
    <>
        <TabNavigation>
            <TabConnected groupId="patate" id="tab1" title="Pikachu" />
            <TabConnected groupId="patate" id="tab2" title="Gyarados" tooltip="I have a toolip!" />
            <TabConnected groupId="patate" id="tab3" title="Charmander" />
            <TabConnected groupId="patate" id="tab4" title="Rapidash" tooltip="I'm disabled" disabled />
            <TabConnected
                groupId="patate"
                id="tab13"
                title="Mr. Mime"
                tooltip="I have a badge!"
                badge={<Badge label="Beta" extraClasses={['mod-beta mod-small ml1']} />}
            />
        </TabNavigation>
        <TabContent>
            <TabPaneConnected groupId="patate" id="tab1">
                <div className="mod-header-padding mod-form-top-bottom-padding">Content of the first tab.</div>
            </TabPaneConnected>
            <TabPaneConnected groupId="patate" id="tab2">
                <div className="mod-header-padding mod-form-top-bottom-padding">Content of the second tab.</div>
            </TabPaneConnected>
            <TabPaneConnected groupId="patate" id="tab3">
                <div className="mod-header-padding mod-form-top-bottom-padding">Content of the third tab .</div>
            </TabPaneConnected>
            <TabPaneConnected groupId="patate" id="tab4">
                <div className="mod-header-padding mod-form-top-bottom-padding">Content of the fourth tab.</div>
            </TabPaneConnected>
            <TabPaneConnected groupId="patate" id="tab13">
                <div className="mod-header-padding mod-form-top-bottom-padding">Content of the fifth tab.</div>
            </TabPaneConnected>
        </TabContent>
    </>
);

const WithIconsExmaple: React.FunctionComponent = () => (
    <>
        <TabNavigation>
            <TabConnected groupId="banane" id="tab5" title="Pikachu" icon={'lightning'} />
            <TabConnected groupId="banane" id="tab6" title="Gyarados" icon={'crawlingBotStroked16'} iconModStroke />
            <TabConnected groupId="banane" id="tab7" title="Charmander" icon={'check'} />
            <TabConnected groupId="banane" id="tab8" title="Rapidash" icon={'details'} disabled />
            <TabConnected
                groupId="banane"
                id="tab14"
                title="Mr. Mime"
                tooltip="I have an icon and a badge!"
                icon="email"
                badge={<Badge label="Success" extraClasses={['mod-success mod-small ml1']} />}
            />
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
            <TabPaneConnected groupId="banane" id="tab8">
                <div className="mod-header-padding mod-form-top-bottom-padding">Content of the fourth tab.</div>
            </TabPaneConnected>
            <TabPaneConnected groupId="banane" id="tab14">
                <div className="mod-header-padding mod-form-top-bottom-padding">Content of the last tab.</div>
            </TabPaneConnected>
        </TabContent>
    </>
);
