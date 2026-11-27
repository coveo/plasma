import {Box, BoxProps, CompoundStylesApiProps, Factory, factory, Group, useProps} from '@mantine/core';
import {useMemo} from 'react';

import {useTableContext} from '../TableContext.js';
import {TableActionsList} from './TableActionsList.js';

export type TableHeaderActionsStylesNames = 'headerActionsRoot' | 'headerActionsGroup';

export interface TableHeaderActionsProps extends BoxProps, CompoundStylesApiProps<TableHeaderActionsFactory> {}

type TableHeaderActionsFactory = Factory<{
    props: TableHeaderActionsProps;
    ref: HTMLDivElement;
    stylesNames: TableHeaderActionsStylesNames;
    compound: true;
}>;

const defaultProps = {} satisfies Partial<TableHeaderActionsProps>;

export const TableHeaderActions = factory<TableHeaderActionsFactory>((props) => {
    const {store, getStyles, getRowActions} = useTableContext();
    const {style, className, classNames, styles, ref, ...others} = useProps(
        'PlasmaTableHeaderActions',
        defaultProps,
        props,
    );

    const actions = useMemo(() => {
        const selectedRows = store.getSelectedRows();
        if (selectedRows.length === 0) {
            return [];
        }
        return getRowActions(selectedRows);
    }, [store.state.rowSelection]);

    if (actions.length === 0) {
        return null;
    }

    const stylesApiProps = {classNames, styles};

    return (
        <Box ref={ref} {...getStyles('headerActionsRoot', {className, style, ...stylesApiProps})} {...others}>
            <Group gap="xs" {...getStyles('headerActionsGroup', stylesApiProps)}>
                <TableActionsList actions={actions} variant="split" />
            </Group>
        </Box>
    );
});
