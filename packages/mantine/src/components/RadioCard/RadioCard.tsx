import {
    Factory,
    RadioCardProps as MantineRadioCardProps,
    RadioCardStylesNames as MantineRadioCardStylesNames,
    Radio,
    RadioCardCssVariables,
    Stack,
    StylesApiProps,
    Tooltip,
    factory,
    useProps,
    useStyles,
} from '@mantine/core';
import {ReactNode} from 'react';
import classes from '../../styles/RadioCard.module.css';
import {Input} from '../Input/Input';

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
    const {
        children,
        classNames,
        styles,
        style,
        className,
        vars,
        disabled,
        label,
        description,
        disabledTooltip,
        ...others
    } = useProps('RadioCard', defaultProps, _props);
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
        <Tooltip label={disabledTooltip} disabled={!disabled || !disabledTooltip}>
            <Radio.Card
                ref={ref}
                disabled={disabled}
                readOnly={_props.readOnly}
                {...getStyles('card', {className, style, classNames, styles})}
                {...others}
            >
                <Radio.Indicator disabled={disabled} {...getStyles('indicator', {classNames, styles})} />
                <Stack {...getStyles('container', {classNames, styles})}>
                    <Input.Label size="md" {...getStyles('title', {classNames, styles})}>
                        {label}
                    </Input.Label>
                    {description && (
                        <Input.Description {...getStyles('description', {classNames, styles})}>
                            {description}
                        </Input.Description>
                    )}
                    {children}
                </Stack>
            </Radio.Card>
        </Tooltip>
    );
});
RadioCard.displayName = 'RadioCard';
