import * as React from 'react';
import {Redirect, Route, Switch, useRouteMatch} from 'react-router-dom';

import Home from './Home';
import Material from './Material';
import Wizard from './Wizard';

export const CardRoutes: React.FunctionComponent = () => {
    const {path} = useRouteMatch();
    return (
        <Switch>
            <Route path={`${path}/home`} component={Home} />
            <Route path={`${path}/material`} component={Material} />
            <Route path={`${path}/wizard`} component={Wizard} />
            <Route exact path={`${path}/`} component={() => <Redirect to={`${path}/card`} />} />
        </Switch>
    );
};
