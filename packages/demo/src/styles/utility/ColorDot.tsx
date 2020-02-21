import * as React from 'react';

import VaporComponent from '../../demo-building-blocs/VaporComponent';

export default function ColorDots() {
    return (
        <VaporComponent id="color-dots" title="Color dots" usage="Display a status." withSource>
            <p className="p1">Standard color dots</p>
            <i className="color-dot" />
            <i className="color-dot state-critical" />
            <i className="color-dot state-major" />
            <i className="color-dot state-info" />
            <i className="color-dot state-disabled" />
            <i className="color-dot state-waiting" />

            <p className="p1">Flashing color dots</p>
            <i className="color-dot state-executing" />
            <i className="color-dot state-executing state-critical" />
            <i className="color-dot state-executing state-major" />
            <i className="color-dot state-executing state-info" />
            <i className="color-dot state-executing state-disabled" />
            <i className="color-dot state-executing state-waiting" />

            <p className="p1">Color dot aligned with text</p>
            <span className="inline-flex center-align">
                <i className="color-dot mr1" />
                Success
            </span>
        </VaporComponent>
    );
}
