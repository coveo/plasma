import * as React from 'react';
import {Redirect, Route, RouteComponentProps} from 'react-router-dom';

import Iconography from './Iconography';
import IconsList from './IconsList';

const Icons: React.FunctionComponent<RouteComponentProps> = ({match}) => (
    <>
        <Route path={`${match.url}/list`} component={IconsList} />
        <Route path={`${match.url}/iconography`} component={Iconography} />
        <Route exact path={`${match.url}/`} component={() => <Redirect to={`${match.url}/list`} />} />
    </>
);

export default Icons;
