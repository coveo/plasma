import {NavLink} from '@coveord/plasma-mantine';
import {figma} from '@figma/code-connect';
import type {ReactElement} from 'react';

figma.connect(
    NavLink,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=2611-1674',
    {
        props: {
            label: figma.string('label'),
            disabled: figma.enum('state', {
                disabled: true,
            }),
            rightSection: figma.boolean<ReactElement, undefined>('rightSection', {
                true: figma.instance<ReactElement>('swapRight'),
            }),
            leftSection: figma.boolean<ReactElement, undefined>('leftSection', {
                true: figma.instance<ReactElement>('swapLeft'),
            }),
            active: figma.enum('state', {
                active: true,
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
