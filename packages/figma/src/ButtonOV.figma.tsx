import {ButtonDestructive, ButtonPrimary, ButtonSecondary, ButtonTertiary} from '@coveord/plasma-mantine';
import figma from '@figma/code-connect';

figma.connect(
    ButtonPrimary,
    'https://www.figma.com/design/lFjxQoLHYzdLObC0g4HdWd/Pretine-7-for-Coveo?node-id=8613-337238&m=dev',
    {
        variant: {Type: 'Primary'},
        props: {
            disabled: figma.enum('State', {
                Disabled: true,
            }),
        },
        example: ({disabled}) => <ButtonPrimary disabled={disabled} />,
    },
);

figma.connect(
    ButtonSecondary,
    'https://www.figma.com/design/lFjxQoLHYzdLObC0g4HdWd/Pretine-7-for-Coveo?node-id=8613-337238&m=dev',
    {
        variant: {Type: 'Secondary'},
        props: {
            disabled: figma.enum('State', {
                Disabled: true,
            }),
        },
        example: ({disabled}) => <ButtonSecondary disabled={disabled} />,
    },
);

figma.connect(
    ButtonTertiary,
    'https://www.figma.com/design/lFjxQoLHYzdLObC0g4HdWd/Pretine-7-for-Coveo?node-id=8613-337238&m=dev',
    {
        variant: {Type: 'Tertiary'},
        props: {
            disabled: figma.enum('State', {
                Disabled: true,
            }),
        },
        example: ({disabled}) => <ButtonTertiary disabled={disabled} />,
    },
);

figma.connect(
    ButtonDestructive,
    'https://www.figma.com/design/lFjxQoLHYzdLObC0g4HdWd/Pretine-7-for-Coveo?node-id=8613-337238&m=dev',
    {
        variant: {Type: 'Destructive'},
        props: {
            disabled: figma.enum('State', {
                Disabled: true,
            }),
        },
        example: ({disabled}) => <ButtonDestructive disabled={disabled} />,
    },
);
