// url=https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-47814
// component=Pill

import figma from 'figma';

const label = figma.selectedInstance.getString('Text');
const withRemoveButton = figma.selectedInstance.getBoolean('CloseButton');

export default {
    id: 'Pill',
    imports: ["import { Pill } from '@coveord/plasma-mantine';"],
    example: figma.code`<Pill${figma.helpers.react.renderProp(
        'withRemoveButton',
        withRemoveButton,
    )}>${figma.helpers.react.renderChildren(label)}</Pill>`,
    metadata: {nestable: true},
};
