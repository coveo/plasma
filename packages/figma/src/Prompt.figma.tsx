import {Prompt} from '@coveord/plasma-mantine';
import {figma} from '@figma/code-connect';

const props = {
    title: figma.string('title'),
    children: figma.string('text'),
};

figma.connect(
    Prompt.Information,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma---Components?node-id=4751-2416',
    {
        props,
        variant: {variant: 'information'},
        example: (_props) => (
            <Prompt.Information title={_props.title} opened onClose={() => void 0}>
                {_props.children}
            </Prompt.Information>
        ),
    },
);

figma.connect(
    Prompt.Success,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma---Components?node-id=4751-2416',
    {
        props,
        variant: {variant: 'success'},
        example: (_props) => (
            <Prompt.Success title={_props.title} opened onClose={() => void 0}>
                {_props.children}
            </Prompt.Success>
        ),
    },
);

figma.connect(
    Prompt.Warning,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma---Components?node-id=4751-2416',
    {
        props,
        variant: {variant: 'warning'},
        example: (_props) => (
            <Prompt.Warning title={_props.title} opened onClose={() => void 0}>
                {_props.children}
            </Prompt.Warning>
        ),
    },
);

figma.connect(
    Prompt.Critical,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma---Components?node-id=4751-2416',
    {
        props,
        variant: {variant: 'critical'},
        example: (_props) => (
            <Prompt.Critical title={_props.title} opened onClose={() => void 0}>
                {_props.children}
            </Prompt.Critical>
        ),
    },
);
