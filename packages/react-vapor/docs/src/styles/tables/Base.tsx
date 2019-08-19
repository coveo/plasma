import * as VaporSVG from 'coveo-styleguide';
import * as React from 'react';

import Svg from '../../demo-building-blocs/Svg';
import VaporComponent from '../../demo-building-blocs/VaporComponent';

export default function Base() {
    return (
        <VaporComponent id="base" title="Base" usage="Base style for all tables." withSource>
            <table className="table">
                <thead>
                    <tr>
                        <th className="selection">
                            <label className="coveo-checkbox-label">
                                <input type="checkbox" className="coveo-checkbox" />
                                <button title="Select All" type="button" />
                            </label>
                        </th>
                        <th className="admin-sort">
                            Column 1
                            <div className="admin-sort-icon">
                                <Svg name={VaporSVG.svg.ascDesc.name} svgClass="tables-sort icon" />
                            </div>
                        </th>
                        <th>Column 2</th>
                        <th className="admin-sort">
                            <label className="coveo-checkbox-label">
                                <input type="checkbox" className="coveo-checkbox" />
                                <button type="button" />
                            </label>
                            <span className="cell-content">Column 3</span>
                            <div className="admin-sort-icon">
                                <Svg name={VaporSVG.svg.ascDesc.name} svgClass="tables-sort icon" />
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="selection">
                            <label className="coveo-checkbox-label">
                                <input type="checkbox" className="coveo-checkbox" />
                                <button type="button" />
                            </label>
                        </td>
                        <td>Data 1</td>
                        <td>Data 2</td>
                        <td>
                            <label className="coveo-checkbox-label">
                                <input type="checkbox" className="coveo-checkbox" />
                                <button type="button" />
                            </label>
                            <span className="cell-content">Data 3</span>
                        </td>
                    </tr>
                    <tr className="selected">
                        <td className="selection">
                            <label className="coveo-checkbox-label">
                                <input type="checkbox" className="coveo-checkbox" />
                                <button type="button" />
                            </label>
                        </td>
                        <td>Data 1</td>
                        <td>Data 2</td>
                        <td>
                            <label className="coveo-checkbox-label">
                                <input type="checkbox" className="coveo-checkbox" />
                                <button type="button" />
                            </label>
                            <span className="cell-content">Data 3</span>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div className="table-last-update">Last update: 3:15:44 PM</div>
        </VaporComponent>
    );
}
