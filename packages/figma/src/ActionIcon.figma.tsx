import {ActionIcon} from '@coveord/plasma-mantine';
import {figma} from '@figma/code-connect';

const actionIconProps = {
    children: figma.instance('Icon Swap'),
    disabled: figma.enum('State', {
        Disabled: true,
    }),
};

figma.connect(
    ActionIcon.Primary,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-49884&m=dev',
    {
        variant: {Variant: 'Primary'},
        props: actionIconProps,
        example: ({disabled, children}) => <ActionIcon.Primary disabled={disabled}>{children}</ActionIcon.Primary>,
    },
);

figma.connect(
    ActionIcon.Secondary,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-49884&m=dev',
    {
        variant: {Variant: 'Secondary'},
        props: actionIconProps,
        example: ({disabled, children}) => <ActionIcon.Secondary disabled={disabled}>{children}</ActionIcon.Secondary>,
    },
);

figma.connect(
    ActionIcon.Tertiary,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-49884&m=dev',
    {
        variant: {Variant: 'Tertiary'},
        props: actionIconProps,
        example: ({disabled, children}) => <ActionIcon.Tertiary disabled={disabled}>{children}</ActionIcon.Tertiary>,
    },
);

figma.connect(
    ActionIcon.Quaternary,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-49884&m=dev',
    {
        variant: {Variant: 'Quaternary'},
        props: actionIconProps,
        example: ({disabled, children}) => (
            <ActionIcon.Quaternary disabled={disabled}>{children}</ActionIcon.Quaternary>
        ),
    },
);

// -- Destructive --

figma.connect(
    ActionIcon.DestructivePrimary,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-49909&m=dev',
    {
        variant: {Variant: 'Primary'},
        props: actionIconProps,
        example: ({disabled, children}) => (
            <ActionIcon.DestructivePrimary disabled={disabled}>{children}</ActionIcon.DestructivePrimary>
        ),
    },
);

figma.connect(
    ActionIcon.DestructiveSecondary,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-49909&m=dev',
    {
        variant: {Variant: 'Secondary'},
        props: actionIconProps,
        example: ({disabled, children}) => (
            <ActionIcon.DestructiveSecondary disabled={disabled}>{children}</ActionIcon.DestructiveSecondary>
        ),
    },
);

figma.connect(
    ActionIcon.DestructiveTertiary,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-49909&m=dev',
    {
        variant: {Variant: 'Tertiary'},
        props: actionIconProps,
        example: ({disabled, children}) => (
            <ActionIcon.DestructiveTertiary disabled={disabled}>{children}</ActionIcon.DestructiveTertiary>
        ),
    },
);

figma.connect(
    ActionIcon.DestructiveQuaternary,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-49909&m=dev',
    {
        variant: {Variant: 'Quaternary'},
        props: actionIconProps,
        example: ({disabled, children}) => (
            <ActionIcon.DestructiveQuaternary disabled={disabled}>{children}</ActionIcon.DestructiveQuaternary>
        ),
    },
);
