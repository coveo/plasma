import {ActionIcon} from '@coveord/plasma-mantine';
import {figma} from '@figma/code-connect';

const actionIconProps = {
    children: figma.nestedProps('Icon', {
        icon: figma.instance('Icon'),
    }),
    disabled: figma.enum('State', {
        Disabled: true,
    }),
    size: figma.enum('Size', {
        sm: 'sm',
    }),
};

const actionIconDestructiveProps = {
    children: figma.nestedProps('Icon', {
        icon: figma.instance('Icon'),
    }),
    disabled: figma.enum('State', {
        Disabled: true,
    }),
    size: figma.enum('Size', {
        sm: 'sm',
    }),
};

figma.connect(
    ActionIcon.Primary,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-49884',
    {
        variant: {Variant: 'Primary'},
        props: actionIconProps,
        example: ({disabled, children, size}) => (
            <ActionIcon.Primary disabled={disabled} size={size}>
                {children.icon}
            </ActionIcon.Primary>
        ),
    },
);

figma.connect(
    ActionIcon.Secondary,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-49884',
    {
        variant: {Variant: 'Secondary'},
        props: actionIconProps,
        example: ({disabled, children, size}) => (
            <ActionIcon.Secondary disabled={disabled} size={size}>
                {children.icon}
            </ActionIcon.Secondary>
        ),
    },
);

figma.connect(
    ActionIcon.Tertiary,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-49884',
    {
        variant: {Variant: 'Tertiary'},
        props: actionIconProps,
        example: ({disabled, children, size}) => (
            <ActionIcon.Tertiary disabled={disabled} size={size}>
                {children.icon}
            </ActionIcon.Tertiary>
        ),
    },
);

figma.connect(
    ActionIcon.Quaternary,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-49884',
    {
        variant: {Variant: 'Quaternary'},
        props: actionIconProps,
        example: ({disabled, children, size}) => (
            <ActionIcon.Quaternary disabled={disabled} size={size}>
                {children.icon}
            </ActionIcon.Quaternary>
        ),
    },
);

// -- Destructive --

figma.connect(
    ActionIcon.DestructivePrimary,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=2911-3649',
    {
        variant: {Variant: 'Primary'},
        props: actionIconDestructiveProps,
        example: ({disabled, children, size}) => (
            <ActionIcon.DestructivePrimary disabled={disabled} size={size}>
                {children.icon}
            </ActionIcon.DestructivePrimary>
        ),
    },
);

figma.connect(
    ActionIcon.DestructiveSecondary,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=2911-3649',
    {
        variant: {Variant: 'Secondary'},
        props: actionIconDestructiveProps,
        example: ({disabled, children, size}) => (
            <ActionIcon.DestructiveSecondary disabled={disabled} size={size}>
                {children.icon}
            </ActionIcon.DestructiveSecondary>
        ),
    },
);

figma.connect(
    ActionIcon.DestructiveTertiary,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=2911-3649',
    {
        variant: {Variant: 'Tertiary'},
        props: actionIconDestructiveProps,
        example: ({disabled, children, size}) => (
            <ActionIcon.DestructiveTertiary disabled={disabled} size={size}>
                {children.icon}
            </ActionIcon.DestructiveTertiary>
        ),
    },
);

figma.connect(
    ActionIcon.DestructiveQuaternary,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=2911-3649',
    {
        variant: {Variant: 'Quaternary'},
        props: actionIconDestructiveProps,
        example: ({disabled, children, size}) => (
            <ActionIcon.DestructiveQuaternary disabled={disabled} size={size}>
                {children.icon}
            </ActionIcon.DestructiveQuaternary>
        ),
    },
);
