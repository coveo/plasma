import * as $ from 'jquery';
import * as loremIpsum from 'lorem-ipsum';
import * as moment from 'moment';
import * as React from 'react';
import * as _ from 'underscore';

import {ReactVaporStore} from '../../../../docs/ReactVaporStore';
import {IDispatch, IThunkAction} from '../../../utils/ReduxUtils';
import {triggerAlertFunction} from '../../../utils/TestUtils';
import {Breadcrumb} from '../../breadcrumbs/Breadcrumb';
import {Button} from '../../button/Button';
import {Checkbox} from '../../checkbox/Checkbox';
import {CheckboxConnected} from '../../checkbox/CheckboxConnected';
import {GroupableCheckboxConnected} from '../../checkbox/GroupableCheckboxConnected';
import {SELECTION_BOXES_LONG} from '../../datePicker/examples/DatePickerExamplesCommon';
import {IDropdownOption} from '../../dropdownSearch/DropdownSearch';
import {defaultTitle, link1} from '../../headers/examples/ExamplesUtils';
import {SingleSelectConnected} from '../../select/SingleSelectConnected';
import {IData, ITableOwnProps, ITableRowData} from '../Table';
import {addTableDataEntry, deleteTableDataEntry, modifyState, setIsInError, updateTableDataEntry} from '../TableActions';
import {TableConnected} from '../TableConnected';
import {DEFAULT_TABLE_DATA, TABLE_PREDICATE_DEFAULT_VALUE} from '../TableConstants';
import {
    defaultTableStateModifier,
    dispatchPostTableStateModification,
    dispatchPreTableStateModification,
} from '../TableDataModifier';
import {ITableCompositeState, ITableData, ITablesState, ITableState} from '../TableReducers';

const generateText = () => loremIpsum({count: 1, sentenceUpperBound: 3});
const generateBoolean = () => Math.random() <= 0.5;
const generateDate = (start: Date, end: Date) =>
    moment(start.getTime() + Math.random() * (end.getTime() - start.getTime())).format('YYYY-MM-DD hh:mm:ss');
let globalBoolean = false;

const simplestTableDataById = _.range(0, 5).reduce((obj, num) => ({
    ...obj,
    ['row' + num]: {
        id: 'row' + num,
        attribute1: generateText(),
        attribute2: generateText(),
        attribute3: generateText(),
        attribute4: generateText(),
        attribute5: generateBoolean(),
    },
}), {} as ITableRowData);

const tableDataWithBooleanById = (booleanValue: boolean) => _.range(0, 5).reduce((obj, num) => ({
    ...obj,
    ['row' + num]: {
        id: 'row' + num,
        attribute1: generateText(),
        attribute2: generateText(),
        attribute3: booleanValue,
    },
}), {} as ITableRowData);

const addRandomData = () => ({
    attribute1: generateText(),
    attribute2: generateText(),
    attribute3: generateText(),
    attribute4: generateText(),
    attribute5: generateDate(moment().subtract(2, 'week').toDate(), moment().endOf('day').toDate()),
});

const tableIdWithDataEntryActions = 'table-id-with-data-entry-actions';
const tableDataById = _.range(0, 100).reduce((obj, num) => ({
    ...obj,
    ['row' + num]: {
        id: 'row' + num,
        ...addRandomData(),
    },
}), {} as ITableRowData);

const emptyData: ITableRowData = {};

const getTableDataById = (tableData: ITableRowData): ITableData => {
    const allIds: string[] = _.keys(tableData);
    return {
        byId: tableData,
        allIds,
        displayedIds: allIds.slice(0, perPageNumbers[0]),
        totalEntries: allIds.length,
        totalPages: Math.ceil(allIds.length / perPageNumbers[0]),
    };
};

const perPageNumbers = [5, 10, 20];

const predicateOptionsAttribute4 = [
    {value: TABLE_PREDICATE_DEFAULT_VALUE},
    ..._.keys(tableDataById).reduce((arr: IDropdownOption[], id: string) => [...arr, {value: tableDataById[id].attribute4}], []),
].slice(0, 4);
const predicateOptionsAttribute3 = [
    {value: TABLE_PREDICATE_DEFAULT_VALUE},
    ..._.keys(tableDataById).reduce((arr: IDropdownOption[], id: string) => [...arr, {value: tableDataById[id].attribute3}], []),
].slice(0, 4);

const tableDataWithBoolean = (): ITableData => {
    globalBoolean = !globalBoolean;
    return {
        byId: tableDataWithBooleanById(globalBoolean),
        allIds: _.keys(tableDataWithBooleanById(globalBoolean)),
        displayedIds: _.keys(tableDataWithBooleanById(globalBoolean)).slice(0, perPageNumbers[0]),
        totalEntries: _.keys(tableDataWithBooleanById(globalBoolean)).length,
        totalPages: Math.ceil(_.keys(tableDataWithBooleanById(globalBoolean)).length / perPageNumbers[0]),
    };
};

