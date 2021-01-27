import * as React from 'react';

import VaporComponent from '../../demo-building-blocs/VaporComponent';

export default () => (
    <VaporComponent
        id="spaced-box"
        title="Spaced box"
        usage="Simple spaced boxes container that you can use for alomost everything. Pair it with flex and flex-wrap and you get a nice container."
        withSource
    >
        <div className="spaced-boxes-container flex flex-wrap" style={{maxWidth: 400}}>
            <span className="p2 text-pure-white spaced-box" style={{backgroundColor: '#f05245'}}>
                A span
            </span>

            <button type="button" className="btn spaced-box">
                A button
            </button>

            <span className="p2 text-pure-white spaced-box" style={{backgroundColor: '#00adff'}}>
                Another span
            </span>

            <button type="button" className="btn mod-primary spaced-box">
                Another button
            </button>

            <span className="p2 text-pure-white spaced-box" style={{backgroundColor: '#15ab65'}}>
                More!
            </span>
        </div>
    </VaporComponent>
);
