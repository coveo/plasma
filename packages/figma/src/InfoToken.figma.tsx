import {InfoToken} from '@coveord/plasma-mantine';
import {figma} from '@figma/code-connect';

figma.connect(
    InfoToken,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-50446',
    {
        props: {
            variant: figma.enum('Variant', {
                Information: 'information',
                Warning: 'warning',
                Error: 'error',
                Advice: 'advice',
                Question: 'advice',
            }),
            size: figma.enum('Size', {sm: 'xs', lg: 'md'}),
        },
        example: (props) => <InfoToken {...props} />,
    },
);
