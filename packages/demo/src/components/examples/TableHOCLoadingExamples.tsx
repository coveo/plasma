import * as React from 'react';
import {Section, TableHOC, tableWithBlankSlate, tableWithFilter} from 'react-vapor';
import * as _ from 'underscore';

import {ExampleComponent} from '../ComponentsInterface';
import {generateDataWithFacker, generateTableRow} from './TableHOCExamples';

export const TableHocLoadingExamples: ExampleComponent = () => (
    <Section level={1} title="Table loading examples">
        <Section level={2} title="Table loading with the default number of row">
            <TableLoadingExamplesWithDataNull />
        </Section>
        <Section level={2} title="Table loading with the number of row equal to the number of data">
            <TableLoadingExamplesWithData />
        </Section>
        <Section level={2} title="Big table loading">
            <BigTableLoadingExample />
        </Section>
    </Section>
);
TableHocLoadingExamples.title = 'TableHOC loading';

const fiveDataRows = generateDataWithFacker(10);

// start-print

const tableId = 'TableLoadingExamples';
const TableLoadingExamplesWithDataNull: React.FunctionComponent = () => (
    <Section>
        <TableLoadingComposed id={tableId} className="table" data={null} renderBody={generateTableRow} isLoading />
    </Section>
);

const TableLoadingExamplesWithData: React.FunctionComponent = () => (
    <Section>
        <TableLoadingComposed
            id={tableId}
            className="table"
            data={fiveDataRows}
            renderBody={generateTableRow}
            isLoading
        />
    </Section>
);

const BigTableLoadingExample: React.FunctionComponent = () => (
    <Section>
        <TableLoadingComposed
            id={tableId}
            className="table big-table"
            data={fiveDataRows}
            renderBody={generateTableRow}
            isLoading
        />
    </Section>
);

const TableLoadingComposed = _.compose(
    tableWithBlankSlate({title: 'No data caused the table to be empty'}),
    tableWithFilter({
        matchFilter: (filter: string, data: any) => data.username.toLowerCase().indexOf(filter.toLowerCase()) !== -1,
    }),
    tableWithBlankSlate({title: 'Filter caused the table to be empty'})
)(TableHOC);
