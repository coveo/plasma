import {CrossSize16Px} from '@coveord/plasma-react-icons';
import {Box, BoxProps, CompoundStylesApiProps, factory, Factory, Grid, Tooltip, useProps} from '@mantine/core';
import {ReactNode} from 'react';

import {Button} from '../../Button/Button.js';
import {TableLayoutControl} from '../layouts/TableLayoutControl.js';
import {TableHeaderActions} from '../table-actions/TableHeaderActions.js';
import {TableComponentsOrder} from '../Table.js';
import {useTableContext} from '../TableContext.js';

export type TableHeaderStylesNames = 'headerRoot' | 'headerGrid' | 'headerGridInner' | 'headerCol';

export interface TableHeaderProps
    extends Omit<BoxProps, 'classNames' | 'styles' | 'vars'>, CompoundStylesApiProps<TableHeaderFactory> {
    /* Children of header (ie: actions, datepicker, etc.) */
    children?: ReactNode;
    unselectAllLabel?: string;
    selectedCountLabel?: (count: number) => string;
    /**
     * Whether to show actions when rows are selected
     *
     * default true
     */
    showActions?: boolean;
    /**
     * Whether to show a border on top of the header
     *
     * default true
     */
    borderTop?: boolean;
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
    showActions: true,
    borderTop: true,
};

export const TableHeader = factory<TableHeaderFactory>((props, ref) => {
    const {store, getStyles} = useTableContext();
    const {
        showActions,
        unselectAllLabel,
        selectedCountLabel,
        borderTop,
        children,
        classNames,
        className,
        styles,
        style,
        vars: _vars,
        ...others
    } = useProps('PlasmaTableHeader', defaultProps, props);
    const selectedRows = store.getSelectedRows();

    const stylesApiProps = {classNames, styles};
    const innerStyles = getStyles('headerGridInner', stylesApiProps);
    const gridStyles = getStyles('headerGrid', stylesApiProps);

    return (
        <Box
            ref={ref}
            {...getStyles('headerRoot', {className, style, ...stylesApiProps})}
            {...others}
            mod={{'with-border-top': borderTop}}
        >
            <Grid
                justify="flex-start"
                align="center"
                classNames={{inner: innerStyles.className, root: gridStyles.className}}
                styles={{inner: innerStyles.style, root: gridStyles.style}}
            >
                {store.multiRowSelectionEnabled && selectedRows.length > 0 ? (
                    <Grid.Col
                        span="auto"
                        {...getStyles('headerCol', stylesApiProps)}
                        order={TableComponentsOrder.MultiSelectInfo}
                    >
                        <Tooltip label={unselectAllLabel}>
                            <Button.Quaternary
                                onClick={store.clearRowSelection}
                                disabled={!store.rowSelectionEnabled}
                                leftSection={<CrossSize16Px height={16} />}
                            >
                                {selectedCountLabel(selectedRows.length)}
                            </Button.Quaternary>
                        </Tooltip>
                    </Grid.Col>
                ) : null}
                {children}
                {showActions ? <TableHeaderActions /> : null}
                <TableLayoutControl />
            </Grid>
        </Box>
    );
});

TableHeader.displayName = 'Table.Header';
