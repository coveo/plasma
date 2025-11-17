import {CloseButton} from '@coveord/plasma-mantine';
import {figma} from '@figma/code-connect';

figma.connect(
    CloseButton,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-50428&m=dev',
    {
        example: () => <CloseButton />,
    },
);
