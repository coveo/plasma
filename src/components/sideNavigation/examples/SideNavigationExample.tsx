import * as React from 'react';
import {SideNavigation} from '../SideNavigation';
import {SideNavigationItem} from '../SideNavigationItem';
import {SideNavigationLoadingItem} from '../SideNavigationLoadingItem';
import {SideNavigationMenuSection} from '../SideNavigationMenuSection';

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
            <div className='mt2'>
                <label className='form-control-label'>Side Navigation</label>
                <div className='flex flex-row flex-stretch'>
                    <SideNavigation>
                        <SideNavigationMenuSection header={{title: 'Section 1', svgName: 'identity-user'}}>
                            <SideNavigationItem href='http://coveo.com' title='Link to Coveo' />
                            <SideNavigationItem href='http://coveo.com' title='Another link to Coveo' />
                        </SideNavigationMenuSection>
                        <SideNavigationMenuSection header={{title: 'Section 2'}}>
                            <SideNavigationLoadingItem className='mod-width-30' />
                            <SideNavigationLoadingItem className='mod-width-50' />
                            <SideNavigationLoadingItem className='mod-width-40' />
                        </SideNavigationMenuSection>
                        <SideNavigationMenuSection header={{title: 'Section 3', svgName: 'menu-content'}} expandable expanded={this.state.expanded} onClick={() => this.click()}>
                            <SideNavigationItem href='http://coveo.com' target='_blank' title='Link to Coveo' />
                            <SideNavigationItem href='http://coveo.com' title='Another link to Coveo' />
                        </SideNavigationMenuSection>
                    </SideNavigation>
                </div>
            </div>
        );
    }
}
