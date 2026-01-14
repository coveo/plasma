import {showNotification} from '@coveord/plasma-mantine';
import {Button} from '@coveord/plasma-mantine/components/Button';
import {CheckmarkSize24Px} from '@coveord/plasma-react-icons';
import type {Meta, StoryObj} from '@storybook/react-vite';
import React from 'react';

const meta: Meta<typeof Button> = {
    title: '@components/call-to-action/Button',
    id: 'Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        variant: {
            control: 'select',
            options: [
                'Primary',
                'Secondary',
                'Tertiary',
                'Quaternary',
                'DestructivePrimary',
                'DestructiveSecondary',
                'DestructiveTertiary',
                'DestructiveQuaternary',
            ],
            description: 'Button variant',
        },
        label: {
            control: 'text',
            description: 'Button label',
        },
        onClick: {
            action: 'clicked',
            description: 'Click handler',
        },
    },
    args: {
        variant: 'Primary',
        label: 'Button',
        onClick: () => showNotification({message: 'Button clicked', autoClose: false}),
    },
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Demo: Story = {
    render: ({label, variant, onClick}: any) => {
        const ButtonComponent = Button[variant as keyof typeof Button] as React.ComponentType<any>;
        return <ButtonComponent onClick={onClick}>{label}</ButtonComponent>;
    },
};

export const WithAsyncLoader: Story = {
    render: ({label, variant}: any) => {
        const ButtonComponent = Button[variant as keyof typeof Button] as React.ComponentType<any>;
        const [loading, setLoading] = React.useState(false);
        const somethingAsync = (ms: number) => new Promise((r) => setTimeout(r, ms));
        const promise = async () => {
            setLoading(true);
            await somethingAsync(3000);
            showNotification({
                title: 'Saved successfully',
                message: 'The save disabled was put in a loading state while it was waiting for the save to resolve.',
                autoClose: false,
                icon: <CheckmarkSize24Px height={24} />,
                color: 'success',
            });
            setLoading(false);
        };
        return (
            <ButtonComponent loading={loading} onClick={promise}>
                {label}
            </ButtonComponent>
        );
    },
};
