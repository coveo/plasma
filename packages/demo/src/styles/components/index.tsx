import * as React from 'react';
import {Redirect, Route, RouteComponentProps} from 'react-router-dom';

import Banner from './Banner';
import Member from './Member';

const Components: React.FunctionComponent<RouteComponentProps> = ({match}) => (
    <>
        <Route path={`${match.url}/banner`} component={Banner} />
        <Route path={`${match.url}/member`} component={Member} />
        <Route exact path={`${match.url}/`} component={() => <Redirect to={`${match.url}/banner`} />} />
    </>
);

export default Components;
