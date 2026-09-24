import {
    factory,
    Drawer as MantineDrawer,
    type DrawerCssVariables,
    type DrawerStylesNames,
    type DrawerFactory as MantineDrawerFactory,
    type DrawerProps as MantineDrawerProps,
} from '@mantine/core';
import {Children, isValidElement, type ReactNode} from 'react';
import {Header, type HeaderDocAnchorProps, type HeaderProps} from '../Header/Header.js';
import classes from './Drawer.module.css';
import {
    DrawerFooter as PlasmaDrawerFooter,
    type DrawerFooterFactory,
    type DrawerFooterProps,
    type DrawerFooterStylesNames,
} from './DrawerFooter.js';

export interface DrawerProps extends MantineDrawerProps {
    /**
     * Description of the drawer, displayed below the title when `title` is a string.
     */
    description?: HeaderProps['description'];
    /**
     * Help link for the drawer, displayed in the header when `title` is a string.
     * Usually provides a link to external documentation or help resources.
     */
    help?: HeaderDocAnchorProps;
}

type PlasmaDrawerFactory = Omit<MantineDrawerFactory, 'staticComponents'> & {
    props: DrawerProps;
    staticComponents: MantineDrawerFactory['staticComponents'] & {
        Footer: typeof PlasmaDrawerFooter;
    };
};

const isDrawerFooter = (child: ReactNode) => isValidElement(child) && child.type === PlasmaDrawerFooter;

const PlasmaDrawer = factory<PlasmaDrawerFactory>(({children, description, help, ref, title, ...props}) => {
    const drawerChildren = Children.toArray(children);
    const content = drawerChildren.filter((child) => !isDrawerFooter(child));
    const footer = drawerChildren.filter(isDrawerFooter);
    const header =
        typeof title === 'string' ? (
            <Header titleComponent="div" variant="secondary" description={description}>
                {title}
                {help && <Header.DocAnchor {...help} />}
            </Header>
        ) : (
            title
        );

    return (
        <MantineDrawer ref={ref} title={header} {...props}>
            <div className={classes['scroll-area']}>{content}</div>
            {footer}
        </MantineDrawer>
    );
});

PlasmaDrawer.displayName = 'Drawer';
PlasmaDrawer.Root = MantineDrawer.Root;
PlasmaDrawer.Overlay = MantineDrawer.Overlay;
PlasmaDrawer.Content = MantineDrawer.Content;
PlasmaDrawer.Body = MantineDrawer.Body;
PlasmaDrawer.Header = MantineDrawer.Header;
PlasmaDrawer.Title = MantineDrawer.Title;
PlasmaDrawer.CloseButton = MantineDrawer.CloseButton;
PlasmaDrawer.Stack = MantineDrawer.Stack;
PlasmaDrawer.Footer = PlasmaDrawerFooter;

export const Drawer = PlasmaDrawer;
export type DrawerFactory = PlasmaDrawerFactory;
export type {DrawerCssVariables, DrawerRootProps, DrawerStylesNames} from '@mantine/core';

export namespace Drawer {
    export type Props = DrawerProps;
    export type StylesNames = DrawerStylesNames;
    export type CssVariables = DrawerCssVariables;
    export type Factory = DrawerFactory;

    export namespace Footer {
        export type Props = DrawerFooterProps;
        export type StylesNames = DrawerFooterStylesNames;
        export type Factory = DrawerFooterFactory;
    }
}
