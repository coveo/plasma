import {NavLink, NavLinkProps} from '@mantine/core';
import {ElementType, FunctionComponent} from 'react';
import {NavigationBadge, NavigationBadgeVariant} from './NavigationBadge.js';
import classes from './NavigationSideBar.module.css';

export interface NavigationLinkProps extends Omit<NavLinkProps, 'component' | 'active'> {
    /**
     * Nesting level of the link. Use 1 for top-level links and 2 for nested links.
     */
    level: number;
    /**
     * Whether the link is currently active/selected.
     */
    active?: boolean;
    /**
     * Optional badge to display next to the label.
     */
    badge?: NavigationBadgeVariant;
    /**
     * Custom component to render the link as (e.g., a router Link component).
     */
    component?: ElementType;
    /**
     * Additional props passed to the underlying component.
     */
    [key: string]: unknown;
}

export const NavigationLink: FunctionComponent<NavigationLinkProps> = ({
    badge,
    label,
    level,
    active,
    component,
    ...others
}) => (
    <NavLink
        label={label}
        rightSection={badge ? <NavigationBadge variant={badge} /> : undefined}
        active={active}
        component={component as any}
        noWrap
        data-navlink
        data-level={level}
        {...others}
        classNames={{root: classes.navLink, label: classes.label, section: classes.section, chevron: classes.chevron}}
    />
);

NavigationLink.displayName = 'NavigationLink';
