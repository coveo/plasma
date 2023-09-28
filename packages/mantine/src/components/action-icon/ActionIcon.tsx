import {ActionIcon as MantineActionIcon, type ActionIconProps as MantineActionIconProps} from '@mantine/core';
import {forwardRef, MouseEvent, MouseEventHandler, useState} from 'react';

import {createPolymorphicComponent} from '../../utils';
import {ButtonWithDisabledTooltip, ButtonWithDisabledTooltipProps} from '../button/ButtonWithDisabledTooltip';

export interface ActionIconProps extends MantineActionIconProps, ButtonWithDisabledTooltipProps {
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
