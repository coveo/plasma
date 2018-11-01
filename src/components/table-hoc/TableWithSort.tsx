import * as React from 'react';
import {keys} from 'ts-transformer-keys/index';
import * as _ from 'underscore';
import {IReactVaporState} from '../../ReactVapor';
import {callIfDefined} from '../../utils/FalsyValuesUtils';
import {ReduxConnect} from '../../utils/ReduxUtils';
import {ITableWithSortState} from './reducers/TableWithSortReducers';
import {ITableHOCOwnProps} from './TableHOC';

export interface ITableWithSortConfig {
    sort: (sortKey: string, isAsc: boolean, a: any, b: any) => number;
}

export interface ITableWithSortStateProps {
    isAsc?: boolean;
    sortKey?: string;
}

export interface ITableWithSortProps extends Partial<ITableWithSortStateProps> {}

const TableWithSortPropsToOmit = keys<ITableWithSortStateProps>();

type SortableTableComponent = React.ComponentClass<ITableHOCOwnProps>;

export const tableWithSort = (config: ITableWithSortConfig) => (Component: SortableTableComponent) => {
    const mapStateToProps = (state: IReactVaporState, ownProps: ITableHOCOwnProps): ITableWithSortStateProps | ITableHOCOwnProps => {
        const tableSort: ITableWithSortState = _.find(state.tableHOCHeader, (v: ITableWithSortState) => v.tableId === ownProps.id && _.isBoolean(v.isAsc));
        if (tableSort && ownProps.data) {
            return {
                data: [...ownProps.data].sort((a, b) => config.sort(tableSort.id, tableSort.isAsc, a, b)),
                sortKey: tableSort && tableSort.id,
                isAsc: tableSort && tableSort.isAsc,
            };
        }
        return {};
    };

    @ReduxConnect(mapStateToProps)
    class TableWithSort extends React.Component<ITableHOCOwnProps & ITableWithSortProps> {

        componentDidUpdate(prevProps: ITableWithSortProps) {
            if (prevProps.sortKey !== this.props.sortKey || prevProps.isAsc !== this.props.isAsc) {
                callIfDefined(this.props.onUpdate);
            }
        }

        render() {
            const newProps = {..._.omit(this.props, [...TableWithSortPropsToOmit])};
            return (
                <Component {...newProps}>
                    {this.props.children}
                </Component>
            );
        }
    }

    return TableWithSort;
};
