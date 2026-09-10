// url=https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-51156
// component=SegmentedControl

import figma from 'figma';

export default {
    id: 'SegmentedControl',
    imports: ["import { SegmentedControl } from '@coveord/plasma-mantine';"],
    example: figma.code`<SegmentedControl data={[
        { value: 'one', label: 'First' },
        { value: 'two', label: 'Second', disabled: true },
        { value: 'three', label: 'Label' },
    ]}/>`,
};
