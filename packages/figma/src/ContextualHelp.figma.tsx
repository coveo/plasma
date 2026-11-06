import {ContextualHelp} from '@coveord/plasma-mantine';
import {figma} from '@figma/code-connect';

figma.connect(
    ContextualHelp,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=10483-129',
    {
        props: {
            variant: figma.enum('variant', {
                text: 'text',
                interactive: 'interactive',
            }),
            size: figma.enum('size', {
                xs: 'xs',
                sm: 'sm',
                md: 'md',
                lg: 'lg',
            }),
        },
        example: ({variant, size}) => (
            <ContextualHelp variant={variant} size={size} aria-label="More information">
                Help content
            </ContextualHelp>
        ),
    },
);
