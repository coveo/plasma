import * as React from 'react';
import { SideNavigationLoadingHeader } from './SideNavigationLoadingHeader';

export class SideNavigationMenuSection extends React.Component<any, any> {
  render() {
    return (
      <div className='block navigation-menu-section'>
        <SideNavigationLoadingHeader />
        <div className='navigation-menu-section-items'>
          {this.props.children}
        </div>
      </div>
    );
  }
}
