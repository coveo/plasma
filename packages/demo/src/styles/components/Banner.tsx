import * as VaporSVG from 'coveo-styleguide';
import * as React from 'react';
import {Svg} from 'react-vapor';

import VaporComponent from '../../demo-building-blocs/VaporComponent';

const Banner = () => (
    <VaporComponent
        key="banner"
        id="banner"
        title="Banner"
        usage="Use it to provide info in your application."
        withSource
    >
        <div className="banner flex center-align bg-orange">
            <div className="banner-description">
                The release of March 2016 includes significant content update
                <button type="button" className="btn text-orange">
                    Learn More
                </button>
            </div>

            <Svg svgName={VaporSVG.svg.close.name} className="icon fill-pure-white mod-lg" />
        </div>
    </VaporComponent>
);

export default Banner;
