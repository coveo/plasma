import classNames from 'classnames';
import * as React from 'react';
import * as _ from 'underscore';

import {WithServerSideProcessingProps} from '../../hoc/withServerSideProcessing/withServerSideProcessing';
import {ActionBarConnected} from '../actions/ActionBar';
import {TableLoading} from '../loading/components/TableLoading';
import {PER_PAGE_NUMBERS} from '../navigation/perPage/NavigationPerPage';
import {FixedWidthState} from './utils/TableHOCUtils';

/**
 * @deprecated Use WithServerSideProcessingProps directly instead
 */
export type IMaybeServerConfig = WithServerSideProcessingProps;

export interface ITableHOCOwnProps {
    id: string;
    isLoading?: boolean;
    hasActionButtons?: boolean;
    data: any[];
    renderBody: (data: any[], fixedWidthColumns?: FixedWidthState[]) => React.ReactNode;
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
        fixedWidthColumns?: FixedWidthState[];
    };
}

export interface ITableHOCProps extends ITableHOCOwnProps {}

export class TableHOC extends React.PureComponent<ITableHOCProps & React.HTMLAttributes<HTMLTableElement>> {
    static defaultProps: Partial<ITableHOCOwnProps> = {
        isLoading: false,
        hasActionButtons: false,
        actions: [],
        showBorderTop: false,
        showBorderBottom: true,
        loading: {
            isCard: false,
            numberOfColumns: 5,
            defaultLoadingRow: PER_PAGE_NUMBERS[1],
            numberOfSubRow: 3,
            fixedWidthColumns: [],
        },
    };

    render() {
        const table = (
            <table className={classNames(this.props.className)} style={{marginTop: this.hasActions() ? -1 : 0}}>
                {this.props.tableHeader}
                <tbody
                    key={`table-body-${this.props.id}`}
                    className={classNames({hidden: this.props.isLoading}, this.props.tbodyClassName)}
                >
                    {this.props.renderBody(this.props.data || [], this.props.loading.fixedWidthColumns)}
                </tbody>
                {this.props.isLoading && (
                    <TableLoading.Body
                        key={`table-loading-${this.props.id}`}
                        isCard={this.props.loading?.isCard}
                        numberOfRow={_.size(this.props.data) || this.props.loading?.defaultLoadingRow}
                        numberOfColumns={this.props.loading?.numberOfColumns}
                        numberOfSubRow={this.props.loading?.numberOfSubRow}
                        /* use when you want fixed width */
                        columns={this.props.loading.fixedWidthColumns}
                    />
                )}
            </table>
        );

        return (
            <div className={classNames('table-container', this.props.containerClassName)}>
                {this.renderActions()}
                {table}
                {this.props.children}
            </div>
        );
    }

    private hasActions() {
        return this.props.hasActionButtons || this.props.actions.length;
    }

    private renderActions() {
        if (this.hasActions()) {
            return (
                <ActionBarConnected
                    id={this.props.id}
                    removeDefaultContainerClasses
                    extraContainerClasses={classNames(
                        'coveo-table-actions-container',
                        'mod-cancel-header-padding',
                        'mod-align-header',
                        {
                            'mod-border-top': this.props.showBorderTop,
                            'mod-border-bottom': this.props.showBorderBottom,
                        }
                    ).split(' ')}
                    disabled={this.props.isLoading}
                >
                    {this.props.actions}
                </ActionBarConnected>
            );
        }
        return null;
    }
}
