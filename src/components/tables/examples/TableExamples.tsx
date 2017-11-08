import * as React from 'react';
import { Table } from '../Table';

export class TableExamples extends React.Component<any, any> {

    render() {
        return (
            <div className='mt2'>
                <div className='form-group'>
                    <label className='form-control-label'>Table</label>
                    <Table>
                        <h3>I am a children</h3>
                    </Table>
                </div>
            </div>
        );
    }
}
