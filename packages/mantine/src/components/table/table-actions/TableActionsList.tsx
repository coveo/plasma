import {MoreSize16Px} from '@coveord/plasma-react-icons';
import {
    ActionIcon,
    Button,
    CompoundStylesApiProps,
    ExtendComponent,
    Factory,
    Menu,
    MenuProps,
    Tooltip,
    useProps,
} from '@mantine/core';
import {Children, Fragment, MouseEventHandler, ReactElement, ReactNode, useState} from 'react';
import {InlineConfirm} from '../../inline-confirm';
import {useTableContext} from '../TableContext';

export type TableActionsListStylesNames = 'actionsTarget' | 'actionsDropdown' | 'actionsTooltip';

export interface TableActionsListProps
    extends Omit<MenuProps, 'classNames' | 'styles' | 'vars' | 'variant'>,
        CompoundStylesApiProps<TableActionsListFactory> {
    actions: ReactNode;
    /**
     * Label for the more menu
     * @default 'More' when variant is 'split', 'Actions' when variant is 'combined'
     */
    label?: string;
    icon?: ReactNode;
}

type TableActionsListFactory = Factory<{
    props: TableActionsListProps;
    ref: HTMLDivElement;
    stylesNames: TableActionsListStylesNames;
    compound: true;
    variant: 'split' | 'combined';
}>;

const defaultProps: Partial<TableActionsListProps> = {
    label: 'More',
    icon: <MoreSize16Px height={16} />,
};

export const TableActionsList = (props: TableActionsListProps) => {
    const {getStyles} = useTableContext();
    const {
        actions,
        icon,
        label,
        classNames,
        styles,
        vars: _vars,
        variant,
        ...others
    } = useProps('PlasmaTableActionsListColumn', defaultProps, props);
    const [opened, setOpened] = useState(false);

    const onClick: MouseEventHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setOpened((prevState) => !prevState);
    };
    const onChange = (newOpened: boolean) => {
        if (!newOpened) {
            setOpened(false);
        }
    };

    let childrenArray = Children.toArray(actions) as ReactElement[];
    if (childrenArray.length === 1 && childrenArray[0].type === Fragment) {
        childrenArray = Children.toArray(childrenArray[0].props.children) as ReactElement[];
    }

    if (variant === 'split') {
        const primaryActions = childrenArray.filter(
            (child) => child.props.primary || child.type === InlineConfirm.Prompt,
        );
        const secondaryActions = childrenArray.filter(
            (child) => !child.props.primary && child.type !== InlineConfirm.Prompt,
        );

        return (
            <InlineConfirm>
                {primaryActions}
                {secondaryActions.length > 0 ? (
                    <Menu withinPortal={false} {...others}>
                        <Menu.Target>
                            <Button
                                {...getStyles('actionsTarget', {styles, classNames})}
                                variant="subtle"
                                leftSection={icon}
                            >
                                {label}
                            </Button>
                        </Menu.Target>
                        <Menu.Dropdown {...getStyles('actionsDropdown', {styles, classNames})}>
                            {secondaryActions}
                        </Menu.Dropdown>
                    </Menu>
                ) : null}
            </InlineConfirm>
        );
    }
    const prompts = childrenArray.filter((child) => child.type === InlineConfirm.Prompt);
    const menuItems = Children.map(childrenArray, (child) => {
        if (child.type === InlineConfirm.Prompt) {
            return null;
        }
        const {primary, ...childProps} = child.props;
        return primary ? <Menu.Item {...childProps} /> : child;
    });
    return (
        <InlineConfirm>
            {prompts}
            <Menu opened={opened} onChange={onChange} {...others}>
                <Menu.Target>
                    <Tooltip label={label} {...getStyles('actionsTooltip', {styles, classNames})}>
                        <ActionIcon
                            onClick={onClick}
                            variant="subtle"
                            {...getStyles('actionsTarget', {styles, classNames})}
                        >
                            {icon}
                        </ActionIcon>
                    </Tooltip>
                </Menu.Target>
                <Menu.Dropdown {...getStyles('actionsDropdown', {styles, classNames})}>{menuItems}</Menu.Dropdown>
            </Menu>
        </InlineConfirm>
    );
};

TableActionsList.extend = (input: ExtendComponent<TableActionsListFactory>) => input;
