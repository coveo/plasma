import {CopyToClipboard} from '@coveord/plasma-mantine';
import {figma} from '@figma/code-connect';

figma.connect(
    CopyToClipboard,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma---Components-Library?node-id=7%3A52264',
    {
        props: {
            // These props were automatically mapped based on your linked code:
            disabled: figma.enum('Variant', {
                Disabled: true,
            }),
        },
        example: (props) => <CopyToClipboard value={/* value to copy */} disabled={props.disabled} />,
    },
);
