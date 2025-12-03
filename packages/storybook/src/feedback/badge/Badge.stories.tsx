import {Badge} from '@coveord/plasma-mantine/components/Badge';
import type {Meta, StoryObj} from '@storybook/react-vite';

const meta: Meta<typeof Badge> = {
    title: '@components/feedback/Badge',
    component: Badge,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Badge>;

export const Primary: Story = {
    render: () => <Badge.Primary on="light">Primary</Badge.Primary>,
};

export const Secondary: Story = {
    render: () => <Badge.Secondary on="light">Secondary</Badge.Secondary>,
};

export const Warning: Story = {
    render: () => <Badge.Warning on="light">Warning</Badge.Warning>,
};

export const Success: Story = {
    render: () => <Badge.Success on="light">Success</Badge.Success>,
};

export const Critical: Story = {
    render: () => <Badge.Critical on="light">Critical</Badge.Critical>,
};

export const Disabled: Story = {
    render: () => <Badge.Disabled on="light">Disabled</Badge.Disabled>,
};
