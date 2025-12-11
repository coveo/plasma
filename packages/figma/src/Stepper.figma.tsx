import {Stepper} from '@coveord/plasma-mantine';
import {figma} from '@figma/code-connect';

figma.connect(
    Stepper.Step,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-47904',
    {
        props: {
            label: figma.string('Placeholder'),
            disabled: figma.enum('State', {
                Disabled: true,
            }),
            rightSection: figma.boolean<React.ReactNode, never>('Right Section', {
                true: figma.instance('Swap Right Section'),
            }),
            leftSection: figma.boolean<React.ReactNode, never>('Left Icon', {
                true: figma.instance('Swap Left'),
            }),
            active: figma.enum('State', {
                Active: true,
            }),
        },
        example: ({label, disabled, rightSection, leftSection, active}) => (
            <Stepper.Step
                label={label}
                disabled={disabled}
                rightSection={rightSection}
                leftSection={leftSection}
                active={active}
            />
        ),
    },
);
