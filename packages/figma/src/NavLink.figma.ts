// url=https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=2611-1674
// component=NavLink

import figma from 'figma';

const label = figma.selectedInstance.getString('Label');
const disabled = figma.selectedInstance.getEnum('State', {
    Disabled: true,
});
const rightSection = figma.selectedInstance.getBoolean('Right Section', {
    true: figma.selectedInstance.getInstanceSwap('Swap Right')?.executeTemplate().example,
});
const leftSection = figma.selectedInstance.getBoolean('Left Section', {
    true: figma.selectedInstance.getInstanceSwap('Swap Left')?.executeTemplate().example,
});
const active = figma.selectedInstance.getEnum('State', {
    Active: true,
});

export default {
    id: 'NavLink',
    imports: ["import { NavLink } from '@coveord/plasma-mantine';"],
    example: figma.code`<NavLink${figma.helpers.react.renderProp('active', active)}${figma.helpers.react.renderProp(
        'label',
        label,
    )}${figma.helpers.react.renderProp('disabled', disabled)}${figma.helpers.react.renderProp(
        'rightSection',
        rightSection,
    )}${figma.helpers.react.renderProp('leftSection', leftSection)}/>`,
    metadata: {nestable: true},
};
