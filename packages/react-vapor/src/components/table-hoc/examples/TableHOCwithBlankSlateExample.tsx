import * as React from 'react';
import {connect} from 'react-redux';
import * as _ from 'underscore';
import {ExampleComponent} from '../../../../docs/src/components/ComponentsInterface';
import {Section} from '../../section/Section';
import {TableHOC} from '../TableHOC';
import {tableWithBlankSlate} from '../TableWithBlankSlate';
import {tableWithFilter} from '../TableWithFilter';
import {generateDataWithFacker, generateTableRow} from './TableHOCExamples';

export const TableHocWithBlankSlateExample: ExampleComponent = () => (
    <Section>
        <TableWithBlankSlateExample />
    </Section>
);
TableHocWithBlankSlateExample.title = 'TableHOC blankSlate';

export interface IExampleRowData {
    city: string;
    email: string;
    username: string;
    dateOfBirth: Date;
    id: string;
}

// start-print
const mapStateToProps = () => ({
    data: generateDataWithFacker(0),
});

const TableWithBlankSlateExampleDisconnected: React.FunctionComponent = () => {
    const tableId = 'tableWithBlankSlate';

    return (
        <Section>
            <TableWithBlankSlateComposed
                id={tableId}
                className="table"
                data={generateDataWithFacker(0)}
                renderBody={generateTableRow}
            />
        </Section>
    );
};
const TableWithBlankSlateExample = connect(mapStateToProps)(TableWithBlankSlateExampleDisconnected);

const TableWithBlankSlateComposed = _.compose(
    tableWithBlankSlate({title: 'No data caused the table to be empty'}),
    tableWithFilter({
        matchFilter: (filter: string, data: IExampleRowData) =>
            data.username.toLowerCase().indexOf(filter.toLowerCase()) !== -1,
    }),
    tableWithBlankSlate({title: 'Filter caused the table to be empty'})
)(TableHOC);
