import * as React from 'react';
import {Section, Svg} from '@coveord/plasma-react';

import VaporComponent from '../../../building-blocs/VaporComponent';

export const IconColor = () => (
    <VaporComponent id="IconColors" title="Icon colors" usage="Change color for icon." withSource>
        <Section className="mb5">
            <Svg svgName="info" className="icon mr1 mod-3x documentation-link" />
            <Svg svgName="info" className="icon mr1 mod-3x no-link" />
            <Svg svgName="info" className="icon mr1 mod-3x disabled" />
            <Svg svgName="info" className="icon mr1 mod-3x mod-error" />
            <Svg svgName="info" className="icon mr1 mod-3x mod-warning" />
            <Svg svgName="info" className="icon mr1 mod-3x mod-success" />
            <Svg svgName="info" className="icon mr1 mod-3x mod-white" style={{backgroundColor: '#8e959d'}} />
            <Svg svgName="domainOffice365" className="icon mr1 mod-3x office365-red" />
            <Svg svgName="domainSalesforce" className="icon mod-3x salesforce-blue inline-flex" />
        </Section>
    </VaporComponent>
);
