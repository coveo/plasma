// url=https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-50983
// component=Notification

import figma from 'figma';

// Branch per variant; no default, else first.

let template;
if (figma.selectedInstance.getPropertyValue('Variant') === 'Information') {
    const title = figma.selectedInstance.getBoolean('Title', {
        true: 'Title',
    });
    const message = figma.selectedInstance.getBoolean('Description', {
        true: 'This is a great way to describe your title.',
    });

    template = {
        id: 'Notification',
        imports: ["import { Notification, notifications as mantineNotifications } from '@coveord/plasma-mantine';"],
        example: figma.code`function Example() {
    const notifications = { ...mantineNotifications, showSuccess: mantineNotifications.show, showError: mantineNotifications.show, showWarning: mantineNotifications.show };
    notifications.show({
        title: ${figma.helpers.react.renderPropValue(title)},
        message: ${figma.helpers.react.renderPropValue(message)},
    });
    return <></>; // DO NOT RETURN THIS, Figma requires a React component to render a code snippet
}`,
        metadata: {nestable: false},
    };
} else if (figma.selectedInstance.getPropertyValue('Variant') === 'Success') {
    const title = figma.selectedInstance.getBoolean('Title', {
        true: 'Title',
    });
    const message = figma.selectedInstance.getBoolean('Description', {
        true: 'This is a great way to describe your title.',
    });

    template = {
        id: 'Notification',
        imports: ["import { Notification, notifications as mantineNotifications } from '@coveord/plasma-mantine';"],
        example: figma.code`function Example() {
    const notifications = { ...mantineNotifications, showSuccess: mantineNotifications.show, showError: mantineNotifications.show, showWarning: mantineNotifications.show };
    notifications.showSuccess({
        title: ${figma.helpers.react.renderPropValue(title)},
        message: ${figma.helpers.react.renderPropValue(message)},
    });
    return <></>; // DO NOT RETURN THIS, Figma requires a React component to render a code snippet
}`,
        metadata: {nestable: false},
    };
} else if (figma.selectedInstance.getPropertyValue('Variant') === 'Warning') {
    const title = figma.selectedInstance.getBoolean('Title', {
        true: 'Title',
    });
    const message = figma.selectedInstance.getBoolean('Description', {
        true: 'This is a great way to describe your title.',
    });

    template = {
        id: 'Notification',
        imports: ["import { Notification, notifications as mantineNotifications } from '@coveord/plasma-mantine';"],
        example: figma.code`function Example() {
    const notifications = { ...mantineNotifications, showSuccess: mantineNotifications.show, showError: mantineNotifications.show, showWarning: mantineNotifications.show };
    notifications.showWarning({
        title: ${figma.helpers.react.renderPropValue(title)},
        message: ${figma.helpers.react.renderPropValue(message)},
    });
    return <></>; // DO NOT RETURN THIS, Figma requires a React component to render a code snippet
}`,
        metadata: {nestable: false},
    };
} else if (figma.selectedInstance.getPropertyValue('Variant') === 'Critical') {
    const title = figma.selectedInstance.getBoolean('Title', {
        true: 'Title',
    });
    const message = figma.selectedInstance.getBoolean('Description', {
        true: 'This is a great way to describe your title.',
    });

    template = {
        id: 'Notification',
        imports: ["import { Notification, notifications as mantineNotifications } from '@coveord/plasma-mantine';"],
        example: figma.code`function Example() {
    const notifications = { ...mantineNotifications, showSuccess: mantineNotifications.show, showError: mantineNotifications.show, showWarning: mantineNotifications.show };
    notifications.showError({
        title: ${figma.helpers.react.renderPropValue(title)},
        message: ${figma.helpers.react.renderPropValue(message)},
    });
    return <></>; // DO NOT RETURN THIS, Figma requires a React component to render a code snippet
}`,
        metadata: {nestable: false},
    };
} else if (figma.selectedInstance.getPropertyValue('Variant') === 'Loading') {
    const title = figma.selectedInstance.getBoolean('Title', {
        true: 'Title',
    });
    const message = figma.selectedInstance.getBoolean('Description', {
        true: 'This is a great way to describe your title.',
    });

    template = {
        id: 'Notification',
        imports: ["import { Notification, notifications as mantineNotifications } from '@coveord/plasma-mantine';"],
        example: figma.code`function Example() {
    const notifications = { ...mantineNotifications, showSuccess: mantineNotifications.show, showError: mantineNotifications.show, showWarning: mantineNotifications.show };
    const id = notifications.show({
        title: ${figma.helpers.react.renderPropValue(title)},
        message: ${figma.helpers.react.renderPropValue(message)},
        loading: true,
    });
    {
        /* Some async operations */
    }
    setTimeout(() => notifications.update({
        id,
        title: 'Loaded',
        message: 'The operation has completed',
    }), 0);
    return <></>; // DO NOT RETURN THIS, Figma requires a React component to render a code snippet
}`,
        metadata: {nestable: false},
    };
} else {
    const title = figma.selectedInstance.getBoolean('Title', {
        true: 'Title',
    });
    const message = figma.selectedInstance.getBoolean('Description', {
        true: 'This is a great way to describe your title.',
    });

    template = {
        id: 'Notification',
        imports: ["import { Notification, notifications as mantineNotifications } from '@coveord/plasma-mantine';"],
        example: figma.code`function Example() {
    const notifications = { ...mantineNotifications, showSuccess: mantineNotifications.show, showError: mantineNotifications.show, showWarning: mantineNotifications.show };
    const id = notifications.show({
        title: ${figma.helpers.react.renderPropValue(title)},
        message: ${figma.helpers.react.renderPropValue(message)},
        loading: true,
    });
    {
        /* Some async operations */
    }
    setTimeout(() => notifications.update({
        id,
        title: 'Loaded',
        message: 'The operation has completed',
    }), 0);
    return <></>; // DO NOT RETURN THIS, Figma requires a React component to render a code snippet
}`,
        metadata: {nestable: false},
    };
}

export default template;
