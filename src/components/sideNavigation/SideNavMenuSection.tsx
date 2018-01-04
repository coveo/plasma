import * as React from 'react';
import { SideNavLoadingHeader } from './SideNavLoadingHeader';

export class SideNavMenuSection extends React.Component<any, any> {
  render() {
    return (
      <div className='block navigation-menu-section'>
        <SideNavLoadingHeader />
        <div className='navigation-menu-section-items'>
          {this.props.children}
        </div>
      </div>
    );
  }
}
