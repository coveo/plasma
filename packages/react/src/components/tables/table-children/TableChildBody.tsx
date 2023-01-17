import classNames from 'classnames';
import {ReactNode, MouseEvent} from 'react';
import * as _ from 'underscore';

import {getAdditionalClasses, IAdditionalClass} from '../../../utils/ClassNameUtils.js';
import {convertUndefinedAndNullToEmptyString} from '../../../utils/FalsyValuesUtils.js';
import {JSXRenderable} from '../../../utils/JSXUtils.js';
import {IActionOptions} from '../../actions/Action.js';
import {IData, ITableHeadingAttribute} from '../Table.js';
import {TableCollapsibleRowConnected} from '../TableCollapsibleRowConnected.js';
import {TableCollapsibleRowWrapper} from '../TableCollapsibleRowWrapper.js';
import {TableChildComponent, TOGGLE_ARROW_CELL_COUNT} from '../TableConstants.js';
import {TableHeadingRowConnected} from '../TableHeadingRowConnected.js';
import {getTableChildComponentId} from '../TableUtils.js';

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

/**
 * @deprecated Use Mantine instead
 */
export const TableChildBody = (props: ITableChildBodyProps): JSX.Element => {
    const headingAndCollapsibleId = `${getTableChildComponentId(props.tableId, TableChildComponent.TABLE_HEADING_ROW)}${
        props.rowData.id
    }`;
    const tableHeadingRowContent = _.map(
        props.headingAttributes,
        (headingAttribute: ITableHeadingAttribute, xPosition: number) => {
            const {attributeName, attributeFormatter} = headingAttribute;
            const headingRowContent: ReactNode = attributeFormatter
                ? attributeFormatter(props.rowData[attributeName], attributeName, props.rowData)
                : convertUndefinedAndNullToEmptyString(props.rowData[attributeName]);

            return (
                <td
                    key={`cell-${xPosition}`}
                    className={classNames(getAdditionalClasses(headingAttribute.additionalCellClasses, props.rowData))}
                    onClick={(event: MouseEvent<HTMLTableDataCellElement>) =>
                        handleOnClick(event, headingAttribute, props)
                    }
                >
                    <div className="wrapper">{headingRowContent}</div>
                </td>
            );
        }
    );
    const collapsibleData = props.collapsibleFormatter?.(props.rowData);
    const collapsibleRow = collapsibleData ? (
        <TableCollapsibleRowConnected
            id={headingAndCollapsibleId}
            key={`collapsible-row-${props.rowData.id}`}
            nbColumns={props.headingAttributes.length + TOGGLE_ARROW_CELL_COUNT}
        >
            {collapsibleData}
        </TableCollapsibleRowConnected>
    ) : null;

    const tableRowWrapperClasses = classNames({
        'table-body-loading': !!props.isLoading,
    });
    const tableRowClasses = classNames(
        {
            disabled: !!props.rowData.disabled || (!_.isUndefined(props.rowData.enabled) && !props.rowData.enabled),
            'no-hover': !!props.withoutHoverOnRow,
            'row-disabled': props.disabled,
        },
        getAdditionalClasses(props.additionalRowClasses, props.rowData)
    );
    const actions = props.getActions?.(props.rowData) ?? [];

    const tableHeadingRowConnectedNode = (
        <TableHeadingRowConnected
            id={headingAndCollapsibleId}
            tableId={props.tableId}
            rowId={props.rowData.id}
            className={tableRowClasses}
            isCollapsible={!!collapsibleData}
            onClickCallback={() => {
                props.onRowClick?.(actions);

                props.handleOnRowClick?.(actions, props.rowData);
            }}
            onDoubleClick={() =>
                actions.filter((action) => action.callOnDoubleClick).forEach((action) => action.trigger())
            }
            isMultiSelect={props.isMultiSelect}
            selectionDisabled={actions.length < 1}
            tableHasCollapsibleRow={!!props.collapsibleFormatter}
        >
            {tableHeadingRowContent}
        </TableHeadingRowConnected>
    );

    return collapsibleRow || !!props.collapsibleFormatter ? (
        <TableCollapsibleRowWrapper className={tableRowWrapperClasses}>
            {tableHeadingRowConnectedNode}
            {collapsibleRow}
        </TableCollapsibleRowWrapper>
    ) : (
        tableHeadingRowConnectedNode
    );
};

const handleOnClick = (
    event: MouseEvent<HTMLTableDataCellElement>,
    headingAttributes: ITableHeadingAttribute,
    childBodyProps: ITableChildBodyProps
) => {
    headingAttributes.onClickCell?.(event, childBodyProps);
};
