import * as React from 'react';
import {keys} from 'ts-transformer-keys';
import * as _ from 'underscore';

import {WithServerSideProcessingProps} from '../../hoc/withServerSideProcessing/withServerSideProcessing';
import {IReactVaporState} from '../../ReactVapor';
import {ConfigSupplier, HocUtils} from '../../utils/HocUtils';
import {ReduxConnect} from '../../utils/ReduxUtils';
import {UrlUtils} from '../../utils/UrlUtils';
import {IBlankSlateProps} from '../blankSlate/BlankSlate';
import {FilterBoxConnected} from '../filterBox/FilterBoxConnected';
import {FilterBoxSelectors} from '../filterBox/FilterBoxSelectors';
import {ITableHOCOwnProps} from './TableHOC';
import {Params} from './TableWithUrlState';

export interface ITableWithFilterConfig extends WithServerSideProcessingProps {
    blankSlate?: IBlankSlateProps;
    matchFilter?: (filterValue: string, datum: any) => boolean;
    placeholder?: string;
}

export interface ITableWithFilterStateProps {
    filter: string;
    urlFilter: string;
}

export interface ITableWithFilterDispatchProps {
    addFilter: (filterText: string) => void;
    onRender: () => void;
}

export interface ITableWithFilterProps
    extends Partial<ITableWithFilterStateProps>,
        Partial<ITableWithFilterDispatchProps>,
        ITableHOCOwnProps,
        WithServerSideProcessingProps {}

const TableWithFilterPropsToOmit = keys<ITableWithFilterStateProps>();

const defaultMatchFilter = (filter: string, datum: any) =>
    JSON.stringify(_.values(datum).map((v: any) => _.isString(v) && v.toLowerCase())).indexOf(filter.toLowerCase()) !==
    -1;

export const tableWithFilter = (
    supplier: ConfigSupplier<ITableWithFilterConfig> = {blankSlate: {title: 'No results'}}
) => (Component: React.ComponentClass<ITableWithFilterProps>) => {
    const config = HocUtils.supplyConfig(supplier);

    const mapStateToProps = (
        state: IReactVaporState,
        ownProps: ITableWithFilterProps
    ): ITableWithFilterStateProps | ITableHOCOwnProps => {
        const filterText = FilterBoxSelectors.getFilterText(state, ownProps);

        const matchFilter = config.matchFilter || defaultMatchFilter;
        const filterData = () =>
            filterText ? _.filter(ownProps.data, (datum: any) => matchFilter(filterText, datum)) : ownProps.data;
        const urlParams = UrlUtils.getSearchParams();
        return {
            filter: filterText,
            urlFilter: urlParams[Params.filter],
            data: ownProps.isServer || config.isServer ? ownProps.data : ownProps.data && filterData(),
        } as any;
    };

    @ReduxConnect(mapStateToProps)
    class TableWithFilter extends React.Component<ITableWithFilterProps> {
        componentDidUpdate(prevProps: ITableWithFilterProps) {
            if (prevProps.filter !== this.props.filter && this.props.filter !== this.props.urlFilter) {
                this.props.onUpdate?.();
            }
        }

        render() {
            const filterAction = (
                <FilterBoxConnected
                    key="FilterBox"
                    id={this.props.id}
                    className="coveo-table-actions"
                    filterPlaceholder={config.placeholder}
                    isAutoFocus
                />
            );
            const newActions = [...(this.props.actions || []), filterAction];
            const newProps = {
                ..._.omit(this.props, [...TableWithFilterPropsToOmit]),
            };

            return (
                <Component {...newProps} actions={newActions} withFilter>
                    {this.props.children}
                </Component>
            );
        }
    }

    return TableWithFilter;
};
