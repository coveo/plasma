import {
    Box,
    Factory,
    Group,
    RadioCardProps as MantineRadioCardProps,
    RadioCardStylesNames as MantineRadioCardStylesNames,
    Radio,
    RadioCardCssVariables,
    StylesApiProps,
    Title,
    Tooltip,
    factory,
    useProps,
    useStyles,
} from '@mantine/core';
import {ReactNode} from 'react';
import classes from '../../styles/RadioCard.module.css';

export type RadioCardStylesNames = MantineRadioCardStylesNames | 'container' | 'indicator' | 'title' | 'description';
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
        /**
         * If true, the radio card will be displayed in a read-only state.
         */
        readOnly?: boolean;
        /**
         * The tooltip message to display when disabled
         */
        disabledTooltip?: string;
    };

const defaultProps: Partial<RadioCardProps> = {};

export const RadioCard = factory<RadioCardFactory>((_props, ref) => {
    const {classNames, styles, style, className, vars, disabled, label, description, disabledTooltip, ...others} =
        useProps('RadioCard', defaultProps, _props);
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
        <Tooltip label={disabledTooltip} disabled={!disabled}>
            <Radio.Card
                ref={ref}
                disabled={disabled}
                readOnly={_props.readOnly}
                {...getStyles('card', {className, style, classNames, styles})}
                {...others}
            >
                <Group {...getStyles('container', {classNames, styles})}>
                    <Radio.Indicator size="xs" disabled={disabled} {...getStyles('indicator', {classNames, styles})} />
                    <Title order={4} {...getStyles('title', {classNames, styles})}>
                        {label}
                    </Title>
                </Group>
                {description && <Box {...getStyles('description', {classNames, styles})}>{description}</Box>}
            </Radio.Card>
        </Tooltip>
    );
});
RadioCard.displayName = 'RadioCard';
