import * as React from 'react';

import VaporComponent from '../../demo-building-blocs/VaporComponent';

export const Base = () => (
    <VaporComponent
        key="base"
        id="base"
        title="Base"
        usage='Base style for all buttons and links with the "btn" class.'
        withSource
    >
        <div className="spaced-boxes-container flex flex-wrap">
            <a className="btn spaced-box">Link</a>
            <button type="button" className="btn spaced-box">
                Button
            </button>
            <div className="btn spaced-box">Div button</div>
            <button type="button" className="btn spaced-box" disabled>
                Button disabled
            </button>
            <button type="button" className="btn state-disabled spaced-box">
                Button disabled
            </button>
        </div>
    </VaporComponent>
);

export default Base;
