import {Tooltip} from '@coveord/plasma-mantine';
import {figma} from '@figma/code-connect';

figma.connect(
    Tooltip,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-51555&m=dev',
    {
        props: {
            label: figma.string('tooltip'),
            position: figma.enum('arrowPosition', {
                top: 'bottom',
                bottom: 'top',
                left: 'right',
                right: 'left',
            }),
            withArrow: figma.boolean('withArrow'),
        },
        example: (props) => <Tooltip {...props} />,
    },
);
