import {Button, Menu} from '@coveord/plasma-mantine';
import type {Meta, StoryObj} from '@storybook/react-vite';

const meta: Meta<typeof Menu> = {
    title: '@components/Miscellaneous/Menu',
    id: 'Menu',
    component: Menu,
    parameters: {
        layout: 'centered',
    },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
    render: () => (
        <Menu shadow="md" width={220}>
            <Menu.Target>
                <Button.Secondary>Bulk actions</Button.Secondary>
            </Menu.Target>

            <Menu.Dropdown>
                <Menu.Label>Records</Menu.Label>
                <Menu.Item>Archive selected</Menu.Item>
                <Menu.Item disabled disabledTooltip="Select at least one record to export.">
                    Export selected
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item color="red">Delete selected</Menu.Item>
            </Menu.Dropdown>
        </Menu>
    ),
};
