import {Loader} from '@coveord/plasma-mantine';
import {figma} from '@figma/code-connect';

figma.connect(
    Loader,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=2266-12188',
    {
        props: {
            size: figma.enum('size', {
                Small: 'sm',
                Large: 'lg',
            }),
        },
        example: (props) => <Loader size={props.size} />,
    },
);
