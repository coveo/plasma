import {Tooltip} from '@coveord/plasma-mantine';
import {figma} from '@figma/code-connect';

figma.connect(
    Tooltip,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-51555&m=dev',
    {
        props: {
            label: figma.string('Tooltip'),
            position: figma.enum('Arrow Position', {
                Top: 'bottom',
                Bottom: 'top',
                Left: 'right',
                Right: 'left',
            }),
            withArrow: figma.boolean('With Arrow'),
        },
        example: (props) => <Tooltip {...props} />,
    },
);
