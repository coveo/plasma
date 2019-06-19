import * as VaporSVG from 'coveo-styleguide';
import Svg from '../Svg';

export default function SmallActionsContainer() {
    return (
        <>
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
        </>
    );
}
