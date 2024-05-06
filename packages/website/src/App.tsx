import {AppShell, Notifications, Plasmantine} from '@coveord/plasma-mantine';
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

const App = () => (
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
);

export default App;
