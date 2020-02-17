import 'coveo-styleguide/dist/css/CoveoStyleGuide.css';
import './style.scss';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Button} from 'react-vapor';

ReactDOM.render(
    <div>
        <Button primary>This is a test</Button>
    </div>,
    document.getElementById('App')
);
