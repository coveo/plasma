import {AppShell, Notifications} from '@coveord/plasma-mantine';
import {CodeHighlightAdapterProvider, createShikiAdapter} from '@mantine/code-highlight';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {Outlet} from 'react-router-dom';
import {Navigation} from './Navigation.js';
import {EngineProvider} from './search/engine/EngineProvider.js';
import TopBar from './TopBar.js';

import './styles/colors.css';
import './styles/home.css';
import './styles/loading-screen.css';
import './styles/main.css';
import './styles/plasmaSearchBar.css';
import './styles/spacing.css';
import './styles/tile.css';
import {Theme} from './theme-picker/Theme.js';

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
            <Theme>
                <CodeHighlightAdapterProvider adapter={shikiAdapter}>
                    <Notifications position="top-center" />
                    <AppShell navbar={{width: 245, breakpoint: 0}} header={{height: 100}} layout="default" withBorder>
                        <AppShell.Header>
                            <TopBar />
                        </AppShell.Header>
                        <AppShell.Navbar>
                            <Navigation />
                        </AppShell.Navbar>
                        <Outlet />
                    </AppShell>
                </CodeHighlightAdapterProvider>
            </Theme>
        </EngineProvider>
    </QueryClientProvider>
);

export default App;
