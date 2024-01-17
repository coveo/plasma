import {ActionIcon as MantineActionIcon, type ActionIconProps as MantineActionIconProps} from '@mantine/core';
import {MouseEventHandler, forwardRef} from 'react';

import {useLoadingHandler} from '../../hooks';
import {createPolymorphicComponent} from '../../utils';
import {ButtonWithDisabledTooltip, ButtonWithDisabledTooltipProps} from '../button/ButtonWithDisabledTooltip';

export interface ActionIconProps extends MantineActionIconProps, ButtonWithDisabledTooltipProps {
    /* Handler executed on click */
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

const _ActionIcon = forwardRef<HTMLButtonElement, ActionIconProps>(
    ({disabledTooltip, disabled, disabledTooltipProps, loading, onClick, ...others}, ref) => {
        const {isLoading, handleClick} = useLoadingHandler(onClick);
        return (
            <ButtonWithDisabledTooltip
                disabled={disabled}
                disabledTooltip={disabledTooltip}
                disabledTooltipProps={disabledTooltipProps}
                fullWidth={others.fullWidth}
            >
                <MantineActionIcon
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

export const ActionIcon = createPolymorphicComponent<
    'button',
    ActionIconProps,
    {Group: typeof MantineActionIcon.Group}
>(_ActionIcon);
ActionIcon.Group = MantineActionIcon.Group;
