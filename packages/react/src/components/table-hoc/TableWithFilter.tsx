import {Component} from 'react';
import {connect} from 'react-redux';
import * as _ from 'underscore';

import {WithServerSideProcessingProps} from '../../hoc/withServerSideProcessing';
import {PlasmaState} from '../../PlasmaState';
import {ConfigSupplier, HocUtils, UrlUtils} from '../../utils';
import {BlankSlateWithTable, IBlankSlateWithTableProps} from '../blankSlate';
import {FilterBoxConnected, FilterBoxSelectors, IFilterBoxOwnProps} from '../filterBox';
import {ITableHOCOwnProps, TableHOC} from './TableHOC';
import {Params} from './TableWithUrlState';

export interface ITableWithFilterConfig extends WithServerSideProcessingProps {
    blankSlate?: IBlankSlateWithTableProps;
    matchFilter?: (filterValue: string, datum: any) => boolean;
    placeholder?: string;
    filter?: IFilterBoxOwnProps;
}

export interface TableWithFilterProps {
    filterBlankslate?: IBlankSlateWithTableProps;
    filterMatcher?: (filterValue: string, datum: any) => boolean;
    filterPlaceholder?: string;
}

const defaultMatchFilter = (filter: string, datum: any) =>
    JSON.stringify(_.values(datum).map((v: any) => _.isString(v) && v.toLowerCase())).indexOf(filter.toLowerCase()) !==
    -1;

/**
 * @deprecated Use Mantine instead
 */
export const tableWithFilter =
    (
        supplier: ConfigSupplier<ITableWithFilterConfig> = {
            blankSlate: {title: 'No results'},
            filter: {isAutoFocus: true},
        },
    ) =>
    (WrappedTable: typeof TableHOC) => {
        type OwnProps = ITableHOCOwnProps & TableWithFilterProps & WithServerSideProcessingProps;
        type Props = OwnProps & ReturnType<typeof mapStateToProps>;

        const config = HocUtils.supplyConfig(supplier);

        const mapStateToProps = (state: PlasmaState, ownProps: OwnProps) => {
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

        class TableWithFilter extends Component<Props> {
            componentDidUpdate(prevProps: Props) {
                if (prevProps.filter !== this.props.filter && this.props.filter !== this.props.urlFilter) {
                    this.props.onUpdate?.();
                }
            }

            render() {
                const {filterBlankslate, filterMatcher, filterPlaceholder, filter, urlFilter, ...tableProps} =
                    this.props;
                const blankSlateProps = filterBlankslate || config.blankSlate;
                const shouldShowBlankslate =
                    _.isEmpty(this.props.data) && !_.isEmpty(filter) && !_.isEmpty(blankSlateProps);
                const filterAction = (
                    <FilterBoxConnected
                        key="FilterBox"
                        id={this.props.id}
                        className="coveo-table-actions"
                        filterPlaceholder={filterPlaceholder || config.placeholder}
                        isAutoFocus={config.filter?.isAutoFocus ?? true}
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

        return connect<ReturnType<typeof mapStateToProps>, null, OwnProps>(mapStateToProps)(TableWithFilter as any);
    };
