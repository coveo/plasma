// url=https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-51218&m=dev
// component=Image

import figma from 'figma';

const h = figma.selectedInstance.getEnum('Size', {
    Thumb: 16,
    Medium: 48,
    Large: 134,
});

export default {
    id: 'Image',
    imports: ["import { Image } from '@coveord/plasma-mantine';"],
    example: figma.code`<Image${figma.helpers.react.renderProp(
        'h',
        h,
    )}${figma.helpers.react.renderProp('w', h)} src={'SVGImage'}/>`,
    metadata: {nestable: true},
};
