import * as React from 'react';
import {
    IActionOptions,
    TableHeaderWithSort,
    TableHOC,
    TableRowConnected,
    tableWithActions,
    tableWithBlankSlate,
    tableWithDatePicker,
    tableWithFilter,
    tableWithNewPagination,
    tableWithPredicate,
    tableWithSort,
} from '@coveord/plasma-react';
import {compose} from 'redux';
import moment from 'moment';
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

const rowActions: IActionOptions[] = [
    {
        primary: true,
        icon: 'info',
        name: 'Click me!',
        enabled: true,
        trigger: () => alert('trigger on action'),
        callOnDoubleClick: true,
    },
];

const renderHeader = (tableId: string) => (
    <thead>
        <tr>
            <TableHeaderWithSort id="city" tableId={tableId}>
                City
            </TableHeaderWithSort>
            <TableHeaderWithSort id="username" tableId={tableId}>
                Username
            </TableHeaderWithSort>
        </tr>
    </thead>
);

const tableDatePickerConfig: any = () => ({
    datesSelectionBoxes: {
        title: 'Date range',
        quickOptions: {
            label: 'Last week',
            value: () => moment().subtract(1, 'week').toDate().toString() + '%' + new Date().toString(),
        },
        isRange: true,
        withTime: true,
        hasSetToNowButton: true,
        color: 'blue',
    },
    initialDateRange: [moment().subtract(75, 'years').toDate(), moment().toDate()],
});

const matchPredicate = (predicate: string, rowData: IExampleRowData) => {
    const matchCity = predicate === rowData.city;
    return !predicate || matchCity;
};

const sort = (key: keyof IExampleRowData, isAsc: boolean, a: IExampleRowData, b: IExampleRowData) => {
    if (key) {
        const compare = (a[key] as string).toLowerCase().localeCompare((b[key] as string).toLowerCase());

        return isAsc ? compare : -1 * compare;
    }
    return 0;
};

const generateData = (length: number) => {
    const data: any = [];
    Array.from(Array(length)).map(() => {
        data.push({
            city: loremIpsum({count: 1, units: 'word'}),
            username: loremIpsum({count: 2, units: 'word'}),
            id: loremIpsum({count: 1, units: 'word'}),
        });
    });
    return data;
};

const dataForRows = generateData(15);

const predicateSetup = {
    id: 'firstPredicate',
    prepend: <span className="dropdown-prepend">prepend:</span>,
    values: [
        {displayValue: 'All', value: '', selected: true},
        {displayValue: dataForRows[2].city, value: dataForRows[2].city},
        {displayValue: dataForRows[1].username, value: dataForRows[1].username},
    ],
};

const TableComposed = compose(
    tableWithBlankSlate({
        title: 'No data',
    }),
    tableWithPredicate({
        ...predicateSetup,
        matchPredicate,
    }),
    tableWithFilter(), // using the default matchfilter
    tableWithBlankSlate({
        title: 'No results',
    }),
    tableWithSort({sort}),
    tableWithDatePicker(tableDatePickerConfig),
    tableWithNewPagination({perPageNumbers: [3, 5, 10]}),
    tableWithActions()
)(TableHOC);

const generateRows = (allData: IExampleRowData[], tableId: string) =>
    allData?.map((data: IExampleRowData) => (
        <TableRowConnected id={data.id} tableId={tableId} key={data.id} actions={rowActions}>
            <td key="city">{data.city}</td>
            <td key="username">{data.username.toLowerCase()}</td>
        </TableRowConnected>
    ));

interface IExampleRowData {
    city: string;
    username: string;
    id: string;
}
