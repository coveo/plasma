import * as React from 'react';
import {TableHOC, TableRowConnected, tableWithNewPagination} from '@coveord/plasma-react';
import {compose} from 'redux';
import {loremIpsum} from 'lorem-ipsum';

export default () => (
    <TableComposed
        id="tableId"
        className="table"
        data={dataForRows}
        renderBody={(data: any) => generateRows(data, 'tableId')}
        tableHeader={renderHeader()}
        showBorderTop
        showBorderBottom
    />
);

const TableComposed = compose<any>(tableWithNewPagination({perPageNumbers: [3, 5, 10]}))(TableHOC);

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
