import {MoreSize16Px} from '@coveord/plasma-react-icons';
import {
    Box,
    CompoundStylesApiProps,
    CSSProperties,
    ExtendComponent,
    Factory,
    Menu,
    MenuProps,
    Tooltip,
    useProps,
} from '@mantine/core';
import {MouseEventHandler, ReactNode, useState} from 'react';
import {ActionIcon} from '../../action-icon';
import {Button} from '../../button';
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

interface ActionsDict {
    $$primary: TableAction[];
    $$confirmPrompt: TableAction[];
    secondary: Record<string, Array<TableAction['component']>>;
}

interface ActionGroup {
    name: string;
    actions: ReactNode[];
}

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

    const actionsGroups: ActionsDict = actions.reduce<ActionsDict>(
        (acc, action) => {
            if (action.group === '$$primary') {
                acc.$$primary.push(action);
            } else if (action.group === '$$confirmPrompt') {
                acc.$$confirmPrompt.push(action);
            } else {
                if (acc.secondary[action.group]) {
                    acc.secondary[action.group].push(action.component);
                } else {
                    acc.secondary[action.group] = [action.component];
                }
            }
            return acc;
        },
        {$$primary: [], $$confirmPrompt: [], secondary: {}},
    );

    const primaryActions = actionsGroups.$$primary.map((action) => action.component);
    const confirmPrompts = actionsGroups.$$confirmPrompt.map((confirmPromptAction) => confirmPromptAction.component);
    const secondaryActionGroups = Object.entries(actionsGroups.secondary).map(
        ([group, groupActions]): ActionGroup => ({
            name: group,
            actions: groupActions,
        }),
    );

    if (variant === 'split') {
        return (
            <InlineConfirm>
                {confirmPrompts}
                <TableActionProvider value={{primary: true}}>{primaryActions}</TableActionProvider>
                {secondaryActionGroups.length > 0 ? (
                    <TableActionProvider value={{primary: false}}>
                        <Menu withinPortal={false} {...others} keepMounted>
                            <Menu.Target>
                                <Button.Quaternary
                                    {...getStyles('actionsTarget', {styles, classNames})}
                                    leftSection={icon}
                                >
                                    {label}
                                </Button.Quaternary>
                            </Menu.Target>
                            <Menu.Dropdown {...getStyles('actionsDropdown', {styles, classNames})}>
                                <ActionsGroupsMenuItems
                                    classNames={classNames}
                                    styles={styles}
                                    actionGroups={secondaryActionGroups}
                                />
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
                <Menu opened={opened} onChange={onChange} {...others} keepMounted>
                    <Menu.Target>
                        <Tooltip label={label} {...getStyles('actionsTooltip', {styles, classNames})}>
                            <ActionIcon.Quaternary
                                {...getStyles('actionsTarget', {styles, classNames})}
                                onClick={onClick}
                            >
                                {icon}
                            </ActionIcon.Quaternary>
                        </Tooltip>
                    </Menu.Target>
                    <Menu.Dropdown {...getStyles('actionsDropdown', {styles, classNames})}>
                        <ActionsGroupsMenuItems
                            classNames={classNames}
                            styles={styles}
                            actionGroups={
                                primaryActions.length > 0
                                    ? [{name: primaryGroupLabel, actions: primaryActions}, ...secondaryActionGroups]
                                    : secondaryActionGroups
                            }
                        />
                    </Menu.Dropdown>
                </Menu>
            </TableActionProvider>
        </InlineConfirm>
    );
};

interface ActionsGroupsMenuItemsProps {
    styles: Partial<Record<TableActionsListStylesNames, CSSProperties>>;
    classNames: Partial<Record<TableActionsListStylesNames, string>>;
    actionGroups: ActionGroup[];
}

const ActionsGroupsMenuItems = ({styles, classNames, actionGroups}: ActionsGroupsMenuItemsProps) => {
    const {getStyles} = useTableContext();
    return actionGroups.map(({name, actions}, index) => (
        <Box key={name} {...getStyles('actionsGroup', {styles, classNames})}>
            {actionGroups.length > 1 ? (
                <Menu.Label {...getStyles('actionsGroupLabel', {styles, classNames})}>{name}</Menu.Label>
            ) : null}
            <Box {...getStyles('actionsGroupItems', {styles, classNames})}>{actions}</Box>
            {index < actionGroups.length - 1 ? (
                <Menu.Divider {...getStyles('actionsGroupDivider', {styles, classNames})} />
            ) : null}
        </Box>
    ));
};

TableActionsList.extend = (input: ExtendComponent<TableActionsListFactory>) => input;
