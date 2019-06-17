import {helpers, seed} from 'faker';
import * as moment from 'moment';
import * as React from 'react';
import * as _ from 'underscore';
import {DateUtils} from '../../../utils/DateUtils';
import {IDispatch, ReduxConnect} from '../../../utils/ReduxUtils';
import {UUID} from '../../../utils/UUID';
import {Button} from '../../button/Button';
import {SELECTION_BOX, SELECTION_BOXES_LONG} from '../../datePicker/examples/DatePickerExamplesCommon';
import {SingleSelectConnected} from '../../select/SingleSelectConnected';
import {TableRowActions} from '../actions/TableRowActions';
import {TableHeaderWithSort} from '../TableHeaderWithSort';
import {TableHOC} from '../TableHOC';
import {TableRowConnected} from '../TableRowConnected';
import {tableWithActions} from '../TableWithActions';
import {tableWithBlankSlate} from '../TableWithBlankSlate';
import {ITableWithDatePickerProps, tableWithDatePicker} from '../TableWithDatePicker';
import {tableWithFilter} from '../TableWithFilter';
import {tableWithPagination} from '../TableWithPagination';
import {tableWithPredicate} from '../TableWithPredicate';
import {tableWithSort} from '../TableWithSort';
import {IExampleRowData} from './TableHOCServerExampleReducer';

export type TableHOCExamplesDispatchProps = ReturnType<typeof mapDispatchToProps>;

const TableWithFilter = _.compose(tableWithFilter({placeholder: 'custom placeholder'}))(TableHOC);

const TableWithActions = _.compose(tableWithActions())(TableHOC);

const TableWithPredicate = _.compose(
    tableWithPredicate({
        id: 'city',
        values: [{displayValue: 'All', value: '', selected: true}, {displayValue: 'Marcoside', value: 'Marcoside'}],
    })
)(TableHOC);

const TableWithTwoPredicate = _.compose(
    tableWithPredicate({
        id: 'city',
        values: [{displayValue: 'All', value: '', selected: true}, {displayValue: 'Marcoside', value: 'Marcoside'}],
    }),
    tableWithPredicate({
        id: 'username',
        values: [{displayValue: 'All', value: '', selected: true}, {displayValue: 'Hubert', value: 'Hubert93'}],
    })
)(TableHOC);

const TableWithUsernameFilter = _.compose(
    tableWithBlankSlate({title: 'No data caused the table to be empty'}),
    tableWithFilter({
        matchFilter: (filter: string, data: IExampleRowData) =>
            data.username.toLowerCase().indexOf(filter.toLowerCase()) !== -1,
    }),
    tableWithBlankSlate({title: 'Filter caused the table to be empty'})
)(TableHOC);

const TableWithDatePicker: React.ComponentClass<
    ITableWithDatePickerProps & React.HTMLAttributes<HTMLTableElement>
> = _.compose(
    tableWithDatePicker({
        datesSelectionBoxes: SELECTION_BOX,
        matchDates: (data: IExampleRowData, lowerLimit: Date) => data.dateOfBirth >= lowerLimit,
        years: [...DateUtils.getPreviousYears(50), DateUtils.currentYear.toString()],
        initialDateRange: [
            moment()
                .subtract(50, 'years')
                .toDate(),
            null,
        ],
    })
)(TableHOC);

const TableWithFilterAndPagination = _.compose(
    tableWithBlankSlate({title: 'No data caused the table to be empty'}),
    tableWithFilter(),
    tableWithBlankSlate({title: 'Filter caused the table to be empty'}),
    tableWithPagination({perPageNumbers: [3, 5, 10]})
)(TableHOC);

const TableWithSortFilterAndPagination = _.compose(
    tableWithBlankSlate({title: 'No data caused the table to be empty'}),
    tableWithFilter(),
    tableWithBlankSlate({title: 'Filter caused the table to be empty'}),
    tableWithDatePicker({
        datesSelectionBoxes: SELECTION_BOXES_LONG,
        matchDates: (data: IExampleRowData, lowerLimit: Date, upperLimit?: Date) =>
            _.isUndefined(upperLimit) || (lowerLimit <= data.dateOfBirth && data.dateOfBirth <= upperLimit),
        years: [...DateUtils.getPreviousYears(100), DateUtils.currentYear.toString()],
        initialDateRange: [
            moment()
                .subtract(75, 'years')
                .toDate(),
            moment().toDate(),
        ],
    }),
    tableWithBlankSlate({title: 'Date picker caused the table to be empty'}),
    tableWithSort({
        sort: (key: keyof IExampleRowData, isAsc: boolean, a: IExampleRowData, b: IExampleRowData) => {
            if (key) {
                if (a[key] instanceof Date) {
                    const dateCompare = (a[key] as any) - (b[key] as any);
                    return isAsc ? dateCompare : -1 * dateCompare;
                }

                const compare = (a[key] as string).toLowerCase().localeCompare((b[key] as string).toLowerCase());

                return isAsc ? compare : -1 * compare;
            }
            return 0;
        },
    }),
    tableWithPagination({perPageNumbers: [3, 5, 10]})
)(TableHOC);

