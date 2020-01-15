import * as React from 'react';
import {keys} from 'ts-transformer-keys';
import * as _ from 'underscore';

import {WithServerSideProcessingProps} from '../../hoc/withServerSideProcessing/withServerSideProcessing';
import {IReactVaporState} from '../../ReactVapor';
import {ConfigSupplier, HocUtils} from '../../utils/HocUtils';
import {IDispatch, ReduxConnect} from '../../utils/ReduxUtils';
import {UrlUtils} from '../../utils/UrlUtils';
import {IBlankSlateProps} from '../blankSlate/BlankSlate';
import {BlankSlateWithTable} from '../blankSlate/BlankSlatesHOC';
import {filterThrough} from '../filterBox/FilterBoxActions';
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
    resetFilter: () => void;
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
) => (Component: React.ComponentClass<ITableWithFilterProps & ReturnType<typeof mapDispatchToProps>>) => {
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

    const mapDispatchToProps = (dispatch: IDispatch, ownProps: ITableHOCOwnProps) => ({
        resetFilter: () => dispatch(filterThrough(ownProps.id, '')),
    });

    @ReduxConnect(mapStateToProps, mapDispatchToProps)
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

            if (!this.props.data?.length) {
                newProps.renderBody = () => (
                    <BlankSlateWithTable
                        description="Try reviewing the specified filters above or clearing all filters."
                        buttons={[
                            {
                                name: 'Clear filter',
                                enabled: true,
                                onClick: () => this.props.resetFilter(),
                            },
                        ]}
                        {...HocUtils.supplyConfig(supplier).blankSlate}
                    />
                );
            }

            return (
                <Component {...newProps} actions={newActions}>
                    {this.props.children}
                </Component>
            );
        }
    }

    return TableWithFilter;
};
