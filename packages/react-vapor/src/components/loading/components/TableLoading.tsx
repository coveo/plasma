import * as React from 'react';
import * as _ from 'underscore';

export const TableLoading = ({numberOfColumn = 4, numberOfRow = 10}: {numberOfColumn: number; numberOfRow: number}) => {
    return (
        <>
            <table className="table big-table">
                <tbody>
                    {_.times(numberOfRow, () => (
                        <tr className="mod-border-bottom no-hover">
                            {_.times(numberOfColumn, () => (
                                <TableRowLoading />
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

const TableRowLoading = () => (
    <td className="table-cell-loading">
        <div className="table-cell-content-loading" />
    </td>
);
