import {StatusToken} from '@coveord/plasma-mantine';
import {figma} from '@figma/code-connect';

figma.connect(
    StatusToken,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-51632',
    {
        props: {
            variant: figma.enum('variant', {
                success: 'success',
                caution: 'caution',
                error: 'error',
                disabled: 'disabled',
                waiting: 'waiting',
                edited: 'edited',
            }),
            size: figma.enum('size', {
                sm: 'sm',
                lg: 'lg',
            }),
        },
        example: ({variant, size}) => <StatusToken variant={variant} size={size} />,
    },
);
