import {NavLink} from '@coveord/plasma-mantine';
import {figma} from '@figma/code-connect';

figma.connect(
    NavLink.NavLink,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=2611-1674',
    {
        props: {
            label: figma.string('Label'),
            disabled: figma.enum('State', {
                Disabled: true,
            }),
            rightSection: figma.boolean<React.ReactNode, never>('Right Section', {
                true: figma.instance('Swap Right'),
            }),
            leftSection: figma.boolean<React.ReactNode, never>('Left Section', {
                true: figma.instance('Swap Left'),
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
