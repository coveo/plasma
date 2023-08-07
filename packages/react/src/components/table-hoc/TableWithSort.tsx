import {Component, ComponentType, ReactNode} from 'react';
import * as _ from 'underscore';

import {WithServerSideProcessingProps} from '../../hoc/withServerSideProcessing/withServerSideProcessing';
import {PlasmaState} from '../../PlasmaState';
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
    children?: ReactNode;
}

export interface ITableWithSortProps
    extends ITableHOCOwnProps,
        Partial<ITableWithSortStateProps>,
        WithServerSideProcessingProps {}

const TableWithSortPropsToOmit = ['isAsc', 'sortKey'];

const defaultSort = () => 0;

export type SortableTableComponent = ComponentType<any>;

/**
 * @deprecated Use Mantine instead
 */
export const tableWithSort =
    (supplier: ConfigSupplier<ITableWithSortConfig> = {}) =>
    (WrappedComponent: SortableTableComponent): SortableTableComponent => {
        const config = HocUtils.supplyConfig(supplier);

        const mapStateToProps = (
            state: PlasmaState,
            ownProps: ITableWithSortProps,
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
        class TableWithSort extends Component<ITableWithSortProps> {
            componentDidUpdate(prevProps: ITableWithSortProps) {
                if (prevProps.sortKey !== this.props.sortKey || prevProps.isAsc !== this.props.isAsc) {
                    this.props.onUpdate?.();
                }
            }

            render() {
                const newProps = {..._.omit(this.props, [...TableWithSortPropsToOmit])};
                return <WrappedComponent {...newProps}>{this.props.children}</WrappedComponent>;
            }
        }

        return TableWithSort;
    };
