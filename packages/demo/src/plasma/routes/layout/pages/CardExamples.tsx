import * as React from 'react';

import VaporComponent from '../../../../demo-building-blocs/VaporComponent';

export const CardExample = () => (
    <VaporComponent key="card" id="card" title="Card" withSource>
        <div className="card p2" style={{width: '100px', height: '100px'}}>
            Lorem ipsum dolor sit amet.
        </div>
    </VaporComponent>
);
