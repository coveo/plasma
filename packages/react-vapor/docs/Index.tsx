import 'codemirror/lib/codemirror.css';
import 'coveo-styleguide/dist/css/CoveoStyleGuide.css';
import './style.scss';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {Defaults} from '../src/Defaults';
import {ComponentsApp} from './src/components/ComponentsApp';

export const Header: React.FunctionComponent = () => {
    return (
        <div className="flex flex-colum flex-center">
            <div className="h1 p2">React Vapor</div>
        </div>
    );
};

Defaults.APP_ELEMENT = '#App';
Defaults.MODAL_ROOT = '#Modals';
ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<ComponentsApp />, document.getElementById('App'));
