import * as React from 'react';
import {Section, TabConnected, TabContent, TabNavigation, TabPaneConnected} from 'react-vapor';

import VaporComponent from '../../../../demo-building-blocs/VaporComponent';

const TAB1_ID = 'tab1';
const TAB2_ID = 'tab2';
const TAB5_ID = 'tab5';

const TAB11_ID = 'tab11';
const TAB22_ID = 'tab22';
const TAB33_ID = 'tab33';

// start-print

export const TabsConnectedExamples: React.FunctionComponent = () => (
    <VaporComponent id="tab-connected" title="Tabs Connected" withSource>
        <Section>
            <Section level={3} title="Basic Tabs">
                <div>
                    <TabNavigation>
                        <TabConnected id={TAB1_ID} title="A Tab" />
                        <TabConnected id={TAB2_ID} title="Another Tab" tooltip="I am an enabled tab" />
                        <TabConnected id={TAB5_ID} title="A Disabled Tab" tooltip="I am a disabled tab" disabled />
                    </TabNavigation>
                    <TabContent>
                        <TabPaneConnected id={TAB1_ID}>
                            <div className="mod-header-padding mod-form-top-bottom-padding">
                                Content of the first tab.
                            </div>
                        </TabPaneConnected>
                        <TabPaneConnected id={TAB2_ID}>
                            <div className="mod-header-padding mod-form-top-bottom-padding">
                                Content of the second tab.
                            </div>
                        </TabPaneConnected>
                        <TabPaneConnected id={TAB5_ID}>
                            <div className="mod-header-padding mod-form-top-bottom-padding">
                                Last tab. You shouldn't be able to see this because the tab is disabled.
                            </div>
                        </TabPaneConnected>
                    </TabContent>
                </div>
            </Section>
            <Section level={3} title="Tabs with custom attributes on element (use the inspector to see changes)">
                <div>
                    <TabNavigation
                        className={'tab-navigation-custom-class'}
                        style={{backgroundColor: 'var(--grey-20)'}}
                    >
                        <TabConnected id={TAB11_ID} title="A Tab" />
                        <TabConnected id={TAB22_ID} title="Another Tab" />
                        <TabConnected id={TAB33_ID} title="Yet Another Tab" />
                    </TabNavigation>
                    <TabContent className={'tab-content-custom-class'}>
                        <TabPaneConnected id={TAB11_ID}>
                            <div className="mod-header-padding mod-form-top-bottom-padding">
                                Content of the first tab.
                            </div>
                        </TabPaneConnected>
                        <TabPaneConnected id={TAB22_ID}>
                            <div className="mod-header-padding mod-form-top-bottom-padding">
                                Content of the second tab.
                            </div>
                        </TabPaneConnected>
                        <TabPaneConnected id={TAB33_ID}>
                            <div className="mod-header-padding mod-form-top-bottom-padding">Last tab.</div>
                        </TabPaneConnected>
                    </TabContent>
                </div>
            </Section>
        </Section>
    </VaporComponent>
);
