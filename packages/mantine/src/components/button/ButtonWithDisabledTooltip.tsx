import {Box, Tooltip, TooltipProps} from '@mantine/core';
import {forwardRef, ReactNode} from 'react';

import {createPolymorphicComponent} from '../../utils';

export interface ButtonWithDisabledTooltipProps {
    /**
     * The tooltip message to display when disabled
     */
    disabledTooltip?: string;
    /**
     * Whether the button underneath the tooltip is disabled
     */
    disabled?: boolean;
    children?: ReactNode;
    /**
     * Additional tooltip props to set on the disabled button tooltip
     */
    disabledTooltipProps?: Omit<TooltipProps, 'disabled' | 'label' | 'children'>;
    /**
     * Sets button width to 100% of parent element
     */
    fullWidth?: boolean;
}

const _ButtonWithDisabledTooltip = forwardRef<HTMLDivElement, ButtonWithDisabledTooltipProps>(
    ({disabledTooltip, disabled, children, disabledTooltipProps, fullWidth, ...others}, ref) =>
        disabledTooltip ? (
            <Tooltip label={disabledTooltip} disabled={!disabled} {...disabledTooltipProps}>
                <Box ref={ref} sx={{'&:hover': {cursor: 'not-allowed'}, width: fullWidth && '100%'}} {...others}>
                    {children}
                </Box>
            </Tooltip>
        ) : (
            <>{children}</>
        )
);

export const ButtonWithDisabledTooltip = createPolymorphicComponent<'div', ButtonWithDisabledTooltipProps>(
    _ButtonWithDisabledTooltip
);
