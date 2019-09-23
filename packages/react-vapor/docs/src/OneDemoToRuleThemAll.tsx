import './demo-styling/main.scss';

import loadable from '@loadable/component';
import * as React from 'react';
import {HashRouter as Router, Link, Redirect, Route} from 'react-router-dom';
import {Loading} from '../../src/components/loading/Loading';

function TopNav() {
    return (
        <div>
            <Link to="/styles" className="btn">
                Styles
            </Link>
            <Link to="/components" className="btn">
                Components
            </Link>
        </div>
    );
}

function Header() {
    return (
        <div id="header" className="header flex flex-center space-between p2" style={{minHeight: '65px'}}>
            <h1 className="h1">
                Vapor
                {' / '}
                <Route path="/styles" component={() => <span>Styles</span>} />
                <Route path="/components" component={() => <span>Components</span>} />
            </h1>
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
            <Header />
            <div className="container flex-auto overflow-auto" style={{height: 'calc(100% - 65px)'}}>
                <Route path="/components" component={LoadableComponents} />
                <Route path="/styles" component={LoadableStyles} />
                <Route exact path="/" component={() => <Redirect to="/components" />} />
            </div>
        </Router>
    );
}

export const App = Demo;
