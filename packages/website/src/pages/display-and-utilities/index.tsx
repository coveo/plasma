import * as React from 'react';
import {Route, Routes} from 'react-router-dom';

import {NotFound} from '../NotFound';
import {Borders} from './BordersExamples';
import {Collapsible} from './CollapsibleExamples';

export const DisplayAndUtilitiesRoutes: React.FunctionComponent = () => (
    <Routes>
        <Route path="Borders" element={<Borders />} />
        <Route path="Collapsible" element={<Collapsible />} />
        <Route path="CoveoExpLoader" element={<div />} />
        <Route path="RichPopover" element={<div />} />
        <Route path="SkeletonBlur" element={<div />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
);
