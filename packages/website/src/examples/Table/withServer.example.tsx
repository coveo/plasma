import * as React from 'react';
import {
    Badge,
    ITableHOCProps,
    TableHeaderWithSort,
    TableHOC,
    TableRowConnected,
    TableRowHeader,
    TableRowNumberHeader,
    tableWithSort,
    tableWithUrlState,
    TableWithUrlStateProps,
    withServerSideProcessing,
} from '@coveord/plasma-react';
import {compose} from 'redux';

const ServerSideTable: React.ComponentType<any> = compose<any>(
    withServerSideProcessing,
    tableWithUrlState,
    tableWithSort()
)(TableHOC);

export default () => {
    const [isLoading, setIsLoading] = React.useState(false);
    const [users, totalEntries, fetchUsers] = useFetchAPIMock();

    React.useEffect(() => {
        setIsLoading(true);
        fetchUsers({_page: 1, _limit: 4});
        setIsLoading(false);
    }, []);

    const onUpdate = () => {
        fetchUsers({_page: 1, _limit: 4});
    };

    return (
        <ServerSideTable
            id={'tableId'}
            className="table"
            data={users}
            renderBody={() => renderRows}
            tableHeader={renderHeader()}
            onUpdate={() => onUpdate()}
            totalEntries={totalEntries}
            // onUpdateUrl={updateUrl}
            isLoading={isLoading}
            loading={{numberOfColumns: 2}}
        />
    );
};

const renderHeader = () => (isLoading: boolean) => (
    <thead>
        <tr>
            <TableHeaderWithSort id="address.city" tableId={TableId} isLoading={false}>
                City
            </TableHeaderWithSort>
            <TableHeaderWithSort id="username" tableId={TableId} isLoading={false} isDefault>
                Username
            </TableHeaderWithSort>
            <th>Badge</th>
        </tr>
    </thead>
);

const clean = <T extends Record<string, unknown>>(object: T) => {
    Object.keys(object).forEach((key) => (object[key] === undefined ? delete object[key] : {}));
    return object;
};

const useFetchAPIMock = (): [any[], number, (params?: any, overwrite?: boolean) => void] => {
    const [users, setUsers] = React.useState([]);
    const [totalEntries, setTotalEntries] = React.useState(0);

    const fetchUsers = (params?: any, overwrite = true) => {
        const cleanParams = clean(params);
        const query =
            cleanParams && Object.keys(cleanParams).length > 0
                ? `?${new URLSearchParams(Object.entries(cleanParams)).toString()}`
                : '';

        return fetch(`https://jsonplaceholder.typicode.com/users${query}`)
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
    return [data, totalEntries, fetchUsers];
};

const data = [
    {
        city: 'Québec',
        username: 'germinator',
        id: 'id-1',
    },
    {
        city: 'Ottawa',
        username: 'canitalktoyouaboutvisualtesting',
        id: 'id-2',
    },
    {
        city: 'Toronto',
        username: 'kienposter',
        id: 'id-3',
    },
    {
        city: 'Montréal',
        username: 'notfound',
        id: 'id-3',
    },
];

const renderRows = data?.map((item) => (
    <TableRowConnected id={item.id} tableId={'tableId'} key={item.id}>
        <td key="city">{item.city}</td>
        <td key="username">{item.username.toLowerCase()}</td>
        <td>
            <Badge label={'🥔 King'} extraClasses={['mod-small mod-success']} />
        </td>
    </TableRowConnected>
));

const TableId = 'tableId';
