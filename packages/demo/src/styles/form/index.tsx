import * as React from 'react';
import {Redirect, Route, RouteComponentProps} from 'react-router-dom';

import ProgressBar from './ProgressBar';

const FormControls: React.FunctionComponent<RouteComponentProps> = ({match}) => (
    <>
        <Route path={`${match.url}/progress-bar`} component={ProgressBar} />
        <Route exact path={`${match.url}/`} component={() => <Redirect to={`${match.url}/text-input`} />} />
    </>
);

export default FormControls;
