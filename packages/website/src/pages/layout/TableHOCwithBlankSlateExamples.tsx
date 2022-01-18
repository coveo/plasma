import * as React from 'react';
import {Section, TableHOC, tableWithBlankSlate, tableWithEmptyState, tableWithFilter} from '@coveord/plasma-react';
import * as _ from 'underscore';

// move to table example utils
import {generateDataWithFaker, generateTableRow} from './TableHOCExamples';
import VaporComponent from '../../building-blocs/VaporComponent';

export const TableHOCwithBlankSlateExamples = () => (
    <VaporComponent id="tableWithBlankSlate" title="Table HOC with Blank Slate" withSource>
        <Section>
            <TableWithBlankSlateExample />
        </Section>
    </VaporComponent>
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

// stop-print
