import * as React from 'react';
import {keys} from 'ts-transformer-keys/index';
import * as _ from 'underscore';
import {IReactVaporState} from '../../ReactVapor';
import {callIfDefined} from '../../utils/FalsyValuesUtils';
import {ReduxConnect} from '../../utils/ReduxUtils';
import {FilterBoxConnected} from '../filterBox/FilterBoxConnected';
import {IFilterState} from '../filterBox/FilterBoxReducers';
import {IMaybeServerConfig, ITableHOCOwnProps} from './TableHOC';

export interface ITableWithFilterConfig extends IMaybeServerConfig {
    matchFilter?: (filterValue: string, datum: any) => boolean;
}

export interface ITableWithFilterStateProps {
    filter: string;
}

export interface ITableWithFilterDispatchProps {
    onRender: () => void;
}

export interface ITableWithFilterProps extends Partial<ITableWithFilterStateProps>,
    Partial<ITableWithFilterDispatchProps>,
    ITableHOCOwnProps {}

const TableWithFilterPropsToOmit = keys<ITableWithFilterStateProps>();

const defaultMatchFilter = (filter: string, datum: any) => JSON.stringify(_.values(datum).map((v: string) => v.toLowerCase())).indexOf(filter.toLowerCase()) !== -1;

type FilterableTableComponent = React.ComponentClass<ITableWithFilterProps>;

export const tableWithFilter = (config: ITableWithFilterConfig = {}) => (Component: FilterableTableComponent): FilterableTableComponent => {
    const mapStateToProps = (state: IReactVaporState, ownProps: ITableWithFilterProps): ITableWithFilterStateProps | ITableHOCOwnProps => {
        const filter: IFilterState = _.findWhere(state.filters, {id: ownProps.id});
        const matchFilter = config.matchFilter || defaultMatchFilter;
        const filterData = () => filter && filter.filterText
            ? _.filter(ownProps.data, (datum: any) => matchFilter(filter.filterText, datum))
            : ownProps.data;

        return {
            filter: filter && filter.filterText,
            data: config.isServer ? ownProps.data : ownProps.data && filterData(),
        };
    };

    @ReduxConnect(mapStateToProps)
    class TableWithFilter extends React.Component<ITableWithFilterProps> {

        componentDidUpdate(prevProps: ITableWithFilterProps) {
            if (prevProps.filter !== this.props.filter) {
                callIfDefined(this.props.onUpdate);
            }
        }

        render() {
            const filterAction = (
                <FilterBoxConnected
                    key='FilterBox'
                    id={this.props.id}
                    className='coveo-table-actions'
                    isAutoFocus
                />
            );
            const newActions = [...(this.props.actions || []), filterAction];
            const newProps = _.omit(this.props, [...TableWithFilterPropsToOmit]);
            return (
                <Component {...newProps} actions={newActions}>
                    {this.props.children}
                </Component>
            );
        }
    }

    return TableWithFilter;
};
