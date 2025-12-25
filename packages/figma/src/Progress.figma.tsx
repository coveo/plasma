import {Progress} from '@coveord/plasma-mantine';
import {figma} from '@figma/code-connect';

figma.connect(Progress, 'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-51177', {
    props: {
        color: figma.enum('Semantic', {
            Info: 'var(--mantine-primary-color-filled)',
            Success: 'success',
            Caution: 'yellow',
            Error: 'red',
        }),
    },
    example: (props) => <Progress value={50} w={300} color={props.color} />,
});
