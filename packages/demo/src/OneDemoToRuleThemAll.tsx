import '@demo-styling/main.scss';

import loadable from '@loadable/component';
import * as React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import {Loading} from 'react-vapor';

import logo from '../resources/plasma-logo.svg';
import ScrollToTop from './demo-building-blocs/ScrollTop';
import Brand from './plasma/Brand';
import {DisplayAndUtilitiesRoutes} from './plasma/display-and-utilities';
import Home from './plasma/Home';
import {Navigation} from './plasma/navigation/SideNavigation';
import {NotIncludedRoutes} from './plasma/not-included';
import {FeedbackAndInfoRoutes} from './plasma/routes/feedback-and-info';
import {FoundationsRoutes} from './plasma/routes/foundation';
import {InputRoutes} from './plasma/routes/input';
import {LayoutRoutes} from './plasma/routes/layout';
import {NavigationRoutes} from './plasma/routes/navigation';

const Header = () => (
    <div id="header" className="flex flex-center space-between demo-header">
        <img src={logo} className="header-logo" />
    </div>
);

/** @deprecated */
const fallback = {fallback: <Loading fullContent />};
/** @deprecated */
const LoadableComponents = loadable(() => import(/* webpackChunkName: "components" */ './components'), fallback);
/** @deprecated */
const LoadableStyles = loadable(() => import(/* webpackChunkName: "styles" */ './styles'), fallback);

const Demo = () => (
    <Router>
        <ScrollToTop />
        <Header />
        <div className="flex flex-auto pb4" style={{height: 'calc(100vh - 90px)'}}>
            <Navigation />
            <Route path="/components" component={LoadableComponents} />
            <Route path="/styles" component={LoadableStyles} />
            <Route path="/foundations" component={FoundationsRoutes} />
            <Route path="/layout" component={LayoutRoutes} />
            <Route path="/input" component={InputRoutes} />
            <Route path="/navigation" component={NavigationRoutes} />
            <Route path="/feedback-and-info" component={FeedbackAndInfoRoutes} />
            <Route path="/display-and-utilities" component={DisplayAndUtilitiesRoutes} />
            <Route path="/not-included" component={NotIncludedRoutes} />
            <Route path="/brand" component={Brand} />
            <Route exact path="/" component={Home} />
        </div>
    </Router>
);

export const App = Demo;
