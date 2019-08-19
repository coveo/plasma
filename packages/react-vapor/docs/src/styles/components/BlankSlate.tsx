import * as React from 'react';

import VaporComponent from '../demo-building-blocs/VaporComponent';

const BlankSlate = () => (
    <VaporComponent
        key="blank-slate"
        id="blank-slate"
        title="Blank Slate"
        usage="Use it to provide information when no dynamic content exists"
        withSource
    >
        <div className="blankslate m2">
            <h1>This is a blank slate</h1>
            <p>Use it to provide information when no dynamic content exists.</p>
            <button className="btn mod-primary">Call to action</button>
        </div>

        <div className="blankslate m2">
            <h1>This is a blank slate</h1>
            <p>Use it to provide information when no dynamic content exists.</p>
        </div>

        <div className="blankslate m2">
            <h1>This is a blank slate</h1>
        </div>

        <div className="blankslate m2 mod-small">
            <h1>This is a blank slate with mod-small</h1>
        </div>

        <div className="blankslate m2 mod-danger">
            <h1>This is a blank slate with mod-danger</h1>
        </div>
    </VaporComponent>
);

export default BlankSlate;
