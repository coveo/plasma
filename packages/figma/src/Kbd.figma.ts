// url=https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=2475-6418
// component=Kbd

import figma from 'figma';

const children = figma.selectedInstance.getString('Text');

export default {
    id: 'Kbd',
    imports: ["import { Kbd } from '@coveord/plasma-mantine';"],
    example: figma.code`<Kbd>${figma.helpers.react.renderChildren(children)}</Kbd>`,
    metadata: {nestable: true},
};
