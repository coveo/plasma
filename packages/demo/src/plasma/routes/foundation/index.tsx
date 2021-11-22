import * as React from 'react';
import {Route, Switch, useRouteMatch} from 'react-router-dom';

import {IconsList} from './pages/IconsList';

export const FoundationsRoutes: React.FunctionComponent = () => {
    const {path} = useRouteMatch();

    return (
        <Switch>
            <Route path={`${path}/Effects`} component={() => <div />} />
            <Route path={`${path}/Iconography`} component={() => <IconsList />} />
            <Route path={`${path}/Illustration`} component={() => <div />} />
            <Route path={`${path}/Palette`} component={() => <div />} />
            <Route path={`${path}/Typekit`} component={() => <div />} />
        </Switch>
    );
};
