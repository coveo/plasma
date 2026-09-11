import {showNotification} from '@coveord/plasma-mantine';
import {Button, type ButtonProps} from '@coveord/plasma-mantine/components/Button';
import {IconHome2} from '@coveord/plasma-react-icons';
import type {Meta, StoryObj} from '@storybook/react-vite';
import type {ComponentType} from 'react';

const buttonVariants = [
    'Primary',
    'Secondary',
    'Tertiary',
    'Quaternary',
    'DestructivePrimary',
    'DestructiveSecondary',
    'DestructiveTertiary',
    'DestructiveQuaternary',
] as const;

type ButtonVariant = (typeof buttonVariants)[number];
type ButtonStoryArgs = Omit<ButtonProps, 'variant' | 'leftSection' | 'rightSection'> & {
    buttonVariant: ButtonVariant;
    withLeftSection: boolean;
    withRightSection: boolean;
};

const meta: Meta<ButtonStoryArgs> = {
    title: '@components/Call to action/Button',
    id: 'Button',
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        buttonVariant: {
            control: 'select',
            options: buttonVariants,
            description: 'Selects the Plasma button sub-component used by this example.',
            table: {
                type: {
                    summary:
                        "'Primary' | 'Secondary' | 'Tertiary' | 'Quaternary' | 'DestructivePrimary' | 'DestructiveSecondary' | 'DestructiveTertiary' | 'DestructiveQuaternary'",
                },
                defaultValue: {summary: "'Primary'"},
            },
        },
        disabled: {
            control: 'boolean',
            description: 'Disables the button.',
            table: {type: {summary: 'boolean'}, defaultValue: {summary: 'false'}},
        },
        loading: {
            control: 'boolean',
            description: 'Shows a loading indicator and prevents interaction.',
            table: {type: {summary: 'boolean'}, defaultValue: {summary: 'false'}},
        },
        children: {
            control: 'text',
            description: 'Content rendered inside the button.',
            table: {type: {summary: 'ReactNode'}, defaultValue: {summary: 'undefined'}},
        },
        onClick: {
            action: 'clicked',
            description: 'Runs when the user selects the button.',
            table: {
                type: {summary: 'ClickHandler<HTMLButtonElement>'},
                defaultValue: {summary: 'undefined'},
            },
        },
        withRightSection: {
            control: 'boolean',
            description: 'Toggles an icon after the button label in this example.',
            table: {
                type: {summary: 'boolean'},
                defaultValue: {summary: 'false'},
            },
        },
        withLeftSection: {
            control: 'boolean',
            description: 'Toggles an icon before the button label in this example.',
            table: {
                type: {summary: 'boolean'},
                defaultValue: {summary: 'false'},
            },
        },
    },
    args: {
        buttonVariant: 'Primary',
        children: 'Button',
        onClick: () => showNotification({message: 'Button clicked', autoClose: false}),
        loading: false,
        withRightSection: false,
        withLeftSection: false,
        disabled: false,
    },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
    render: ({children, buttonVariant, onClick, loading, withRightSection, withLeftSection, disabled}) => {
        const ButtonComponent = Button[buttonVariant] as ComponentType<ButtonProps>;
        return (
            <ButtonComponent
                loading={loading}
                onClick={onClick}
                rightSection={withRightSection ? <IconHome2 size={16} /> : undefined}
                leftSection={withLeftSection ? <IconHome2 size={16} /> : undefined}
                disabled={disabled}
            >
                {children}
            </ButtonComponent>
        );
    },
};
