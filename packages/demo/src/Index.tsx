import React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactRedux from 'react-redux';
import {HashRouter} from 'react-router-dom';
import * as ReactVapor from 'react-vapor';

import {App} from './OneDemoToRuleThemAll';
import {Store} from './Store';

ReactVapor.Defaults.APP_ELEMENT = '#App';
ReactVapor.Defaults.MODAL_ROOT = '#Modals';
ReactVapor.Defaults.DROP_ROOT = '#Drops';

window.React = React;
window.ReactDOM = ReactDOM;
(window as any).ReactRedux = ReactRedux;
(window as any).ReactVapor = ReactVapor;

ReactDOM.render(
    <HashRouter>
        <ReactRedux.Provider store={Store}>
            <App />
        </ReactRedux.Provider>
    </HashRouter>,
    document.getElementById('App')
);
