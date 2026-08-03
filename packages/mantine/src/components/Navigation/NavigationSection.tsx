import {NavLink, NavLinkProps, Stack} from '@mantine/core';
import {Children, FunctionComponent, HTMLAttributes} from 'react';
import classes from './NavigationSideBar.module.css';

export const NavigationSection: FunctionComponent<NavLinkProps & HTMLAttributes<HTMLAnchorElement>> = ({
    children,
    ...others
}) => {
    if (Children.toArray(children).length === 0) {
        return null;
    }

    return (
        <NavLink
            data-level={1}
            classNames={{root: classes.navLink, chevron: classes.chevron, section: classes.section}}
            {...others}
        >
            <Stack data-navsection={others.label} gap="xxs">
                {children}
            </Stack>
        </NavLink>
    );
};

NavigationSection.displayName = 'NavigationSection';
