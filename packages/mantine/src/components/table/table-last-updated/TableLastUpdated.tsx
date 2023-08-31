import {createStyles, DefaultProps, Group, Selectors, Text} from '@mantine/core';
import {useDidUpdate} from '@mantine/hooks';
import dayjs from 'dayjs';
import {FunctionComponent, useState} from 'react';
import {useTable} from '../TableContext';

const useStyles = createStyles((theme) => ({
    root: {
        minHeight: '98px',
    },
    label: {
        color: theme.colors.gray[6],
    },
}));

type TableLastUpdatedStylesNames = Selectors<typeof useStyles>;

interface TableLastUpdatedProps extends DefaultProps<TableLastUpdatedStylesNames> {
    /**
     * Label to contextualize the date
     *
     * @default "Last update:"
     */
    label?: string;
}

export const TableLastUpdated: FunctionComponent<TableLastUpdatedProps & {dependencies?: never}> = ({
    label = 'Last update:',
    dependencies,
    classNames,
    styles,
    unstyled,
    ...others
}) => {
    const {classes} = useStyles(null, {name: 'TableLastUpdated', classNames, styles, unstyled});
    const {state} = useTable();
    const [time, setTime] = useState(new Date());

    useDidUpdate(() => {
        setTime(new Date());
    }, [state, ...dependencies]);

    return (
        <Group className={classes.root} px="xl" position="right">
            <Text size="xs" className={classes.label} {...others}>
                {label}
                <span role="timer">{dayjs(time).format('h:mm:ss A')}</span>
            </Text>
        </Group>
    );
};
