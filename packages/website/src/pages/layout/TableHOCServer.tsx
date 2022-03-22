import {useRouter} from 'next/router';
import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {
    IDispatch,
    PlasmaState,
    ITableHOCCompositeState,
    IThunkAction,
    Section,
    TableHeaderWithSort,
    TableHOC,
    TableHOCUtils,
    TableRowHeader,
    TableRowNumberHeader,
    tableWithActions,
    TableWithPaginationActions,
    tableWithUrlState,
    UrlUtils,
    withServerSideProcessing,
} from '@coveord/plasma-react';

import {compose} from 'redux';
import PlasmaComponent from '../../building-blocs/PlasmaComponent';
import {TableHOCExampleUtils, TableHOCServerExampleContext} from '../../utils/TableHOCExampleUtils';

export const TableHOCServerExamples = () => <TableHOCServer />;

TableHOCServerExamples.title = 'TableHOC server';

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
                    <TableHeaderWithSort
                        id="username"
                        tableId={TableHOCServerExampleId}
                        isLoading={isLoading}
                        isDefault
                    >
                        Username
                    </TableHeaderWithSort>
                    <TableRowHeader isLoading={isLoading} />
                </tr>
            </thead>
        )}
    </TableHOCServerExampleContext.Consumer>
);

const mapDispatchToProps = (dispatch: IDispatch) => ({
    fetch: () => dispatch(TableHOCServerActions.fetchData()),
});

const TableExampleDisconnected: React.FunctionComponent<ReturnType<typeof mapDispatchToProps>> = (props) => {
    const [data, setData] = useState<{users: [any]; count: number}>(null);
    const [isLoading, setIsLoading] = useState(true);

    const router = useRouter();

    const ServerTableComposed = compose(withServerSideProcessing, tableWithUrlState, tableWithActions())(TableHOC);

    const fetch = async () => {
        setIsLoading(true);
        if (typeof window !== 'undefined') {
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
        }
    };

    const onUpdate = () => {
        fetch();
    };

    const updateUrl = (query: string) => {
        router.push(`${router.pathname}?search=${query}`);
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
                        loading={{numberOfColumns: 3}}
                    ></ServerTableComposed>
                </TableHOCServerExampleContext.Provider>
            </Section>
        </PlasmaComponent>
    );
};

const TableHOCServer = connect(undefined, mapDispatchToProps)(TableExampleDisconnected);

const fetchData = (): IThunkAction => async (dispatch: IDispatch, getState: () => PlasmaState) => {
    const compositeState: ITableHOCCompositeState = TableHOCUtils.getCompositeState(
        TableHOCServerExampleId,
        getState()
    );
    const params: any = {
        _page: compositeState.pageNb + 1,
        _limit: compositeState.perPage,
        _sort: compositeState.sortKey,
        _order: compositeState.sortAscending ? 'asc' : 'desc',
        q: compositeState.filter || undefined,
    };

    const query = UrlUtils.toQueryString(params);

    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users?${query}`);
        const count = (res.headers.has('x-total-count') && res.headers.get('x-total-count')) || null;
        const data = await res.json();

        const users = data.map((user: any) => ({
            city: user.address.city,
            username: user.username,
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
export default TableHOCServerExamples;
