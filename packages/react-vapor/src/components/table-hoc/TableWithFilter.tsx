import * as React from 'react';
import {connect} from 'react-redux';
import {keys} from 'ts-transformer-keys';
import * as _ from 'underscore';

import {WithServerSideProcessingProps} from '../../hoc/withServerSideProcessing';
import {IReactVaporState} from '../../ReactVapor';
import {ConfigSupplier, HocUtils, UrlUtils} from '../../utils';
import {BlankSlateWithTable, IBlankSlateProps} from '../blankSlate';
import {FilterBoxConnected, FilterBoxSelectors} from '../filterBox';
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
) => (
    Component: React.ComponentClass<ITableWithFilterProps>
): React.ComponentClass<ITableWithFilterProps & React.HTMLAttributes<HTMLTableElement>> => {
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
        };
    };

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
                renderBody:
                    _.isEmpty(this.props.data) && this.props.filter !== '' && config.blankSlate
                        ? () => <BlankSlateWithTable {...HocUtils.supplyConfig(config.blankSlate)} />
                        : this.props.renderBody,
            };

            return (
                <Component {...newProps} actions={newActions} withFilter>
                    {this.props.children}
                </Component>
            );
        }
    }

    return connect(mapStateToProps)(TableWithFilter);
};
