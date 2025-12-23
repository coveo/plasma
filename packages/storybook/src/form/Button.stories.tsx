import {showNotification} from '@coveord/plasma-mantine';
import {Button} from '@coveord/plasma-mantine/components/Button';
import {CheckmarkSize24Px} from '@coveord/plasma-react-icons';
import type {Meta, StoryObj} from '@storybook/react-vite';

const meta: Meta<typeof Button> = {
    title: '@components/form/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    render: () => {
        const onClick = () => showNotification({message: 'Button clicked', autoClose: false});
        return <Button.Primary onClick={onClick}>Button</Button.Primary>;
    },
};

export const Secondary: Story = {
    render: () => {
        const onClick = () => showNotification({message: 'Button clicked', autoClose: false});
        return <Button.Secondary onClick={onClick}>Button</Button.Secondary>;
    },
};

export const Tertiary: Story = {
    render: () => {
        const onClick = () => showNotification({message: 'Button clicked', autoClose: false});
        return <Button.Tertiary onClick={onClick}>Button</Button.Tertiary>;
    },
};

export const Quaternary: Story = {
    render: () => {
        const onClick = () => showNotification({message: 'Button clicked', autoClose: false});
        return <Button.Quaternary onClick={onClick}>Button</Button.Quaternary>;
    },
};

export const DestructivePrimary: Story = {
    render: () => {
        const onClick = () => showNotification({message: 'Button clicked', autoClose: false});
        return <Button.DestructivePrimary onClick={onClick}>Button</Button.DestructivePrimary>;
    },
};

export const DestructiveSecondary: Story = {
    render: () => {
        const onClick = () => showNotification({message: 'Button clicked', autoClose: false});
        return <Button.DestructiveSecondary onClick={onClick}>Button</Button.DestructiveSecondary>;
    },
};

export const DestructiveTertiary: Story = {
    render: () => {
        const onClick = () => showNotification({message: 'Button clicked', autoClose: false});
        return <Button.DestructiveTertiary onClick={onClick}>Button</Button.DestructiveTertiary>;
    },
};

export const DestructiveQuaternary: Story = {
    render: () => {
        const onClick = () => showNotification({message: 'Button clicked', autoClose: false});
        return <Button.DestructiveQuaternary onClick={onClick}>Button</Button.DestructiveQuaternary>;
    },
};

export const ButtonWithAsyncLoader: Story = {
    render: () => {
        const somethingAsync = (ms: number) => new Promise((r) => setTimeout(r, ms));
        const promise = async () => {
            await somethingAsync(3000);
            showNotification({
                title: 'Saved successfully',
                message: 'The save disabled was put in a loading state while it was waiting for the save to resolve.',
                autoClose: false,
                icon: <CheckmarkSize24Px height={24} />,
                color: 'success',
            });
        };
        return (
            <Button.Primary loading onClick={promise}>
                Save
            </Button.Primary>
        );
    },
};
