import {CrossSize16Px} from '@coveord/plasma-react-icons';
import {createStyles, DefaultProps, Grid, Selectors, Tooltip} from '@mantine/core';
import {FunctionComponent, ReactNode} from 'react';

import {Button} from '../button';
import {TableComponentsOrder} from './Table.styles';
import {useTable} from './TableContext';
import {TableLayoutControl} from './TableLayoutControl';

const useStyles = createStyles((theme) => ({
    root: {
        flexDirection: 'row-reverse',
        flexWrap: 'wrap-reverse',
        background: `repeating-linear-gradient(${theme.colors.gray[1]}, ${theme.colors.gray[1]} 68px, ${theme.colors.gray[3]} 68px, ${theme.colors.gray[3]} 69px)`,
        borderBottom: `1px solid ${theme.colors.gray[3]}`,
    },
    multiSelectInfo: {
        justifySelf: 'flex-start',
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
    const {getSelectedRows, multiRowSelectionEnabled, clearSelection, disableRowSelection} = useTable();
    const {classes} = useStyles(null, {name: 'TableHeader', classNames, styles, unstyled});
    const selectedRows = getSelectedRows();

    return (
        <Grid
            justify="flex-start"
            align="center"
            gutter="sm"
            p={0}
            pl="md"
            pr="lg"
            m={0}
            className={classes.root}
            {...others}
        >
            {multiRowSelectionEnabled && selectedRows.length > 0 ? (
                <Grid.Col
                    span="auto"
                    py="sm"
                    className={classes.multiSelectInfo}
                    order={TableComponentsOrder.MultiSelectInfo}
                >
                    <Tooltip label="Unselect all">
                        <Button
                            onClick={clearSelection}
                            variant="subtle"
                            disabled={disableRowSelection}
                            leftIcon={<CrossSize16Px height={16} />}
                        >
                            {selectedRows.length} selected
                        </Button>
                    </Tooltip>
                </Grid.Col>
            ) : null}
            {children}
            <TableLayoutControl />
        </Grid>
    );
};
