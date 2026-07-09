import {CloseButton} from '@coveord/plasma-mantine/components/CloseButton';
import type {Meta, StoryObj} from '@storybook/react-vite';

interface CloseButtonStoryArgs {
    size: 'sm' | 'md';
}

const meta: Meta<CloseButtonStoryArgs> = {
    title: '@components/call-to-action/CloseButton',
    id: 'CloseButton',
    parameters: {
        layout: 'centered',
    },
    args: {
        size: 'md',
    },
    argTypes: {
        size: {
            control: 'select',
            options: ['sm', 'md'],
            description: 'Size of the CloseButton',
        },
    },
};
export default meta;
type Story = StoryObj<CloseButtonStoryArgs>;

export const Demo: Story = {
    render: (args) => <CloseButton size={args.size} />,
};
