import '@styles/main.scss';

import * as React from 'react';
import {Outlet, Route, Routes} from 'react-router-dom';
import {FeatureFlags} from './FeatureFlags';

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
import {EngineProvider} from './searchBar/engine/EngineProvider';
import {StandaloneSearchBar} from './searchBar/StandaloneSearchBar';
import {Navigation} from './SideNavigation';

const Header = () => (
    <div id="header" className="flex demo-header">
        <a href="/#">
            <img src={logo} className="header-logo" />
        </a>
        <div className="flex space-around search">
            {/*
                To toggle the feature flag, copy and paste those commands in the dev tool console:
                sessionStorage.setItem('ff_plasma-search-bar', true) to show the bar
                sessionStorage.setItem('ff_plasma-search-bar', false) to hide the bar
                You need to reload the page for it to take effect.
             */}
            {FeatureFlags.get('plasma-search-bar') && (
                <EngineProvider>
                    <StandaloneSearchBar id="header" />
                </EngineProvider>
            )}
        </div>
        <div className="right-side"></div>
    </div>
);

// Child routes are rendered in <Outlet />
const AppLayout = () => (
    <>
        <ScrollToTop />
        <Header />
        <div className="flex flex-auto pb4" style={{height: 'calc(100vh - 90px)'}}>
            <Navigation />
            <div className="coveo-form flex-auto relative overflow-auto demo-content">
                <Outlet />
            </div>
        </div>
    </>
);

export const App = () => (
    <Routes>
        <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
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
