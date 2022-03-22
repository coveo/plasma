import {helpers, seed} from 'faker/locale/en';
import moment from 'moment';
import * as React from 'react';
import {
    ConfigSupplier,
    DateUtils,
    IActionOptions,
    ITableWithDatePickerConfig,
    Section,
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
    UUID,
} from '@coveord/plasma-react';
import * as _ from 'underscore';

import {compose} from 'redux';
import PlasmaComponent from '../../building-blocs/PlasmaComponent';
import {SELECTION_BOXES_LONG} from '../../utils/DatePickerExamplesCommon';

export interface IExampleRowData {
    city: string;
    email: string;
    username: string;
    id: string;
}

export const TableHOCExamples = () => (
    <PlasmaComponent
        id="TableHOC"
        title="Table"
        usage="A table displays large quantities of items or data in a list format. Filtering features and actions may be added."
        withSource
    >
        <Section>
            <Section level={2} title="Table with Data">
                <ComplexTable id="tableId" data={twoHundredRowsOfData} />
            </Section>
        </Section>
    </PlasmaComponent>
);

// https://github.com/marak/Faker.js/
export const generateDataWithFaker = (length: number) =>
    _.map(_.range(length), (i: number) => {
        seed(i + 1);
        const fakedData = helpers.contextualCard();
        return {
            city: fakedData.address.city,
            email: fakedData.email,
            username: fakedData.username,
            id: UUID.generate(),
        };
    });
const twoHundredRowsOfData = generateDataWithFaker(200);

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
            <TableHeaderWithSort id="email" tableId={tableId}>
                Email
            </TableHeaderWithSort>
            <TableHeaderWithSort id="username" tableId={tableId}>
                Username
            </TableHeaderWithSort>
        </tr>
    </thead>
);

export const generateTableRow = (allData: IExampleRowData[], tableId: string) =>
    allData?.map((data: IExampleRowData) => (
        <TableRowConnected id={data.id} tableId={tableId} key={data.id} actions={rowActions}>
            <td key="city">{data.city}</td>
            <td key="email">{data.email.toLowerCase()}</td>
            <td key="username">{data.username.toLowerCase()}</td>
        </TableRowConnected>
    ));

const tableDatePickerConfig: ConfigSupplier<ITableWithDatePickerConfig> = () => ({
    datesSelectionBoxes: SELECTION_BOXES_LONG,
    years: [...DateUtils.getPreviousYears(100), DateUtils.currentYear.toString()],
    initialDateRange: [moment().subtract(75, 'years').toDate(), moment().toDate()],
});

const matchPredicate = (predicate: string, rowData: IExampleRowData) => {
    const matchCity = predicate === rowData.city;
    const matchEmail = predicate === rowData.email;
    return !predicate || matchCity || matchEmail;
};

const sort = (key: keyof IExampleRowData, isAsc: boolean, a: IExampleRowData, b: IExampleRowData) => {
    if (key) {
        // if (a[key] instanceof Date) {
        //     const dateCompare = (a[key] as any) - (b[key] as any);
        //     return isAsc ? dateCompare : -1 * dateCompare;
        // }
        const compare = (a[key] as string).toLowerCase().localeCompare((b[key] as string).toLowerCase());

        return isAsc ? compare : -1 * compare;
    }
    return 0;
};

const predicateSetup = {
    id: 'firstPredicate',
    prepend: <span className="dropdown-prepend">prepend:</span>,
    values: [
        {displayValue: 'All', value: '', selected: true},
        {displayValue: twoHundredRowsOfData[2].city, value: twoHundredRowsOfData[2].city},
        {displayValue: twoHundredRowsOfData[1].email, value: twoHundredRowsOfData[1].email},
    ],
};

const ComplexTable: React.FunctionComponent<{
    data: any[];
    id: string;
}> = ({id, data}) => {
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

    return (
        <TableComposed
            id={id}
            className="table"
            data={data}
            renderBody={(Alldata: IExampleRowData[]) => generateTableRow(Alldata, id)}
            tableHeader={renderHeader(id)}
            showBorderTop
            showBorderBottom
        />
    );
};

export default TableHOCExamples;
