import {BoxProps, CompoundStylesApiProps, Menu, PolymorphicFactory, polymorphicFactory, useProps} from '@mantine/core';
import {ReactNode} from 'react';
import {Button} from '../../button';
import {useTableContext} from '../TableContext';

export type TableActionItemStylesNames = 'actionItemRoot';

export interface TableActionItemProps extends BoxProps, CompoundStylesApiProps<TableActionItemFactory> {
    /**
     * Action label
     */
    children: ReactNode;
    /**
     * Content to put on the left of the label. Usually used to render an icon
     */
    leftSection: ReactNode;
    /**
     * Whether action is primary. Primary items are visible outside the more menu
     *
     * @default false
     */
    primary?: boolean;

    /**
     * Section displayed on the right side of the label
     */
    rightSection?: ReactNode;

    /**
     * Disables action
     */
    disabled?: boolean;
}

type TableActionItemFactory = PolymorphicFactory<{
    props: TableActionItemProps;
    defaultRef: HTMLButtonElement;
    defaultComponent: 'button';
    stylesNames: TableActionItemStylesNames;
    compound: true;
}>;

const defaultProps: Partial<TableActionItemProps> = {
    primary: false,
};

export const TableActionItem = polymorphicFactory<TableActionItemFactory>(
    (props: TableActionItemProps & {component?: any}, ref) => {
        const {getStyles} = useTableContext();
        const {
            classNames,
            className,
            style,
            styles,
            vars: _vars,
            children,
            primary,
            component,
            ...others
        } = useProps('PlasmaTableActionItem', defaultProps, props);

        if (primary) {
            return (
                <Button
                    component={component}
                    ref={ref}
                    variant="subtle"
                    {...others}
                    {...getStyles('actionItemRoot', {className, style, classNames, styles})}
                >
                    {children}
                </Button>
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