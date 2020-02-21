import * as VaporSVG from 'coveo-styleguide';
import * as React from 'react';
import {Svg} from 'react-vapor';

import VaporComponent from '../../demo-building-blocs/VaporComponent';

export const Member = () => (
    <VaporComponent
        key="member"
        id="member"
        title="Member"
        usage="Use when displaying a user or member thumbnail."
        withSource
    >
        <div className="member bg-medium-grey p1">
            <div className="member-icon">
                <Svg svgName={VaporSVG.svg.domainGoogle.name} className="member-icon-provider icon mod-2x" />
            </div>
            <div className="member-info">
                <div className="member-info-name">Member name</div>
                <div className="member-info-email">member@domain.com</div>
            </div>
        </div>
    </VaporComponent>
);

export default Member;
