import * as VaporSVG from 'coveo-styleguide';
import * as React from 'react';

import Svg from '../../demo-building-blocs/Svg';
import VaporComponent from '../../demo-building-blocs/VaporComponent';

export default function FlatSelectModifiers() {
    return (
        <VaporComponent
            id="flat-select-modifiers"
            title="Flat select modifiers"
            usage="Modifiers for the Flat select control { mod-btn-group } ."
            withSource
        >
            <div className="flat-select mod-btn-group">
                <a className="flat-select-option selectable">
                    <span>Option 1</span>
                </a>
                <a className="flat-select-option">Option 2</a>
                <a className="flat-select-option selectable">Option 3</a>
                <a className="flat-select-option selectable">
                    <Svg name={VaporSVG.svg.clear.name} className="icon-container" svgClass="icon" />
                    Option 4
                </a>
                <a className="flat-select-option">
                    <Svg name={VaporSVG.svg.clear.name} className="icon-container" svgClass="icon" />
                    Option 5
                </a>
            </div>
        </VaporComponent>
    );
}
