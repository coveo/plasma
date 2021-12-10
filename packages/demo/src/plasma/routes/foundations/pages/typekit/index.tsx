import * as React from 'react';
import {Route, Routes} from 'react-router-dom';

import {Headings} from './Headings';
import {IconColor} from './IconColorExamples';
import {LineHeight} from './LineHeightExamples';
import {Links} from './LinksExamples';
import {Lists} from './ListsExamples';
import {TextColor} from './TextColorExamples';
import {Utilities} from './UtilitiesExamples';
import {Whitespace} from './WhitespaceExamples';

export const Typekit: React.FunctionComponent = () => (
    <Routes>
        <Route path="Headings" element={<Headings />} />
        <Route path="IconColor" element={<IconColor />} />
        <Route path="LineHeight" element={<LineHeight />} />
        <Route path="Links" element={<Links />} />
        <Route path="Lists" element={<Lists />} />
        <Route path="TextColor" element={<TextColor />} />
        <Route path="Utilities" element={<Utilities />} />
        <Route path="Whitespace" element={<Whitespace />} />
    </Routes>
);
