import * as classNames from 'classnames';
import * as React from 'react';
import {JSXRenderable} from '../../../utils/JSXUtils';
import {ITableHeadingAttribute, ITableProps} from '../Table';
import {TableChildComponent} from '../TableConstants';
import {TableHeader} from '../TableHeader';
import {ITableHeaderCellOwnProps} from '../TableHeaderCell';
import {getTableChildComponentId} from '../TableUtils';

export const TableChildHeader = (props: ITableProps): JSX.Element => {
    const tableHeaderCells: ITableHeaderCellOwnProps[] = props.headingAttributes.map((headingAttribute: ITableHeadingAttribute) => {
        const id = `${getTableChildComponentId(props.id, TableChildComponent.TABLE_HEADER_CELL)}${headingAttribute.attributeName}`;
        const title: React.ReactNode = (headingAttribute.titleFormatter as (args: string) => JSXRenderable)(headingAttribute.attributeName);
        const tableSortInformation = !!headingAttribute.sort
            ? {tableId: props.id, attributeToSort: headingAttribute.attributeName}
            : {};

        return {id, title, withFixedHeader: props.withFixedHeader, ...tableSortInformation};
    });

    const headerClass = classNames(
        'mod-no-border-top',
        {'mod-deactivate-pointer': !!props.tableCompositeState.isLoading},
    );

    return (
        <TableHeader
            headerClass={headerClass}
            columns={props.collapsibleFormatter ? [...tableHeaderCells, {title: ''}] : tableHeaderCells}
            withReduxState
        />
    );
};
