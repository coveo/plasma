import * as classNames from 'classnames';
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
            {isCard
                ? _.times(numberOfRow, (nColumn: number) => (
                      <tr key={`table-card-row-loading-${nColumn}`} className="no-hover">
                          {_.times(numberOfColumns, (nRow: number) => (
                              <Row
                                  isCard={isCard}
                                  key={`table-card-row-loading-${nRow}`}
                                  num={nColumn}
                                  numberOfSubRow={numberOfSubRow}
                              />
                          ))}
                      </tr>
                  ))
                : _.times(numberOfRow, (nColumn: number) => (
                      <tr key={`table-row-loading-${nColumn}`} className="mod-border-bottom no-hover">
                          {_.times(numberOfColumns, (nRow: number) => (
                              <Row key={`table-row-loading-${nRow}`} num={nColumn} />
                          ))}
                      </tr>
                  ))}
        </tbody>
    );
};

const Row = ({isCard = false, num, numberOfSubRow}: {isCard?: boolean; num: number; numberOfSubRow?: number}) => {
    const rowClassName = isCard ? 'table-card-loading' : 'table-cell-loading';
    return (
        <td className={rowClassName}>
            {isCard ? (
                <div className={'table-card-cell-loading'}>
                    {_.times(numberOfSubRow, (nSubRow: number) => (
                        <CardSubRow key={`card-sub-row-loading-${nSubRow}`} num={nSubRow} />
                    ))}
                </div>
            ) : (
                <div className={classNames('table-cell-content-loading', {'mod-half': num % 2})} />
            )}
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

export const TableLoading = {
    Table,
    Body,
    Row,
};
