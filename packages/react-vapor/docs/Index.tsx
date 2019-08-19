import 'codemirror/lib/codemirror.css';
import 'coveo-styleguide/dist/css/CoveoStyleGuide.css';
import './style.scss';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import {Defaults} from '../src/Defaults';
import {ReactVaporStore} from './ReactVaporStore';
import {App} from './src/OneDemoToRuleThemAll';

Defaults.APP_ELEMENT = '#App';
Defaults.MODAL_ROOT = '#Modals';

ReactDOM.render(
    <Provider store={ReactVaporStore}>
        <App />
    </Provider>,
    document.getElementById('App')
);
