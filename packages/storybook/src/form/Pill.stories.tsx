import {Pill} from '@coveord/plasma-mantine/components/Pill';
import type {Meta, StoryObj} from '@storybook/react-vite';

const meta: Meta<typeof Pill> = {
    title: '@components/form/Pill',
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
    },
    args: {
        withRemoveButton: false,
        children: 'Item',
    },
};
export default meta;
type Story = StoryObj<typeof Pill>;

export const Default: Story = {
    render: ({withRemoveButton, children}) => <Pill withRemoveButton={withRemoveButton}>{children}</Pill>,
};
