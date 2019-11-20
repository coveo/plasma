import * as React from 'react';
import {keys} from 'ts-transformer-keys';
import * as _ from 'underscore';

import {WithServerSideProcessingProps} from '../../hoc/withServerSideProcessing/withServerSideProcessing';
import {IReactVaporState} from '../../ReactVapor';
import {ConfigSupplier, HocUtils} from '../../utils/HocUtils';
import {ReduxConnect} from '../../utils/ReduxUtils';
import {ITableWithSortState} from './reducers/TableWithSortReducers';
import {ITableHOCOwnProps} from './TableHOC';
import {TableSelectors} from './TableSelectors';

export interface ITableWithSortConfig extends WithServerSideProcessingProps {
    sort?: (sortKey: string, isAsc: boolean, a: any, b: any) => number;
}

export interface ITableWithSortStateProps {
    isAsc?: boolean;
    sortKey?: string;
}

export interface ITableWithSortProps
    extends ITableHOCOwnProps,
        Partial<ITableWithSortStateProps>,
        WithServerSideProcessingProps {}

const TableWithSortPropsToOmit = keys<ITableWithSortStateProps>();

const defaultSort = () => 0;

export type SortableTableComponent = React.ComponentType<ITableWithSortProps>;

export const tableWithSort = (supplier: ConfigSupplier<ITableWithSortConfig> = {}) => (
    Component: SortableTableComponent
): SortableTableComponent => {
    const config = HocUtils.supplyConfig(supplier);

    const mapStateToProps = (
        state: IReactVaporState,
        ownProps: ITableWithSortProps
    ): ITableWithSortStateProps | ITableHOCOwnProps => {
        const tableSort: ITableWithSortState = TableSelectors.getSort(state, ownProps);
        const sort = config.sort || defaultSort;

        return {
            data:
                ownProps.isServer || config.isServer
                    ? ownProps.data
                    : ownProps.data && [...ownProps.data].sort((a, b) => sort(tableSort.id, tableSort.isAsc, a, b)),
            sortKey: tableSort && tableSort.id,
            isAsc: !!(tableSort && tableSort.isAsc),
        };
    };

    @ReduxConnect(mapStateToProps)
    class TableWithSort extends React.Component<ITableWithSortProps> {
        componentDidUpdate(prevProps: ITableWithSortProps) {
            if (prevProps.sortKey !== this.props.sortKey || prevProps.isAsc !== this.props.isAsc) {
                this.props.onUpdate?.();
            }
        }

        render() {
            const newProps = {..._.omit(this.props, [...TableWithSortPropsToOmit])};
            return <Component {...newProps}>{this.props.children}</Component>;
        }
    }

    return TableWithSort;
};
