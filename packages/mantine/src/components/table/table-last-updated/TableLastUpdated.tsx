import {BoxProps, CompoundStylesApiProps, factory, Factory, Group, Text, useProps} from '@mantine/core';
import {useDidUpdate} from '@mantine/hooks';
import dayjs from 'dayjs';
import {useState} from 'react';
import {useTable, useTableStyles} from '../TableContext';

export type TableLastUpdatedStylesNames = 'lastUpdatedRoot' | 'lastUpdatedLabel';

export interface TableLastUpdatedProps extends BoxProps, CompoundStylesApiProps<TableLastUpdatedFactory> {
    /**
     * Label to contextualize the date
     *
     * @default "Last update:"
     */
    label?: string;
    dependencies?: never;
}
export type TableLastUpdatedFactory = Factory<{
    props: TableLastUpdatedProps;
    ref: HTMLDivElement;
    stylesNames: TableLastUpdatedStylesNames;
    compound: true;
}>;

const defaultProps: Partial<TableLastUpdatedProps> = {
    label: 'Last update:',
};

export const TableLastUpdated = factory<TableLastUpdatedFactory>((props, ref) => {
    const ctx = useTableStyles();
    const {label, dependencies, classNames, className, styles, style, vars, ...others} = useProps(
        'PlasmaTableLastUpdated',
        defaultProps,
        props,
    );
    const {state} = useTable();
    const [time, setTime] = useState(new Date());

    useDidUpdate(() => {
        setTime(new Date());
    }, [state, ...dependencies]);

    const stylesApiProps = {classNames, styles};

    return (
        <Group
            px="xl"
            justify="right"
            ref={ref}
            {...ctx.getStyles('lastUpdatedRoot', {className, style, ...stylesApiProps})}
            {...others}
        >
            <Text size="xs" {...ctx.getStyles('lastUpdatedLabel', {className, style, ...stylesApiProps})}>
                {label}
                <span role="timer">{dayjs(time).format('h:mm:ss A')}</span>
            </Text>
        </Group>
    );
});
