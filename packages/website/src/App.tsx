import {AppShell, createTheme, DefaultMantineColor, Notifications, Plasmantine} from '@coveord/plasma-mantine';
import {CodeHighlightAdapterProvider, createShikiAdapter} from '@mantine/code-highlight';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {FunctionComponent, ReactNode, useMemo, useState} from 'react';
import {Outlet} from 'react-router-dom';
import {Navigation} from './Navigation.js';
import {EngineProvider} from './search/engine/EngineProvider.js';
import {ThemePickerProvider} from './theme-picker/ThemePickerContext.js';
import TopBar from './TopBar.js';

import './styles/colors.css';
import './styles/home.css';
import './styles/loading-screen.css';
import './styles/main.css';
import './styles/plasmaSearchBar.css';
import './styles/spacing.css';
import './styles/tile.css';

const loadShiki = async () => {
    const {createHighlighter} = await import('shiki/bundle/web');
    const shiki = await createHighlighter({
        langs: ['tsx', 'css'],
        themes: [],
    });

    return shiki;
};

const shikiAdapter = createShikiAdapter(loadShiki);

const queryClient = new QueryClient();

const App = () => (
    <QueryClientProvider client={queryClient}>
        <EngineProvider>
            <PlatformAppTheme>
                <CodeHighlightAdapterProvider adapter={shikiAdapter}>
                    <Notifications position="top-center" />
                    <AppShell navbar={{width: 245, breakpoint: undefined}} header={{height: 100}}>
                        <AppShell.Header>
                            <TopBar />
                        </AppShell.Header>
                        <AppShell.Navbar>
                            <Navigation />
                        </AppShell.Navbar>
                        <Outlet />
                    </AppShell>
                </CodeHighlightAdapterProvider>
            </PlatformAppTheme>
        </EngineProvider>
    </QueryClientProvider>
);

interface PlatformAppThemeProps {
    children?: ReactNode;
}

export const PlatformAppTheme: FunctionComponent<PlatformAppThemeProps> = ({children}) => {
    const [primaryColor, setPrimaryColor] = useState<DefaultMantineColor>('teal');
    const PlasmaWebsiteTheme = useMemo(
        () =>
            createTheme({
                primaryColor,
            }),
        [primaryColor],
    );

    return (
        <ThemePickerProvider value={{setPrimaryColor}}>
            <Plasmantine theme={PlasmaWebsiteTheme}>{children}</Plasmantine>
        </ThemePickerProvider>
    );
};

export default App;
