import {StatusToken} from '@coveord/plasma-mantine/components/StatusToken';
import {Meta, StoryObj} from '@storybook/react-vite';

const meta: Meta<typeof StatusToken> = {
    title: '@components/feedback/StatusToken',
    id: 'StatusToken',
    component: StatusToken,
    parameters: {
        layout: 'centered',
    },
};
export default meta;
type Story = StoryObj<typeof StatusToken>;

export const Demo: Story = {
    args: {
        variant: 'success',
        size: 'lg',
    },
    argTypes: {
        variant: {
            control: 'select',
            options: ['success', 'caution', 'error', 'disabled', 'waiting', 'edited', 'new'],
        },
        size: {
            control: 'select',
            options: ['sm', 'lg'],
            table: {defaultValue: {summary: 'lg'}},
        },
    },
    render: (args) => <StatusToken {...args} />,
};
