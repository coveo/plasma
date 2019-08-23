import * as VaporSVG from 'coveo-styleguide';
import * as React from 'react';

import Svg from '../../demo-building-blocs/Svg';
import VaporComponent from '../../demo-building-blocs/VaporComponent';

export default function FilterBox() {
    return (
        <VaporComponent id="filter-box" title="Filter box" usage="Basic filter box." withSource>
            <div className="coveo-filter-container">
                <input type="text" className="filter-box" placeholder="Filter" />
                <span className="hide" />
                <Svg name={VaporSVG.svg.filter.name} className="filter-icon icon mod-lg fill-medium-grey" />
            </div>

            <div className="coveo-filter-container">
                <input type="text" className="filter-box" placeholder="Filter" value="Filter box with value" />
                <Svg name={VaporSVG.svg.clear.name} className="clear-icon icon fill-medium-grey" />
                <Svg name={VaporSVG.svg.filter.name} className="filter-icon icon mod-lg fill-medium-grey" />
            </div>

            <div className="coveo-filter-container mod-small">
                <input type="text" className="filter-box" placeholder="Filter" />
                <span className="hide" />
                <Svg name={VaporSVG.svg.filter.name} className="filter-icon icon mod-lg fill-medium-grey" />
            </div>

            <div className="coveo-filter-container mod-small">
                <input type="text" className="filter-box" placeholder="Filter" value="Filter box with value" />
                <Svg name={VaporSVG.svg.clear.name} className="clear-icon icon fill-medium-grey" />
                <Svg name={VaporSVG.svg.filter.name} className="filter-icon icon mod-lg fill-medium-grey" />
            </div>
        </VaporComponent>
    );
}
