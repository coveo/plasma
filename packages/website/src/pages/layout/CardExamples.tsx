import * as React from 'react';

import VaporComponent from '../../building-blocs/VaporComponent';

// start-print
export const CardExample = () => (
    <VaporComponent key="Card" id="card" title="Card" withSource>
        <div className="card p2" style={{width: '100px', height: '100px'}}>
            Lorem ipsum dolor sit amet.
        </div>
    </VaporComponent>
);
// stop-print
