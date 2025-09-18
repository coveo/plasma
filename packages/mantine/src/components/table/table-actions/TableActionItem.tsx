import {CompoundStylesApiProps, PolymorphicFactory, polymorphicFactory, useProps} from '@mantine/core';
import {ReactNode} from 'react';
import {Button, ButtonProps} from '../../button/index.js';
import {useTableContext} from '../TableContext.js';
import {useTableActionContext} from './TableActionContext.js';
import {Menu, MenuItemProps} from '../../menu/index.js';

export type TableActionItemStylesNames = 'actionItemRoot';

export interface TableActionItemProps
    extends Omit<ButtonProps, 'classNames' | 'styles' | 'vars' | 'variant' | 'leftSection' | 'rightSection'>,
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

const defaultProps: Partial<TableActionItemProps> = {};

export const TableActionItem = polymorphicFactory<TableActionItemFactory>(
    (props: TableActionItemProps & {component?: any}, ref) => {
        const {getStyles} = useTableContext();
        const {primary} = useTableActionContext();
        const {
            classNames,
            className,
            style,
            styles,
            vars: _vars,
            children,
            component,
            ...others
        } = useProps('PlasmaTableActionItem', defaultProps, props);

        if (primary) {
            return (
                <Button.Quaternary
                    component={component}
                    ref={ref}
                    {...others}
                    {...getStyles('actionItemRoot', {className, style, classNames, styles})}
                >
                    {children}
                </Button.Quaternary>
            );
        }

        return (
            <Menu.Item
                component={component}
                ref={ref}
                {...others}
                {...getStyles('actionItemRoot', {className, style, classNames, styles})}
            >
                {children}
            </Menu.Item>
        );
    },
);
