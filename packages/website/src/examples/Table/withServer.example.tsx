import * as React from 'react';
import {
    TableHOC,
    tableWithUrlState,
    withServerSideProcessing,
    TableRowConnected,
    TableRowNumberColumn,
    tableWithNewPagination,
} from '@coveord/plasma-react';

import {compose} from 'redux';
import {loremIpsum} from 'lorem-ipsum';

const ServerTableComposed = compose<any>(
    withServerSideProcessing,
    tableWithUrlState,
    tableWithNewPagination({perPageNumbers: [3, 5, 10]})
)(TableHOC);

export default () => {
    const [users, totalEntries, fetchUsers] = useAPIMock();

    const updateUrl = (query: string) => {
        window.location.href = `${window.location.pathname}?search=${query}`;
    };

    React.useEffect(() => {
        fetchUsers({_page: 1, _limit: 5});
    }, []);

    return (
        <ServerTableComposed
            id={'tableId'}
            className="table table-numbered mod-collapsible-rows"
            data={dataForRows}
            renderBody={(allData: any) => generateRows(allData)}
            tableHeader={renderHeader()}
            onUpdate={() => fetchUsers()}
            onUpdateUrl={updateUrl}
            showBorderTop
            showBorderBottom
        />
    );
};

const clean = <T extends Record<string, unknown>>(object: T) => {
    Object.keys(object).forEach((key) => (object[key] === undefined ? delete object[key] : {}));
    return object;
};

const useAPIMock = (): [any[], number, (params?: any, overwrite?: boolean) => void] => {
    const [users, setUsers] = React.useState([]);
    const [totalEntries, setTotalEntries] = React.useState(0);

    const fetchUsers = (params?: any, overwrite = true) => {
        const cleanParams = clean(params);
        const queryString =
            cleanParams && Object.keys(cleanParams).length > 0
                ? `?${new URLSearchParams(Object.entries(cleanParams)).toString()}`
                : '';

        return fetch(`https://jsonplaceholder.typicode.com/users${queryString}`)
            .then((response) => {
                setTotalEntries(parseInt(response.headers.get('x-total-count'), 10));
                return response.json();
                // voir ici pour refaire le model https://jsonplaceholder.typicode.com/users
            })
            .then((newUsers) => {
                if (overwrite) {
                    setUsers(newUsers);
                } else {
                    setUsers([...users, ...newUsers]);
                }
            });
    };

    return [users, totalEntries, fetchUsers];
};

// const fetchData = (): IThunkAction => async (dispatch: IDispatch, getState: () => PlasmaState) => {
//     const compositeState: ITableHOCCompositeState = TableHOCUtils.getCompositeState('tableId', getState());
//     const params: any = {
//         _page: compositeState.pageNb + 1,
//         _limit: compositeState.perPage,
//         _sort: compositeState.sortKey,
//         _order: compositeState.sortAscending ? 'asc' : 'desc',
//         q: compositeState.filter || undefined,
//     };

//     const query = UrlUtils.toQueryString(params);

//     const res = await fetch(`https://jsonplaceholder.typicode.com/users?${query}`);
//     const count = (res.headers.has('x-total-count') && res.headers.get('x-total-count')) || null;
//     const data = await res.json();

//     const users = data.map((user: any) => ({
//         city: user.address.city,
//         username: user.username,
//         password: user.password,
//     }));

//     return {users, count};
// };

// const TableServerActions = {
//     fetchData,
// };

const renderHeader = () => (
    <thead>
        <tr>
            <th></th>
            <th>City</th>
            <th>Username</th>
            <th>Password</th>
        </tr>
    </thead>
);

const generateRows = (allData: IExampleRowData[]) =>
    allData.map((data: IExampleRowData, i: number) => (
        <TableRowConnected
            id={data.username}
            tableId={'tableId'}
            key={data.username}
            isMultiselect
            disabled={i % 3 === 0}
            collapsible={{content: i % 2 ? <div className="py2">👋</div> : null}}
        >
            <TableRowNumberColumn number={i + 1} />
            <td key="city">{data.city}</td>
            <td key="username">{data.username.toLowerCase()}</td>
            <td key="password">{data.password.toLowerCase()}</td>
        </TableRowConnected>
    ));
interface IExampleRowData {
    city: string;
    username: string;
    password: string;
    id: string;
}

const generateData = (length: number) => {
    const data: any = [];
    Array.from(Array(length)).map(() => {
        data.push({
            city: loremIpsum({count: 1, units: 'word'}),
            username: loremIpsum({count: 2, units: 'word'}),
            password: loremIpsum({count: 1, units: 'word'}),
            id: loremIpsum({count: 1, units: 'word'}),
        });
    });
    return data;
};
const dataForRows = generateData(15);
