import {Button} from '@coveord/plasma-mantine';
import {figma} from '@figma/code-connect';

figma.connect(
    Button.Primary,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma---Components-Library?node-id=7%3A49794',
    {
        variant: {Variant: 'Primary'},
        props: {
            // No matching props could be found for these Figma properties:
            // "swapLeft": figma.instance('Swap Left'),
            // "swapRight": figma.instance('Swap Right'),
            leftIcon: figma.boolean('Left Icon', {
                true: figma.instance('Swap Left'),
            }),
            rightIcon: figma.boolean('Right Icon', {
                true: figma.instance('Swap Right'),
            }),
            placeholder: figma.string('Placeholder'),
            disabled: figma.enum('State', {
                Disabled: true,
            }),
        },
        example: ({placeholder, leftIcon, rightIcon, disabled}) => (
            <Button.Primary leftIcon={leftIcon} rightIcon={rightIcon} disabled={disabled}>
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
        props: {
            // No matching props could be found for these Figma properties:
            // "swapLeft": figma.instance('Swap Left'),
            // "swapRight": figma.instance('Swap Right'),
            leftIcon: figma.boolean('Left Icon', {
                true: figma.instance('Swap Left'),
            }),
            rightIcon: figma.boolean('Right Icon', {
                true: figma.instance('Swap Right'),
            }),
            placeholder: figma.string('Placeholder'),
            disabled: figma.enum('State', {
                Disabled: true,
            }),
        },
        example: ({leftIcon, rightIcon, placeholder, disabled}) => (
            <Button.Secondary leftIcon={leftIcon} rightIcon={rightIcon} disabled={disabled}>
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
        props: {
            // No matching props could be found for these Figma properties:
            // "swapLeft": figma.instance('Swap Left'),
            // "swapRight": figma.instance('Swap Right'),
            leftIcon: figma.boolean('Left Icon', {
                true: figma.instance('Swap Left'),
            }),
            rightIcon: figma.boolean('Right Icon', {
                true: figma.instance('Swap Right'),
            }),
            placeholder: figma.string('Placeholder'),
            disabled: figma.enum('State', {
                Disabled: true,
            }),
        },
        example: ({leftIcon, rightIcon, placeholder, disabled}) => (
            <Button.Tertiary leftIcon={leftIcon} rightIcon={rightIcon} disabled={disabled}>
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
        props: {
            // No matching props could be found for these Figma properties:
            // "swapLeft": figma.instance('Swap Left'),
            // "swapRight": figma.instance('Swap Right'),
            leftIcon: figma.boolean('Left Icon', {
                true: figma.instance('Swap Left'),
            }),
            rightIcon: figma.boolean('Right Icon', {
                true: figma.instance('Swap Right'),
            }),
            placeholder: figma.string('Placeholder'),
            disabled: figma.enum('State', {
                Disabled: true,
            }),
        },
        example: ({leftIcon, rightIcon, placeholder, disabled}) => (
            <Button.Quaternary leftIcon={leftIcon} rightIcon={rightIcon} disabled={disabled}>
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
        props: {
            // No matching props could be found for these Figma properties:
            // "swapLeft": figma.instance('Swap Left'),
            // "swapRight": figma.instance('Swap Right'),
            leftIcon: figma.boolean('Left Icon', {
                true: figma.instance('Swap Left'),
            }),
            rightIcon: figma.boolean('Right Icon', {
                true: figma.instance('Swap Right'),
            }),
            placeholder: figma.string('Placeholder'),
            disabled: figma.enum('State', {
                Disabled: true,
            }),
        },
        example: ({leftIcon, rightIcon, placeholder, disabled}) => (
            <Button.DestructivePrimary leftIcon={leftIcon} rightIcon={rightIcon} disabled={disabled}>
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
        props: {
            // No matching props could be found for these Figma properties:
            // "swapLeft": figma.instance('Swap Left'),
            // "swapRight": figma.instance('Swap Right'),
            leftIcon: figma.boolean('Left Icon', {
                true: figma.instance('Swap Left'),
            }),
            rightIcon: figma.boolean('Right Icon', {
                true: figma.instance('Swap Right'),
            }),
            placeholder: figma.string('Placeholder'),
            disabled: figma.enum('State', {
                Disabled: true,
            }),
        },
        example: ({leftIcon, rightIcon, placeholder, disabled}) => (
            <Button.DestructiveSecondary leftIcon={leftIcon} rightIcon={rightIcon} disabled={disabled}>
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
        props: {
            // No matching props could be found for these Figma properties:
            // "swapLeft": figma.instance('Swap Left'),
            // "swapRight": figma.instance('Swap Right'),
            leftIcon: figma.boolean('Left Icon', {
                true: figma.instance('Swap Left'),
            }),
            rightIcon: figma.boolean('Right Icon', {
                true: figma.instance('Swap Right'),
            }),
            placeholder: figma.string('Placeholder'),
            disabled: figma.enum('State', {
                Disabled: true,
            }),
        },
        example: ({leftIcon, rightIcon, placeholder, disabled}) => (
            <Button.DestructiveTertiary leftIcon={leftIcon} rightIcon={rightIcon} disabled={disabled}>
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
        props: {
            // No matching props could be found for these Figma properties:
            // "swapLeft": figma.instance('Swap Left'),
            // "swapRight": figma.instance('Swap Right'),
            leftIcon: figma.boolean('Left Icon', {
                true: figma.instance('Swap Left'),
            }),
            rightIcon: figma.boolean('Right Icon', {
                true: figma.instance('Swap Right'),
            }),
            placeholder: figma.string('Placeholder'),
            disabled: figma.enum('State', {
                Disabled: true,
            }),
        },
        example: ({leftIcon, rightIcon, placeholder, disabled}) => (
            <Button.DestructiveQuaternary leftIcon={leftIcon} rightIcon={rightIcon} disabled={disabled}>
                {placeholder}
            </Button.DestructiveQuaternary>
        ),
    },
);
