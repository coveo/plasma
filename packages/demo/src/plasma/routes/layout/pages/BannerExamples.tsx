import * as React from 'react';
import {BannerContainer, Section} from 'react-vapor';

import VaporComponent from '../../../../demo-building-blocs/VaporComponent';

// start-print
export const BannerExamples: React.FunctionComponent = () => (
    <VaporComponent id="banner" title="Banner" withSource>
        <Section level={3} title="Empty banner">
            <BannerContainer />
        </Section>
    </VaporComponent>
);
// stop-print
