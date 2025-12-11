import {Alert, Anchor, Text} from '@coveord/plasma-mantine';
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
                true: 'Information',
            }),
            link: figma.boolean('Show Link', {
                true: (
                    <Anchor href="https://coveord.com" target="_blank">
                        Learn more
                    </Anchor>
                ),
            }),
        },
        example: ({withCloseButton, title, link, message}) => (
            <Alert.Information withCloseButton={withCloseButton} title={title}>
                <Text>{message}</Text>
                {link}
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
                true: 'Advice',
            }),
            link: figma.boolean('Show Link', {
                true: (
                    <Anchor href="https://coveord.com" target="_blank">
                        Learn more
                    </Anchor>
                ),
            }),
        },
        example: ({withCloseButton, title, link, message}) => (
            <Alert.Advice withCloseButton={withCloseButton} title={title}>
                <Text>{message}</Text>
                {link}
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
                true: 'Warning!',
            }),
            link: figma.boolean('Show Link', {
                true: (
                    <Anchor href="https://coveord.com" target="_blank">
                        Learn more
                    </Anchor>
                ),
            }),
        },
        example: ({withCloseButton, title, link, message}) => (
            <Alert.Warning withCloseButton={withCloseButton} title={title}>
                <Text>{message}</Text>
                {link}
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
            link: figma.boolean('Show Link'),
        },
        example: ({withCloseButton, title, link, message}) => (
            <Alert.Critical withCloseButton={withCloseButton} title={title}>
                <Text>{message}</Text>
                {link}
            </Alert.Critical>
        ),
    },
);
