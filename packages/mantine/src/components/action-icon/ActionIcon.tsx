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
import {useClickWithLoading} from '../../hooks/useClickWithLoading.js';
import {ButtonWithDisabledTooltip, ButtonWithDisabledTooltipProps} from '../button/ButtonWithDisabledTooltip.js';

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
        Primary: typeof ActionIconPrimary;
        Secondary: typeof ActionIconSecondary;
        Tertiary: typeof ActionIconTertiary;
        Quaternary: typeof ActionIconQuaternary;
        DestructivePrimary: typeof ActionIconDestructive;
        DestructiveSecondary: typeof ActionIconDestructiveSecondary;
        DestructiveTertiary: typeof ActionIconDestructiveTertiary;
        DestructiveQuaternary: typeof ActionIconDestructiveQuaternary;
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

const ActionIconPrimary = ActionIcon.withProps({
    variant: 'filled',
});
const ActionIconSecondary = ActionIcon.withProps({
    variant: 'light',
    vars: () => ({root: {'--ai-color': 'var(--mantine-primary-color-filled)'}}),
});
const ActionIconTertiary = ActionIcon.withProps({
    variant: 'default',
    vars: () => ({root: {'--ai-color': 'var(--mantine-primary-color-filled)'}}),
});
const ActionIconQuaternary = ActionIcon.withProps({
    variant: 'subtle',
    vars: () => ({root: {'--ai-color': 'var(--mantine-primary-color-filled)'}}),
});

const ActionIconDestructive = ActionIcon.withProps({variant: 'filled', color: 'var(--mantine-color-error)'});
const ActionIconDestructiveSecondary = ActionIcon.withProps({variant: 'light', color: 'var(--mantine-color-error)'});
const ActionIconDestructiveTertiary = ActionIcon.withProps({
    variant: 'default',
    vars: () => ({root: {'--ai-color': 'var(--mantine-color-error)'}}),
});
const ActionIconDestructiveQuaternary = ActionIcon.withProps({variant: 'subtle', color: 'var(--mantine-color-error)'});

ActionIcon.Group = MantineActionIcon.Group;
ActionIcon.Primary = ActionIconPrimary;
ActionIcon.Secondary = ActionIconSecondary;
ActionIcon.Tertiary = ActionIconTertiary;
ActionIcon.Quaternary = ActionIconQuaternary;
ActionIcon.DestructivePrimary = ActionIconDestructive;
ActionIcon.DestructiveSecondary = ActionIconDestructiveSecondary;
ActionIcon.DestructiveTertiary = ActionIconDestructiveTertiary;
ActionIcon.DestructiveQuaternary = ActionIconDestructiveQuaternary;
