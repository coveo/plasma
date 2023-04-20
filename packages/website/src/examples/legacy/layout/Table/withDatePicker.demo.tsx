import {
    ConfigSupplier,
    IDatesSelectionBox,
    ITableWithDatePickerConfig,
    TableHOC,
    TableRowConnected,
    tableWithDatePicker,
} from '@coveord/plasma-react';
import {compose} from 'redux';
import moment from 'moment';
import {loremIpsum} from 'lorem-ipsum';

const TABLE_ID: string = 'withDatePickerTableId';

const Demo = () => (
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
export default Demo;

const selectionOptions: IDatesSelectionBox[] = [
    {
        title: 'Select a date range',
        quickOptions: [
            {
                label: 'Last Week',
                value: () => moment().subtract(1, 'week').toDate().toString() + '%' + new Date().toString(),
            },
            {
                label: 'Last day',
                value: () => moment().subtract(1, 'day').toDate().toString() + '%' + new Date().toString(),
            },
        ],
        isRange: true,
        withTime: false,
        hasSetToNowButton: true,
    },
];

const tableDatePickerConfig: ConfigSupplier<ITableWithDatePickerConfig> = () => ({
    datesSelectionBoxes: selectionOptions,
    initialDateRange: [moment().subtract(75, 'years').toDate(), moment().toDate()],
});

const TableComposed = compose<any>(tableWithDatePicker(tableDatePickerConfig))(TableHOC);

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
