import * as VaporSVG from 'coveo-styleguide';
import {useState} from 'react';
import * as React from 'react';

import Svg from '../../demo-building-blocs/Svg';
import VaporComponent from '../../demo-building-blocs/VaporComponent';

const Flippable = () => {
    const [showBack1, setShowBack1] = useState(false);
    const [showBack2, setShowBack2] = useState(false);

    return (
        <VaporComponent
            key="flippable"
            id="flippable"
            title="Flippable"
            usage="A compact and interactive way of displaying content"
            withSource
        >
            <div className="flippable" style={{width: 200}} onClick={() => setShowBack1(!showBack1)}>
                <div className={`flipper ${showBack1 ? 'show-back' : 'show-front'}`}>
                    <div className="flipper-front bg-white p2">
                        Front side. <br />
                        Flippable takes the height of the front side content by default no matter how big is the back
                        side.
                    </div>
                    <div className="flipper-back bg-light-grey p2">Some content on the back.</div>
                </div>
            </div>

            <div className="flippable mt1" style={{width: 200}} onClick={() => setShowBack2(!showBack2)}>
                <div className={`flipper ${showBack2 ? 'show-back' : 'show-front'}`}>
                    <div className="flipper-front bg-white p2">Front side.</div>
                    <div className="flipper-back bg-light-grey p2" style={{width: 500, height: 130}}>
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
                    </div>
                </div>
            </div>
        </VaporComponent>
    );
};

export default Flippable;
