// url=https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma---Components-Library?node-id=2879-1115
// component=Accordion

import figma from 'figma';

const children = figma.properties.children(['.Accordion.Item']);

export default {
    id: 'Accordion',
    imports: ["import { Accordion } from '@coveord/plasma-mantine';"],
    example: figma.code`<Accordion>${figma.helpers.react.renderChildren(children)}</Accordion>`,
    metadata: {nestable: true},
};
