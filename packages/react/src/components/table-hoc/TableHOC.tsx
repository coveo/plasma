import classNames from 'clsx';
import {ReactNode, HTMLAttributes, FunctionComponent} from 'react';
import * as _ from 'underscore';

import {IContentProps} from '../../Entry';
import {WithServerSideProcessingProps} from '../../hoc/withServerSideProcessing/withServerSideProcessing';
import {ActionBarConnected} from '../actions/ActionBar';
import {TableLoading} from '../loading/components/TableLoading';
import {PER_PAGE_NUMBERS} from '../navigation/perPage/NavigationPerPage';

/**
 * @deprecated Use WithServerSideProcessingProps directly instead
 */
export type IMaybeServerConfig = WithServerSideProcessingProps;

export interface ITableHOCOwnProps {
    /**
     * Unique identifier of the table
     */
    id: string;
    /**
     * Whether the table is loading
     *
     * @default false
     */
    isLoading?: boolean;
    /**
     * Whether the table has action buttons
     *
     * @default false
     */
    hasActionButtons?: boolean;
    /**
     * The data to be displayed in the table
     */
    data: any[];
    /**
     * Content of the body of the table
     *
     * @param data The data from the "data" prop modified by the HOCs if any
     */
    renderBody: (data: any[]) => ReactNode;
    /**
     * The actions button to be displayed in the table header
     *
     * @default []
     */
    actions?: ReactNode[];
    /**
     * Content to add before the filter and actions in the table header
     */
    actionBarPrefixContent?: IContentProps;
    /**
     * Content of the header of the table
     */
    tableHeader?: ReactNode;
    /**
     * A callback function executed each time an HOC of the table changes. For example, it's useful to fetch new data with the server side table
     */
    onUpdate?: () => void;
    /**
     * Additionnal CSS classes for the outer most container of the table
     */
    containerClassName?: string;
    /**
     * Additionnal CSS classes for body of the table
     */
    tbodyClassName?: string;
    /**
     * Whether the table header has the "mod-border-top" css class. The header must have actions buttons for the style to be applied
     *
     * @default false
     */
    showBorderTop?: boolean;
    /**
     * Whether the table header has the "mod-border-bottom" css class. The header must have actions buttons for the style to be applied
     *
     * @default true
     */
    showBorderBottom?: boolean;
    /**
     * Additionnal loading options
     *
     * @default isCard: false, numberOfColumns: 5, defaultLoadingRow: 10, numberOfSubRow: 3,
     */
    loading?: {
        isCard?: boolean;
        numberOfColumns?: number;
        defaultLoadingRow?: number;
        numberOfSubRow?: number;
    };
    children?: ReactNode;
}

export interface ITableHOCProps extends ITableHOCOwnProps {}

/**
 * @deprecated Use Mantine instead
 */
export const TableHOC: FunctionComponent<
    React.PropsWithChildren<ITableHOCProps & HTMLAttributes<HTMLTableElement>>
> = ({
    hasActionButtons = false,
    actions = [],
    actionBarPrefixContent,
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
    const hasActionBar = () => hasActionButtons || actions.length || actionBarPrefixContent;

    const renderActionBar = () => {
        if (hasActionBar()) {
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
                        },
                    ).split(' ')}
                    disabled={isLoading}
                    prefixContent={actionBarPrefixContent}
                >
                    {actions}
                </ActionBarConnected>
            );
        }
        return null;
    };

    const table = (
        <table className={classNames(className)} style={{marginTop: hasActionBar() ? '-1px' : 0}}>
            {tableHeader}
            <tbody
                key={`table-body-${id}`}
                className={classNames({hidden: isLoading}, tbodyClassName)}
                aria-busy={isLoading}
                aria-hidden={isLoading}
            >
                {renderBody(data || [])}
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
        <div className={classNames('table-container', containerClassName)}>
            {renderActionBar()}
            {table}
            {children}
        </div>
    );
};
