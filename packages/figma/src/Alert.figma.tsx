import {Alert, Text} from '@coveord/plasma-mantine';
import {figma} from '@figma/code-connect';
import type {ReactElement} from 'react';

const alertProps = {
    message: figma.string('message'),
    withCloseButton: figma.boolean('withCloseButton'),
    title: figma.string('title'),
    actions: figma.boolean<ReactElement, undefined>('withActions', {
        true: figma.slot<ReactElement>('actions'),
    }),
};

figma.connect(
    Alert.Information,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma---Components-Library?node-id=7%3A50375',
    {
        variant: {variant: 'information'},
        props: alertProps,
        example: ({withCloseButton, title, actions, message}) => (
            <Alert.Information withCloseButton={withCloseButton} title={title}>
                <Text>{message}</Text>
                {actions}
            </Alert.Information>
        ),
    },
);

figma.connect(
    Alert.Advice,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma---Components-Library?node-id=7%3A50375',
    {
        variant: {variant: 'advice'},
        props: alertProps,
        example: ({withCloseButton, title, actions, message}) => (
            <Alert.Advice withCloseButton={withCloseButton} title={title}>
                <Text>{message}</Text>
                {actions}
            </Alert.Advice>
        ),
    },
);

figma.connect(
    Alert.Success,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma---Components-Library?node-id=7%3A50375',
    {
        variant: {variant: 'success'},
        props: alertProps,
        example: ({withCloseButton, title, actions, message}) => (
            <Alert.Success withCloseButton={withCloseButton} title={title}>
                <Text>{message}</Text>
                {actions}
            </Alert.Success>
        ),
    },
);

figma.connect(
    Alert.Warning,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma---Components-Library?node-id=7%3A50375',
    {
        variant: {variant: 'warning'},
        props: alertProps,
        example: ({withCloseButton, title, actions, message}) => (
            <Alert.Warning withCloseButton={withCloseButton} title={title}>
                <Text>{message}</Text>
                {actions}
            </Alert.Warning>
        ),
    },
);

figma.connect(
    Alert.Critical,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma---Components-Library?node-id=7%3A50375',
    {
        variant: {variant: 'error'},
        props: alertProps,
        example: ({withCloseButton, title, actions, message}) => (
            <Alert.Critical withCloseButton={withCloseButton} title={title}>
                <Text>{message}</Text>
                {actions}
            </Alert.Critical>
        ),
    },
);
