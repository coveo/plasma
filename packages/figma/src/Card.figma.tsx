import {Card} from '@coveord/plasma-mantine';
import {figma} from '@figma/code-connect';

const cardsProps = {
    state: figma.enum('State', {Default: 'Default', Hover: 'Hover', Selected: 'Selected'}),
    children: figma.instance('Modal.ContentSwap'),
};

figma.connect(Card, 'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-51677', {
    props: cardsProps,
    variant: {State: 'Default'},
    example: (props) => <Card>{props.children}</Card>,
});

figma.connect(Card, 'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-51677', {
    props: cardsProps,
    variant: {State: 'Selected'},
    example: () => <Card variant="hover" mod={{selected: true}} />,
});

figma.connect(Card, 'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-51677', {
    props: cardsProps,
    variant: {State: 'Hover'},
    example: () => <Card variant="hover" mod={{selected: false}} />,
});
