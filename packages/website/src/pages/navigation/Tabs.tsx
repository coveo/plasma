import {TabMetadata} from '@coveord/plasma-components-props-analyzer';
import {FunctionComponent} from 'react';

import {PageLayout} from '../../building-blocs/PageLayout';

const withIcons = `

    import {TabConnected, TabContent, TabNavigation, TabPaneConnected} from '@coveord/plasma-react';
    import {HeartSize16Px, LightningSize16Px, RocketSize16Px} from '@coveord/plasma-react-icons';

    export default () => (
    <>
        <TabNavigation>
            <TabConnected groupId="banane" id="tab5" title="Pikachu" icon={LightningSize16Px} />
            <TabConnected groupId="banane" id="tab6" title="Gyarados" icon={HeartSize16Px} />
            <TabConnected groupId="banane" id="tab7" title="Charmander" icon={RocketSize16Px} />
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
    import {Badge, BadgeType, TabConnected, TabContent, TabNavigation, TabPaneConnected} from '@coveord/plasma-react';

    export default () => (
        <>
            <TabNavigation>
                <TabConnected groupId="patate" id="tab2" title="Gyarados" tooltip="I have a toolip!" />
                <TabConnected
                    groupId="patate"
                    id="tab13"
                    title="Mr. Mime"
                    tooltip="I have a badge!"
                    badge={<Badge label="Beta" isSmall type={BadgeType.Beta} extraClasses={['ml1']} />}
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

export const TabsExamples: FunctionComponent = () => (
    <PageLayout
        id="Tab"
        componentSourcePath="/tab/Tab.tsx"
        title="Tab"
        section="Navigation"
        description="A set of tabs allows users to navigate between sections of the same interface."
        thumbnail="tab"
        code={code}
        propsMetadata={TabMetadata}
        examples={{withIcons: {code: withIcons, title: 'Tab with icons'}}}
    />
);

export default TabsExamples;
