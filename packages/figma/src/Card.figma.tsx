import {Card} from '@coveord/plasma-mantine';
import {figma} from '@figma/code-connect';

const cardsProps = {
    type: figma.enum('Type', {'Table cards': 'Table cards', Container: 'Container', Table: 'Table', Action: 'Action'}),
    state: figma.enum('State', {Default: 'Default', Hover: 'Hover', Selected: 'Selected'}),
};

figma.connect(Card, 'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-51677', {
    props: cardsProps,
    variant: {Type: 'Table', State: 'Selected'},
    example: (props) => <Card variant="hover" mod={{selected: true}} />,
});

figma.connect(Card, 'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-51677', {
    props: cardsProps,
    variant: {Type: 'Table', State: 'Hover'},
    example: (props) => <Card variant="hover" mod={{selected: false}} />,
});

figma.connect(Card, 'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-51677', {
    props: cardsProps,
    variant: {Type: 'Action'},
    example: (props) => <Card />,
});
