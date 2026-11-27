import {Box, BoxProps, CompoundStylesApiProps, ElementProps, factory, Factory} from '@mantine/core';
import {ReactNode} from 'react';

import {useTableContext} from '../TableContext.js';

export type TableFooterStylesNames = 'footer';

export interface TableFooterProps
    extends BoxProps, CompoundStylesApiProps<TableFooterFactory>, ElementProps<'div', 'style'> {
    /**
     * Footer content, typically Table.LastUpdated, Table.Pagination and Table.PerPage.
     * They are placed on the left, center and right respectively, regardless of their order.
     */
    children?: ReactNode;
}

export type TableFooterFactory = Factory<{
    props: TableFooterProps;
    ref: HTMLDivElement;
    stylesNames: TableFooterStylesNames;
    compound: true;
}>;

export const TableFooter = factory<TableFooterFactory>(
    ({classNames, className, styles, style, vars: _vars, ...others}) => {
        const {getStyles} = useTableContext();

        return <Box {...getStyles('footer', {classNames, className, styles, style})} {...others} />;
    },
);

TableFooter.displayName = 'Table.Footer';
