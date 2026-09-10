// url=https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-51177
// component=Progress

import figma from 'figma';

const color = figma.selectedInstance.getEnum('Semantic', {
    Info: 'var(--mantine-primary-color-filled)',
    Success: 'success',
    Caution: 'yellow',
    Error: 'red',
});

export default {
    id: 'Progress',
    imports: ["import { Progress } from '@coveord/plasma-mantine';"],
    example: figma.code`<Progress value={50} w={300}${figma.helpers.react.renderProp('color', color)}/>`,
    metadata: {nestable: true},
};
