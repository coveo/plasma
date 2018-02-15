import * as React from 'react';
import { TableCollapsibleRow } from '../TableCollapsibleRow';
import { TableHeadingRow } from '../TableHeadingRow';

export class TableRowExamples extends React.Component<any, any> {

  render() {
    const firstRowCols: JSX.Element[] = [
      <td key='anything'>Anything</td>,
      <td key='something'>Something</td>,
      <td key='everything'>Everything</td>,
    ];

    return (
      <div className='mt2'>
        <div className='form-group'>
          <label className='form-control-label'>Table rows without and with collapsible rows</label>
          <table className='mod-collapsible-rows'>
            <tbody className='selected'>
              <TableHeadingRow isCollapsible={true}>
                {firstRowCols}
              </TableHeadingRow>
              <TableCollapsibleRow id='first-row' nbColumns={4}>
                <div className='p2'>This is the collapsible row!</div>
              </TableCollapsibleRow>
            </tbody>
            <tbody className='selected'>
              <TableHeadingRow isCollapsible={false}>
                {firstRowCols}
              </TableHeadingRow>
            </tbody>
            <tbody className='selected'>
              <TableHeadingRow isCollapsible={true} opened={true}>
                {firstRowCols}
              </TableHeadingRow>
              <TableCollapsibleRow id='second-row' nbColumns={4} opened >
                <div className='p2'>This is the collapsible row!</div>
              </TableCollapsibleRow>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
