import {AppShell, Notifications, Plasmantine} from '@coveord/plasma-mantine';
import '@mantine/core/styles.css';
import {Provider} from 'react-redux';
import {Outlet} from 'react-router-dom';
import {Navigation} from './Navigation';
import {Store} from './Store';
import TopBar from './TopBar';
import LegacyWarningBanner from './building-blocs/LegacyWarningBanner';
import {EngineProvider} from './search/engine/EngineProvider';
import './styles/colors.scss';
import './styles/github-button.scss';
import './styles/home.scss';
import './styles/loading-screen.css';
import './styles/main.scss';
import './styles/page-layout.scss';
import './styles/plasmaSearchBar.scss';
import './styles/props-table.scss';
import './styles/spacing.scss';
import './styles/tile.scss';

const App = () => (
    <EngineProvider>
        <Provider store={Store}>
            <Plasmantine>
                <Notifications position="top-center" />
                <AppShell navbar={<Navigation />} header={<TopBar />} padding={0}>
                    <LegacyWarningBanner />
                    <Outlet />
                </AppShell>
            </Plasmantine>
        </Provider>
    </EngineProvider>
);

export default App;
