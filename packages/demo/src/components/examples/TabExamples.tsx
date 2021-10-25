import * as React from 'react';
import {Badge, Section, TabConnected, TabContent, TabNavigation, TabPaneConnected} from 'react-vapor';

export const TabsExamples: React.FunctionComponent = () => (
    <Section>
        <Section level={3} title="Simple tab navigation">
            {' '}
            <DefaultExmaple />
        </Section>
        <Section level={3} title="Tab with icons + center aligned">
            {' '}
            <WithIconsExmaple />
        </Section>
        <Section level={3} title="Tab with badges + right aligned">
            {' '}
            <WithBadgesExample />
        </Section>
    </Section>
);

// start-print

const DefaultExmaple: React.FunctionComponent = () => (
    <>
        <TabNavigation>
            <TabConnected id="tab1" title="Pikachu" />
            <TabConnected id="tab2" title="Gyarados" tooltip="I have a toolip!" />
            <TabConnected id="tab3" title="Chamender" />
            <TabConnected id="tab4" title="Rapidash" tooltip="I'm disabled" disabled />
            <TabConnected
                id="tab13"
                title="Mr. Mime"
                icon={'people'}
                tooltip="I have a icon and a badge!"
                badge={<Badge label="Tag" extraClasses={['mod-information mod-small ml1']} />}
            />
        </TabNavigation>
        <TabContent>
            <TabPaneConnected id="tab1">
                <div className="mod-header-padding mod-form-top-bottom-padding">Content of the first tab.</div>
            </TabPaneConnected>
            <TabPaneConnected id="tab2">
                <div className="mod-header-padding mod-form-top-bottom-padding">Content of the second tab.</div>
            </TabPaneConnected>
            <TabPaneConnected id="tab3">
                <div className="mod-header-padding mod-form-top-bottom-padding">Content of the third tab .</div>
            </TabPaneConnected>
            <TabPaneConnected id="tab4">
                <div className="mod-header-padding mod-form-top-bottom-padding">Content of the fourth tab.</div>
            </TabPaneConnected>
            <TabPaneConnected id="tab13">
                <div className="mod-header-padding mod-form-top-bottom-padding">Content of the fifth tab.</div>
            </TabPaneConnected>
        </TabContent>{' '}
    </>
);

const WithIconsExmaple: React.FunctionComponent = () => (
    <>
        <TabNavigation className={'mod-align-center'}>
            <TabConnected id="tab5" title="Pikachu" icon={'lightning'} iconExtraClasses={'mod-warning'} />
            <TabConnected id="tab6" title="Gyarados" icon={'exclamationMarkInCircle'} iconExtraClasses={'mod-error'} />
            <TabConnected id="tab7" title="Chamender" icon={'help'} iconExtraClasses={'documentation-link'} />
            <TabConnected id="tab8" title="Rapidash" icon={'help'} iconExtraClasses={'documentation-link'} disabled />
        </TabNavigation>
        <TabContent>
            <TabPaneConnected id="tab5">
                <div className="mod-header-padding mod-form-top-bottom-padding">Content of the first tab.</div>
            </TabPaneConnected>
            <TabPaneConnected id="tab6">
                <div className="mod-header-padding mod-form-top-bottom-padding">Content of the second tab.</div>
            </TabPaneConnected>
            <TabPaneConnected id="tab7">
                <div className="mod-header-padding mod-form-top-bottom-padding">Content of the third tab .</div>
            </TabPaneConnected>
            <TabPaneConnected id="tab8">
                <div className="mod-header-padding mod-form-top-bottom-padding">Content of the fourth tab.</div>
            </TabPaneConnected>
        </TabContent>{' '}
    </>
);

const WithBadgesExample: React.FunctionComponent = () => (
    <>
        <TabNavigation className={'mod-align-right'}>
            <TabConnected
                id="tab9"
                title="Pikachu"
                badge={<Badge label="Success" extraClasses={['mod-success mod-small ml1']} />}
            />
            <TabConnected
                id="tab10"
                title="Gyarados"
                badge={
                    <Badge
                        label="Beware"
                        icon={'exclamationMarkInCircle'}
                        extraClasses={['mod-warning mod-small ml1']}
                    />
                }
            />
            <TabConnected
                id="tab11"
                title="Chamender"
                badge={<Badge icon={'lightning'} extraClasses={['mod-info mod-small ml1']} />}
            />
            <TabConnected
                id="tab12"
                title="Rapidash"
                badge={<Badge label="Beta" extraClasses={['mod-beta mod-small ml1']} />}
                disabled
            />
        </TabNavigation>
        <TabContent>
            <TabPaneConnected id="tab9">
                <div className="mod-header-padding mod-form-top-bottom-padding">Content of the first tab.</div>
            </TabPaneConnected>
            <TabPaneConnected id="tab10">
                <div className="mod-header-padding mod-form-top-bottom-padding">Content of the second tab.</div>
            </TabPaneConnected>
            <TabPaneConnected id="tab11">
                <div className="mod-header-padding mod-form-top-bottom-padding">Content of the third tab .</div>
            </TabPaneConnected>
            <TabPaneConnected id="ta12">
                <div className="mod-header-padding mod-form-top-bottom-padding">Content of the fourth tab.</div>
            </TabPaneConnected>
        </TabContent>{' '}
    </>
);
