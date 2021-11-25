import * as React from 'react';
import {Section, TableHOC, tableWithBlankSlate, tableWithFilter} from 'react-vapor';
import * as _ from 'underscore';

import {ExampleComponent} from '../../../utils/ExamplesUtils';
// move to tablehoc example utils

import VaporComponent from '../../../../demo-building-blocs/VaporComponent';
import {generateDataWithFaker, generateTableRow} from './TableHOCExamples';

export const TableHocLoadingExamples: ExampleComponent = () => (
    <VaporComponent id="table-hoc-loading" title="Table HOC Loading" usage="" withSource>
        <Section>
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
    </VaporComponent>
);
TableHocLoadingExamples.title = 'TableHOC loading';

const fiveDataRows = generateDataWithFaker(10);

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

// stop-print
