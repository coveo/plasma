import * as VaporSVG from 'coveo-styleguide';
import Svg from '../Svg';

export default function Loading() {
    return (
        <>
            <h4 className="mt2 mb2">Table not loading</h4>
            <div className="table-container">
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
                    <tbody className="loading-row">
                        <tr>
                            <td colSpan={4}>
                                <div className="spinner">
                                    <div className="bounce1" />
                                    <div className="bounce2" />
                                    <div className="bounce3" />
                                </div>
                            </td>
                        </tr>
                    </tbody>
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
                <div className="spinner">
                    <div className="bounce1" />
                    <div className="bounce2" />
                    <div className="bounce3" />
                </div>
            </div>

            <h4 className="mt2 mb2">Loading on table initialization</h4>
            <div className="table-container loading-component">
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
                    <tbody className="loading-row">
                        <tr>
                            <td colSpan={4}>
                                <div className="spinner">
                                    <div className="bounce1" />
                                    <div className="bounce2" />
                                    <div className="bounce3" />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h4 className="mt2 mb2">Loading after table initialization</h4>
            <div className="table-container loading-component">
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
                <div className="spinner">
                    <div className="bounce1" />
                    <div className="bounce2" />
                    <div className="bounce3" />
                </div>
            </div>

            <div className="table-last-update">Last update: 3:15:44 PM</div>
        </>
    );
}
