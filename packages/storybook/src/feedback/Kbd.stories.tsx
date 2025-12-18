import {Kbd} from '@coveord/plasma-mantine/components/Kbd';
import type {Meta, StoryObj} from '@storybook/react-vite';

const meta: Meta<typeof Kbd> = {
    title: '@components/feedback/Kbd',
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
    tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Kbd>;

const Content = ({children}: {children: React.ReactNode}) => <Kbd>{children}</Kbd>;
Content.displayName = 'Kbd';

export const Demo: Story = {
    render: ({children}) => <Content>{children}</Content>,
};
