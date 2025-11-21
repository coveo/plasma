import {BoxProps, factory, Factory, Group, GroupProps, StylesApiProps, Text, useProps, useStyles} from '@mantine/core';
import dayjs from 'dayjs';
import React from 'react';

export type LastUpdatedStylesNames = 'root' | 'label';

export interface LastUpdatedProps extends BoxProps, Pick<GroupProps, 'justify'>, StylesApiProps<LastUpdatedFactory> {
    /**
     * Optional formatter function to format the time value.
     * Receives the time prop and should return a string.
     * @default (time) => dayjs(time).format('h:mm:ss A')
     */
    formatter?: (time: dayjs.ConfigType) => string;
    /**
     * The unformatted time to display that can be parsed by dayjs.
     * @default The current time via dayjs().valueOf()
     */
    time?: dayjs.ConfigType;
    /**
     * Label to contextualize the time.
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
    formatter: (time) => dayjs(time).format('h:mm:ss A'),
};

export const LastUpdated = factory<LastUpdatedFactory>(
    (props: LastUpdatedProps, ref: React.ForwardedRef<HTMLDivElement>) => {
        const {formatter, label, time, classNames, className, styles, style, vars, unstyled, ...others} = useProps(
            'PlasmaLastUpdated',
            defaultProps as Partial<LastUpdatedProps>,
            props,
        );

        const resolvedTime = time ?? dayjs().valueOf();

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
        const stylesApiProps = {classNames, styles};

        return (
            <Group
                justify={props.justify}
                ref={ref}
                {...getStyles('root', {className, style, ...stylesApiProps})}
                {...others}
            >
                <Text size="xs" {...getStyles('label', {className, style, ...stylesApiProps})}>
                    {label}
                    <span role="timer">{formatter(resolvedTime)}</span>
                </Text>
            </Group>
        );
    },
);
