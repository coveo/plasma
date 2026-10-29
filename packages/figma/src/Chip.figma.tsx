import {Chip} from '@coveord/plasma-mantine';
import {figma} from '@figma/code-connect';

figma.connect(Chip, 'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-51718', {
    props: {
        checked: figma.enum('state', {
            checked: true,
        }),
        disabled: figma.enum('state', {
            disabled: true,
        }),
        children: figma.string('label'),
    },
    example: ({checked, disabled, children}) => (
        <Chip checked={checked} disabled={disabled}>
            {children}
        </Chip>
    ),
});
