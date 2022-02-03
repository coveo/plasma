import moment from 'moment';
import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {useNavigate} from 'react-router';
import {
    filterThrough,
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
} from '@coveord/plasma-react';
import * as _ from 'underscore';

import PlasmaComponent from '../../building-blocs/PlasmaComponent';
import {TableHOCExampleUtils, TableHOCServerExampleContext} from '../../utils/TableHOCExampleUtils';

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

export const TableHOCServerExamples = () => <TableHOCServer />;

TableHOCServerExamples.title = 'TableHOC server';

// start-print
export const TableHOCServerExampleId = 'complex-example';

const renderHeader = () => (
    <TableHOCServerExampleContext.Consumer>
        {({isLoading}) => (
            <thead>
                <tr>
                    <TableRowNumberHeader isLoading={isLoading} />
                    <TableHeaderWithSort id="address.city" tableId={TableHOCServerExampleId} isLoading={isLoading}>
                        City
                    </TableHeaderWithSort>
                    <TableHeaderWithSort id="email" tableId={TableHOCServerExampleId} isLoading={isLoading}>
                        Email
                    </TableHeaderWithSort>
                    <TableHeaderWithSort
                        id="username"
                        tableId={TableHOCServerExampleId}
                        isLoading={isLoading}
                        isDefault
                    >
                        Username
                    </TableHeaderWithSort>
                    <TableRowHeader isLoading={isLoading}>Date of Birth</TableRowHeader>
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

const TableExampleDisconnected: React.FunctionComponent<ReturnType<typeof mapDispatchToProps>> = (props) => {
    const [data, setData] = useState<{users: [any]; count: number}>(null);
    const [isLoading, setIsLoading] = useState(true);

    const navigate = useNavigate();

    const ServerTableComposed = _.compose(
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

    const fetch = _.debounce(() => {
        setIsLoading(true);
        window.setTimeout(
            () =>
                props
                    .fetch()
                    .then((res: any) => {
                        setData(res);
                    })
                    .finally(() => setIsLoading(false)),
            500
        );
    }, 40);

    const onUpdate = () => {
        fetch();
    };

    const updateUrl = (query: string) => {
        navigate({search: query});
    };

    useEffect(() => {
        fetch();
    }, []);

    return (
        <PlasmaComponent id="TableHOCSever" title="Table HOC Server" withSource>
            <Section title="Server table with numbered rows">
                <span className="block my2">
                    Please note that the backend service doesn't support dates but we still make a request for every
                    change in the date range.
                </span>
                <TableHOCServerExampleContext.Provider value={{isLoading, id: TableHOCServerExampleId}}>
                    <ServerTableComposed
                        id={TableHOCServerExampleId}
                        className="table table-numbered mod-collapsible-rows"
                        data={data?.users ?? []}
                        renderBody={TableHOCExampleUtils.generateRows}
                        tableHeader={renderHeader()}
                        onUpdate={() => onUpdate()}
                        onUpdateUrl={updateUrl}
                        isLoading={isLoading}
                        loading={{numberOfColumns: 6}}
                        filterPlaceholder="Filter all"
                        filterBlankslate={{
                            title: 'No result match the specified filter',
                            description: 'Try reviewing the specified filters above or clearing all filters.',
                            buttons: [
                                {
                                    name: 'Clear filter',
                                    enabled: true,
                                    onClick: props.resetFilter,
                                },
                            ],
                        }}
                    >
                        <LastUpdated time={new Date()} />
                    </ServerTableComposed>
                </TableHOCServerExampleContext.Provider>
            </Section>
        </PlasmaComponent>
    );
};

const TableHOCServer = connect(undefined, mapDispatchToProps)(TableExampleDisconnected);

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
            dateOfBirth: moment().subtract(user.address.city.length, 'years').toDate(), // fake a year of birth
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

// stop-print
