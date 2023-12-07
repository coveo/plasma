import {AppShell, Notifications, Plasmantine} from '@coveord/plasma-mantine';
import '@mantine/core/styles.css';
import {Provider} from 'react-redux';
import {Outlet} from 'react-router-dom';
import {Navigation} from './Navigation';
import {Store} from './Store';
import TopBar from './TopBar';
import LegacyWarningBanner from './building-blocs/LegacyWarningBanner';
import {EngineProvider} from './search/engine/EngineProvider';
import './styles/colors.css';
import './styles/github-button.css';
import './styles/home.css';
import './styles/loading-screen.css';
import './styles/main.scss';
import './styles/page-layout.css';
import './styles/plasmaSearchBar.css';
import './styles/props-table.css';
import './styles/spacing.css';
import './styles/tile.css';

const App = () => (
    <EngineProvider>
        <Provider store={Store}>
            <Plasmantine>
                <Notifications position="top-center" />
                <AppShell navbar={{width: 245, breakpoint: 'sm'}} header={{height: 100}}>
                    <AppShell.Header>
                        <TopBar />
                        <LegacyWarningBanner />
                    </AppShell.Header>
                    <AppShell.Navbar>
                        <Navigation />
                    </AppShell.Navbar>
                    <Outlet />
                </AppShell>
            </Plasmantine>
        </Provider>
    </EngineProvider>
);

export default App;
