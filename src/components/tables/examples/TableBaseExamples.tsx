import { Table } from '../TableBase';
import { TableHeadingRow } from '../TableHeadingRow';
import { ActionBarConnected } from '../../actions/ActionBarConnected';
import * as React from 'react';

export class TableBaseExamples extends React.Component<any, any> {

  render() {
    return (
      <div className='mt2'>
        <div className='form-group'>
          <label className='form-control-label'>Table</label>
          <Table
            id={'hello'}
            actionBar={{
              id: 'nice',
              extraContainerClasses: ['mod-border-top'],
              actions: [{ name: 'edit', icon: 'edit', enabled: true }]
            }}
            predicates={[
              { id: 'predicaaaaate' },
              { id: 'predicaaaaateeee', containerClasses: ['ml1'] },
            ]}
            filter={{ id: 'filtaaaaaa', containerClasses: ['ml1'] }}
            tableHeader={{ columns: [{ title: 'hey' }, { title: 'ho' }, { title: 'hey' }, { title: 'ho' }] }}
            perPage={{ id: 'noice', totalEntries: 300 }}
            pagination={{ id: 'noiiiice', totalPages: 10 }}
          />
        </div>
      </div>
    );
  }
}
