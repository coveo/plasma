import {Kbd} from '@coveord/plasma-mantine';
import {figma} from '@figma/code-connect';

figma.connect(Kbd, 'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=2475-6418', {
    props: {
        children: figma.string('Text'),
    },
    example: (props) => <Kbd>{props.children}</Kbd>,
});
