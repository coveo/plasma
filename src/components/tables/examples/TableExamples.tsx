import * as $ from 'jquery';
import * as loremIpsum from 'lorem-ipsum';
import * as moment from 'moment';
import * as React from 'react';
import * as _ from 'underscore';
import {IDispatch, IThunkAction} from '../../../utils/ReduxUtils';
import {Breadcrumb} from '../../breadcrumbs/Breadcrumb';
import {SELECTION_BOXES_LONG} from '../../datePicker/examples/DatePickerExamplesCommon';
import {IDropdownOption} from '../../dropdownSearch/DropdownSearch';
import {defaultTitle, link1} from '../../headers/examples/ExamplesUtils';
import {IData, ITableRowData} from '../Table';
import {ITableOwnProps} from '../Table';
import {modifyState, setIsInError} from '../TableActions';
import {TableConnected} from '../TableConnected';
import {DEFAULT_TABLE_DATA, TABLE_PREDICATE_DEFAULT_VALUE} from '../TableConstants';
import {defaultTableStateModifier, dispatchPostTableStateModification, dispatchPreTableStateModification} from '../TableDataModifier';
import {ITableCompositeState, ITableData, ITablesState, ITableState} from '../TableReducers';

const generateText = () => loremIpsum({count: 1, sentenceUpperBound: 3});
const generateDate = (start: Date, end: Date) =>
    moment(start.getTime() + Math.random() * (end.getTime() - start.getTime())).format('YYYY-MM-DD hh:mm:ss');

const simplestTableDataById = _.range(0, 5).reduce((obj, num) => ({
    ...obj,
    ['row' + num]: {
        id: 'row' + num,
        attribute1: generateText(),
        attribute2: generateText(),
        attribute3: generateText(),
        attribute4: generateText(),
    },
}), {} as ITableRowData);

const tableDataById = _.range(0, 100).reduce((obj, num) => ({
    ...obj,
    ['row' + num]: {
        id: 'row' + num,
        attribute1: generateText(),
        attribute2: generateText(),
        attribute3: generateText(),
        attribute4: generateText(),
        attribute5: generateDate(moment().subtract(2, 'week').toDate(), moment().endOf('day').toDate()),
    },
}), {} as ITableRowData);

const perPageNumbers = [5, 10, 20];

const predicateOptionsAttribute4 = [
    {value: TABLE_PREDICATE_DEFAULT_VALUE},
    ..._.keys(tableDataById).reduce((arr: IDropdownOption[], id: string) => [...arr, {value: tableDataById[id].attribute4}], []),
].slice(0, 4);
const predicateOptionsAttribute3 = [
    {value: TABLE_PREDICATE_DEFAULT_VALUE},
    ..._.keys(tableDataById).reduce((arr: IDropdownOption[], id: string) => [...arr, {value: tableDataById[id].attribute3}], []),
].slice(0, 4);

