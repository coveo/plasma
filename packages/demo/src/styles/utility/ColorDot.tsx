import * as React from 'react';
import {Section} from 'react-vapor';

import VaporComponent from '../../demo-building-blocs/VaporComponent';

export default () => (
    <VaporComponent id="color-dots" title="Color dots" usage="Display a status." withSource>
        <Section level={3} title="Standard color dots">
            <i className="color-dot mr1" />
            <i className="color-dot state-critical mr1" />
            <i className="color-dot state-major mr1" />
            <i className="color-dot state-minor mr1" />
            <i className="color-dot state-info mr1" />
            <i className="color-dot state-disabled mr1" />
            <i className="color-dot state-waiting" />
        </Section>

        <Section level={3} title="Flashing color dots">
            <i className="color-dot state-executing mr1" />
            <i className="color-dot state-executing state-critical mr1" />
            <i className="color-dot state-executing state-major mr1" />
            <i className="color-dot state-executing state-minor mr1" />
            <i className="color-dot state-executing state-info mr1" />
            <i className="color-dot state-executing state-disabled mr1" />
            <i className="color-dot state-executing state-waiting" />
        </Section>

        <Section level={3} title="Color dot aligned with text">
            <span className="inline-flex label">
                <i className="color-dot mr1" />
                Success
            </span>
        </Section>
    </VaporComponent>
);
