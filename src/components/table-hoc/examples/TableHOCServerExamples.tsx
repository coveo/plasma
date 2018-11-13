import * as React from 'react';
import * as _ from 'underscore';
import {IDispatch, ReduxConnect} from '../../../utils/ReduxUtils';
import {IReactVaporTestState} from '../../../utils/TestUtils';
import {LastUpdated} from '../../lastUpdated/LastUpdated';
import {TableHeaderWithSort} from '../TableHeaderWithSort';
import {TableHOC} from '../TableHOC';
import {TableRowConnected} from '../TableRowConnected';
import {TableRowNumberColumn} from '../TableRowNumberColumn';
import {TableRowNumberHeader} from '../TableRowNumberHeader';
import {tableWithActions} from '../TableWithActions';
import {tableWithBlankslate} from '../TableWithBlankslate';
import {tableWithFilter} from '../TableWithFilter';
import {tableWithPagination} from '../TableWithPagination';
import {tableWithPredicate} from '../TableWithPredicate';
import {tableWithSort} from '../TableWithSort';
import {IExampleRowData, TableHOCServerActions} from './TableHOCServerExampleReducer';

const ServerTable = _.compose(
    tableWithBlankslate({title: 'No data caused the table to be empty'}),
    tableWithPredicate({
        id: 'address.city',
        prepend: <span className='mr1 text-medium-grey'>City:</span>,
        isServer: true,
        values: [
            {displayValue: 'All', value: '', selected: true},
            {displayValue: 'Lebsackbury', value: 'Lebsackbury'},
        ],
    }),
    tableWithPredicate({
        id: 'username',
        prepend: <span className='mr1 text-medium-grey'>Username:</span>,
        isServer: true,
        values: [
            {displayValue: 'All', value: '', selected: true},
            {displayValue: 'bret', value: 'Bret'},
        ],
    }),
    tableWithFilter({isServer: true}),
    tableWithBlankslate({title: 'Filter caused the table to be empty'}),
    tableWithSort({isServer: true}),
    tableWithPagination({isServer: true, perPageNumbers: [3, 5, 10]}),
    tableWithActions(),
)(TableHOC);

interface TableHOCServerDispatchProps {
    fetch: () => void;
}

interface TableHOCServerStateProps {
    isLoading: boolean;
    serverData: IExampleRowData[];
    totalEntries: number;
    totalPages: number;
}
interface TableHOCServerProps extends Partial<TableHOCServerDispatchProps>,
    Partial<TableHOCServerStateProps> {}

const mapStateToProps = (state: IReactVaporTestState) => ({
    isLoading: state.tableHOCExample.isLoading,
    serverData: state.tableHOCExample.data,
});
const mapDispatchToProps = (dispatch: IDispatch): TableHOCServerDispatchProps => ({
    fetch: _.debounce(() => dispatch(TableHOCServerActions.fetchData()), 400),
});

@ReduxConnect(mapStateToProps, mapDispatchToProps)
export class TableHOCServerExamples extends React.Component<TableHOCServerProps> {
    static TABLE_ID = 'complex-example';

    render() {
        const generateRow = (allData: IExampleRowData[]) => allData.map((data: IExampleRowData, i: number) => (
            <TableRowConnected
                id={data.username}
                tableId={TableHOCServerExamples.TABLE_ID}
                key={data.username}
                actions={[{primary: true, icon: 'edit', name: 'edit', enabled: true, trigger: () => alert(data.username)}]}
                isMultiselect
            >
                <TableRowNumberColumn number={i + 1} />
                <td key='city'>{data.city}</td>
                <td key='email'>{data.email.toLowerCase()}</td>
                <td key='username'>{data.username.toLowerCase()}</td>
            </TableRowConnected>
        ));

        return (
            <div className='mt2'>
                <div className='form-group'>
                    <label className='form-control-label'>
                        Server table with numbered rows
                    </label>
                    <ServerTable
                        id={TableHOCServerExamples.TABLE_ID}
                        className='table table-numbered'
                        data={this.props.serverData}
                        renderData={generateRow}
                        tableHeader={this.renderHeader()}
                        onUpdate={this.onUpdate}
                        isLoading={this.props.isLoading}
                    >
                        <LastUpdated time={new Date()} />
                    </ServerTable>
                </div>
            </div>
        );
    }

    private renderHeader() {
        return (
            <thead>
                <tr>
                    <TableRowNumberHeader />
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
