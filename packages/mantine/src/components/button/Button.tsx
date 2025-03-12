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
Button.Group = MantineButton.Group;

export const ButtonPrimary = Button.withProps({variant: 'filled'});
export const ButtonSecondary = Button.withProps({variant: 'light'});
export const ButtonTertiary = Button.withProps({variant: 'subtle'});
export const ButtonDestructive = Button.withProps({variant: 'filled', color: 'var(--mantine-color-error)'});
export const ButtonDestructiveSecondary = Button.withProps({variant: 'light', color: 'var(--mantine-color-error)'});
