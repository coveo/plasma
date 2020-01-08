import 'codemirror/lib/codemirror.css';
import 'coveo-styleguide/dist/css/CoveoStyleGuide.css';
import './style.scss';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import {Defaults} from '../src/Defaults';
import {App} from './src/OneDemoToRuleThemAll';
import {ExamplesStore} from './Store';

Defaults.APP_ELEMENT = '#App';
Defaults.MODAL_ROOT = '#Modals';
Defaults.DROP_ROOT = '#Drops';

ReactDOM.render(
    <Provider store={ExamplesStore}>
        <App />
    </Provider>,
    document.getElementById('App')
);
