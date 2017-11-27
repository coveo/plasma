import { ITableData, ITableRowData, Table } from '../Table';
import { TableConnected } from '../TableConnected';
import { TableCollapsibleRowConnected } from '../TableCollapsibleRowConnected';
import { TableHeadingRowConnected } from '../TableHeadingRowConnected';
import * as loremIpsum from 'lorem-ipsum';
import * as React from 'react';
import * as _ from 'underscore';
import { generateTableId } from '../TableReducers';

const generateText = () => loremIpsum({ count: 1, sentenceUpperBound: 3 });

const tableData: ITableData = {
  byId: {
    row1: {
      id: 'row1',
      attribute1: generateText(),
      attribute2: generateText(),
      attribute3: generateText(),
      attribute4: generateText(),
    },
    row2: {
      id: 'row2',
      attribute1: generateText(),
      attribute2: generateText(),
      attribute3: generateText(),
      attribute4: generateText(),
    },
    row3: {
      id: 'row3',
      attribute1: generateText(),
      attribute2: generateText(),
      attribute3: generateText(),
      attribute4: generateText(),
    },
    row4: {
      id: 'row4',
      attribute1: generateText(),
      attribute2: generateText(),
      attribute3: generateText(),
      attribute4: generateText(),
    },
  },
  allIds: ['row1', 'row2', 'row3', 'row4'],
  displayedIds: ['row1', 'row2', 'row3', 'row4'],
};

export class TableExamples extends React.Component<any, any> {

  render() {
    return (
      <div className='mt2'>
        <div className='form-group'>
          <label className='form-control-label'>Table</label>
          <TableConnected
            id={generateTableId()}
            initialTableData={tableData}
            initialPerPage={10}
            headingAttributes={[
              {
                attributeName: 'attribute1',
                titleFormatter: _.identity,
                sort: true,
                attributeFormatter: (attributeValue: any, attributeName: string) => attributeValue,
              },
              {
                attributeName: 'attribute2',
                titleFormatter: _.identity,
                sort: true,
                attributeFormatter: (attributeValue: any, attributeName: string) => attributeValue,
              },
              {
                attributeName: 'attribute3',
                titleFormatter: _.identity,
                sort: true,
                attributeFormatter: (attributeValue: any, attributeName: string) => attributeValue,
              },
            ]}
            actionBar={{
              id: 'nice',
              extraContainerClasses: ['mod-border-top'],
              actions: [
                { name: 'edit', icon: 'edit', enabled: true, primary: true, trigger: () => alert('yaaa') },
                { name: 'view', icon: 'view', enabled: true, primary: false, trigger: () => alert('yaaaaaaaa') },
                { name: 'copy', icon: 'copy', enabled: true, primary: false, trigger: () => alert('yaaaaaaaaaaaa') },
              ],
            }}
            predicates={[
              { props: { id: 'predicaaaaate' }, attributeName: 'attribute4', attributeNameFormatter: (attributeName: string) => attributeName },
              { props: { id: 'predicaaaaate' }, attributeName: 'attribute3', attributeNameFormatter: (attributeName: string) => attributeName },
            ]}
            filter={{ id: 'filtaaaaaa', containerClasses: ['ml1'] }}
            blankSlates={{
              noResults: {},
            }}
            perPage={{ id: 'noice', totalEntries: 300 }}
            pagination={{ id: 'noiiiice', totalPages: 10 }}
            lastUpdated={{ id: 'hello' }}
          />
        </div>
      </div>
    );
  }
}
