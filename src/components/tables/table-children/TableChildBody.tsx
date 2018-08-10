import * as classNames from 'classnames';
import * as React from 'react';
import * as _ from 'underscore';
import {getAdditionalClasses, IAdditionalClass} from '../../../utils/ClassNameUtils';
import {callIfDefined, convertUndefinedAndNullToEmptyString} from '../../../utils/FalsyValuesUtils';
import {JSXRenderable} from '../../../utils/JSXUtils';
import {IActionOptions} from '../../actions/Action';
import {IData, ITableHeadingAttribute} from '../Table';
import {TableCollapsibleRowConnected} from '../TableCollapsibleRowConnected';
import {TableCollapsibleRowWrapper} from '../TableCollapsibleRowWrapper';
import {TableChildComponent, TOGGLE_ARROW_CELL_COUNT} from '../TableConstants';
import {TableHeadingRowConnected} from '../TableHeadingRowConnected';
import {getTableChildComponentId} from '../TableUtils';

export interface ITableBodyInheritedFromTableProps {
    getActions?: (rowData?: IData) => IActionOptions[];
    headingAttributes: ITableHeadingAttribute[];
    collapsibleFormatter?: (tableRowData: IData) => JSXRenderable;
    additionalRowClasses?: IAdditionalClass[];
    withoutHoverOnRow?: boolean;
}

export interface ITableChildBodyProps extends ITableBodyInheritedFromTableProps {
    tableId: string;
    rowData: IData;
    isLoading: boolean;
    onRowClick?: (actions: IActionOptions[]) => void;
    disabled?: boolean;
    isMultiSelect: boolean;
    withoutHoverOnRow?: boolean;
    handleOnRowClick?: (actions: IActionOptions[], rowData: IData) => void;
}

export const TableChildBody = (props: ITableChildBodyProps): JSX.Element => {
    const headingAndCollapsibleId = `${getTableChildComponentId(props.tableId, TableChildComponent.TABLE_HEADING_ROW)}${props.rowData.id}`;
    const tableHeadingRowContent = _.map(props.headingAttributes, (headingAttribute: ITableHeadingAttribute, xPosition: number) => {
        const {attributeName, attributeFormatter} = headingAttribute;
        const headingRowContent: React.ReactNode = attributeFormatter
            ? attributeFormatter(props.rowData[attributeName], attributeName, props.rowData)
            : convertUndefinedAndNullToEmptyString(props.rowData[attributeName]);

        return (
            <td key={`cell-${xPosition}`}
                className={classNames(getAdditionalClasses(headingAttribute.additionalCellClasses, {}))}
                onClick={(event: React.MouseEvent<HTMLTableDataCellElement>) => handleOnClick(event, headingAttribute, props)}
            >
                <div className='wrapper'>
                    {headingRowContent}
                </div>
            </td>
        );
    });
    const collapsibleData = props.collapsibleFormatter && props.collapsibleFormatter(props.rowData);
    const collapsibleRow = collapsibleData
        ? (
            <TableCollapsibleRowConnected
                id={headingAndCollapsibleId}
                key={`collapsible-row-${props.rowData.id}`}
                nbColumns={props.headingAttributes.length + TOGGLE_ARROW_CELL_COUNT}>
                {collapsibleData}
            </TableCollapsibleRowConnected>
        )
        : null;

    const tableRowWrapperClasses = classNames({
        'table-body-loading': !!props.isLoading,
    });
    const tableRowClasses = classNames(
        {
            disabled: !!props.rowData.disabled || !_.isUndefined(props.rowData.enabled) && !props.rowData.enabled,
            'no-hover': !!props.withoutHoverOnRow,
            'row-disabled': props.disabled,
        },
        getAdditionalClasses(props.additionalRowClasses, props.rowData),
    );

    const tableHeadingRowConnectedNode = (
        <TableHeadingRowConnected
            id={headingAndCollapsibleId}
            tableId={props.tableId}
            rowId={props.rowData.id}
            className={tableRowClasses}
            isCollapsible={!!collapsibleData}
            onClickCallback={() => {
                if (props.onRowClick) {
                    props.onRowClick(props.getActions(props.rowData));
                }

                if (props.handleOnRowClick) {
                    props.handleOnRowClick(props.getActions(props.rowData), props.rowData);
                }
            }}
            onDoubleClick={() => props.getActions(props.rowData)
                .filter((action) => action.callOnDoubleClick)
                .forEach((action) => action.trigger())
            }
            isMultiSelect={props.isMultiSelect}
            selectionDisabled={props.getActions(props.rowData).length < 1}
            tableHasCollapsibleRow={!!props.collapsibleFormatter}
        >
            {tableHeadingRowContent}
        </TableHeadingRowConnected>
    );

    return collapsibleRow || !!props.collapsibleFormatter
        ? (
            <TableCollapsibleRowWrapper className={tableRowWrapperClasses}>
                {tableHeadingRowConnectedNode}
                {collapsibleRow}
            </TableCollapsibleRowWrapper>
        )
        : tableHeadingRowConnectedNode;
};

const handleOnClick = (event: React.MouseEvent<HTMLTableDataCellElement>, headingAttributes: ITableHeadingAttribute, childBodyProps: ITableChildBodyProps) => {
    callIfDefined(headingAttributes.onClickCell, event, childBodyProps);
};