const buildNewTableStateManually = (
    data: any,
    currentState: ITableState,
    tableCompositeState: ITableCompositeState,
    tableOwnProps: ITableOwnProps,
): ITableState => {
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
    return defaultTableStateModifier(tableOwnProps, _.extend({}, tableCompositeState, {data: newTableData}))(
        {...currentState, data: newTableData});
};

const updateAllBooleanInCurrentState = (id: string) => {
    ReactVaporStore.dispatch(
        modifyState(
            id,
            (tableState: ITableState) => _.extend({}, tableState, {data: tableDataWithBoolean()}),
            false,
        ),
    );
};

const manualModeThunk = (
    tableOwnProps: ITableOwnProps,
    shouldResetPage: boolean,
    tableCompositeState: ITableCompositeState,
): IThunkAction => {
    return (dispatch: IDispatch, getState: () => {[globalStateProp: string]: any; tables: ITablesState;}) => {
        const currentTableState = getState().tables[tableOwnProps.id];
        dispatchPreTableStateModification(tableOwnProps.id, dispatch);
        $.get('https://jsonplaceholder.typicode.com/comments')
            .done((data) => {
                dispatch(
                    modifyState(
                        tableOwnProps.id,
                        (tableState: ITableState) => buildNewTableStateManually(data, currentTableState, tableCompositeState,
                            tableOwnProps),
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
                    <label className='form-control-label'>Simplest Table</label>
                    <TableConnected
                        id={_.uniqueId('react-vapor-table')}
                        initialTableData={getTableDataById(simplestTableDataById)}
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
                    <label className='form-control-label'>Simplest Table with onClick event for the second cell</label>
                    <TableConnected
                        id={_.uniqueId('react-vapor-table')}
                        initialTableData={getTableDataById(simplestTableDataById)}
                        headingAttributes={[
                            {
                                attributeName: 'attribute1',
                                titleFormatter: _.identity,
                            },
                            {
                                attributeName: 'attribute4',
                                titleFormatter: () => 'click on me',
                                onClickCell: () => triggerAlertFunction(),
                                additionalCellClasses: [{
                                    className: 'cursor-pointer',
                                    condition: () => true,
                                }],
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
                    <label className='form-control-label'>Simplest Table with onClick event only on the second row for the second cell</label>
                    <TableConnected
                        id={_.uniqueId('react-vapor-table')}
                        initialTableData={getTableDataById(simplestTableDataById)}
                        headingAttributes={[
                            {
                                attributeName: 'attribute1',
                                titleFormatter: _.identity,
                            },
                            {
                                attributeName: 'attribute4',
                                titleFormatter: () => 'click on me',
                                onClickCell: (event, data) => {
                                    if (data.rowData.id === 'row1') {
                                        triggerAlertFunction();
                                    }
                                },
                                additionalCellClasses: [{
                                    className: 'cursor-pointer',
                                    condition: () => true,
                                }],
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
                    <label className='form-control-label'>Simplest Table As Card</label>
                    <TableConnected
                        id={_.uniqueId('react-vapor-table')}
                        initialTableData={getTableDataById(simplestTableDataById)}
                        asCard
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
                    <label className='form-control-label'>Simplest Table As Card Disabled</label>
                    <TableConnected
                        id={_.uniqueId('react-vapor-table')}
                        initialTableData={getTableDataById(simplestTableDataById)}
                        disabled
                        asCard
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
                    <label className='form-control-label'>Simplest Table Card Empty</label>
                    <TableConnected
                        id={_.uniqueId('react-vapor-table')}
                        initialTableData={getTableDataById(emptyData)}
                        disabled
                        asCard
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
                    <label className='form-control-label'>Table without hover on row</label>
                    <TableConnected
                        id='react-vapor-table-without-hover'
                        initialTableData={getTableDataById(simplestTableDataById)}
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
                        withoutHoverOnRow
                    />
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Simplest Table with checkbox
                    </label>
                    <TableConnected
                        id={_.uniqueId('react-vapor-table')}
                        initialTableData={getTableDataById(simplestTableDataById)}
                        headingAttributes={[
                            {
                                attributeName: 'attribute1',
                                titleFormatter: (attributeName: string) => {
                                    return <span>
                                        <Checkbox checked={true} classes={'mr1'} />
                                        {attributeName}
                                    </span>;
                                },
                                attributeFormatter: (attributeName: string) => {
                                    return <span>
                                        <Checkbox checked={true} classes={'mr1'} />
                                        {attributeName}
                                    </span>;
                                },
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
                    <label className='form-control-label'>Simplest Table with a custom header</label>
                    <TableConnected
                        id={_.uniqueId('react-vapor-table')}
                        initialTableData={getTableDataById(simplestTableDataById)}
                        headingAttributes={[
                            {
                                attributeName: 'attribute1',
                                titleFormatter: () => {
                                    return <div>
                                        <GroupableCheckboxConnected
                                            id={'SFCheckboxes'}
                                            parentId={'parent-id'}
                                            classes={['mt1 mr1']}
                                            defaultChecked={false}
                                        />
                                        <span>Selected</span>
                                    </div>;
                                },
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
                    <label className='form-control-label'>Table with Content type Breadcrumb</label>
                    <TableConnected
                        id={_.uniqueId('react-vapor-table')}
                        initialTableData={getTableDataById(simplestTableDataById)}
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
                    <label className='form-control-label'>Table with filter</label>
                    <TableConnected
                        id={_.uniqueId('react-vapor-table')}
                        initialTableData={getTableDataById(simplestTableDataById)}
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
                    <label className='form-control-label'>Table with datePicker</label>
                    <TableConnected
                        id={_.uniqueId('react-vapor-table')}
                        initialTableData={getTableDataById(tableDataById)}
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
                        id={tableIdWithDataEntryActions}
                        initialTableData={getTableDataById(tableDataById)}
                        collapsibleFormatter={(rowData: IData) => _.keys(tableDataById).indexOf(rowData.id) % 2 === 0 &&
                            <div className='p2'>
                                This is the collapsible row! And here's the value of attribute 3: {rowData.attribute3}
                            </div>
                        }
                        getActions={(rowData: IData) => ([
                            {
                                name: 'Link to Coveo',
                                link: 'http://coveo.com',
                                target: '_blank',
                                icon: 'exit',
                                primary: true,
                                enabled: true,
                            },
                            {
                                name: 'action1',
                                trigger: () => alert('attribute 4 value of the selected row is: ' + rowData.attribute4),
                                enabled: true,
                                callOnDoubleClick: true,
                            },
                            {
                                separator: true,
                                enabled: true,
                            },
                            {
                                name: 'action3',
                                trigger: () => alert('another action'),
                                enabled: true,
                            },
                            {
                                name: 'delete row',
                                trigger: () => ReactVaporStore.dispatch(deleteTableDataEntry(tableIdWithDataEntryActions, rowData.id)),
                                enabled: true,
                            },
                            {
                                name: 'add new row',
                                trigger: () => ReactVaporStore.dispatch(addTableDataEntry(tableIdWithDataEntryActions, {id: _.uniqueId('row'), ...addRandomData()})),
                                enabled: true,
                            },
                            {
                                name: 'update attribute 1',
                                trigger: () => ReactVaporStore.dispatch(updateTableDataEntry(tableIdWithDataEntryActions, {id: rowData.id, attribute1: generateText()})),
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
                                attributeFormatter: (a, b, c) => (
                                    <SingleSelectConnected
                                        key={c.id}
                                        id={c.id}
                                        items={[{value: 'a'}, {value: 'b'}]}
                                    />
                                ),
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
                <div className='form-group'>
                    <label className='form-control-label'>Table with multiple selection on rows
                    </label>
                    <TableConnected
                        id={'react-vapor-table-multiple-selection'}
                        initialTableData={getTableDataById(tableDataById)}
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
                            {
                                name: 'Delete',
                                icon: 'delete',
                                primary: true,
                                enabled: true,
                                grouped: true,
                            },
                        ])}
                        blankSlateDefault={{title: 'Oh my oh my, nothing to see here :(!'}}
                        actionBar={{extraContainerClasses: ['mod-border-top']}}
                        navigation={{perPageNumbers}}
                        rowsMultiSelect={true}
                    />
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Table with actions to modify icon when the row data has changed
                    </label>
                    <br />
                    <Button name={'Toggle attribute3 to false'} enabled={true} classes={['m1']}
                        onClick={() => updateAllBooleanInCurrentState('react-vapor-table-update-actions')} />
                    <TableConnected
                        id={'react-vapor-table-update-actions'}
                        initialTableData={tableDataWithBoolean()}
                        headingAttributes={[
                            {
                                attributeName: 'attribute1',
                                titleFormatter: _.identity,
                            },
                            {
                                attributeName: 'attribute2',
                                titleFormatter: _.identity,
                            },
                            {
                                attributeName: 'attribute3',
                                titleFormatter: _.identity,
                                attributeFormatter: (attributeValue: boolean) => attributeValue ? 'is true' : 'is false',
                            },
                        ]}
                        filter
                        getActions={(rowData: IData) => ([
                            {
                                name: 'Toggle attribute3',
                                trigger: () => updateAllBooleanInCurrentState('react-vapor-table-update-actions'),
                                icon: rowData.attribute3 ? 'check' : 'clear',
                                primary: true,
                                enabled: true,
                            },
                            {
                                name: 'Delete',
                                icon: 'delete',
                                primary: true,
                                enabled: true,
                                grouped: true,
                            },
                        ])}
                        blankSlateDefault={{title: 'Oh my oh my, nothing to see here :(!'}}
                        actionBar={{extraContainerClasses: ['mod-border-top']}}
                        navigation={{perPageNumbers}}
                    />
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Table with selectable values</label>
                    <TableConnected
                        id={_.uniqueId('react-vapor-table')}
                        initialTableData={getTableDataById(simplestTableDataById)}
                        headingAttributes={[
                            {
                                attributeName: 'attribute5',
                                titleFormatter: _.identity,
                                attributeFormatter: (value: boolean, name: string, data: IData) => <CheckboxConnected id={data.id}
                                    defaultChecked={value} />,
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
            </div>
        );
    }
}
