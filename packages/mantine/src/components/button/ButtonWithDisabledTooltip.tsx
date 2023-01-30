import {Box, Tooltip} from '@mantine/core';
import {Property} from 'csstype';
import {forwardRef, MouseEventHandler} from 'react';

import {createPolymorphicComponent} from '../../utils';

export interface ButtonWithDisabledTooltipProps {
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    /**
     * The tooltip message to display when disabled
     */
    disabledTooltip?: string;
    /**
     * The background color when disabled
     *
     * @default 'unset'
     */
    disabledHoverColor?: Property.BackgroundColor;
}

const _ButtonWithDisabledTooltip = forwardRef<HTMLButtonElement, ButtonWithDisabledTooltipProps>(
    ({disabledTooltip, disabled, onClick, disabledHoverColor: hoverColor = 'unset', ...others}, ref) =>
        disabledTooltip ? (
            <Tooltip label={disabledTooltip} disabled={!disabled}>
                <Box
                    component="button"
                    ref={ref}
                    {...(disabled ? {'data-disabled': true} : {})}
                    sx={(theme) => ({
                        '&[data-disabled]': {
                            pointerEvents: 'all',
                            color: theme.colors.gray[5],
                        },
                        '&[data-disabled]:hover': {
                            backgroundColor: hoverColor,
                            cursor: 'not-allowed',
                        },
                    })}
                    onClick={(event) => {
                        if (disabled) {
                            event.preventDefault();
                            event.stopPropagation();
                        } else {
                            onClick?.(event);
                        }
                    }}
                    {...others}
                />
            </Tooltip>
        ) : (
            <Box component="button" ref={ref} disabled={disabled} onClick={onClick} {...others} />
        )
);

export const ButtonWithDisabledTooltip = createPolymorphicComponent<'button', ButtonWithDisabledTooltipProps>(
    _ButtonWithDisabledTooltip
);