const simplestTableData: ITableData = {
    byId: simplestTableDataById,
    allIds: _.keys(simplestTableDataById),
    displayedIds: _.keys(simplestTableDataById),
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

const buildNewTableStateManually = (data: any, currentState: ITableState, tableCompositeState: ITableCompositeState, tableOwnProps: ITableOwnProps): ITableState => {
    const totalEntries = data.count;
    const totalPages = Math.ceil(totalEntries / perPageNumbers[0]);
    const newTableData = data.reduce((finalTableData: ITableData, comment: any, arr: any[]) => {
        return {
            byId: {
                ...(finalTableData.byId || {}),
                [comment.id]: {
                    id: comment.id,
                    attribute1: comment.email,
                    attribute2: comment.name,
                    attribute3: comment.body,
                },
            },
            allIds: [...finalTableData.allIds, comment.id],
            displayedIds: [...finalTableData.displayedIds, comment.id],
            totalEntries: totalEntries,
            totalPages: totalPages,
        };
    }, DEFAULT_TABLE_DATA);
    return defaultTableStateModifier(tableOwnProps, _.extend({}, tableCompositeState, {data: newTableData}))({...currentState, data: newTableData});
};

const manualModeThunk = (tableOwnProps: ITableOwnProps, shouldResetPage: boolean, tableCompositeState: ITableCompositeState): IThunkAction => {
    return (dispatch: IDispatch, getState: () => {[globalStateProp: string]: any; tables: ITablesState;}) => {
        const currentTableState = getState().tables[tableOwnProps.id];
        dispatchPreTableStateModification(tableOwnProps.id, dispatch);
        $.get('https://jsonplaceholder.typicode.com/comments')
            .done((data) => {
                dispatch(
                    modifyState(
                        tableOwnProps.id,
                        (tableState: ITableState) => buildNewTableStateManually(data, currentTableState, tableCompositeState, tableOwnProps),
                        shouldResetPage,
                    ),
                );
            })
            .fail((error) => {
                dispatch(setIsInError(tableOwnProps.id, true));
                dispatch(modifyState(
                    tableOwnProps.id,
                    (tableState: ITableState) => ({...tableState, data: DEFAULT_TABLE_DATA}),
                    shouldResetPage,
                ));
            })
            .always(() => {
                dispatchPostTableStateModification(tableOwnProps.id, dispatch);
            });
    };
};

export class TableExamples extends React.Component<any, any> {
    render() {
        return (
            <div className='mt2'>
                <div className='form-group'>
                    <label className='form-control-label'>
                        Table in manual mode.
          </label>
                    <TableConnected
                        id={_.uniqueId('react-vapor-table')}
                        manual={manualModeThunk}
                        headingAttributes={[
                            {
                                attributeName: 'attribute1',
                                titleFormatter: _.identity,
                                sort: true,
                                attributeFormatter: _.identity,
                            },
                            {
                                attributeName: 'attribute2',
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
                        filter={{}}
                        blankSlateDefault={{title: 'No results here!'}}
                        navigation={{perPageNumbers}}
                    />
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Simplest Table
          </label>
                    <TableConnected
                        id={_.uniqueId('react-vapor-table')}
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
                        blankSlateDefault={{title: 'No results!'}}
                    />
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Table with Content type Breadcrumb
          </label>
                    <TableConnected
                        id={_.uniqueId('react-vapor-table')}
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
                        prefixContent={{
                            content: Breadcrumb,
                            componentProps: {
                                title: defaultTitle,
                                links: [link1],
                                tag: 'div',
                            },
                            classes: ['flex-auto coveo-table-actions'],
                        }}
                        blankSlateDefault={{title: 'Oh my oh my, nothing to see here :(!'}}
                        actionBar={{extraContainerClasses: ['mod-border-top']}}
                    />
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Table with filter
          </label>
                    <TableConnected
                        id={_.uniqueId('react-vapor-table')}
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
                        blankSlateDefault={{title: 'Oh my oh my, nothing to see here :(!'}}
                        actionBar={{extraContainerClasses: ['mod-border-top']}}
                    />
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Table with datePicker
          </label>
                    <TableConnected
                        id={_.uniqueId('react-vapor-table')}
                        initialTableData={tableData}
                        headingAttributes={[
                            {
                                attributeName: 'attribute5',
                                titleFormatter: _.identity,
                            },
                            {
                                attributeName: 'attribute1',
                                titleFormatter: _.identity,
                            },
                            {
                                attributeName: 'attribute4',
                                titleFormatter: _.identity,
                            },
                        ]}
                        filter
                        getActions={(rowData: IData) => ([
                            {
                                name: 'Link to Coveo',
                                link: 'http://coveo.com',
                                target: '_blank',
                                icon: 'exit',
                                primary: true,
                                enabled: true,
                            },
                        ])}
                        datePicker={{
                            datesSelectionBoxes: SELECTION_BOXES_LONG,
                            attributeName: 'attribute5',
                        }}
                        blankSlateDefault={{title: 'Oh my oh my, nothing to see here :(!'}}
                        actionBar={{extraContainerClasses: ['mod-border-top']}}
                        navigation={{perPageNumbers}}
                    />
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Complex Table in default mode</label>
                    <TableConnected
                        id={_.uniqueId('react-vapor-table')}
                        initialTableData={tableData}
                        collapsibleFormatter={(rowData: IData) => <div className='p2'>This is the collapsible row! And here's the value of attribute 3: {rowData.attribute3}</div>}
                        getActions={(rowData: IData) => ([
                            {
                                name: 'Link to Coveo',
                                link: 'http://coveo.com',
                                target: '_blank',
                                icon: 'exit',
                                primary: true,
                                enabled: true,
                            }, {
                                name: 'action1',
                                trigger: () => alert('attribute 4 value of the selected row is: ' + rowData.attribute4),
                                enabled: true,
                                callOnDoubleClick: true,
                            }, {
                                separator: true,
                                enabled: true,
                            },
                            {
                                name: 'action3',
                                trigger: () => alert('another action'),
                                enabled: true,
                            },
                        ])}
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
                            {props: {defaultOptions: predicateOptionsAttribute4}, attributeName: 'attribute4'},
                            {props: {defaultOptions: predicateOptionsAttribute3}, attributeName: 'attribute3'},
                        ]}
                        filter={{containerClasses: ['ml1']}}
                        blankSlateDefault={{title: 'Oh no! No results!'}}
                        blankSlateNoResultsOnAction={{title: 'Oh no, too much filtering!'}}
                        navigation={{perPageNumbers}}
                    />
                </div>
            </div>
        );
    }
}
