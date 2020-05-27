import {helpers, seed} from 'faker/locale/en';
import moment from 'moment';
import * as React from 'react';
import {connect} from 'react-redux';
import {
    DateUtils,
    filterThrough,
    IDispatch,
    Section,
    TableHeaderWithSort,
    TableHOC,
    TableRowConnected,
    tableWithActions,
    tableWithBlankSlate,
    tableWithDatePicker,
    tableWithFilter,
    tableWithPagination,
    tableWithPredicate,
    tableWithSort,
    UUID,
} from 'react-vapor';
import * as _ from 'underscore';

import {SELECTION_BOXES_LONG} from './DatePickerExamplesCommon';

export interface IExampleRowData {
    city: string;
    email: string;
    username: string;
    dateOfBirth: Date;
    id: string;
}

export const TableHOCExamples = () => (
    <Section title="Table HOC">
        <Section level={2} title="Table with Data">
            <TableWithActionsAndDataFiltering id="TableWithActionsAndDataFiltering" data={twoHundredRowsOfData} />
        </Section>
        <Section level={2} title="Table without data">
            <TableWithActionsAndDataFiltering id="TableWithActionsAndDataFiltering2" data={[]} />
        </Section>
    </Section>
);

// https://github.com/marak/Faker.js/
export const generateDataWithFacker = (length: number) =>
    _.map(_.range(length), (i: number) => {
        seed(i + 1);
        const fakedData = helpers.contextualCard();
        return {
            city: fakedData.address.city,
            email: fakedData.email,
            username: fakedData.username,
            dateOfBirth: fakedData.dob,
            id: UUID.generate(),
        };
    });
const twoHundredRowsOfData = generateDataWithFacker(200);

// start-print

const rowActions = [
    {
        primary: true,
        icon: 'edit',
        name: 'edit',
        enabled: true,
        trigger: () => alert('trigger on action'),
        callOnDoubleClick: true,
    },
    {primary: false, icon: 'view', name: 'view', enabled: true},
    {primary: false, icon: 'copy', name: 'copy', enabled: true},
    {
        primary: false,
        icon: 'delete',
        name: 'delete',
        enabled: true,
        unrepeatable: true,
        requiresConfirmation: {
            confirmLabel: 'wanna do it ?',
            confirmType: 'danger',
            buttonLabels: {
                confirm: 'Confirm',
                cancel: 'Cancel',
            },
        },
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
            <th>Date of birth</th>
        </tr>
    </thead>
);

export const generateTableRow = (allData: IExampleRowData[], tableId: string) =>
    allData.map((data: IExampleRowData) => (
        <TableRowConnected id={data.id} tableId={tableId} key={data.id} actions={rowActions}>
            <td key="city">{data.city}</td>
            <td key="email">{data.email.toLowerCase()}</td>
            <td key="username">{data.username.toLowerCase()}</td>
            <td key="date-of-birth">{data.dateOfBirth.toLocaleDateString()}</td>
        </TableRowConnected>
    ));

const tableDatePickerConfig = () => ({
    datesSelectionBoxes: SELECTION_BOXES_LONG,
    matchDates: (data: IExampleRowData, lowerLimit: Date, upperLimit?: Date) =>
        _.isUndefined(upperLimit) || (lowerLimit <= data.dateOfBirth && data.dateOfBirth <= upperLimit),
    years: [...DateUtils.getPreviousYears(100), DateUtils.currentYear.toString()],
    initialDateRange: [
        moment()
            .subtract(75, 'years')
            .toDate(),
        moment().toDate(),
    ],
});

const matchPredicate = (predicate: string, rowData: IExampleRowData) => {
    const matchCity = predicate === rowData.city;
    const matchEmail = predicate === rowData.email;
    return !predicate || matchCity || matchEmail;
};

const sort = (key: keyof IExampleRowData, isAsc: boolean, a: IExampleRowData, b: IExampleRowData) => {
    if (key) {
        if (a[key] instanceof Date) {
            const dateCompare = (a[key] as any) - (b[key] as any);
            return isAsc ? dateCompare : -1 * dateCompare;
        }
        const compare = (a[key] as string).toLowerCase().localeCompare((b[key] as string).toLowerCase());

        return isAsc ? compare : -1 * compare;
    }
    return 0;
};

const predicateSetup = {
    id: 'firstPredicate',
    prepend: <span className="mr1 text-medium-grey">prepend:</span>,
    values: [
        {displayValue: 'All', value: '', selected: true},
        {displayValue: twoHundredRowsOfData[2].city, value: twoHundredRowsOfData[2].city},
        {displayValue: twoHundredRowsOfData[1].email, value: twoHundredRowsOfData[1].email},
    ],
};

const mapDispatchToProps = (dispatch: IDispatch) => ({
    resetFilter: (id: string) => dispatch(filterThrough(id, '')),
});

type TableWithActionsAndDataFilteringProps = ReturnType<typeof mapDispatchToProps>;

const TableWithActionsAndDataFilteringDisconnected: React.FunctionComponent<{
    data: any[];
    id: string;
} & TableWithActionsAndDataFilteringProps> = ({id, data, resetFilter}) => {
    const TableWithActionsAndDataFilteringComposed = _.compose(
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
            description: 'Try reviewing the specified filters above or clearing all filters.',
            buttons: [
                {
                    name: 'Clear filter',
                    enabled: true,
                    onClick: () => resetFilter(id),
                },
            ],
        }),
        tableWithSort({sort}),
        tableWithDatePicker(...(tableDatePickerConfig as any)),
        tableWithPagination({perPageNumbers: [3, 5, 10]}),
        tableWithActions()
    )(TableHOC);

    return (
        <TableWithActionsAndDataFilteringComposed
            id={id}
            className="table"
            data={data}
            renderBody={(Alldata: IExampleRowData[]) => generateTableRow(Alldata, id)}
            tableHeader={renderHeader(id)}
            showBorderTop
        />
    );
};

const TableWithActionsAndDataFiltering = connect(
    undefined,
    mapDispatchToProps
)(TableWithActionsAndDataFilteringDisconnected);
