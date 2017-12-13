import * as React from 'react';
import { ITableProps, ITableHeadingAttribute } from '../Table';
import { ITableHeaderCellOwnProps } from '../TableHeaderCell';
import { getTableChildComponentId } from '../TableUtils';
import { TableChildComponent } from '../TableConstants';
import * as classNames from 'classnames';
import { TableHeader } from '../TableHeader';

export const TableChildHeader = (props: ITableProps): JSX.Element => {
    const tableHeaderCells: ITableHeaderCellOwnProps[] = props.headingAttributes.map((headingAttribute: ITableHeadingAttribute) => {
        const id = `${getTableChildComponentId(props.id, TableChildComponent.TABLE_HEADER_CELL)}${headingAttribute.attributeName}`;
        const title = headingAttribute.titleFormatter(headingAttribute.attributeName);
        const tableSortInformation = !!headingAttribute.sort
            ? { tableId: props.id, attributeToSort: headingAttribute.attributeName }
            : {};

        return { id, title, ...tableSortInformation };
    });

    const headerClass = classNames(
        'mod-no-border-top',
        { 'mod-deactivate-pointer': !!props.tableCompositeState.isLoading }
    );

    return (
        <TableHeader
            headerClass={headerClass}
            columns={[...tableHeaderCells, { title: '' }]}
            connectCell
        />
    );
};
