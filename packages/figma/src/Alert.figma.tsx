import {Alert, Text} from '@coveord/plasma-mantine';
import {figma} from '@figma/code-connect';

figma.connect(
    Alert.Information,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma---Components-Library?node-id=7%3A50375',
    {
        variant: {Variant: 'Information'},
        props: {
            message: figma.textContent('Message'),
            withCloseButton: figma.boolean('Show CloseButton'),
            title: figma.boolean('Show Title', {
                true: figma.textContent('Title'),
            }),
            contentSwap: figma.boolean('Show ContentSwap', {
                true: figma.instance('Instance'),
            }),
        },
        example: ({withCloseButton, title, contentSwap, message}) => (
            <Alert.Information withCloseButton={withCloseButton} title={title}>
                <Text>{message}</Text>
                {contentSwap}
            </Alert.Information>
        ),
    },
);

figma.connect(
    Alert.Advice,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma---Components-Library?node-id=7%3A50375',
    {
        variant: {Variant: 'Advice'},
        props: {
            message: figma.textContent('Message'),
            withCloseButton: figma.boolean('Show CloseButton'),
            title: figma.boolean('Show Title', {
                true: figma.textContent('Title'),
            }),
            contentSwap: figma.boolean('Show ContentSwap', {
                true: figma.instance('Instance'),
            }),
        },
        example: ({withCloseButton, title, contentSwap, message}) => (
            <Alert.Advice withCloseButton={withCloseButton} title={title}>
                <Text>{message}</Text>
                {contentSwap}
            </Alert.Advice>
        ),
    },
);

figma.connect(
    Alert.Warning,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma---Components-Library?node-id=7%3A50375',
    {
        variant: {Variant: 'Warning'},
        props: {
            message: figma.textContent('Message'),
            withCloseButton: figma.boolean('Show CloseButton'),
            title: figma.boolean('Show Title', {
                true: figma.textContent('Title'),
            }),
            contentSwap: figma.boolean('Show ContentSwap', {
                true: figma.instance('Instance'),
            }),
        },
        example: ({withCloseButton, title, contentSwap, message}) => (
            <Alert.Warning withCloseButton={withCloseButton} title={title}>
                <Text>{message}</Text>
                {contentSwap}
            </Alert.Warning>
        ),
    },
);

figma.connect(
    Alert.Critical,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma---Components-Library?node-id=7%3A50375',
    {
        variant: {Variant: 'Critical'},
        props: {
            message: figma.textContent('Message'),
            withCloseButton: figma.boolean('Show CloseButton'),
            title: figma.boolean('Show Title', {
                true: figma.textContent('Title'),
            }),
            contentSwap: figma.boolean('Show ContentSwap', {
                true: figma.instance('Instance'),
            }),
        },
        example: ({withCloseButton, title, contentSwap, message}) => (
            <Alert.Critical withCloseButton={withCloseButton} title={title}>
                <Text>{message}</Text>
                {contentSwap}
            </Alert.Critical>
        ),
    },
);
