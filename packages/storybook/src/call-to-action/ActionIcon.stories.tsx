import {showNotification} from '@coveord/plasma-mantine';
import {ActionIcon} from '@coveord/plasma-mantine/components/ActionIcon';
import {IconBell} from '@coveord/plasma-react-icons';
import type {Meta, StoryObj} from '@storybook/react-vite';

interface ActionIconStoryArgs {
    size: 'sm' | 'md';
    variant: keyof typeof ActionIcon;
}

const meta: Meta<ActionIconStoryArgs> = {
    title: '@components/call-to-action/ActionIcon',
    id: 'ActionIcon',
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
            description: 'ActionIcon variant',
        },
        size: {
            control: 'select',
            options: ['sm', 'md'],
            description: 'Size of the ActionIcon',
            table: {defaultValue: {summary: 'md'}, type: {summary: 'sm | md'}},
        },
    },
    args: {
        size: 'md',
        variant: 'Primary',
    },
};
export default meta;
type Story = StoryObj<ActionIconStoryArgs>;

export const Demo: Story = {
    render: (args) => {
        const ActionIconComponent = ActionIcon[args.variant as keyof typeof ActionIcon] as React.ComponentType<any>;
        const Icon = () => <IconBell size={16} />;
        const onClick = () => showNotification({message: 'ActionIcon clicked', autoClose: false});
        return (
            <ActionIconComponent onClick={onClick} size={args.size}>
                <Icon />
            </ActionIconComponent>
        );
    },
};
