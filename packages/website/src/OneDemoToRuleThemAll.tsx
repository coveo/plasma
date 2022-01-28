import '@styles/main.scss';

import * as React from 'react';
import {Outlet, Route, Routes} from 'react-router-dom';

import logo from '../resources/plasma-logo.svg';
import ScrollToTop from './building-blocs/ScrollTop';
import {AdvancedRoutes} from './pages/advanced';
import {FeedbackAndInfoRoutes as FeedbackRoutes} from './pages/feedback';
import {InputRoutes as FormRoutes} from './pages/form';
import {FoundationsRoutes} from './pages/foundations';
import {Home} from './pages/Home';
import {LayoutRoutes} from './pages/layout';
import {NavigationRoutes} from './pages/navigation';
import {NotFound} from './pages/NotFound';
import SearchResultPage from './pages/SearchResultPage';
import {EngineProvider} from './search/engine/EngineProvider';
import StandaloneSearchBar from './search/StandaloneSearchBar';
import {Navigation} from './SideNavigation';

const Header = () => (
    <div id="header" className="flex demo-header">
        <a href="/#">
            <img src={logo} className="header-logo" />
        </a>
        <div className="flex space-around search">
            <StandaloneSearchBar />
        </div>
        <div className="right-side"></div>
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
