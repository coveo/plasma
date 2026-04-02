import {InfoToken} from '@coveord/plasma-mantine';
import {figma} from '@figma/code-connect';

const props = {
    variant: figma.enum('Variant', {
        Outline: 'outline',
        Light: 'light',
    }),
    size: figma.enum('Size', {xs: 'xs', sm: 'sm', md: 'md', lg: 'lg'}),
};

figma.connect(
    InfoToken.Information,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma---Components?node-id=7-50446',
    {
        props,
        variant: {Type: 'Information'},
        example: (_props) => <InfoToken.Information {..._props} />,
    },
);

figma.connect(
    InfoToken.Question,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma---Components?node-id=7-50446',
    {
        props,
        variant: {Type: 'Question'},
        example: (_props) => <InfoToken.Question {..._props} />,
    },
);

figma.connect(
    InfoToken.Advice,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma---Components?node-id=7-50446',
    {
        props,
        variant: {Type: 'Advice'},
        example: (_props) => <InfoToken.Advice {..._props} />,
    },
);

figma.connect(
    InfoToken.Success,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma---Components?node-id=7-50446',
    {
        props,
        variant: {Type: 'Success'},
        example: (_props) => <InfoToken.Success {..._props} />,
    },
);

figma.connect(
    InfoToken.Warning,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma---Components?node-id=7-50446',
    {
        props,
        variant: {Type: 'Warning'},
        example: (_props) => <InfoToken.Warning {..._props} />,
    },
);

figma.connect(
    InfoToken.Error,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma---Components?node-id=7-50446',
    {
        props,
        variant: {Type: 'Error'},
        example: (_props) => <InfoToken.Error {..._props} />,
    },
);
