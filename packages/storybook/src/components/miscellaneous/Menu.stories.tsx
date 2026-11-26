import {Button, Menu, Text} from '@coveord/plasma-mantine';
import type {Meta, StoryObj} from '@storybook/react-vite';
import {Fragment, useState} from 'react';

const meta: Meta<typeof Menu> = {
    title: 'Components/Overlays/Menu',
    id: 'Menu',
    component: Menu,
    parameters: {
        layout: 'centered',
    },
};
export default meta;
type Story = StoryObj<typeof meta>;

interface MenuAction {
    label: string;
    color?: string;
    disabledTooltip?: string;
    children?: MenuAction[];
}

interface MenuGroup {
    label?: string;
    actions: MenuAction[];
}

const GROUPS: MenuGroup[] = [
    {
        label: 'Records',
        actions: [
            {label: 'Archive selected'},
            {label: 'Duplicate selected'},
            {label: 'Move selected'},
            {label: 'Tag selected'},
            {label: 'Share selected'},
            {label: 'Export selected', disabledTooltip: 'Select at least one record to export.'},
        ],
    },
    {actions: [{label: 'Open in', children: [{label: 'New tab'}, {label: 'New window'}]}]},
    {actions: [{label: 'Delete selected', color: 'red'}]},
];

const filterActions = (actions: MenuAction[], query: string): MenuAction[] =>
    actions.flatMap((action) => {
        if (action.label.toLowerCase().includes(query)) {
            return [action];
        }
        const children = action.children ? filterActions(action.children, query) : [];
        return children.length > 0 ? [{...action, children}] : [];
    });

const renderAction = ({label, color, disabledTooltip, children}: MenuAction) =>
    children ? (
        <Menu.Sub key={label}>
            <Menu.Sub.Target>
                <Menu.Sub.Item>{label}</Menu.Sub.Item>
            </Menu.Sub.Target>
            <Menu.Sub.Dropdown>{children.map(renderAction)}</Menu.Sub.Dropdown>
        </Menu.Sub>
    ) : (
        <Menu.Item key={label} color={color} disabled={!!disabledTooltip} disabledTooltip={disabledTooltip}>
            {label}
        </Menu.Item>
    );

const MenuDemo = () => {
    const [query, setQuery] = useState('');
    const normalizedQuery = query.toLowerCase().trim();
    const groups = GROUPS.map((group) => ({...group, actions: filterActions(group.actions, normalizedQuery)})).filter(
        (group) => group.actions.length > 0,
    );

    return (
        <Menu shadow="md" width={220}>
            <Menu.Target>
                <Button.Secondary>Menu</Button.Secondary>
            </Menu.Target>

            <Menu.Dropdown>
                <Menu.Search
                    placeholder="Search"
                    value={query}
                    onChange={(event) => setQuery(event.currentTarget.value)}
                />
                {groups.length > 0 ? (
                    groups.map((group, index) => (
                        <Fragment key={group.label ?? group.actions[0].label}>
                            {index > 0 ? <Menu.Divider /> : null}
                            {group.label ? <Menu.Label>{group.label}</Menu.Label> : null}
                            {group.actions.map(renderAction)}
                        </Fragment>
                    ))
                ) : (
                    <Text c="dimmed" size="sm" ta="center" py="xs">
                        Nothing found
                    </Text>
                )}
            </Menu.Dropdown>
        </Menu>
    );
};

export const Demo: Story = {
    name: 'Menu',
    render: () => <MenuDemo />,
};
