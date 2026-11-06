import {Pill} from '@coveord/plasma-mantine';
import {figma} from '@figma/code-connect';

figma.connect(Pill, 'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=5242-303', {
    props: {
        label: figma.string('label'),
        withRemoveButton: figma.enum('withCloseButton', {true: true, false: false}),
    },
    example: ({label, withRemoveButton}) => <Pill withRemoveButton={withRemoveButton}>{label}</Pill>,
});
