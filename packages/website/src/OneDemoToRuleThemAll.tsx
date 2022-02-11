import '@styles/main.scss';

import {Svg} from '@coveord/plasma-react';
import loadable from '@loadable/component';
import * as React from 'react';
import {Outlet, Route, Routes} from 'react-router-dom';

import logo from '../resources/plasma-logo.svg';
import {PlasmaLoading} from './building-blocs/PlasmaLoading';
import ScrollToTop from './building-blocs/ScrollTop';
import {Home} from './pages/Home';
import SearchResultPage from './pages/SearchResultPage';
import {EngineProvider} from './search/engine/EngineProvider';
import StandaloneSearchBar from './search/StandaloneSearchBar';
import {Navigation} from './SideNavigation';

const FoundationsRoutes = loadable(() => import('./pages/foundations'), {fallback: <PlasmaLoading />});
const LayoutRoutes = loadable(() => import('./pages/layout'), {fallback: <PlasmaLoading />});
const NavigationRoutes = loadable(() => import('./pages/navigation'), {fallback: <PlasmaLoading />});
const FormRoutes = loadable(() => import('./pages/form'), {fallback: <PlasmaLoading />});
const FeedbackRoutes = loadable(() => import('./pages/feedback'), {fallback: <PlasmaLoading />});
const AdvancedRoutes = loadable(() => import('./pages/advanced'), {fallback: <PlasmaLoading />});
const NotFound = loadable(() => import('./pages/NotFound'), {fallback: <PlasmaLoading />});

const Header = () => (
    <div id="header" className="demo-header">
        <a href="/#" className="header-logo-link">
            <img src={logo} className="header-logo" alt="Plasma Design System" />
        </a>
        <StandaloneSearchBar />
        <div className="right-side">
            <a href="https://github.com/coveo/plasma#readme" aria-label="README" target="_blank">
                <Svg svgName="githubMark" svgClass="icon mod-32 mod-white" />
            </a>
        </div>
    </div>
);

// Child routes are rendered in <Outlet />
const AppLayout = () => (
    <EngineProvider>
        <ScrollToTop />
        <Header />
        <div className="flex flex-auto pb4" style={{height: 'calc(100vh - 90px)'}}>
            <Navigation />
            <div className="coveo-form flex-auto relative overflow-auto demo-content">
                <Outlet />
            </div>
        </div>
    </EngineProvider>
);

export const App = () => (
    <Routes>
        <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="search/*" element={<SearchResultPage />} />
            <Route path="foundations/*" element={<FoundationsRoutes />} />
            <Route path="form/*" element={<FormRoutes />} />
            <Route path="layout/*" element={<LayoutRoutes />} />
            <Route path="navigation/*" element={<NavigationRoutes />} />
            <Route path="feedback/*" element={<FeedbackRoutes />} />
            <Route path="advanced/*" element={<AdvancedRoutes />} />
            <Route path="*" element={<NotFound />} />
        </Route>
    </Routes>
);
