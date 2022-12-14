import {CrossSize16Px} from '@coveord/plasma-react-icons';
import {Button, createStyles, DefaultProps, Group, Selectors, Space, Tooltip} from '@mantine/core';
import {FunctionComponent, ReactNode} from 'react';

import {useTable} from './useTable';

const useStyles = createStyles((theme) => ({
    root: {
        position: 'sticky',
        top: 0,
        zIndex: 13, // skeleton is 11
        backgroundColor: theme.colors.gray[1],
        borderBottom: `1px solid ${theme.colors.gray[3]}`,
    },
}));

type TableHeaderStylesNames = Selectors<typeof useStyles>;
interface TableHeaderProps extends DefaultProps<TableHeaderStylesNames> {
    /* Children of header (ie: actions, datepicker, etc.) */
    children?: ReactNode;
}
export const TableHeader: FunctionComponent<TableHeaderProps> = ({
    classNames,
    styles,
    unstyled,
    children,
    ...others
}) => {
    const {getSelectedRows, multiRowSelectionEnabled, clearSelection} = useTable();
    const {classes} = useStyles(null, {name: 'TableHeader', classNames, styles, unstyled});
    const selectedRows = getSelectedRows();
    return multiRowSelectionEnabled ? (
        <Group position="apart" className={classes.root}>
            {selectedRows.length > 0 ? (
                <Tooltip label="Unselect all">
                    <Button onClick={clearSelection} ml="lg" variant="subtle" leftIcon={<CrossSize16Px height={16} />}>
                        {selectedRows.length} selected
                    </Button>
                </Tooltip>
            ) : (
                <Space />
            )}
            <Group position="right" spacing="lg" px="md" py="sm" {...others}>
                {children}
            </Group>
        </Group>
    ) : (
        <Group position="right" spacing="lg" px="md" py="sm" className={classes.root} {...others}>
            {children}
        </Group>
    );
};
