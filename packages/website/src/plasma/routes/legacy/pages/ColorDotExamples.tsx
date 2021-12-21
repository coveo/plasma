import * as React from 'react';
import {Section} from '@coveord/plasma-react';

import VaporComponent from '../../../../demo-building-blocs/VaporComponent';

// start-print

export const ColorDots = () => (
    <VaporComponent id="ColorDot" title="Color Dot" usage="Display a status." withSource>
        <Section level={2} title="Standard color dots">
            <i className="color-dot mr1" />
            <i className="color-dot state-critical mr1" />
            <i className="color-dot state-major mr1" />
            <i className="color-dot state-minor mr1" />
            <i className="color-dot state-warning mr1" />
            <i className="color-dot state-info mr1" />
            <i className="color-dot state-disabled mr1" />
            <i className="color-dot state-waiting mr1" />
            <i className="color-dot state-new mr1" />
            <i className="color-dot state-maintenance" />
        </Section>

        <Section level={2} title="Small color dots">
            <i className="color-dot mod-small mr1" />
            <i className="color-dot mod-small state-critical mr1" />
            <i className="color-dot mod-small state-major mr1" />
            <i className="color-dot mod-small state-minor mr1" />
            <i className="color-dot mod-small state-warning mr1" />
            <i className="color-dot mod-small state-info mr1" />
            <i className="color-dot mod-small state-disabled mr1" />
            <i className="color-dot mod-small state-waiting mr1" />
            <i className="color-dot mod-small state-new mr1" />
            <i className="color-dot mod-small state-maintenance" />
        </Section>

        <Section level={2} title="Flashing color dots">
            <i className="color-dot state-executing mr1" />
            <i className="color-dot state-executing state-critical mr1" />
            <i className="color-dot state-executing state-major mr1" />
            <i className="color-dot state-executing state-minor mr1" />
            <i className="color-dot state-executing state-warning mr1" />
            <i className="color-dot state-executing state-info mr1" />
            <i className="color-dot state-executing state-disabled mr1" />
            <i className="color-dot state-executing state-waiting mr1" />
            <i className="color-dot state-executing state-new mr1" />
            <i className="color-dot state-executing state-maintenance" />
        </Section>

        <Section level={2} title="Color dot aligned with text">
            <span className="inline-flex label">
                <i className="color-dot mr1" />
                Success
            </span>
        </Section>
    </VaporComponent>
);
