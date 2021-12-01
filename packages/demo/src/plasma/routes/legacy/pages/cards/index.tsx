import * as React from 'react';
import {Redirect, Route, Switch, useRouteMatch} from 'react-router-dom';

import Home from './HomeExamples';
import Material from './MaterialExamples';
import Wizard from './WizardExamples';

export const CardRoutes: React.FunctionComponent = () => {
    const {path} = useRouteMatch();
    return (
        <Switch>
            <Route path={`${path}/Home`} component={Home} />
            <Route path={`${path}/Material`} component={Material} />
            <Route path={`${path}/Wizard`} component={Wizard} />
            <Route exact path={`${path}/`} component={() => <Redirect to={`${path}/card`} />} />
        </Switch>
    );
};
