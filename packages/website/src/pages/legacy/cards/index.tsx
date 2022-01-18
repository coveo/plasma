import * as React from 'react';
import {Route, Routes} from 'react-router-dom';

import {NotFound} from '../../NotFound';
import Home from './HomeExamples';
import Material from './MaterialExamples';
import Wizard from './WizardExamples';

export const CardRoutes: React.FunctionComponent = () => (
    <Routes>
        <Route path="Home" element={<Home />} />
        <Route path="Material" element={<Material />} />
        <Route path="Wizard" element={<Wizard />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
);
