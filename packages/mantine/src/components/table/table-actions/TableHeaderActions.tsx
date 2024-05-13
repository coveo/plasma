import {Factory, factory, Grid, GridColProps, Group, useProps} from '@mantine/core';
import {ReactElement} from 'react';

import {TableComponentsOrder} from '../Table';
import {useTableContext} from '../TableContext';

export type TableHeaderActionsStylesNames = 'headerActionsRoot' | 'headerActionsGroup';

export interface TableHeaderActionsProps extends GridColProps {}

type TableHeaderActionsFactory = Factory<{
    props: TableHeaderActionsProps;
    ref: HTMLDivElement;
    stylesNames: TableHeaderActionsStylesNames;
    compound: true;
}>;

const defaultProps: Partial<TableHeaderActionsProps> = {};

export const TableHeaderActions = factory<TableHeaderActionsFactory>(
    (props: TableHeaderActionsProps, ref): ReactElement => {
        const {store, getStyles} = useTableContext();
        const {style, className, classNames, styles, children, ...others} = useProps(
            'PlasmaTableHeaderActions',
            defaultProps,
            props,
        );
        const selectedRows = store.getSelectedRows();

        if (selectedRows.length <= 0) {
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
                    {children}
                </Group>
            </Grid.Col>
        );
    },
);
