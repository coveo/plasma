import {Button as MantineButton, ButtonProps as MantineButtonProps} from '@mantine/core';
import {forwardRef, MouseEvent, MouseEventHandler, useState} from 'react';

import {createPolymorphicComponent} from '../../utils';
import {ButtonWithDisabledTooltip, ButtonWithDisabledTooltipProps} from './ButtonWithDisabledTooltip';

export interface ButtonProps extends MantineButtonProps, ButtonWithDisabledTooltipProps {
    /* Handler executed on click */
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

const useLoadingHandler = (handler?: MouseEventHandler<HTMLButtonElement>) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = async (event: MouseEvent<HTMLButtonElement>) => {
        const possiblePromise: unknown = handler?.(event);
        try {
            if (possiblePromise instanceof Promise) {
                setIsLoading(true);
                await possiblePromise;
                setIsLoading(false);
            }
        } catch (err) {
            setIsLoading(false);
            console.error(err);
        }
    };

    return {isLoading, handleClick};
};

const _Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({disabledTooltip, disabled, disabledTooltipProps, loading, onClick, ...others}, ref) => {
        const {isLoading, handleClick} = useLoadingHandler(onClick);
        return (
            <ButtonWithDisabledTooltip
                disabled={disabled}
                disabledTooltip={disabledTooltip}
                disabledTooltipProps={disabledTooltipProps}
                fullWidth={others.fullWidth}
            >
                <MantineButton
                    loaderProps={{variant: 'oval'}}
                    ref={ref}
                    loading={isLoading || loading}
                    onClick={handleClick}
                    disabled={disabled}
                    {...others}
                />
            </ButtonWithDisabledTooltip>
        );
    },
);

export const Button = createPolymorphicComponent<'button', ButtonProps, {Group: typeof MantineButton.Group}>(_Button);
Button.Group = MantineButton.Group;
