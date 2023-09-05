import {Group, Text} from '@mantine/core';
import {useDidUpdate} from '@mantine/hooks';
import dayjs from 'dayjs';
import {FunctionComponent, useState} from 'react';
import {useTable} from '../TableContext';
import useStyles from './TableLastUpdated.styles';
import {TableLastUpdatedProps} from './TableLastUpdated.types';

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
