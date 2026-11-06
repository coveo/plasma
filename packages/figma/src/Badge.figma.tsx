import {Badge} from '@coveord/plasma-mantine';
import {figma} from '@figma/code-connect';
import type {ReactElement} from 'react';

const badgeProps = {
    size: figma.enum('size', {
        sm: 'small',
        md: 'large',
    }),
    leftSection: figma.boolean<ReactElement, undefined>('leftSection', {
        true: figma.instance<ReactElement>('swapLeft'),
    }),
    rightSection: figma.boolean<ReactElement, undefined>('rightSection', {
        true: figma.instance<ReactElement>('swapRight'),
    }),
    placeholder: figma.string('placeholder'),
};

figma.connect(
    Badge.Primary,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma---Components-Library?node-id=7%3A50600',
    {
        variant: {type: 'primary'},
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
        variant: {type: 'secondary'},
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
        variant: {type: 'success'},
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
        variant: {type: 'warning'},
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
        variant: {type: 'critical'},
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
        variant: {type: 'disabled'},
        props: badgeProps,
        example: ({size, leftSection, rightSection, placeholder}) => (
            <Badge.Disabled size={size} leftSection={leftSection} rightSection={rightSection}>
                {placeholder}
            </Badge.Disabled>
        ),
    },
);
