import * as React from 'react';
import {Route, Switch} from 'react-router-dom';

export const NavigationRoutes: React.FunctionComponent = () => (
    <Switch>
        <Route exact path="/FlatSelect" component={() => <div />} />
        <Route exact path="/OptionsCycle" component={() => <div />} />
        <Route exact path="/Header" component={() => <div />} />
        <Route exact path="/Pagination" component={() => <div />} />
        <Route exact path="/SideNavigation" component={() => <div />} />
        <Route exact path="/Subnavigation" component={() => <div />} />
    </Switch>
);
