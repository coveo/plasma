import {Image} from '@coveord/plasma-mantine';
import {figma} from '@figma/code-connect';

figma.connect(
    Image,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-51218&m=dev',
    {
        props: {
            h: figma.enum('Size', {
                Thumb: 16,
                Medium: 48,
                Large: 134,
            }),
        },
        example: ({h}) => <Image h={h} w={h} src={'SVGImage'} />,
    },
);
