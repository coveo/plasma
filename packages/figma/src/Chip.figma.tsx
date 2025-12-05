import {Chip} from '@coveord/plasma-mantine';
import {figma} from '@figma/code-connect';

figma.connect(Chip, 'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-51718', {
    props: {
        checked: figma.enum('State', {
            Checked: true,
        }),
        disabled: figma.enum('State', {
            Disabled: true,
        }),
        children: figma.textContent('Awesome chip'),
    },
    example: ({checked, disabled, children}) => (
        <Chip checked={checked} disabled={disabled}>
            {children}
        </Chip>
    ),
});
