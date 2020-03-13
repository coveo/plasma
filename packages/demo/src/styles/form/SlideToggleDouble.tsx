import * as React from 'react';

import VaporComponent from '../../demo-building-blocs/VaporComponent';

export default function SlideToggleDouble() {
    return (
        <VaporComponent
            id="slide-toggle-double"
            title="Slide toggle double"
            usage="A slide toggle with two options"
            withSource
        >
            <div className="coveo-slide-toggle-double-container">
                <label className="coveo-slide-toggle-double first" htmlFor="choice">
                    Choice 1
                </label>
                <input
                    type="checkbox"
                    className="coveo-slide-toggle-double"
                    name="choice"
                    id="choice"
                    defaultChecked={false}
                />
                <span />
                <label className="coveo-slide-toggle-double second" htmlFor="choice">
                    Choice 2
                </label>
            </div>
        </VaporComponent>
    );
}
