import * as React from 'react';
import {
    SideNavigation,
    SideNavigationLoadingHeader,
    SideNavigationLoadingItem,
    SideNavigationMenuSection,
} from 'react-vapor';

import VaporComponent from '../../../../demo-building-blocs/VaporComponent';

// start-print

export class SideNavigationLoadingExample extends React.Component<any, any> {
    render() {
        return (
            <VaporComponent id="side-navigation-loading" title="SideNavigation Loading" withSource>
                <div className="mt2">
                    <label className="form-control-label">Navigation Loading</label>
                    <div className="flex flex-row flex-stretch">
                        <SideNavigation>
                            <SideNavigationMenuSection>
                                <SideNavigationLoadingHeader />
                                <SideNavigationLoadingItem className="mod-width-30" />
                                <SideNavigationLoadingItem className="mod-width-50" />
                                <SideNavigationLoadingItem className="mod-width-40" />
                                <SideNavigationLoadingItem className="mod-width-60" />
                                <SideNavigationLoadingItem className="mod-width-50" />
                            </SideNavigationMenuSection>
                            <SideNavigationMenuSection>
                                <SideNavigationLoadingHeader />
                                <SideNavigationLoadingItem className="mod-width-30" />
                                <SideNavigationLoadingItem className="mod-width-50" />
                                <SideNavigationLoadingItem className="mod-width-60" />
                                <SideNavigationLoadingItem className="mod-width-30" />
                            </SideNavigationMenuSection>
                            <SideNavigationMenuSection>
                                <SideNavigationLoadingHeader />
                                <SideNavigationLoadingItem className="mod-width-30" />
                                <SideNavigationLoadingItem className="mod-width-40" />
                                <SideNavigationLoadingItem className="mod-width-50" />
                                <SideNavigationLoadingItem className="mod-width-30" />
                            </SideNavigationMenuSection>
                        </SideNavigation>
                    </div>
                </div>
            </VaporComponent>
        );
    }
}
