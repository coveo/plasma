import '@demo-styling/main.scss';

import * as React from 'react';
import {Outlet, Route, Routes} from 'react-router-dom';

import logo from '../resources/plasma-logo.svg';
import ScrollToTop from './demo-building-blocs/ScrollTop';
import {Brand} from './plasma/Brand';
import {Home} from './plasma/Home';
import {Navigation} from './plasma/navigation/SideNavigation';
import {NotFound} from './plasma/NotFound';
import {DisplayAndUtilitiesRoutes} from './plasma/routes/display-and-utilities';
import {FeedbackAndInfoRoutes} from './plasma/routes/feedback-and-info';
import {FoundationsRoutes} from './plasma/routes/foundations';
import {InputRoutes} from './plasma/routes/input';
import {LayoutRoutes} from './plasma/routes/layout';
import {NotIncludedRoutes} from './plasma/routes/legacy';
import {NavigationRoutes} from './plasma/routes/navigation';
import {StandaloneSearchBar} from './searchBar/StandaloneSearchBar';
import {EngineProvider} from './searchBar/engine/EngineProvider';

const Header = () => (
    <div id="header" className="flex demo-header">
        <a href="/#">
            <img src={logo} className="header-logo" />
        </a>
        <div className="flex space-around search">
            <EngineProvider>
                <StandaloneSearchBar id="patateKing" />
            </EngineProvider>
        </div>
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
            <Route path="brand/*" element={<Brand />} />
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
