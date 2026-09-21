import {Kbd} from '@coveord/plasma-mantine';
import type {Meta, StoryObj} from '@storybook/react-vite';

const meta: Meta<typeof Kbd> = {
    title: '@components/Typography/Kbd',
    id: 'Kbd',
    component: Kbd,
    parameters: {
        layout: 'centered',
    },
    args: {
        children: '⌘',
    },
    argTypes: {
        children: {
            control: 'text',
            description: 'Sets the key name or symbol.',
            table: {
                type: {summary: 'ReactNode'},
                defaultValue: {summary: 'undefined'},
            },
        },
    },
};
export default meta;
type Story = StoryObj<typeof Kbd>;

export const Demo: Story = {
    render: ({children}) => <Kbd>{children}</Kbd>,
};
