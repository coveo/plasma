// url=https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=2420-13252
// component=Anchor

import figma from 'figma';

const label = figma.selectedInstance.getString('Label');
const size = figma.selectedInstance.getEnum('Size', {
    xs: 'xs',
});

export default {
    id: 'Anchor',
    imports: ["import { Anchor } from '@coveord/plasma-mantine';"],
    example: figma.code`<Anchor${figma.helpers.react.renderProp('size', size)} href="/destination-link">
                ${figma.helpers.react.renderChildren(label)}
            </Anchor>`,
    metadata: {nestable: true},
};
