import classNames from 'classnames';
import * as React from 'react';
import * as _ from 'underscore';

const Table = ({
    isCard = false,
    numberOfColumns = 4,
    numberOfRow = 10,
    numberOfSubRow = 3,
}: {
    isCard?: boolean;
    numberOfColumns?: number;
    numberOfRow?: number;
    numberOfSubRow?: number;
}) => {
    return (
        <>
            <table className="table big-table">
                <Body
                    isCard={isCard}
                    numberOfColumns={numberOfColumns}
                    numberOfRow={numberOfRow}
                    numberOfSubRow={numberOfSubRow}
                />
            </table>
        </>
    );
};

const Body = ({
    isCard = false,
    numberOfColumns = 4,
    numberOfRow = 10,
    numberOfSubRow = 3,
}: {
    isCard?: boolean;
    numberOfColumns?: number;
    numberOfRow?: number;
    numberOfSubRow?: number;
}) => {
    return (
        <tbody>
            {_.times(numberOfRow, (nColumn: number) =>
                isCard ? (
                    <CardRow
                        key={`table-card-row-loading-${nColumn}`}
                        numberOfColumns={numberOfColumns}
                        numberOfSubRow={numberOfSubRow}
                    />
                ) : (
                    <TableRow
                        key={`table-row-loading-${nColumn}`}
                        numberOfColumns={numberOfColumns}
                        nColumn={nColumn}
                    />
                )
            )}
        </tbody>
    );
};

const CardRow = ({numberOfColumns, numberOfSubRow}: {numberOfColumns?: number; numberOfSubRow?: number}) => {
    return (
        <tr className="no-hover">
            {_.times(numberOfColumns, (nRow: number) => (
                <CardLoading numberOfSubRow={numberOfSubRow} />
            ))}
        </tr>
    );
};

const CardLoading = ({numberOfSubRow}: {numberOfSubRow?: number}) => {
    return (
        <td className="table-card-loading">
            <div className={'table-card-cell-loading'}>
                {_.times(numberOfSubRow, (nSubRow: number) => (
                    <CardSubRow key={`card-sub-row-loading-${nSubRow}`} num={nSubRow} />
                ))}
            </div>
        </td>
    );
};

const CardSubRow = ({num}: {num: number}) => {
    return (
        <p className={'card-cell-row-loading my2'}>
            <div className={classNames('card-cell-content-loading', {'mod-half': (num + 1) % 2})} />
        </p>
    );
};

const TableRow = ({numberOfColumns, nColumn}: {numberOfColumns?: number; nColumn: number}) => {
    return (
        <tr className="mod-border-bottom no-hover">
            {_.times(numberOfColumns, (nRow: number) => (
                <Row key={`table-row-loading-${nRow}`} num={nColumn} />
            ))}
        </tr>
    );
};

const Row = ({num}: {num: number}) => {
    return (
        <td className="table-cell-loading">
            <div className={classNames('table-cell-content-loading', {'mod-half': num % 2})} />
        </td>
    );
};

export const TableLoading = {
    Table,
    Body,
    CardRow,
    TableRow,
    CardLoading,
    CardSubRow,
    Row,
};
