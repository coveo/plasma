import {CompoundStylesApiProps, PolymorphicFactory, polymorphicFactory, useProps} from '@mantine/core';
import {type ElementType, type ReactNode} from 'react';
import {Button, type ButtonProps} from '../../Button/Button.js';
import {useTableContext} from '../TableContext.js';
import {useTableActionContext} from './TableActionContext.js';
import {Menu, type MenuItemProps} from '../../Menu/Menu.js';

export type TableActionItemStylesNames = 'actionItemRoot';

export interface TableActionItemProps
    extends
        Omit<ButtonProps, 'classNames' | 'styles' | 'vars' | 'variant' | 'leftSection' | 'rightSection'>,
        Omit<MenuItemProps, 'classNames' | 'styles' | 'vars' | 'variant' | 'leftSection' | 'disabled'>,
        CompoundStylesApiProps<TableActionItemFactory> {
    /**
     * Action label
     */
    children: ReactNode;
    /**
     * Content to put on the left of the label
     */
    leftSection?: ReactNode;
}

type TableActionItemFactory = PolymorphicFactory<{
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
    const {primary} = useTableActionContext();
    const {
        classNames,
        className,
        style,
        styles,
        vars: _vars,
        children,
        ...others
    } = useProps('PlasmaTableActionItem', defaultProps, restProps);

    if (primary) {
        return (
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            <Button.Quaternary
                component={component as any}
                ref={ref}
                {...others}
                {...getStyles('actionItemRoot', {className, style, classNames, styles})}
            >
                {children}
            </Button.Quaternary>
        );
    }

    return (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        <Menu.Item
            component={component as any}
            ref={ref}
            {...others}
            {...getStyles('actionItemRoot', {className, style, classNames, styles})}
        >
            {children}
        </Menu.Item>
    );
});
