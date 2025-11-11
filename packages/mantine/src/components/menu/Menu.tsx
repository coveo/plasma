import {Menu as MantineMenu, MenuItemProps as MantineMenuItemProps} from '@mantine/core';
import {forwardRef} from 'react';

import {createPolymorphicComponent} from '../../utils/createPolymorphicComponent.js';
import {overrideComponent} from '../../utils/overrideComponent.js';
import {ButtonWithDisabledTooltip, ButtonWithDisabledTooltipProps} from '../button/ButtonWithDisabledTooltip.js';

export interface MenuItemProps extends MantineMenuItemProps, ButtonWithDisabledTooltipProps {}

const _MenuItem = forwardRef<HTMLButtonElement, MenuItemProps>(
    ({disabledTooltip, disabled, disabledTooltipProps, ...others}, ref) => (
        <ButtonWithDisabledTooltip
            disabled={disabled}
            disabledTooltip={disabledTooltip}
            disabledTooltipProps={disabledTooltipProps}
        >
            <MantineMenu.Item
                ref={ref}
                disabled={disabled}
                data-disabled={disabled}
                {...others}
                {...(disabled && (others as any).href ? {href: undefined} : {})}
            />
        </ButtonWithDisabledTooltip>
    ),
);

const MenuItem = createPolymorphicComponent<'button', MenuItemProps>(_MenuItem);

export const Menu = overrideComponent(MantineMenu, {
    displayName: '@coveord/plasma-mantine/Menu',
    Item: MenuItem,
});
