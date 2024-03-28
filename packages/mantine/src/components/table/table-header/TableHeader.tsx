import {CrossSize16Px} from '@coveord/plasma-react-icons';
import {Box, BoxProps, factory, Factory, Grid, Tooltip, useProps} from '@mantine/core';
import {CompoundStylesApiProps} from '@mantine/core/lib/core/styles-api/styles-api.types';
import {ReactNode} from 'react';

import {Button} from '../../button';
import {TableLayoutControl} from '../layouts/TableLayoutControl';
import {TableComponentsOrder} from '../Table';
import {useTable, useTableStyles} from '../TableContext';

export type TableHeaderStylesNames = 'headerRoot' | 'headerGrid' | 'headerGridInner' | 'headerCol';

export interface TableHeaderProps
    extends Omit<BoxProps, 'classNames' | 'styles' | 'vars'>,
        CompoundStylesApiProps<TableHeaderFactory> {
    /* Children of header (ie: actions, datepicker, etc.) */
    children?: ReactNode;
    unselectAllLabel?: string;
    selectedCountLabel?: (count: number) => string;
}

export type TableHeaderFactory = Factory<{
    props: TableHeaderProps;
    ref: HTMLDivElement;
    stylesNames: TableHeaderStylesNames;
    compound: true;
}>;

const defaultProps: Partial<TableHeaderProps> = {
    unselectAllLabel: 'Unselect all',
    selectedCountLabel: (count) => `${count} selected`,
};

export const TableHeader = factory<TableHeaderFactory>((props, ref) => {
    const ctx = useTableStyles();
    const {unselectAllLabel, selectedCountLabel, children, classNames, className, styles, style, vars, ...others} =
        useProps('PlasmaTableHeader', defaultProps, props);
    const {getSelectedRows, multiRowSelectionEnabled, clearSelection, disableRowSelection} = useTable();
    const selectedRows = getSelectedRows();

    const stylesApiProps = {classNames, styles};
    const innerStyles = ctx.getStyles('headerGridInner', stylesApiProps);
    const gridStyles = ctx.getStyles('headerGrid', stylesApiProps);

    return (
        <Box
            py="sm"
            px="lg"
            ref={ref}
            {...ctx.getStyles('headerRoot', {className, style, ...stylesApiProps})}
            {...others}
        >
            <Grid
                justify="flex-start"
                align="center"
                classNames={{inner: innerStyles.className, root: gridStyles.className}}
                styles={{inner: innerStyles.style, root: gridStyles.style}}
            >
                {multiRowSelectionEnabled && selectedRows.length > 0 ? (
                    <Grid.Col
                        span="auto"
                        {...ctx.getStyles('headerCol', stylesApiProps)}
                        order={TableComponentsOrder.MultiSelectInfo}
                    >
                        <Tooltip label={unselectAllLabel}>
                            <Button
                                onClick={clearSelection}
                                variant="subtle"
                                disabled={disableRowSelection}
                                leftSection={<CrossSize16Px height={16} />}
                            >
                                {selectedCountLabel(selectedRows.length)}
                            </Button>
                        </Tooltip>
                    </Grid.Col>
                ) : null}
                {children}
                <TableLayoutControl />
            </Grid>
        </Box>
    );
});