const mapDispatchToProps = (dispatch: IDispatch) => ({
    unselectActions: () => dispatch(TableRowActions.deselectAll('table-with-unselect-all')),
});

@ReduxConnect(null, mapDispatchToProps)
export class TableHOCExamples extends React.Component<TableHOCExamplesDispatchProps> {
    render() {
        const generateData = (length: number) =>
            _.map(_.range(length), (i: number) => {
                seed(i + 1); // ensure that we always have the same data
                const data = helpers.contextualCard();
                return {
                    city: data.address.city,
                    email: data.email,
                    username: data.username,
                    dateOfBirth: data.dob,
                    id: UUID.generate(),
                };
            });

        const generateRows = (allData: IExampleRowData[]) =>
            allData.map((data: IExampleRowData) => (
                <tr key={data.username}>
                    <td key="city">{data.city}</td>
                    <td key="email">{data.email.toLowerCase()}</td>
                    <td key="username">{data.username.toLowerCase()}</td>
                    <td key="date-of-birth">{data.dateOfBirth.toLocaleDateString()}</td>
                </tr>
            ));
        const generateCollapsibleRow = (data: IExampleRowData) => (
            <div className="p2">
                <div>Hey there, I am collapsible information about</div>
                <div>{JSON.stringify(data)}</div>
            </div>
        );

        return (
            <div className="mt2">
                <div className="form-group">
                    <label className="form-control-label">Tables with no special behaviour</label>
                    <TableHOC
                        id="basic-table"
                        className="table"
                        data={generateData(3)}
                        renderBody={generateRows}
                        tableHeader={
                            <thead>
                                <tr>
                                    <th>City</th>
                                    <th>Email</th>
                                    <th>Username</th>
                                </tr>
                            </thead>
                        }
                    />
                </div>

                <div className="form-group">
                    <label className="form-control-label">Tables with actions</label>
                    <TableWithActions
                        id="table-with-actions"
                        className="table"
                        data={generateData(3)}
                        renderBody={(allData: IExampleRowData[]) =>
                            allData.map((data: IExampleRowData) => (
                                <TableRowConnected
                                    id={data.id}
                                    tableId={'table-with-actions'}
                                    key={data.id}
                                    actions={[
                                        {
                                            primary: true,
                                            icon: 'edit',
                                            name: 'edit',
                                            enabled: true,
                                            trigger: () => alert('trigger on action'),
                                            callOnDoubleClick: true,
                                        },
                                        {primary: false, icon: 'view', name: 'view', enabled: true},
                                        {primary: false, icon: 'copy', name: 'copy', enabled: true},
                                        {primary: false, icon: 'delete', name: 'delete', enabled: true},
                                    ]}
                                >
                                    <td key="city">{data.city}</td>
                                    <td key="email">{data.email.toLowerCase()}</td>
                                    <td key="username">
                                        <SingleSelectConnected id={data.id + 'dropdown'} />
                                    </td>
                                </TableRowConnected>
                            ))
                        }
                        tableHeader={
                            <thead>
                                <tr>
                                    <th>City</th>
                                    <th>Email</th>
                                    <th>Username</th>
                                </tr>
                            </thead>
                        }
                    />
                </div>

                <div className="form-group">
                    <label className="form-control-label">
                        Tables with multi selection on rows and a button to unselect all
                    </label>
                    <div className="p2">
                        <Button name="Unselect actions" onClick={() => this.props.unselectActions()} enabled />
                    </div>
                    <TableWithActions
                        id="table-with-unselect-all"
                        className="table"
                        data={generateData(3)}
                        renderBody={(allData: IExampleRowData[]) =>
                            allData.map((data: IExampleRowData) => (
                                <TableRowConnected
                                    id={data.id}
                                    tableId={'table-with-unselect-all'}
                                    key={data.id}
                                    isMultiselect
                                    actions={[
                                        {
                                            primary: true,
                                            icon: 'edit',
                                            name: 'edit',
                                            enabled: true,
                                            trigger: () => alert('trigger on action'),
                                            callOnDoubleClick: true,
                                        },
                                        {primary: false, icon: 'view', name: 'view', enabled: true},
                                    ]}
                                >
                                    <td key="city">{data.city}</td>
                                    <td key="email">{data.email.toLowerCase()}</td>
                                    <td key="username">
                                        <SingleSelectConnected id={data.id + 'dropdown'} />
                                    </td>
                                </TableRowConnected>
                            ))
                        }
                        tableHeader={
                            <thead>
                                <tr>
                                    <th>City</th>
                                    <th>Email</th>
                                    <th>Username</th>
                                </tr>
                            </thead>
                        }
                    />
                </div>

                <div className="form-group">
                    <label className="form-control-label">Tables with collapsible rows</label>
                    <TableHOC
                        id="collapsible-rows"
                        className="table mod-collapsible-rows"
                        data={generateData(3)}
                        renderBody={(allData: IExampleRowData[]) =>
                            allData.map((data: IExampleRowData) => (
                                <TableRowConnected
                                    tableId="collapsible-rows"
                                    key={data.username}
                                    id={data.username}
                                    collapsible={{
                                        content: generateCollapsibleRow(data),
                                        // tslint:disable-next-line:no-console
                                        onToggleCollapsible: (isOpen: boolean) => console.log(isOpen),
                                    }}
                                >
                                    <td key="city">{data.city}</td>
                                    <td key="email">{data.email.toLowerCase()}</td>
                                    <td key="username">
                                        <SingleSelectConnected id={data.username + 'dropdown'} />
                                    </td>
                                </TableRowConnected>
                            ))
                        }
                        tableHeader={
                            <thead>
                                <tr>
                                    <th>City</th>
                                    <th>Email</th>
                                    <th>Username</th>
                                    <th></th>
                                </tr>
                            </thead>
                        }
                    />
                </div>

                <div className="form-group">
                    <label className="form-control-label">Tables with filter (no blankslate)</label>
                    <TableWithFilter
                        id="with-filter"
                        className="table"
                        data={generateData(3)}
                        renderBody={generateRows}
                    />
                </div>

                <div className="form-group">
                    <label className="form-control-label">Tables with date picker (no blankslate)</label>
                    <TableWithDatePicker
                        id="with-date-picker"
                        className="table"
                        data={generateData(3)}
                        renderBody={generateRows}
                    />
                </div>

                <div className="form-group">
                    <label className="form-control-label">Tables with predicate (no blankslate)</label>
                    <TableWithPredicate
                        id="with-predicate"
                        className="table"
                        data={generateData(3)}
                        renderBody={generateRows}
                    />
                </div>

                <div className="form-group">
                    <label className="form-control-label">Tables with two predicate (no blankslate)</label>
                    <TableWithTwoPredicate
                        id="with-two-predicate"
                        className="table"
                        data={generateData(3)}
                        renderBody={generateRows}
                    />
                </div>

                <div className="form-group">
                    <label className="form-control-label">Tables with filter only on username</label>
                    <TableWithUsernameFilter
                        id="username-filter"
                        className="table"
                        data={generateData(3)}
                        renderBody={generateRows}
                    />
                </div>

                <div className="form-group">
                    <label className="form-control-label">Tables with filter (but no data)</label>
                    <TableWithUsernameFilter
                        id="username-no-data-filter"
                        className="table"
                        data={generateData(0)}
                        renderBody={generateRows}
                    />
                </div>

                <div className="form-group">
                    <label className="form-control-label">Tables with filter and pagination</label>
                    <TableWithFilterAndPagination
                        id="filter-and-pagination"
                        className="table"
                        data={generateData(50)}
                        renderBody={generateRows}
                    />
                </div>

                <div className="form-group">
                    <label className="form-control-label">Tables with sort, filter and pagination</label>
                    <TableWithSortFilterAndPagination
                        id="filter-sort-and-pagination"
                        className="table"
                        data={generateData(50)}
                        renderBody={generateRows}
                        tableHeader={
                            <thead>
                                <tr>
                                    <TableHeaderWithSort id="city" tableId="filter-sort-and-pagination">
                                        City
                                    </TableHeaderWithSort>
                                    <TableHeaderWithSort id="email" tableId="filter-sort-and-pagination">
                                        Email
                                    </TableHeaderWithSort>
                                    <TableHeaderWithSort id="username" tableId="filter-sort-and-pagination" isDefault>
                                        Username
                                    </TableHeaderWithSort>
                                    <TableHeaderWithSort id="dateOfBirth" tableId="filter-sort-and-pagination">
                                        Date of Birth
                                    </TableHeaderWithSort>
                                </tr>
                            </thead>
                        }
                    />
                </div>
            </div>
        );
    }
}
