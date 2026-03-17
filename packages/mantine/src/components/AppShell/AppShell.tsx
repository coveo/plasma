import {AppShellMainProps, Box, Factory, factory, AppShell} from '@mantine/core';
import classes from './AppShell.module.css';

export type AppShellMainFactory = Factory<{
    props: AppShellMainProps;
    ref: HTMLElement;
    compound: true;
}>;
const BaseAppShellMain = AppShell.Main;
const AppShellMain = factory<AppShellMainFactory>(({children, ...others}, ref) => (
    <BaseAppShellMain ref={ref} {...others}>
        <Box className={classes.content}>{children}</Box>
    </BaseAppShellMain>
));
AppShell.Main = AppShellMain;
AppShellMain.displayName = 'AppShell.Main';

AppShell.displayName = 'AppShell';
AppShell.Header.displayName = 'AppShell.Header';
AppShell.Navbar.displayName = 'AppShell.Navbar';
AppShell.Aside.displayName = 'AppShell.Aside';
AppShell.Footer.displayName = 'AppShell.Footer';
AppShell.Section.displayName = 'AppShell.Section';

export {AppShell};

export {type AppShellFactory, type AppShellProps} from '@mantine/core';
