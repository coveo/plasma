import {AppShell, AppShellNavbarProps, Factory, factory, ScrollArea, Stack, useProps} from '@mantine/core';
import clsx from 'clsx';
import {FunctionComponent, ReactNode} from 'react';
import {useNavigation} from './Navigation.context.js';
import classes from './NavigationSideBar.module.css';
import {NavigationToggle} from './NavigationToggle.js';

export type NavigationSideBarStylesNames = 'navbar';

export interface NavigationSideBarProps extends Omit<AppShellNavbarProps, 'hidden'> {
    /**
     * Content rendered at the top of the sidebar (e.g., a logo or app switcher).
     */
    header?: ReactNode;
}

export type NavigationSideBarFactory = Factory<{
    props: NavigationSideBarProps;
    ref: HTMLElement;
    stylesNames: NavigationSideBarStylesNames;
}>;

const defaultProps: Partial<NavigationSideBarProps> = {};

export const NavigationSideBar: FunctionComponent<NavigationSideBarProps> = factory<NavigationSideBarFactory>(
    (_props, ref) => {
        const {collapsed} = useNavigation();
        const props = useProps('NavigationSideBar', defaultProps, _props);
        const {children, header, ...rest} = props;

        const isSafari = typeof navigator !== 'undefined' && /apple/i.test(navigator.vendor);

        return (
            <AppShell.Navbar
                ref={ref}
                {...rest}
                className={clsx(classes.navbar, {[classes.deactivateAnimation]: isSafari})}
                mod={{collapsed}}
            >
                {header}
                <AppShell.Section
                    grow
                    w="100%"
                    renderRoot={(appShellSectionProps) => (
                        <ScrollArea classNames={classes} {...appShellSectionProps}>
                            {appShellSectionProps.children}
                        </ScrollArea>
                    )}
                >
                    <Stack gap="xs" px="xs">
                        {children}
                    </Stack>
                </AppShell.Section>
                <NavigationToggle className={classes.collapseToggle} />
            </AppShell.Navbar>
        );
    },
);

NavigationSideBar.displayName = 'Navigation.SideBar';
