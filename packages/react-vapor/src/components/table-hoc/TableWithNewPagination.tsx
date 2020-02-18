import * as React from 'react';
import {connect} from 'react-redux';
import {keys} from 'ts-transformer-keys';
import * as _ from 'underscore';
import {WithServerSideProcessingProps} from '../../hoc/withServerSideProcessing';

import {IReactVaporState} from '../../ReactVapor';
import {IDispatch} from '../../utils';
import {ConfigSupplier, HocUtils} from '../../utils/HocUtils';
import {FlatSelectSelectors} from '../flatSelect/FlatSelectSelectors';
import {INavigationChildrenProps, INavigationOwnProps} from '../navigation';
import {NavigationSelectors} from '../navigation/NavigationSelectors';
import {PER_PAGE_NUMBERS} from '../navigation/perPage/NavigationPerPage';
import {PaginationUtils} from '../pagination/PaginationUtils';
import {TablePagination} from '../pagination/TablePagination';
import {TableWithPaginationActions} from './actions/TableWithPaginationActions';
import {ITableHOCOwnProps} from './TableHOC';
import {TableSelectors} from './TableSelectors';
import {TableHOCUtils} from './utils/TableHOCUtils';

const TableWithNewPaginationProps = keys<ITableWithNewPaginationStateProps>();

const sliceData = (data: any[], startingIndex: number, endingIndex: number) => data.slice(startingIndex, endingIndex);

export interface ITableWithNewPaginationConfig
    extends WithServerSideProcessingProps,
        Partial<INavigationOwnProps>,
        Partial<INavigationChildrenProps> {}

export interface ITableWithNewPaginationProps
    extends ITableHOCOwnProps,
        WithServerSideProcessingProps,
        Partial<ITableWithNewPaginationStateProps>,
        ReturnType<typeof mapDispatchToProps> {}

export interface ITableWithNewPaginationStateProps {
    totalEntries: number;
    totalPages: number;
    pageNb: number;
    perPage: number;
}

const mapDispatchToProps = (dispatch: IDispatch, ownProps: ITableWithNewPaginationProps) => ({
    onMount: () => dispatch(TableWithPaginationActions.add(ownProps.id)),
    onUnmount: () => dispatch(TableWithPaginationActions.remove(ownProps.id)),
});

export const tableWithNewPagination = (
    supplier: ConfigSupplier<ITableWithNewPaginationConfig> = {perPageNumbers: PER_PAGE_NUMBERS}
) => (
    Component: React.ComponentType<ITableWithNewPaginationProps>
): React.ComponentClass<ITableWithNewPaginationProps & React.HTMLAttributes<HTMLTableElement>> => {
    const config = HocUtils.supplyConfig(supplier);
    const mapStateToProps = (state: IReactVaporState, ownProps: ITableWithNewPaginationProps) => {
        const pageNb = NavigationSelectors.getPaginationPage(state, {id: TableHOCUtils.getPaginationId(ownProps.id)});

        const perPage =
            parseInt(
                FlatSelectSelectors.getSelectedOptionId(state, {
                    id: PaginationUtils.getPaginationPerPageId(ownProps.id),
                }),
                10
            ) || PER_PAGE_NUMBERS[1];

        const isServer = ownProps.isServer || config.isServer;
        const length = TableSelectors.getDataCount(state, {
            id: ownProps.id,
            data: ownProps.data,
            isServer,
        });

        const startingIndex = pageNb * perPage;
        const endingIndex = startingIndex + perPage;

        return {
            pageNb,
            perPage,
            totalEntries: length,
            totalPages: Math.max(Math.ceil(length / perPage), 1),
            data: isServer ? ownProps.data : ownProps.data && sliceData(ownProps.data, startingIndex, endingIndex),
        };
    };

    class TableWithNewPaginationDisconnected extends React.Component<ITableHOCOwnProps & ITableWithNewPaginationProps> {
        componentDidMount() {
            this.props.onMount();
        }

        componentWillUnmount() {
            this.props.onUnmount();
        }

        componentDidUpdate(prevProps: ITableWithNewPaginationProps) {
            if (prevProps.pageNb !== this.props.pageNb || prevProps.perPage !== this.props.perPage) {
                this.props.onUpdate?.();
            }
        }

        render() {
            const newProps = _.omit(this.props, [...TableWithNewPaginationProps]);
            return (
                <Component {...newProps}>
                    <TablePagination
                        id={this.props.id}
                        disabled={this.props.isLoading}
                        totalPages={this.props.totalPages}
                        defaultPerPageSelected={
                            config?.perPageNumbers?.length > 1
                                ? config?.perPageNumbers[1]
                                : config?.perPageNumbers[0] ?? PER_PAGE_NUMBERS[1]
                        }
                        totalEntries={this.props.totalEntries}
                        perPageNumbers={config.perPageNumbers}
                    />
                    {this.props.children}
                </Component>
            );
        }
    }

    return connect(mapStateToProps, mapDispatchToProps)(TableWithNewPaginationDisconnected);
};
