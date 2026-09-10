// url=https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-51197
// component=Facet

import figma from 'figma';

const title = figma.selectedInstance.getString('Title');

export default {
    id: 'Facet',
    imports: ["import { Facet } from '@coveord/plasma-mantine';"],
    example: figma.code`<Facet${figma.helpers.react.renderProp('title', title)} data={[
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
    ]}/>`,
    metadata: {nestable: true},
};
