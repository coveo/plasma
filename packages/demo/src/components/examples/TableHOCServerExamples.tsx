import moment from 'moment';
import * as React from 'react';
import {connect} from 'react-redux';
import {RouteComponentProps, withRouter} from 'react-router';
import {
    filterThrough,
    FixedWidthState,
    IDispatch,
    IReactVaporState,
    ITableHOCCompositeState,
    IThunkAction,
    LastUpdated,
    Section,
    TableHeaderWithSort,
    TableHOC,
    TableHOCUtils,
    TableRowHeader,
    TableRowNumberHeader,
    tableWithActions,
    tableWithBlankSlate,
    tableWithDatePicker,
    tableWithFilter,
    tableWithNewPagination,
    TableWithPaginationActions,
    tableWithPredicate,
    tableWithSort,
    tableWithUrlState,
    UrlUtils,
    withServerSideProcessing,
} from 'react-vapor';
import * as _ from 'underscore';

import {TableHOCExampleUtils, TableHOCServerExampleContext} from './TableHOCExampleUtils';

type TableHOCServerProps = RouteComponentProps & ReturnType<typeof mapDispatchToProps>;

export interface IExampleRowData {
    city: string;
    email: string;
    username: string;
    dateOfBirth: Date;
    id: string;
}

export interface IExampleServerTableState {
    data: IExampleRowData[];
    isLoading: boolean;
}

interface TableHOCServerExamplesState {
    data: {users: [any]; count: number};
    isLoading: boolean;
    fixedWidthColumns?: FixedWidthState[];
}

export const TableHOCServerExamples = () => <TableHOCServer />;

TableHOCServerExamples.title = 'TableHOC server';

// start-print
export const TableHOCServerExampleId = 'complex-example';

export const FixedWidthColumnIds = {
    rowNum: 'number-row',
    city: 'city',
    email: 'email',
    username: 'username',
    dob: 'dob',
};

const renderHeader = () => (
    <TableHOCServerExampleContext.Consumer>
        {({isLoading, fixWidth}) => (
            <thead>
                <tr style={{height: 45}}>
                    <TableRowNumberHeader isLoading fixWidth={fixWidth} id={FixedWidthColumnIds.rowNum} />
                    <TableHeaderWithSort
                        id={FixedWidthColumnIds.city}
                        tableId={TableHOCServerExampleId}
                        isLoading={isLoading}
                        fixWidth={fixWidth}
                    >
                        City
                    </TableHeaderWithSort>
                    <TableHeaderWithSort
                        id={FixedWidthColumnIds.email}
                        tableId={TableHOCServerExampleId}
                        isLoading={isLoading}
                        fixWidth={fixWidth}
                    >
                        Email
                    </TableHeaderWithSort>
                    <TableHeaderWithSort
                        id={FixedWidthColumnIds.username}
                        tableId={TableHOCServerExampleId}
                        isLoading={isLoading}
                        isDefault
                        fixWidth={fixWidth}
                    >
                        Username
                    </TableHeaderWithSort>
                    <TableRowHeader isLoading={isLoading} fixWidth={fixWidth} id={FixedWidthColumnIds.dob}>
                        Date of Birth
                    </TableRowHeader>
                    <TableRowHeader isLoading={isLoading} />
                </tr>
            </thead>
        )}
    </TableHOCServerExampleContext.Consumer>
);

const mapDispatchToProps = (dispatch: IDispatch) => ({
    fetch: () => dispatch(TableHOCServerActions.fetchData()),
    resetFilter: () => dispatch(filterThrough(TableHOCServerExampleId, '')),
});

class TableExampleDisconnected extends React.PureComponent<TableHOCServerProps, TableHOCServerExamplesState> {
    state: TableHOCServerExamplesState = {
        data: null,
        isLoading: true,
        fixedWidthColumns: [],
    };

    private ServerTableComposed = _.compose(
        withServerSideProcessing,
        tableWithUrlState,
        tableWithBlankSlate({title: 'No data fetched from the server'}),
        tableWithPredicate(TableHOCExampleUtils.tablePredicates[0]),
        tableWithPredicate(TableHOCExampleUtils.tablePredicates[1]),
        tableWithBlankSlate({title: 'No users match the selected predicates'}),
        tableWithFilter(),
        tableWithSort(),
        tableWithDatePicker({...(TableHOCExampleUtils.tableDatePickerConfig as any)}),
        tableWithNewPagination({perPageNumbers: [3, 5, 10]}),
        tableWithActions()
    )(TableHOC);

