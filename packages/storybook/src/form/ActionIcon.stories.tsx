import {showNotification} from '@coveord/plasma-mantine';
import {ActionIcon} from '@coveord/plasma-mantine/components/ActionIcon';
import {IconBell, IconCheck, IconTrash} from '@coveord/plasma-react-icons';
import type {Meta, StoryObj} from '@storybook/react-vite';

const meta: Meta<typeof ActionIcon> = {
    title: '@components/form/ActionIcon',
    component: ActionIcon,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof ActionIcon>;

export const Primary: Story = {
    render: () => {
        const Icon = () => <IconBell size={16} />;
        const onClick = () => showNotification({message: 'ActionIcon clicked', autoClose: false});
        return (
            <ActionIcon.Primary onClick={onClick}>
                <Icon />
            </ActionIcon.Primary>
        );
    },
};

export const Secondary: Story = {
    render: () => {
        const Icon = () => <IconBell size={16} />;
        const onClick = () => showNotification({message: 'ActionIcon clicked', autoClose: false});
        return (
            <ActionIcon.Secondary onClick={onClick}>
                <Icon />
            </ActionIcon.Secondary>
        );
    },
};

export const Tertiary: Story = {
    render: () => {
        const Icon = () => <IconBell size={16} />;
        const onClick = () => showNotification({message: 'ActionIcon clicked', autoClose: false});
        return (
            <ActionIcon.Tertiary onClick={onClick}>
                <Icon />
            </ActionIcon.Tertiary>
        );
    },
};

export const Quaternary: Story = {
    render: () => {
        const Icon = () => <IconBell size={16} />;
        const onClick = () => showNotification({message: 'ActionIcon clicked', autoClose: false});
        return (
            <ActionIcon.Quaternary onClick={onClick}>
                <Icon />
            </ActionIcon.Quaternary>
        );
    },
};

export const DestructivePrimary: Story = {
    render: () => {
        const Icon = () => <IconBell size={16} />;
        const onClick = () => showNotification({message: 'ActionIcon clicked', autoClose: false});
        return (
            <ActionIcon.DestructivePrimary onClick={onClick}>
                <Icon />
            </ActionIcon.DestructivePrimary>
        );
    },
};

export const DestructiveSecondary: Story = {
    render: () => {
        const Icon = () => <IconBell size={16} />;
        const onClick = () => showNotification({message: 'ActionIcon clicked', autoClose: false});
        return (
            <ActionIcon.DestructiveSecondary onClick={onClick}>
                <Icon />
            </ActionIcon.DestructiveSecondary>
        );
    },
};

export const DestructiveTertiary: Story = {
    render: () => {
        const Icon = () => <IconBell size={16} />;
        const onClick = () => showNotification({message: 'ActionIcon clicked', autoClose: false});
        return (
            <ActionIcon.DestructiveTertiary onClick={onClick}>
                <Icon />
            </ActionIcon.DestructiveTertiary>
        );
    },
};

export const DestructiveQuaternary: Story = {
    render: () => {
        const Icon = () => <IconBell size={16} />;
        const onClick = () => showNotification({message: 'ActionIcon clicked', autoClose: false});
        return (
            <ActionIcon.DestructiveQuaternary onClick={onClick}>
                <Icon />
            </ActionIcon.DestructiveQuaternary>
        );
    },
};

export const ActionIconWithAsyncLoader: Story = {
    render: () => {
        const somethingAsync = (ms: number) => new Promise((r) => setTimeout(r, ms));
        const promise = async () => {
            await somethingAsync(3000);
            showNotification({
                title: 'Deleted successfully',
                message: 'The delete button was put in a loading state while it was waiting for the delete to resolve.',
                autoClose: false,
                icon: <IconCheck size={16} />,
                color: 'success',
            });
        };
        return (
            <ActionIcon.DestructivePrimary onClick={promise}>
                <IconTrash size={16} />
            </ActionIcon.DestructivePrimary>
        );
    },
};
