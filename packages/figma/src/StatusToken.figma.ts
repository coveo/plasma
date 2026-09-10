// url=https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-51632
// component=StatusToken

import figma from 'figma';

const variant = figma.selectedInstance.getEnum('Variant', {
    Success: 'success',
    Caution: 'caution',
    Error: 'error',
    Disabled: 'disabled',
    Waiting: 'waiting',
    Edited: 'edited',
});
const size = figma.selectedInstance.getEnum('Size', {
    sm: 'sm',
    lg: 'lg',
});

export default {
    id: 'StatusToken',
    imports: ["import { StatusToken } from '@coveord/plasma-mantine';"],
    example: figma.code`<StatusToken${figma.helpers.react.renderProp(
        'variant',
        variant,
    )}${figma.helpers.react.renderProp('size', size)}/>`,
    metadata: {nestable: true},
};
