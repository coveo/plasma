import * as VaporSvg from 'coveo-styleguide';
import * as React from 'react';

import Svg from '../demo-building-blocs/Svg';
import VaporComponent from '../demo-building-blocs/VaporComponent';

export const FieldSearch = () => (
    <VaporComponent
        key="search-field"
        id="search-field"
        title="Search Field"
        usage="An input to use in a search context"
        withSource
    >
        <div className="mb2">
            <div className="search-bar" style={{width: 500}}>
                <input type="text" className="search-bar-input" placeholder="Search awesome things" />
                <div className="search-bar-icon-container">
                    <Svg name={VaporSvg.svg.search.name} />
                </div>
            </div>
        </div>

        <div className="mb2">
            <div className="search-bar search-bar-disabled" style={{width: 500}}>
                <input
                    type="text"
                    className="search-bar-input"
                    placeholder="Search bar disabled. You cannot search awesome things yet."
                    disabled
                />
                <div className="search-bar-icon-container">
                    <Svg name={VaporSvg.svg.search.name} />
                </div>
            </div>
        </div>

        <div>
            <div className="search-bar search-bar-loading" style={{width: 500}}>
                <input type="text" className="search-bar-input" placeholder="Currently searching..." />
                <div className="search-bar-icon-container">
                    <div className="search-bar-spinner" />
                </div>
            </div>
        </div>
    </VaporComponent>
);

export default FieldSearch;
