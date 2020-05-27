import {date, internet} from 'faker/locale/en';
import moment from 'moment';
import * as React from 'react';
import * as _ from 'underscore';

import {DATES_SEPARATOR} from '../../../utils';
import {IActionOptions} from '../../actions/Action';
import {DatePickerColors, IDatesSelectionBox} from '../../datePicker';
import {IData, ITableProps} from '../Table';
import {DEFAULT_TABLE_DATA} from '../TableConstants';

export const SELECTION_BOXES: IDatesSelectionBox[] = [
    {
        title: 'Date range',
        quickOptions: [
            {
                label: 'Last 10 seconds',
                value: () =>
                    moment()
                        .subtract(10, 'seconds')
                        .toDate()
                        .toString() +
                    DATES_SEPARATOR +
                    new Date().toString(),
            },
            {
                label: 'Last minute',
                value: () =>
                    moment()
                        .subtract(1, 'minute')
                        .toDate()
                        .toString() +
                    DATES_SEPARATOR +
                    new Date().toString(),
            },
            {
                label: 'Last 5 minutes',
                value: () =>
                    moment()
                        .subtract(5, 'minutes')
                        .toDate()
                        .toString() +
                    DATES_SEPARATOR +
                    new Date().toString(),
            },
            {
                label: 'Last 30 minutes',
                value: () =>
                    moment()
                        .subtract(30, 'minutes')
                        .toDate()
                        .toString() +
                    DATES_SEPARATOR +
                    new Date().toString(),
            },
            {
                label: 'Last hour',
                value: () =>
                    moment()
                        .subtract(1, 'hour')
                        .toDate()
                        .toString() +
                    DATES_SEPARATOR +
                    new Date().toString(),
            },
            {
                label: 'Last day',
                value: () =>
                    moment()
                        .subtract(1, 'day')
                        .toDate()
                        .toString() +
                    DATES_SEPARATOR +
                    new Date().toString(),
            },
        ],
        isRange: true,
        withTime: true,
        hasSetToNowButton: true,
        color: DatePickerColors.blue,
    },
];

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
        {
            attributeName: 'lastLogin',
            titleFormatter: _.identity,
        },
    ],
    blankSlateDefault: {title: 'super blankslate'},
};

export const tablePropsMock: ITableProps = {
    ...tableOwnPropsMock,
    // default props
    initialTableData: DEFAULT_TABLE_DATA,
    tableCompositeState: {sortState: {}, data: DEFAULT_TABLE_DATA} as any,
};

export const predictableData: IData = {
    id: 'funkyUserName',
    email: 'awesome@awesome.com',
    avatar: 'whatever',
    userName: 'funkyUserName',
    password: 'lakjhdslfksh98323qasd',
    lastLogin: moment()
        .add(2, 'day')
        .format('YYYY-MM-DD hh:mm:ss'),
    url: 'https://www.larrypage.com',
};

export const dataById = _.range(10).reduce(
    (byId, index) => {
        const email = internet.email();
        const avatar = internet.avatar();
        const userName = internet.userName();
        const password = internet.password();
        const lastLogin = moment(date.recent(30)).format('YYYY-MM-DD hh:mm:ss');

        return {
            ...byId,
            [userName]: {
                id: userName,
                email,
                avatar,
                userName,
                password,
                lastLogin,
                url: index % 2 ? internet.url() : undefined,
            },
        };
    },
    {[predictableData.userName]: {...predictableData}}
);

export const tablePropsMockWithData = {
    ...tablePropsMock,
    collapsibleFormatter: (rowData: IData) => (rowData.url ? <p>{rowData.url}</p> : undefined),
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
    getActions: jasmine.createSpy('getActions'),
    onRowClick: jasmine.createSpy('onClickRow'),
} as any;

export const tablePossibleProps = [
    tablePropsMock,
    {...tablePropsMock, navigation: true},
    {...tablePropsMock, navigation: true, actionBar: true},
    {...tablePropsMock, navigation: true, actionBar: true, filter: true},
    {...tablePropsMock, navigation: true, actionBar: true, filter: true, lastUpdatedLabel: 'anyWouldDo'},
    {
        ...tablePropsMock,
        navigation: true,
        actionBar: true,
        filter: true,
        lastUpdatedLabel: 'anyWouldDo',
        getActions: (): IActionOptions[] => [],
    },
    {
        ...tablePropsMock,
        navigation: true,
        actionBar: true,
        filter: true,
        lastUpdatedLabel: 'anyWouldDo',
        getActions: (): IActionOptions[] => [],
    },
    {
        ...tablePropsMock,
        navigation: true,
        actionBar: true,
        filter: true,
        lastUpdatedLabel: 'anyWouldDo',
        getActions: (): IActionOptions[] => [],
        predicates: [{attributeName: 'email', attributeNameFormatter: _.identity, props: {}}],
    },
    {
        ...tablePropsMock,
        navigation: true,
        actionBar: true,
        filter: true,
        lastUpdatedLabel: 'anyWouldDo',
        getActions: (): IActionOptions[] => [],
        datePicker: {datesSelectionBoxes: SELECTION_BOXES, attributeName: 'date'},
    },
    tablePropsMockWithData,
    {...tablePropsMockWithData, navigation: true},
    {...tablePropsMockWithData, navigation: true, actionBar: true},
    {...tablePropsMockWithData, navigation: true, actionBar: true, filter: true},
    {...tablePropsMockWithData, navigation: true, actionBar: true, filter: true, lastUpdatedLabel: 'anyWouldDo'},
    {
        ...tablePropsMockWithData,
        navigation: true,
        actionBar: true,
        filter: true,
        lastUpdatedLabel: 'anyWouldDo',
        getActions: (): IActionOptions[] => [],
    },
    {
        ...tablePropsMockWithData,
        navigation: true,
        actionBar: true,
        filter: true,
        lastUpdatedLabel: 'anyWouldDo',
        getActions: (): IActionOptions[] => [],
    },
    {
        ...tablePropsMockWithData,
        navigation: true,
        actionBar: true,
        filter: true,
        lastUpdatedLabel: 'anyWouldDo',
        getActions: (): IActionOptions[] => [],
        predicates: [{attributeName: 'email', attributeNameFormatter: _.identity, props: {}}],
    },
    {
        ...tablePropsMockWithData,
        navigation: true,
        actionBar: true,
        filter: true,
        lastUpdatedLabel: 'anyWouldDo',
        getActions: (): IActionOptions[] => [],
        datePicker: {datesSelectionBoxes: SELECTION_BOXES, attributeName: 'date'},
    },
] as any;
