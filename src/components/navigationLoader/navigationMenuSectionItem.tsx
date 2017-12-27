import * as React from 'react';
import * as className from 'classnames';

export interface INavigationMenuSectionItemProps {
  classes?: string[];
}

export class NavigationMenuSectionItem extends React.Component<INavigationMenuSectionItemProps, any> {
  render() {
    const classes = className(this.props.classes, 'mod-sub-navigation-left-margin', 'navigation-loading-item-grey');
    return <div className={classes}></div>;
  }
}
