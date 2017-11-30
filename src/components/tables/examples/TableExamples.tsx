import { TableConnected } from '../TableConnected';
import * as loremIpsum from 'lorem-ipsum';
import * as React from 'react';
import * as _ from 'underscore';
import { generateTableId, ITableData, ITableState } from '../TableReducers';
import { IDropdownOption } from '../../dropdownSearch/DropdownSearch';
import { ITableRowData, ITableProps } from '../Table';
import { TABLE_PREDICATE_DEFAULT_VALUE } from '../TableConstants';

const generateText = () => loremIpsum({ count: 1, sentenceUpperBound: 3 });

const simplestTableDataById = _.range(0, 5).reduce((obj, number) => ({
  ...obj,
  ['row' + number]: {
    id: 'row' + number,
    attribute1: generateText(),
    attribute2: generateText(),
    attribute3: generateText(),
    attribute4: generateText(),
  }
}), {} as ITableRowData);

const tableDataById = _.range(0, 100).reduce((obj, number) => ({
  ...obj,
  ['row' + number]: {
    id: 'row' + number,
    attribute1: generateText(),
    attribute2: generateText(),
    attribute3: generateText(),
    attribute4: generateText(),
  }
}), {} as ITableRowData);

const perPageNumbers = [5, 10, 20];

const predicateOptionsAttribute4 = [
  { value: TABLE_PREDICATE_DEFAULT_VALUE },
  ..._.keys(tableDataById).reduce((arr: IDropdownOption[], id: string) => [...arr, { value: tableDataById[id].attribute4 }], [])
].slice(0, 4);
const predicateOptionsAttribute3 = [
  { value: TABLE_PREDICATE_DEFAULT_VALUE },
  ..._.keys(tableDataById).reduce((arr: IDropdownOption[], id: string) => [...arr, { value: tableDataById[id].attribute3 }], []),
].slice(0, 4);

const simplestTableData: ITableData = {
  byId: simplestTableDataById,
  allIds: _.keys(simplestTableDataById),
  displayedIds: _.keys(simplestTableDataById).slice(0, perPageNumbers[0]),
  totalEntries: _.keys(simplestTableDataById).length,
  totalPages: Math.ceil(_.keys(simplestTableDataById).length / perPageNumbers[0]),
};

const tableData: ITableData = {
  byId: tableDataById,
  allIds: _.keys(tableDataById),
  displayedIds: _.keys(tableDataById).slice(0, perPageNumbers[0]),
  totalEntries: _.keys(tableDataById).length,
  totalPages: Math.ceil(_.keys(tableDataById).length / perPageNumbers[0]),
};

const rawDataToTableData = (data: any): ITableData => JSON.parse(data).entries.reduce((tableData: ITableData, entry: any, arr: any[]) => {
  return {
    byId: {
      ...tableData.byId,
      [entry.API]: {
        id: entry.API,
        attribute1: entry.API,
        attribute3: entry.Category,
        attribute4: entry.Description,
      }
    },
    allIds: [...tableData.allIds, entry.API],
    displayedIds: [...tableData.displayedIds, entry.API].slice(0, perPageNumbers[0]),
    totalEntries: JSON.parse(data).count,
    totalPages:  Math.ceil(JSON.parse(data).count / perPageNumbers[0]),
  };
}, { byId: {}, allIds: [], displayedIds: [], totalEntries: 0, totalPages: 0 });

