import {Notification, notifications as mantineNotifications} from '@coveord/plasma-mantine';
import {figma} from '@figma/code-connect';

const notifications = {
    ...mantineNotifications,
    showSuccess: mantineNotifications.show,
    showError: mantineNotifications.show,
    showWarning: mantineNotifications.show,
};

figma.connect(
    Notification,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-50983',
    {
        variant: {Variant: 'Information'},
        props: {
            title: figma.boolean<string, never>('Title', {
                true: 'Title',
            }),
            message: figma.boolean<string, never>('Description', {
                true: 'This is a great way to describe your title.',
            }),
        },
        example: ({title, message}) => {
            notifications.show({
                title,
                message,
            });
            return <></>; // DO NOT RETURN THIS, Figma requires a React component to render a code snippet
        },
    },
);

figma.connect(
    Notification,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-50983',
    {
        variant: {Variant: 'Success'},
        props: {
            title: figma.boolean<string, never>('Title', {
                true: 'Title',
            }),
            message: figma.boolean<string, never>('Description', {
                true: 'This is a great way to describe your title.',
            }),
        },
        example: ({title, message}) => {
            notifications.showSuccess({
                title,
                message,
            });
            return <></>; // DO NOT RETURN THIS, Figma requires a React component to render a code snippet
        },
    },
);
figma.connect(
    Notification,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-50983',
    {
        variant: {Variant: 'Warning'},
        props: {
            title: figma.boolean<string, never>('Title', {
                true: 'Title',
            }),
            message: figma.boolean<string, never>('Description', {
                true: 'This is a great way to describe your title.',
            }),
        },
        example: ({title, message}) => {
            notifications.showWarning({
                title,
                message,
            });
            return <></>; // DO NOT RETURN THIS, Figma requires a React component to render a code snippet
        },
    },
);
figma.connect(
    Notification,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-50983',
    {
        variant: {Variant: 'Critical'},
        props: {
            title: figma.boolean<string, never>('Title', {
                true: 'Title',
            }),
            message: figma.boolean<string, never>('Description', {
                true: 'This is a great way to describe your title.',
            }),
        },
        example: ({title, message}) => {
            notifications.showError({
                title,
                message,
            });
            return <></>; // DO NOT RETURN THIS, Figma requires a React component to render a code snippet
        },
    },
);
figma.connect(
    Notification,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-50983',
    {
        variant: {Variant: 'Loading'},
        props: {
            title: figma.boolean<string, never>('Title', {
                true: 'Title',
            }),
            message: figma.boolean<string, never>('Description', {
                true: 'This is a great way to describe your title.',
            }),
        },
        example: ({title, message}) => {
            const id = notifications.show({
                title,
                message,
                loading: true,
            });
            {
                /* Some async operations */
            }
            setTimeout(
                () =>
                    notifications.update({
                        id,
                        title: 'Loaded',
                        message: 'The operation has completed',
                    }),
                0,
            );
            return <></>; // DO NOT RETURN THIS, Figma requires a React component to render a code snippet
        },
    },
);
