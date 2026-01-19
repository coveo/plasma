import {showNotification} from '@coveord/plasma-mantine';
import {Button} from '@coveord/plasma-mantine/components/Button';
import {IconHome2} from '@coveord/plasma-react-icons';
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
        disabled: {
            control: 'boolean',
            description: 'Whether the button is disabled',
            table: {type: {summary: 'boolean'}, defaultValue: {summary: 'false'}},
        },
        loading: {
            control: 'boolean',
            description: 'Whether to show async loading on click',
        },
        children: {
            control: 'text',
            description: 'Button content',
            table: {type: {summary: 'ReactNode'}},
        },
        onClick: {
            action: 'clicked',
            description: 'Click handler',
        },
        rightSection: {
            control: 'boolean',
            description: 'Right section content',
            table: {
                type: {summary: 'ReactNode'},
            },
        },
        leftSection: {
            control: 'boolean',
            description: 'Left section content',
            table: {
                type: {summary: 'ReactNode'},
            },
        },
    },
    args: {
        variant: 'Primary',
        children: 'Button',
        onClick: () => showNotification({message: 'Button clicked', autoClose: false}),
        loading: false,
        rightSection: false,
        leftSection: false,
        disabled: false,
    },
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Demo: Story = {
    render: ({children, variant, onClick, loading, rightSection, leftSection, disabled}: any) => {
        const ButtonComponent = Button[variant as keyof typeof Button] as React.ComponentType<any>;
        return (
            <ButtonComponent
                loading={loading}
                onClick={onClick}
                rightSection={rightSection ? <IconHome2 size={16} /> : undefined}
                leftSection={leftSection ? <IconHome2 size={16} /> : undefined}
                disabled={disabled}
            >
                {children}
            </ButtonComponent>
        );
    },
};
