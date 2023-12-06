import {Group, Text} from '@mantine/core';
import {useDidUpdate} from '@mantine/hooks';
import dayjs from 'dayjs';
import {FunctionComponent, useState} from 'react';
import {useTable} from '../TableContext';
import TableLAstUpdatedClasses from './TableLastUpdated.module.css';
import {TableLastUpdatedProps} from './TableLastUpdated.types';

export const TableLastUpdated: FunctionComponent<TableLastUpdatedProps & {dependencies?: never}> = ({
    label = 'Last update:',
    dependencies,
    ...others
}) => {
    const {state} = useTable();
    const [time, setTime] = useState(new Date());

    useDidUpdate(() => {
        setTime(new Date());
    }, [state, ...dependencies]);

    return (
        <Group className={TableLAstUpdatedClasses.root} px="xl" justify="right">
            <Text size="xs" className={TableLAstUpdatedClasses.label} {...others}>
                {label}
                <span role="timer">{dayjs(time).format('h:mm:ss A')}</span>
            </Text>
        </Group>
    );
};
