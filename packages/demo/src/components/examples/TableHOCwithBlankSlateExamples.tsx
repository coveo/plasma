import * as React from 'react';
import {Section, TableHOC, tableWithBlankSlate, tableWithEmptyState, tableWithFilter} from 'react-vapor';
import * as _ from 'underscore';

import {ExampleComponent} from '../ComponentsInterface';
import {generateDataWithFaker, generateTableRow} from './TableHOCExamples';

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
    <>
        <Section title="TableHOC with a blankSlate">
            <TableWithBlankSlateComposed
                id="tableWithBlankSlate"
                className="table"
                data={generateDataWithFaker(0)}
                renderBody={(data: IExampleRowData[]) => generateTableRow(data, 'tableWithBlankSlate')}
                filterMatcher={(filter: string, data: IExampleRowData) =>
                    data.username.toLowerCase().indexOf(filter.toLowerCase()) !== -1
                }
            />
        </Section>

        <Section title="TableHOC with a blankSlate and an empty state">
            <TableWithEmptyStateComposed
                id="tableWithEmptyState"
                className="table"
                data={generateDataWithFaker(0)}
                renderBody={(data: IExampleRowData[]) => generateTableRow(data, 'tableWithBlankSlate')}
                filterMatcher={(filter: string, data: IExampleRowData) =>
                    data.username.toLowerCase().indexOf(filter.toLowerCase()) !== -1
                }
                emptyState={<EmptyState />}
            />
        </Section>
    </>
);

const TableWithBlankSlateComposed = _.compose(
    tableWithBlankSlate({title: 'No data caused the table to be empty'}),
    tableWithFilter(),
    tableWithBlankSlate({title: 'Filter caused the table to be empty'})
)(TableHOC);

const TableWithEmptyStateComposed = _.compose(
    tableWithEmptyState,
    tableWithBlankSlate({title: 'No data caused the table to be empty'}),
    tableWithFilter()
)(TableHOC);

const EmptyState: React.FunctionComponent = () => <div> A truly empty state </div>;
