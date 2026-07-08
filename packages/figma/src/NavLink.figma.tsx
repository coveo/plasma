import {NavLink} from '@coveord/plasma-mantine';
import {figma} from '@figma/code-connect';
import type {ReactElement} from 'react';

figma.connect(
    NavLink,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=2611-1674',
    {
        props: {
            label: figma.string('Label'),
            disabled: figma.enum('State', {
                Disabled: true,
            }),
            rightSection: figma.boolean<ReactElement, undefined>('Right Section', {
                true: figma.instance<ReactElement>('Swap Right'),
            }),
            leftSection: figma.boolean<ReactElement, undefined>('Left Section', {
                true: figma.instance<ReactElement>('Swap Left'),
            }),
            active: figma.enum('State', {
                Active: true,
            }),
        },
        example: ({label, disabled, rightSection, leftSection, active}) => (
            <NavLink
                active={active}
                label={label}
                disabled={disabled}
                rightSection={rightSection}
                leftSection={leftSection}
            />
        ),
    },
);
