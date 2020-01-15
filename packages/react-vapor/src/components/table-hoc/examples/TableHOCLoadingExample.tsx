import * as React from 'react';
import * as _ from 'underscore';
import {ExampleComponent} from '../../../../docs/src/components/ComponentsInterface';
import {Section} from '../../section/Section';
import {TableHOC} from '../TableHOC';
import {tableWithBlankSlate} from '../TableWithBlankSlate';
import {tableWithFilter} from '../TableWithFilter';
import {generateDataWithFacker, generateTableRow} from './TableHOCExamples';

export const TableHocLoadingExamples: ExampleComponent = () => (
    <Section level={1} title="Table loading examples">
        <Section level={2} title="Table loading with the default number of row">
            <TableLoadingExamplesWithDataNull />
        </Section>
        <Section level={2} title="Table loading with the number of row equal to the number of data">
            <TableLoadingExamplesWithData />
        </Section>
    </Section>
);
TableHocLoadingExamples.title = 'TableHOC loading';

const fiveDataRows = generateDataWithFacker(10);

// start-print

const TableLoadingExamplesWithDataNull: React.FunctionComponent = () => {
    const tableId = 'TableLoadingExamples';
    return (
        <Section>
            <div>
                <TableLoadingComposed
                    id={tableId}
                    className="table"
                    data={null}
                    renderBody={generateTableRow}
                    isLoading
                />
            </div>
        </Section>
    );
};

const TableLoadingExamplesWithData: React.FunctionComponent = () => {
    const tableId = 'TableLoadingExamples';
    return (
        <Section>
            <div>
                <TableLoadingComposed
                    id={tableId}
                    className="table"
                    data={fiveDataRows}
                    renderBody={generateTableRow}
                    isLoading
                />
            </div>
        </Section>
    );
};

const TableLoadingComposed = _.compose(
    tableWithBlankSlate({title: 'No data caused the table to be empty'}),
    tableWithFilter({
        matchFilter: (filter: string, data: any) => data.username.toLowerCase().indexOf(filter.toLowerCase()) !== -1,
    }),
    tableWithBlankSlate({title: 'Filter caused the table to be empty'})
)(TableHOC);
