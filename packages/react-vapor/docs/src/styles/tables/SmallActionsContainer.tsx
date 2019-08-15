import * as VaporSVG from 'coveo-styleguide';
import * as React from 'react';

import Svg from '../demo-building-blocs/Svg';
import VaporComponent from '../demo-building-blocs/VaporComponent';

export default function SmallActionsContainer() {
    return (
        <VaporComponent
            id="small-actions-container"
            title="Small actions container"
            usage="This defines how to set small actions on a table. Useful when lots of actions are needed for the space available."
            withSource
        >
            <div className="coveo-table-actions-container mod-border-top mod-align-header small-actions-container">
                <div className="coveo-table-actions item-filter">
                    <span className="item-filter-label">Filter label: </span>
                    <span className="item-filter-item">item we are filtering on</span>
                    <button className="item-filter-clear">
                        <i className="icon fill-dark-blue">
                            <Svg name={VaporSVG.svg.clear.name} />
                        </i>
                    </button>
                </div>
                <div className="coveo-table-actions">
                    <div className="actions-row">
                        <span className="enabled action primary action">
                            <a className="inline-flex flex-center">
                                <Svg
                                    name={VaporSVG.svg.edit.name}
                                    svgClass="icon fill-medium-blue"
                                    className="action-icon"
                                />
                                <span className="action-label">Edit</span>
                            </a>
                        </span>
                        <span className="enabled action primary-action">
                            <a className="inline-flex flex-center">
                                <Svg
                                    name={VaporSVG.svg.activity.name}
                                    svgClass="icon fill-medium-blue"
                                    className="action-icon"
                                />
                                <span className="action-label">Activity</span>
                            </a>
                        </span>
                        <span className="enabled action primary-action">
                            <span className="enabled inline-flex flex-center">
                                <Svg
                                    name={VaporSVG.svg.copy.name}
                                    svgClass="icon fill-medium-blue"
                                    className="action-icon"
                                />
                                <span className="action-label">Copy</span>
                            </span>
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
