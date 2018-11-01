import {helpers, seed} from 'faker';
import * as React from 'react';
import * as _ from 'underscore';
import {TableHOC} from '../TableHOC';
import {TableRowConnected} from '../TableRowConnected';
import {tableWithBlankslate} from '../TableWithBlankslate';
import {tableWithFilter} from '../TableWithFilter';

interface IExampleRowData {
    city: string;
    email: string;
    username: string;
}

const TableWithFilter = _.compose(
    tableWithFilter(),
)(TableHOC);

const TableWithUsernameFilter = _.compose(
    tableWithBlankslate({title: 'No data caused the table to be empty'}),
    tableWithFilter({matchFilter: (filter: string, data: IExampleRowData) => data.username.toLowerCase().indexOf(filter.toLowerCase()) !== -1}),
    tableWithBlankslate({title: 'Filter caused the table to be empty'}),
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
            </div>
        );
    }
}
