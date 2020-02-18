import * as React from 'react';
import {Redirect, Route, RouteComponentProps} from 'react-router-dom';

import IconsList from './IconsList';

const Icons: React.FunctionComponent<RouteComponentProps> = ({match}) => {
    return (
        <>
            <Route path={`${match.url}/list`} component={IconsList} />
            <Route exact path={`${match.url}/`} component={() => <Redirect to={`${match.url}/list`} />} />
        </>
    );
};

export default Icons;
