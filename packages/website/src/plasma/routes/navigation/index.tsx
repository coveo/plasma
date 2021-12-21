import * as React from 'react';
import {Route, Routes} from 'react-router-dom';

import {FlatSelectExamples} from './pages/FlatSelectExamples';
import {BreadcrumbsExamples} from './pages/BreadcrumbsExamples';
import {OptionsCycleExamples} from './pages/OptionsCycleExamples';
import {PaginationExamples} from './pages/PaginationExamples';
import {SideNavigationExample} from './pages/SideNavigationExamples';
import {SubNavigationExamples} from './pages/SubNavigationExamples';
import {NotFound} from '../../NotFound';

export const NavigationRoutes: React.FunctionComponent = () => (
    <Routes>
        <Route path="FlatSelect" element={<FlatSelectExamples />} />
        <Route path="OptionsCycle" element={<OptionsCycleExamples />} />
        <Route path="Breadcrumbs" element={<BreadcrumbsExamples />} />
        <Route path="Pagination" element={<PaginationExamples />} />
        <Route path="SideNavigation" element={<SideNavigationExample />} />
        <Route path="SubNavigation" element={<SubNavigationExamples />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
);
