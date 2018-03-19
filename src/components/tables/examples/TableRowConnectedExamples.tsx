import * as React from 'react';
import {TableCollapsibleRowConnected} from '../TableCollapsibleRowConnected';
import {TableHeadingRowConnected} from '../TableHeadingRowConnected';

export class TableRowConnectedExamples extends React.Component<any, any> {

    render() {
        const firstRowCols: JSX.Element[] = [
            <td key='anything'>Anything</td>,
            <td key='something'>Something</td>,
            <td key='everything'>Everything</td>,
        ];

        return (
            <div className='mt2'>
                <div className='form-group'>
                    <label className='form-control-label'>Table rows without and with collapsible rows and Redux state</label>
                    <table className='mod-collapsible-rows'>
                        <tbody className='selected'>
                            <TableHeadingRowConnected id='first-row-connected' isCollapsible={true}>
                                {firstRowCols}
                            </TableHeadingRowConnected>
                            <TableCollapsibleRowConnected id='first-row-connected' nbColumns={4}>
                                <div className='p2'>This is the collapsible row!</div>
                            </TableCollapsibleRowConnected>
                        </tbody>
                        <tbody className='selected'>
                            <TableHeadingRowConnected id='second-row-connected' isCollapsible={false}>
                                {firstRowCols}
                            </TableHeadingRowConnected>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
