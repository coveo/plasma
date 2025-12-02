import {Kbd} from '@coveord/plasma-mantine';
import {figma} from '@figma/code-connect';

figma.connect(Kbd, 'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-49112', {
    props: {
        children: figma.textContent('⌘'),
    },
    example: (props) => <Kbd>{props.children}</Kbd>,
});
