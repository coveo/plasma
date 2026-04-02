import {Prompt} from '@coveord/plasma-mantine';
import {figma} from '@figma/code-connect';

const props = {
    title: figma.string('Title'),
    children: figma.string('Text'),
};

figma.connect(Prompt, 'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma---Components?node-id=4751-2416', {
    props,
    variant: {Variant: 'Information'},
    example: (_props) => (
        <Prompt variant="info" title={_props.title} opened onClose={() => void 0}>
            {_props.children}
        </Prompt>
    ),
});

figma.connect(Prompt, 'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma---Components?node-id=4751-2416', {
    props,
    variant: {Variant: 'Success'},
    example: (_props) => (
        <Prompt variant="success" title={_props.title} opened onClose={() => void 0}>
            {_props.children}
        </Prompt>
    ),
});

figma.connect(Prompt, 'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma---Components?node-id=4751-2416', {
    props,
    variant: {Variant: 'Warning'},
    example: (_props) => (
        <Prompt variant="warning" title={_props.title} opened onClose={() => void 0}>
            {_props.children}
        </Prompt>
    ),
});

figma.connect(Prompt, 'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma---Components?node-id=4751-2416', {
    props,
    variant: {Variant: 'Critical'},
    example: (_props) => (
        <Prompt variant="critical" title={_props.title} opened onClose={() => void 0}>
            {_props.children}
        </Prompt>
    ),
});
