import * as React from 'react';
import {Route, Switch, useRouteMatch} from 'react-router-dom';

import {FlatSelectExamples} from './pages/FlatSelectExamples';
import {BreadcrumbsExamples} from './pages/BreadcrumbsExamples';
import {OptionsCycleExamples} from './pages/OptionsCycleExamples';
import {PaginationExamples} from './pages/PaginationExamples';
import {SideNavigationExample} from './pages/SideNavigationExamples';
import {SubNavigationExamples} from './pages/SubNavigationExamples';

export const NavigationRoutes: React.FunctionComponent = () => {
    const {path} = useRouteMatch();
    return (
        <Switch>
            <Route path={`${path}/FlatSelect`} component={() => <FlatSelectExamples />} />
            <Route path={`${path}/OptionsCycle`} component={() => <OptionsCycleExamples />} />
            <Route path={`${path}/Breadcrumbs`} component={() => <BreadcrumbsExamples />} />
            <Route path={`${path}/Pagination`} component={() => <PaginationExamples />} />
            <Route path={`${path}/SideNavigation`} component={() => <SideNavigationExample />} />
            <Route path={`${path}/SubNavigation`} component={() => <SubNavigationExamples />} />
        </Switch>
    );
};
