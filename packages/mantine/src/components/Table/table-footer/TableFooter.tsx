import {Box, BoxProps, CompoundStylesApiProps, factory, Factory, useProps} from '@mantine/core';
import {ReactNode} from 'react';

import {useTableContext} from '../TableContext.js';
import {TableFooterProvider} from './TableFooterContext.js';
import {type TableFooterSlotStylesNames} from './TableFooterSlot.js';

export type TableFooterStylesNames = 'footerRoot' | TableFooterSlotStylesNames;

export interface TableFooterProps
    extends Omit<BoxProps, 'classNames' | 'styles' | 'vars'>, CompoundStylesApiProps<TableFooterFactory> {
    /**
     * Children of the footer. `Table.Summary` is placed on the left, `Table.Pagination` in the center
     * and `Table.PerPage` on the right, regardless of their order.
     */
    children?: ReactNode;
}

export type TableFooterFactory = Factory<{
    props: TableFooterProps;
    ref: HTMLDivElement;
    stylesNames: TableFooterStylesNames;
    compound: true;
}>;

const defaultProps = {} satisfies Partial<TableFooterProps>;

export const TableFooter = factory<TableFooterFactory>((props) => {
    const {getStyles} = useTableContext();
    const {
        children,
        classNames,
        className,
        styles,
        style,
        vars: _vars,
        ref,
        ...others
    } = useProps('PlasmaTableFooter', defaultProps, props);

    return (
        <Box ref={ref} {...getStyles('footerRoot', {className, style, classNames, styles})} {...others}>
            <TableFooterProvider value={true}>{children}</TableFooterProvider>
        </Box>
    );
});

TableFooter.displayName = 'Table.Footer';
