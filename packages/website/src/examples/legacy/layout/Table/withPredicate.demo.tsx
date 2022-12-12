import {TableHOC, TableRowConnected, tableWithPredicate} from '@coveord/plasma-react';
import {compose} from 'redux';
import {loremIpsum} from 'lorem-ipsum';

const TABLE_ID: string = 'withPredicateTableId';

export default () => (
    <TableComposed
        id={TABLE_ID}
        className="table"
        data={dataForRows}
        renderBody={(data: IExampleRowData[]) => generateRows(data, TABLE_ID)}
        tableHeader={renderHeader()}
        showBorderTop
        showBorderBottom
    />
);

const renderHeader = () => (
    <thead>
        <tr>
            <th>City</th>
            <th>Username</th>
            <th>Password</th>
        </tr>
    </thead>
);

const matchPredicate = (predicate: string, rowData: IExampleRowData) => {
    const matchCity = predicate === rowData.city;
    return !predicate || matchCity;
};

const generateRows = (allData: IExampleRowData[], tableId: string) =>
    allData?.map((data: IExampleRowData) => (
        <TableRowConnected id={data.id} tableId={tableId} key={data.id}>
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

const generateData = (length: number): IExampleRowData[] =>
    Array.from(Array(length)).map(() => ({
        city: loremIpsum({count: 1, units: 'word'}),
        username: loremIpsum({count: 2, units: 'word'}),
        password: loremIpsum({count: 1, units: 'word'}),
        id: loremIpsum({count: 1, units: 'word'}),
    }));

const dataForRows = generateData(5);

const predicateSetup = {
    id: 'firstPredicate',
    prepend: <span className="dropdown-prepend">prepend:</span>,
    values: [
        {displayValue: 'All', value: '', selected: true},
        {displayValue: dataForRows[2].city, value: dataForRows[2].city},
        {displayValue: dataForRows[1].username, value: dataForRows[1].username},
    ],
};

const TableComposed = compose<any>(
    tableWithPredicate({
        ...predicateSetup,
        matchPredicate,
    })
)(TableHOC);
