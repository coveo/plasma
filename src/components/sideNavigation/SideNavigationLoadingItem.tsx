import * as React from 'react';
import * as className from 'classnames';

export interface ISideNavLoadingItemProps {
  classes?: string;
}

export class SideNavigationLoadingItem extends React.Component<ISideNavLoadingItemProps, any> {
  render() {
    const classes = className(this.props.classes, 'mod-sub-navigation-left-margin', 'navigation-loading-item-grey');
    return <div className={classes}></div>;
  }
}
