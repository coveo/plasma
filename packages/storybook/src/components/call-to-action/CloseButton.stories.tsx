import {CloseButton} from '@coveord/plasma-mantine';
import type {Meta, StoryObj} from '@storybook/react-vite';

interface CloseButtonStoryArgs {
    size: 'sm' | 'md';
}

const meta: Meta<CloseButtonStoryArgs> = {
    title: '@components/Call to action/CloseButton',
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
            description: 'Sets the width and height of the close button.',
            table: {
                type: {summary: "'sm' | 'md'"},
                defaultValue: {summary: "'md'"},
            },
        },
    },
};
export default meta;
type Story = StoryObj<CloseButtonStoryArgs>;

export const Demo: Story = {
    render: (args) => <CloseButton aria-label="Close" size={args.size} />,
};
