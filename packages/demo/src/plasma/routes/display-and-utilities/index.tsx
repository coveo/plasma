import * as React from 'react';
import {Route, Switch, useRouteMatch} from 'react-router-dom';
import {Borders} from './pages/Borders';
import {Collapsible} from './pages/CollapsibleExamples';

export const DisplayAndUtilitiesRoutes: React.FunctionComponent = () => {
    const {path} = useRouteMatch();

    return (
        <Switch>
            <Route path={`${path}/Borders`} component={() => <Borders />} />
            <Route path={`${path}/Collapsible`} component={() => <Collapsible />} />
            <Route path={`${path}/CoveoExpLoader`} component={() => <div />} />
            <Route path={`${path}/RichPopover`} component={() => <div />} />
            <Route path={`${path}/SkeletonBlur`} component={() => <div />} />
        </Switch>
    );
};
