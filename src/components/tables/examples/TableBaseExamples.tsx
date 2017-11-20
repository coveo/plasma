import { Table, ITableRowsData, ITableRowData, ITableData } from '../TableBase';
import { TableHeadingRowConnected } from '../TableHeadingRowConnected';
import { TableCell } from '../TableHeadingRow';
import * as React from 'react';
import * as _ from 'underscore';

const tableData: ITableData = {
  byId: {
    row1: {
      id: 'row1',
      headingData: {
        attribute1: 'attribute 1',
        attribute2: 'attribute 2',
        attribute3: 'attribute 3',
        attribute4: 'attribute 4',
      },
    },
    row2: {
      id: 'row2',
      headingData: {
        attribute1: 'attribute 1',
        attribute2: 'attribute 2',
        attribute3: 'attribute 3',
        attribute4: 'attribute 4',
      },
    },
    row3: {
      id: 'row3',
      headingData: {
        attribute1: 'attribute 1',
        attribute2: 'attribute 2',
        attribute3: 'attribute 3',
        attribute4: 'attribute 4',
      },
    },
    row4: {
      id: 'row4',
      headingData: {
        attribute1: 'attribute 1',
        attribute2: 'attribute 2',
        attribute3: 'attribute 3',
        attribute4: 'attribute 4',
      },
      collapsibleData: {
        attribute1: 'attribute 1',
        attribute2: 'attribute 2',
        attribute3: 'attribute 3',
        attribute4: 'attribute 4',
      },
    },
  },
  allIds: ['row1', 'row2', 'row3', 'row4'],
  displayedIds: ['row1', 'row2', 'row3', 'row4'],
};

const headerDataParser = (rowData: ITableRowData): JSX.Element => (
  <TableHeadingRowConnected isCollapsible={!!rowData.collapsibleData} id={rowData.id}>
    {_.values(rowData.headingData).map((val: string) => <td>{val}</td>)}
  </TableHeadingRowConnected>
);

export class TableBaseExamples extends React.Component<any, any> {

  render() {
    return (
      <div className='mt2'>
        <div className='form-group'>
          <label className='form-control-label'>Table</label>
          <Table
            id={'hello'}
            initialTableData={tableData}
            headingRowDataParser={headerDataParser}
            actionBar={{
              id: 'nice',
              extraContainerClasses: ['mod-border-top'],
              actions: [
                { name: 'edit', icon: 'edit', enabled: true, primary: true },
                { name: 'view', icon: 'view', enabled: true, primary: false },
                { name: 'copy', icon: 'copy', enabled: true, primary: false },
              ],
            }}
            predicates={[
              { id: 'predicaaaaate' },
              { id: 'predicaaaaateeee', containerClasses: ['ml1'] },
            ]}
            filter={{ id: 'filtaaaaaa', containerClasses: ['ml1'] }}
            blankSlates={{}}
            tableHeader={{ columns: [{ title: 'hey' }, { title: 'ho' }, { title: 'hey' }, { title: 'ho' }] }}
            perPage={{ id: 'noice', totalEntries: 300 }}
            pagination={{ id: 'noiiiice', totalPages: 10 }}
            lastUpdated={{ id: 'hello' }}
          />
        </div>
      </div>
    );
  }
}
