import '@demo-styling/main.scss';

import * as React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';

import logo from '../resources/plasma-logo.svg';
import ScrollToTop from './demo-building-blocs/ScrollTop';
import Brand from './plasma/Brand';
import Home from './plasma/Home';
import {Navigation} from './plasma/navigation/SideNavigation';
import {DisplayAndUtilitiesRoutes} from './plasma/routes/display-and-utilities';
import {FeedbackAndInfoRoutes} from './plasma/routes/feedback-and-info';
import {FoundationsRoutes} from './plasma/routes/foundations';
import {InputRoutes} from './plasma/routes/input/index';
import {LayoutRoutes} from './plasma/routes/layout';
import {NavigationRoutes} from './plasma/routes/navigation';
import {NotIncludedRoutes} from './plasma/routes/legacy';

const Header = () => (
    <div id="header" className="flex flex-center space-between demo-header">
        <img src={logo} className="header-logo" />
    </div>
);

const Demo = () => (
    <Router>
        <ScrollToTop />
        <Header />
        <div className="flex flex-auto pb4" style={{height: 'calc(100vh - 90px)'}}>
            <Navigation />
            <div className="coveo-form flex-auto relative overflow-auto demo-content">
                <Route path="/foundations" component={FoundationsRoutes} />
                <Route path="/layout" component={LayoutRoutes} />
                <Route path="/input" component={InputRoutes} />
                <Route path="/navigation" component={NavigationRoutes} />
                <Route path="/feedback-and-info" component={FeedbackAndInfoRoutes} />
                <Route path="/display-and-utilities" component={DisplayAndUtilitiesRoutes} />
                <Route path="/legacy" component={NotIncludedRoutes} />
                <Route path="/brand" component={Brand} />
                <Route exact path="/" component={Home} />
            </div>
        </div>
    </Router>
);

export const App = Demo;
