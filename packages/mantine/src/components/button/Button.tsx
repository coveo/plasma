import {
    ButtonGroup,
    Factory,
    Button as MantineButton,
    ButtonProps as MantineButtonProps,
    polymorphicFactory,
} from '@mantine/core';
import {ButtonCssVariables, ButtonStylesNames, ButtonVariant} from '@mantine/core/lib/components/Button/Button';
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
                    disabled={disabled}
                    data-loading={isLoading || loading || undefined}
                    {...others}
                />
            </ButtonWithDisabledTooltip>
        );
    },
);
Button.Group = MantineButton.Group;