export class TableExamples extends React.Component<any, any> {
  render() {
    return (
      <div className='mt2'>
        <div className='form-group'>
          <label className='form-control-label'>Simplest Table
          </label>
          <TableConnected
            id={generateTableId()}
            initialTableData={simplestTableData}
            headingAttributes={[
              {
                attributeName: 'attribute1',
                titleFormatter: _.identity,
              },
              {
                attributeName: 'attribute4',
                titleFormatter: _.identity,
              },
              {
                attributeName: 'attribute3',
                titleFormatter: _.identity,
              },
            ]}
            blankSlates={{
              noResults: {title: 'Oh my oh my, nothing to see here :(!'}
            }}
            actionBar={{ extraContainerClasses: ['mod-border-top']}}
            noNavigation
          />
        </div>
        <div className='form-group'>
          <label className='form-control-label'>Table with filter
          </label>
          <TableConnected
            id={generateTableId()}
            initialTableData={simplestTableData}
            headingAttributes={[
              {
                attributeName: 'attribute1',
                titleFormatter: _.identity,
              },
              {
                attributeName: 'attribute4',
                titleFormatter: _.identity,
              },
              {
                attributeName: 'attribute3',
                titleFormatter: _.identity,
              },
              {
                attributeName: 'attribute2',
                titleFormatter: _.identity,
              },
            ]}
            filter={{}}
            blankSlates={{
              noResults: {title: 'Oh my oh my, nothing to see here :(!'}
            }}
            actionBar={{ extraContainerClasses: ['mod-border-top']}}
            noNavigation
          />
        </div>
        <div className='form-group'>
          <label className='form-control-label'>Table in server mode (we use fake data, have a look at your network tab to see what is happening under the hood)</label>
          <TableConnected
            id={generateTableId()}
            serverMode={{
              url: (tableState: ITableState) => { return `https://raw.githubusercontent.com/toddmotto/public-apis/master/json/entries.json?page=${tableState.page}&perPage=${tableState.perPage}&predicate1=${tableState.predicates.attribute4}&predicate2=${tableState.predicates.attribute3}&filter=${tableState.filter}&sortOrder=${tableState.sortState.order}&sortAttribute=${tableState.sortState.attribute}`; },
              rawDataToTableData,
            }}
            initialTableData={tableData}
            headingAttributes={[
              {
                attributeName: 'attribute1',
                titleFormatter: _.identity,
                sort: true,
                attributeFormatter: _.identity,
              },
              {
                attributeName: 'attribute4',
                titleFormatter: _.identity,
                sort: true,
                attributeFormatter: _.identity,
              },
              {
                attributeName: 'attribute3',
                titleFormatter: _.identity,
                sort: true,
                attributeFormatter: _.identity,
              },
            ]}
            actionBar={{
              extraContainerClasses: ['mod-border-top'],
            }}
            predicates={[
              { props: { maxWidth: 260, defaultSelectedOption: { value: 'ALL' }, defaultOptions: predicateOptionsAttribute4 }, attributeName: 'attribute4', attributeNameFormatter: (attributeName: string) => attributeName },
              { props: { maxWidth: 260, defaultSelectedOption: { value: 'ALL' }, defaultOptions: predicateOptionsAttribute3 }, attributeName: 'attribute3', attributeNameFormatter: (attributeName: string) => attributeName },
            ]}
            filter={{ containerClasses: ['ml1'] }}
            blankSlates={{
              noResults: { title: 'Oh no! No results!' },
              noResultsOnError: { title: 'i am on error!' },
            }}
            navigation={{ perPageNumbers }}
          />
        </div>
        <div className='form-group'>
          <label className='form-control-label'>Table</label>
          <TableConnected
            id={generateTableId()}
            initialTableData={tableData}
            collapsibleFormatter={(rowData: ITableRowData, props?: ITableProps) => <div className='p2'>This is the collapsible row! And here's the value of attribute 3: {rowData.attribute3}</div>}
            getActions={(rowData: ITableRowData, tableProps: ITableProps) => ([
              {
                name: 'Link to Coveo',
                link: 'http://coveo.com',
                target: '_blank',
                icon: 'exit',
                primary: true,
                enabled: true
              }, {
                name: 'action1',
                trigger: () => alert('attribute 4 value of the selected row is: ' + rowData.attribute4),
                enabled: true,
                callOnDoubleClick: true,
              }, {
                separator: true,
                enabled: true
              }, {
                name: 'action2',
                trigger: () => alert('we are at page ' + (tableProps.tableState.page + 1)),
                enabled: true
              },
              {
                name: 'action3',
                trigger: () => alert('value in your filter box is: ' + (tableProps.tableState.filter || 'empty (add something and retry)')),
                enabled: true
              }])}
            headingAttributes={[
              {
                attributeName: 'attribute1',
                titleFormatter: _.identity,
                sort: true,
                attributeFormatter: _.identity,
              },
              {
                attributeName: 'attribute4',
                titleFormatter: _.identity,
                sort: true,
                attributeFormatter: _.identity,
              },
              {
                attributeName: 'attribute3',
                titleFormatter: _.identity,
                sort: true,
                attributeFormatter: _.identity,
              },
            ]}
            actionBar={{
              extraContainerClasses: ['mod-border-top'],
            }}
            predicates={[
              { props: { maxWidth: 260, defaultSelectedOption: { value: 'ALL' }, defaultOptions: predicateOptionsAttribute4 }, attributeName: 'attribute4', attributeNameFormatter: (attributeName: string) => attributeName },
              { props: { maxWidth: 260, defaultSelectedOption: { value: 'ALL' }, defaultOptions: predicateOptionsAttribute3 }, attributeName: 'attribute3', attributeNameFormatter: (attributeName: string) => attributeName },
            ]}
            filter={{ containerClasses: ['ml1'] }}
            blankSlates={{
              noResults: { title: 'Oh no! No results!' },
            }}
            navigation={{ perPageNumbers }}
          />
        </div>

      </div>
    );
  }
}
