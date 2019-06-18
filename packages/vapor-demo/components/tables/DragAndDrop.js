import * as VaporSVG from 'coveo-styleguide';
import Svg from '../Svg';

export default function DragAndDrop() {
    return (
        <>
            <table className="drag-and-drop-table-view table">
                <thead>
                    <tr>
                        <th className="drag-column" />
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
                    <tr draggable="false">
                        <td className="handle drag-feedback">
                            <Svg name={VaporSVG.svg.dragDrop.name} svgClass="icon icon-small" />
                        </td>
                        <td className="drag-feedback">Data 1</td>
                        <td className="drag-feedback">Data 1</td>
                        <td className="drag-feedback">
                            <label className="coveo-checkbox-label">
                                <input type="checkbox" className="coveo-checkbox" />
                                <button type="button" />
                            </label>
                            <span className="cell-content">Data 3</span>
                        </td>
                    </tr>
                    <tr className="selected" draggable="false">
                        <td className="handle drag-feedback">
                            <Svg name={VaporSVG.svg.dragDrop.name} svgClass="icon icon-small" />
                        </td>
                        <td className="drag-feedback">Data 2</td>
                        <td className="drag-feedback">Data 2</td>
                        <td className="drag-feedback">
                            <label className="coveo-checkbox-label">
                                <input type="checkbox" className="coveo-checkbox" />
                                <button type="button" />
                            </label>
                            <span className="cell-content">Data 3</span>
                        </td>
                    </tr>
                    <tr draggable="false">
                        <td className="handle drag-feedback">
                            <Svg name={VaporSVG.svg.dragDrop.name} svgClass="icon icon-small" />
                        </td>
                        <td className="drag-feedback">Data 3</td>
                        <td className="drag-feedback">Data 3</td>
                        <td className="drag-feedback">
                            <label className="coveo-checkbox-label">
                                <input type="checkbox" className="coveo-checkbox" />
                                <button type="button" />
                            </label>
                            <span className="cell-content">Data 3</span>
                        </td>
                    </tr>
                    <tr draggable="false">
                        <td className="handle drag-feedback">
                            <Svg name={VaporSVG.svg.dragDrop.name} svgClass="icon icon-small" />
                        </td>
                        <td className="drag-feedback">Data 4</td>
                        <td className="drag-feedback">Data 4</td>
                        <td className="drag-feedback">
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
        </>
    );
}
