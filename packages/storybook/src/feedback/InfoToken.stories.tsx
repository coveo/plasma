import {InfoToken} from '@coveord/plasma-mantine/components/InfoToken';
import type {Meta, StoryObj} from '@storybook/react-vite';

const meta: Meta<typeof InfoToken> = {
    title: '@components/feedback/InfoToken',
    component: InfoToken,
    parameters: {
        layout: 'centered',
    },
    args: {
        variant: 'Information',
        size: 'xs',
    },
    argTypes: {
        variant: {
            control: 'select',
            options: ['Information', 'Advice', 'Warning', 'Error', 'Question'],
            table: {
                defaultValue: {summary: 'Information'},
            },
        },
        size: {
            control: 'select',
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
            table: {
                defaultValue: {summary: 'xs'},
                type: {summary: 'sm | lg'},
            },
        },
    },
};
export default meta;
type Story = StoryObj<typeof InfoToken>;

export const Demo: Story = {
    render: ({variant, ...props}: any) => {
        const Component = (InfoToken as any)[variant];
        return <Component {...props} />;
    },
};
