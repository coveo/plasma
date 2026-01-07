import {ScrollArea} from '@coveord/plasma-mantine';
import {figma} from '@figma/code-connect';

figma.connect(
    ScrollArea,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma---Components-Library?node-id=7-49454',
    {
        example: () => <ScrollArea h={250}>{/* ... content */}</ScrollArea>,
    },
);
