/* And to Vapor bind them */
import './demo-styling/main.scss';

import loadable from '@loadable/component';
import * as React from 'react';
import {HashRouter as Router, Redirect, Route} from 'react-router-dom';
import {Loading, TabNavigation} from 'react-vapor';
import ScrollToTop from './demo-building-blocs/ScrollTop';

import logo from '../resources/vapor_logo.svg';
import TopNavLink from './demo-building-blocs/TopNavLink';

function TopNav() {
    return (
        <TabNavigation className="mod-no-border top-navigation">
            <TopNavLink name="Styles" href="/styles" />
            <TopNavLink name="Components" href="/components" />
        </TabNavigation>
    );
}

function Header() {
    return (
        <div id="header" className="flex flex-center space-between p2" style={{minHeight: '90px'}}>
            <img src={logo} className="header-title" />
            <TopNav />
        </div>
    );
}

const fallback = {fallback: <Loading fullContent />};
const LoadableComponents = loadable(() => import(/* webpackChunkName: "components" */ './components'), fallback);
const LoadableStyles = loadable(() => import(/* webpackChunkName: "styles" */ './styles'), fallback);

function Demo() {
    return (
        <Router>
            <ScrollToTop />
            <Header />
            <div className="flex flex-auto pb4" style={{height: 'calc(100vh - 90px)'}}>
                <Route path="/components" component={LoadableComponents} />
                <Route path="/styles" component={LoadableStyles} />
                <Route exact path="/" component={() => <Redirect to="/components" />} />
            </div>
        </Router>
    );
}

export const App = Demo;
