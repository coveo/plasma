import {Box, Tooltip, TooltipProps} from '@mantine/core';
import {ReactNode, forwardRef} from 'react';

import {createPolymorphicComponent} from '../../utils/index.js';

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
                <Box
                    ref={ref}
                    style={{'&:hover': {cursor: 'not-allowed'}, width: fullWidth && '100%'}}
                    display="inline-block"
                    {...others}
                >
                    {children}
                </Box>
            </Tooltip>
        ) : (
            <>{children}</>
        ),
);

export const ButtonWithDisabledTooltip = createPolymorphicComponent<'div', ButtonWithDisabledTooltipProps>(
    _ButtonWithDisabledTooltip,
);
