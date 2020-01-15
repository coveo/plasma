import * as React from 'react';
import * as _ from 'underscore';

export const TableLoading = ({
    numberOfColumns = 4,
    numberOfRow = 10,
}: {
    numberOfColumns?: number;
    numberOfRow?: number;
}) => {
    return (
        <>
            <table className="table big-table">
                <TableBodyLoading numberOfColumns={numberOfColumns} numberOfRow={numberOfRow} />
            </table>
        </>
    );
};

export const TableBodyLoading = ({
    numberOfColumns = 4,
    numberOfRow = 10,
}: {
    numberOfColumns?: number;
    numberOfRow?: number;
}) => (
    <tbody>
        {_.times(numberOfRow, (nColumn: number) => (
            <tr key={`table-row-loading-${nColumn}`} className="mod-border-bottom no-hover">
                {_.times(numberOfColumns, (nRow: number) => (
                    <TableRowLoading key={`table-row-loading-${nRow}`} />
                ))}
            </tr>
        ))}
    </tbody>
);

const TableRowLoading = () => (
    <td className="table-cell-loading">
        <div className="table-cell-content-loading" />
    </td>
);
