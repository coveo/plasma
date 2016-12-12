import * as React from 'react';
import { TableHeader } from '../TableHeader';
import { SortExample } from './SortExample';
import { SortTypes } from '../TableSort';
import { ITableHeaderCellProps } from '../TableHeaderCell';

export class TableHeaderExamples extends React.Component<any, any> {

  render() {
    let columns: ITableHeaderCellProps[] = [
      {
        title: 'First col'
      },
      {
        title: 'Second col'
      },
      new SortExample(SortTypes.None, () => {}),
      {
        title: 'Fourth col',
        className: 'text-dark-grey'
      }
    ];

    return (
      <div className='mt2'>
        <div className='form-group'>
          <label className='form-control-label'>Table header with specific class on last cell and generic class</label>
          <table className='mod-collapsible-rows'>
            <TableHeader columns={columns} headerClass={'mod-no-border-top'} />
          </table>
        </div>
      </div>
    );
  };
}
