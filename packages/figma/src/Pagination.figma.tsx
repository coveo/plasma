import {Pagination} from '@coveord/plasma-mantine';
import {figma} from '@figma/code-connect';

figma.connect(
    Pagination,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma---Components-Library?node-id=3752-1243',
    {
        example: () => <Pagination total={10} />,
    },
);
