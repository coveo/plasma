import * as React from 'react';
import {Route, Routes} from 'react-router-dom';

import {NotFound} from '../NotFound';
import {Headings} from './HeadingsExamples';
import {IconsList} from './IconsList';
import {Links} from './LinksExamples';
import {SvgExamples} from './SvgExamples';
import {Whitespace} from './WhitespaceExamples';

export const FoundationsRoutes: React.FunctionComponent = () => (
    <Routes>
        <Route path="Iconography" element={<IconsList />} />
        <Route path="SVG" element={<SvgExamples />} />
        <Route path="Headings" element={<Headings />} />
        <Route path="Links" element={<Links />} />
        <Route path="Whitespace" element={<Whitespace />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
);

export default FoundationsRoutes;
