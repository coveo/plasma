import {
    Menu as MantineMenu,
    MenuItemProps as MantineMenuItemProps,
    useComputedColorScheme,
    useMantineTheme,
} from '@mantine/core';
import {forwardRef} from 'react';

import {createPolymorphicComponent} from '../../utils/createPolymorphicComponent.js';
import {overrideComponent} from '../../utils/overrideComponent.js';
import {ButtonWithDisabledTooltip, ButtonWithDisabledTooltipProps} from '../Button/ButtonWithDisabledTooltip.js';

export interface MenuItemProps extends MantineMenuItemProps, ButtonWithDisabledTooltipProps {}

const THEME_COLOR_NAME = /^[a-z]+$/;

const _MenuItem = forwardRef<HTMLButtonElement, MenuItemProps>(
    ({disabledTooltip, disabled, disabledTooltipProps, color, ...others}, ref) => {
        const theme = useMantineTheme();
        const colorScheme = useComputedColorScheme('light');
        // Mantine hardcodes shade 6 for theme colors without a shade, which ignores the Plasma primaryShade
        const primaryShade =
            typeof theme.primaryShade === 'number' ? theme.primaryShade : theme.primaryShade[colorScheme];
        const resolvedColor = color && THEME_COLOR_NAME.test(color) ? `${color}.${primaryShade}` : color;

        return (
            <ButtonWithDisabledTooltip
                disabled={disabled}
                disabledTooltip={disabledTooltip}
                disabledTooltipProps={disabledTooltipProps}
            >
                <MantineMenu.Item
                    ref={ref}
                    color={resolvedColor}
                    disabled={disabled}
                    data-disabled={disabled}
                    {...others}
                    {...(disabled && (others as any).href ? {href: undefined} : {})}
                />
            </ButtonWithDisabledTooltip>
        );
    },
);

const MenuItem = createPolymorphicComponent<'button', MenuItemProps>(_MenuItem);

export const Menu = overrideComponent(MantineMenu, {
    displayName: '@coveord/plasma-mantine/Menu',
    Item: MenuItem,
});
