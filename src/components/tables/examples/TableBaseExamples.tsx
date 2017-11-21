import { ITableData, ITableRowData, Table } from '../TableBase';
import { TableCollapsibleRowConnected } from '../TableCollapsibleRowConnected';
import { TableHeadingRowConnected } from '../TableHeadingRowConnected';
import * as lorem from 'lorem-ipsum';
import * as React from 'react';
import * as _ from 'underscore';

const generateText = () => lorem({ count: 1, sentenceUpperBound: 3 });

const tableData: ITableData = {
  byId: {
    row1: {
      id: 'row1',
      headingData: {
        attribute1: generateText(),
        attribute2: generateText(),
        attribute3: generateText(),
        attribute4: generateText(),
      },
      collapsibleData: {
        attribute5: generateText(),
      },
    },
    row2: {
      id: 'row2',
      headingData: {
        attribute1: generateText(),
        attribute2: generateText(),
        attribute3: generateText(),
        attribute4: generateText(),
      },
    },
    row3: {
      id: 'row3',
      headingData: {
        attribute1: generateText(),
        attribute2: generateText(),
        attribute3: generateText(),
        attribute4: generateText(),
      },
    },
    row4: {
      id: 'row4',
      headingData: {
        attribute1: generateText(),
        attribute2: generateText(),
        attribute3: generateText(),
        attribute4: generateText(),
      },
      collapsibleData: {
        attribute5: generateText(),
      },
    },
  },
  allIds: ['row1', 'row2', 'row3', 'row4'],
  displayedIds: ['row1', 'row2', 'row3', 'row4'],
};

const headerRowDataParser = (rowData: ITableRowData): JSX.Element => (
  <TableHeadingRowConnected isCollapsible={!!rowData.collapsibleData} id={rowData.id} key={_.uniqueId()}>
    {_.values(rowData.headingData).map((val: string) => <td key={_.uniqueId()}>{val}</td>)}
  </TableHeadingRowConnected>
);

const collapsibleRowDataParser = (rowData: ITableRowData): JSX.Element => (
  <TableCollapsibleRowConnected id={rowData.id} key={_.uniqueId()} nbColumns={Object.keys(rowData.headingData).length + 1}>
    {_.values(rowData.collapsibleData).map((val: string) => <div className='p2'>{val}</div>)}
  </TableCollapsibleRowConnected>
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
            headingRowDataParser={headerRowDataParser}
            collapsibleRowDataParser={collapsibleRowDataParser}
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
            blankSlates={{
              noResultsDefault: {},
            }}
            tableHeader={{ connectCell: true, columns: [{ title: 'hey', tableRefForSort: { tableId: 'test', attributeToSort: 'attribute1' }, id: 'test' }, { title: 'ho' }, { title: 'hey' }, { title: 'ho' }, { title: '' }] }}
            perPage={{ id: 'noice', totalEntries: 300 }}
            pagination={{ id: 'noiiiice', totalPages: 10 }}
            lastUpdated={{ id: 'hello' }}
          />
        </div>
      </div>
    );
  }
}
