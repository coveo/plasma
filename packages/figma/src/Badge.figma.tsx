import {Badge} from '@coveord/plasma-mantine';
import {figma} from '@figma/code-connect';

const badgeProps = {
    size: figma.enum('Size', {
        Small: 'small',
        Large: 'large',
    }),
    leftSection: figma.boolean('LeftSection', {
        true: figma.instance('Swap Left'),
    }),
    rightSection: figma.boolean('RightSection', {
        true: figma.instance('Swap Right'),
    }),
    placeholder: figma.string('Placeholder'),
};

figma.connect(
    Badge.Primary,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma---Components-Library?node-id=7%3A50600',
    {
        variant: {Type: 'Primary'},
        props: badgeProps,
        example: ({size, leftSection, rightSection, placeholder}) => (
            <Badge.Primary size={size} leftSection={leftSection} rightSection={rightSection}>
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
        props: badgeProps,
        example: ({size, leftSection, rightSection, placeholder}) => (
            <Badge.Secondary size={size} leftSection={leftSection} rightSection={rightSection}>
                {placeholder}
            </Badge.Secondary>
        ),
    },
);

figma.connect(
    Badge.Success,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma---Components-Library?node-id=7%3A50600',
    {
        variant: {Type: 'Success'},
        props: badgeProps,
        example: ({size, leftSection, rightSection, placeholder}) => (
            <Badge.Success size={size} leftSection={leftSection} rightSection={rightSection}>
                {placeholder}
            </Badge.Success>
        ),
    },
);

figma.connect(
    Badge.Warning,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma---Components-Library?node-id=7%3A50600',
    {
        variant: {Type: 'Warning'},
        props: badgeProps,
        example: ({size, leftSection, rightSection, placeholder}) => (
            <Badge.Warning size={size} leftSection={leftSection} rightSection={rightSection}>
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
        props: badgeProps,
        example: ({size, leftSection, rightSection, placeholder}) => (
            <Badge.Critical size={size} leftSection={leftSection} rightSection={rightSection}>
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
        props: badgeProps,
        example: ({size, leftSection, rightSection, placeholder}) => (
            <Badge.Disabled size={size} leftSection={leftSection} rightSection={rightSection}>
                {placeholder}
            </Badge.Disabled>
        ),
    },
);
