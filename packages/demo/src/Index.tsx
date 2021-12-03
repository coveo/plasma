import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {HashRouter} from 'react-router-dom';
import {Defaults} from 'react-vapor';

import {App} from './OneDemoToRuleThemAll';
import {Store} from './Store';

Defaults.APP_ELEMENT = '#App';
Defaults.MODAL_ROOT = '#Modals';
Defaults.DROP_ROOT = '#Drops';

ReactDOM.render(
    <HashRouter>
        <Provider store={Store}>
            <App />
        </Provider>
    </HashRouter>,
    document.getElementById('App')
);
