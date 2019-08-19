import * as React from 'react';

import VaporComponent from '../demo-building-blocs/VaporComponent';

export default function FlatSelectPrepend() {
    return (
        <VaporComponent
            id="flat-select-prepend"
            title="Flat select prepend"
            usage="A flat single select control with a label."
            withSource
        >
            <div className="prepended-flat-select">
                <div className="flat-select-prepend">Label</div>
                <div className="flat-select">
                    <a className="flat-select-option" title="">
                        10
                    </a>
                    <a className="flat-select-option selectable" title="">
                        20
                    </a>
                    <a className="flat-select-option selectable" title="">
                        30
                    </a>
                </div>
            </div>
        </VaporComponent>
    );
}
