import * as React from 'react';
import { ITableProps, ITableRowData } from '../Table';
import * as _ from 'underscore';
import { internet } from 'faker';
import { DEFAULT_TABLE_DATA } from '../TableConstants';
import { IActionOptions } from '../../actions/Action';
import { IData } from '../Table';

export const tableOwnPropsMock: ITableProps = {
  id: 'super-table',
  headingAttributes: [
    {
      attributeName: 'email',
      titleFormatter: _.identity,
      attributeFormatter: _.escape,
      filterFormatter: _.identity,
    },
    {
      attributeName: 'avatar',
      titleFormatter: _.identity,
    },
    {
      attributeName: 'userName',
      titleFormatter: _.identity,
      attributeFormatter: _.identity,
    },
    {
      attributeName: 'password',
      titleFormatter: _.identity,
    },
  ],
  blankSlateDefault: { title: 'super blankslate' },
};

export const tablePropsMock: ITableProps = {
  ...tableOwnPropsMock,
  // default props
  initialTableData: DEFAULT_TABLE_DATA,
  tableCompositeState: { sortState: {}, data: DEFAULT_TABLE_DATA } as any,
};

export const predictableData: IData = {
  id: 'funkyUserName',
  email: 'awesome@awesome.com',
  avatar: 'whatever',
  userName: 'funkyUserName',
  password: 'lakjhdslfksh98323qasd',
  url: 'https://www.larrypage.com',
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
}, { [predictableData.userName]: { ...predictableData } });

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
} as any;

export const tablePossibleProps = [
  tablePropsMock,
  { ...tablePropsMock, navigation: true },
  { ...tablePropsMock, navigation: true, actionBar: true },
  { ...tablePropsMock, navigation: true, actionBar: true, filter: true },
  { ...tablePropsMock, navigation: true, actionBar: true, filter: true, lastUpdatedLabel: 'anyWouldDo' },
  { ...tablePropsMock, navigation: true, actionBar: true, filter: true, lastUpdatedLabel: 'anyWouldDo', getActions: (): IActionOptions[] => [] },
  { ...tablePropsMock, navigation: true, actionBar: true, filter: true, lastUpdatedLabel: 'anyWouldDo', getActions: (): IActionOptions[] => [] },
  {
    ...tablePropsMock, navigation: true, actionBar: true, filter: true, lastUpdatedLabel: 'anyWouldDo', getActions: (): IActionOptions[] => [],
    predicates: [{ attributeName: 'email', attributeNameFormatter: _.identity, props: {} }],
  },
  tablePropsMockWithData,
  { ...tablePropsMockWithData, navigation: true },
  { ...tablePropsMockWithData, navigation: true, actionBar: true },
  { ...tablePropsMockWithData, navigation: true, actionBar: true, filter: true },
  { ...tablePropsMockWithData, navigation: true, actionBar: true, filter: true, lastUpdatedLabel: 'anyWouldDo' },
  { ...tablePropsMockWithData, navigation: true, actionBar: true, filter: true, lastUpdatedLabel: 'anyWouldDo', getActions: (): IActionOptions[] => [] },
  { ...tablePropsMockWithData, navigation: true, actionBar: true, filter: true, lastUpdatedLabel: 'anyWouldDo', getActions: (): IActionOptions[] => [] },
  {
    ...tablePropsMockWithData, navigation: true, actionBar: true, filter: true, lastUpdatedLabel: 'anyWouldDo', getActions: (): IActionOptions[] => [],
    predicates: [{ attributeName: 'email', attributeNameFormatter: _.identity, props: {} }],
  },
] as any;
