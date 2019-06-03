import * as React from 'react';
import {TableHeader} from '../TableHeader';
import {ITableHeaderCellProps} from '../TableHeaderCell';

export class TableHeaderExamples extends React.Component<any, any> {

    render() {
        const columns: ITableHeaderCellProps[] = [
            {
                title: 'First col',
            },
            {
                title: 'Second col',
            },
            {
                title: 'Third col',
            },
            {
                title: 'Fourth col',
                className: 'text-dark-grey',
            },
        ];

        return (
            <div className='mt2'>
                <div className='form-group'>
                    <label className='form-control-label'>Table header with specific class on last cell and generic class</label>
                    <table className='mod-collapsible-rows table'>
                        <TableHeader columns={columns} headerClass={'mod-no-border-top'} />
                    </table>
                </div>
            </div>
        );
    }
}
