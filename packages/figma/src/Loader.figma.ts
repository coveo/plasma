// url=https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=2266-12188
// component=Loader

import figma from 'figma';

const size = figma.selectedInstance.getEnum('Size', {
    sm: 'sm',
    lg: 'lg',
});

export default {
    id: 'Loader',
    imports: ["import { Loader } from '@coveord/plasma-mantine';"],
    example: figma.code`<Loader${figma.helpers.react.renderProp('size', size)}/>`,
    metadata: {nestable: true},
};
