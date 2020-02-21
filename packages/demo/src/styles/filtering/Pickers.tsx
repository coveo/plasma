import * as VaporSVG from 'coveo-styleguide';
import * as React from 'react';
import {Svg} from 'react-vapor';

import VaporComponent from '../../demo-building-blocs/VaporComponent';

export const Pickers = () => (
    <VaporComponent id="pickers" title="Pickers" usage="This is the standard multiple filter pickers control.">
        <div className="filter-expression-picker">
            <div className="multi-filters-container">
                <div className="multi-filter">
                    <div className="multi-filter-picker">
                        <div>
                            <div className="filters coveo-form">
                                <div className="admin-filterbox">
                                    <div className="pre-operator">at least</div>
                                    <div className="filter-type">
                                        <div className="admin-select dropdown">
                                            <button
                                                className="btn dropdown-toggle"
                                                type="button"
                                                data-toggle="dropdown"
                                            >
                                                <span className="dropdown-selected-value">an event</span>
                                                <span className="dropdown-toggle-arrow" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="filter-where">WHERE</div>
                                    <div className="filters">
                                        <div className="editable-filter">
                                            <div className="filter-badge filter-popup ">
                                                <button className="btn edit-filter dropdown-toggle mod-light">
                                                    <span className="edit-filter-content">
                                                        <span className="filter-dimension">Browser</span>
                                                        <span className="filter-operator mod-positive">is</span>
                                                        <span className="filter-values">Chrome</span>
                                                        <span className="dropdown-toggle-arrow" />
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="filter-popup">
                                        <div className="filter-actions">
                                            <a className="btn add-filter">
                                                <Svg
                                                    svgName={VaporSVG.svg.filterAdd.name}
                                                    className="icon mod-lg icon-small"
                                                />
                                            </a>
                                            <a className="btn clear-all-filters">
                                                <Svg
                                                    svgName={VaporSVG.svg.clear.name}
                                                    className="icon mod-lg icon-small"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="add-container">
                                <div className="add right">
                                    <Svg svgName={VaporSVG.svg.add.name} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </VaporComponent>
);
export default Pickers;
