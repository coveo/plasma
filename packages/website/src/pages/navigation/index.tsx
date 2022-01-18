import * as React from 'react';
import {Route, Routes} from 'react-router-dom';

import {NotFound} from '../NotFound';
import {BreadcrumbsExamples} from './BreadcrumbsExamples';
import {FlatSelectExamples} from './FlatSelectExamples';
import {OptionsCycleExamples} from './OptionsCycleExamples';
import {PaginationExamples} from './PaginationExamples';
import {SideNavigationExample} from './SideNavigationExamples';
import {SubNavigationExamples} from './SubNavigationExamples';

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
