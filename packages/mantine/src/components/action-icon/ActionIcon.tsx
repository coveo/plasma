import {
    ActionIcon as MantineActionIcon,
    ActionIconCssVariables,
    type ActionIconGroup,
    type ActionIconProps as MantineActionIconProps,
    ActionIconStylesNames,
    ActionIconVariant,
    Factory,
    polymorphicFactory,
} from '@mantine/core';
import {MouseEventHandler} from 'react';
import {useClickWithLoading} from '../../hooks/useClickWithLoading';
import {ButtonWithDisabledTooltip, ButtonWithDisabledTooltipProps} from '../button/ButtonWithDisabledTooltip';

export interface ActionIconProps extends MantineActionIconProps, ButtonWithDisabledTooltipProps {
    /* Handler executed on click */
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

type ActionIconOverloadFactory = Factory<{
    props: ActionIconProps;
    defaultRef: HTMLButtonElement;
    defaultComponent: 'button';
    stylesNames: ActionIconStylesNames;
    vars: ActionIconCssVariables;
    variant: ActionIconVariant;
    staticComponents: {
        Group: typeof ActionIconGroup;
    };
}>;

export const ActionIcon = polymorphicFactory<ActionIconOverloadFactory>(
    ({disabledTooltip, disabled, disabledTooltipProps, loading, onClick, ...others}, ref) => {
        const {isLoading, handleClick} = useClickWithLoading(onClick);
        return (
            <ButtonWithDisabledTooltip
                disabled={disabled}
                disabledTooltip={disabledTooltip}
                disabledTooltipProps={disabledTooltipProps}
                fullWidth={others.fullWidth}
            >
                <MantineActionIcon
                    loaderProps={{type: 'oval'}}
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
ActionIcon.Group = MantineActionIcon.Group;
