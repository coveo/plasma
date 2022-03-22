import * as React from 'react';
import {
    Badge,
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

export default () => (
    <TableComposed
        id={'tableId'}
        className="table"
        data={data}
        renderBody={() => renderRows}
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
    const matchEmail = predicate === rowData.email;
    return !predicate || matchCity || matchEmail;
};

const sort = (key: keyof IExampleRowData, isAsc: boolean, a: IExampleRowData, b: IExampleRowData) => {
    if (key) {
        const compare = (a[key] as string).toLowerCase().localeCompare((b[key] as string).toLowerCase());

        return isAsc ? compare : -1 * compare;
    }
    return 0;
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

const predicateSetup = {
    id: 'firstPredicate',
    prepend: <span className="dropdown-prepend">prepend:</span>,
    values: [
        {displayValue: 'All', value: '', selected: true},
        {displayValue: data[2].city, value: data[2].city},
        {displayValue: data[1].username, value: data[1].username},
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

const renderRows = data?.map((item) => (
    <TableRowConnected id={item.id} tableId={'tableId'} key={item.id} actions={rowActions}>
        <td key="city">{item.city}</td>
        <td key="username">{item.username.toLowerCase()}</td>
        <td>
            <Badge label={'🥔 King'} extraClasses={['mod-small mod-success']} />
        </td>
    </TableRowConnected>
));

interface IExampleRowData {
    city: string;
    email: string;
    username: string;
    id: string;
}
