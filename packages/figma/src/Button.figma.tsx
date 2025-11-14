import {Button} from '@coveord/plasma-mantine';
import {figma} from '@figma/code-connect';

const buttonProps = {
    leftSection: figma.boolean('Left Icon', {
        true: figma.instance('Swap Left'),
    }),
    rightSection: figma.boolean('Right Icon', {
        true: figma.instance('Swap Right'),
    }),
    placeholder: figma.string('Placeholder'),
    disabled: figma.enum('State', {
        Disabled: true,
    }),
};

figma.connect(
    Button.Primary,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma---Components-Library?node-id=7%3A49794',
    {
        variant: {Variant: 'Primary'},
        props: buttonProps,
        example: ({placeholder, leftSection, rightSection, disabled}) => (
            <Button.Primary leftSection={leftSection} rightSection={rightSection} disabled={disabled}>
                {placeholder}
            </Button.Primary>
        ),
    },
);

figma.connect(
    Button.Secondary,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma---Components-Library?node-id=7%3A49794',
    {
        variant: {Variant: 'Secondary'},
        props: buttonProps,
        example: ({leftSection, rightSection, placeholder, disabled}) => (
            <Button.Secondary leftSection={leftSection} rightSection={rightSection} disabled={disabled}>
                {placeholder}
            </Button.Secondary>
        ),
    },
);

figma.connect(
    Button.Tertiary,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma---Components-Library?node-id=7%3A49794',
    {
        variant: {Variant: 'Tertiary'},
        props: buttonProps,
        example: ({leftSection, rightSection, placeholder, disabled}) => (
            <Button.Tertiary leftSection={leftSection} rightSection={rightSection} disabled={disabled}>
                {placeholder}
            </Button.Tertiary>
        ),
    },
);

figma.connect(
    Button.Quaternary,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma---Components-Library?node-id=7%3A49794',
    {
        variant: {Variant: 'Quaternary'},
        props: buttonProps,
        example: ({leftSection, rightSection, placeholder, disabled}) => (
            <Button.Quaternary leftSection={leftSection} rightSection={rightSection} disabled={disabled}>
                {placeholder}
            </Button.Quaternary>
        ),
    },
);

// -- Destructive --

figma.connect(
    Button.DestructivePrimary,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma---Components-Library?node-id=7%3A49737',
    {
        variant: {Variant: 'Primary'},
        props: buttonProps,
        example: ({leftSection, rightSection, placeholder, disabled}) => (
            <Button.DestructivePrimary leftSection={leftSection} rightSection={rightSection} disabled={disabled}>
                {placeholder}
            </Button.DestructivePrimary>
        ),
    },
);

figma.connect(
    Button.DestructiveSecondary,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma---Components-Library?node-id=7%3A49737',
    {
        variant: {Variant: 'Secondary'},
        props: buttonProps,
        example: ({leftSection, rightSection, placeholder, disabled}) => (
            <Button.DestructiveSecondary leftSection={leftSection} rightSection={rightSection} disabled={disabled}>
                {placeholder}
            </Button.DestructiveSecondary>
        ),
    },
);
figma.connect(
    Button.DestructiveTertiary,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma---Components-Library?node-id=7%3A49737',
    {
        variant: {Variant: 'Tertiary'},
        props: buttonProps,
        example: ({leftSection, rightSection, placeholder, disabled}) => (
            <Button.DestructiveTertiary leftSection={leftSection} rightSection={rightSection} disabled={disabled}>
                {placeholder}
            </Button.DestructiveTertiary>
        ),
    },
);
figma.connect(
    Button.DestructiveQuaternary,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma---Components-Library?node-id=7%3A49737',
    {
        variant: {Variant: 'Quaternary'},
        props: buttonProps,
        example: ({leftSection, rightSection, placeholder, disabled}) => (
            <Button.DestructiveQuaternary leftSection={leftSection} rightSection={rightSection} disabled={disabled}>
                {placeholder}
            </Button.DestructiveQuaternary>
        ),
    },
);
