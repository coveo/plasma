import {Box, BoxProps, CompoundStylesApiProps, factory, Factory, useProps} from '@mantine/core';
import {ReactNode} from 'react';
import {useTableContext} from '../TableContext.js';
import {TableToolbarProvider} from './TableToolbarContext.js';

export type TableToolbarStylesNames = 'toolbarRoot';

export interface TableToolbarProps extends BoxProps, CompoundStylesApiProps<TableToolbarFactory> {
    children?: ReactNode;
}

export type TableToolbarFactory = Factory<{
    props: TableToolbarProps;
    ref: HTMLDivElement;
    stylesNames: TableToolbarStylesNames;
    compound: true;
}>;

const defaultProps: Partial<TableToolbarProps> = {};

export const TableToolbar = factory<TableToolbarFactory>((props, ref) => {
    const {getStyles} = useTableContext();
    const {children, classNames, className, styles, style, vars, ...others} = useProps(
        'PlasmaTableToolbar',
        defaultProps,
        props,
    );

    const stylesApiProps = {classNames, styles};

    return (
        <Box ref={ref} {...getStyles('toolbarRoot', {className, style, ...stylesApiProps})} {...others}>
            <TableToolbarProvider value={true}>{children}</TableToolbarProvider>
        </Box>
    );
});

TableToolbar.displayName = 'Table.Toolbar';
