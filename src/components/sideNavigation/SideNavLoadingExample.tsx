import * as React from 'react';
import { SideNavLoading } from './SideNavLoading';
import { SideNavLoadingItem } from './SideNavLoadingItem';
import { SideNavMenuSection } from './SideNavMenuSection';

export class SideNavLoadingExample extends React.Component<any, any> {
  render() {
    return (
      <div className='mt2'>
        <label className='form-control-label'>Navigation Loading</label>
        <div className='flex flex-row flex-stretch'>
          <SideNavLoading>
            <SideNavMenuSection>
              <SideNavLoadingItem classes={'mod-width-30'} />
              <SideNavLoadingItem classes={'mod-width-50'} />
              <SideNavLoadingItem classes={'mod-width-40'} />
              <SideNavLoadingItem classes={'mod-width-60'} />
              <SideNavLoadingItem classes={'mod-width-50'} />
            </SideNavMenuSection>
            <SideNavMenuSection>
              <SideNavLoadingItem classes={'mod-width-30'} />
              <SideNavLoadingItem classes={'mod-width-50'} />
              <SideNavLoadingItem classes={'mod-width-60'} />
              <SideNavLoadingItem classes={'mod-width-30'} />
            </SideNavMenuSection>
            <SideNavMenuSection>
              <SideNavLoadingItem classes={'mod-width-30'} />
              <SideNavLoadingItem classes={'mod-width-40'} />
              <SideNavLoadingItem classes={'mod-width-50'} />
              <SideNavLoadingItem classes={'mod-width-30'} />
            </SideNavMenuSection>
          </SideNavLoading>
        </div>
      </div>
    );
  }
}
