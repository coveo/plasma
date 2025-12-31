import {ChildForm} from '@coveord/plasma-mantine';
import {figma} from '@figma/code-connect';

figma.connect(
    ChildForm,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=2943-5116',
    {
        props: {},
        example: (props) => <ChildForm in>Content</ChildForm>,
    },
);
