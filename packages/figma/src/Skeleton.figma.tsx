import {Skeleton} from '@coveord/plasma-mantine';
import {figma} from '@figma/code-connect';

const props = {
    variant: figma.enum('variant', {
        default: 'default',
        circle: 'circle',
        content: 'content',
    }),
};

figma.connect(
    Skeleton,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=2640-127&m=dev',
    {
        props,
        example: () => <Skeleton height={16} width={320} />,
    },
);

figma.connect(
    Skeleton,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=2640-127&m=dev',
    {
        props,
        variant: {variant: 'circle'},
        example: () => <Skeleton circle height={16} />,
    },
);
