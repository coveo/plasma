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
}

const _ButtonWithDisabledTooltip = forwardRef<HTMLDivElement, ButtonWithDisabledTooltipProps>(
    ({disabledTooltip, disabled, children, disabledTooltipProps, ...others}, ref) =>
        disabledTooltip ? (
            <Tooltip label={disabledTooltip} disabled={!disabled} {...disabledTooltipProps}>
                <Box ref={ref} sx={{'&:hover': {cursor: 'not-allowed'}}} {...others}>
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
