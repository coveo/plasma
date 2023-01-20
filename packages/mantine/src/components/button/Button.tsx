import {Button as MantineButton, ButtonProps as MantineButtonProps, useMantineTheme} from '@mantine/core';
import {forwardRef} from 'react';

import {createPolymorphicComponent} from '../../utils';
import {ButtonWithDisabledTooltip, ButtonWithDisabledTooltipProps} from './ButtonWithDisabledTooltip';

export interface ButtonProps extends MantineButtonProps, ButtonWithDisabledTooltipProps {}

const _Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    const theme = useMantineTheme();
    return (
        <ButtonWithDisabledTooltip
            component={MantineButton}
            ref={ref}
            disabledHoverColor={theme.colors.gray[2]}
            {...props}
        />
    );
});

export const Button = createPolymorphicComponent<
    'button',
    ButtonProps,
    {Group: typeof MantineButton.Group; DisabledTooltip: typeof ButtonWithDisabledTooltip}
>(_Button);

Button.DisabledTooltip = ButtonWithDisabledTooltip;
