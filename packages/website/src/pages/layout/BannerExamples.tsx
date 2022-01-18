import * as React from 'react';
import {BannerContainer, Section} from '@coveord/plasma-react';

import VaporComponent from '../../building-blocs/VaporComponent';

// start-print
export const BannerExamples: React.FunctionComponent = () => (
    <VaporComponent id="Banner" title="Banner" withSource>
        <Section level={3} title="Empty banner">
            <BannerContainer />
        </Section>
    </VaporComponent>
);
// stop-print
