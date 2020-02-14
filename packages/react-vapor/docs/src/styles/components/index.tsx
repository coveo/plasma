import * as React from 'react';
import {Redirect, Route, RouteComponentProps} from 'react-router-dom';

import Banner from './Banner';
import ListBox from './ListBox';
import Member from './Member';
import Modal from './Modal';

const Components: React.FunctionComponent<RouteComponentProps> = ({match}) => (
    <>
        <Route path={`${match.url}/banner`} component={Banner} />
        <Route path={`${match.url}/list-box`} component={ListBox} />
        <Route path={`${match.url}/member`} component={Member} />
        <Route path={`${match.url}/modal`} component={Modal} />
        <Route exact path={`${match.url}/`} component={() => <Redirect to={`${match.url}/badge`} />} />
    </>
);

export default Components;
