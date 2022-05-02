import {TableHOC, TableRowConnected, tableWithBlankSlate, tableWithFilter} from '@coveord/plasma-react';
import {compose} from 'redux';
import {loremIpsum} from 'lorem-ipsum';

const TABLE_ID: string = 'withFilterTableId';

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

const TableComposed = compose<any>(
    tableWithFilter({filter: {isAutoFocus: false}}), // using the default matchfilter
    tableWithBlankSlate({
        title: 'No results',
    })
)(TableHOC);

const renderHeader = () => (
    <thead>
        <tr>
            <th>City</th>
            <th>Username</th>
            <th>Password</th>
        </tr>
    </thead>
);

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
