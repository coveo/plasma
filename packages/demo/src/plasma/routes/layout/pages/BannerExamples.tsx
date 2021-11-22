import * as React from 'react';
import {BannerContainer, Section} from 'react-vapor';

import VaporComponent from '../../../../demo-building-blocs/VaporComponent';

export const BannerExamples: React.FunctionComponent = () => (
    <VaporComponent id="banner" title="Banner" usage="">
        <Section level={3} title="Empty banner">
            <BannerContainer />
        </Section>
    </VaporComponent>
);
