import {IconDots} from '@coveord/plasma-react-icons';
import {
    Box,
    CompoundStylesApiProps,
    CSSProperties,
    ExtendComponent,
    Factory,
    MantineThemeComponent,
    Menu,
    MenuProps,
    Tooltip,
    useProps,
} from '@mantine/core';
import {isValidElement, MouseEventHandler, ReactNode, useState} from 'react';
import {ActionIcon} from '../../ActionIcon/ActionIcon.js';
import {InlineConfirm} from '../../InlineConfirm/InlineConfirm.js';
import {TableAction} from '../Table.types.js';
import {useTableContext} from '../TableContext.js';
import {TableActionProvider} from './TableActionContext.js';

export type TableActionsListStylesNames =
    | 'actionsTarget'
    | 'actionsDropdown'
    | 'actionsTooltip'
    | 'actionsSearch'
    | 'actionsEmpty'
    | 'actionsGroup'
    | 'actionsGroupLabel'
    | 'actionsGroupDivider'
    | 'actionsGroupItems';

export interface TableActionsListProps
    extends
        Omit<MenuProps, 'classNames' | 'styles' | 'vars' | 'variant'>,
        CompoundStylesApiProps<TableActionsListFactory> {
    actions: TableAction[];
    /**
     * Label of the menu target, displayed in a tooltip and used as accessible name
     * @default 'Actions'
     */
    label?: string;
    /**
     * Label for the primary actions group, only displayed when there are other groups
     * @default ''
     */
    primaryGroupLabel?: string;
    /**
     * Icon of the menu target
     * @default <IconDots size={16} />
     */
    icon?: ReactNode;
    /**
     * A search input is displayed in the menu when the number of actions is greater than this value
     * @default 7
     */
    searchThreshold?: number;
    /**
     * Placeholder of the search input
     * @default 'Search actions'
     */
    searchPlaceholder?: string;
    /**
     * Message displayed when no action matches the search
     * @default 'No actions found'
     */
    nothingFoundLabel?: string;
}

type TableActionsListFactory = Factory<{
    props: TableActionsListProps;
    ref: HTMLDivElement;
    stylesNames: TableActionsListStylesNames;
    compound: true;
}>;

const defaultProps = {
    label: 'Actions',
    primaryGroupLabel: '',
    icon: <IconDots size={16} />,
    searchThreshold: 7,
    searchPlaceholder: 'Search actions',
    nothingFoundLabel: 'No actions found',
} satisfies Partial<TableActionsListProps>;

interface ActionGroup {
    id: string;
    label: string;
    actions: ReactNode[];
    destructive?: boolean;
}

const getActionSearchValue = (component: ReactNode): string => {
    if (!isValidElement<{searchValue?: string; children?: ReactNode}>(component)) {
        return '';
    }
    const {searchValue, children} = component.props;
    if (searchValue !== undefined) {
        return searchValue;
    }
    if (typeof children === 'string' || typeof children === 'number') {
        return String(children);
    }
    if (Array.isArray(children) && children.every((child) => typeof child === 'string' || typeof child === 'number')) {
        return children.join('');
    }
    return '';
};

const groupActions = (actions: TableAction[], primaryGroupLabel: string) => {
    const confirmPrompts: ReactNode[] = [];
    const primary: ReactNode[] = [];
    const destructive: ReactNode[] = [];
    const secondary: Record<string, ReactNode[]> = {};

    actions.forEach(({group, component}) => {
        if (!component) {
            return;
        }
        if (group === '$$confirmPrompt') {
            confirmPrompts.push(component);
        } else if (group === '$$primary') {
            primary.push(component);
        } else if (group === '$$destructive') {
            destructive.push(component);
        } else {
            secondary[group] = [...(secondary[group] ?? []), component];
        }
    });

    const groups: ActionGroup[] = Object.entries(secondary).map(([name, groupActions]) => ({
        id: name,
        label: name,
        actions: groupActions,
    }));
    if (primary.length > 0) {
        groups.unshift({id: '$$primary', label: primaryGroupLabel, actions: primary});
    }
    if (destructive.length > 0) {
        groups.push({id: '$$destructive', label: '', actions: destructive, destructive: true});
    }
    return {confirmPrompts, groups};
};

