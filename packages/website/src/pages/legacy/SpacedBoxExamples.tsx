import * as React from 'react';

import VaporComponent from '../../building-blocs/VaporComponent';

// start-print

export const SpacedBox: React.FunctionComponent = () => (
    <VaporComponent
        id="spaced-box"
        title="Spaced box"
        usage="Simple spaced boxes container that you can use for almost everything. Pair it with flex and flex-wrap and you get a nice container."
        withSource
    >
        <div className="spaced-boxes-container flex flex-wrap" style={{maxWidth: 400}}>
            <span className="p2 spaced-box" style={{backgroundColor: '#fa821e'}}>
                A span
            </span>
            <button type="button" className="btn spaced-box mod-secondary">
                A button
            </button>
            <span className="p2 spaced-box" style={{backgroundColor: '#00adff'}}>
                Another span
            </span>
            <button type="button" className="btn mod-primary spaced-box">
                Another button
            </button>
            <span className="p2 spaced-box" style={{backgroundColor: '#15ab65'}}>
                More!
            </span>
        </div>
    </VaporComponent>
);
