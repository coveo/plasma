import {Menu as MantineMenu, MenuItemProps as MantineMenuItemProps} from '@mantine/core';
import {forwardRef} from 'react';

import {createPolymorphicComponent, overrideComponent} from '../../utils';
import {ButtonWithDisabledTooltipProps} from '../button';
import {ButtonWithDisabledTooltip} from '../button/ButtonWithDisabledTooltip';

export interface MenuItemProps extends MantineMenuItemProps, ButtonWithDisabledTooltipProps {}

const _MenuItem = forwardRef<HTMLButtonElement, MenuItemProps>(
    ({disabledTooltip, disabled, disabledTooltipProps, ...others}, ref) => (
        <ButtonWithDisabledTooltip
            disabled={disabled}
            disabledTooltip={disabledTooltip}
            disabledTooltipProps={disabledTooltipProps}
        >
            <MantineMenu.Item ref={ref} disabled={disabled} {...others} />
        </ButtonWithDisabledTooltip>
    )
);

const MenuItem = createPolymorphicComponent<'button', MenuItemProps>(_MenuItem);

export const Menu = overrideComponent(MantineMenu, {
    displayName: '@coveord/plasma-mantine/Menu',
    Item: MenuItem,
});
