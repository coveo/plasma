// url=https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=2640-127&m=dev
// component=Skeleton

import figma from 'figma';

// Branch per variant combination.

let template;
if (figma.selectedInstance.getPropertyValue('Variant') === 'Circle') {
    template = {
        id: 'Skeleton',
        imports: ["import { Skeleton } from '@coveord/plasma-mantine';"],
        example: figma.code`<Skeleton circle height={16}/>`,
        metadata: {nestable: true},
    };
} else {
    template = {
        id: 'Skeleton',
        imports: ["import { Skeleton } from '@coveord/plasma-mantine';"],
        example: figma.code`<Skeleton height={16} width={320}/>`,
        metadata: {nestable: true},
    };
}

export default template;
