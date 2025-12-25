import {Button} from '@coveord/plasma-mantine/components/Button';
import {Notification} from '@coveord/plasma-mantine/components/Notification';
import {notifications} from '@coveord/plasma-mantine/notifications';
import {
    IconAlertSquareFilled,
    IconAlertTriangleFilled,
    IconCircleCheckFilled,
    IconInfoCircleFilled,
} from '@coveord/plasma-react-icons';
import type {Meta, StoryObj} from '@storybook/react-vite';

const meta: Meta<typeof Notification> = {
    title: '@components/feedback/Notification',
    component: Notification,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        title: {
            control: 'text',
            description: 'Notification title',
        },
        children: {
            control: 'text',
            description: 'Notification message',
        },
        variant: {
            control: 'select',
            options: ['info', 'success', 'warning', 'error'],
            description: 'Notification variant',
            table: {
                type: {summary: 'info | success | warning | error'},
                defaultValue: {summary: 'info'},
            },
        },
    },
    args: {
        title: 'Title',
        children: 'This is the notification message.',
        variant: 'info',
    },
};

const NotificationIconMap = {
    info: <IconInfoCircleFilled height={20} />,
    success: <IconCircleCheckFilled height={20} color="var(--mantine-color-green-2)" />,
    warning: <IconAlertTriangleFilled height={20} color="var(--mantine-color-yellow-3)" />,
    error: <IconAlertSquareFilled size={20} color="var(--mantine-color-red-4)" />,
};
export default meta;
type Story = StoryObj<typeof Notification>;

export const Demo: Story = {
    argTypes: {
        loading: {
            control: 'boolean',
            description: 'Loading state',
            table: {
                type: {summary: 'boolean'},
                defaultValue: {summary: 'false'},
            },
        },
    },
    args: {
        loading: false,
    },
    render: ({variant, title, loading, children}) => (
        <Notification
            title={title}
            loading={loading}
            icon={NotificationIconMap[variant as keyof typeof NotificationIconMap]}
        >
            {children}
        </Notification>
    ),
};

export const NotificationSystem: Story = {
    argTypes: {
        variant: {
            control: 'select',
            options: ['info', 'success', 'warning', 'error'],
            description: 'Notification variant to show',
            table: {
                type: {summary: 'info | success | warning | error'},
                defaultValue: {summary: 'info'},
            },
        },
    },
    args: {
        variant: 'info',
    },
    render: (props) => {
        const showNotification = () => {
            notifications.show({
                title: props.title,
                message: `This is a ${props.variant} notification`,
                icon: NotificationIconMap[props.variant as keyof typeof NotificationIconMap],
            });
        };
        return <Button onClick={showNotification}>Show Notification</Button>;
    },
};
