import {
    Box,
    Group,
    Radio,
    RadioCardProps as MantineRadioCardProps,
    RadioCardStylesNames as MantineRadioCardStylesNames,
    Title,
    Factory,
    RadioCardCssVariables,
    factory,
    useStyles,
    useProps,
    StylesApiProps,
} from '@mantine/core';
import {ReactNode} from 'react';
import classes from './RadioCard.module.css';

export type RadioCardStylesNames =
    | MantineRadioCardStylesNames
    | 'container'
    | 'content'
    | 'indicator'
    | 'title'
    | 'description';
export type RadioCardFactory = Factory<{
    props: RadioCardProps;
    ref: HTMLButtonElement;
    stylesNames: RadioCardStylesNames;
    vars: RadioCardCssVariables;
}>;

export type RadioCardProps = MantineRadioCardProps &
    StylesApiProps<RadioCardFactory> & {
        /**
         * The label of the card. Appears next to the radio indicator.
         */
        label: ReactNode;
        /**
         * The description of the card. Appears under the title.
         */
        description?: ReactNode;
    };

const defaultProps: Partial<RadioCardProps> = {};

export const RadioCard = factory<RadioCardFactory>((_props, ref) => {
    const {classNames, styles, style, className, vars, disabled, label, description, ...others} = useProps(
        'RadioCard',
        defaultProps,
        _props,
    );
    const getStyles = useStyles<RadioCardFactory>({
        name: 'RadioCard',
        classes,
        vars,
        classNames,
        className,
        style,
        props: _props,
        styles,
    });

    return (
        <Radio.Card
            ref={ref}
            disabled={disabled}
            {...getStyles('card', {className, style, classNames, styles})}
            {...others}
        >
            <Group {...getStyles('container', {classNames, styles})}>
                <Radio.Indicator size="xs" disabled={disabled} {...getStyles('indicator', {classNames, styles})} />
                <Title order={4} {...getStyles('title', {classNames, styles})}>
                    {label}
                </Title>
            </Group>
            <Box {...getStyles('description', {classNames, styles})}>{description}</Box>
        </Radio.Card>
    );
});
