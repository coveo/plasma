import classNames from 'classnames';

export interface ISideNavLoadingItemProps {
    className?: string;
}

export const SideNavigationLoadingItem = (props: ISideNavLoadingItemProps) => (
    <div className={classNames(props.className, 'mod-sub-navigation-left-margin', 'navigation-loading-item-grey')} />
);
