import * as React from 'react';

import VaporComponent from '../demo-building-blocs/VaporComponent';

const Alignment = () => (
    <VaporComponent
        key="alignment"
        id="alignment"
        title="Alignment"
        usage="Show how to dispose your multiple buttons"
        withSource
    >
        <a className="btn mod-primary">Link</a>
        <button className="btn btn-primary">Primary button</button>
        <div className="btn-container">
            <button className="btn">Button with container</button>
        </div>
        <div className="btn-container" title="tooltip ...">
            <a className="btn mod-primary state-disabled">Link disabled with a tooltip</a>
        </div>
        <div className="btn-container" title="tooltip ...">
            <button className="btn" disabled>
                Button disabled with a tooltip
            </button>
        </div>
    </VaporComponent>
);

export default Alignment;
