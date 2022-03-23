import React from 'react';
import {connect} from 'react-redux';
import {
    IDispatch,
    PlasmaState,
    ITableHOCCompositeState,
    IThunkAction,
    TableHeaderWithSort,
    TableHOC,
    TableHOCUtils,
    TableRowHeader,
    TableRowNumberHeader,
    TableWithPaginationActions,
    tableWithUrlState,
    UrlUtils,
    withServerSideProcessing,
    TableRowConnected,
    TableRowNumberColumn,
} from '@coveord/plasma-react';

import {compose} from 'redux';

export default () => <TableHOCServer />;

const mapDispatchToProps = (dispatch: IDispatch) => ({
    fetch: () => dispatch(TableHOCServerActions.fetchData()),
});

const TableExampleDisconnected: React.FunctionComponent<ReturnType<typeof mapDispatchToProps>> = (props) => {
    const [data, setData] = React.useState<{users: [any]; count: number}>(null);
    const [isLoading, setIsLoading] = React.useState(true);

    const ServerTableComposed = compose<any>(withServerSideProcessing, tableWithUrlState)(TableHOC);

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
        window.location.href = `${window.location.pathname}?search=${query}`;
    };

    React.useEffect(() => {
        fetch();
    }, []);

    return (
        <TableContext.Provider value={{isLoading, id: TableHOCServerExampleId}}>
            <ServerTableComposed
                id={TableHOCServerExampleId}
                className="table table-numbered mod-collapsible-rows"
                data={data?.users ?? []}
                renderBody={(allData: any) => generateRows(allData)}
                tableHeader={renderHeader()}
                onUpdate={() => onUpdate()}
                onUpdateUrl={updateUrl}
                isLoading={isLoading}
                loading={{numberOfColumns: 3}}
            ></ServerTableComposed>
        </TableContext.Provider>
    );
};

const generateRows = (allData: IExampleRowData[]) =>
    allData.map(({username, city, password}: IExampleRowData, i: number) => (
        <TableRowConnected
            id={username}
            tableId={TableHOCServerExampleId}
            key={username}
            isMultiselect
            disabled={i % 3 === 0}
            collapsible={{content: i % 2 ? <div className="py2">👋</div> : null}}
        >
            <TableRowNumberColumn number={i + 1} />
            <td key="city">{city}</td>
            <td key="username">{username.toLowerCase()}</td>
            <td key="password">{password.toLowerCase()}</td>
        </TableRowConnected>
    ));

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

const TableHOCServerExampleId = 'complex-example';

interface TableContextProps {
    isLoading: boolean;
    id: string;
}

const TableContext = React.createContext<TableContextProps>({
    isLoading: true,
    id: undefined,
});

const renderHeader = () => (
    <TableContext.Consumer>
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
    </TableContext.Consumer>
);

interface IExampleRowData {
    city: string;
    username: string;
    password: string;
    id: string;
}
