import {
    ButtonCssVariables,
    type ButtonGroup,
    ButtonStylesNames,
    ButtonVariant,
    Factory,
    Button as MantineButton,
    ButtonProps as MantineButtonProps,
    polymorphicFactory,
} from '@mantine/core';
import {MouseEventHandler} from 'react';
import {useClickWithLoading} from '../../hooks/useClickWithLoading.js';
import {ButtonWithDisabledTooltip, ButtonWithDisabledTooltipProps} from './ButtonWithDisabledTooltip.js';

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
const ButtonSecondary = Button.withProps({
    variant: 'light',
    color: 'var(--coveo-color-text-primary)',
});
const ButtonTertiary = Button.withProps({
    variant: 'default',
    vars: (theme) => ({
        root: {
            '--button-color': 'var(--coveo-color-text-primary)',
            '--button-padding-x': theme.spacing.sm,
        },
    }),
});
const ButtonQuaternary = Button.withProps({
    variant: 'subtle',
    color: 'var(--coveo-color-text-primary)',
});

const ButtonDestructive = Button.withProps({variant: 'filled', color: 'var(--mantine-color-error)'});
const ButtonDestructiveSecondary = Button.withProps({
    variant: 'light',
    color: 'var(--mantine-color-error)',
});
const ButtonDestructiveTertiary = Button.withProps({
    variant: 'default',
    vars: (theme) => ({
        root: {
            '--button-color': 'var(--mantine-color-error)',
            '--button-padding-x': theme.spacing.sm,
        },
    }),
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
