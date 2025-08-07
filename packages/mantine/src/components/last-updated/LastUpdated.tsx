import {BoxProps, factory, Factory, Group, GroupProps, StylesApiProps, Text, useProps, useStyles} from '@mantine/core';
import dayjs from 'dayjs';
import React from 'react';

export type LastUpdatedStylesNames = 'root' | 'label';

export interface LastUpdatedProps extends BoxProps, Pick<GroupProps, 'justify'>, StylesApiProps<LastUpdatedFactory> {
    /**
     * The unformatted time to display. Either a Date object, a number timestamp (milliseconds since epoch) or string that can be parsed by dayjs.
     */
    time: Date | string | number;
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
};

export const LastUpdated = factory<LastUpdatedFactory>(
    (props: LastUpdatedProps, ref: React.ForwardedRef<HTMLDivElement>) => {
        const {time, label, classNames, className, styles, style, vars, unstyled, ...others} = useProps(
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
                    <span role="timer">{dayjs(time).format('h:mm:ss A')}</span>
                </Text>
            </Group>
        );
    },
);
