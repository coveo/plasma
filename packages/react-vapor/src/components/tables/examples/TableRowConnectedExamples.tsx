import * as React from 'react';

import {UUID} from '../../../utils/UUID';
import {SingleSelectConnected} from '../../select/SingleSelectConnected';
import {TableCollapsibleRowConnected} from '../TableCollapsibleRowConnected';
import {TableHeadingRowConnected} from '../TableHeadingRowConnected';

export class TableRowConnectedExamples extends React.Component<any, any> {

    render() {
        const firstRowCols: (id: string) => JSX.Element[] = (id: string) => [
            <td key='anything'>Anything</td>,
            <td key='something'>Something</td>,
            <td key='everything'>
                <SingleSelectConnected id={id} />
            </td>,
        ];

        return (
            <div className='mt2'>
                <div className='form-group'>
                    <label className='form-control-label'>Table rows without and with collapsible rows and Redux state</label>
                    <table className='table mod-collapsible-rows'>
                        <tbody className='selected'>
                            <TableHeadingRowConnected id='first-row-connected' isCollapsible={true}>
                                {firstRowCols(UUID.generate())}
                            </TableHeadingRowConnected>
                            <TableCollapsibleRowConnected id='first-row-connected' nbColumns={4}>
                                <div className='p2'>This is the collapsible row!</div>
                            </TableCollapsibleRowConnected>
                        </tbody>
                        <tbody className='selected'>
                            <TableHeadingRowConnected id='second-row-connected' isCollapsible={false} tableHasCollapsibleRow>
                                {firstRowCols(UUID.generate())}
                            </TableHeadingRowConnected>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