    private fetch = _.debounce(() => {
        this.setState({...this.state, isLoading: true});
        window.setTimeout(
            () =>
                this.props.fetch().then((data: any) => {
                    this.setState({data, isLoading: false});
                }),
            500
        );
    }, 40);

    private onUpdate = () => {
        this.fetch();
    };

    private updateUrl = (query: string) => {
        this.props.history.push({search: query});
    };

    componentDidMount() {
        this.fetch();

        /**
         * NOTE FOR DRAFT:
         * these fields are set in localStorage by the <th /> if
         * the { fixWidth: true } prop is passed into the context:
         * TableRowHeader, TableRowNumberHeader, TableHeaderWithSort.
         * When the table mounts, even after a page refresh, we
         * check for those values here and pass them to the renderBody
         * via the TableHOC loading props { fixedWidthColumns: this.state.fixedWidthColumns }
         */

        this.setState({
            fixedWidthColumns: _.map(FixedWidthColumnIds, (field) => ({
                field,
                dimensions: JSON.parse(window.localStorage.getItem(`th-dimensions-${field}`)),
            })),
        });
    }

    render() {
        return (
            <Section title="Server table with numbered rows">
                <span className="block my2">
                    Please note that the backend service doesn't support dates but we still make a request for every
                    change in the date range.
                </span>
                <TableHOCServerExampleContext.Provider
                    value={{
                        isLoading: this.state.isLoading,
                        id: TableHOCServerExampleId,
                        fixWidth: true, // accessed by renderHeader
                    }}
                >
                    <this.ServerTableComposed
                        id={TableHOCServerExampleId}
                        className="table table-numbered mod-collapsible-rows"
                        data={this.state.data?.users ?? []}
                        renderBody={TableHOCExampleUtils.generateRows}
                        tableHeader={renderHeader()}
                        onUpdate={this.onUpdate}
                        onUpdateUrl={this.updateUrl}
                        isLoading={this.state.isLoading}
                        loading={{numberOfColumns: 6, fixedWidthColumns: this.state.fixedWidthColumns}}
                        filterPlaceholder="Filter all"
                        filterBlankslate={{
                            title: 'No result match the specified filter',
                            description: 'Try reviewing the specified filters above or clearing all filters.',
                            buttons: [
                                {
                                    name: 'Clear filter',
                                    enabled: true,
                                    onClick: this.props.resetFilter,
                                },
                            ],
                        }}
                    >
                        <LastUpdated time={new Date()} />
                    </this.ServerTableComposed>
                </TableHOCServerExampleContext.Provider>
            </Section>
        );
    }
}

const TableHOCServer = connect(undefined, mapDispatchToProps)(withRouter(TableExampleDisconnected));

const fetchData = (): IThunkAction => async (dispatch: IDispatch, getState: () => IReactVaporState) => {
    const compositeState: ITableHOCCompositeState = TableHOCUtils.getCompositeState(
        TableHOCServerExampleId,
        getState()
    );
    const [from, to] = _.map(compositeState.dateLimits, (limit) => limit && limit.toISOString());
    const params: any = {
        _page: compositeState.pageNb + 1,
        _limit: compositeState.perPage,
        _sort: compositeState.sortKey,
        _order: compositeState.sortAscending ? 'asc' : 'desc',
        q: compositeState.filter || undefined,
        from,
        to,
    };
    _.each(compositeState.predicates, (predicate: {id: string; value: string}) => {
        params[predicate.id] = predicate.value;
    });

    const query = UrlUtils.toQueryString(params);

    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users?${query}`);
        const count = (res.headers.has('x-total-count') && res.headers.get('x-total-count')) || null;
        const data = await res.json();

        const users = data.map((user: any) => ({
            city: user.address.city,
            username: user.username,
            email: user.email,
            dateOfBirth: moment('1995-12-25').toDate(), // fake a year of birth
        }));

        dispatch(TableWithPaginationActions.setCount(TableHOCServerExampleId, count as any));

        return {users, count};
    } catch (error) {
        throw error;
    }
};

const TableHOCServerActions = {
    fetchData,
};
