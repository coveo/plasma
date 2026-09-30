import {CompoundStylesApiProps, PolymorphicFactory, polymorphicFactory, useProps} from '@mantine/core';
import {type ElementType, type ReactNode} from 'react';
import {Menu, type MenuItemProps} from '../../Menu/Menu.js';
import {useTableContext} from '../TableContext.js';
import {useTableActionContext} from './TableActionContext.js';

export type TableActionItemStylesNames = 'actionItemRoot';

export interface TableActionItemProps
    extends
        Omit<MenuItemProps, 'classNames' | 'styles' | 'vars' | 'variant'>,
        CompoundStylesApiProps<TableActionItemFactory> {
    /**
     * Action label
     */
    children: ReactNode;
    /**
     * @deprecated Icons are not rendered in table actions menus, this prop is ignored.
     */
    leftSection?: ReactNode;
    /**
     * Value used to match the action when searching in the actions menu.
     * Defaults to `children` when it is a string.
     */
    searchValue?: string;
}

export type TableActionItemFactory = PolymorphicFactory<{
    props: TableActionItemProps;
    defaultRef: HTMLButtonElement;
    defaultComponent: 'button';
    stylesNames: TableActionItemStylesNames;
    compound: true;
}>;

const defaultProps = {} satisfies Partial<TableActionItemProps>;

export const TableActionItem = polymorphicFactory<TableActionItemFactory>((allProps) => {
    const {ref, component, ...restProps} = allProps as typeof allProps & {component?: ElementType};
    const {getStyles} = useTableContext();
    const {destructive} = useTableActionContext();
    const {
        classNames,
        className,
        style,
        styles,
        vars: _vars,
        searchValue: _searchValue,
        leftSection: _leftSection,
        color,
        children,
        ...others
    } = useProps('PlasmaTableActionItem', defaultProps, restProps);

    return (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        <Menu.Item
            // component={component as any}
            ref={ref}
            {...others}
            color={destructive ? 'var(--mantine-color-error)' : color}
            {...getStyles('actionItemRoot', {className, style, classNames, styles})}
        >
            {children}
        </Menu.Item>
    );
});
