import {Loader} from '@coveord/plasma-mantine/components/Loader';
import {MantineSize} from '@mantine/core';
import type {Meta, StoryObj} from '@storybook/react-vite';

const meta: Meta<typeof Loader> = {
    title: '@components/feedback/Loader',
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
    tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Loader>;

const Content = ({size}: {size: number | MantineSize | (string & {})}) => <Loader size={size} />;
Content.displayName = 'Loader';

export const Demo: Story = {
    render: ({size}) => <Content size={size === 'md' ? undefined : size} />,
};
