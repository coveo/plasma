import * as React from 'react';
import {Section, TableHOC, tableWithBlankSlate, tableWithFilter} from 'react-vapor';
import * as _ from 'underscore';

import {ExampleComponent} from '../ComponentsInterface';
import {generateDataWithFacker, generateTableRow} from './TableHOCExamples';

export const TableHOCwithBlankSlateExamples: ExampleComponent = () => (
    <Section>
        <TableWithBlankSlateExample />
    </Section>
);
TableHOCwithBlankSlateExamples.title = 'TableHOC blankSlate';

export interface IExampleRowData {
    city: string;
    email: string;
    username: string;
    dateOfBirth: Date;
    id: string;
}

// start-print

const TableWithBlankSlateExample: React.FunctionComponent = () => (
    <Section>
        <TableWithBlankSlateComposed
            id={'tableWithBlankSlate'}
            className="table"
            data={generateDataWithFacker(0)}
            renderBody={generateTableRow}
        />
    </Section>
);

const TableWithBlankSlateComposed = _.compose(
    tableWithBlankSlate({title: 'No data caused the table to be empty'}),
    tableWithFilter({
        matchFilter: (filter: string, data: IExampleRowData) =>
            data.username.toLowerCase().indexOf(filter.toLowerCase()) !== -1,
    }),
    tableWithBlankSlate({title: 'Filter caused the table to be empty'})
)(TableHOC);
