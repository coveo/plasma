import {NavLink} from '@coveord/plasma-mantine';
import {figma} from '@figma/code-connect';
import type {ReactElement} from 'react';

figma.connect(
    NavLink,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=2611-1674',
    {
        props: {
            label: figma.string('label'),
            disabled: figma.enum('disabled', {
                true: true,
            }),
            rightSection: figma.boolean<ReactElement, undefined>('_withRightSection', {
                true: figma.instance<ReactElement>('rightSection'),
            }),
            leftSection: figma.boolean<ReactElement, undefined>('_withLeftSection', {
                true: figma.instance<ReactElement>('leftSection'),
            }),
            active: figma.enum('state', {
                active: true,
            }),
            opened: figma.enum('opened', {
                true: true,
            }),
        },
        example: ({label, disabled, rightSection, leftSection, active, opened}) => (
            <NavLink
                active={active}
                opened={opened}
                label={label}
                disabled={disabled}
                rightSection={rightSection}
                leftSection={leftSection}
            />
        ),
    },
);
