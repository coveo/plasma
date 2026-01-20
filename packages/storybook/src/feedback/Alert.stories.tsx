import {Alert} from '@coveord/plasma-mantine/components/Alert';
import type {Meta, StoryObj} from '@storybook/react-vite';

const meta: Meta<typeof Alert> = {
    title: '@components/feedback/Alert',
    id: 'Alert',
    component: Alert,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        variant: {
            control: 'select',
            options: ['Advice', 'Critical', 'Information', 'Warning'],
            table: {
                defaultValue: {summary: 'Alert.Information'},
            },
        },
        title: {
            control: 'text',
            table: {
                defaultValue: {summary: ''},
                type: {summary: 'string'},
            },
        },
        withCloseButton: {
            control: 'boolean',
            table: {
                defaultValue: {summary: true},
                type: {summary: 'boolean'},
            },
        },
        content: {
            control: 'text',
            description: 'Alert content',
            table: {
                defaultValue: {summary: ''},
                type: {summary: 'ReactNode'},
            },
        },
    },
    args: {
        variant: 'Advice',
        title: 'Alert title',
        withCloseButton: true,
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
};
export default meta;
type Story = StoryObj<typeof Alert>;

export const Demo: Story = {
    render: ({title, withCloseButton, variant, content}: any) => {
        const AlertComponent = Alert[variant as keyof typeof Alert] as React.ComponentType<any>;
        return (
            <AlertComponent title={title} withCloseButton={withCloseButton}>
                {content}
            </AlertComponent>
        );
    },
};
