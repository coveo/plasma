import {Badge} from '@coveord/plasma-mantine';
import {figma} from '@figma/code-connect';

figma.connect(
    Badge.Primary,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma---Components-Library?node-id=7%3A50600',
    {
        variant: {Type: 'Primary'},
        props: {
            size: figma.enum('Size', {
                Small: 'small',
                Large: 'large',
            }),
            iconLeft: figma.boolean('Icon Left', {
                true: figma.instance('Swap Left'),
            }),
            iconRight: figma.boolean('Icon Right', {
                true: figma.instance('Swap Right'),
            }),
            placeholder: figma.string('Placeholder'),
        },
        example: ({size, iconLeft, iconRight, placeholder}) => (
            <Badge.Primary size={size} rightSection={iconRight} leftSection={iconLeft}>
                {placeholder}
            </Badge.Primary>
        ),
    },
);

figma.connect(
    Badge.Secondary,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma---Components-Library?node-id=7%3A50600',
    {
        variant: {Type: 'Secondary'},
        props: {
            size: figma.enum('Size', {
                Small: 'small',
                Large: 'large',
            }),
            iconLeft: figma.boolean('Icon Left', {
                true: figma.instance('Swap Left'),
            }),
            iconRight: figma.boolean('Icon Right', {
                true: figma.instance('Swap Right'),
            }),
            placeholder: figma.string('Placeholder'),
        },
        example: ({size, iconLeft, iconRight, placeholder}) => (
            <Badge.Secondary size={size} rightSection={iconRight} leftSection={iconLeft}>
                {placeholder}
            </Badge.Secondary>
        ),
    },
);

figma.connect(
    Badge.Warning,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma---Components-Library?node-id=7%3A50600',
    {
        variant: {Type: 'Warning'},
        props: {
            size: figma.enum('Size', {
                Small: 'small',
                Large: 'large',
            }),
            iconLeft: figma.boolean('Icon Left', {
                true: figma.instance('Swap Left'),
            }),
            iconRight: figma.boolean('Icon Right', {
                true: figma.instance('Swap Right'),
            }),
            placeholder: figma.string('Placeholder'),
        },
        example: ({size, iconLeft, iconRight, placeholder}) => (
            <Badge.Warning size={size} rightSection={iconRight} leftSection={iconLeft}>
                {placeholder}
            </Badge.Warning>
        ),
    },
);

figma.connect(
    Badge.Critical,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma---Components-Library?node-id=7%3A50600',
    {
        variant: {Type: 'Critical'},
        props: {
            size: figma.enum('Size', {
                Small: 'small',
                Large: 'large',
            }),
            iconLeft: figma.boolean('Icon Left', {
                true: figma.instance('Swap Left'),
            }),
            iconRight: figma.boolean('Icon Right', {
                true: figma.instance('Swap Right'),
            }),
            placeholder: figma.string('Placeholder'),
        },
        example: ({size, iconLeft, iconRight, placeholder}) => (
            <Badge.Critical size={size} rightSection={iconRight} leftSection={iconLeft}>
                {placeholder}
            </Badge.Critical>
        ),
    },
);

figma.connect(
    Badge.Disabled,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma---Components-Library?node-id=7%3A50600',
    {
        variant: {Type: 'Disabled'},
        props: {
            size: figma.enum('Size', {
                Small: 'small',
                Large: 'large',
            }),
            iconLeft: figma.boolean('Icon Left', {
                true: figma.instance('Swap Left'),
            }),
            iconRight: figma.boolean('Icon Right', {
                true: figma.instance('Swap Right'),
            }),
            placeholder: figma.string('Placeholder'),
        },
        example: ({size, iconLeft, iconRight, placeholder}) => (
            <Badge.Disabled size={size} rightSection={iconRight} leftSection={iconLeft}>
                {placeholder}
            </Badge.Disabled>
        ),
    },
);
