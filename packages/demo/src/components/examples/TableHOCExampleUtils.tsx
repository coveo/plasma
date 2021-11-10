import moment from 'moment';
import * as React from 'react';
import {DateUtils, TableRowConnected, TableRowNumberColumn} from 'react-vapor';

import {SELECTION_BOXES_LONG} from './DatePickerExamplesCommon';
import {IExampleRowData} from './TableHOCExamples';
import {TableHOCServerExampleId} from './TableHOCServerExamples';

export interface ITableHOCServerExampleContext {
    isLoading: boolean;
    id: string;
}

export const TableHOCServerExampleContext = React.createContext<ITableHOCServerExampleContext>({
    isLoading: true,
    id: undefined,
});

const generateRows = (allData: IExampleRowData[]) =>
    allData.map(({email, username, dateOfBirth, city}: IExampleRowData, i: number) => (
        <TableRowConnected
            id={username}
            tableId={TableHOCServerExampleId}
            key={username}
            actions={tableActions(username)}
            isMultiselect
            disabled={i % 3 === 0}
            collapsible={{content: i % 2 ? <div className="py2">👋</div> : null}}
        >
            <TableRowNumberColumn number={i + 1} />
            <td key="city">{city}</td>
            <td key="email">{email.toLowerCase()}</td>
            <td key="username">{username.toLowerCase()}</td>
            <td key="date-of-birth">{dateOfBirth.toLocaleDateString()}</td>
        </TableRowConnected>
    ));

const tableActions = (username: string) => [
    {
        primary: true,
        icon: 'edit' as const,
        name: 'Edit',
        enabled: true,
        trigger: () => alert(username),
        callOnDoubleClick: true,
    },
];

const tablePredicates = [
    {
        id: 'address.city',
        prepend: <span className="dropdown-prepend">City:</span>,
        values: [
            {displayValue: 'All', value: '', selected: true},
            {displayValue: 'Lebsackbury', value: 'Lebsackbury'},
            {displayValue: 'Wakanda', value: 'Wakanda'},
        ],
    },
    {
        id: 'username',
        prepend: <span className="dropdown-prepend">Username:</span>,
        values: [
            {displayValue: 'All', value: '', selected: true},
            {displayValue: 'bret', value: 'Bret'},
        ],
    },
];

const tableDatePickerConfig = {
    datesSelectionBoxes: SELECTION_BOXES_LONG,
    years: [...DateUtils.getPreviousYears(25), DateUtils.currentYear.toString()],
    initialDateRange: [moment().subtract(25, 'years').toDate(), moment().toDate()],
};

export const TableHOCExampleUtils = {
    generateRows,
    tableActions,
    tablePredicates,
    tableDatePickerConfig,
};
