import * as React from 'react';
import { SideNavigation } from '../SideNavigation';
import { SideNavigationLoadingItem } from '../SideNavigationLoadingItem';
import { SideNavigationMenuSection } from '../SideNavigationMenuSection';

export class SideNavigationLoadingExample extends React.Component<any, any> {
  render() {
    return (
      <div className='mt2'>
        <label className='form-control-label'>Navigation Loading</label>
        <div className='flex flex-row flex-stretch'>
          <SideNavigation>
            <SideNavigationMenuSection>
              <SideNavigationLoadingItem classes={'mod-width-30'} />
              <SideNavigationLoadingItem classes={'mod-width-50'} />
              <SideNavigationLoadingItem classes={'mod-width-40'} />
              <SideNavigationLoadingItem classes={'mod-width-60'} />
              <SideNavigationLoadingItem classes={'mod-width-50'} />
            </SideNavigationMenuSection>
            <SideNavigationMenuSection>
              <SideNavigationLoadingItem classes={'mod-width-30'} />
              <SideNavigationLoadingItem classes={'mod-width-50'} />
              <SideNavigationLoadingItem classes={'mod-width-60'} />
              <SideNavigationLoadingItem classes={'mod-width-30'} />
            </SideNavigationMenuSection>
            <SideNavigationMenuSection>
              <SideNavigationLoadingItem classes={'mod-width-30'} />
              <SideNavigationLoadingItem classes={'mod-width-40'} />
              <SideNavigationLoadingItem classes={'mod-width-50'} />
              <SideNavigationLoadingItem classes={'mod-width-30'} />
            </SideNavigationMenuSection>
          </SideNavigation>
        </div>
      </div>
    );
  }
}
