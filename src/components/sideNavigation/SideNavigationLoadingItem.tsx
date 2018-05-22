import * as classNames from 'classnames';
import * as React from 'react';

export interface ISideNavLoadingItemProps {
    className?: string;
}

export const SideNavigationLoadingItem = (props: ISideNavLoadingItemProps) =>
    <div className={classNames(props.className, 'mod-sub-navigation-left-margin', 'navigation-loading-item-grey')} />;
