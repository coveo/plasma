import {CloseButton} from '@coveord/plasma-mantine';
import {figma} from '@figma/code-connect';

figma.connect(
    CloseButton,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma---Components-Library?node-id=7%3A50428&m=dev',
    {
        example: () => <CloseButton />,
    },
);
