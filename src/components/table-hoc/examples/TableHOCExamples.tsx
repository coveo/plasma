import {helpers, seed} from 'faker';
import * as React from 'react';
import * as _ from 'underscore';
import {TableHeaderWithSort} from '../TableHeaderWithSort';
import {TableHOC} from '../TableHOC';
import {tableWithBlankslate} from '../TableWithBlankslate';
import {tableWithFilter} from '../TableWithFilter';
import {tableWithPagination} from '../TableWithPagination';
import {tableWithPredicate} from '../TableWithPredicate';
import {tableWithSort} from '../TableWithSort';
import {IExampleRowData} from './TableHOCServerExampleReducer';

const TableWithFilter = _.compose(
    tableWithFilter(),
)(TableHOC);

const TableWithPredicate = _.compose(
    tableWithPredicate({
        id: 'city',
        values: [
            {displayValue: 'All', value: '', selected: true},
            {displayValue: 'Marcoside', value: 'Marcoside'},
        ],
    }),
)(TableHOC);

const TableWithTwoPredicate = _.compose(
    tableWithPredicate({
        id: 'city',
        values: [
            {displayValue: 'All', value: '', selected: true},
            {displayValue: 'Marcoside', value: 'Marcoside'},
        ],
    }),
    tableWithPredicate({
        id: 'username',
        values: [
            {displayValue: 'All', value: '', selected: true},
            {displayValue: 'Hubert', value: 'Hubert93'},
        ],
    }),
)(TableHOC);

const TableWithUsernameFilter = _.compose(
    tableWithBlankslate({title: 'No data caused the table to be empty'}),
    tableWithFilter({matchFilter: (filter: string, data: IExampleRowData) => data.username.toLowerCase().indexOf(filter.toLowerCase()) !== -1}),
    tableWithBlankslate({title: 'Filter caused the table to be empty'}),
)(TableHOC);

const TableWithFilterAndPagination = _.compose(
    tableWithBlankslate({title: 'No data caused the table to be empty'}),
    tableWithFilter(),
    tableWithBlankslate({title: 'Filter caused the table to be empty'}),
    tableWithPagination({perPageNumbers: [3, 5, 10]}),
)(TableHOC);

const TableWithSortFilterAndPagination = _.compose(
    tableWithBlankslate({title: 'No data caused the table to be empty'}),
    tableWithFilter(),
    tableWithBlankslate({title: 'Filter caused the table to be empty'}),
    tableWithSort({
        sort: (key: keyof IExampleRowData, isAsc: boolean, a: IExampleRowData, b: IExampleRowData) => {
            if (key) {
                const compare = (a[key] as string).toLowerCase().localeCompare(b[key].toLowerCase());
                return isAsc ? compare : -1 * compare;
            }
            return 0;
        },
    }),
    tableWithPagination({perPageNumbers: [3, 5, 10]}),
)(TableHOC);

export class TableHOCExamples extends React.Component {
    render() {
        const generateData = (length: number) => _.map(_.range(length), (i: number) => {
            seed(i + 1); // ensure that we always have the same data
            const data = helpers.contextualCard();
            return {
                city: data.address.city,
                email: data.email,
                username: data.username,
            };
        });
        const generateRow = (allData: IExampleRowData[]) => allData.map((data: IExampleRowData) => (
            <tr key={data.username}>
                <td key='city'>{data.city}</td>
                <td key='email'>{data.email.toLowerCase()}</td>
                <td key='username'>{data.username.toLowerCase()}</td>
            </tr>
        ));
        return (
            <div className='mt2'>
                <div className='form-group'>
                    <label className='form-control-label'>
                        Tables with no special behaviour
                    </label>
                    <TableHOC
                        id='1'
                        className='table'
                        data={generateData(3)}
                        renderData={generateRow}
                        tableHeader={<thead><tr><th>City</th><th>Email</th><th>Username</th></tr></thead>}
                    />
                </div>

                <div className='form-group'>
                    <label className='form-control-label'>
                        Tables with filter (no blankslate)
                    </label>
                    <TableWithFilter
                        id='with-filter'
                        className='table'
                        data={generateData(3)}
                        renderData={generateRow}
                    />
                </div>

                <div className='form-group'>
                    <label className='form-control-label'>
                        Tables with predicate (no blankslate)
                    </label>
                    <TableWithPredicate
                        id='with-predicate'
                        className='table'
                        data={generateData(3)}
                        renderData={generateRow}
                    />
                </div>

                <div className='form-group'>
                    <label className='form-control-label'>
                        Tables with two predicate (no blankslate)
                    </label>
                    <TableWithTwoPredicate
                        id='with-two-predicate'
                        className='table'
                        data={generateData(3)}
                        renderData={generateRow}
                    />
                </div>

                <div className='form-group'>
                    <label className='form-control-label'>
                        Tables with filter only on username
                    </label>
                    <TableWithUsernameFilter
                        id='username-filter'
                        className='table'
                        data={generateData(3)}
                        renderData={generateRow}
                    />
                </div>

                <div className='form-group'>
                    <label className='form-control-label'>
                        Tables with filter (but no data)
                    </label>
                    <TableWithUsernameFilter
                        id='username-no-data-filter'
                        className='table'
                        data={generateData(0)}
                        renderData={generateRow}
                    />
                </div>

                <div className='form-group'>
                    <label className='form-control-label'>
                        Tables with filter and pagination
                    </label>
                    <TableWithFilterAndPagination
                        id='filter-and-pagination'
                        className='table'
                        data={generateData(50)}
                        renderData={generateRow}
                    />
                </div>

                <div className='form-group'>
                    <label className='form-control-label'>
                        Tables with sort, filter and pagination
                    </label>
                    <TableWithSortFilterAndPagination
                        id='filter-sort-and-pagination'
                        className='table'
                        data={generateData(50)}
                        renderData={generateRow}
                        tableHeader={
                            <thead>
                                <tr>
                                    <TableHeaderWithSort id='city' tableId='filter-sort-and-pagination'>City</TableHeaderWithSort>
                                    <TableHeaderWithSort id='email' tableId='filter-sort-and-pagination'>Email</TableHeaderWithSort>
                                    <TableHeaderWithSort id='username' tableId='filter-sort-and-pagination' isDefault>Username</TableHeaderWithSort>
                                </tr>
                            </thead>
                        }
                    />
                </div>
            </div>
        );
    }
}
