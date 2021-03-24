import * as React from 'react';
import {tableWithEmptyState, withServerSideProcessing} from 'react-vapor';
import {
    Section,
    TableHOC,
    tableWithBlankSlate,
    tableWithFilter,
    tableWithActions,
    tableWithPrepend,
    tableWithPredicate,
    tableWithNewPagination,
} from 'react-vapor';
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

const twoHundredRowsOfData = generateDataWithFacker(200);
const predicateSetup = {
    id: 'firstPredicate',
    prepend: <span className="dropdown-prepend">prepend:</span>,
    values: [
        {displayValue: 'All', value: '', selected: true},
        {displayValue: twoHundredRowsOfData[2].city, value: twoHundredRowsOfData[2].city},
        {displayValue: twoHundredRowsOfData[1].email, value: twoHundredRowsOfData[1].email},
    ],
};

// start-print

const TableWithBlankSlateExample: React.FunctionComponent = () => (
    <>
        <Section>
            <TableWithBlankSlateComposed
                id="tableWithBlankSlate"
                className="table"
                data={generateDataWithFacker(0)}
                renderBody={(data) => generateTableRow(data, 'tableWithBlankSlate')}
                filterMatcher={(filter: string, data: IExampleRowData) =>
                    data.username.toLowerCase().indexOf(filter.toLowerCase()) !== -1
                }
            />
        </Section>

        <Section>
            <TableWithEmptyStateComposed
                id="tableWithEmptyState"
                className="table"
                data={generateDataWithFacker(0)}
                renderBody={(data) => generateTableRow(data, 'tableWithBlankSlate')}
                filterMatcher={(filter: string, data: IExampleRowData) =>
                    data.username.toLowerCase().indexOf(filter.toLowerCase()) !== -1
                }
                emptyState={<EmptyState />}
                prepend={<Prepend />}
            />
        </Section>
    </>
);

const TableWithBlankSlateComposed = _.compose(
    tableWithBlankSlate({title: 'No data caused the table to be empty'}),
    tableWithFilter(),
    tableWithBlankSlate({title: 'Filter caused the table to be empty'})
)(TableHOC) as ReturnType<ReturnType<typeof tableWithFilter>>;

const TableWithEmptyStateComposed = _.compose(
    tableWithEmptyState,
    withServerSideProcessing,
    tableWithBlankSlate({title: 'No data caused the table to be empty'}),
    tableWithFilter(),
    tableWithActions(),
    tableWithPrepend,
    tableWithPredicate({...predicateSetup}),
    tableWithNewPagination({isServer: true, perPageNumbers: [3, 5, 10]})
)(TableHOC);

const EmptyState: React.FunctionComponent = () => <div> A truly empty space </div>;
const Prepend: React.FunctionComponent = () => <div>prepend</div>;
