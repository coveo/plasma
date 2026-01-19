import {showNotification} from '@coveord/plasma-mantine';
import {ActionIcon} from '@coveord/plasma-mantine/components/ActionIcon';
import {IconBell} from '@coveord/plasma-react-icons';
import type {Meta, StoryObj} from '@storybook/react-vite';

const meta: Meta<typeof ActionIcon> = {
    title: '@components/call-to-action/ActionIcon',
    id: 'ActionIcon',
    component: ActionIcon,
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
type Story = StoryObj<typeof ActionIcon>;

export const Demo: Story = {
    render: (props: {size: 'sm' | 'md'; variant: string}) => {
        const ActionIconComponent = ActionIcon[props.variant as keyof typeof ActionIcon] as React.ComponentType<any>;
        const Icon = () => <IconBell size={16} />;
        const onClick = () => showNotification({message: 'ActionIcon clicked', autoClose: false});
        return (
            <ActionIconComponent onClick={onClick} size={props.size}>
                <Icon />
            </ActionIconComponent>
        );
    },
};
