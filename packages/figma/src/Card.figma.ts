// url=https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-51677
// component=Card

import figma from 'figma';

// Branch per variant; no default, else first.

let template;
if (figma.selectedInstance.getPropertyValue('State') === 'Default') {
    const children = figma.selectedInstance.getInstanceSwap('Swap Content')?.executeTemplate().example;

    template = {
        id: 'Card',
        imports: ["import { Card } from '@coveord/plasma-mantine';"],
        example: figma.code`<Card>${figma.helpers.react.renderChildren(children)}</Card>`,
        metadata: {nestable: true},
    };
} else if (figma.selectedInstance.getPropertyValue('State') === 'Selected') {
    const children = figma.selectedInstance.getInstanceSwap('Swap Content')?.executeTemplate().example;

    template = {
        id: 'Card',
        imports: ["import { Card } from '@coveord/plasma-mantine';"],
        example: figma.code`<Card variant="hover" mod={{ selected: true }}>
            ${figma.helpers.react.renderChildren(children)}
        </Card>`,
        metadata: {nestable: true},
    };
} else if (figma.selectedInstance.getPropertyValue('State') === 'Hover') {
    const children = figma.selectedInstance.getInstanceSwap('Swap Content')?.executeTemplate().example;

    template = {
        id: 'Card',
        imports: ["import { Card } from '@coveord/plasma-mantine';"],
        example: figma.code`<Card variant="hover" mod={{ selected: false }}>
            ${figma.helpers.react.renderChildren(children)}
        </Card>`,
        metadata: {nestable: true},
    };
} else if (figma.selectedInstance.getPropertyValue('State') === 'Disabled') {
    const children = figma.selectedInstance.getInstanceSwap('Swap Content')?.executeTemplate().example;

    template = {
        id: 'Card',
        imports: ["import { Card } from '@coveord/plasma-mantine';"],
        example: figma.code`<Card mod={{ disabled: true }}>${figma.helpers.react.renderChildren(children)}</Card>`,
        metadata: {nestable: true},
    };
} else {
    const children = figma.selectedInstance.getInstanceSwap('Swap Content')?.executeTemplate().example;

    template = {
        id: 'Card',
        imports: ["import { Card } from '@coveord/plasma-mantine';"],
        example: figma.code`<Card>${figma.helpers.react.renderChildren(children)}</Card>`,
        metadata: {nestable: true},
    };
}

export default template;
