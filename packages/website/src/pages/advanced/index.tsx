import * as React from 'react';
import {Route, Routes} from 'react-router-dom';

import {NotFound} from '../NotFound';
import {ActionBarExamples} from './ActionBarExamples';
import {InfoTokenExamples} from './InfoTokenExamples';
import {LinkSvgExamples} from './LinkSvgExamples';
import {ListBoxExamples} from './ListBoxExamples';
import {OptionsCycleExamples} from './OptionsCycleExamples';
import {PartialStringMatchExamples} from './PartialStringMatchExamples';
import {SlideYExamples} from './SlideYExamples';

export const AdvancedRoutes: React.FunctionComponent = () => (
    <Routes>
        <Route path="ActionBar" element={<ActionBarExamples />} />
        <Route path="InfoToken" element={<InfoTokenExamples />} />
        <Route path="LinkSvg" element={<LinkSvgExamples />} />
        <Route path="ListBox" element={<ListBoxExamples />} />
        <Route path="OptionsCycle" element={<OptionsCycleExamples />} />
        <Route path="PartialStringMatch" element={<PartialStringMatchExamples />} />
        <Route path="SlideY" element={<SlideYExamples />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
);
