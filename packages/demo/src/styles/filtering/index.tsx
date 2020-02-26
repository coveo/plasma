import * as React from 'react';
import {Redirect, Route, RouteComponentProps} from 'react-router-dom';

import ValuePopup from './ValuePopup';

const Filtering: React.FunctionComponent<RouteComponentProps> = ({match}) => {
    return (
        <>
            <Route path={`${match.url}/value-popup`} component={ValuePopup} />
            <Route exact path={`${match.url}/`} component={() => <Redirect to={`${match.url}/picker`} />} />
        </>
    );
};

export default Filtering;
