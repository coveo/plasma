import * as moment from 'moment';
import * as React from 'react';
import * as _ from 'underscore';

import {withServerSideProcessing} from '../../../hoc/withServerSideProcessing/withServerSideProcessing';
import {DateUtils} from '../../../utils/DateUtils';
import {IDispatch, ReduxConnect} from '../../../utils/ReduxUtils';
import {IReactVaporTestState} from '../../../utils/tests/TestUtils';
import {SELECTION_BOXES_LONG} from '../../datePicker/examples/DatePickerExamplesCommon';
import {LastUpdated} from '../../lastUpdated/LastUpdated';
import {TableHeaderWithSort} from '../TableHeaderWithSort';
import {TableHOC} from '../TableHOC';
import {TableRowConnected} from '../TableRowConnected';
import {TableRowNumberColumn} from '../TableRowNumberColumn';
import {TableRowNumberHeader} from '../TableRowNumberHeader';
import {tableWithActions} from '../TableWithActions';
import {tableWithBlankSlate} from '../TableWithBlankSlate';
import {tableWithDatePicker} from '../TableWithDatePicker';
import {tableWithFilter} from '../TableWithFilter';
import {tableWithPagination} from '../TableWithPagination';
import {tableWithPredicate} from '../TableWithPredicate';
import {tableWithSort} from '../TableWithSort';
import {IExampleRowData, TableHOCServerActions} from './TableHOCServerExampleReducer';

const ServerTable = _.compose(
    withServerSideProcessing,
    tableWithBlankSlate({title: 'No data fetched from the server'}),
    tableWithPredicate({
        id: 'address.city',
        prepend: <span className="mr1 text-medium-grey">City:</span>,
        values: [{displayValue: 'All', value: '', selected: true}, {displayValue: 'Lebsackbury', value: 'Lebsackbury'}],
    }),
    tableWithPredicate({
        id: 'username',
        prepend: <span className="mr1 text-medium-grey">Username:</span>,
        values: [{displayValue: 'All', value: '', selected: true}, {displayValue: 'bret', value: 'Bret'}],
    }),
    tableWithFilter(),
    tableWithDatePicker({
        datesSelectionBoxes: SELECTION_BOXES_LONG,
        years: [...DateUtils.getPreviousYears(25), DateUtils.currentYear.toString()],
        initialDateRange: [
            moment()
                .subtract(25, 'years')
                .toDate(),
            moment().toDate(),
        ],
    }),
    tableWithSort(),
    tableWithPagination({perPageNumbers: [3, 5, 10]}),
    tableWithActions()
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
interface TableHOCServerProps extends Partial<TableHOCServerDispatchProps>, Partial<TableHOCServerStateProps> {}

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
        const generateRows = (allData: IExampleRowData[]) =>
            allData.map((data: IExampleRowData, i: number) => (
                <TableRowConnected
                    id={data.username}
                    tableId={TableHOCServerExamples.TABLE_ID}
                    key={data.username}
                    actions={[
                        {
                            primary: true,
                            icon: 'edit',
                            name: 'edit',
                            enabled: true,
                            trigger: () => alert(data.username),
                            callOnDoubleClick: true,
                        },
                    ]}
                    isMultiselect
                    disabled={i % 3 === 0}
                >
                    <TableRowNumberColumn number={i + 1} />
                    <td key="city">{data.city}</td>
                    <td key="email">{data.email.toLowerCase()}</td>
                    <td key="username">{data.username.toLowerCase()}</td>
                    <td key="date-of-birth">{data.dateOfBirth.toLocaleDateString()}</td>
                </TableRowConnected>
            ));

        return (
            <div className="mt2">
                <div className="form-group">
                    <label className="form-control-label">Server table with numbered rows</label>
                    <span className="block my2 text-grey-7">
                        Please note that the backend service doesn't support dates but we still make a request for every
                        change in the date range.
                    </span>
                    <ServerTable
                        id={TableHOCServerExamples.TABLE_ID}
                        className="table table-numbered"
                        data={this.props.serverData}
                        renderBody={generateRows}
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
                    <TableHeaderWithSort id="address.city" tableId={TableHOCServerExamples.TABLE_ID}>
                        City
                    </TableHeaderWithSort>
                    <TableHeaderWithSort id="email" tableId={TableHOCServerExamples.TABLE_ID}>
                        Email
                    </TableHeaderWithSort>
                    <TableHeaderWithSort id="username" tableId={TableHOCServerExamples.TABLE_ID} isDefault>
                        Username
                    </TableHeaderWithSort>
                    <th key="date-of-birth">Date of Birth</th>
                </tr>
            </thead>
        );
    }

    private onUpdate = () => {
        this.props.fetch();
    };
}
