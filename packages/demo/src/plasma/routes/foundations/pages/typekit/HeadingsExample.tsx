import * as React from 'react';

import VaporComponent from '../../../../../demo-building-blocs/VaporComponent';
import Examples from './Headings/Example';

export const Headings = () => (
    <VaporComponent
        id="headings"
        title="Headings"
        usage="All HTML headings, `h1` through `h6`, are available."
        withSource
    >
        <Examples />
    </VaporComponent>
);
