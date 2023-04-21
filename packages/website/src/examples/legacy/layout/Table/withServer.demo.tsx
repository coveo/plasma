import {useEffect, useState} from 'react';
import {
    TableHOC,
    tableWithUrlState,
    withServerSideProcessing,
    TableRowConnected,
    TableRowNumberColumn,
} from '@coveord/plasma-react';

import {compose} from 'redux';

const TABLE_ID: string = 'withServerTableId';
const ServerTableComposed = compose<any>(withServerSideProcessing, tableWithUrlState)(TableHOC);

const Demo = () => {
    const [users, totalEntries, fetchUsers] = useAPIMock();

    const updateUrl = (query: string) => {
        window.location.href = `${window.location.pathname}?search=${query}`;
    };

    useEffect(() => {
        fetchUsers({_page: 1, _limit: 5});
    }, []);

    return (
        <ServerTableComposed
            id={TABLE_ID}
            className="table table-numbered mod-collapsible-rows"
            data={users}
            renderBody={(allData: IExampleRowData[]) => generateRows(allData)}
            tableHeader={renderHeader()}
            onUpdate={() => fetchUsers()}
            onUpdateUrl={updateUrl}
            showBorderTop
            showBorderBottom
        />
    );
};
export default Demo;

const clean = <T extends Record<string, unknown>>(object: T) => {
    Object.keys(object).forEach((key) => (object[key] === undefined ? delete object[key] : {}));
    return object;
};

const useAPIMock = (): [any[], number, (params?: any, overwrite?: boolean) => void] => {
    const [users, setUsers] = useState([]);
    const [totalEntries, setTotalEntries] = useState(0);

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

const renderHeader = () => (
    <thead>
        <tr>
            <th></th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th></th>
        </tr>
    </thead>
);

const generateRows = (allData: IExampleRowData[]) =>
    allData.map((data: IExampleRowData, i: number) => (
        <TableRowConnected
            id={data.username}
            tableId={TABLE_ID}
            key={data.username}
            isMultiselect
            disabled={i % 3 === 0}
            collapsible={{content: i % 2 ? <div className="py2">👋</div> : null}}
        >
            <TableRowNumberColumn number={i + 1} />
            <td key="name">{data.name}</td>
            <td key="username">{data.username}</td>
            <td key="password">{data.email}</td>
        </TableRowConnected>
    ));
interface IExampleRowData {
    name: string;
    username: string;
    email: string;
    id: string;
}