export function TableActionsList(props: TableActionsListProps) {
    const {getStyles} = useTableContext();
    const {
        actions,
        icon,
        label,
        primaryGroupLabel,
        searchThreshold,
        searchPlaceholder,
        nothingFoundLabel,
        classNames,
        styles,
        vars: _vars,
        opened: controlledOpened,
        onChange: onMenuChange,
        ...others
    } = useProps('PlasmaTableActionsListColumn', defaultProps, props);
    const [opened, setOpened] = useState(false);
    const [search, setSearch] = useState('');

    const {confirmPrompts, groups} = groupActions(actions, primaryGroupLabel);
    const actionsCount = groups.reduce((count, group) => count + group.actions.length, 0);

    if (actionsCount === 0 && confirmPrompts.length === 0) {
        return null;
    }

    const menuOpened = controlledOpened ?? opened;
    const searchable = actionsCount > searchThreshold;
    const query = search.trim().toLowerCase();
    const filteredGroups =
        searchable && query
            ? groups
                  .map((group) => ({
                      ...group,
                      actions: group.actions.filter((action) =>
                          getActionSearchValue(action).toLowerCase().includes(query),
                      ),
                  }))
                  .filter((group) => group.actions.length > 0)
            : groups;

    const onClick: MouseEventHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setOpened((prevState) => !prevState);
    };
    const stopPropagation: MouseEventHandler = (e) => e.stopPropagation();
    const onChange = (newOpened: boolean) => {
        if (!newOpened) {
            setOpened(false);
        }
        onMenuChange?.(newOpened);
    };

    return (
        <InlineConfirm>
            {confirmPrompts}
            {actionsCount > 0 ? (
                <Menu opened={menuOpened} onChange={onChange} {...others}>
                    <Menu.Target>
                        <Tooltip
                            label={label}
                            disabled={menuOpened}
                            {...getStyles('actionsTooltip', {styles, classNames})}
                        >
                            <ActionIcon.Quaternary
                                size="lg"
                                aria-label={label}
                                {...getStyles('actionsTarget', {styles, classNames})}
                                onClick={onClick}
                                onDoubleClick={stopPropagation}
                            >
                                {icon}
                            </ActionIcon.Quaternary>
                        </Tooltip>
                    </Menu.Target>
                    <Menu.Dropdown
                        {...getStyles('actionsDropdown', {styles, classNames})}
                        onClick={stopPropagation}
                        onDoubleClick={stopPropagation}
                    >
                        {searchable ? (
                            <Menu.Search
                                aria-label={searchPlaceholder}
                                placeholder={searchPlaceholder}
                                value={search}
                                onChange={(event) => setSearch(event.currentTarget.value)}
                                {...getStyles('actionsSearch', {styles, classNames})}
                            />
                        ) : null}
                        {filteredGroups.length > 0 ? (
                            <ActionsGroupsMenuItems
                                classNames={classNames}
                                styles={styles}
                                actionGroups={filteredGroups}
                            />
                        ) : (
                            <Menu.Label {...getStyles('actionsEmpty', {styles, classNames})}>
                                {nothingFoundLabel}
                            </Menu.Label>
                        )}
                    </Menu.Dropdown>
                </Menu>
            ) : null}
        </InlineConfirm>
    );
}

interface ActionsGroupsMenuItemsProps {
    styles?: Partial<Record<TableActionsListStylesNames, CSSProperties>>;
    classNames?: Partial<Record<TableActionsListStylesNames, string>>;
    actionGroups: ActionGroup[];
}

const ActionsGroupsMenuItems = ({styles = {}, classNames = {}, actionGroups}: ActionsGroupsMenuItemsProps) => {
    const {getStyles} = useTableContext();
    return actionGroups.map(({id, label, actions, destructive = false}, index) => (
        <Box key={id} {...getStyles('actionsGroup', {styles, classNames})}>
            {actionGroups.length > 1 && label ? (
                <Menu.Label {...getStyles('actionsGroupLabel', {styles, classNames})}>{label}</Menu.Label>
            ) : null}
            <TableActionProvider value={{destructive}}>
                <Box {...getStyles('actionsGroupItems', {styles, classNames})}>{actions}</Box>
            </TableActionProvider>
            {index < actionGroups.length - 1 ? (
                <Menu.Divider {...getStyles('actionsGroupDivider', {styles, classNames})} />
            ) : null}
        </Box>
    ));
};

TableActionsList.extend = (input: ExtendComponent<TableActionsListFactory>): MantineThemeComponent => input;
