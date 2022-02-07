import * as React from 'react';
import {BannerContainer, Section} from '@coveord/plasma-react';

import PlasmaComponent from '../../building-blocs/PlasmaComponent';

// start-print
export const BannerExamples: React.FunctionComponent = () => (
    <PlasmaComponent id="Banner" title="Banner" withSource>
        <Section level={3} title="Empty banner">
            <BannerContainer />
        </Section>
    </PlasmaComponent>
);
// stop-print
