import * as classNames from 'classnames';
import * as React from 'react';
import * as _ from 'underscore';

const Table = ({numberOfColumns = 4, numberOfRow = 10}: {numberOfColumns?: number; numberOfRow?: number}) => {
    return (
        <>
            <table className="table big-table">
                <Body numberOfColumns={numberOfColumns} numberOfRow={numberOfRow} />
            </table>
        </>
    );
};

const Body = ({numberOfColumns = 4, numberOfRow = 10}: {numberOfColumns?: number; numberOfRow?: number}) => (
    <tbody>
        {_.times(numberOfRow, (nColumn: number) => (
            <tr key={`table-row-loading-${nColumn}`} className="mod-border-bottom no-hover">
                {_.times(numberOfColumns, (nRow: number) => (
                    <Row key={`table-row-loading-${nRow}`} num={nColumn} />
                ))}
            </tr>
        ))}
    </tbody>
);

const Row = ({num}: {num: number}) => (
    <td className="table-cell-loading">
        <div className={classNames('table-cell-content-loading', {'mod-half': num % 2})} />
    </td>
);

export const TableLoading = {
    Table,
    Body,
    Row,
};
