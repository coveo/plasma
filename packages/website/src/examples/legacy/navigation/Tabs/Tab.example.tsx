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
