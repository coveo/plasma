import {Button, StickyFooter} from '@coveord/plasma-mantine';
import {figma} from '@figma/code-connect';

figma.connect(
    StickyFooter,
    'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=2906-4477',
    {
        props: {
            borderTop: figma.enum('Variant', {
                Default: true,
                Borderless: false,
            }),
        },
        example: (props) => (
            <StickyFooter {...props}>
                <Button.Secondary>Cancel</Button.Secondary>
                <Button.Secondary>Back</Button.Secondary>
                <Button.Primary>Save</Button.Primary>
            </StickyFooter>
        ),
    },
);
