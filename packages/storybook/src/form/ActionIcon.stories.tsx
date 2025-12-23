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
    args: {
        size: 'md',
    },
    argTypes: {
        size: {
            control: 'select',
            options: ['sm', 'md'],
            description: 'Size of the ActionIcon',
        },
    },
};
export default meta;
type Story = StoryObj<typeof ActionIcon>;

export const Primary: Story = {
    render: (props: {size: 'sm' | 'md'}) => {
        const Icon = () => <IconBell size={16} />;
        const onClick = () => showNotification({message: 'ActionIcon clicked', autoClose: false});
        return (
            <ActionIcon.Primary onClick={onClick} size={props.size}>
                <Icon />
            </ActionIcon.Primary>
        );
    },
};

export const Secondary: Story = {
    render: (props: {size: 'sm' | 'md'}) => {
        const Icon = () => <IconBell size={16} />;
        const onClick = () => showNotification({message: 'ActionIcon clicked', autoClose: false});
        return (
            <ActionIcon.Secondary onClick={onClick} size={props.size}>
                <Icon />
            </ActionIcon.Secondary>
        );
    },
};

export const Tertiary: Story = {
    render: (props: {size: 'sm' | 'md'}) => {
        const Icon = () => <IconBell size={16} />;
        const onClick = () => showNotification({message: 'ActionIcon clicked', autoClose: false});
        return (
            <ActionIcon.Tertiary onClick={onClick} size={props.size}>
                <Icon />
            </ActionIcon.Tertiary>
        );
    },
};

export const Quaternary: Story = {
    render: (props: {size: 'sm' | 'md'}) => {
        const Icon = () => <IconBell size={16} />;
        const onClick = () => showNotification({message: 'ActionIcon clicked', autoClose: false});
        return (
            <ActionIcon.Quaternary onClick={onClick} size={props.size}>
                <Icon />
            </ActionIcon.Quaternary>
        );
    },
};

export const DestructivePrimary: Story = {
    render: (props: {size: 'sm' | 'md'}) => {
        const Icon = () => <IconBell size={16} />;
        const onClick = () => showNotification({message: 'ActionIcon clicked', autoClose: false});
        return (
            <ActionIcon.DestructivePrimary onClick={onClick} size={props.size}>
                <Icon />
            </ActionIcon.DestructivePrimary>
        );
    },
};

export const DestructiveSecondary: Story = {
    render: (props: {size: 'sm' | 'md'}) => {
        const Icon = () => <IconBell size={16} />;
        const onClick = () => showNotification({message: 'ActionIcon clicked', autoClose: false});
        return (
            <ActionIcon.DestructiveSecondary onClick={onClick} size={props.size}>
                <Icon />
            </ActionIcon.DestructiveSecondary>
        );
    },
};

export const DestructiveTertiary: Story = {
    render: (props: {size: 'sm' | 'md'}) => {
        const Icon = () => <IconBell size={16} />;
        const onClick = () => showNotification({message: 'ActionIcon clicked', autoClose: false});
        return (
            <ActionIcon.DestructiveTertiary onClick={onClick} size={props.size}>
                <Icon />
            </ActionIcon.DestructiveTertiary>
        );
    },
};

export const DestructiveQuaternary: Story = {
    render: (props: {size: 'sm' | 'md'}) => {
        const Icon = () => <IconBell size={16} />;
        const onClick = () => showNotification({message: 'ActionIcon clicked', autoClose: false});
        return (
            <ActionIcon.DestructiveQuaternary onClick={onClick} size={props.size}>
                <Icon />
            </ActionIcon.DestructiveQuaternary>
        );
    },
};

export const ActionIconWithAsyncLoader: Story = {
    render: (props: {size: 'sm' | 'md'}) => {
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
