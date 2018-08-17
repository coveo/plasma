import 'codemirror/lib/codemirror.css';
import 'coveo-styleguide/dist/css/CoveoStyleGuide.css';
import './style.scss';

import * as React from 'react';
import {render as ReactDOMRender} from 'react-dom';
import {Provider} from 'react-redux';

import {QueryExpressionEditorExample} from '../src/components/queryExpressionEditor/examples/QueryExpressionEditorExample';

import {ReactVaporStore} from './ReactVaporStore';

class App extends React.Component<any, any> {
    render() {
        return (
            <Provider store={ReactVaporStore}>

                <div className='coveo-form bg-dark-blue'>
                    <QueryExpressionEditorExample />
                </div>
            </Provider>
        );
    }
}

ReactDOMRender(<App />, document.getElementById('App'));
