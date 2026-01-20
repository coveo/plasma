import {Anchor} from '@coveord/plasma-mantine';
import {figma} from '@figma/code-connect';

figma.connect(
    Anchor,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=2420-13252',
    {
        props: {
            label: figma.string('Label'),
            size: figma.enum('Size', {
                xs: 'xs',
            }),
        },
        example: ({label, size}) => (
            <Anchor size={size} href="/destination-link">
                {label}
            </Anchor>
        ),
    },
);
