import {MoreSize16Px} from '@coveord/plasma-react-icons';
import {
    ActionIcon,
    Box,
    Button,
    CompoundStylesApiProps,
    ExtendComponent,
    Factory,
    Menu,
    MenuProps,
    Tooltip,
    useProps,
} from '@mantine/core';
import {MouseEventHandler, ReactNode, useState} from 'react';
import {InlineConfirm} from '../../inline-confirm';
import {TableAction} from '../Table.types';
import {useTableContext} from '../TableContext';
import {TableActionProvider} from './TableActionContext';

export type TableActionsListStylesNames =
    | 'actionsTarget'
    | 'actionsDropdown'
    | 'actionsTooltip'
    | 'actionsGroup'
    | 'actionsGroupLabel'
    | 'actionsGroupDivider'
    | 'actionsGroupItems';

export interface TableActionsListProps
    extends Omit<MenuProps, 'classNames' | 'styles' | 'vars' | 'variant'>,
        CompoundStylesApiProps<TableActionsListFactory> {
    actions: TableAction[];
    /**
     * Label for the more menu
     * @default 'More' when variant is 'split', 'Actions' when variant is 'combined'
     */
    label?: string;
    /**
     * Label for the primary actions group when variant is 'combined'
     * @default ''
     */
    primaryGroupLabel?: string;
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
    primaryGroupLabel: '',
    icon: <MoreSize16Px height={16} />,
};

export const TableActionsList = (props: TableActionsListProps) => {
    const {getStyles} = useTableContext();
    const {
        actions,
        icon,
        label,
        primaryGroupLabel,
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

    const actionsGroups = actions.reduce<Record<'$$primary' | '$$confirmPrompt' | 'secondary', TableAction[]>>(
        (acc, action) => {
            if (action.group === '$$primary') {
                acc.$$primary.push(action);
            } else if (action.group === '$$confirmPrompt') {
                acc.$$confirmPrompt.push(action);
            } else {
                acc.secondary.push(action);
            }
            return acc;
        },
        {$$primary: [], $$confirmPrompt: [], secondary: []},
    );

    const primaryActions = actionsGroups.$$primary.map((action) => action.component);
    const confirmPrompts = actionsGroups.$$confirmPrompt.map((confirmPromptAction) => confirmPromptAction.component);

    let secondaryGroupCount = 0;
    const secondaryActions = actionsGroups.secondary.reduce<Record<string, ReactNode[]>>((acc, action) => {
        if (acc[action.group]) {
            acc[action.group].push(action.component);
            return acc;
        }
        secondaryGroupCount++;
        return {...acc, [action.group]: [action.component]};
    }, {});

    if (variant === 'split') {
        return (
            <InlineConfirm>
                {confirmPrompts}
                <TableActionProvider value={{primary: true}}>{primaryActions}</TableActionProvider>
                {actionsGroups.secondary.length > 0 ? (
                    <TableActionProvider value={{primary: false}}>
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
                                {Object.entries(secondaryActions).map(([group, groupActions], index, groups) => (
                                    <Box key={group} {...getStyles('actionsGroup', {styles, classNames})}>
                                        {secondaryGroupCount > 1 ? (
                                            <Menu.Label {...getStyles('actionsGroupLabel', {styles, classNames})}>
                                                {group}
                                            </Menu.Label>
                                        ) : null}
                                        <Box {...getStyles('actionsGroupItems', {styles, classNames})}>
                                            {groupActions}
                                        </Box>
                                        {index < groups.length - 1 ? (
                                            <Menu.Divider {...getStyles('actionsGroupDivider', {styles, classNames})} />
                                        ) : null}
                                    </Box>
                                ))}
                            </Menu.Dropdown>
                        </Menu>
                    </TableActionProvider>
                ) : null}
            </InlineConfirm>
        );
    }
    return (
        <InlineConfirm>
            {confirmPrompts}
            <TableActionProvider value={{primary: false}}>
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
                    <Menu.Dropdown {...getStyles('actionsDropdown', {styles, classNames})}>
                        {primaryGroupLabel && primaryActions.length > 0 ? (
                            <Menu.Label>{primaryGroupLabel}</Menu.Label>
                        ) : null}
                        {primaryActions}
                        {primaryActions.length > 0 ? <Menu.Divider key={'primary-actions-divider'} /> : null}
                        {Object.entries(secondaryActions).map(([group, groupActions], index, groups) => (
                            <Box key={group} {...getStyles('actionsGroup', {styles, classNames})}>
                                {secondaryGroupCount > 1 ? (
                                    <Menu.Label key={group} {...getStyles('actionsGroupLabel', {styles, classNames})}>
                                        {group}
                                    </Menu.Label>
                                ) : null}
                                <Box {...getStyles('actionsGroupItems', {styles, classNames})}>{groupActions}</Box>
                                {index < groups.length - 1 ? (
                                    <Menu.Divider
                                        key={group}
                                        {...getStyles('actionsGroupDivider', {styles, classNames})}
                                    />
                                ) : null}
                            </Box>
                        ))}
                    </Menu.Dropdown>
                </Menu>
            </TableActionProvider>
        </InlineConfirm>
    );
};

TableActionsList.extend = (input: ExtendComponent<TableActionsListFactory>) => input;
