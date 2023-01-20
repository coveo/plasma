import {Menu as MantineMenu, MenuItemProps as MantineMenuItemProps} from '@mantine/core';
import {forwardRef} from 'react';

import {createPolymorphicComponent, overrideComponent} from '../../utils';
import {Button, ButtonWithDisabledTooltipProps} from '../button';

export interface MenuItemProps extends MantineMenuItemProps, ButtonWithDisabledTooltipProps {}

const _MenuItem = forwardRef<HTMLButtonElement, MenuItemProps>((props, ref) => (
    <Button.DisabledTooltip component={MantineMenu.Item} ref={ref} {...props} />
));

const MenuItem = createPolymorphicComponent<'button', MenuItemProps>(_MenuItem);

export const Menu = overrideComponent(MantineMenu, {
    displayName: '@coveord/plasma-mantine/Menu',
    Item: MenuItem,
});
