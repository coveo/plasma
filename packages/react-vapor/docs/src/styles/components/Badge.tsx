import * as React from 'react';

import VaporComponent from '../demo-building-blocs/VaporComponent';

const Badge = () => (
    <VaporComponent key="badge" id="badge" title="Badge" usage="Use to indicate a special feature or status" withSource>
        <div>
            <span className="badge">New</span>
            <span className="badge bg-blue">Awesome feature</span>
            <span className="badge bg-medium-blue">Cool badge</span>
            <span className="badge bg-darker-blue">Even cooler badge</span>
        </div>
    </VaporComponent>
);

export default Badge;
