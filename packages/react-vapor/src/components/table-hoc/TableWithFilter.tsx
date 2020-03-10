import * as React from 'react';
import {connect} from 'react-redux';
import * as _ from 'underscore';

import {WithServerSideProcessingProps} from '../../hoc/withServerSideProcessing';
import {IReactVaporState} from '../../ReactVapor';
import {ConfigSupplier, HocUtils, UrlUtils} from '../../utils';
import {BlankSlateWithTable, IBlankSlateWithTableProps} from '../blankSlate';
import {FilterBoxConnected, FilterBoxSelectors} from '../filterBox';
import {ITableHOCOwnProps, TableHOC} from './TableHOC';
import {Params} from './TableWithUrlState';

export interface ITableWithFilterConfig extends WithServerSideProcessingProps {
    blankSlate?: IBlankSlateWithTableProps;
    matchFilter?: (filterValue: string, datum: any) => boolean;
    placeholder?: string;
}

export interface TableWithFilterProps {
    filterBlankslate?: IBlankSlateWithTableProps;
    filterMatcher?: (filterValue: string, datum: any) => boolean;
    filterPlaceholder?: string;
}

const defaultMatchFilter = (filter: string, datum: any) =>
    JSON.stringify(_.values(datum).map((v: any) => _.isString(v) && v.toLowerCase())).indexOf(filter.toLowerCase()) !==
    -1;

export const tableWithFilter = (
    supplier: ConfigSupplier<ITableWithFilterConfig> = {blankSlate: {title: 'No results'}}
) => (
    WrappedTable: typeof TableHOC
): React.ComponentType<ITableHOCOwnProps & TableWithFilterProps & React.HTMLAttributes<HTMLTableElement>> => {
    type OwnProps = ITableHOCOwnProps & TableWithFilterProps & WithServerSideProcessingProps;
    type Props = OwnProps & ReturnType<typeof mapStateToProps>;

    const config = HocUtils.supplyConfig(supplier);

    const mapStateToProps = (state: IReactVaporState, ownProps: OwnProps) => {
        const filterText = FilterBoxSelectors.getFilterText(state, ownProps);

        const matchFilter = ownProps.filterMatcher || config.matchFilter || defaultMatchFilter;
        const filterData = () =>
            filterText ? _.filter(ownProps.data, (datum: any) => matchFilter(filterText, datum)) : ownProps.data;
        const urlParams = UrlUtils.getSearchParams();
        return {
            filter: filterText,
            urlFilter: urlParams[Params.filter],
            data: ownProps.isServer || config.isServer ? ownProps.data : ownProps.data && filterData(),
        };
    };

    class TableWithFilter extends React.Component<Props> {
        componentDidUpdate(prevProps: Props) {
            if (prevProps.filter !== this.props.filter && this.props.filter !== this.props.urlFilter) {
                this.props.onUpdate?.();
            }
        }

        render() {
            const {filterBlankslate, filterMatcher, filterPlaceholder, filter, urlFilter, ...tableProps} = this.props;
            const blankSlateProps = filterBlankslate || config.blankSlate;
            const shouldShowBlankslate =
                _.isEmpty(this.props.data) && !_.isEmpty(this.props.filter) && !_.isEmpty(blankSlateProps);
            const filterAction = (
                <FilterBoxConnected
                    key="FilterBox"
                    id={this.props.id}
                    className="coveo-table-actions"
                    filterPlaceholder={filterPlaceholder || config.placeholder}
                    isAutoFocus
                />
            );

            return (
                <WrappedTable
                    {...tableProps}
                    actions={[...(this.props.actions ?? []), filterAction]}
                    renderBody={
                        shouldShowBlankslate
                            ? () => <BlankSlateWithTable {...blankSlateProps} />
                            : this.props.renderBody
                    }
                >
                    {this.props.children}
                </WrappedTable>
            );
        }
    }

    return connect(mapStateToProps)(TableWithFilter);
};
