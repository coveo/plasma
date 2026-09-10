// url=https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-51247
// component=Slider

import figma from 'figma';

const disabled = figma.selectedInstance.getEnum('State', {
    Disabled: true,
});
const labelAlwaysOn = figma.selectedInstance.getEnum('State', {
    LabelAlwaysOn: true,
});
const withMarks = figma.selectedInstance.getBoolean('With Marks', {
    true: figma.helpers.react.array([
        {
            $value: {value: 25, label: '25%'},
            $type: 'object',
            value: 25,
            label: '25%',
        },
        {
            $value: {value: 50, label: '50%'},
            $type: 'object',
            value: 50,
            label: '50%',
        },
        {
            $value: {value: 75, label: '75%'},
            $type: 'object',
            value: 75,
            label: '75%',
        },
    ]),
});

export default {
    id: 'Slider',
    imports: ["import { Slider } from '@coveord/plasma-mantine';"],
    example: figma.code`<Slider${figma.helpers.react.renderProp(
        'labelAlwaysOn',
        labelAlwaysOn,
    )}${figma.helpers.react.renderProp('disabled', disabled)}${figma.helpers.react.renderProp('marks', withMarks)}/>`,
    metadata: {nestable: true},
};
