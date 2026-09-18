import {ActionIcon, type ActionIconProps} from '@coveord/plasma-mantine';
import {IconX} from '@coveord/plasma-react-icons';
import type {Meta, StoryObj} from '@storybook/react-vite';
import type {ComponentType} from 'react';

const actionIconVariants = [
    'Primary',
    'Secondary',
    'Tertiary',
    'Quaternary',
    'DestructivePrimary',
    'DestructiveSecondary',
    'DestructiveTertiary',
    'DestructiveQuaternary',
] as const;

type ActionIconVariant = (typeof actionIconVariants)[number];
type ActionIconStoryArgs = Omit<ActionIconProps, 'size' | 'variant'> & {
    actionIconVariant: ActionIconVariant;
    size: 'sm' | 'md' | 'lg';
};

const meta: Meta<ActionIconStoryArgs> = {
    title: '@components/Call to action/ActionIcon',
    id: 'ActionIcon',
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        actionIconVariant: {
            control: 'select',
            options: actionIconVariants,
            description: 'Selects the Plasma action icon sub-component used by this example.',
            table: {
                type: {
                    summary:
                        "'Primary' | 'Secondary' | 'Tertiary' | 'Quaternary' | 'DestructivePrimary' | 'DestructiveSecondary' | 'DestructiveTertiary' | 'DestructiveQuaternary'",
                },
                defaultValue: {summary: "'Primary'"},
            },
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
            description: 'Sets the width and height of the action icon.',
            table: {defaultValue: {summary: "'md'"}, type: {summary: "'sm' | 'md' | 'lg'"}},
        },
    },
    args: {
        size: 'md',
        actionIconVariant: 'Primary',
    },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
    render: (props) => {
        const ActionIconComponent = ActionIcon[props.actionIconVariant] as ComponentType<ActionIconProps>;
        return (
            <ActionIconComponent aria-label="Close" size={props.size}>
                <IconX />
            </ActionIconComponent>
        );
    },
};
