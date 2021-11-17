import '@demo-styling/main.scss';

import loadable from '@loadable/component';
import * as React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import {Loading} from 'react-vapor';

import logo from '../resources/vapor_logo.svg';
import ScrollToTop from './demo-building-blocs/ScrollTop';
import Brand from './plasma/Brand';
import Home from './plasma/Home';
import {Navigation} from './plasma/navigation/SideNavigation';

const Header = () => (
    <div id="header" className="flex flex-center space-between" style={{minHeight: '90px'}}>
        <img src={logo} className="header-title" />
    </div>
);

const fallback = {fallback: <Loading fullContent />};
const LoadableComponents = loadable(() => import(/* webpackChunkName: "components" */ './components'), fallback);
const LoadableStyles = loadable(() => import(/* webpackChunkName: "styles" */ './styles'), fallback);

const Demo = () => (
    <Router>
        <ScrollToTop />
        <Header />
        <div className="flex flex-auto pb4" style={{height: 'calc(100vh - 90px)'}}>
            <Navigation />
            <Route path="/components" component={LoadableComponents} />
            <Route path="/styles" component={LoadableStyles} />
            <Route path="/brand" component={Brand} />
            <Route exact path="/" component={Home} />
        </div>
    </Router>
);

export const App = Demo;
