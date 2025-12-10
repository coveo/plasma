import {ActionIcon} from '@coveord/plasma-mantine';
import {figma} from '@figma/code-connect';

const actionIconProps = {
    children: figma.nestedProps('Button', {
        icon: figma.boolean('Left Section', {
            true: figma.instance('Swap Left'),
        }),
    }),
    disabled: figma.enum('State', {
        Disabled: true,
    }),
};

figma.connect(
    ActionIcon.Primary,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-49884',
    {
        variant: {Variant: 'Primary'},
        props: actionIconProps,
        example: ({disabled, children}) => <ActionIcon.Primary disabled={disabled}>{children.icon}</ActionIcon.Primary>,
    },
);

figma.connect(
    ActionIcon.Secondary,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-49884',
    {
        variant: {Variant: 'Secondary'},
        props: actionIconProps,
        example: ({disabled, children}) => (
            <ActionIcon.Secondary disabled={disabled}>{children.icon}</ActionIcon.Secondary>
        ),
    },
);

figma.connect(
    ActionIcon.Tertiary,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-49884',
    {
        variant: {Variant: 'Tertiary'},
        props: actionIconProps,
        example: ({disabled, children}) => (
            <ActionIcon.Tertiary disabled={disabled}>{children.icon}</ActionIcon.Tertiary>
        ),
    },
);

figma.connect(
    ActionIcon.Quaternary,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-49884',
    {
        variant: {Variant: 'Quaternary'},
        props: actionIconProps,
        example: ({disabled, children}) => (
            <ActionIcon.Quaternary disabled={disabled}>{children.icon}</ActionIcon.Quaternary>
        ),
    },
);

// -- Destructive --

figma.connect(
    ActionIcon.DestructivePrimary,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=2274-9600',
    {
        variant: {Variant: 'Primary'},
        props: actionIconProps,
        example: ({disabled, children}) => (
            <ActionIcon.DestructivePrimary disabled={disabled}>{children.icon}</ActionIcon.DestructivePrimary>
        ),
    },
);

figma.connect(
    ActionIcon.DestructiveSecondary,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=2274-9600',
    {
        variant: {Variant: 'Secondary'},
        props: actionIconProps,
        example: ({disabled, children}) => (
            <ActionIcon.DestructiveSecondary disabled={disabled}>{children.icon}</ActionIcon.DestructiveSecondary>
        ),
    },
);

figma.connect(
    ActionIcon.DestructiveTertiary,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=2274-9600',
    {
        variant: {Variant: 'Tertiary'},
        props: actionIconProps,
        example: ({disabled, children}) => (
            <ActionIcon.DestructiveTertiary disabled={disabled}>{children.icon}</ActionIcon.DestructiveTertiary>
        ),
    },
);

figma.connect(
    ActionIcon.DestructiveQuaternary,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=2274-9600',
    {
        variant: {Variant: 'Quaternary'},
        props: actionIconProps,
        example: ({disabled, children}) => (
            <ActionIcon.DestructiveQuaternary disabled={disabled}>{children.icon}</ActionIcon.DestructiveQuaternary>
        ),
    },
);
