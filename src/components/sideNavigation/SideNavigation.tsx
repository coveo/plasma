import * as React from 'react';
import * as className from 'classnames';

export interface ISideNavProps {
  className?: string;
}

export class SideNavigation extends React.Component<ISideNavProps, any> {
  render() {
    const classes = className(this.props.className, 'navigation');
    return (
      <nav className={classes}>
        <div className='navigation-menu'>
          <div className='navigation-menu-sections'>
            {this.props.children}
          </div>
        </div>
      </nav>
    );
  }
}
