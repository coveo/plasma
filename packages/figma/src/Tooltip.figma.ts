// url=https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-51555&m=dev
// component=Tooltip

import figma from 'figma';

const label = figma.selectedInstance.getString('Tooltip');
const position = figma.selectedInstance.getEnum('Arrow Position', {
    Top: 'bottom',
    Bottom: 'top',
    Left: 'right',
    Right: 'left',
});
const withArrow = figma.selectedInstance.getBoolean('With Arrow');

export default {
    id: 'Tooltip',
    imports: ["import { Tooltip } from '@coveord/plasma-mantine';"],
    example: figma.code`<Tooltip${figma.helpers.react.renderProp('label', label)}${figma.helpers.react.renderProp(
        'position',
        position,
    )}${figma.helpers.react.renderProp('withArrow', withArrow)}/>`,
    metadata: {nestable: true},
};
