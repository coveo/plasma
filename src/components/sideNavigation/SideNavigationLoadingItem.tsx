import * as className from 'classnames';
import * as React from 'react';

export interface ISideNavLoadingItemProps {
    className?: string;
}

export const SideNavigationLoadingItem = (props: ISideNavLoadingItemProps) =>
    <div className={className(props.className, 'mod-sub-navigation-left-margin', 'navigation-loading-item-grey')} />;
