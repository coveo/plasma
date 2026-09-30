import {Box, BoxProps, CompoundStylesApiProps, factory, Factory, Grid, useProps} from '@mantine/core';
import {ReactNode} from 'react';

import {TableLayoutControl} from '../layouts/TableLayoutControl.js';
import {useTableContext} from '../TableContext.js';

export type TableHeaderStylesNames = 'headerRoot' | 'headerGrid' | 'headerGridInner' | 'headerCol';

export interface TableHeaderProps
    extends Omit<BoxProps, 'classNames' | 'styles' | 'vars'>, CompoundStylesApiProps<TableHeaderFactory> {
    /* Children of header (ie: filter, datepicker, etc.) */
    children?: ReactNode;
}

export type TableHeaderFactory = Factory<{
    props: TableHeaderProps;
    ref: HTMLDivElement;
    stylesNames: TableHeaderStylesNames;
    compound: true;
}>;

const defaultProps = {} satisfies Partial<TableHeaderProps>;

export const TableHeader = factory<TableHeaderFactory>((props) => {
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
    } = useProps('PlasmaTableHeader', defaultProps, props);

    const stylesApiProps = {classNames, styles};
    const innerStyles = getStyles('headerGridInner', stylesApiProps);
    const gridStyles = getStyles('headerGrid', stylesApiProps);

    return (
        <Box ref={ref} {...getStyles('headerRoot', {className, style, ...stylesApiProps})} {...others}>
            <Grid
                justify="flex-start"
                align="center"
                classNames={{inner: innerStyles.className, root: gridStyles.className}}
                styles={{inner: innerStyles.style, root: gridStyles.style}}
            >
                {children}
                <TableLayoutControl />
            </Grid>
        </Box>
    );
});

TableHeader.displayName = 'Table.Header';
