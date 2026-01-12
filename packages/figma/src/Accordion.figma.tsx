import {Accordion} from '@coveord/plasma-mantine';
import {figma} from '@figma/code-connect';
import {ReactNode} from 'react';

figma.connect(
    Accordion.Item,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma---Components-Library?node-id=2879-916',
    {
        props: {
            value: figma.string('Label'),
            control: figma.instance<ReactNode>('Swap Left'),
        },
        example: (props) => (
            <Accordion.Item value={props.value}>
                <Accordion.Control icon={props.control}>{props.value}</Accordion.Control>
                <Accordion.Panel>
                    {
                        'Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.'
                    }
                </Accordion.Panel>
            </Accordion.Item>
        ),
    },
);

figma.connect(
    Accordion,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma---Components-Library?node-id=2879-1115',
    {
        props: {
            children: figma.children('Accordion.Item'),
        },
        example: (props) => <Accordion>{props.children}</Accordion>,
    },
);
