import {
    Button as MantineButton,
    ButtonCssVariables,
    type ButtonGroup,
    ButtonProps as MantineButtonProps,
    ButtonStylesNames,
    ButtonVariant,
    Factory,
    polymorphicFactory,
} from '@mantine/core';
import {MouseEventHandler} from 'react';
import {useClickWithLoading} from '../../hooks/useClickWithLoading';
import {ButtonWithDisabledTooltip, ButtonWithDisabledTooltipProps} from './ButtonWithDisabledTooltip';

export interface ButtonProps extends MantineButtonProps, ButtonWithDisabledTooltipProps {
    /* Handler executed on click */
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

type ButtonOverloadFactory = Factory<{
    props: ButtonProps;
    defaultRef: HTMLButtonElement;
    defaultComponent: 'button';
    stylesNames: ButtonStylesNames;
    vars: ButtonCssVariables;
    variant: ButtonVariant;
    staticComponents: {
        Group: typeof ButtonGroup;
        Primary: typeof ButtonPrimary;
        Secondary: typeof ButtonSecondary;
        Tertiary: typeof ButtonTertiary;
        Quaternary: typeof ButtonQuaternary;
        DestructivePrimary: typeof ButtonDestructive;
        DestructiveSecondary: typeof ButtonDestructiveSecondary;
        DestructiveTertiary: typeof ButtonDestructiveTertiary;
        DestructiveQuaternary: typeof ButtonDestructiveQuaternary;
    };
}>;

export const Button = polymorphicFactory<ButtonOverloadFactory>(
    (
        {disabledTooltip, disabled, disabledTooltipProps, loading, onClick, 'data-disabled': dataDisabled, ...others},
        ref,
    ) => {
        const {isLoading, handleClick} = useClickWithLoading(onClick);
        return (
            <ButtonWithDisabledTooltip
                disabled={disabled || dataDisabled}
                disabledTooltip={disabledTooltip}
                disabledTooltipProps={disabledTooltipProps}
                fullWidth={others.fullWidth}
            >
                <MantineButton
                    loaderProps={{variant: 'oval'}}
                    ref={ref}
                    loading={isLoading || loading}
                    onClick={dataDisabled ? (e) => e.preventDefault() : handleClick}
                    disabled={disabled || dataDisabled}
                    data-loading={isLoading || loading || undefined}
                    {...others}
                />
            </ButtonWithDisabledTooltip>
        );
    },
);
const ButtonPrimary = Button.withProps({variant: 'filled'});
const ButtonSecondary = Button.withProps({variant: 'light'});
const ButtonTertiary = Button.withProps({
    variant: 'default',
    vars: () => ({root: {'--button-color': 'var(--mantine-primary-color-filled)'}}),
});
const ButtonQuaternary = Button.withProps({variant: 'subtle'});

const ButtonDestructive = Button.withProps({variant: 'filled', color: 'var(--mantine-color-error)'});
const ButtonDestructiveSecondary = Button.withProps({variant: 'light', color: 'var(--mantine-color-error)'});
const ButtonDestructiveTertiary = Button.withProps({
    variant: 'default',
    vars: () => ({root: {'--button-color': 'var(--mantine-color-error)'}}),
});
const ButtonDestructiveQuaternary = Button.withProps({variant: 'subtle', color: 'var(--mantine-color-error)'});

Button.Group = MantineButton.Group;
Button.Primary = ButtonPrimary;
Button.Secondary = ButtonSecondary;
Button.Tertiary = ButtonTertiary;
Button.Quaternary = ButtonQuaternary;
Button.DestructivePrimary = ButtonDestructive;
Button.DestructiveSecondary = ButtonDestructiveSecondary;
Button.DestructiveTertiary = ButtonDestructiveTertiary;
Button.DestructiveQuaternary = ButtonDestructiveQuaternary;
