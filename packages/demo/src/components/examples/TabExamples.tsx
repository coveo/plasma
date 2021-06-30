import * as React from 'react';
import {Svg, TabConnected, TabContent, TabNavigation, TabPaneConnected} from 'react-vapor';

export const TabsExamples: React.FunctionComponent = () => (
    <div className="mt2">
        <div className="form-group">
            <label className="form-control-label">Tabs</label>
            <div>
                <TabNavigation>
                    <TabConnected id="tab1" title="A Tab" />
                    <TabConnected id="tab2" title="Another Tab" tooltip="I am an enabled tab" />
                    <TabConnected id="tab3" title="Tab with an icon">
                        <Svg svgName="help" svgClass="icon documentation-link mod-16 mr1" />
                    </TabConnected>
                    <TabConnected
                        id="tab4"
                        title=" Another Tab with an icon"
                        children={<Svg svgName="info" svgClass="icon documentation-link mod-16 mr1" />}
                    />
                    <TabConnected id="tab5" title="A Disabled Tab" tooltip="I am a disabled tab" disabled />
                </TabNavigation>
                <TabContent>
                    <TabPaneConnected id="tab1">
                        <div className="mod-header-padding mod-form-top-bottom-padding">Content of the first tab.</div>
                    </TabPaneConnected>
                    <TabPaneConnected id="tab2">
                        <div className="mod-header-padding mod-form-top-bottom-padding">Content of the second tab.</div>
                    </TabPaneConnected>
                    <TabPaneConnected id="tab3">
                        <div className="mod-header-padding mod-form-top-bottom-padding">
                            Content of the tab with an icon.
                        </div>
                    </TabPaneConnected>
                    <TabPaneConnected id="tab4">
                        <div className="mod-header-padding mod-form-top-bottom-padding">
                            Content of the other tab with an icon.
                        </div>
                    </TabPaneConnected>
                    <TabPaneConnected id="tab5">
                        <div className="mod-header-padding mod-form-top-bottom-padding">
                            Last tab. You shouldn't be able to see this because the tab is disabled.
                        </div>
                    </TabPaneConnected>
                </TabContent>
            </div>
        </div>

        <div className="form-group">
            <label className="form-control-label">
                Tabs with custom attributes on element (use the inspector to see changes)
            </label>
            <div>
                <TabNavigation className={'tab-navigation-custom-class'} style={{backgroundColor: 'grey'}}>
                    <TabConnected id="tab11" title="A Tab" />
                    <TabConnected id="tab22" title="Another Tab" />
                    <TabConnected id="tab33" title="Yet Another Tab" />
                </TabNavigation>
                <TabContent className={'tab-content-custom-class'}>
                    <TabPaneConnected id="tab11">
                        <div className="mod-header-padding mod-form-top-bottom-padding">Content of the first tab.</div>
                    </TabPaneConnected>
                    <TabPaneConnected id="tab22">
                        <div className="mod-header-padding mod-form-top-bottom-padding">Content of the second tab.</div>
                    </TabPaneConnected>
                    <TabPaneConnected id="tab33">
                        <div className="mod-header-padding mod-form-top-bottom-padding">Last tab.</div>
                    </TabPaneConnected>
                </TabContent>
            </div>
        </div>
    </div>
);
