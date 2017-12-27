import * as React from 'react';
import { NavigationHeader } from './NavigationHeader';

export class NavigationMenuSection extends React.Component<any, any> {
  render() {
    return (
      <div className='block navigation-menu-section'>
        <NavigationHeader />
        <div className='navigation-menu-section-items'>
          {this.props.children}
        </div>
      </div>
    );
  }
}
