import * as React from 'react';
import * as _ from 'underscore';
import {IDispatch, ReduxConnect} from '../../../utils/ReduxUtils';
import {IReactVaporTestState} from '../../../utils/TestUtils';
import {TableHeaderWithSort} from '../TableHeaderWithSort';
import {TableHOC} from '../TableHOC';
import {TableRowConnected} from '../TableRowConnected';
import {tableWithBlankslate} from '../TableWithBlankslate';
import {tableWithFilter} from '../TableWithFilter';
import {tableWithPagination} from '../TableWithPagination';
import {tableWithSort} from '../TableWithSort';
import {IExampleRowData, TableHOCServerActions} from './TableHOCServerExampleReducer';

const ServerTable = _.compose(
    tableWithBlankslate({title: 'No data caused the table to be empty'}),
    tableWithFilter({isServer: true}),
    tableWithBlankslate({title: 'Filter caused the table to be empty'}),
    tableWithSort({isServer: true}),
    tableWithPagination({isServer: true, perPageNumbers: [3, 5, 10]}),
)(TableHOC);

interface TableHOCServerDispatchProps {
    fetch: () => void;
}

interface TableHOCServerStateProps {
    serverData: IExampleRowData[];
    totalEntries: number;
    totalPages: number;
}
interface TableHOCServerProps extends Partial<TableHOCServerDispatchProps>,
    Partial<TableHOCServerStateProps> {}

const mapStateToProps = (state: IReactVaporTestState) => ({
    serverData: state.tableHOCExample.data,
});
const mapDispatchToProps = (dispatch: IDispatch): TableHOCServerDispatchProps => ({
    fetch: () => dispatch(TableHOCServerActions.fetchData()),
});

@ReduxConnect(mapStateToProps, mapDispatchToProps)
export class TableHOCServerExamples extends React.Component<TableHOCServerProps> {
    static TABLE_ID = 'complex-example';

    render() {
        const generateRow = (allData: IExampleRowData[]) => allData.map((data: IExampleRowData) => (
            <TableRowConnected key={data.username}>
                <td key='city'>{data.city}</td>
                <td key='email'>{data.email.toLowerCase()}</td>
                <td key='username'>{data.username.toLowerCase()}</td>
            </TableRowConnected>
        ));
        return (
            <div className='mt2'>
                <div className='form-group'>
                    <label className='form-control-label'>
                        Server table
                    </label>
                    <ServerTable
                        id={TableHOCServerExamples.TABLE_ID}
                        className='table'
                        data={this.props.serverData}
                        renderData={generateRow}
                        tableHeader={this.renderHeader()}
                        onUpdate={this.onUpdate}
                    />
                </div>
            </div>
        );
    }

    private renderHeader() {
        return (
            <thead>
                <tr>
                    <TableHeaderWithSort id='address.city' tableId={TableHOCServerExamples.TABLE_ID}>City</TableHeaderWithSort>
                    <TableHeaderWithSort id='email' tableId={TableHOCServerExamples.TABLE_ID}>Email</TableHeaderWithSort>
                    <TableHeaderWithSort id='username' tableId={TableHOCServerExamples.TABLE_ID} isDefault>Username</TableHeaderWithSort>
                </tr>
            </thead>
        );
    }

    private onUpdate = () => {
        this.props.fetch();
    }
}
