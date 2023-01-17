import classNames from 'classnames';
import {ReactNode} from 'react';
import {JSXRenderable} from '../../../utils/JSXUtils.js';
import {ITableHeadingAttribute, ITableProps} from '../Table.js';
import {TableChildComponent} from '../TableConstants.js';
import {TableHeader} from '../TableHeader.js';
import {ITableHeaderCellOwnProps} from '../TableHeaderCell.js';
import {getTableChildComponentId} from '../TableUtils.js';

/**
 * @deprecated Use Mantine instead
 */
export const TableChildHeader = (props: ITableProps): JSX.Element => {
    const tableHeaderCells: ITableHeaderCellOwnProps[] = props.headingAttributes.map(
        (headingAttribute: ITableHeadingAttribute) => {
            const id = `${getTableChildComponentId(props.id, TableChildComponent.TABLE_HEADER_CELL)}${
                headingAttribute.attributeName
            }`;
            const title: ReactNode = (headingAttribute.titleFormatter as (args: string) => JSXRenderable)(
                headingAttribute.attributeName
            );
            const className = headingAttribute.headerClasses;
            const tableSortInformation = !!headingAttribute.sort
                ? {tableId: props.id, attributeToSort: headingAttribute.attributeName}
                : {};

            return {
                id,
                title,
                className,
                withFixedHeader: props.withFixedHeader,
                ...tableSortInformation,
            } as ITableHeaderCellOwnProps;
        }
    );

    const headerClass = classNames(props.tableHeaderClasses, 'mod-no-border-top', {
        'mod-deactivate-pointer': !!props.tableCompositeState.isLoading,
    });

    return (
        <TableHeader
            headerClass={headerClass}
            columns={props.collapsibleFormatter ? [...tableHeaderCells, {title: ''}] : tableHeaderCells}
            withReduxState
        />
    );
};
