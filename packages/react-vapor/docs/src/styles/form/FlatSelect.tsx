import * as React from 'react';

import VaporComponent from '../demo-building-blocs/VaporComponent';

export default function FlatSelect() {
    return (
        <VaporComponent id="flat-select" title="Flat select" usage="A flat single select control." withSource>
            <div className="flat-select">
                <a className="flat-select-option" title="">
                    Option 1
                </a>
                <a className="flat-select-option selectable" title="">
                    Option 2
                </a>
                <a className="flat-select-option selectable" title="">
                    Option 3
                </a>
            </div>

            <div className="flat-select mod-option-picker" style={{width: 200}}>
                <a className="flat-select-option" title="">
                    Option 1
                </a>
                <a className="flat-select-option selectable" title="">
                    Option 2
                </a>
                <a className="flat-select-option selectable" title="">
                    Option 3
                </a>
            </div>
        </VaporComponent>
    );
}
