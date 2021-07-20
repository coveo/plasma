import classNames from 'classnames';
import * as React from 'react';
import * as _ from 'underscore';

import {WithServerSideProcessingProps} from '../../hoc/withServerSideProcessing/withServerSideProcessing';
import {ActionBarConnected} from '../actions/ActionBar';
import {TableLoading} from '../loading/components/TableLoading';
import {PER_PAGE_NUMBERS} from '../navigation/perPage/NavigationPerPage';

/**
 * @deprecated Use WithServerSideProcessingProps directly instead
 */
export type IMaybeServerConfig = WithServerSideProcessingProps;

export interface ColumnWidths {
    [id: string]: number;
}

export interface ITableHOCOwnProps {
    id: string;
    isLoading?: boolean;
    hasActionButtons?: boolean;
    data: any[];
    renderBody: (data: any[]) => React.ReactNode;
    actions?: React.ReactNode[];
    tableHeader?: React.ReactNode;
    onUpdate?: () => void;
    containerClassName?: string;
    tbodyClassName?: string;
    showBorderTop?: boolean;
    showBorderBottom?: boolean;
    loading?: {
        isCard?: boolean;
        numberOfColumns?: number;
        defaultLoadingRow?: number;
        numberOfSubRow?: number;
    };
    columnWidths?: ColumnWidths;
}

export interface ITableHOCProps extends ITableHOCOwnProps {}

export interface ITableHOContext {
    columnWidths?: ColumnWidths;
    setColumnWidths?: (id: string, width: number) => void;
}

const initialColumnWidths: ColumnWidths = {};

export const TableHOCContext = React.createContext<ITableHOContext>({columnWidths: initialColumnWidths});

export const TableHOC: React.FC<ITableHOCProps & React.HTMLAttributes<HTMLTableElement>> = ({
    hasActionButtons = false,
    actions = [],
    showBorderTop = false,
    showBorderBottom = true,
    id,
    children,
    className,
    tableHeader,
    tbodyClassName,
    renderBody,
    data,
    containerClassName,
    isLoading = false,
    loading = {
        isCard: false,
        numberOfColumns: 5,
        defaultLoadingRow: PER_PAGE_NUMBERS[1],
        numberOfSubRow: 3,
    },
}) => {
    const [columnWidths, setColumnWidths] = React.useState<ColumnWidths>({});

    const hasActions = () => hasActionButtons || actions.length;

    const renderActions = () => {
        if (hasActions()) {
            return (
                <ActionBarConnected
                    id={id}
                    removeDefaultContainerClasses
                    extraContainerClasses={classNames(
                        'coveo-table-actions-container',
                        'mod-cancel-header-padding',
                        'mod-align-header',
                        {
                            'mod-border-top': showBorderTop,
                            'mod-border-bottom': showBorderBottom,
                        }
                    ).split(' ')}
                    disabled={isLoading}
                >
                    {actions}
                </ActionBarConnected>
            );
        }
        return null;
    };

    const handleColumnWidths = (columnId: string, width: number) => {
        columnWidths[columnId] = width;
        setColumnWidths(columnWidths);
    };

    const table = (
        <table className={classNames(className)} style={{marginTop: hasActions() ? -1 : 0}}>
            {tableHeader}
            <tbody key={`table-body-${id}`} className={classNames({hidden: isLoading}, tbodyClassName)}>
                {renderBody(data)}
            </tbody>
            {isLoading && (
                <TableLoading.Body
                    key={`table-loading-${id}`}
                    isCard={loading?.isCard}
                    numberOfRow={_.size(data) || loading?.defaultLoadingRow}
                    numberOfColumns={loading?.numberOfColumns}
                    numberOfSubRow={loading?.numberOfSubRow}
                />
            )}
        </table>
    );

    return (
        <TableHOCContext.Provider value={{columnWidths, setColumnWidths: handleColumnWidths}}>
            <div className={classNames('table-container', containerClassName)}>
                {renderActions()}
                {table}
                {children}
            </div>
        </TableHOCContext.Provider>
    );
};
