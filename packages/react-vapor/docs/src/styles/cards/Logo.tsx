import * as VaporSVG from 'coveo-styleguide';
import * as React from 'react';

import Svg from '../../demo-building-blocs/Svg';
import VaporComponent from '../../demo-building-blocs/VaporComponent';

const Logo = () => (
    <VaporComponent key="logo" id="logo" title="Logo" usage="Logo driven way of displaying information" withSource>
        <div className="logo-card">
            <div className="logo-card-logo">
                <i className="icon mod-4x">
                    <Svg name={VaporSVG.svg.sourceCustom.name} />
                </i>
            </div>
            <div className="logo-card-content">
                <h2 className="logo-card-title">Default logo card with text</h2>
                <div>Lorem ipsum</div>
            </div>
        </div>

        <div className="logo-card ribbon-container">
            <div className="logo-card-logo">
                <i className="icon mod-4x">
                    <Svg name={VaporSVG.svg.sourceCustom.name} />
                </i>
            </div>
            <div className="logo-card-content">
                <h2 className="logo-card-title">Logo card with badges and ribbon</h2>
                <div>
                    <span className="badge bg-blue">Badge 1</span>
                    <span className="badge bg-medium-blue">Badge 2</span>
                    <span className="badge bg-darker-blue">Badge 3</span>
                </div>
            </div>
            <div className="corner-ribbon top right bg-orange">Ribbon</div>
        </div>

        <div className="logo-card ribbon-container disabled">
            <div className="logo-card-logo">
                <i className="icon mod-4x">
                    <Svg name={VaporSVG.svg.sourceCustom.name} />
                </i>
            </div>
            <div className="logo-card-content">
                <h2 className="logo-card-title">Disabled logo card</h2>
                <div>
                    <span className="badge bg-blue">Badge 1</span>
                    <span className="badge bg-medium-blue">Badge 2</span>
                    <span className="badge bg-darker-blue">Badge 3</span>
                </div>
            </div>
            <div className="corner-ribbon top right bg-orange">Ribbon</div>
        </div>
    </VaporComponent>
);
export default Logo;
