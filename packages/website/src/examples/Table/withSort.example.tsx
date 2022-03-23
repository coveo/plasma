import * as React from 'react';
import {TableHeaderWithSort, TableHOC, TableRowConnected, tableWithSort} from '@coveord/plasma-react';
import {compose} from 'redux';
import {loremIpsum} from 'lorem-ipsum';

export default () => (
    <TableComposed
        id={'tableId'}
        className="table"
        data={dataForRows}
        renderBody={(data: any) => generateRows(data, 'tableId')}
        tableHeader={renderHeader('tableId')}
        showBorderTop
        showBorderBottom
    />
);

const renderHeader = (tableId: string) => (
    <thead>
        <tr>
            <TableHeaderWithSort id="city" tableId={tableId}>
                City
            </TableHeaderWithSort>
            <TableHeaderWithSort id="username" tableId={tableId}>
                Username
            </TableHeaderWithSort>
            <TableHeaderWithSort id="password" tableId={tableId}>
                Password
            </TableHeaderWithSort>
        </tr>
    </thead>
);

const sort = (key: keyof IExampleRowData, isAsc: boolean, a: IExampleRowData, b: IExampleRowData) => {
    if (key) {
        const compare = (a[key] as string).toLowerCase().localeCompare((b[key] as string).toLowerCase());

        return isAsc ? compare : -1 * compare;
    }
    return 0;
};

const TableComposed = compose<any>(tableWithSort({sort}))(TableHOC);

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

const dataForRows = generateData(5);
