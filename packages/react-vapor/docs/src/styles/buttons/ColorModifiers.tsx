import * as VaporSVG from 'coveo-styleguide';
import * as React from 'react';

import Svg from '../../demo-building-blocs/Svg';
import VaporComponent from '../../demo-building-blocs/VaporComponent';

export const ColorModifiers = () => (
    <VaporComponent
        key="color-modifiers"
        id="color-modifiers"
        title="Color modifiers"
        usage="Use any of the available button classes to quickly create a styled button."
        withSource
    >
        <div className="mb1">
            <button type="button" className="btn">
                Default
                <Svg name={VaporSVG.svg.arrowRight.name} className="icon" />
            </button>
            <button type="button" className="btn" disabled>
                Disabled
                <Svg name={VaporSVG.svg.arrowRight.name} className="icon" />
            </button>
        </div>

        <div className="mb1">
            <button type="button" className="btn mod-primary">
                mod-primary
                <Svg name={VaporSVG.svg.arrowRight.name} className="icon" />
            </button>
            <button type="button" className="btn mod-primary" disabled>
                mod-primary disabled
                <Svg name={VaporSVG.svg.arrowRight.name} className="icon" />
            </button>
        </div>

        <div className="mb1">
            <button type="button" className="btn mod-danger">
                mod-danger
                <Svg name={VaporSVG.svg.arrowRight.name} className="icon" />
            </button>
            <button type="button" className="btn mod-danger" disabled>
                mod-danger disabled
                <Svg name={VaporSVG.svg.arrowRight.name} className="icon" />
            </button>
        </div>

        <div className="mb1">
            <button type="button" className="btn mod-link">
                mod-link
                <Svg name={VaporSVG.svg.arrowRight.name} className="icon" />
            </button>
            <button type="button" className="btn mod-link" disabled>
                mod-link disabled
                <Svg name={VaporSVG.svg.arrowRight.name} className="icon" />
            </button>
        </div>
    </VaporComponent>
);
export default ColorModifiers;
