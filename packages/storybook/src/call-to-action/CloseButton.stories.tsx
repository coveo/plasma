import {CloseButton} from '@coveord/plasma-mantine/components/CloseButton';
import type {Meta, StoryObj} from '@storybook/react-vite';

const meta: Meta<typeof CloseButton> = {
    title: '@components/call-to-action/CloseButton',
    id: 'CloseButton',
    component: CloseButton,
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
type Story = StoryObj<typeof CloseButton>;

export const Demo: Story = {
    render: (props: {size: 'sm' | 'md'}) => <CloseButton size={props.size} />,
};
