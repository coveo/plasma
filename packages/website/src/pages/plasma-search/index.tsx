import * as React from 'react';
import {Route, Routes} from 'react-router-dom';

import {NotFound} from '../NotFound';
import ResultPage from './ResultPage';

export const PlasmaSearchRoutes: React.FunctionComponent = () => (
    <Routes>
        <Route path="ResultPage" element={<ResultPage />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
);
