export default function FixedHeader() {
    return (
        <div className="fixed-header-table-container">
            {/* You need to set the height off your table body (height of the scrolling box). */}
            <div className="fixed-header-table" style={{height: 140}}>
                <table className="table">
                    <thead>
                    <tr>
                        <th className="admin-sort">
                            <div className="fixed-header-container">
                                <label className="coveo-checkbox-label mr1">
                                    <input type="checkbox" className="coveo-checkbox"/>
                                    <button title="Select All" type="button"/>
                                </label>
                                Selected
                                <div className="admin-sort-icon">
                            <span>
                                <svg viewBox="0 0 260 390" className="tables-sort icon">
                                    <path className="asc-arrow" d="m258 131l-128-128-128 128"/>
                                    <path className="desc-arrow" d="m1 259l128 128 128-128"/>
                                </svg>
                            </span>
                                </div>
                            </div>
                        </th>
                        <th className="admin-sort">
                            Column 1
                            <div className="fixed-header-container">
                                Column 1
                                <div className="admin-sort-icon">
                            <span>
                                <svg viewBox="0 0 260 390" className="tables-sort icon">
                                    <path className="asc-arrow" d="m258 131l-128-128-128 128"/>
                                    <path className="desc-arrow" d="m1 259l128 128 128-128"/>
                                </svg>
                            </span>
                                </div>
                            </div>
                        </th>
                        <th>
                            Column 2
                            <div className="fixed-header-container">
                                Column 2
                            </div>
                        </th>
                        <th className="admin-sort">
                            Column 3
                            <div className="fixed-header-container">
                                Column 3
                                <div className="admin-sort-icon">
                            <span>
                                <svg viewBox="0 0 260 390" className="tables-sort icon">
                                    <path className="asc-arrow" d="m258 131l-128-128-128 128"/>
                                    <path className="desc-arrow" d="m1 259l128 128 128-128"/>
                                </svg>
                            </span>
                                </div>
                            </div>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            <label className="coveo-checkbox-label">
                                <input type="checkbox" className="coveo-checkbox"/>
                                <button type="button"/>
                            </label>
                        </td>
                        <td>Data 1</td>
                        <td>Data 2</td>
                        <td>Data 3</td>
                    </tr>
                    <tr>
                        <td>
                            <label className="coveo-checkbox-label">
                                <input type="checkbox" className="coveo-checkbox"/>
                                <button type="button"/>
                            </label>
                        </td>
                        <td>Data 1</td>
                        <td>Data 2</td>
                        <td>Data 3</td>
                    </tr>
                    <tr>
                        <td>
                            <label className="coveo-checkbox-label">
                                <input type="checkbox" className="coveo-checkbox"/>
                                <button type="button"/>
                            </label>
                        </td>
                        <td>Data 1</td>
                        <td>Data 2</td>
                        <td>Data 3</td>
                    </tr>
                    <tr>
                        <td>
                            <label className="coveo-checkbox-label">
                                <input type="checkbox" className="coveo-checkbox"/>
                                <button type="button"/>
                            </label>
                        </td>
                        <td>Data 1</td>
                        <td>Data 2</td>
                        <td>Data 3</td>
                    </tr>
                    <tr>
                        <td>
                            <label className="coveo-checkbox-label">
                                <input type="checkbox" className="coveo-checkbox"/>
                                <button type="button"/>
                            </label>
                        </td>
                        <td>Data 1</td>
                        <td>Data 2</td>
                        <td>Data 3</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
