// url=https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma---Components-Library?node-id=7-50428
// component=CloseButton

import figma from 'figma';

const size = figma.selectedInstance.getEnum('Size', {
    sm: 'sm',
});

export default {
    id: 'CloseButton',
    imports: ["import { CloseButton } from '@coveord/plasma-mantine';"],
    example: figma.code`<CloseButton${figma.helpers.react.renderProp('size', size)}/>`,
    metadata: {nestable: true},
};
