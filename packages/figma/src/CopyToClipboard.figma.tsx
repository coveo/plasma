import {CopyToClipboard} from '@coveord/plasma-mantine';
import {figma} from '@figma/code-connect';

figma.connect(
    CopyToClipboard,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=4410-2181',
    {
        props: {
            size: figma.enum('size', {
                md: 'md',
                lg: 'lg',
            }),
            disabled: figma.enum('disabled', {
                true: true,
            }),
        },
        example: ({size, disabled}) => <CopyToClipboard value="Text to copy" size={size} disabled={disabled} />,
    },
);
