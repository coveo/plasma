import {ActionIcon} from '@coveord/plasma-mantine';
import {figma} from '@figma/code-connect';

const actionIconProps = {
    children: figma.instance('icon'),
    disabled: figma.enum('state', {
        disabled: true,
    }),
    size: figma.enum('size', {
        sm: 'sm',
        md: 'md',
        lg: 'lg',
    }),
};

// ActionIcon_Destructive has no icon swap property in Figma yet, so the icon is not mapped
const actionIconDestructiveProps = {
    disabled: figma.enum('state', {
        disabled: true,
    }),
    size: figma.enum('size', {
        sm: 'sm',
        md: 'md',
        lg: 'lg',
    }),
};

figma.connect(
    ActionIcon.Primary,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-49884',
    {
        variant: {variant: 'primary'},
        props: actionIconProps,
        example: ({disabled, children, size}) => (
            <ActionIcon.Primary disabled={disabled} size={size}>
                {children}
            </ActionIcon.Primary>
        ),
    },
);

figma.connect(
    ActionIcon.Secondary,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-49884',
    {
        variant: {variant: 'secondary'},
        props: actionIconProps,
        example: ({disabled, children, size}) => (
            <ActionIcon.Secondary disabled={disabled} size={size}>
                {children}
            </ActionIcon.Secondary>
        ),
    },
);

figma.connect(
    ActionIcon.Tertiary,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-49884',
    {
        variant: {variant: 'tertiary'},
        props: actionIconProps,
        example: ({disabled, children, size}) => (
            <ActionIcon.Tertiary disabled={disabled} size={size}>
                {children}
            </ActionIcon.Tertiary>
        ),
    },
);

figma.connect(
    ActionIcon.Quaternary,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-49884',
    {
        variant: {variant: 'quaternary'},
        props: actionIconProps,
        example: ({disabled, children, size}) => (
            <ActionIcon.Quaternary disabled={disabled} size={size}>
                {children}
            </ActionIcon.Quaternary>
        ),
    },
);

// -- Destructive --

figma.connect(
    ActionIcon.DestructivePrimary,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=2911-3649',
    {
        variant: {variant: 'primary'},
        props: actionIconDestructiveProps,
        example: ({disabled, size}) => <ActionIcon.DestructivePrimary disabled={disabled} size={size} />,
    },
);

figma.connect(
    ActionIcon.DestructiveSecondary,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=2911-3649',
    {
        variant: {variant: 'secondary'},
        props: actionIconDestructiveProps,
        example: ({disabled, size}) => <ActionIcon.DestructiveSecondary disabled={disabled} size={size} />,
    },
);

figma.connect(
    ActionIcon.DestructiveTertiary,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=2911-3649',
    {
        variant: {variant: 'tertiary'},
        props: actionIconDestructiveProps,
        example: ({disabled, size}) => <ActionIcon.DestructiveTertiary disabled={disabled} size={size} />,
    },
);

figma.connect(
    ActionIcon.DestructiveQuaternary,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=2911-3649',
    {
        variant: {variant: 'quaternary'},
        props: actionIconDestructiveProps,
        example: ({disabled, size}) => <ActionIcon.DestructiveQuaternary disabled={disabled} size={size} />,
    },
);
