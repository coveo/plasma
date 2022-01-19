import '@styles/main.scss';

import * as React from 'react';
import {Outlet, Route, Routes} from 'react-router-dom';

import logo from '../resources/plasma-logo.svg';
import ScrollToTop from './building-blocs/ScrollTop';
import {DisplayAndUtilitiesRoutes} from './pages/display-and-utilities';
import {FeedbackAndInfoRoutes} from './pages/feedback-and-info';
import {FoundationsRoutes} from './pages/foundations';
import {Home} from './pages/Home';
import {InputRoutes} from './pages/input';
import {LayoutRoutes} from './pages/layout';
import {NotIncludedRoutes} from './pages/legacy';
import {NavigationRoutes} from './pages/navigation';
import {NotFound} from './pages/NotFound';
import {PlasmaSearchRoutes} from './pages/plasma-search';
import ResultPage from './pages/plasma-search/ResultPage';
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
            <Route path="plasma-search/*" element={<PlasmaSearchRoutes />} />
            <Route path="foundations/*" element={<FoundationsRoutes />} />
            <Route path="layout/*" element={<LayoutRoutes />} />
            <Route path="input/*" element={<InputRoutes />} />
            <Route path="navigation/*" element={<NavigationRoutes />} />
            <Route path="feedback-and-info/*" element={<FeedbackAndInfoRoutes />} />
            <Route path="display-and-utilities/*" element={<DisplayAndUtilitiesRoutes />} />
            <Route path="legacy/*" element={<NotIncludedRoutes />} />
            <Route path="foundations/*" element={<FoundationsRoutes />} />
            <Route path="*" element={<NotFound />} />
        </Route>
    </Routes>
);
