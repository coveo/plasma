import * as React from 'react';
import {Route, Switch} from 'react-router-dom';

export const DisplayAndUtilitiesRoutes: React.FunctionComponent = () => (
    <Switch>
        <Route path="/borders" component={() => <div />} />
        <Route path="/Collapsible" component={() => <div />} />
        <Route path="/CoveoExpLoader" component={() => <div />} />
        <Route path="/RichPopover" component={() => <div />} />
        <Route path="/SkeletonBlur" component={() => <div />} />
    </Switch>
);
