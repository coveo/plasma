import * as VaporSVG from 'coveo-styleguide';
import * as React from 'react';

import Svg from '../demo-building-blocs/Svg';
import VaporComponent from '../demo-building-blocs/VaporComponent';

export default function ActionsContainer() {
    return (
        <VaporComponent
            id="actions-container"
            title="Actions container"
            usage="This defines how to set a filter box for a table and where to place actions button for each table elements. Add the mod-border-top class when the table is not right under the panel-header."
            withSource
        >
            <div className="coveo-table-actions-container mod-border-top mod-align-header">
                <div className="coveo-table-actions item-filter">
                    <span className="item-filter-label">Filter label: </span>
                    <span className="item-filter-item">item we are filtering on</span>
                    <button className="item-filter-clear">
                        <Svg name={VaporSVG.svg.clear.name} className="icon fill-dark-blue" />
                    </button>
                </div>
                <div className="coveo-table-actions">
                    <div className="actions-row">
                        <span className="enabled action primary action">
                            <a className="inline-flex flex-center">
                                <Svg
                                    name={VaporSVG.svg.edit.name}
                                    className="action-icon"
                                    svgClass="icon fill-medium-blue"
                                />
                                <span className="action-label">Edit</span>
                            </a>
                        </span>
                        <span className="enabled action primary-action">
                            <a className="inline-flex flex-center">
                                <Svg
                                    name={VaporSVG.svg.activity.name}
                                    className="action-icon"
                                    svgClass="icon fill-medium-blue"
                                />
                                <span className="action-label">Activity</span>
                            </a>
                        </span>
                        <span className="enabled action primary-action">
                            <span className="enabled inline-flex flex-center">
                                <Svg
                                    name={VaporSVG.svg.copy.name}
                                    className="action-icon"
                                    svgClass="icon fill-medium-blue"
                                />
                                <span className="action-label">Copy</span>
                            </span>
                        </span>
                        <span className="dropdown action primary-action open">
                            <span className="dropdown-toggle inline-flex flex-center" data-toggle="dropdown">
                                <Svg
                                    name={VaporSVG.svg.more.name}
                                    className="action-icon"
                                    svgClass="icon fill-medium-blue"
                                />
                                <span className="action-label">More</span>
                            </span>
                            <ul className="dropdown-menu normal-height">
                                <li>
                                    <span className="enabled">Action</span>
                                </li>
                                <li>
                                    <span>Another action</span>
                                </li>
                            </ul>
                        </span>
                    </div>
                </div>
                <div className="coveo-table-actions">
                    <div className="coveo-filter-container">
                        <input type="text" className="filter-box" placeholder="Filter" />
                        <span />
                        <span className="filter-icon">
                            <i className="coveo-sprites-misc-filter" />
                        </span>
                    </div>
                </div>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Column 1</th>
                        <th>Column 2</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Data 1</td>
                        <td>Data 2</td>
                    </tr>
                    <tr>
                        <td>Data 1</td>
                        <td>Data 2</td>
                    </tr>
                </tbody>
            </table>
        </VaporComponent>
    );
}
