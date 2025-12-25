import {Pill} from '@coveord/plasma-mantine';
import {figma} from '@figma/code-connect';

figma.connect(Pill, 'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-47814', {
    props: {
        label: figma.string('Text'),
        withRemoveButton: figma.boolean('CloseButton'),
    },
    example: ({label, withRemoveButton}) => <Pill withRemoveButton={withRemoveButton}>{label}</Pill>,
});
