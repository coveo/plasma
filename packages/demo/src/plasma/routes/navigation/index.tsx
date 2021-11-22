import * as React from 'react';
import {Route, Switch, useRouteMatch} from 'react-router-dom';

import {FlatSelectExamples} from './pages/FlatSelectExamples';
import {BreadcrumbExamples} from './pages/BreadcrumbExamples';
import {OptionsCycleExamples} from './pages/OptionsCycleExamples';
import {PaginationExamples} from './pages/PaginationExamples';
import {SideNavigationExample} from './pages/SideNavigationExample';
import {SubNavigationExamples} from './pages/SubNavigationExamples';

export const NavigationRoutes: React.FunctionComponent = () => {
    const {path} = useRouteMatch();
    return (
        <Switch>
            <Route path={`${path}/FlatSelect`} component={() => <FlatSelectExamples />} />
            <Route path={`${path}/OptionsCycle`} component={() => <OptionsCycleExamples />} />
            <Route path={`${path}/Breadcrumbs`} component={() => <BreadcrumbExamples />} />
            <Route path={`${path}/Pagination`} component={() => <PaginationExamples />} />
            <Route path={`${path}/SideNavigation`} component={() => <SideNavigationExample />} />
            <Route path={`${path}/Subnavigation`} component={() => <SubNavigationExamples />} />
        </Switch>
    );
};
