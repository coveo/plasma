import classNames from 'clsx';

export interface ISideNavLoadingItemProps {
    className?: string;
}

/**
 * @deprecated Use Mantine NavLink instead: https://mantine.dev/core/nav-link/
 */
export const SideNavigationLoadingItem = (props: ISideNavLoadingItemProps) => (
    <div className={classNames(props.className, 'mod-sub-navigation-left-margin', 'navigation-loading-item-grey')} />
);
