import {Loader} from '@coveord/plasma-mantine/components/Loader';
import type {Meta, StoryObj} from '@storybook/react-vite';

const meta: Meta<typeof Loader> = {
    title: '@components/feedback/Loader',
    id: 'Loader',
    component: Loader,
    parameters: {
        layout: 'centered',
    },
    args: {
        size: 'md',
    },
    argTypes: {
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },
    },
};
export default meta;
type Story = StoryObj<typeof Loader>;

export const Demo: Story = {
    render: ({size}) => <Loader size={size === 'md' ? undefined : size} />,
};
