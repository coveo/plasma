import {Card} from '@coveord/plasma-mantine';
import {figma} from '@figma/code-connect';

const cardsProps = {
    state: figma.enum('state', {
        default: 'default',
        hover: 'hover',
        selected: 'selected',
        disabled: 'disabled',
    }),
    children: figma.slot('card-content'),
};

figma.connect(Card, 'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-51677', {
    props: cardsProps,
    variant: {state: 'default'},
    example: (props) => <Card>{props.children}</Card>,
});

figma.connect(Card, 'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-51677', {
    props: cardsProps,
    variant: {state: 'selected'},
    example: (props) => (
        <Card variant="hover" mod={{selected: true}}>
            {props.children}
        </Card>
    ),
});

figma.connect(Card, 'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-51677', {
    props: cardsProps,
    variant: {state: 'hover'},
    example: (props) => (
        <Card variant="hover" mod={{selected: false}}>
            {props.children}
        </Card>
    ),
});

figma.connect(Card, 'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-51677', {
    props: cardsProps,
    variant: {state: 'disabled'},
    example: (props) => <Card mod={{disabled: true}}>{props.children}</Card>,
});
