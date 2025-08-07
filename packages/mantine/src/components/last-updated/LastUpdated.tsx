import {BoxProps, factory, Factory, Group, GroupProps, StylesApiProps, Text, useProps, useStyles} from '@mantine/core';
import {useDidUpdate} from '@mantine/hooks';
import dayjs from 'dayjs';
import React, {useState} from 'react';

export type LastUpdatedStylesNames = 'lastUpdatedRoot' | 'lastUpdatedLabel';

export interface LastUpdatedProps extends BoxProps, Pick<GroupProps, 'justify'>, StylesApiProps<LastUpdatedFactory> {
    /**
     * The data to determine the last updated time.
     */
    data: unknown;
    /**
     * Label to contextualize the date
     *
     * @default "Last update:"
     */
    label?: string;
}
export type LastUpdatedFactory = Factory<{
    props: LastUpdatedProps;
    ref: HTMLDivElement;
    stylesNames: LastUpdatedStylesNames;
}>;

const defaultProps: Partial<LastUpdatedProps> = {
    label: 'Last update:',
};

export const LastUpdated = factory<LastUpdatedFactory>(
    (props: LastUpdatedProps, ref: React.ForwardedRef<HTMLDivElement>) => {
        const {label, classNames, className, styles, style, vars, unstyled, ...others} = useProps(
            'PlasmaLastUpdated',
            defaultProps as Partial<LastUpdatedProps>,
            props,
        );

        const getStyles = useStyles<LastUpdatedFactory>({
            name: 'LastUpdated',
            classes: {},
            props,
            className,
            style,
            classNames,
            styles,
            unstyled,
            vars,
        });
        const [time, setTime] = useState(new Date());

        useDidUpdate(() => {
            setTime(new Date());
        }, [props.data]);

        const stylesApiProps = {classNames, styles};

        return (
            <Group
                px="xl"
                justify={props.justify || 'right'}
                ref={ref}
                {...getStyles('lastUpdatedRoot', {className, style, ...stylesApiProps})}
                {...others}
            >
                <Text size="xs" {...getStyles('lastUpdatedLabel', {className, style, ...stylesApiProps})}>
                    {label}
                    <span role="timer">{dayjs(time).format('h:mm:ss A')}</span>
                </Text>
            </Group>
        );
    },
);
