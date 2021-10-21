import * as React from 'react';
import {Badge, Svg, TabConnected, TabContent, TabNavigation, TabPaneConnected} from 'react-vapor';

export const TabsExamples: React.FunctionComponent = () => (
    <>
        <TabNavigation>
            <TabConnected id="tab1" title="A Tab" />
            <TabConnected id="tab2" title="Another Tab" tooltip="I have a toolip!" />
            <TabConnected id="tab3" title="Tab with an icon">
                <Svg svgName="help" svgClass="icon documentation-link mod-16 mr1" />
            </TabConnected>
            <TabConnected
                id="tab4"
                title=" A Tab with an badge"
                children={<Badge label="Success" extraClasses={['mod-success mod-small mr2']} />}
            />
            <TabConnected id="tab5" title="A Disabled Tab" tooltip="I am a disabled tab" disabled />
            <TabConnected
                id="tab6"
                title="A Disabled Tab with an icon"
                tooltip="I am a disabled tab with an icon"
                disabled
                children={<Svg svgName="help" svgClass="icon documentation-link mod-16 mr1" />}
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
                <div className="mod-header-padding mod-form-top-bottom-padding">Content of the tab with an icon.</div>
            </TabPaneConnected>
            <TabPaneConnected id="tab4">
                <div className="mod-header-padding mod-form-top-bottom-padding">Content of the tab with a Badge.</div>
            </TabPaneConnected>
            <TabPaneConnected id="tab5">
                <div className="mod-header-padding mod-form-top-bottom-padding">
                    You shouldn't be able to see this because the tab is disabled.
                </div>
            </TabPaneConnected>
            <TabPaneConnected id="tab6">
                <div className="mod-header-padding mod-form-top-bottom-padding">
                    Last tab. You shouldn't be able to see this because the tab is disabled.
                </div>
            </TabPaneConnected>
        </TabContent>
    </>
);
