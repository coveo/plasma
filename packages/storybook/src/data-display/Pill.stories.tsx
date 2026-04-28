import {Pill} from '@coveord/plasma-mantine/components/Pill';
import type {Meta, StoryObj} from '@storybook/react-vite';

const meta: Meta<typeof Pill> = {
    title: '@components/data-display/Pill',
    id: 'Pill',
    component: Pill,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        children: {
            control: 'text',
            description: 'Pill value',
        },
        withRemoveButton: {
            control: 'boolean',
            description: 'Controls visibility of the remove button',
        },
        size: {
            control: 'select',
            options: ['sm', 'md'],
            description: 'Pill size',
        },
    },
    args: {
        size: 'sm',
        withRemoveButton: false,
        children: 'Item',
    },
};
export default meta;
type Story = StoryObj<typeof Pill>;

export const Demo: Story = {
    render: ({size, withRemoveButton, children}) => (
        <Pill size={size} withRemoveButton={withRemoveButton}>
            {children}
        </Pill>
    ),
};
