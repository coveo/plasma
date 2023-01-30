import {Button as MantineButton, ButtonProps as MantineButtonProps} from '@mantine/core';
import {forwardRef} from 'react';

import {createPolymorphicComponent} from '../../utils';
import {ButtonWithDisabledTooltip, ButtonWithDisabledTooltipProps} from './ButtonWithDisabledTooltip';

export interface ButtonProps extends MantineButtonProps, ButtonWithDisabledTooltipProps {}

const _Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({disabledTooltip, disabled, disabledTooltipProps, ...others}, ref) => (
        <ButtonWithDisabledTooltip
            disabled={disabled}
            disabledTooltip={disabledTooltip}
            disabledTooltipProps={disabledTooltipProps}
        >
            <MantineButton ref={ref} disabled={disabled} {...others} />
        </ButtonWithDisabledTooltip>
    )
);

export const Button = createPolymorphicComponent<'button', ButtonProps, {Group: typeof MantineButton.Group}>(_Button);
