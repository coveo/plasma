import * as VaporSVG from 'coveo-styleguide';
import {useState} from 'react';
import * as React from 'react';

import Svg from '../../demo-building-blocs/Svg';
import VaporComponent from '../../demo-building-blocs/VaporComponent';

export const ListPopup = () => {
    const [show, setShow] = useState(true);
    return (
        <VaporComponent
            id="list-popup"
            title="List Popup"
            usage="This is the field picker control used to select a filter field."
            withSource
        >
            <button type="button" onClick={() => setShow(!show)} className="btn js-tether-target-list">
                Form Toggle
            </button>
            {show && (
                <div className="filter-expression-picker js-tether-element-list">
                    <div className="add-filter-popup popover">
                        <div id="filters-list" className="filter-choices">
                            <div className="popup-header py2 flex flex-column flex-center">
                                <div className="event-type">
                                    <div className="flat-select mod-option-picker clearfix">
                                        <a className="flat-select-option">
                                            <span className="enabled selected-value state-selected">All</span>
                                        </a>
                                        <a className="flat-select-option selectable">
                                            <span className="enabled ">Search</span>
                                        </a>
                                        <a className="flat-select-option selectable">
                                            <span className="enabled ">Click</span>
                                        </a>
                                        <a className="flat-select-option selectable">
                                            <span className="enabled ">Custom</span>
                                        </a>
                                    </div>
                                </div>

                                <div className="coveo-filter-container">
                                    <input type="text" className="filter-box" placeholder="Filter" />
                                    <span className="hide" />
                                    <Svg
                                        name={VaporSVG.svg.filter.name}
                                        className="filter-icon icon mod-lg fill-medium-grey"
                                    />
                                </div>
                            </div>
                            <div className="popup-content">
                                <div className="available-filters">
                                    <span className="section">Named filters</span>
                                    <div className="filter-list">
                                        <ul className="list">
                                            <li className="filter">
                                                <span className="dimension">Canada</span>
                                                <span className="type">Named filter</span>
                                            </li>
                                            <li className="filter">
                                                <span className="dimension">USA</span>
                                                <span className="type">Named filter</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <span className="section">Dimensions</span>
                                    <div className="filter-list">
                                        <ul className="list">
                                            <li className="filter">
                                                <span className="dimension">A/B Test Name</span>
                                                <span className="type">All</span>
                                            </li>
                                            <li className="filter">
                                                <span className="dimension">A/B Test Version</span>
                                                <span className="type">All</span>
                                            </li>
                                            <li className="filter">
                                                <span className="dimension">Browser</span>
                                                <span className="type">All</span>
                                            </li>
                                            <li className="filter">
                                                <span className="dimension">City</span>
                                                <span className="type">All</span>
                                            </li>
                                            <li className="filter">
                                                <span className="dimension">Country</span>
                                                <span className="type">All</span>
                                            </li>
                                            <li className="filter">
                                                <span className="dimension">Document Title</span>
                                                <span className="type">Click</span>
                                            </li>
                                            <li className="filter">
                                                <span className="dimension">City</span>
                                                <span className="type">All</span>
                                            </li>
                                            <li className="filter">
                                                <span className="dimension">Country</span>
                                                <span className="type">All</span>
                                            </li>
                                            <li className="filter">
                                                <span className="dimension">Document Title</span>
                                                <span className="type">Click</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </VaporComponent>
    );
};

export default ListPopup;
