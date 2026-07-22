import {BoxProps, factory, Factory, Group, GroupProps, StylesApiProps, Text, useProps, useStyles} from '@mantine/core';
import dayjs from 'dayjs';
import {ForwardedRef} from 'react';

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

const defaultProps = {
    label: 'Last update:',
    formatter: (time) => dayjs(time).format('h:mm:ss A'),
} satisfies Partial<LastUpdatedProps>;

export const LastUpdated = factory<LastUpdatedFactory>((props: LastUpdatedProps, ref: ForwardedRef<HTMLDivElement>) => {
    const {formatter, label, time, classNames, className, styles, style, vars, unstyled, ...others} = useProps(
        'PlasmaLastUpdated',
        defaultProps,
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
        <Group ref={ref} {...getStyles('root', {className, style, ...stylesApiProps})} {...others}>
            <Text size="xs" {...getStyles('label', {className, style, ...stylesApiProps})}>
                {label}
                <span role="timer">{formatter(resolvedTime)}</span>
            </Text>
        </Group>
    );
});

LastUpdated.displayName = 'LastUpdated';
