import {AppShell, AppShellNavbarProps, Factory, factory, ScrollArea, Stack, useProps} from '@mantine/core';
import clsx from 'clsx';
import {FunctionComponent, ReactNode} from 'react';
import {useNavigation} from './Navigation.context.js';
import classes from './NavigationSideBar.module.css';
import {NavigationToggle, type NavigationToggleProps} from './NavigationToggle.js';

export type NavigationSideBarStylesNames = 'navbar';

export interface NavigationSideBarProps extends Omit<AppShellNavbarProps, 'hidden'> {
    /**
     * Content rendered at the top of the sidebar (e.g., a logo or app switcher).
     */
    header?: ReactNode;
    /**
     * Content pinned at the bottom of the sidebar, below the scrollable links.
     */
    footer?: ReactNode;
    /**
     * Whether the collapse toggle is rendered.
     * @default true
     */
    withToggle?: boolean;
    /**
     * Props passed down to the collapse toggle, e.g. its labels or disabled state.
     */
    toggleProps?: Omit<NavigationToggleProps, 'className'>;
}

export type NavigationSideBarFactory = Factory<{
    props: NavigationSideBarProps;
    ref: HTMLElement;
    stylesNames: NavigationSideBarStylesNames;
}>;

const defaultProps: Partial<NavigationSideBarProps> = {withToggle: true};

export const NavigationSideBar: FunctionComponent<NavigationSideBarProps> = factory<NavigationSideBarFactory>(
    ({ref, ..._props}) => {
        const {collapsed} = useNavigation();
        const props = useProps('NavigationSideBar', defaultProps, _props);
        const {children, header, footer, withToggle, toggleProps, ...rest} = props;

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
                {footer ? <AppShell.Section w="100%">{footer}</AppShell.Section> : null}
                {withToggle ? <NavigationToggle className={classes.collapseToggle} {...toggleProps} /> : null}
            </AppShell.Navbar>
        );
    },
);

NavigationSideBar.displayName = 'Navigation.SideBar';
