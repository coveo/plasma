import * as React from 'react';
import {Redirect, Route, RouteComponentProps} from 'react-router-dom';

import IconFillers from './IconFillers';
import IconModifiers from './IconModifiers';
import IconsList from './IconsList';

const Icons: React.FunctionComponent<RouteComponentProps> = ({match}) => {
    return (
        <>
            <Route path={`${match.url}/modifiers`} component={IconModifiers} />
            <Route path={`${match.url}/list`} component={IconsList} />
            <Route path={`${match.url}/fillers`} component={IconFillers} />
            <Route exact path={`${match.url}/`} component={() => <Redirect to={`${match.url}/list`} />} />
        </>
    );
};

export default Icons;
