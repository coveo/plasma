import * as VaporSVG from 'coveo-styleguide';
import * as React from 'react';

import {Svg} from '../../../../src/components/svg/Svg';
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
                <Svg svgName={VaporSVG.svg.arrowRight.name} className="icon" />
            </button>
            <button type="button" className="btn" disabled>
                Disabled
                <Svg svgName={VaporSVG.svg.arrowRight.name} className="icon" />
            </button>
        </div>

        <div className="mb1">
            <button type="button" className="btn mod-primary">
                mod-primary
                <Svg svgName={VaporSVG.svg.arrowRight.name} className="icon" />
            </button>
            <button type="button" className="btn mod-primary" disabled>
                mod-primary disabled
                <Svg svgName={VaporSVG.svg.arrowRight.name} className="icon" />
            </button>
        </div>

        <div className="mb1">
            <button type="button" className="btn mod-danger">
                mod-danger
                <Svg svgName={VaporSVG.svg.arrowRight.name} className="icon" />
            </button>
            <button type="button" className="btn mod-danger" disabled>
                mod-danger disabled
                <Svg svgName={VaporSVG.svg.arrowRight.name} className="icon" />
            </button>
        </div>

        <div className="mb1">
            <button type="button" className="btn mod-link">
                mod-link
                <Svg svgName={VaporSVG.svg.arrowRight.name} className="icon" />
            </button>
            <button type="button" className="btn mod-link" disabled>
                mod-link disabled
                <Svg svgName={VaporSVG.svg.arrowRight.name} className="icon" />
            </button>
        </div>
    </VaporComponent>
);
export default ColorModifiers;
