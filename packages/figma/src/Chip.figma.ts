// url=https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-51718
// component=Chip

import figma from 'figma';

const checked = figma.selectedInstance.getEnum('State', {
    Checked: true,
});
const disabled = figma.selectedInstance.getEnum('State', {
    Disabled: true,
});
const children = figma.selectedInstance.findText('Awesome chip').__render__();

export default {
    id: 'Chip',
    imports: ["import { Chip } from '@coveord/plasma-mantine';"],
    example: figma.code`<Chip${figma.helpers.react.renderProp(
        'checked',
        checked,
    )}${figma.helpers.react.renderProp('disabled', disabled)}>
            ${figma.helpers.react.renderChildren(children)}
        </Chip>`,
    metadata: {nestable: true},
};
