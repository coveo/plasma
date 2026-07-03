import {NavLink, NavLinkProps, Stack} from '@mantine/core';
import {FunctionComponent, HTMLAttributes, useEffect, useRef, useState} from 'react';
import classes from './NavigationSideBar.module.css';

export const NavigationSection: FunctionComponent<NavLinkProps & HTMLAttributes<HTMLAnchorElement>> = ({
    children,
    ...others
}) => {
    const [isEmpty, setEmpty] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (ref.current) {
            setEmpty(!ref.current.hasChildNodes());
        }
    }, [ref.current]);

    return (
        !isEmpty && (
            <NavLink
                data-level={1}
                classNames={{root: classes.navLink, chevron: classes.chevron, section: classes.section}}
                {...others}
            >
                <Stack ref={ref} data-navsection={others.label} gap="xxs">
                    {children}
                </Stack>
            </NavLink>
        )
    );
};

NavigationSection.displayName = 'NavigationSection';
