import * as React from 'react';
import {SideNavigation, SideNavigationItem, SideNavigationLoadingItem, SideNavigationMenuSection} from 'react-vapor';

export class SideNavigationExample extends React.Component<any, any> {
    constructor(prop: any, state: any) {
        super(prop, state);

        this.state = {
            expanded: true,
        };
    }

    click() {
        this.setState({
            expanded: !this.state.expanded,
        });
    }

    render() {
        return (
            <div className="mt2">
                <label className="form-control-label">Side Navigation</label>
                <div className="flex flex-row flex-stretch">
                    <SideNavigation>
                        <SideNavigationMenuSection title="Section 1" svgName="identity-user">
                            <SideNavigationItem isActive href="http://coveo.com" title="Link to Coveo" />
                            <SideNavigationItem href="http://coveo.com" title="Another link to Coveo" />
                        </SideNavigationMenuSection>
                        <SideNavigationMenuSection title="Section 2">
                            <SideNavigationLoadingItem className="mod-width-30" />
                            <SideNavigationLoadingItem className="mod-width-50" />
                            <SideNavigationLoadingItem className="mod-width-40" />
                        </SideNavigationMenuSection>
                        <SideNavigationMenuSection
                            title="Collapsible Section"
                            svgName="menu-content"
                            expandable
                            expanded={this.state.expanded}
                            onClick={() => this.click()}
                        >
                            <SideNavigationItem>
                                <a href="http://coveo.com" title="Link to Coveo">
                                    Link to Coveo
                                </a>
                            </SideNavigationItem>
                            <SideNavigationItem>
                                <a href="http://coveo.com" title="Link to Coveo">
                                    Another link to Coveo
                                </a>
                            </SideNavigationItem>
                        </SideNavigationMenuSection>
                    </SideNavigation>
                </div>
            </div>
        );
    }
}
