import {Button as MantineButton, ButtonProps as MantineButtonProps} from '@mantine/core';
import {MouseEventHandler, forwardRef} from 'react';

import {useLoadingHandler} from '../../hooks';
import {createPolymorphicComponent} from '../../utils';
import {ButtonWithDisabledTooltip, ButtonWithDisabledTooltipProps} from './ButtonWithDisabledTooltip';

export interface ButtonProps extends MantineButtonProps, ButtonWithDisabledTooltipProps {
    /* Handler executed on click */
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

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
