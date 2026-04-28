import {Kbd} from '@coveord/plasma-mantine';
import type {Meta, StoryObj} from '@storybook/react-vite';

const meta: Meta<typeof Kbd> = {
    title: '@components/typography/Kbd',
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
            table: {
                defaultValue: {summary: ''},
            },
        },
    },
};
export default meta;
type Story = StoryObj<typeof Kbd>;

export const Demo: Story = {
    render: ({children}) => <Kbd>{children}</Kbd>,
};
