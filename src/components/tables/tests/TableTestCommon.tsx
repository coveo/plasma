import * as React from 'react';
import { ITableProps, ITableRowData } from '../Table';
import * as _ from 'underscore';
import {internet} from 'faker';
import { DEFAULT_TABLE_DATA } from '../TableConstants';

export const tablePropsMock: ITableProps = {
  id: 'super-table',
  headingAttributes: [
    {
      attributeName: 'email',
      titleFormatter: _.identity,
      attributeFormatter: _.escape,
    },
    {
      attributeName: 'avatar',
      titleFormatter: _.identity,
    },
    {
      attributeName: 'userName',
      titleFormatter: _.identity,
    },
    {
      attributeName: 'password',
      titleFormatter: _.identity,
    },
  ],
  blankSlateDefault: { title: 'super blankslate' },

  // default props
  initialTableData: DEFAULT_TABLE_DATA,
  tableCompositeState: { sortState: {} } as any,
};


export const dataById = _.range(10).reduce((byId, index) => {
  const email = internet.email();
  const avatar = internet.avatar();
  const userName = internet.userName();
  const password = internet.password();

  return {
    ...byId,
    [userName]: {
      id: userName,
      email,
      avatar,
      userName,
      password,
      url: index % 2 ? internet.url() : undefined,
    },
  };
}, {});

export const tablePropsMockWithData = {
  ...tablePropsMock,
  collapsibleFormatter: (rowData: ITableRowData) => rowData.url
    ? <p>{rowData.url}</p>
    : undefined,
  tableCompositeState: {
    sortState: {},
    data: {
      byId: dataById,
      allIds: Object.keys(dataById),
      displayedIds: Object.keys(dataById),
      totalEntries: Object.keys(dataById).length,
      totalPages: 1,
    },
  } as any,
};
