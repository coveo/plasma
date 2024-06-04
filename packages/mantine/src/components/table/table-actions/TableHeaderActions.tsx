import {Factory, factory, Grid, GridColProps, Group, useProps} from '@mantine/core';
import {ReactElement} from 'react';

import {TableComponentsOrder} from '../Table';
import {TableAction} from '../Table.types';
import {useTableContext} from '../TableContext';
import {TableActionsList} from './TableActionsList';

export type TableHeaderActionsStylesNames = 'headerActionsRoot' | 'headerActionsGroup';

export interface TableHeaderActionsProps extends Omit<GridColProps, 'children'> {}

type TableHeaderActionsFactory = Factory<{
    props: TableHeaderActionsProps;
    ref: HTMLDivElement;
    stylesNames: TableHeaderActionsStylesNames;
    compound: true;
}>;

const defaultProps: Partial<TableHeaderActionsProps> = {};

export const TableHeaderActions = factory<TableHeaderActionsFactory>(
    (props: TableHeaderActionsProps, ref): ReactElement => {
        const {store, getStyles, getRowActions} = useTableContext();
        const {style, className, classNames, styles, ...others} = useProps(
            'PlasmaTableHeaderActions',
            defaultProps,
            props,
        );
        const selectedRows = store.getSelectedRows();
        if (selectedRows.length === 0) {
            return null;
        }

        const actions: TableAction[] = getRowActions(selectedRows);
        if (actions.length === 0) {
            return null;
        }

        const stylesApiProps = {classNames, styles};

        return (
            <Grid.Col
                span="content"
                order={TableComponentsOrder.Actions}
                ref={ref}
                {...getStyles('headerActionsRoot', {className, style, ...stylesApiProps})}
                {...others}
            >
                <Group gap="xs" {...getStyles('headerActionsGroup', stylesApiProps)}>
                    <TableActionsList actions={actions} variant="split" />
                </Group>
            </Grid.Col>
        );
    },
);
