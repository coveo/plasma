import {Pagination} from '@coveord/plasma-mantine';
import {figma} from '@figma/code-connect';

figma.connect(
    Pagination,
    'https://www.figma.com/design/HcXgHKwZhn3Oz3CL7mb8LJ/Components---NavLink--Skeleton--Image---Progress?node-id=7-50960',
    {
        example: () => <Pagination total={10} />,
    },
);
