import * as React from 'react';
import {Route, Routes} from 'react-router-dom';

import {NotFound} from '../NotFound';
import {BreadcrumbsExamples} from './BreadcrumbsExamples';
import {SideNavigationExample} from './SideNavigationExamples';
import {SubNavigationExamples} from './SubNavigationExamples';
import {TabsExamples} from './TabsExamples';

export const NavigationRoutes: React.FunctionComponent = () => (
    <Routes>
        <Route path="Breadcrumbs" element={<BreadcrumbsExamples />} />
        <Route path="SideNavigation" element={<SideNavigationExample />} />
        <Route path="SubNavigation" element={<SubNavigationExamples />} />
        <Route path="Tabs" element={<TabsExamples />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
);
export default NavigationRoutes;
