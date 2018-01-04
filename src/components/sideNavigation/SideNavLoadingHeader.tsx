import * as React from 'react';

export class SideNavLoadingHeader extends React.Component<any, any> {
  render() {
    return (
      <header className='navigation-menu-section-header'>
        <div className='navigation-loading-item-light-grey mod-navigation-loading-bullet navigation-menu-section-header-icon'></div>
        <div className='navigation-loading-item-light-grey mod-width-40'></div>
      </header>
    );
  }
}
