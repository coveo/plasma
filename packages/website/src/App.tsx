import {AppShell, Notifications, Plasmantine} from '@coveord/plasma-mantine';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {Outlet} from 'react-router-dom';
import {Navigation} from './Navigation';
import TopBar from './TopBar';
import {EngineProvider} from './search/engine/EngineProvider';

import './styles/colors.css';
import './styles/home.css';
import './styles/loading-screen.css';
import './styles/main.css';
import './styles/plasmaSearchBar.css';
import './styles/props-table.css';
import './styles/spacing.css';
import './styles/tile.css';

const queryClient = new QueryClient();

const App = () => (
    <QueryClientProvider client={queryClient}>
        <EngineProvider>
            <Plasmantine>
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
            </Plasmantine>
        </EngineProvider>
    </QueryClientProvider>
);

export default App;
