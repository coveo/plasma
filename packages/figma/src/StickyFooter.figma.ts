// url=https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=2906-4477
// component=StickyFooter

import figma from 'figma';

const borderTop = figma.selectedInstance.getEnum('Variant', {
    Default: true,
    Borderless: false,
});

export default {
    id: 'StickyFooter',
    imports: ["import { Button, StickyFooter } from '@coveord/plasma-mantine';"],
    example: figma.code`<StickyFooter${figma.helpers.react.renderProp('borderTop', borderTop)}>
                <Button.Secondary>Cancel</Button.Secondary>
                <Button.Secondary>Back</Button.Secondary>
                <Button.Primary>Save</Button.Primary>
            </StickyFooter>`,
    metadata: {nestable: true},
};
